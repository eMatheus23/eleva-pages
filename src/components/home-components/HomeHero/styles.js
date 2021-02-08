import styled, { css } from 'styled-components/macro';

// Importa os break points já configurados
import breakPoints from '../../../styles/config/breakPoints';

import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';

export const Hero = styled.section`
  position: relative;

  width: 100%;
  height: 36.1rem;

  margin: 0 auto;
  margin-top: 6.5rem;

  background: url(${p => p.background}) no-repeat 80% top;
  background-size: cover;

  ${ContentWrapper} {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .page-title {
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 4rem 0 6rem;

    ${p =>
      p.justify === 'center' &&
      css`
        justify-content: center;
        h1 {
          margin-bottom: 1rem;
        }
      `}
  }

  aside {
    position: absolute;
    top: 0;
    right: 15rem;
    display: flex;
    width: 46.8rem;
    height: 100%;

    h3 {
      margin: auto;
      font: normal 38px/53px Montserrat;
      text-transform: uppercase;
      text-align: right;
      color: #ffffff;
      text-shadow: 0px 3px 6px #00000029;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    font: normal 2.2rem/2.2rem var(--font-primary);
    color: var(--color-text-white);

    img {
      width: 3.8rem;
      margin-right: 1rem;
    }
  }

  h2 {
    max-width: 45.7rem;
    font: normal 3.2rem/4.3rem var(--font-primary);
    color: var(--color-primary);
    text-transform: uppercase;
  }

  p {
    max-width: 45.7rem;
    font: normal 2rem/3rem var(--font-primary);
    color: var(--color-text-white);
  }

  // Para ser usado com media query no componente pai
  .small-screen-only {
    display: none;
  }

  .full-width__filter {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 0;
    display: none;
    height: 100%;
    width: 100%;
    border-right: 0.1rem solid #141414;
    background: #141414;
    opacity: 0.77;

    @media screen and (max-width: ${breakPoints.phone}) {
      display: block;
    }
  }
`;

export const HeroDesignDetails = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 50rem;
  height: 100%;

  .green-chevron {
    position: absolute;
    right: -8.7rem;
    top: 0;
    z-index: 5;
    height: 100%;
  }

  .filter {
    z-index: 4;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 120rem;
    border-right: 0.1rem solid #141414;
    background: #141414;
    opacity: 0.77;

    &::after {
      content: '';
      position: absolute;
      right: -10.2rem;
      top: 0;
      z-index: 4;
      height: 0;
      width: 0;
      border-left: 10.2rem solid #141414;
      border-right: 0rem solid transparent;
      border-bottom: 18rem solid transparent;
      border-top: 18rem solid transparent;
    }

    @media screen and (max-width: ${breakPoints.phone}) {
      display: none;
    }
  }
`;
