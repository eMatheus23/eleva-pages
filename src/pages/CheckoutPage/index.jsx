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

// Data
import products from '../../data/products';
import coupons from '../../data/coupons.json';

// Services
import addProductToCart from '../../services/AddProductToCart';
import addCouponToCart from '../../services/AddCouponToCart';
import getCartSum from '../../services/getCartSum';
import getCartPremiumSum from '../../services/getPremiumCartSum';
import getCartDiscountSum from '../../services/getCartDiscountSum';
import getCartPremiumDiscountSum from '../../services/getCartPremiumDiscountSum';
import getViewerStatus from '../../services/getViewerStatus';

// Utils
import getDecimals from '../../utils/getDecimals';
import formatValue from '../../utils/formatValue';

const CheckoutPage = () => {
  document.title = 'Checkout | Elevagro';

  const history = useHistory();

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

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

  const cartDiscountSum = getCartDiscountSum(productsInCart);
  const cartPremiumDiscountSum = getCartPremiumDiscountSum(productsInCart);

  const getCartSumToViewer = () => {
    const cartSum = getCartSum(productsInCart);
    const cartSumForPremium = getCartPremiumSum(productsInCart);

    if (viewerStatus === 'premium') {
      return cartSumForPremium;
    }

    return cartSum;
  };

  const cartSumToViewer = getCartSumToViewer();

  useEffect(() => {
    if (!productsInCart || productsInCart.length === 0) {
      return history.push('/');
    }

    return true;
  }, [productsInCart, history]);

  const deleteProduct = id => {
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
  };

  const switchPlan = () => {
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
  };

  const addAnnualPlan = () => {
    const [anual] = products.filter(
      product => product.subscription === 'anual',
    );

    addProductToCart({ productId: anual.id });

    setProductsInCart([...productsInCart, anual]);
  };

  const handleCoupon = () => {
    const code = document.getElementById('coupon-input').value.toUpperCase();
    const [coupon] = coupons.filter(c => c.code === code);

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

    addCouponToCart({ couponId: coupon.id });
    setProductsInCart([...productsInCart, coupon]);
    setCouponAplied(true);
  };

  const sigupFinished = () => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('free');
  };

  return (
    <div id="page-checkout">
      <header>
        <Link to="/">
          <img src={logoElevagroFooter} alt="Elevagro" />
        </Link>
      </header>

      <div className="content-wrapper">
        <main>
          {viewerStatus !== 'visit' && (
            <PaymentOptionsCard
              billPage="/checkout/bill"
              cartSum={cartSumToViewer}
            />
          )}

          {viewerStatus === 'visit' && (
            <CreateAccountCard sigupFinished={sigupFinished} isInCheckout />
          )}
        </main>

        <aside>
          <section className="checkout-cart">
            <h3>O seu pedido</h3>

            {productsInCart.map(product => {
              if (product.type !== 'coupon') {
                return (
                  <ProductCheckout
                    key={`produto_${product.id}`}
                    deleteProduct={deleteProduct}
                    product={product}
                    viewerStatus={viewerStatus}
                  />
                );
              }
              return false;
            })}

            {cartDiscountSum | couponAplied && (
              <div className="checkout-discounts">
                <h2>SEUS DESCONTOS</h2>

                {viewerStatus === 'premium' && (
                  <h3>
                    <>PREMIUM: -</>

                    <span>{formatValue(cartPremiumDiscountSum)}</span>
                  </h3>
                )}

                {cartDiscountSum && (
                  <h3>
                    <>Promocional: -</>

                    <span>{formatValue(cartDiscountSum)}</span>
                  </h3>
                )}

                {productsInCart.map(product => {
                  if (product.type === 'coupon') {
                    return (
                      <h3 key={`discount_${product.id}`}>
                        {product.name}
                        <>: -</>

                        <span>{formatValue(Math.abs(product.price))}</span>
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
                <strong>{Math.floor(cartSumToViewer)}</strong>
                <>,</>
                {getDecimals(cartSumToViewer)}
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

            <AcceptedCards saveCardOptionActive={viewerStatus !== 'visit'} />
          </section>

          {semestralPlanInCart && !viewerStatus === 'premium' && (
            <AnnualOfferCard switchPlan={switchPlan} />
          )}
          {!semestralPlanInCart && !viewerStatus === 'premium' && (
            <PremiumOfferCard addAnnualPlan={addAnnualPlan} />
          )}
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
