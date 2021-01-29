import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { CarouselButton, Container } from './styles';

const Carousel = ({ children, responsive, ...rest }) => {
  // const responsiveCourse = {
  //   0: { items: 4 },
  //   1250: { items: 5 },
  //   1530: { items: 5 },
  // };

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
        autoPlay
        autoPlayInterval={3000}
        {...rest}
      >
        {children}
      </AliceCarousel>
    </Container>
  );
};

export default Carousel;
