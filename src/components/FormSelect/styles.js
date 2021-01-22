import styled, { css } from 'styled-components';

import selectImg from '../../assets/images/icons/form-select-open.svg';

const fontPrimary = 'Montserrat, sans-serif';

export const Container = styled.div`
  width: 100%;

  select {
    appearance: none;
    /* Imagem de fundo (Seta) */
    background: url(${selectImg}) no-repeat #ffffff;

    width: 100%;
    height: 5rem;

    border: 1px solid #bfbfbf;
    border-radius: 9px;

    color: var(--color-text-base);
    font-family: ${fontPrimary};
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
  }

  p {
    font: normal 1.6rem/1.9rem ${fontPrimary};
    color: var(--color-alert);
  }

  #state {
    background-position: 6.5rem center;
    /*Posição da imagem do background*/

    padding-top: 0.2rem;
    padding-left: 2rem;

    font-size: 2rem;
  }

  #city {
    /*Posição da imagem do background*/
    background-position: 21.5rem center;

    width: 25rem;

    padding-left: 2rem;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
