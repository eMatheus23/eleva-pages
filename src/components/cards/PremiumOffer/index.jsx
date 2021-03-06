import React, { useState } from 'react';
import PropTypes from 'prop-types';

// CSS
import './styles.css';

// Images
import ilustrationImg from '../../../assets/images/ilustrations/annual-premium-offer.png';
import addCart from '../../../assets/images/icons/add-cart.svg';

// Data
import products from '../../../data/products';

// Utils
import getDecimals from '../../../utils/getDecimals';
import formatValue from '../../../utils/formatValue';

// Components
import ButtonRounded from '../../Buttons';

const PremiumOfferCard = ({ addAnnualPlan }) => {
  const [closed, setClosed] = useState(false);
  const anualSubscription = products.filter(product => {
    if (product.subscription) {
      return product.subscription === 'anual';
    }
    return false;
  });

  const { price_original, price, promo_discount } = anualSubscription[0];

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
              <span>{formatValue(price_original)}</span>
            </p>
            <h2 className="price-style helvetica">
              <span className="for">Por</span>

              <span>R$:</span>

              <strong>{Math.floor(price)}</strong>

              <>,</>

              {getDecimals(price)}
            </h2>
            <ButtonRounded
              onClick={() => {
                addAnnualPlan();

                setClosed(true);
              }}
              buttonStyle="alternative"
            >
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

PremiumOfferCard.propTypes = {
  addAnnualPlan: PropTypes.func.isRequired,
};

export default PremiumOfferCard;
