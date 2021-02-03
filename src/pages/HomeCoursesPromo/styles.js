import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

import searchBackground from '../../assets/images/mockups/home-courses/cover.png';

// Importa os break points já configurados
import breakPoints from '../../styles/config/breakPoints';

const wrapperMaxWidth = '153rem';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-background);

  @media screen and (${breakPoints.tablet}) {
    .small-screen-only {
      display: initial;
    }

    .big-screen-only {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const CountdownContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 6rem;

  h3 {
    font: normal 3.5rem/4.2rem var(--font-primary);
    color: var(--color-secondary);
  }

  main {
    display: flex;
    margin-top: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.9rem;
    height: 6.9rem;
    border-radius: 1.7rem;
    background: var(--color-primary);
    font: normal 3rem/2rem var(--font-primary);
    color: var(--color-secondary);
  }

  p {
    margin-top: 0.5rem;
    font: normal 1rem/2rem var(--font-primary);
    color: #3c302a;
    text-align: center;
  }

  span {
    display: block;
    margin: 2rem 0.2rem;
    font: normal 3rem/2rem var(--font-primary);
    color: var(--color-secondary);
  }
`;

export const CoursesCarouselContainer = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 5.2rem 0 5rem;

  ${p =>
    p.background &&
    css`
      background: var(--color-background-secondary);
      padding-top: ;
    `}
`;

export const LastTracksContainer = styled.article`
  padding-top: 9rem;
  padding-bottom: 4.8rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .last-track__container {
    overflow: hidden;
    position: relative;

    max-width: 47rem;
    width: 32%;
    height: calc(30vw * 0.8);
    max-height: 31.9rem;

    border-radius: 1.4rem;

    section {
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

      .last-track__text-container {
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

    .last-track__filter {
      z-index: +1;
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background: #000000;
      opacity: 0.36;
    }

    img.last-track__background-cover {
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .last-track__details {
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

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 42%;
      max-width: 16.7rem;
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
  }

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    .last-track__container {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw * 0.8);
      max-height: unset;

      margin-bottom: 3rem;
    }
  }

  @media screen and (${breakPoints.tabletPortrait}) {
    .last-track__container {
      width: 70vw;
      max-width: unset;
      height: calc(70vw * 0.61);
      min-height: 26rem;
      margin-bottom: 3rem;
    }
  }
`;

export const SearchContainer = styled.article`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 35.1rem;
  background: url(${searchBackground}) no-repeat center top;
  background-size: cover;

  section {
    width: 100%;
    z-index: +1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h4 {
    margin-bottom: 0.4rem;
    font: normal 3.5rem/2.3rem var(--font-primary);
    color: var(--color-primary);
  }

  p {
    margin-bottom: 5rem;
    font: normal 20px/23px var(--font-primary);
    color: var(--color-text-white);
  }

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #141414;
    opacity: 0.68;
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
      padding: 0.8rem 2rem 1.8rem 3rem;
      background: var(--color-background);

      h4 {
        font: normal 2.7rem/3rem var(--font-primary);
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

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    section {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw);
      max-height: unset;
      margin-bottom: 5rem;
    }
  }

  @media screen and (${breakPoints.tabletPortrait}) {
    section {
      width: 60vw;
      max-width: unset;
      height: calc(60vw);
    }
  }
`;
