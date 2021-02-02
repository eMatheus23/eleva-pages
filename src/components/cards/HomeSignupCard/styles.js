import styled from 'styled-components/macro';

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 153rem;
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const Container = styled.article`
  width: 100%;
  margin-bottom: 7rem;

  .card {
    display: flex;
    width: 100%;
    min-height: 14.2rem;
    padding: 3.2rem 5.2rem 2rem 8rem;
    background: #408b68;
    color: var(--color-text-white);
    border-radius: 2rem;

    p {
      max-width: 37rem;
      margin-top: -0.6rem;
      font: normal 2rem/2.7rem var(--font-primary);
    }

    form {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      > div {
        label {
          display: block;
          font: normal 1.3rem/1.3rem var(--font-primary);
          margin-bottom: 0.6rem;
        }

        input {
          width: 17.6rem;
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

      section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 20rem;
        height: 100%;

        button {
          width: 19.8rem;
          height: 3.7rem;
          background: var(--color-primary);
          border-radius: 2.3rem;
        }

        label {
          display: block;
          font: normal 1rem/1.3rem var(--font-primary);
        }

        div {
          display: flex;
          align-items: center;
          margin-top: 1rem;

          a {
            color: var(--color-text-white);
          }

          .MuiFormControlLabel-root {
            margin-right: 0;
          }
        }
      }
    }
  }
`;
