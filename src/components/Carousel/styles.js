import styled from 'styled-components/macro';
import { shade } from 'polished';

export const Container = styled.div`
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
    background: var(--color-background);
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffffff')};
    }
  }

  .alice-carousel__prev-btn {
    left: -2.5rem;
  }

  .alice-carousel__next-btn {
    right: -1.2rem;
  }

  .alice-carousel__stage-item {
  }
`;

export const CarouselButton = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background: ${shade(0.2, '#ffffff')};
  }
`;
