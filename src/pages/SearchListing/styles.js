import styled, { css } from 'styled-components/macro';

import selectImg from '../../assets/icons/form-select-open.svg';

// Importa os break points já configurados
import breakPoints from '../../styles/config/breakPoints';

// Importação de componentes estilizados para serem alterados apenas nesta página
import { ContentWrapper } from '../../styles/common/HomeStyledComponents';

export const SmallerContentWrapper = styled(ContentWrapper)`
  max-width: 142.8rem;
`;

export const SearchListingHero = styled.div`
  width: 100%;
  height: 21.7rem;
  background: var(--color-secondary);

  /* Sobreposição de estilização de componentes já estilizados */
  ${SmallerContentWrapper} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4.5rem;
    padding-bottom: 3.2rem;
  }

  .most-searched__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    h4 {
      margin-bottom: 2rem;
      font: normal 1.5rem/1.9rem var(--font-primary);
      text-align: center;
      color: #b0d135;
    }

    ul.terms__container {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
    }

    .term__button {
      button {
        padding: 0.5rem 0.8rem;
        border-radius: 1.6rem;
        background: var(--color-background);
        color: var(--color-secondary);
        font: normal 1.3rem/1.6rem var(--font-primary);
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.05);
        }
      }

      & + .term__button {
        margin-left: 1rem;
      }
    }
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
      transform: scaleX(-1);

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
        padding: 0 1.2rem;
      }
    }
  }
`;

export const Content = styled.article`
  padding-top: 6rem;

  ${SmallerContentWrapper} {
    display: flex;
    justify-content: space-between;
  }

  main {
    width: 75%;
  }

  .content__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 7rem;

    h3 {
      margin-bottom: 0.6rem;
      font: normal 2rem/2rem var(--font-primary);
      color: var(--color-text-in-white);
    }

    h2 {
      font: bold 30px/43px Montserrat;
      color: var(--color-secondary);
    }
  }

  .infinite-scroll-component__outerdiv {
    width: 100%;
  }

  .infinite-scroll-component {
    /* Desabilita o overflow do componente InfiniteScroll */
    overflow: unset !important;
    width: 100%;
    /* max-width: 88.1rem; */
    margin-top: -1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .content__card {
      overflow: hidden;
      width: 19.7rem;
      height: 23.1rem;
      margin-bottom: 6rem;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 0.7rem;
      text-decoration: none;
      color: #707070;
      transition: transform 0.1s;

      &:hover {
        transform: translateY(-5px);
      }

      .card__img {
        width: 100%;
        height: 52%;
      }

      .card__text {
        width: 100%;
        height: 48%;
        padding: 0.2rem 0.7rem 2rem 1rem;

        h5 {
          font: normal 1.3rem/1.6rem var(--font-primary);
          color: #6a9c40;
        }

        p {
          overflow: hidden;
          max-height: 7.4rem;
          font: normal 1.5rem/2rem var(--font-primary);
        }
      }
    }
    .load__content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 10rem;
      font: normal 2rem/2.4rem var(--font-primary);
      color: var(--color-line-in-white);
    }
  }

  aside {
    width: 75%;
    max-width: 41.2rem;
    margin-left: 3rem;
  }
`;

export const StyledSelect = styled.select`
  overflow: hidden;
  text-overflow: ellipsis;

  width: 25rem;
  height: 5rem;

  padding-left: 2rem;

  border: 1px solid #bfbfbf;
  border-radius: 9px;

  appearance: none;
  /* Imagem de fundo (Seta) */
  background: url(${selectImg}) no-repeat #ffffff;
  background-position: 21.5rem center;
  color: var(--color-text-base);
  font-family: var(--font-primary);
  font-size: 1.8rem;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #b2d235;
    `}

  ${props =>
    props.isFilled &&
    css`
      border: 2px solid #b2d235;
    `}

  p {
    font: normal 1.6rem/1.9rem var(--font-primary);
    color: var(--color-alert);
  }

  #city {
    /*Posição da imagem do background*/
  }
`;
