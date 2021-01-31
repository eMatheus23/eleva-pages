import React from 'react';
import PropTypes from 'prop-types';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CarouselButton, Container } from './styles';

const Carousel = ({ children, responsive, ...rest }) => {
  const renderPrevButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronLeft size={30} />
      </CarouselButton>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronRight size={30} />
      </CarouselButton>
    );
  };

  return (
    <Container>
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        disableDotsControls
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        infinite
        // autoPlay
        // autoPlayInterval={3000}
        {...rest}
      >
        {children}
      </AliceCarousel>
    </Container>
  );
};

Carousel.propTypes = {
  responsive: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node,
};

Carousel.defaultProps = {
  children: <></>,
};

export default Carousel;
