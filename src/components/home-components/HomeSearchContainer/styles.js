import styled from 'styled-components';

// Importa os break points já configurados
import breakPoints from '../../../styles/config/breakPoints';
import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';

export const Container = styled.article`
  display: flex;
  width: 100%;
  padding: 5rem 0 7rem;

  ${ContentWrapper} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .search-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    max-width: 85.8rem;

    @media screen and (max-width: 1500px) {
      width: 54%;
    }

    .sugestions {
      overflow-x: hidden;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 85.8rem;

      p {
        font: normal 1.3rem/1.6rem var(--font-primary);
        margin-right: 3vw;
      }

      button {
        padding: 0.3rem 1rem;
        border: 1px solid var(--color-background-secondary);
        border-radius: 1.6rem;
        background: none;
        font: normal 1.3rem/1.6rem var(--font-primary);

        & + button {
          margin-left: 0.4vw;
        }
      }
    }
  }

  aside.cards__container {
    display: flex;
    justify-content: space-evenly;
    width: 38%;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    ${ContentWrapper} {
      flex-direction: column;
      align-items: center;
    }

    .search-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .sugestions {
      margin-top: 1.5rem;
    }

    aside.cards__container {
      width: 100%;
      margin-top: 5rem;
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    aside.cards__container {
      flex-wrap: wrap;
    }
  }
`;

export const NavCardContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 43%;
  max-width: 26.9rem;
  height: 10.7rem;
  padding-right: 0;
  border-radius: 0.9rem;
  background: url(${p => p.backgroundImg}) no-repeat center top;
  background-size: cover;

  @media screen and (max-width: ${breakPoints.phone}) {
    & + & {
      margin-top: 1.5rem;
    }
  }

  .text {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 1.2rem 2rem 1.1rem 0;

    h4 {
      font: bold 2.5rem/2.6rem var(--font-primary);
      color: var(--color-text-white);
    }

    a {
      font: normal 1.4rem/1.4rem var(--font-primary);
      color: var(--color-primary);
    }

    img {
      position: absolute;
      right: 17rem;
      top: 0;
      height: 10.9rem;
    }
  }

  .green-chevron {
    z-index: +3;
    position: absolute;
    right: 17rem;
    top: 0;
    height: 10.7rem;
  }

  .filter {
    z-index: 2;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: min(17rem, 80%);
    background: #141414;
    opacity: 0.65;

    &::before {
      content: '';
      position: absolute;
      left: -2.6rem;
      top: 0;
      z-index: -1;
      height: 0;
      width: 0;
      border-left: 0rem solid transparent;
      border-right: 2.6rem solid #141414;
      border-bottom: 5.5rem solid transparent;
      border-top: 5.5rem solid transparent;
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    width: 100%;
    max-width: unset;
  }
`;

export const BannerContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 10.9rem;
  margin-left: 5rem;
  border-radius: 0.9rem;

  @media screen and (max-width: ${breakPoints.tablet}) {
    max-width: 85.8rem;
    margin: 0 auto;
  }

  .text__container {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    padding: 1.2rem min(2vw, 5rem) 1.1rem 0;

    h4 {
      font: bold 2.4rem/2.4rem var(--font-primary);
      color: var(--color-primary);
    }

    p {
      max-width: 31.7rem;
      font: normal 1.4rem/1.6rem var(--font-primary);
      color: var(--color-text-white);
    }

    a {
      font: bold 1.4rem/1.4rem var(--font-primary);
      color: var(--color-primary);
    }

    img {
      position: absolute;
      right: 36.7rem;
      top: 0;
      height: 10.9rem;
    }

    .triangle {
      position: absolute;
      right: 37rem;
      top: 0;
      z-index: -1;
      height: 0;
      width: 0;
      border-left: 0px solid transparent;
      border-right: 18px solid #141414;
      border-bottom: 55px solid transparent;
      border-top: 55px solid transparent;
      opacity: 0.65;
    }

    .filter {
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
      height: 10.9rem;
      width: 37rem;
      background: #141414;
      opacity: 0.65;
    }
  }

  > img {
    width: 100%;
    height: 100%;

    border-radius: 0.9rem;

    object-fit: cover;
  }
`;
