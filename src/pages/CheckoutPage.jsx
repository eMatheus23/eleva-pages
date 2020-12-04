import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

//CSS
import '../styles/pages/checkout-page.css';

import logoElevagroFooter from '../images/logos/marca-elevagro.svg';

// Components
import AnnualOfferCard from '../components/cards/AnnualOffer';
import ProductCheckout from '../components/cards/ProductCheckout';
import PaymentOptionsCard from '../components/cards/PaymentOptions';

// Data and functions
import products from '../data/products';
import addToCart from '../functions/addPlanToCart';

export default function CheckoutPage() {
  document.title = 'Elevagro | Checkout';

  const history = useHistory();
  const [productsInCart, setProductsInCart] = useState([]);
  const [offerActive, setOfferActive] = useState(false);
  const cart = JSON.parse(localStorage.getItem('@elevagro-app/cart'));   // Busca os produtos no carrinho
  
  const cartSum = cart[0]
    .map((product) => product.price)
    .reduce((prev, curr) => prev + curr, 0);

  const discountSum = cart[0]
    .map((product) => product.discount)
    .reduce((prev, curr) => prev + curr, 0);
  
  const cartSumDecimals = Math.round((cartSum % Math.floor(cartSum)) * 100)

  useEffect(() => {
    // Se o carrinho estiver vazio, retorna para a homepage
    if (!cart | (cart.length === 0)) {
      return history.push('/');
    }

    setProductsInCart(cart[0]);

    // Procura os planos premium no carrinho
    const plan = cart[0].filter((product) => product.subscription);

    // Se existir algum, ele seta na const ChosenPlan
    plan && plan[0].subscription === 'semestral' && setOfferActive(true);
  }, []);

  function deleteProduct(id) {
    var temporaryCart = cart;

    // Procura o index de outros planos no cart
    const cartIndex = temporaryCart.findIndex((product) => product.id !== id);

    if (cartIndex >= 0) {
      temporaryCart.splice(cartIndex, 1);
    }

    localStorage.setItem('@elevagro-app/cart', JSON.stringify(temporaryCart));

    setProductsInCart(temporaryCart);

    if (!cart | (cart.length === 0)) {
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

    // Troca o plano
    if (planInCart[0].subscription === 'semestral') {
      addToCart('anual');
      setProductsInCart(anual);
    } else if (planInCart[0].subscription === 'anual') {
      addToCart('semestral');
      setProductsInCart(semestral);
    }
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
          <PaymentOptionsCard
            accessPage={'/checkout/access'}
            billPage={'/signup/checkout/bill'}
            cartSum={cartSum}
          />
        </main>

        <aside>
          <section className='checkout-cart'>
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              return (
                <ProductCheckout
                  key={'produto_' + key}
                  deleteProduct={deleteProduct}
                  product={product}
                />
              );
            })}

            <div className='checkout-discounts'>
              <h2>SEUS DESCONTOS</h2>
              <h3>
                PREMIUM SEMESTRAL: - <span>R$ 68.00</span>
              </h3>
            </div>

            <div className='checkout-total'>
              <p>Total:</p>
              <h2 className='price-style helvetica'>
                <span>R$</span>
                <strong>{Math.floor(cartSum)}</strong>,
                {cartSumDecimals}
              </h2>
            </div>

            <div className='coupon-input'>
              <h3>Você tem cupom de desconto?</h3>
              <div className='input-container'>
                <input type='text' placeholder='Digite aqui' />
                <button type='button'>Aplicar</button>
              </div>
            </div>
          </section>

          {offerActive && <AnnualOfferCard switchPlan={switchPlan} />}
        </aside>
      </div>
    </div>
  );
}
