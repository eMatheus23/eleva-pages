import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';

import logoElevagroFooter from '../assets/images/logos/marca-elevagro.svg';

// Components
import AnnualOfferCard from '../components/cards/AnnualOffer';
import PremiumOfferCard from '../components/cards/PremiumOffer';
import ProductCheckout from '../components/cards/ProductCheckout';
import PaymentOptionsCard from '../components/cards/PaymentOptions';
import CreateAccountCard from '../components/cards/create-account/CreateAccount';

// Data and functions
import products from '../data/products';
import addToCart, { deleteOtherPlans } from '../functions/addToCart';
import currencyFormat from '../data/currency-format';

export default function CheckoutPage() {
  document.title = 'Elevagro | Checkout';

  const [productsInCart, setProductsInCart] = useState([]);
  const [offerActive, setOfferActive] = useState(false);
  const [couponAplied, setCouponAplied] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  const history = useHistory();
  const cart = JSON.parse(sessionStorage.getItem('@elevagro-app/cart')); // Busca os produtos no carrinho

  function cartSumFunction() {
    const sum = cart
      .map((product) => product.price)
      .reduce((prev, curr) => prev + curr, 0);

    if (sum < 0) {
      return 0;
    }

    return sum;
  }

  const cartSum = cartSumFunction();

  const cartSumDecimals = Math.round((cartSum % Math.floor(cartSum)) * 100);

  useEffect(() => {
    setIsLoggedIn(
      JSON.parse(
        sessionStorage.getItem('@elevagro-app/viewer-status|is-logged-in')
      )
    );
    setIsPremium(
      JSON.parse(
        sessionStorage.getItem('@elevagro-app/viewer-status|is-premium')
      )
    );

    // Se o carrinho estiver vazio, retorna para a homepage
    if (!cart | (cart.length === 0)) {
      return history.push('/');
    }

    setProductsInCart(cart);

    // Procura cupons no carrinho
    productsInCart.filter((product) => {
      if (product.type === 'coupon') {
        return setCouponAplied(true);
      }
      return false;
    });

    // Procura os planos premium no carrinho
    const plan = cart.filter((product) => {
      if (product.type === 'premium-subscription') {
        return product.subscription;
      }
      return false;
    });

    // Se existir algum, ele seta na const ChosenPlan
    if (plan.length !== 0) {
      plan[0].subscription === 'semestral' && setOfferActive(true);
    }
  }, []);

  function deleteProduct(id) {
    console.log('Cheguei');

    var temporaryCart = productsInCart;

    // Procura o index de outros planos no cart
    const cartIndex = temporaryCart.findIndex((product) => product.id === id);

    if (cartIndex >= 0) {
      temporaryCart.splice(cartIndex, 1);
    }

    sessionStorage.setItem('@elevagro-app/cart', JSON.stringify(temporaryCart));

    setProductsInCart([...temporaryCart]);

    if (!productsInCart | (productsInCart.length === 0)) {
      return history.push('/');
    }
  }

  function switchPlan() {
    const planInCart = productsInCart.filter((product) => product.subscription);

    const semestral = products.filter(
      (product) => product.subscription === 'semestral'
    );

    const anual = products.filter(
      (product) => product.subscription === 'anual'
    );

    // Deleta todos os planos existentes no cart
    var temporaryCart = deleteOtherPlans(productsInCart);

    if (planInCart[0].subscription === 'semestral') {
      // Adiciona o plano anual ao sessionStorage
      addToCart(anual[0].id);

      // Adiciona o plano anual aos produtos do cart do component
      setProductsInCart([...temporaryCart, anual[0]]);
    } else if (planInCart[0].subscription === 'anual') {
      // Adiciona o plano semestral ao sessionStorage
      addToCart(semestral[0].id);

      // Adiciona o plano semestral aos produtos do cart do component
      setProductsInCart([...temporaryCart, semestral[0]]);
    }
  }

  function handleCoupon() {
    const code = document.getElementById('coupon-input').value.toUpperCase();
    const coupon = products.filter((product) => product.code === code);

    if (!code) {
      alert('Insira um cupom!');
      return;
    }

    if (!coupon) {
      alert('Cupom inválido!');
      return;
    }

    const couponInCart = productsInCart.find((product) => {
      if (product.type === 'coupon') {
        return true;
      }
      return false;
    });

    if (couponInCart) {
      alert('Já existe um cupom aplicado à esta compra!');
      return;
    }
    addToCart(coupon[0].id);
    setProductsInCart([...productsInCart, coupon[0]]);
    setCouponAplied(true);
  }

  function handleFinish() {
    console.log('Cheguei');
  }

  return (
    <div id='page-checkout'>
      <header>
        <Link to={'/'}>
          <img src={logoElevagroFooter} alt='Elevagro' />
        </Link>
      </header>

      <div className='content-wrapper'>
        <main>
          {isLoggedIn && (
            <PaymentOptionsCard
              accessPage={'/checkout/access'}
              billPage={'/checkout/bill'}
              cartSum={cartSum}
            />
          )}

          {!isLoggedIn && (
            <CreateAccountCard
              handleFinish={handleFinish}
              isInCheckout={true}
            />
          )}
        </main>

        <aside>
          <section className='checkout-cart'>
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              if (product.type !== 'coupon') {
                return (
                  <ProductCheckout
                    key={'produto_' + key}
                    deleteProduct={deleteProduct}
                    product={product}
                  />
                );
              }
              return false;
            })}

            <div className='checkout-discounts'>
              <h2>SEUS DESCONTOS</h2>
              {productsInCart.map((product, key) => {
                if (product.discount && product.subscription) {
                  return (
                    <h3 key={'discount_' + key}>
                      PREMIUM {product.subscription.toUpperCase()}: -
                      <span>
                        {(
                          product.price_original - product.price
                        ).toLocaleString('pt-BR', currencyFormat)}
                      </span>
                    </h3>
                  );
                }
                return <></>;
              })}
              {productsInCart.map((product, key) => {
                if (product.type === 'coupon') {
                  return (
                    <h3 key={'discount_' + key}>
                      {product.name}:&nbsp;
                      <span>
                        {product.price.toLocaleString('pt-BR', currencyFormat)}
                      </span>
                    </h3>
                  );
                }
                return <></>;
              })}
            </div>

            <div className='checkout-total'>
              <p>Total:</p>
              <h2 className='price-style helvetica'>
                <span>R$</span>
                <strong>{Math.floor(cartSum)}</strong>,
                {cartSumDecimals
                  .toLocaleString('pt-BR', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                  .slice(-2)}
              </h2>
            </div>

            {!couponAplied && (
              <div className='coupon-input'>
                <h3>Você tem cupom de desconto?</h3>
                <div className='input-container'>
                  <input
                    type='text'
                    placeholder='Digite aqui'
                    id='coupon-input'
                  />
                  <button type='button' onClick={handleCoupon}>
                    Aplicar
                  </button>
                </div>
              </div>
            )}
          </section>

          {offerActive && <AnnualOfferCard switchPlan={switchPlan} />}
          <PremiumOfferCard />
        </aside>
      </div>
    </div>
  );
}
