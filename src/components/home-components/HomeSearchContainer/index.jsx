import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cardDetail from '../../../assets/images/other/card-detail-02.svg';

import CardDetail from '../../../assets/images/other/card-detail.svg';
import PremiumCardImg from '../../../assets/images/mockups/home-trilhas/person-in-blue-shirt-wearing-black-round-analog-watch-3747106.png';

// Components
import SearchInput from '../../SearchInput';

import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';
import { Container, NavCardContainer, BannerContainer } from './styles';

export const NavCard = ({ children, linkTo, backgroundImg }) => (
  <NavCardContainer className="track-card" backgroundImg={backgroundImg}>
    <div className="text">
      {children}

      <Link to={linkTo}>Acesse</Link>
    </div>

    <img src={cardDetail} className="green-chevron" alt="Hero" />
    <div className="filter" />
  </NavCardContainer>
);

NavCard.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export const BannerCard = ({ children, linkTo }) => (
  <BannerContainer>
    <div className="text__container">
      {children}
      <Link to={linkTo}>Saiba mais</Link>
      <img src={CardDetail} alt="" />
      <div className="triangle" />
      <div className="filter" />
    </div>

    <img src={PremiumCardImg} alt="" />
  </BannerContainer>
);

BannerCard.propTypes = {
  children: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
};

const HomeSearchContainer = ({ inputPlaceholder, children }) => {
  return (
    <Container>
      <ContentWrapper>
        <section className="search-section">
          <SearchInput placeholder={inputPlaceholder} />

          <div className="sugestions">
            <p>Sugestões:</p>
            <button type="button">SOJA</button>
            <button type="button">DOENÇAS</button>
            <button type="button">SEMENTES</button>
            <button type="button">NUTRIÇÃO</button>
            <button type="button">DANINHAS</button>
            <button type="button">SOLOS</button>
            <button type="button">GESTÃO</button>
            <button type="button">FINANÇAS</button>
          </div>
        </section>

        <aside className="cards__container">{children}</aside>
      </ContentWrapper>
    </Container>
  );
};

HomeSearchContainer.propTypes = {
  children: PropTypes.node.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
};

export default HomeSearchContainer;
