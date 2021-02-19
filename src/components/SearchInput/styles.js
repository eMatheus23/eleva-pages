import styled, { css } from 'styled-components/macro';

import breakPoints from '../../styles/config/breakPoints';

export const Container = styled.div`
  form.search__container {
    overflow: hidden;
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

      width: 15.4rem;
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
