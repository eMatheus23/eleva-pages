import styled, { css } from 'styled-components/macro';

const wrapperMaxWidth = '153rem';

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const Hero = styled.section`
  position: relative;

  width: 100%;
  height: 36.1rem;

  margin: 0 auto;
  margin-top: 6.5rem;

  background: url(${p => p.background}) no-repeat center top;
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

  .triangle {
    position: absolute;
    right: -10.2rem;
    top: 0;
    z-index: 4;
    height: 0;
    width: 0;
    border-left: 102px solid #141414;
    border-right: 0px solid transparent;
    border-bottom: 180px solid transparent;
    border-top: 180px solid transparent;
    opacity: 0.77;
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
    height: 100%;
    width: 120rem;
    border-right: 1px solid #141414;
    background: #141414;
    opacity: 0.77;
  }
`;
