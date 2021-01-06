import React, { useState } from 'react';

// CSS
import './styles.css';

// Images
import ilustrationImg from '../../../assets/images/ilustrations/annual-premium-offer.png';

// Data
import products from '../../../data/products';
import currencyFormat from '../../../data/currency-format';

const AnnualOfferCard = props => {
  const [closed, setClosed] = useState(false);
  const [semestralView, setSemestralView] = useState(true);

  const { price_original, price, promo_discount } = products.filter(product => {
    if (product.subscription) {
      return product.subscription === 'anual';
    }
    return false;
  })[0];

  const { promo_discount: semestralDiscount } = products.filter(product => {
    if (product.subscription) {
      return product.subscription === 'semestral';
    }
    return false;
  })[0];

  const priceDecimals = Math.round((price % Math.floor(price)) * 100);

  function handleClick() {
    // Envia para o componente pai, a chamada da função que muda para o plano anual
    props.switchPlan();

    if (semestralView) {
      return setSemestralView(false);
    }

    return setSemestralView(true);
  }

  return (
    <div
      className="anual-offer-card"
      style={{ display: closed ? 'none' : 'flex' }}
    >
      <div className={`semestral-view ${semestralView && 'active'}`}>
        <span
          role="button"
          onClick={() => {
            setClosed(true);
          }}
          tabIndex={0}
        >
          x
        </span>
        <div className="card-wrapper">
          <aside>
            <h3>
              Torne-se um associado Premium por um ano e
              <span> pague menos.</span>
            </h3>
            <img src={ilustrationImg} alt="Contrate o plano Premium anual" />
          </aside>
          <main>
            <h3>
              <>+</>
              {promo_discount - semestralDiscount}
              <>% de desc.</>
            </h3>
            <p>
              De
              <span>
                {price_original.toLocaleString('pt-BR', currencyFormat)}
              </span>
            </p>
            <h2 className="price-style helvetica">
              <span className="for">Por</span>
              <span>R$:</span>
              <strong>{Math.floor(price)}</strong>
              <>,</>
              {priceDecimals
                .toLocaleString('pt-BR', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })
                .slice(-2)}
            </h2>
            <button type="button" onClick={handleClick}>
              Trocar para Anual
            </button>
          </main>
        </div>
        <p>Promoção válida apenas para esta transação.</p>
      </div>

      <div className={`anual-view ${!semestralView && 'active'}`}>
        <button type="button" onClick={handleClick}>
          Voltar ao plano semestral
        </button>
      </div>
    </div>
  );
};

export default AnnualOfferCard;
