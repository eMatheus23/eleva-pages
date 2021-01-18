import styled, { css } from 'styled-components';

const fontPrimary = 'Montserrat, sans-serif';
const fontSecondary = 'Source Sans Pro, sans-serif';

export const Title = styled.div`
  width: 100%;
  max-width: 51.7rem;

  font-family: Montserrat, sans-serif;
  font-weight: normal;
  font-size: 2rem;
  text-align: left;

  margin-bottom: min(2vh, 2rem);
  padding-left: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 51.7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 3vh;
  padding: 2.7rem 2rem 1rem;
  border-radius: 1.3rem;
  box-shadow: 0px 3px 6px #00000029;

  background: var(--color-background);

  ${props =>
    props.isInCheckout &&
    css`
      box-shadow: 0px 0px 10px #00000029;
    `}

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      margin-bottom: 0.6rem;
      font: normal 1.8rem/2rem ${fontPrimary};
      line-height: 2rem;
      color: var(--color-text-base);
    }

    width: 100%;
    max-width: 36.6rem;

    > div {
      width: 100%;

      & + div {
        margin-top: 1.5rem;
      }
    }
  }

  #button-rounded {
    margin: 2.2rem 0 2.5rem;
  }
`;

export const DoubleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > div {
    width: 48%;
  }

  ${props =>
    props.type === 'two-thirds' &&
    css`
      > div:first-of-type {
        width: 82%;
        margin-right: 1.7rem;
      }
      > div + div {
        width: 31%;
      }
    `}

  ${props =>
    props.type === 'one-third' &&
    css`
      > div:first-of-type {
        width: 31%;
        margin-right: 1.7rem;
      }
      > div + div {
        width: 82%;
      }
    `}

  label {
    width: 100%;
    justify-content: space-between;
    a {
      font: normal 1.4rem/1.6rem ${fontSecondary};
      color: var(--color-text-link);
    }
  }
`;

export const Terms = styled.section`
  width: 110%;
  display: flex;
  align-items: center;
  font: normal 1.2rem/2.1rem ${fontPrimary};

  a {
    color: var(--color-text-link);
  }
`;

export const Login = styled.div`
  width: 100%;
  max-width: 51.7rem;
  margin: 3vh 0;

  p {
    font: normal 1.7rem/1.6rem ${fontSecondary};
    text-align: right;
  }

  a {
    color: var(--color-text-link);
  }
`;
