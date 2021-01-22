import styled from 'styled-components';
import { shade } from 'polished';

export const Footer = styled.footer`
  position: relative;

  width: 100%;
  height: 6rem;
  background: var(--color-background-secondary);

  display: grid;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  font-family: Montserrat, sans-serif;
  color: var(--color-text-base);

  div {
    display: flex;
    justify-items: center;
    align-items: center;

    p {
      width: 255px;
      font-size: 1.6rem;
      margin-right: 0.2rem;
    }

    img {
      height: 2.8rem;
    }
  }
`;

export const Links = styled.div`
  text-decoration: none;
  position: absolute;
  right: 10rem;

  a {
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    color: var(--color-text-base);
    font-size: 1.6rem;

    & + a {
      margin-left: 4rem;
    }

    &:hover {
      color: ${shade(0.2, '#707070')};
    }
  }
`;
