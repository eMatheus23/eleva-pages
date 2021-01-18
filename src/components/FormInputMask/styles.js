import styled, { css } from 'styled-components';

const fontPrimary = 'Montserrat, sans-serif';

export const Container = styled.div`
  width: 100%;

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

  p {
    font: normal 1.6rem/1.9rem ${fontPrimary};
    color: var(--color-alert);
  }
`;
