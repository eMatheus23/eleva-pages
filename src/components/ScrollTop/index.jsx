import React, { useState } from 'react';

import { FiArrowUpCircle } from 'react-icons/fi';

import { StyledButton } from './styles';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const reference = window.innerHeight - 300;

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > reference) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= reference) {
      setShowScroll(false);
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledButton
      type="button"
      className="fade-in"
      style={{ display: showScroll ? 'flex' : 'none' }}
      onClick={scrollTop}
    >
      <span>Voltar ao topo</span>

      <FiArrowUpCircle size={40} />
    </StyledButton>
  );
};

export default ScrollTop;
