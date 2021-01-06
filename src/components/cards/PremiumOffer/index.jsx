import React, { useState } from 'react';

// CSS
import './styles.css';

// Images
import ilustrationImg from '../../../assets/images/ilustrations/annual-premium-offer.png';
import addCart from '../../../assets/images/icons/add-cart.svg';

// Data
import products from '../../../data/products';
import currencyFormat from '../../../data/currency-format';

// Components
import ButtonRounded from '../../Buttons';

const PremiumOfferCard = props => {
  const [closed, setClosed] = useState(false);
  const anualSubscription = products.filter(product => {
    if (product.subscription) {
      return product.subscription === 'anual';
    }
    return false;
  });

  const { price_original, price, promo_discount } = anualSubscription[0];
  const priceDecimals = Math.round((price % Math.floor(price)) * 100);

  function handleClick() {
    // Envia para o componente pai, a chamada da função que muda para o plano anual
    props.addAnnualPlan();

    setClosed(true);
  }

  return (
    <div
      className="premium-offer-card"
      style={{ display: closed ? 'none' : 'flex' }}
    >
      <div className="card-wrapper">
        <span
          role="button"
          onClick={() => {
            setClosed(true);
          }}
          tabIndex={0}
        >
          x
        </span>
        <div className="card">
          <aside>
            <p>
              Os cursos Elevagro são melhores com o apoio completo da plataforma
              Elevagro.
            </p>
            <img src={ilustrationImg} alt="Contrate o plano Premium anual" />
          </aside>
          <main>
            <p>
              Torne-se um associado Premium por um ano com
              <> </>
              <span>
                {promo_discount}
                <>%</>
              </span>
              <> </>
              de desconto.
            </p>
            <p>
              De
              <> </>
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
            <ButtonRounded onClick={handleClick} buttonStyle="alternative">
              Adicionar assinatura
              <img src={addCart} alt="" />
            </ButtonRounded>
            <p>Promoção válida apenas para esta transação.</p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PremiumOfferCard;
