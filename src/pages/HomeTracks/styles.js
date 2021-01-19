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
