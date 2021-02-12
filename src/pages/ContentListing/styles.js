import styled, { css } from 'styled-components/macro';

import { ContentWrapper } from '../../styles/common/HomeStyledComponents';

export const SmallerContentWrapper = styled(ContentWrapper)`
  max-width: 142.8rem;
`;

export const ListingHero = styled.article`
  width: 100%;
  height: 21.7rem;
  background: url(${p => p.backgound}) no-repeat top;
  background-size: cover;

  ${ContentWrapper} {
    display: flex;
    align-items: flex-end;
    padding-bottom: 3rem;
  }

  h1 {
    font: bold 3rem/4.3rem var(--font-primary);
    color: var(--color-text-white);
  }
`;

export const Content = styled.article`
  padding-top: 6rem;

  ${SmallerContentWrapper} {
    display: flex;
    justify-content: space-between;
  }

  .infinite-scroll-component__outerdiv {
    width: 75%;
  }

  .infinite-scroll-component {
    /* Desabilita o overflow do componente InfiniteScroll */
    overflow: unset !important;
    width: 100%;
    max-width: 88.1rem;
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

export const FilterContainer = styled.section`
  width: 41.2rem;
  padding: 3rem 4rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 1.5rem;

  h3 {
    margin-bottom: 3rem;
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

    h4 {
      font: bold 2rem/2.4rem var(--font-primary);
    }

    .collapse__button {
      cursor: pointer;
    }
  }

  .field__content {
    overflow-y: hidden;
    overflow-x: visible;
    position: relative;
    height: 17rem;

    ${p =>
      p.fullHeight &&
      css`
        height: unset;
        padding-bottom: 3rem;
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
      font: normal 1.8rem/1.8rem var(--font-primary);
      margin-bottom: -0.5rem;

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
      0% 0% no-repeat padding-box;

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
