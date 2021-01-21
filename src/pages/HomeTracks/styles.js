import styled from 'styled-components';

const wrapperMaxWidth = '153rem';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-background);

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #ffffff;
    background: var(--color-background);
    cursor: pointer;
  }

  .alice-carousel__prev-btn {
    left: -2.5rem;
  }

  .alice-carousel__next-btn {
    right: -1.2rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  padding: 3rem 4rem 8rem 4rem;
`;

export const Hero = styled.section`
  position: relative;

  width: 100%;
  height: 29.5rem;

  margin: 0 auto;
  margin-top: 6.5rem;

  .hero-img {
    position: relative;
    width: 100%;

    img {
      height: 29.5rem;
    }

    .image {
      width: 100%;
      object-fit: cover;
    }
  }

  .content-wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    width: 100%;
    max-width: ${wrapperMaxWidth};
    height: 100%;

    margin: 0 auto;
    padding: 2rem 4rem;

    h1 {
      display: flex;
      align-items: center;
      font: normal 2.2rem/6.5rem var(--font-primary);
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
    }

    p {
      max-width: 45.7rem;
      font: normal 2rem/3rem var(--font-primary);
      color: var(--color-text-white);
    }

    .details-container {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 50rem;
      height: 100%;
    }

    .triangle {
      position: absolute;
      right: -18.6rem;
      top: 0;
      z-index: 4;
      height: 0;
      width: 0;
      border-left: 80px solid #141414;
      border-right: 106px solid transparent;
      border-bottom: 148px solid transparent;
      border-top: 148px solid transparent;
      opacity: 0.65;
    }

    .detail {
      position: absolute;
      right: -7.7rem;
      top: 0;
      z-index: 5;
      height: 100%;
    }

    .filter {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 4;
      height: 29.5rem;
      width: 200rem;
      background: #141414;
      opacity: 0.65;
    }
  }
`;

export const SearchSection = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 10.9rem;
  margin: 5rem auto 4rem;
  padding: 0 4rem;

  .col-7 {
    padding: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 85.8rem;
    height: 5.2rem;

    border-radius: 3.2rem;
    background: var(--color-background-secondary);

    button:first-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 13.4rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.6rem var(--font-primary);

      img:first-of-type {
        width: 1.1rem;
        margin-left: 2.3rem;
      }
    }

    input {
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 3rem;
      background: none;
      font: normal 1.6rem/1.9rem var(--font-primary);

      &::placeholder {
        color: #b9b9b9;
      }
    }

    button:last-of-type {
      display: flex;
      width: 10.4rem;
      height: 100%;
      background: var(--color-primary);

      svg {
        margin: auto;
        transform: scaleX(-1);
      }
    }
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

  aside {
    overflow: hidden;
    width: 100%;
    height: 10.9rem;
    padding-left: 5rem;
    padding-right: 0;
    border-radius: 0.9rem;

    > div {
      position: relative;

      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 0.9rem;
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
  }
`;

export const CarouselButton = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const CarouselContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${wrapperMaxWidth};
  margin: 5rem auto 9rem;
  padding: 0 4rem;

  header {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;

    h3 {
      margin-right: 1rem;
      font: bold 2.5rem/2.5rem var(--font-primary);
    }

    > div {
      flex: 1;
      height: 1.6rem;
      border-bottom: 1px solid #bfbfbf;
    }

    a {
      margin-left: 3rem;
      font: normal 2rem/2.5rem var(--font-primary);
      color: #5d883e;
    }
  }
`;

export const LaunchCard = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 34.8rem;
  width: 90%;
  height: 31.9rem;
  border-radius: 1rem;

  > div {
    z-index: +2;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 3rem;
    color: var(--color-text-white);

    span {
      font: normal 1.5rem/1.5rem var(--font-primary);
    }

    h4 {
      margin-top: 1.5rem;
      font: bold 2.5rem/2.5rem var(--font-primary);
    }

    p {
      font: normal 2rem/2.5rem var(--font-primary);
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
    opacity: 0.53;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const HighlightsContainer = styled.article`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 52.5rem;
  margin: 3rem 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content-wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    align-items: center;

    width: 100%;
    max-width: ${wrapperMaxWidth};
    height: 100%;

    margin: 0 auto;
    padding: 2rem 4rem;

    > section {
      max-width: 27.5rem;
      color: var(--color-text-white);

      h5 {
        font: normal 2rem/2.4rem var(--font-primary);
        margin-bottom: 2rem;
      }

      h3 {
        font: normal 3rem/2.5rem var(--font-primary);
        margin-bottom: 0.8rem;
      }

      h4 {
        font: normal 2rem/2.5rem var(--font-primary);
        margin-bottom: 0.8rem;
      }

      > span {
        display: block;
        max-width: 18rem;
        font: normal 1.5rem/2rem var(--font-primary);
        color: var(--color-primary);

        strong {
          font: normal 3.5rem/2rem var(--font-primary);
        }

        & + span {
          margin-top: 1rem;
        }
      }

      p {
        font: normal 1.5rem/2rem var(--font-primary);
      }

      a {
        display: block;
        width: fit-content;
        margin: 1.8rem 0;
      }
    }

    > aside {
      flex: 1;
      width: 71rem;
      max-width: 108.2rem;

      h5 {
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
        border-bottom: 1px solid #bfbfbf;
        font: normal 2rem/2.4rem var(--font-primary);
        color: var(--color-text-white);
      }
    }
  }

  .filters-container {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 60rem;
    height: 100%;
  }

  .triangle {
    position: absolute;
    right: -21rem;
    top: 0;
    z-index: -1;
    height: 0;
    width: 0;
    border-left: 210px solid #141414;
    border-right: 0px solid transparent;
    border-bottom: 263px solid transparent;
    border-top: 263px solid transparent;
    opacity: 0.85;
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 200rem;
    background: #141414;
    border-right: 1px solid #141414;
    opacity: 0.85;
  }

  .filter-white {
    position: absolute;
    right: 0;
    top: 0;
    z-index: +1;
    height: 100%;
    width: 100%;
    background: #ffffff;
    opacity: 0.69;
  }
`;

export const HighlightsCard = styled.div`
  overflow: hidden;
  position: relative;
  width: 95%;
  max-width: 25.8rem;
  height: 26.7rem;
  border-radius: 0.7rem;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 15.9rem;
    object-fit: cover;
  }

  div {
    width: 100%;
    height: 10.8rem;
    padding: 1rem 0.5rem 0 1.4rem;
    background: var(--color-background);

    h4 {
      font: normal 1.3rem/1.6rem var(--font-primary);
      color: var(--color-secondary);
    }

    p {
      font: normal 1.5rem/2rem var(--font-primary);
      color: var(--color-text-base);
    }
  }
`;