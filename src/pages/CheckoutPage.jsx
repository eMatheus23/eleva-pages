import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';

import logoElevagroFooter from '../images/logos/marca-footer.svg';

// Components
import AnnualOfferCard from '../components/cards/AnnualOffer';
import ProductCheckout from '../components/cards/ProductCheckout';
import PaymentOptionsCard from '../components/cards/PaymentOptions';

export default function CheckoutPage(props) {
  document.title = 'Elevagro | Checkout';

  const [productsInCart, setProductsInCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Plataforma Elevagro',
      subscription: 'mensal',
      discription: 'Assinatura Mensal Elevagro',
      price_original: '265,00',
      price: '189,00',
      discount: '35%',
    },
    {
      id: 2,
      name: 'Plataforma Elevagro',
      subscription: 'semestral',
      discription: 'Assinatura Semestral Elevagro com valor promocional',
      price_original: '265,00',
      price: '189,00',
      discount: '35%',
    },
    {
      id: 3,
      name: 'Plataforma Elevagro',
      subscription: 'anual',
      discription: 'Assinatura Anual Elevagro com valor promocional',
      price_original: '265,00',
      price: '239,00',
      discount: '35%',
    },
  ]);
  const [chosenPlan, setChosenPlan] = useState('');
  const [offerActive, setOfferActive] = useState(false);

  useEffect(() => {
    setProductsInCart(props.location.state[0]);

    const plan = props.location.state[0].filter(product => product.subscription )
    
    plan && setChosenPlan(plan[0].subscription)

    plan[0].subscription === 'semestral' && setOfferActive(true)
  }, []);

  function deleteProduct(id) {
    setProductsInCart(
      productsInCart.filter((product) => {
        if (product.id === id) {
          return false;
        }

        return true;
      })
    );
  }

  function switchPlan() {
    if (chosenPlan === 'semestral') {
      setChosenPlan('anual')
      renderPlan('anual')
    } else if (chosenPlan === 'anual') {
     setChosenPlan('semestral')
     renderPlan('semestral')
    }
  }

  function renderPlan(plan) {
    // Procura o plano anual no array e guarda em uma variável
    const anual = products.filter(
      (product) => product.subscription === plan
    );

    // Coloca o cart em uma variável temporária
    var temporaryCart = productsInCart;

    // Se o carrinho não estiver vazio
    if (productsInCart) {
      // Procura o index de outros planos no cart
      const cartIndex = temporaryCart.findIndex(
        (product) => product.subscription !== plan
      );

      // Se for encontrado algum plano, ele é excluído do cart
      if (cartIndex >= 0) {
        temporaryCart.splice(cartIndex, 1);
      }
    }

    // Adiciona o plano escolhido ao carrinho temporário
    temporaryCart.push(anual);

    // setProductsInCart(temporaryCart);
    setProductsInCart(temporaryCart[0]);
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
            products={productsInCart}
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
                <strong>189</strong>,00
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
