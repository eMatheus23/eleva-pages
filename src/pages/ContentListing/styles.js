import styled from 'styled-components/macro';

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

  main.content__container {
    width: 75%;
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
  }

  aside {
    width: 75%;
    max-width: 41.2rem;
    margin-left: 3rem;
  }
`;

export const FilterContainer = styled.section`
  width: 41.2rem;
  min-height: 92.4rem;
  padding: 3rem 4rem;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 1.5rem;

  h3 {
    margin-bottom: 3rem;
    font: bold 2.5rem/3rem var(--font-primary);
    color: var(--color-secondary);
  }

  .filter__field {
    header {
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

    ul {
      list-style: none;
    }
  }

  .MuiFormControlLabel-root {
    margin-right: 0;
  }

  .MuiSvgIcon-root {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
