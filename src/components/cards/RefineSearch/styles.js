import styled, { css } from 'styled-components';

export const Container = styled.section`
  width: 41.2rem;
  padding: 3rem 4rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 1.5rem;

  h3 {
    margin-bottom: 2.5rem;
    font: bold 2.5rem/3rem var(--font-primary);
    color: var(--color-secondary);
  }
`;

export const FilterField = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #707070;

  ${p =>
    p.filterOpened &&
    css`
      padding-bottom: 0.4rem;
    `}

  header.field__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    h4 {
      font: bold 2rem/2.4rem var(--font-primary);
    }
  }

  .field__content {
    overflow-y: hidden;
    overflow-x: visible;
    position: relative;
    width: 100%;
    height: 15rem;

    ${p =>
      p.fullHeight &&
      css`
        height: unset;
        padding-bottom: 1rem;
      `}

    ${p =>
      p.filterOpened &&
      css`
        display: none;
      `}

    ul {
      list-style: none;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: -0.5rem;

      p {
        padding: 0.6rem 0;
        font: normal 1.8rem/1.8rem var(--font-primary);
      }

      /* Estiliza o ícone do checkbox */
      .MuiSvgIcon-root {
        font-size: 2.5rem; /* Define o tamanho do icon */
        margin-right: -0.2rem;
      }
    }
  }

  .field__linear-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 14rem;
    background: transparent linear-gradient(180deg, #ffffff00 0%, #ffffff 100%)
      no-repeat;

    ${p =>
      p.fullHeight &&
      css`
        display: none;
      `}
  }

  .field__show-button {
    display: flex;
    align-items: center;
    color: var(--color-secondary);
    background: none;

    ${p =>
      p.filterOpened &&
      css`
        display: none;
      `}

    h5 {
      font: bold 1.8rem/2.2rem var(--font-primary);
    }

    svg {
      margin-left: 0.6rem;
    }
  }
`;
