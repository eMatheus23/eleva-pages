import styled from 'styled-components';

export const Container = styled.div`
  a {
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
  }
`;
