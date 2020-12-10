import React, { useState } from 'react';

// CSS
import '../../styles/components/cards/premium-offer.css';

// Images
import ilustrationImg from '../../assets/images/ilustrations/annual-premium-offer.png';
import addCart from '../../assets/images/icons/add-cart.svg';

// Data
import products from '../../data/products';
import currencyFormat from '../../data/currency-format';

// Components
import ButtonRounded from '../Buttons';

export default function PremiumOfferCard(props) {
  const [closed, setClosed] = useState(false);
  const [semestralView, setSemestralView] = useState(true);
  const anualSubscription = products.filter((product) => {
    if (product.subscription) {
      return product.subscription === 'anual';
    }
    return false;
  });

  const { price_original, price, discount } = anualSubscription[0];
  const priceDecimals = Math.round((price % Math.floor(price)) * 100);

  function handleClick() {
    // Envia para o componente pai, a chamada da função que muda para o plano anual
    props.switchPlan();

    if (semestralView) {
      return setSemestralView(false);
    }

    setSemestralView(true);
  }

  return (
    <div
      className='premium-offer-card'
      style={{ display: closed ? 'none' : 'flex' }}
    >
      <div className={`semestral-view ${semestralView && 'active'}`}>
        <span
          onClick={() => {
            setClosed(true);
          }}
        >
          x
        </span>
        <div className='card-wrapper'>
          <aside>
            <p>
              Os cursos Elevagro são melhores com o apoio completo da plataforma
              Elevagro.
            </p>
            <img src={ilustrationImg} alt='Contrate o plano Premium anual' />
          </aside>
          <main>
            <p>
              Torne-se um associado Premium por um ano com{' '}
              <span>{discount}%</span> de desconto.
            </p>
            <p>
              De{' '}
              <span>
                {price_original.toLocaleString('pt-BR', currencyFormat)}
              </span>
            </p>
            <h2 className='price-style helvetica'>
              <span className='for'>Por</span>
              <span>R$:</span>
              <strong>{Math.floor(price)}</strong>,
              {priceDecimals
                .toLocaleString('pt-BR', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
                .slice(-2)}
            </h2>
            <ButtonRounded
              onClick={handleClick}
              buttonStyle='alternative'
              width='26.5rem'
            >
              Adicionar assinatura
              <img src={addCart} alt='' />
            </ButtonRounded>
            <p>Promoção válida apenas para esta transação.</p>
          </main>
        </div>
      </div>
    </div>
  );
}
