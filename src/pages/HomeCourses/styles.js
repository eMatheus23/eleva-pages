import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

import trackCardImg from '../../assets/images/mockups/home-courses/a.png';
import miniCourseCardImg from '../../assets/images/mockups/home-courses/pexels-startup-stock-photos-7096.png';
import miniCourseHeaderImg from '../../assets/images/mockups/home-courses/photo-of-person-holding-black-pen-959816.png';
import bannerImg from '../../assets/images/mockups/home-trilhas/person-in-blue-shirt-wearing-black-round-analog-watch-3747106.png';
import centralBannerBackground from '../../assets/images/mockups/home-courses/notebook-1280538.png';
import cardDetail from '../../assets/images/other/card-detail-02.svg';

const wrapperMaxWidth = '153rem';

const breakPoints = {
  // Telas de até:
  phone: 'max-width: 600px',
  tabletPortrait: 'max-width: 900px',
  tablet: 'max-width: 1200px',
  desktop: 'max-width: 1800px',
};

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-background);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${wrapperMaxWidth};
  height: 100%;

  margin: 0 auto;
  padding: 0 4rem;
`;

export const SearchContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${wrapperMaxWidth};
  margin: 5rem auto 7rem;
  padding: 0 4rem;

  .search-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    max-width: 85.8rem;

    @media screen and (max-width: 1500px) {
      width: 54%;
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
  }

  aside {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    .navi-card {
      overflow: hidden;
      position: relative;
      width: 43%;
      max-width: 26.9rem;
      height: 10.7rem;
      padding-right: 0;
      border-radius: 0.9rem;
      background-size: cover;
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
        right: 17rem;
        top: 0;
        height: 10.9rem;
      }
    }

    .filter {
      z-index: 2;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: min(17rem, 80%);
      background: #141414;
      opacity: 0.65;

      &::before {
        content: '';
        position: absolute;
        left: -26px;
        top: 0;
        z-index: -1;
        height: 0;
        width: 0;
        border-left: 0px solid transparent;
        border-right: 26px solid #141414;
        border-bottom: 55px solid transparent;
        border-top: 55px solid transparent;
      }

      &::after {
        content: url(${cardDetail});
        position: absolute;
        left: -21px;
        top: 0;
        height: 100%;
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
  }

  @media screen and (${breakPoints.tablet}) {
    flex-direction: column;
    align-items: center;

    .search-section {
      width: 100%;
    }

    .sugestions {
      margin-top: 1.5rem;
    }

    aside {
      margin-top: 5rem;
    }
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

  .courses-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .user-course-card {
      margin: 0 1rem 4rem;
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

      &:hover {
        color: var(--color-text-in-white);
      }
    }
  }

  h4 {
    margin-top: 1rem;
    font: normal 1.8rem/2.2rem var(--font-primary);
  }
`;

export const MiniCourseSection = styled.article`
  width: 100%;
  padding: 7rem 0;

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  main {
    overflow: hidden;
    width: 39%;
    max-width: 56.1rem;
    height: 30.9rem;
    border-radius: 1.5rem;
    background: var(--color-background-secondary);

    @media screen and (${breakPoints.tablet}) {
      width: 100%;
      max-width: unset;
    }

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

  aside.banner {
    overflow: hidden;
    position: relative;
    width: 60%;
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

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      flex-direction: column;
      align-items: center;
    }

    aside.banner {
      width: 100%;
      max-width: unset;
      margin-top: 5rem;
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

  .modes-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .mode-card {
    overflow: hidden;
    display: flex;
    width: 24.5%;
    max-width: 33.5rem;
    height: 16.4rem;
    margin-bottom: 4.7rem;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 1.5rem;

    > img {
      width: 27%;
      max-width: 9.9rem;
      height: 100%;
      object-fit: cover;

      @media screen and (max-width: 1545px) {
        width: 4vw;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    padding: 1.8rem 1.5rem;

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

  @media screen and (${breakPoints.tablet}) {
    .modes-section {
      justify-content: space-evenly;
    }

    .mode-card {
      width: 46%;

      > img {
        width: 7vw;
      }
    }
  }

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      flex-direction: column;
      align-items: center;
    }

    .certification,
    .themes-container {
      width: 100%;
      max-width: 79rem;

      p {
        margin-bottom: 3rem;
        max-width: unset;
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
    justify-content: space-between;
  }

  .track {
    overflow: hidden;
    position: relative;
    max-width: 47rem;
    width: 32%;
    height: calc(30vw * 0.8);
    max-height: 31.9rem;
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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      span {
        font: normal 2.5rem/2.5rem var(--font-primary);
        text-transform: uppercase;
      }

      h4 {
        margin: 1rem 0;
        font: normal 4rem/4rem var(--font-primary);
        color: var(--color-primary);
        text-transform: uppercase;
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

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    .track {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw * 0.8);
      max-height: unset;
      margin-bottom: 3rem;
    }
  }

  @media screen and (${breakPoints.tabletPortrait}) {
    .track {
      width: 70vw;
      max-width: unset;
      height: calc(70vw * 0.61);
      min-height: 26rem;
      margin-bottom: 3rem;
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
    width: 32%;
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

  @media screen and (${breakPoints.tablet}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }
    section {
      min-width: 40rem;
      width: 45%;
      min-height: 26rem;
      height: calc(45vw);
      max-height: unset;
      margin-bottom: 3rem;
    }
  }

  @media screen and (${breakPoints.tabletPortrait}) {
    section {
      width: 60vw;
      max-width: unset;
      height: calc(60vw);
      margin-bottom: 3rem;
    }
  }
`;
