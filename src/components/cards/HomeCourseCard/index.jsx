import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledCard, HoverContainer } from './styles';
// Icons
import cartIcon from '../../../assets/images/icons/cart-icon-03.svg';
import discountFlag from '../../../assets/images/flags/discount-flag.svg';
import discountLongFlag from '../../../assets/images/flags/discount-long-flag.svg';

// Utils
import formatValue from '../../../utils/formatValue';
import getDecimals from '../../../utils/getDecimals';

const HomeCourseCard = ({ viewerStatus, course }) => {
  const {
    cover_url,
    price_for_premium,
    price,
    original_price,
    title,
    category,
  } = course;

  // Define o preço do produto de acordo com o status do usuário
  const getPriceToViewer = () => {
    if (viewerStatus === 'premium') {
      return price_for_premium;
    }

    return price;
  };

  const priceToViewer = getPriceToViewer();

  return (
    <StyledCard viewerStatus={viewerStatus}>
      <div className="course-cover">
        <img src={cover_url} alt="" />

        <HoverContainer>
          <div className="hover-container__text">
            <h3>
              R$:
              <> </>
              <big>{Math.floor(price_for_premium)}</big>
              <>,</>
              {getDecimals(price_for_premium)}
            </h3>
            <p>
              Em até 10x de R$
              <strong>{Math.floor(price_for_premium / 10)}</strong>
              <>,</>
              {getDecimals(price_for_premium / 10)}
            </p>
          </div>

          <div className="filter" />

          <span className="discount-long-flag">
            <img src={discountLongFlag} alt="" />
            <p>Seja PREMIUM e pague:</p>
          </span>
        </HoverContainer>
      </div>

      <span className="discount-flag">
        <img src={discountFlag} alt="" />
        <p>
          {Math.round((1 - priceToViewer / original_price) * 100)}
          <>% OFF</>
        </p>
      </span>

      <main>
        <div>
          <h4>{category}</h4>
          <p>{title}</p>
        </div>

        <section className="price-section">
          <div>
            <span>
              De
              <> </>
              <del>{formatValue(original_price)}</del>
            </span>
            <h5>
              R$:
              <> </>
              <strong>{Math.floor(priceToViewer)}</strong>
              <>,</>
              {getDecimals(priceToViewer)}
            </h5>
            <p>
              10x
              <> </>
              {formatValue(priceToViewer / 10)}
            </p>
          </div>

          <button type="button" className="purchase-button">
            <img src={cartIcon} alt="" />
          </button>
        </section>
      </main>

      <div className="card-footer">
        <Link to="/course">Saiba mais</Link>
      </div>
    </StyledCard>
  );
};

HomeCourseCard.propTypes = {
  viewerStatus: PropTypes.string.isRequired,
  course: PropTypes.shape({
    cover_url: PropTypes.string.isRequired,
    price_for_premium: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    original_price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default HomeCourseCard;
