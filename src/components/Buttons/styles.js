import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const FindOutLink = styled(Link)`
  display: block;
  border-radius: 2.3rem;
  padding: 0.8rem 2.5rem;
  background: var(--color-primary);
  text-decoration: none;
  font: normal 1.8rem/2.2rem var(--font-primary);
  color: #494949;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-primary-hover);
  }
`;

export const Container = styled.div`
  width: 16.4rem;
  height: 4.5rem;

  #button-rounded {
    width: 100%;
    height: 100%;

    padding: 0 0.6rem;
    margin: 0;

    border-radius: 2.3rem;
    border: 0;

    font: normal 1.8rem/1.8rem var(--font-primary);

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    cursor: pointer;

    transition: background-color 0.2s;

    img {
      margin-left: 1rem;
    }

    &.primary {
      background: var(--color-primary);
      color: var(--color-text-in-white);

      &hover {
        background: var(--color-primary-hover);
      }
    }

    &.secondary {
      background: var(--color-secondary);
      color: var(--color-background);

      &:hover {
        background: var(--color-secondary-hover);
      }
    }

    &.alternative {
      background: var(--color-secondary-alternative);
      color: var(--color-background);

      font-weight: bold;

      &:hover {
        background: var(--color-secondary-alternative-hover);
      }
    }

    &.transparent {
      width: 23.6rem;

      background: none;
      color: var(--color-text-in-white);

      border: 1px solid #707070;
    }
  }
`;
