import React from 'react';
import PropTypes from 'prop-types';

import { Hero, ContentWrapper, HeroDesignDetails } from './styles';

import heroDetail from '../../assets/images/other/hero-detail.svg';

const HomeHero = ({ background, children, justify }) => {
  return (
    <Hero background={background} justify={justify}>
      <ContentWrapper>
        <div className="page-title">{children}</div>

        <HeroDesignDetails>
          <img src={heroDetail} className="green-chevron" alt="Hero" />
          <div className="triangle" />
          <div className="filter" />
        </HeroDesignDetails>
      </ContentWrapper>
    </Hero>
  );
};

HomeHero.propTypes = {
  background: PropTypes.string.isRequired,
  justify: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HomeHero;
