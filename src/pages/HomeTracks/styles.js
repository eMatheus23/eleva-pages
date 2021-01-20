import styled from 'styled-components';

const wrapperMaxWidth = '153rem';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-background);
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
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 10.9rem;
  margin: 4rem auto;
  padding: 0 4rem;

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
`;
