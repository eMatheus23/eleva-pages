import styled from 'styled-components';

// const fontPrimary = 'Montserrat, sans-serif';
// const fontSecondary = 'Source Sans Pro, sans-serif';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-background);

  main {
    display: flex;
    align-items: center;
    justify-content: initial;
    flex-direction: column;

    width: 100vw;
    min-height: calc(100vh - 6rem);

    padding-top: 6rem;
    background: var(--color-background-secondary);

    h3 {
      font-weight: bold;
      margin-top: min(4vh, 6rem);
      margin-bottom: min(2vh, 2rem);

      color: var(--color-secondary);
    }
  }
`;
