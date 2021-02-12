import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  z-index: 1000;
  position: fixed;
  /* width: 100%; */
  bottom: 20px;
  right: 16.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.6;
  color: var(--color-secondary);
  background: none;

  span {
    font: bold 2.5rem/3rem var(--font-primary);
    margin-right: 1rem;
  }

  &:hover {
    opacity: 1;
  }
`;
