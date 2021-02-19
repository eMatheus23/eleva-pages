import styled, { css } from 'styled-components/macro';

// Importa os break points já configurados
import breakPoints from '../../styles/config/breakPoints';

// Importação de componentes estilizados para serem alterados apenas nesta página
import { ContentWrapper } from '../../styles/common/HomeStyledComponents';

export const NotFoundHero = styled.article`
  position: relative;
  width: 100%;
  height: 29.2rem;
  background: url(${p => p.background}) no-repeat center top;

  /* Sobreposição de estilização de componentes já estilizados */
  ${ContentWrapper} {
    z-index: +1;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3.5rem;
    padding-bottom: 4.4rem;
  }

  h2 {
    font: normal 2.4rem/4.3rem var(--font-primary);
    text-transform: uppercase;
    color: #f7f7f7;
  }

  h1 {
    max-width: 48rem;
    margin-bottom: auto;
    font: normal 3.2rem/4.3rem var(--font-primary);
    text-transform: uppercase;
    text-align: center;
    color: var(--color-primary);
  }

  .black__filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #141414;
    opacity: 0.68;
  }
`;

export const SearchInputContainer = styled.div`
  max-width: 56.6rem;
  width: 100%;

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

    ${p =>
      p.fullWidth &&
      css`
        width: 85vw;
      `}

    .open-filter__button {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 11rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.3rem var(--font-primary);

      .filter__icon {
        width: 1.5rem;
        margin-left: 2rem;
      }

      .bitwise__icon {
        height: 3.5rem;
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
      width: 6rem;
      height: 100%;
      background: none;

      svg {
        margin: auto;
        transition: transform 0.2s;
      }

      &:hover {
        svg {
          transform: scale(1.1);
          color: #535353;
        }
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
  }
`;

export const NavButtonsContainer = styled.article`
  width: 100%;

  ${ContentWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5.2rem;
  }

  .buttons__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 84.3rem;
  }

  .nav__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21.7rem;
    height: 4.6rem;
    border-radius: 2.3rem;
    font: normal 1.4rem/1.8rem var(--font-primary);
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-text-white);
    background: var(--color-secondary);
    transition: background-color 0.2s;

    &:hover {
      background: var(--color-secondary-hover);
    }

    .menu-icon {
      width: 1.6rem;
      margin-right: 0.4rem;
    }
  }
`;
