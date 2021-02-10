import styled from 'styled-components/macro';

// Importa os break points já configurados
import breakPoints from '../../../../styles/config/breakPoints';

export const GreenCard = styled.div`
  width: 100%;
  min-height: 19.6rem;
  margin-bottom: 7rem;
  background: #408b68;
  color: var(--color-text-white);
  border-radius: 1.5rem;
`;

export const SignupCard = styled.div`
  width: 100%;
  min-height: 19.6rem;
  margin-bottom: 7rem;

  ${GreenCard} {
    display: flex;
    align-items: center;
    min-height: 19.6rem;
    padding: 0rem 2.4rem;
  }

  form.login__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 14.2rem;
    padding-top: 2rem;
  }

  .form-title {
    width: 100%;
    font: bold 2rem/2rem var(--font-primary);
    color: var(--text-white);
    text-align: center;
  }

  p.card__text {
    width: 35%;
    height: min-content;
    max-width: 45.4rem;
    margin-top: -0.6rem;
    margin-right: 2rem;
    font: normal 1.9rem/2.7rem var(--font-primary);
  }

  .card__input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 48%;
    height: 4.3rem;
    margin-top: 1rem;

    label {
      position: absolute;
      top: 0;
      left: 1rem;
      display: block;
      font: 500 1.3rem/2rem var(--font-primary);
      font-style: italic;
      margin-bottom: 0.6rem;
      color: #626262;
    }

    input {
      width: 100%;
      height: 100%;
      padding: 1rem 1rem 0;
      border-radius: 0.6rem;
      border: 0;

      &::placeholder {
        font: italic normal normal 1.3rem/1.3rem var(--font-primary);
        color: #bfbfbf;
      }
    }
  }

  button.submit__button {
    width: 48%;
    height: 4.3rem;
    margin-top: 1rem;
    background: var(--color-primary);
    border-radius: 2.3rem;
  }

  .terms-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.5rem;

    a {
      color: var(--color-text-white);
    }

    .MuiFormControlLabel-root {
      margin-right: 0;
    }

    .MuiSvgIcon-root {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const PremiumOffer = styled.div`
  width: 100%;

  ${GreenCard} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 19.6rem;
    padding: 3rem 2.1rem;
  }

  h3 {
    font: bold 2rem/2.4rem var(--font-primary);
    text-align: center;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.9rem;
    height: 4.3rem;
    margin-top: 1rem;
    background: var(--color-primary);
    border-radius: 2.3rem;
    font: normal 1.5rem/1.9rem var(--font-primary);
    text-decoration: none;
    color: #494949;
  }
`;
