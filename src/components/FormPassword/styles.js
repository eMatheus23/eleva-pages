import styled, { css } from 'styled-components';

const fontPrimary = 'Montserrat, sans-serif';

export const Container = styled.div`
  div {
    position: relative;
  }

  input {
    width: 100%;
    height: 5rem;

    padding: 1.7rem;
    border: 1px solid #bfbfbf;
    border-radius: 9px;
    outline: none;

    color: var(--color-text-base);
    font: normal 1.8rem/2rem ${fontPrimary};

    &::placeholder {
      font: normal 1.6rem/1.8rem ${fontPrimary};
      color: #bfbfbf;
    }

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
  }

  .reveal-password {
    position: absolute;
    right: 1rem;
    top: 50%;
    display: flex;
    align-items: center;
    transform: translate(0, -50%);
  }

  img {
    height: 4rem;
  }

  svg {
    margin-left: 1rem;
    cursor: pointer;
  }

  p {
    font: normal 1.6rem/1.9rem ${fontPrimary};
    color: var(--color-alert);
  }
`;
