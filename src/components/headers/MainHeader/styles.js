import styled, { css } from 'styled-components/macro';

import breakPoints from '../../../styles/config/breakPoints';

export const Header = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;

  width: 100vw;
  height: 6.6rem;

  padding-left: 3vw;
  padding-right: 3vw;

  background: var(--color-background);
  box-shadow: 0px 3px 6px #00000029;

  ${p =>
    p.viewerStatus === 'premium' &&
    css`
      background: var(--color-secondary);
    `}

  .header-content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 192rem;
    height: 100%;

    margin: 0 auto;

    > button {
      display: flex;
      align-items: center;
      background: none;

      img {
        height: 3.8rem;
      }
    }

    ${p =>
      p.viewerStatus === 'premium' &&
      css`
        > img {
          align-self: flex-start;
          height: 9.6rem;
          margin-top: -0.7rem;
          margin-left: -0.95rem;
        }

        input {
          background: rgba(255, 255, 255, 0.09);
          border: 0;
          color: var(--color-text-white);

          &::placeholder {
            color: var(--color-text-white);
          }
        }

        form {
          button svg {
            color: var(--color-text-white);
          }
        }
      `}
  }

  .header__search-container {
    position: relative;

    button {
      position: absolute;
      top: 50%;
      right: 1.8rem;
      width: 2.2rem;
      height: 2.2rem;
      background: none;
      transform: translate(0, -50%);

      svg {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
        color: var(--color-text-base);
      }
    }

    input {
      text-overflow: ellipsis;

      width: 16vw;
      max-width: 32.3rem;
      height: 4rem;

      padding-left: 1.8rem;
      padding-right: 3.8rem;
      border: 1px solid #bfbfbf;
      border-radius: 20px;

      font-family: var(--font-primary);

      &::placeholder {
        font-family: var(--font-primary);
        font-size: 1.4rem;
        color: var(--color-line-in-white);
      }

      img {
        width: 1.7rem;
      }
    }
  }

  button#button-rounded {
    width: max(25%, 17.2rem);
    max-width: 25.2rem;
    height: 4rem;

    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-content: ${p =>
    p.viewerStatus === 'premium' ? 'center' : 'space-between'};

  width: 65vw;
  max-width: 107.5rem;

  ul.header__menu-itens {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${p => (p.viewerStatus === 'premium' ? '95%' : '77%')};

    margin-bottom: 0;

    li {
      list-style: none;
    }

    a,
    button {
      background: none;
      color: var(--color-text-base);

      text-decoration: none;
      font: normal 1.4rem/2rem var(--font-primary);

      transition-property: all;
      transition-duration: 0.2s;

      .menu-icon {
        width: 1.6rem;
        margin-right: 0.3rem;
        fill: currentColor;

        svg {
          fill: currentColor;
        }

        @media screen and (${breakPoints.tablet}) {
          display: none;
        }
      }

      /* Estiliza apenas o item "ENTRAR" */
      &.signin {
        text-decoration: underline;
      }
    }

    a {
      color: ${p =>
        p.viewerStatus === 'premium'
          ? 'var(--color-text-white)'
          : 'var(--color-text-base)'};
    }

    &.active {
      a {
        // border-bottom: 3px solid #b0d135;

        font-weight: 700;
        color: #5d883e;
        pointer-events: none;
      }
    }

    a:hover,
    button:hover {
      font-weight: 700;

      color: #5d883e;
      text-decoration: none;
    }
  }

  .profile-picture {
    width: 3.7rem;
    height: 3.7rem;

    img {
      width: 3.7rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
