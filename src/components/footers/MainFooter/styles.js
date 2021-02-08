import styled from 'styled-components';

import breakPoints from '../../../styles/config/breakPoints';

export const Container = styled.footer`
  z-index: 6;

  width: 100vw;

  padding: 0 min(4vw, 4rem);

  background: var(--color-background-secondary);
  font-family: var(--font-primary);
  color: var(--color-text-base);

  @media screen and (max-width: ${breakPoints.tablet}) {
    padding: 0 3rem;
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    padding: 0 2rem;
  }

  .footer-content-wrapper__desktop {
    max-width: 145rem;
    height: 100%;

    margin: 0 auto;
    padding-top: 5.7rem;

    @media screen and (max-width: ${breakPoints.phone}) {
      display: none;
    }

    .row {
      min-height: 15.5rem;

      > div {
        margin-bottom: 3rem;
      }
    }

    img.footer-logo {
      max-width: 19.4rem;
      margin-top: -1.5rem;
      margin-left: -0.4rem;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;

      &.brand-description {
        max-width: 27.6rem;
        margin-top: -0.4rem;
      }
    }

    h3 {
      margin-bottom: 0.5rem;

      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 400;
    }

    h2 {
      margin-bottom: 0.5rem;

      font-size: 2rem;
      line-height: 2.5rem;
    }

    li {
      font-family: var(--font-primary);
      font-size: 1.8rem;
      line-height: 2.5rem;
      list-style: none;

      & + li {
        margin-top: 0.2rem;
      }

      a {
        display: block;
        max-width: 26.6rem;

        text-decoration: none;
        color: var(--color-text-base);
      }

      a:hover {
        text-decoration: underline;
      }
    }

    .social-networks-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      flex-direction: row;
      gap: 0.3rem;
      margin-top: 0.8rem;

      img {
        width: 3.9rem;
      }
    }
  }

  .phone {
    padding-top: 2rem;

    .footer__links {
      margin-bottom: 2.2rem;
    }

    li {
      font-family: var(--font-primary);
      font-size: 1.8rem;
      line-height: 2.5rem;
      list-style: none;

      & + li {
        margin-top: 0.3rem;
      }

      a {
        display: block;
        max-width: 26.6rem;

        color: var(--color-text-base);
      }

      a:hover {
        text-decoration: underline;
      }
    }

    h2 {
      margin-bottom: 1rem;
      font: bold 2rem/2.5rem var(--font-primary);
    }

    .social-networks-links {
      a {
        width: 3.9rem;
        margin-bottom: 2rem;

        & + a {
          margin-left: 2rem;
        }
      }
    }

    .contacts {
      margin-bottom: 3rem;
    }
  }

  .copyrights {
    justify-content: center;
    align-items: center;
    min-height: 9.3rem;
  }
`;
