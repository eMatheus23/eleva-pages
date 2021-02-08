import styled from 'styled-components/macro';
import { shade } from 'polished';

// Importa os break points já configurados
import breakPoints from '../config/breakPoints';

const wrapperMaxWidth = '153rem';

export const ArticleHeader = styled.header`
  margin-bottom: 2.2rem;
  width: 100%;

  section.header__title {
    display: flex;
    align-items: center;
    width: 100%;

    h3 {
      margin-right: 1rem;
      font: normal 2.5rem/2.5rem var(--font-primary);
      text-transform: uppercase;
    }

    .border-bottom {
      flex: 1;
      height: 1.6rem;
      border-bottom: 1px solid #bfbfbf;
    }

    a {
      margin-left: 3rem;
      font: normal 2rem/2.5rem var(--font-primary);
      color: #5d883e;

      &:hover {
        color: var(--color-text-in-white);
      }
    }
  }

  h4.header__subtitle {
    margin-top: 1rem;
    font: normal 1.8rem/2.2rem var(--font-primary);
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const ExtrasSection = styled.article`
  width: 100%;
  padding: 5rem 0 9rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  section {
    overflow: hidden;
    position: relative;
    width: 32%;
    max-width: 45.9rem;
    height: 45.6rem;
    border-radius: 2rem;
    box-shadow: 0px 3px 6px #00000029;

    a {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50%;
      padding: 1.8rem 2rem 1.8rem 3rem;
      background: var(--color-background);

      h4 {
        font: normal 2.7rem/3.5rem var(--font-primary);
        color: var(--color-secondary);
      }

      p {
        margin-top: 1rem;
        font: normal 1.8rem/2rem var(--font-primary);
        color: #535353;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        width: 16.4rem;
        height: 4.5rem;
        margin-top: auto;
        border: 1px solid #707070;
        border-radius: 2.3rem;
        font: normal 1.8rem/2.2rem var(--font-primary);
        color: #535353;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.1, '#ffffff')};
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    section {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw);
      max-height: unset;
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: ${breakPoints.tabletPortrait}) {
    section {
      width: 100vw;
      max-width: 45rem;
      height: calc(100vw);
      max-height: 45rem;
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    section {
      min-width: unset;
      min-height: unset;
      max-width: unset;
      max-height: unset;
      width: 95vw;
      height: calc(95vw);
      margin-bottom: 3rem;

      img {
        height: 30%;
      }

      div {
        height: 70%;
      }
    }
  }
`;
