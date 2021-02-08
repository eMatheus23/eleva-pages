import styled, { css } from 'styled-components/macro';

export const HoverContainer = styled.div`
  position: relative;
  display: none;
  width: 100%;
  height: 100%;

  .hover-container__text {
    z-index: +2;
    position: absolute;
    top: 6.2rem;
    right: 0;
    width: 100%;
    padding: 0 2rem;
    text-align: right;

    h3 {
      color: var(--color-primary);
      font: normal 1.5rem/2rem var(--font-primary);
      letter-spacing: 0.17px;

      big {
        font: bold 3.5rem/2rem var(--font-primary);
      }
    }

    p {
      font: normal 1.5rem/2rem var(--font-primary);
      color: var(--color-text-white);
    }
  }

  .discount-long-flag {
    position: absolute;
    z-index: +1;
    top: 6px;
    right: -13px;

    p {
      position: absolute;
      top: 7px;
      right: 29px;
      font: bold 1.3rem/2.2rem var(--font-primary);
    }
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 0.7rem 0.7rem 0 0;
    background: #000000;
    opacity: 0.78;
  }
`;

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 25.8rem;
  height: 35.8rem;
  margin: 0 auto 1rem;
  border-radius: 0.7rem;
  box-shadow: 0px 3px 6px #00000029;

  &:hover ${HoverContainer} {
    // Habilita o hover apenas para visitantes e usuários free
    ${p =>
      p.viewerStatus !== 'premium' &&
      css`
        display: block;
      `}
  }

  .course-cover {
    position: relative;
    width: 100%;
    height: 16rem;

    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0.7rem 0.7rem 0 0;
      object-fit: cover;
    }
  }

  .discount-flag {
    position: absolute;
    top: 0.8rem;
    right: -1.3rem;

    img {
      width: 12.3rem;
      height: 4rem;
    }

    p {
      position: absolute;
      top: 0.6rem;
      right: 2.9rem;
      font: normal 1.4rem/2.2rem var(--font-primary);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 15.9rem;
    padding: 1rem 0.5rem 1rem 1.4rem;
    background: var(--color-background);

    h4 {
      font: bold 1.3rem/1.6rem var(--font-primary);
      color: var(--color-secondary);
    }

    p {
      overflow: hidden;
      max-height: 6rem;
      text-overflow: ellipsis;
      font: normal 1.5rem/2rem var(--font-primary);
      color: var(--color-text-base);
    }
  }

  .price-section {
    display: flex;
    align-items: flex-end;
    width: 100%;

    div {
      width: 50%;
    }

    span {
      font: normal 1.4rem/1.6rem var(--font-primary);
      color: var(--color-line-in-white);
    }

    h5 {
      margin: 0.1rem 0 0.3rem;
      font: normal 1.8rem/2.2rem var(--font-primary);
      color: var(--color-secondary);
    }

    strong {
      font: normal 2.6rem/2.2rem var(--font-primary);
    }

    p {
      font: normal 1.3rem/1.4rem var(--font-primary);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 9.9rem;
      height: 5rem;
      border-radius: 2.5rem;
      background: var(--color-secondary);

      &:hover {
        background: var(--color-secondary-hover);
      }
    }
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: auto;
    border-radius: 0 0 0.7rem 0.7rem;
    height: 3.4rem;
    background: var(--color-background-secondary);

    a {
      display: block;
      width: 100%;
      font: normal 1.5rem/2rem var(--font-primary);
      text-align: center;
      text-decoration: underline;
      color: var(--color-text-base);
    }
  }
`;
