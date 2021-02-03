import styled from 'styled-components/macro';

// Importa os break points já configurados
import breakPoints from '../../../styles/config/breakPoints';

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 153rem;
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const Container = styled.article`
  width: 100%;
  min-height: 14.2rem;
  margin-bottom: 7rem;

  .card {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 14.2rem;
    padding: 0rem min(6rem, 5vw);
    background: #408b68;
    color: var(--color-text-white);
    border-radius: 2rem;

    p {
      width: 35%;
      height: min-content;
      max-width: 45.4rem;
      margin-top: -0.6rem;
      margin-right: 2rem;
      font: normal 1.9rem/2.7rem var(--font-primary);
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 72%;
      min-height: 14.2rem;
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

      button {
        min-width: 13.5rem;
        width: 100%;
        max-width: 20.5rem;
        height: 4.3rem;
        background: var(--color-primary);
        border-radius: 2.3rem;
      }

      label {
        display: block;
        font: normal 1rem/1.3rem var(--font-primary);
      }
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
  }

  @media screen and (${breakPoints.tablet}) {
    .card {
      form {
        flex-wrap: wrap;
        padding-top: 2rem;
      }

      .card__button-container {
        width: 100%;
        margin-top: 1rem;

        button {
          width: 100%;
          max-width: unset;
        }
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
`;
