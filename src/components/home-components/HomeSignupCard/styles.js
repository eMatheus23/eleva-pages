import styled, { css } from 'styled-components/macro';

// Importa os break points já configurados
import breakPoints from '../../../styles/config/breakPoints';

export const Container = styled.article`
  width: 100%;
  min-height: 14.2rem;

  .card {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 14.2rem;
    padding: 0rem min(6rem, 5vw);
    background: #408b68;
    color: var(--color-text-white);
    border-radius: 2rem;

    ${p =>
      p.extraMarginBottom &&
      css`
        margin-bottom: 7rem;
      `}

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 72%;
      min-height: 14.2rem;
    }
  }

  .form-title {
    display: none;
    font: bold 1.9rem/1.9rem var(--font-primary);
    color: var(--color-primary);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20.5rem;
    height: 100%;

    label {
      display: block;
      font: normal 1.3rem/1.3rem var(--font-primary);
      margin-bottom: 0.6rem;
    }

    input {
      width: 100%;
      height: 4.3rem;
      margin-bottom: 0.5rem;
      padding: 0 1rem;
      border-radius: 1.7rem;
      border: 0;

      &::placeholder {
        font: italic normal normal 1.3rem/1.3rem var(--font-primary);
      }
    }
  }

  .phone {
    min-width: 13rem;
    width: 16%;
    max-width: 13.5rem;
  }

  .card__button-container {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      display: block;
      font: normal 1rem/1.3rem var(--font-primary);
    }
  }

  button.submit__button {
    min-width: 13.5rem;
    width: 100%;
    max-width: 20.5rem;
    height: 4.3rem;
    background: var(--color-primary);
    border-radius: 2.3rem;
  }

  .terms-container {
    display: flex;
    align-items: center;

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

  @media screen and (max-width: ${breakPoints.tablet}) {
    .card {
      form {
        flex-wrap: wrap;
        padding-top: 2rem;
      }
    }

    .card__button-container {
      width: 100%;
      margin-top: 1rem;

      button.submit__button {
        width: 100%;
        max-width: unset;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .card {
      .name {
        width: 100%;
      }

      .email {
        width: calc(100% - 14.6rem);
      }
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    .card form {
      width: 100%;
    }

    .form-title {
      display: block;
    }

    p.card__text {
      display: none;
    }

    .card {
      .email {
        width: 100%;
      }

      .phone {
        width: 100%;
        max-width: unset;
      }
    }

    .card__button-container {
      button.submit__button,
      .terms-container {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;
