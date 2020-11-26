import React, {useState} from 'react';
// import { Link } from 'react-router-dom';

import '../../styles/components/cards/annual-offer.css'

import ilustrationImg from '../../images/ilustrations/annual-premium-offer.png'

export default function AnnualOfferCard() {

  const [closed, setClosed] = useState(false)

  return (
    <div className="anual-offer-card" style={{ display: closed ? 'none' : 'flex'}}>
      <span onClick={() => { setClosed(true) }}>
        x
      </span>
      <div className="card-wrapper">
        <aside>
          <h3>
            Torne-se um associado Premium por um ano e <span>pague menos.</span> 
          </h3>
          <img src={ilustrationImg} alt="Contrate o plano Premium anual"/>
        </aside>
        <main>
          <h3>+ 5% de desc.</h3>
          <p>De <span>R$: 265,00</span></p>
          <h2 className="price-style helvetica">
            <span className="for">Por</span>
            <span>R$:</span>
            <strong>239</strong>
            ,00
          </h2>
          <button type="button">Trocar para Anual</button>
        </main>
      </div>
      <p>Promoção válida apenas para esta transação.</p>
    </div>
  ) 
}