import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

import heroImg from '../../assets/images/mockups/home-courses/as.png';
import trackCardImg from '../../assets/images/mockups/home-courses/a.png';
import miniCourseCardImg from '../../assets/images/mockups/home-courses/pexels-startup-stock-photos-7096.png';
import miniCourseHeaderImg from '../../assets/images/mockups/home-courses/photo-of-person-holding-black-pen-959816.png';
import bannerImg from '../../assets/images/mockups/home-trilhas/person-in-blue-shirt-wearing-black-round-analog-watch-3747106.png';
import centralBannerBackground from '../../assets/images/mockups/home-courses/notebook-1280538.png';

const wrapperMaxWidth = '153rem';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-background);

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #ffffff;
    background: var(--color-background);
    cursor: pointer;
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

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const Hero = styled.section`
  position: relative;

  width: 100%;
  height: 36.1rem;

  margin: 0 auto;
  margin-top: 6.5rem;

  background: url(${heroImg}) no-repeat center top;
  background-size: cover;

  .hero-img {
    position: relative;
    width: 100%;

    img {
      height: 29.5rem;
    }

    .image {
      width: 100%;
      object-fit: cover;
    }
  }

  ${ContentWrapper} {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .page-title {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: 3rem 0;
  }

  h1 {
    display: flex;
    align-items: center;
    font: normal 2.2rem/6.5rem var(--font-primary);
    color: var(--color-text-white);

    img {
      width: 3.8rem;
      margin-right: 1rem;
    }
  }

  h2 {
    max-width: 45.7rem;
    font: normal 3.2rem/4.3rem var(--font-primary);
    color: var(--color-primary);
    text-transform: uppercase;
  }

  p {
    max-width: 45.7rem;
    font: normal 2rem/3rem var(--font-primary);
    color: var(--color-text-white);
  }

  .details-container {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 50rem;
    height: 100%;
  }

  .triangle {
    position: absolute;
    right: -18.6rem;
    top: 0;
    z-index: 4;
    height: 0;
    width: 0;
    border-left: 80px solid #141414;
    border-right: 106px solid transparent;
    border-bottom: 180px solid transparent;
    border-top: 180px solid transparent;
    opacity: 0.65;
  }

  .detail {
    position: absolute;
    right: -7.7rem;
    top: 0;
    z-index: 5;
    height: 100%;
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 4;
    height: 100%;
    width: 120rem;
    background: #141414;
    opacity: 0.65;
  }
`;

export const SearchSection = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 10.9rem;
  margin: 5rem auto 7rem;
  padding: 0 4rem;

  .col-7 {
    padding: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 85.8rem;
    height: 5.2rem;

    border-radius: 3.2rem;
    background: var(--color-background-secondary);

    button:first-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 13.4rem;
      height: 100%;

      background: none;
      font: normal 1.3rem/1.6rem var(--font-primary);

      img:first-of-type {
        width: 1.1rem;
        margin-left: 2.3rem;
      }
    }

    input {
      flex: 1;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 3rem;
      background: none;
      font: normal 1.6rem/1.9rem var(--font-primary);

      &::placeholder {
        color: #b9b9b9;
      }
    }

    button:last-of-type {
      display: flex;
      width: 10.4rem;
      height: 100%;
      background: var(--color-primary);

      svg {
        margin: auto;
        transform: scaleX(-1);
      }
    }
  }

  .sugestions {
    overflow-x: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 85.8rem;

    p {
      font: normal 1.3rem/1.6rem var(--font-primary);
      margin-right: 3vw;
    }

    button {
      padding: 0.3rem 1rem;
      border: 1px solid var(--color-background-secondary);
      border-radius: 1.6rem;
      background: none;
      font: normal 1.3rem/1.6rem var(--font-primary);

      & + button {
        margin-left: 0.4vw;
      }
    }
  }

  aside {
    overflow: hidden;
    width: 100%;
    max-width: 26.9rem;
    height: 10.7rem;
    padding-left: 5rem;
    padding-right: 0;
    border-radius: 0.9rem;
    background-size: cover;

    > div {
      position: relative;

      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 0.9rem;
    }

    .text {
      position: absolute;
      z-index: 3;
      top: 0;
      right: 0;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 1.2rem 2rem 1.1rem 0;

      h4 {
        font: bold 2.5rem/2.6rem var(--font-primary);
        color: var(--color-text-white);
      }

      a {
        font: normal 1.4rem/1.4rem var(--font-primary);
        color: var(--color-primary);
      }

      img {
        position: absolute;
        right: 16.5rem;
        top: 0;
        height: 10.9rem;
      }

      .triangle {
        position: absolute;
        right: 17rem;
        top: 0;
        z-index: -1;
        height: 0;
        width: 0;
        border-left: 0px solid transparent;
        border-right: 18px solid #141414;
        border-bottom: 55px solid transparent;
        border-top: 55px solid transparent;
        opacity: 0.65;
      }

      .filter {
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
        height: 10.9rem;
        width: 17rem;
        background: #141414;
        opacity: 0.65;
      }
    }
  }

  .track-card {
    background: url(${trackCardImg}) no-repeat center top;
    background-size: cover;
  }

  .mini-course {
    background: url(${miniCourseCardImg}) no-repeat center top;
    background-size: cover;
  }
`;

export const MyCoursesContainer = styled.article`
  padding-bottom: 3.8rem;

  footer {
    width: 100%;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25.9rem;
      height: 5.1rem;
      margin: 0 auto;
      border: 0.1rem solid #bfbfbf;
      border-radius: 2.6rem;
      text-decoration: none;
      color: var(--color-text-in-white);
      font: normal 2rem/2.5rem var(--font-primary);
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ffffff')};
      }

      svg {
        margin-left: 1rem;
      }
    }
  }
`;

export const MyCourseCard = styled.div`
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
    position: relative;
    width: 100%;
    height: 15.9rem;

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

  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 19.8rem;
    padding: 1rem 1rem 2rem 1.4rem;

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

export const ArticleHeader = styled.div`
  margin-bottom: 2.2rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    width: 100%;

    h3 {
      margin-right: 1rem;
      font: normal 2.5rem/2.5rem var(--font-primary);
      text-transform: uppercase;
    }

    > div {
      flex: 1;
      height: 1.6rem;
      border-bottom: 1px solid #bfbfbf;
    }

    a {
      margin-left: 3rem;
      font: normal 2rem/2.5rem var(--font-primary);
      color: #5d883e;
    }
  }

  h4 {
    margin-top: 1rem;
    font: normal 1.8rem/2.2rem var(--font-primary);
  }
`;

export const CarouselButton = styled.span`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const MiniCourseSection = styled.article`
  width: 100%;
  margin-bottom: 6.5rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  section {
    overflow: hidden;
    width: 100%;
    max-width: 56.1rem;
    height: 30.9rem;
    border-radius: 1.5rem;
    background: var(--color-background-secondary);

    header {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      height: 8.4rem;
      padding: 1rem 3.3rem 1rem 4rem;
      background: url(${miniCourseHeaderImg}) no-repeat;
      background-size: cover;

      div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
      }

      h4 {
        font: normal 2rem/2rem var(--font-primary);
        color: var(--color-text-white);
      }

      p {
        font: normal 1.7rem/2rem var(--font-primary);
        color: var(--color-text-white);
      }

      a {
        font: normal 15px/15px var(--font-primary);
        color: var(--color-text-white);
      }

      > img {
        position: absolute;
        top: 0;
        left: 48%;
        transform: translate(-50%, 0);
      }
    }

    > div {
      width: 100%;
      height: 22.5rem;
      padding: 1rem 3.3rem 2rem 3.9rem;
    }

    .mini-course {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 0.6rem;
      color: var(--color-text-base);
      font: normal 1.5rem/2rem var(--font-primary);
      text-decoration: none;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-0.1rem);
      }

      img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        border-radius: 0.9rem;
        object-fit: cover;
      }

      svg {
        margin-left: auto;
      }

      & + .mini-course {
        padding-top: 0.6rem;
        border-top: 1px solid #bfbfbf;
      }
    }
  }

  aside {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 86.1rem;
    height: 31rem;
    border-radius: 2rem;
    background: url(${bannerImg}) no-repeat;
    background-size: cover;

    div {
      z-index: +2;
      position: absolute;
      top: 0;
      left: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      transform: translate(-50%, 0);
      color: var(--color-secondary);

      h2 {
        font: normal 3.5rem/4.5rem var(--font-primary);
      }

      p {
        font: normal 2.2rem/2.4rem var(--font-primary);
        text-align: center;
      }
    }

    .filter {
      z-index: +1;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      opacity: 0.81;
    }
  }
`;

export const CoursesCarouselContainer = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 5.2rem 0 5rem;

  ${p =>
    p.background &&
    css`
      background: var(--color-background-secondary);
      padding-top: ;
    `}
`;

export const CourseModeContainer = styled.article`
  width: 100%;
  padding-top: 7.1rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .modes {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .mode-card {
    overflow: hidden;
    display: flex;
    width: 100%;
    max-width: 33.6rem;
    height: 16.4rem;
    margin-bottom: 4.7rem;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 1.5rem;

    > img {
      width: 100%;
      max-width: 8.9rem;
      height: 100%;
      object-fit: cover;
    }
  }

  main {
    width: 100%;
    height: 100%;
    padding: 1.8rem;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 4.2rem;
    }

    span {
      margin-right: 1rem;
      font: normal 1.6rem/2rem var(--font-primary);
    }

    h4 {
      font: normal 2rem/3rem var(--font-primary);
      line-height: 3rem;
      color: var(--color-text-link);
    }

    p {
      font: normal 1.6rem/2rem var(--font-primary);
      line-height: 2rem;
    }

    .elementary-logo {
      width: 5rem;
      height: 4.2rem;
      margin-top: auto;
    }

    .intermediary-logo {
      width: 3.799rem;
      height: 3.899rem;
      margin-bottom: 2rem;
    }

    .advanced-logo {
      width: 4.799rem;
      height: 5.299rem;
    }

    .degree-logo {
      width: 3.71rem;
      height: 3.04rem;
    }
  }

  .certification {
    width: 48%;

    h2 {
      display: flex;
      align-items: center;
      font: normal 2.5rem/2.4rem var(--font-primary);

      img {
        width: 5rem;
        margin-right: 1rem;
      }
    }

    p {
      max-width: 70rem;
      margin-top: 1rem;
      font: normal 1.8rem/2.4rem var(--font-primary);
    }
  }

  .themes-container {
    display: flex;
    flex-direction: column;
    width: 49%;
    margin-right: 1rem;
    border-radius: 1.5rem;

    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
    }

    h2 {
      font: normal 2.5rem/3rem var(--font-primary);
      color: var(--color-secondary);
      text-transform: uppercase;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 13.3rem;
      height: 3.6rem;
      margin-bottom: 4rem;
      padding: 0 1rem;
      border: 1px solid #bfbfbf;
      border-radius: 2.2rem;
      font: normal 1.2rem/1.5rem var(--font-primary);
      color: #535353;
      background: var(--color-background);
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      transition: background-color 0.2s;

      :hover {
        background: ${shade(0.2, '#ffffff')};
      }

      &.more-themes {
        font-size: 1.4rem;
        background: var(--color-primary);
        border: none;

        &:hover {
          background: var(--color-primary-hover);
        }
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const CentralBannerContainer = styled.article`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 43.9rem;
  background: url(${centralBannerBackground}) no-repeat center top;
  background-size: cover;

  ${props =>
    props.extraMargin &&
    css`
      margin-top: 13rem;
    `}

  ${ContentWrapper} {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    align-items: center;

    section {
      max-width: 59rem;
      height: 24rem;
      color: var(--color-text-white);

      h4 {
        max-width: 50rem;
        font: normal 3rem/4.5rem var(--font-primary);
        color: var(--color-primary);
      }

      p {
        margin-bottom: 6rem;
        font: normal 2rem/2.2rem var(--font-primary);
      }

      a {
        display: block;
        width: fit-content;
      }
    }
  }

  .filters-container {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 60rem;
    height: 100%;
  }

  .triangle {
    position: absolute;
    right: -10rem;
    top: 0;
    z-index: -1;
    height: 0;
    width: 0;
    border-left: 100px solid #141414;
    border-right: 0px solid transparent;
    border-bottom: 219.5px solid transparent;
    border-top: 219.5px solid transparent;
    opacity: 0.85;
  }

  .filter {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 200rem;
    background: #141414;
    border-right: 1px solid #141414;
    opacity: 0.85;
  }

  .filter-black {
    position: absolute;
    right: 0;
    top: 0;
    z-index: +1;
    height: 100%;
    width: 100%;
    background: #000000;
    opacity: 0.36;
  }
`;

export const LastTracksContainer = styled.article`
  padding-top: 9rem;
  padding-bottom: 4.8rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
  }

  .track {
    overflow: hidden;
    position: relative;
    max-width: 47rem;
    width: 35%;
    height: 31.9rem;
    margin: 0 auto;
    border-radius: 1.4rem;

    section {
      z-index: +3;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      width: 100%;
      height: 100%;

      padding: 3rem;
      color: var(--color-text-white);

      > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      span {
        font: normal 2.5rem/2.5rem var(--font-primary);
      }

      h4 {
        margin: 1rem 0;
        font: normal 4rem/4rem var(--font-primary);
        color: var(--color-primary);
      }

      p {
        font: normal 2.5rem/3rem var(--font-primary);
      }

      a {
        display: block;
        padding: 1.25rem 3.5rem;
        border-radius: 2.3rem;
        background: var(--color-background);
        text-decoration: none;
        font: normal 1.8rem/2.2rem var(--font-primary);
        color: #494949;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, '#ffffff')};
        }
      }
    }

    .filter {
      z-index: +1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000000;
      opacity: 0.36;
    }

    img {
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ExtrasSection = styled.article`
  width: 100%;
  padding: 5rem 0 9rem;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  section {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 45.9rem;
    height: 45.6rem;
    border-radius: 2rem;
    box-shadow: 0px 3px 6px #00000029;

    a {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 50%;
      padding: 1.8rem 2rem 1.8rem 3rem;
      background: var(--color-background);

      h4 {
        font: normal 2.7rem/3.5rem var(--font-primary);
        color: var(--color-secondary);
      }

      p {
        margin-top: 1rem;
        font: normal 1.8rem/2rem var(--font-primary);
        color: #535353;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: center;
        width: 16.4rem;
        height: 4.5rem;
        margin-top: auto;
        border: 1px solid #707070;
        border-radius: 2.3rem;
        font: normal 1.8rem/2.2rem var(--font-primary);
        color: #535353;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.1, '#ffffff')};
        }
      }
    }
  }
`;
