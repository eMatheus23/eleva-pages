import styled from 'styled-components/macro';
import { shade } from 'polished';

// Importa os break points já configurados
import breakPoints from '../config/breakPoints';

const wrapperMaxWidth = '153rem';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 6.5rem; /* Padding para compensar o header */
  background: var(--color-background);
`;

export const ArticleHeader = styled.header`
  margin-bottom: 2.2rem;
  width: 100%;

  section.header__title {
    display: flex;
    align-items: center;
    width: 100%;

    h3 {
      margin-right: 1rem;
      font: bold 2.5rem/2.5rem var(--font-primary);
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

      .mobile__link {
        display: none;
      }
    }
  }

  h4.header__subtitle {
    margin-top: 1rem;
    font: normal 1.8rem/2.2rem var(--font-primary);
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    section.header__title {
      justify-content: space-between;

      h3 {
        font: bold 1.8rem/1.8rem var(--font-primary);
      }

      .border-bottom {
        display: none;
      }

      a {
        .desktop__link {
          display: none;
        }

        .mobile__link {
          display: block;
        }

        margin-left: 0;
      }
    }

    h4.header__subtitle {
      margin-top: 0;
      font-size: 1.4rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;

  @media screen and (max-width: ${breakPoints.tablet}) {
    padding: 0 3rem;
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    padding: 0 2rem;
  }
`;

export const LastTracksContainer = styled.article`
  padding-top: 9rem;
  padding-bottom: 4.8rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .track {
    overflow: hidden;
    position: relative;
    max-width: 47rem;
    width: 32%;
    height: calc(30vw * 0.8);
    max-height: 31.9rem;
    border-radius: 1.4rem;
  }

  main {
    z-index: +3;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 3rem;
    color: var(--color-text-white);

    .text__container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    span {
      font: normal 2.5rem/2.5rem var(--font-primary);
      text-transform: uppercase;
    }

    h4 {
      margin: 1rem 0;
      font: normal 4rem/4rem var(--font-primary);
      color: var(--color-primary);
      text-transform: uppercase;
    }

    p {
      font: normal 2.5rem/3rem var(--font-primary);
    }
  }

  .CTA__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.7rem;
    height: 4.6rem;
    border-radius: 2.3rem;
    background: var(--color-background);
    text-decoration: none;
    font: normal 1.8rem/2.2rem var(--font-primary);
    color: #494949;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }
  }

  .track__details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-end;
    justify-content: space-between;

    p {
      font: normal 2.4rem/2.9rem var(--font-primary);
    }

    h5 {
      font: normal 4rem/4.9rem var(--font-primary);
    }
  }

  .filter {
    z-index: +1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.36;
  }

  img.track__background {
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .filter {
    opacity: 0.56;
  }

  @media screen and (max-width: ${breakPoints.smallPhone}) {
    main {
      span {
        display: none;
      }

      h4 {
        margin: 0;
        font-size: 3rem;
      }

      p {
        font-size: 2.2rem;
        line-height: 2.5rem;
      }

      .CTA__button {
        width: 100%;
        height: 4rem;
        background-color: var(--color-primary);

        &:hover {
          background: var(--color-primary-hover);
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    .track {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw * 0.8);
      max-height: unset;
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: ${breakPoints.tabletPortrait}) {
    .track {
      width: 70vw;
      max-width: unset;
      height: calc(70vw * 0.61);
      min-height: 26rem;
      margin-bottom: 3rem;
    }
  }

  @media screen and (max-width: ${breakPoints.extendedPhone}) {
    .track {
      main {
        padding: 2.2rem;
      }

      .track__details {
        padding-top: 0.4rem;

        p {
          font: normal 2rem/2rem var(--font-primary);
        }

        h5 {
          font: normal 3rem/3rem var(--font-primary);
        }
      }
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    .track {
      width: 85vw;
      max-width: unset;
      height: 79vw;
      min-width: unset;
      min-height: unset;
      margin-bottom: 3rem;

      .text__container {
        justify-content: flex-start;
      }
    }
  }
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
        font: normal 2.7rem/2.7rem var(--font-primary);
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

        h4 {
          font: bold 2rem/2.5rem var(--font-primary);
        }
      }
    }
  }
`;
