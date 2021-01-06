import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// CSS
import './styles.css';

import logoElevagroFooter from '../../assets/images/logos/marca-elevagro.svg';

// Components
import AcceptedCards from '../../components/cards/AcceptedCards';
import AnnualOfferCard from '../../components/cards/AnnualOffer';
import PremiumOfferCard from '../../components/cards/PremiumOffer';
import ProductCheckout from '../../components/cards/ProductCheckout';
import PaymentOptionsCard from '../../components/cards/PaymentOptions';
import CreateAccountCard from '../../components/cards/CreateAccount';

// Data and functions
import products from '../../data/products';
import addProductToCart from '../../services/AddProductToCart';
import currencyFormat from '../../data/currency-format';

const CheckoutPage = () => {
  document.title = 'Elevagro | Checkout';

  const history = useHistory();

  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem('@elevagro-app/cart')),
  );
  const [couponAplied, setCouponAplied] = useState(() => {
    // Procura cupons no carrinho
    productsInCart.filter(product => {
      if (product.type === 'coupon') {
        return true;
      }
      return false;
    });
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const checkIsLoggedIn = localStorage.getItem(
      '@elevagro-app/viewer-status|is-logged-in',
    );

    if (checkIsLoggedIn) {
      return JSON.parse(checkIsLoggedIn);
    }

    return false;
  });
  const [isPremium] = useState(() => {
    const checkIsPremium = localStorage.getItem(
      '@elevagro-app/viewer-status|is-premium',
    );

    if (checkIsPremium) {
      return JSON.parse(checkIsPremium);
    }

    return false;
  });
  const [semestralPlanInCart] = useState(() => {
    // Procura o plano premium semestral no carrinho
    productsInCart.filter(product => {
      if (
        product.type === 'premium-subscription' &&
        product.subscription === 'semestral'
      ) {
        return true;
      }
      return false;
    });
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    if (!productsInCart || productsInCart.length === 0) {
      return history.push('/');
    }

    return true;
  }, [productsInCart, history]);

  function cartSumFunction() {
    const sum = productsInCart
      .map(product => product.price)
      .reduce((prev, curr) => prev + curr, 0);

    if (sum < 0) {
      return 0;
    }

    return sum;
  }

  const promoDiscountSumFunction = () => {
    const sum = productsInCart
      .map(product => {
        if (product.promo_discount) {
          return product.price_original - product.price;
        }
        return false;
      })
      .reduce((prev, curr) => prev + curr, 0);

    return sum;
  };

  const promoDiscountSum = promoDiscountSumFunction();

  const cartSum = cartSumFunction();

  const cartSumDecimals = Math.round((cartSum % Math.floor(cartSum)) * 100);

  function deleteProduct(id) {
    const temporaryCart = productsInCart;

    // Procura o index de outros planos no cart
    const cartIndex = temporaryCart.findIndex(product => product.id === id);

    if (cartIndex >= 0) {
      temporaryCart.splice(cartIndex, 1);
    }

    localStorage.setItem('@elevagro-app/cart', JSON.stringify(temporaryCart));

    if (!productsInCart || productsInCart.length === 0) {
      return history.push('/');
    }

    return setProductsInCart([...temporaryCart]);
  }

  function switchPlan() {
    const [inCart] = productsInCart.filter(product => product.subscription);

    const [semestral] = products.filter(
      product => product.subscription === 'semestral',
    );

    const [anual] = products.filter(
      product => product.subscription === 'anual',
    );

    if (inCart.subscription === 'semestral') {
      // Adiciona o plano anual ao localStorage
      const temporaryCart = addProductToCart({ productId: anual.id });

      // Adiciona o plano anual aos produtos do cart do component
      setProductsInCart(temporaryCart);
    } else if (inCart.subscription === 'anual') {
      // Adiciona o plano semestral ao localStorage
      const temporaryCart = addProductToCart({ productId: semestral.id });

      // Adiciona o plano semestral aos produtos do cart do component
      setProductsInCart(temporaryCart);
    }
  }

  function addAnnualPlan() {
    const [anual] = products.filter(
      product => product.subscription === 'anual',
    );

    addProductToCart({ productId: anual.id });

    setProductsInCart([...productsInCart, anual]);
  }

  function handleCoupon() {
    const code = document.getElementById('coupon-input').value.toUpperCase();
    const [coupon] = products.filter(product => product.code === code);

    if (!code) {
      setInputError('Insira um cupom!');

      setTimeout(() => setInputError(''), 4000);
      return;
    }

    if (!coupon) {
      setInputError('Cupom inválido!');

      setTimeout(() => setInputError(''), 4000);
      return;
    }

    const couponInCart = productsInCart.find(product => {
      if (product.type === 'coupon') {
        return true;
      }
      return false;
    });

    if (couponInCart) {
      setInputError('Já existe um cupom aplicado à esta compra!');

      setTimeout(() => setInputError(''), 4000);
      return;
    }

    addProductToCart({ productId: coupon.id });
    setProductsInCart([...productsInCart, coupon]);
    setCouponAplied(true);
  }

  function sigupFinished() {
    setIsLoggedIn(true);
  }

  return (
    <div id="page-checkout">
      <header>
        <Link to="/">
          <img src={logoElevagroFooter} alt="Elevagro" />
        </Link>
      </header>

      <div className="content-wrapper">
        <main>
          {isLoggedIn && (
            <PaymentOptionsCard billPage="/checkout/bill" cartSum={cartSum} />
          )}

          {!isLoggedIn && (
            <CreateAccountCard sigupFinished={sigupFinished} isInCheckout />
          )}
        </main>

        <aside>
          <section className="checkout-cart">
            <h3>O seu pedido</h3>

            {productsInCart.map((product, key) => {
              if (product.type !== 'coupon') {
                return (
                  <ProductCheckout
                    key={`produto_${key}`}
                    deleteProduct={deleteProduct}
                    product={product}
                  />
                );
              }
              return false;
            })}

            {promoDiscountSum | couponAplied && (
              <div className="checkout-discounts">
                <h2>SEUS DESCONTOS</h2>

                {isPremium && (
                  <h3>
                    PREMIUM: -
                    <span>
                      {promoDiscountSum.toLocaleString('pt-BR', currencyFormat)}
                    </span>
                  </h3>
                )}

                {promoDiscountSum && (
                  <h3>
                    Promocional: -
                    <span>
                      {promoDiscountSum.toLocaleString('pt-BR', currencyFormat)}
                    </span>
                  </h3>
                )}

                {productsInCart.map((product, key) => {
                  if (product.type === 'coupon') {
                    return (
                      <h3 key={`discount_${key}`}>
                        {product.name}
                        <>: -</>
                        <span>
                          {Math.abs(product.price).toLocaleString(
                            'pt-BR',
                            currencyFormat,
                          )}
                        </span>
                      </h3>
                    );
                  }
                  return <></>;
                })}
              </div>
            )}

            <div className="checkout-total">
              <p>Total:</p>
              <h2 className="price-style helvetica">
                <span>R$</span>
                <strong>{Math.floor(cartSum)}</strong>
                <>,</>
                {cartSumDecimals
                  .toLocaleString('pt-BR', {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })
                  .slice(-2)}
              </h2>
            </div>

            {!couponAplied && (
              <div className="coupon-input">
                <h3>Você tem cupom de desconto?</h3>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    id="coupon-input"
                  />
                  <button type="button" onClick={handleCoupon}>
                    Aplicar
                  </button>
                </div>
                {inputError && <span>{inputError}</span>}
              </div>
            )}

            <AcceptedCards saveCardOptionActive={isLoggedIn} />
          </section>

          {semestralPlanInCart && !isPremium && (
            <AnnualOfferCard switchPlan={switchPlan} />
          )}
          {!semestralPlanInCart && !isPremium && (
            <PremiumOfferCard addAnnualPlan={addAnnualPlan} />
          )}
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
