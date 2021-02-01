import styled from 'styled-components/macro';

export const Container = styled.div`
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

      width: 15.4rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.3rem var(--font-primary);

      img:first-of-type {
        width: 1.5rem;
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

    .search-button {
      display: flex;
      width: 10.4rem;
      height: 100%;
      background: var(--color-primary);
      transition: background-color 0.2s;

      &:hover {
        background: var(--color-primary-hover);
      }

      svg {
        margin: auto;
        transform: scaleX(-1);
      }
    }
  }
`;
