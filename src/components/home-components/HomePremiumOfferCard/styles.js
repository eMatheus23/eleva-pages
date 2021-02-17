import styled from 'styled-components/macro';

import BecomePremiumImg from '../../../assets/images/mockups/home-trilhas/ballpen-blur-close-up-computer-461077.png';

// Importa os break points já configurados
import breakPoints from '../../../styles/config/breakPoints';

export const Container = styled.article`
  width: 100%;
  margin-bottom: 7rem;

  .card {
    overflow: hidden;
    position: relative;
    display: flex;
    width: 100%;
    min-height: 21.2rem;
    padding: 3.2rem 5.2rem 2rem 8rem;
    border-radius: 2rem;
    background: url(${BecomePremiumImg}) no-repeat 55% top;
    background-size: cover;
    color: var(--color-text-white);

    section {
      z-index: +2;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 90%;
      height: 100%;
      text-transform: uppercase;
      text-align: center;
    }

    h2 {
      font: normal 3.3rem/2.4rem var(--font-primary);
      color: var(--color-primary);
    }

    p {
      max-width: 70rem;
      font: normal 2rem/2.4rem var(--font-primary);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85%;
      max-width: 29rem;
      height: 3.8rem;
      border-radius: 2.3rem;
      background: var(--color-primary);
      font: normal 1.8rem/2.2rem var(--font-primary);
      color: #494949;
      text-decoration: none;

      &:hover {
        background: var(--color-primary-hover);
      }
    }

    .filter-black {
      position: absolute;
      right: 0;
      top: 0;
      z-index: +1;
      height: 100%;
      width: 100%;
      background: #000000;
      opacity: 0.53;
    }

    img {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    .card {
      min-height: 35rem;
    }
  }
`;
