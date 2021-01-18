import styled, { css } from 'styled-components';

const fontPrimary = 'Montserrat, sans-serif';

export const Container = styled.div`
  position: relative;

  .error {
    position: absolute;
    top: -5rem;
    font: normal 1.6rem/1.9rem ${fontPrimary};
    color: var(--color-alert);
  }
`;
