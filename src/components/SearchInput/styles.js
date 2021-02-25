import styled, { css } from 'styled-components/macro';

import breakPoints from '../../styles/config/breakPoints';

export const Container = styled.div`
  position: relative;

  form.search__container {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 85.8rem;
    height: 5.2rem;

    border-radius: 3.2rem;
    background: var(--color-background-secondary);

    ${p =>
      p.fullWidth &&
      css`
        width: 85vw;
      `}

    .open-filter__button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 11.5rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.3rem var(--font-primary);

      .filter__icon {
        width: 1.5rem;
        margin-left: 2.3rem;
      }

      .bitwise__icon {
        height: 2.7rem;
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

    @media screen and (max-width: ${breakPoints.tablet}) {
      width: 90vw;
    }

    @media screen and (max-width: ${breakPoints.phone}) {
      .open-filter__button {
        width: fit-content;
      }

      span {
        display: none;
      }

      .filter__icon {
        margin-left: 2rem;
        margin-right: 1rem;
      }

      input {
        flex: unset;
        width: 100%;
        padding: 0 1.5rem;
      }
    }

    .search-button {
      display: flex;
      width: 6.8rem;
      height: 100%;
      border-radius: 0 3.2rem 3.2rem 0;
      background: var(--color-primary);
      transition: background-color 0.2s;

      svg {
        margin: auto;
        transform: scaleX(-1);
      }

      &:hover {
        background: var(--color-primary-hover);
      }
    }
  }
`;

export const FilterContainer = styled.div`
  z-index: 98;
  position: absolute;
  top: 10rem;
  left: 0;
  cursor: default;

  .filter__card {
    position: relative;
    width: 103.8rem;
    /* height: 60.8rem; */
    background: var(--color-background);
    border: 1px solid #cfcfcf;
    box-shadow: 0rem 0.3rem 8rem #00000029;
    border-radius: 0rem 0rem 4.1rem 4.1rem;
  }

  .nav__tabs {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    display: flex;
    width: 100%;
    height: 5rem;

    .tab {
      z-index: -1;
      width: 24.7rem;
      height: 100%;
      background: #ffffff;
      /* box-shadow: 0rem 0.3rem 0.6rem #00000029; */
      border-radius: 0.8rem 0.8rem 0 0rem;
    }

    .active {
      z-index: +1;
      background: #ffffff;
      border: 1px solid #bfbfbf;
      border-bottom: none;
    }

    .close-filter__button {
      align-self: flex-end;
      margin-left: auto;
      margin-bottom: 0.5rem;
      background: none;
      font: normal 2rem/2.4rem var(--font-secondary);
      color: #ffffff;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 0.2px;
      -webkit-text-stroke-color: black;
      transition: transform 0.1s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .box-shadow {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0rem 0.3rem 8rem #00000029;
    }
  }

  .card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7.7rem;
    padding-left: 7rem;
    padding-right: 3rem;
    background: var(--color-background-secondary);

    ul {
      display: flex;
      list-style: none;
      color: #707070;

      li {
        display: flex;
        /* Estiliza o ícone do checkbox */
        .MuiSvgIcon-root {
          font-size: 2.2rem; /* Define o tamanho do icon */
          margin-right: -0.2rem;
        }

        label {
          font: bold 1.5rem/2rem var(--font-primary);
          margin-left: 0.6rem;
        }

        & + li {
          margin-left: 2rem;
        }
      }
    }

    .header__search-button {
      width: 22.2rem;
      height: 4.5rem;
      background: var(--color-primary);
      border-radius: 2.4rem;
      font: normal 2rem/2.5rem var(--font-primary);
      transition: background-color 0.2s;

      &:hover {
        background: var(--color-primary-hover);
      }
    }
  }

  main.card__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    padding: 0.7rem 3rem 3.3rem 7rem;
    text-align: left;
  }

  .field__container {
    width: 37.6rem;

    h3.field__header {
      width: 100%;
      margin-bottom: 0.6rem;
      padding-bottom: 0.3rem;
      font: normal 2rem/2.5rem var(--font-primary);
      color: #67983e;
      border-bottom: 1px solid #bfbfbf;
    }

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        width: 100%;

        /* Estiliza o ícone do checkbox */
        .MuiSvgIcon-root {
          font-size: 1.8rem; /* Define o tamanho do icon */
          margin-right: -0.2rem;
        }

        /* Texto de cada item */
        p {
          margin-left: 0.6rem;
          font: normal 1.4rem/2rem var(--font-primary);
        }
      }

      .radio__container {
        margin-bottom: 1rem;

        /* Estiliza o ícone do checkbox */
        .MuiSvgIcon-root {
          font-size: 2.2rem; /* Define o tamanho do icon */
          margin-right: -0.2rem;
        }
      }
    }
  }

  .category {
    width: 16rem;
  }

  .language {
    width: 22.4rem;
  }

  .culture {
    width: 100%;
    margin-top: 2rem;

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 18rem;

      li {
        width: 28%;
      }
    }
  }
`;
