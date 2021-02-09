import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';
import { Hero, HeroDesignDetails } from './styles';

import heroDetail from '../../../assets/images/other/hero-detail.svg';

const HomeHero = ({ background, children, justify }) => {
  return (
    <Hero background={background} justify={justify}>
      <ContentWrapper>
        <div className="page-title">{children}</div>

        <HeroDesignDetails>
          <div className="filter">
            <img src={heroDetail} className="green-chevron" alt="Hero" />
          </div>
        </HeroDesignDetails>

        <div className="full-width__filter" />
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