import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 25.8rem;
  height: 35.8rem;
  margin: 0 auto 4rem;
  border-radius: 0.7rem;
  box-shadow: 0px 3px 6px #00000029;
  background: var(--color-background);

  ${p =>
    p.courseType === 'track' &&
    css`
      background: var(--color-secondary);
    `}

  .course-cover {
    width: 100%;
    height: 13.1rem;
    border-radius: 0.7rem 0.7rem 0 0;
    object-fit: cover;

    ${p =>
      p.progress === '100%' &&
      css`
        opacity: 0.3;
      `}
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 19.8rem;
    padding: 1rem 1rem 2rem 1.4rem;
  }

  .text-container {
    width: 100%;

    h4 {
      font: bold 1.3rem/1.6rem var(--font-primary);
      color: var(--color-secondary);

      ${p =>
        p.courseType === 'track' &&
        css`
          color: var(--color-primary);
        `}
    }

    p {
      width: 102%;
      font: normal 1.5rem/2rem var(--font-primary);
      color: var(--color-text-base);

      ${p =>
        p.courseType === 'track' &&
        css`
          color: var(--color-text-white);
        `}
    }
  }

  .course__progress-container {
    position: relative;
    width: 21.5rem;
    height: 0.5rem;
    margin: 1rem 0;
    margin-left: 0.9rem;
    background: var(--color-background-secondary);

    .wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .progress-bar {
      // Recebe a largura da barra como uma prop (courseProgress)
      width: ${p => (p.courseProgress ? p.courseProgress : '0%')};
      height: 100%;
      background: var(--color-primary);
    }

    // Primeiro círculo
    &::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translate(0, -50%);
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background: var(--color-primary);
    }

    // Último círculo
    &::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translate(0, -50%);
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 50%;
      background: var(--color-line-in-white);

      // Se o progresso for 100%, o último círculo fica verde.
      ${p =>
        p.courseProgress === '100%' &&
        css`
          background: var(--color-primary);
        `}
    }
  }

  .flex-buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .course__link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.1rem;
    border: 0.1rem solid #bfbfbf;
    border-radius: 2.6rem;
    text-decoration: none;
    font: normal 1.5rem/2.2rem var(--font-primary);
    color: var(--color-text-white);
    transition: background-color 0.2s;

    ${p =>
      p.courseType === 'course' &&
      css`
        color: var(--color-text-in-white);
      `}

    &:hover {
      background-color: ${shade(0.2, '#ffffff')};
    }

    &:hover {
      ${p =>
        p.courseType === 'track' &&
        css`
          background-color: var(--color-secondary-hover);
        `}
    }

    &.access {
      width: 22.1rem;
      margin: 0 auto;

      &.desabled {
        pointer-events: none;
        color: var(--color-text-in-secondary);
        border: 0.1rem solid var(--color-text-in-secondary);
      }
    }

    &.share {
      width: 8.1rem;
      border: none;
      color: var(--color-text-in-white);
      background: var(--color-primary);

      &:hover {
        background-color: var(--color-primary-hover);
      }

      img {
        width: 2.3rem;
      }
    }

    &.certificate {
      width: 13rem;
      border: none;
      color: var(--color-text-in-white);
      background: var(--color-primary);

      &:hover {
        background-color: var(--color-primary-hover);
      }
    }
  }
`;
