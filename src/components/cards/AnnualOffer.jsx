import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import '../../styles/components/cards/annual-offer.css';

import ilustrationImg from '../../assets/images/ilustrations/annual-premium-offer.png';

export default function AnnualOfferCard(props) {
  const [closed, setClosed] = useState(false);
  const [semestralView, setSemestralView] = useState(true);

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
      className='anual-offer-card'
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
            <h3>
              Torne-se um associado Premium por um ano e{' '}
              <span>pague menos.</span>
            </h3>
            <img src={ilustrationImg} alt='Contrate o plano Premium anual' />
          </aside>
          <main>
            <h3>+ 5% de desc.</h3>
            <p>
              De <span>R$: 265,00</span>
            </p>
            <h2 className='price-style helvetica'>
              <span className='for'>Por</span>
              <span>R$:</span>
              <strong>239</strong>
              ,00
            </h2>
            <button type='button' onClick={handleClick}>
              Trocar para Anual
            </button>
          </main>
        </div>
        <p>Promoção válida apenas para esta transação.</p>
      </div>

      <div className={`anual-view ${!semestralView && 'active'}`}>
        <button type='button' onClick={handleClick}>
          Voltar ao plano semestral
        </button>
      </div>
    </div>
  );
}
