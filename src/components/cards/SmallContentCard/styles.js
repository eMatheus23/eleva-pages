import styled from 'styled-components/macro';

export const Container = styled.div`
  overflow: hidden;
  width: 19.7rem;
  height: 22.9rem;
  margin: 1rem auto;
  margin-bottom: 5rem;
  background: #ffffff;
  box-shadow: 0rem 0.3rem 0.6rem #00000029;
  border-radius: 0.7rem;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  .cover__container {
    position: relative;
    width: 100%;
    height: 52.6%;
    object-fit: cover;
  }

  .play-video__icon {
    position: absolute;
    top: 52%;
    left: 54%;
    transform: translate(-50%, -50%);
    width: 8.39rem;
  }

  .podcast-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    /* box-shadow: 0px 3px 6px #00000029; */
    opacity: 0.79;
  }

  .cover__background-img {
    width: 100%;
    height: 100%;
  }

  .text__container {
    width: 100%;
    height: 47.4%;
    padding: 0.8rem 1.1rem;

    h5 {
      font: normal 1.3rem/1.6rem var(--font-primary);
      color: #5d883e;
    }

    p {
      overflow: hidden;
      max-height: 6rem;
      font: normal 1.5rem/2rem var(--font-primary);
    }
  }
`;
