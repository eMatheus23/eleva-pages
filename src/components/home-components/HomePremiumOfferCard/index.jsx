import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

// Importação da estilização comum a todas as homes
import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';

export const HomePremiumOfferCard = ({ extraMarginBottom }) => (
  <Container extraMarginBottom={extraMarginBottom}>
    <ContentWrapper>
      <div className="card">
        <section>
          <h2>SEJA PREMIUM</h2>
          <p>
            E acesse TODos OS MATERIAIS DA
            <br />
            PLATAFORMA DE CONTEÚDOS e ganhe vantagens
          </p>

          <Link to="/plans">QUERO SER PREMIUM</Link>
        </section>

        <div className="filter-black" />
      </div>
    </ContentWrapper>
  </Container>
);

HomePremiumOfferCard.propTypes = {
  extraMarginBottom: PropTypes.bool,
};

HomePremiumOfferCard.defaultProps = {
  extraMarginBottom: false,
};

export default HomePremiumOfferCard;
