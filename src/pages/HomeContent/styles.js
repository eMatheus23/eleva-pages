import styled, { css } from 'styled-components/macro';
import { shade } from 'polished';

// AliceCarousel
import 'react-alice-carousel/lib/alice-carousel.css';

import trackCardImg from '../../assets/images/mockups/home-courses/a.png';
import miniCourseCardImg from '../../assets/images/mockups/home-courses/pexels-startup-stock-photos-7096.png';
import miniCourseHeaderImg from '../../assets/images/mockups/home-courses/photo-of-person-holding-black-pen-959816.png';
import centralBannerBackground from '../../assets/images/mockups/home-courses/notebook-1280538.png';

// Importa os break points já configurados
import breakPoints from '../../styles/config/breakPoints';

// Importa a estilização comum "ContentWrapper" para que seja possível alterar suas propriedades
import { ContentWrapper } from '../../styles/common/HomeStyledComponents';

const wrapperMaxWidth = '153rem';

export const CarouselDots = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 0.5rem;
  border-radius: 50%;
  background: #f8f7f8;
  transition: background-color 0.35s;

  opacity: 0.37;

  cursor: pointer;

  ${p =>
    p.isActive &&
    css`
      background: var(--color-primary);
      opacity: 1;
    `}
`;

export const StyledCarousel = styled.div`
  // Div que contém os dots do carrossel, não os dots em si.
  .alice-carousel__dots {
    position: absolute;
    bottom: 1rem;
    left: 50%;

    transform: translate(-50%, 0);
  }
`;

export const CityDialog = styled.div`
  width: 100%;
  min-height: 5.7rem;
  background: var(--color-primary);

  /* Sobreposição de estilização de componentes já estilizados */
  ${ContentWrapper} {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5.7rem;
  }

  h3 {
    font: normal 1.8rem/1.8rem var(--font-primary);
  }

  .input__container {
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 32.6rem;
    height: 3.3rem;
    margin-left: 1rem;
    border-radius: 1.7rem;
    background: var(--color-background);

    input {
      flex: 1;
      height: 100%;
      padding-left: 1.5rem;
    }

    button {
      width: 6.8rem;
      height: 2rem;
      background: none;
      font: normal 1.5rem/1.5rem var(--font-primary);
      border-left: 1px solid #bfbfbf;
    }
  }

  .tooltip {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    border-radius: 50%;
    background: #e4e4e4;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e4e4e4')};
    }

    span {
      font: normal 1.3rem/1.7rem var(--font-primary);
    }

    .tooltip__popup {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(100%, -100%);
      display: none;
      width: 22.2rem;
      height: 9.8rem;
      padding: 1.7rem 1.8rem 0;
      background: #ffffff;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 33px 33px 33px 0px;
      transition: opacity 0.4s;
      visibility: hidden;

      h6 {
        margin-bottom: 0.1rem;
        font: bold 1.1rem/1.4rem var(--font-primary);
        text-transform: uppercase;
        color: #5d883e;
      }

      p {
        font: normal 1.2rem/1.3rem var(--font-primary);
        text-align: left;
      }

      a {
        color: var(--color-text-link);

        &:hover {
          color: #5d883e;
        }
      }
    }

    ${p =>
      p.popupOpened &&
      css`
        background: ${shade(0.2, '#e4e4e4')};

        .tooltip__popup {
          display: block;
          opacity: 1;
          visibility: visible;
        }
      `}

    @media screen and (max-width: ${breakPoints.tablet}) {
      .tooltip__popup {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-100%, -100%);
        border-radius: 33px 33px 0px 33px;
      }
    }
  }

  @media screen and (max-width: ${breakPoints.tabletPortrait}) {
    ${ContentWrapper} {
      flex-wrap: wrap;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    h3 {
      min-width: 26.8rem;
      width: 80%;
      margin-bottom: 1rem;
      text-align: center;
    }
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    .input__container {
      width: 80%;
      /* width: 25.6rem; */
    }
  }
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

    .green-chevron {
      z-index: +3;
      position: absolute;
      right: 17rem;
      top: 0;
      height: 10.7rem;
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
        left: -2.6rem;
        top: 0;
        z-index: -1;
        height: 0;
        width: 0;
        border-left: 0rem solid transparent;
        border-right: 2.6rem solid #141414;
        border-bottom: 5.5rem solid transparent;
        border-top: 5.5rem solid transparent;
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

  @media screen and (max-width: ${breakPoints.tablet}) {
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

export const BigLectureCard = styled.section`
  overflow: hidden;
  width: 38%;
  max-width: 55.5rem;
  height: 30.2rem;
  background: var(--color-background);
  box-shadow: 0rem 0.3rem 0.6rem #00000029;
  border-radius: 0.9rem;

  .cover-authors__section {
    overflow: hidden;
    width: 100%;
    height: 51%;
    background: url(${p => p.background}) no-repeat center top;
    background-size: cover;

    .authors__overlay {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 46%;
      height: 100%;
      padding-left: 3.9rem;
      background: rgba(20, 20, 20, 0.77);

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(99%, 0);
        z-index: 4;
        height: 0;
        width: 0;
        border-left: 3rem solid rgba(20, 20, 20, 0.77);
        border-right: 0rem solid transparent;
        border-bottom: 7.8rem solid transparent;
        border-top: 7.8rem solid transparent;
      }

      .author {
        display: flex;
        align-items: center;

        img {
          width: 3.8rem;
          height: 3.8rem;
          border-radius: 50%;
          object-fit: cover;
        }

        p {
          margin-left: 1rem;
          font: normal 1.4rem/2.2rem var(--font-primary);
          color: var(--color-text-white);
        }
      }
    }
  }

  .text__section {
    h6.lecture__title {
      width: 100%;
      height: 9.6rem;
      padding: 2.4rem 2.8rem 2.6rem 3.4rem;
      font: normal 1.6rem/2.2rem var(--font-primary);
    }

    .info__section {
      width: 100%;
      display: grid;
      grid-template-columns: 1.2fr 1fr 2fr 2fr;
      grid-gap: 0.5rem;
      align-items: flex-end;
      padding-right: 2.8rem;
      padding-left: 3.4rem;

      .lecture__day,
      .lecture__hour {
        span {
          font: normal 1.4rem/1.8rem var(--font-primary);
          font-style: italic;
        }

        p {
          font: normal 2rem/1.8rem var(--font-primary);
          color: #5d883e;
        }
      }

      .lecture__link {
        font: normal 1.5rem/1.9rem var(--font-primary);
        margin-right: 20%;
        text-align: right;
        color: #494949;

        transition: transform 0.2s;

        &:hover {
          transform: translateY(-2px);
        }
      }

      .lecture__signup-link {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 17.7rem;
        height: 3.7rem;
        padding: 0 0.8rem;
        background: var(--color-primary);
        border-radius: 2.3rem;
        color: #494949;
        font: normal 1.6rem/1.9rem var(--font-primary);
        text-decoration: none;
        text-align: center;
        transition: background-color 0.2s;

        &:hover {
          background: var(--color-primary-hover);
        }
      }
    }
  }
`;

export const SmallLectureCard = styled.section`
  overflow: hidden;
  min-width: 23.8rem;
  width: 20%;
  max-width: 25.8rem;
  height: 30.2rem;
  background: var(--color-background);
  box-shadow: 0rem 0.3rem 0.6rem #00000029;
  border-radius: 0.8rem;

  img.lecture__cover {
    width: 100%;
    height: 51%;
    object-fit: cover;
  }

  .text__section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 48%;
    padding: 1rem 1rem 1.3rem;

    h6.lecture__category {
      font: normal 1.5rem/1.6rem var(--font-primary);
      color: #5d883e;
    }

    p.lecture__title {
      font: normal 1.6rem/1.8rem var(--font-primary);
    }

    .links__section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-left: 1rem;
      padding-right: 0.2rem;

      .lecture__link {
        font: normal 1.5rem/1.9rem var(--font-primary);
        color: #494949;

        transition: transform 0.2s;

        &:hover {
          transform: translateY(-2px);
        }
      }

      .lecture__signup-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11.3rem;
        height: 3.7rem;
        background: var(--color-primary);
        border-radius: 2.3rem;
        color: #494949;
        font: normal 1.6rem/1.9rem var(--font-primary);
        text-decoration: none;
        transition: background-color 0.2s;

        &:hover {
          background: var(--color-primary-hover);
        }
      }
    }
  }
`;

export const RecordedLecturesCard = styled.section`
  overflow: hidden;
  width: 38%;
  max-width: 56.1rem;
  height: 30.9rem;
  border-radius: 1.5rem;
  background: var(--color-background);

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

    .green-chevron {
      position: absolute;
      top: 0;
      left: 48%;
      transform: translate(-50%, 0);
      height: 8.4rem;
    }
  }

  .card__content {
    width: 100%;
    padding: 1rem 3.3rem 2rem 3.9rem;
  }

  .lecture {
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

    & + .lecture {
      padding-top: 0.6rem;
      border-top: 1px solid #bfbfbf;
    }
  }

  @media screen and (max-width: ${breakPoints.extendedPhone}) {
    header {
      padding: 1rem 2rem;
    }

    .card__content {
      padding: 1rem 2rem 3.9rem;
    }
  }
`;

export const LecturesContainer = styled.article`
  overflow: hidden;
  padding: 5.2rem 0 5rem;

  ${p =>
    p.background &&
    css`
      background: var(--color-background-secondary);
    `}

  ${ContentWrapper} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .cards__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    .cards__container {
      width: 94rem;
    }

    ${BigLectureCard} {
      width: 60%;
    }

    ${RecordedLecturesCard} {
      margin-top: 5rem;
      width: 100%;
      max-width: unset;
      height: unset;
    }
  }

  @media screen and (max-width: ${breakPoints.extendedPhone}) {
    .cards__container {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    ${BigLectureCard} {
      width: 100%;

      .cover-authors__section {
        .authors__overlay {
          width: 69%;
        }
      }

      .text__section {
        .lecture__title {
          padding: 1rem 1.5rem 2rem;
        }

        .info__section {
          grid-template-columns: 1.2fr 1fr 2fr 4fr;
          padding: 0 1.5rem;
        }

        .lecture__link {
          text-align: center;
        }
      }
    }

    ${SmallLectureCard} {
      width: 100%;
      margin-top: 5rem;
    }
  }
`;

export const MediumBannerCard = styled.section`
  overflow: hidden;
  width: 59%;
  max-width: 85.6rem;
  height: 32.1rem;
  margin-right: 3rem;
  background: url(${p => p.background}) no-repeat center top;
  background-size: cover;
  border-radius: 0.9rem;

  .text-filter__section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 8.1rem 6.1rem 3.7rem 6.6rem;
    background: rgba(0, 0, 0, 0.53);

    h3 {
      margin-bottom: 0.8rem;
      font: bold 3.3rem/3.4rem var(--font-primary);
      text-transform: uppercase;
      color: #b0d135;
    }

    h4 {
      font: bold 2rem/2.4rem var(--font-primary);
      text-transform: uppercase;
      color: var(--color-text-white);
    }

    .banner-cta__link {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 17.1rem;
      height: 4.3rem;
      margin-top: auto;
      background: var(--color-primary);
      border-radius: 2.3rem;
      color: #494949;
      font: normal 1.6rem/1.9rem var(--font-primary);
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        background: var(--color-primary-hover);
      }
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: ${breakPoints.phone}) {
    margin-right: 0;

    .text-filter__section {
      padding: 3rem 2rem;
    }
  }
`;

export const BannedAndVideoSection = styled.article`
  width: 100%;
  padding-bottom: 10rem;

  ${ContentWrapper} {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .video__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    max-width: 56.5rem;

    .video__title {
      margin-bottom: 1.2rem;
      font: normal 2.5rem/3rem var(--font-primary);
      text-transform: uppercase;
    }

    .video {
      width: 100%;
      height: 32.1rem;
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    ${ContentWrapper} {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  @media screen and (max-width: ${breakPoints.extendedPhone}) {
    ${ContentWrapper} {
      justify-content: space-evenly;
    }

    .video__container .video {
      height: unset;
    }
  }
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

  @media screen and (max-width: ${breakPoints.tablet}) {
    padding-bottom: 5rem;

    ${ContentWrapper} {
      flex-direction: column;
      align-items: center;
    }

    .modes-section {
      justify-content: space-evenly;
    }

    .mode-card {
      width: 46%;

      > img {
        width: 7vw;
      }
    }

    .certification,
    .themes-container {
      width: 100%;
      max-width: 79rem;

      p {
        margin-bottom: 3rem;
        max-width: unset;
      }

      a {
        margin-bottom: 1rem;
      }
    }
  }

  @media screen and (max-width: ${breakPoints.extendedPhone}) {
    .mode-card {
      width: 100%;
      margin-bottom: 2rem;

      > img {
        width: 15vw;
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
      width: 100%;
      max-width: 59rem;
      height: 24rem;
      color: var(--color-text-white);

      h4 {
        max-width: 50rem;
        font: normal 3rem/4.5rem var(--font-primary);
        color: var(--color-primary);
      }

      p {
        white-space: pre-wrap;
        margin-bottom: 6rem;
        font: normal 2rem/2.2rem var(--font-primary);
      }

      a {
        display: block;
        width: fit-content;
      }

      @media screen and (max-width: ${breakPoints.phone}) {
        height: 85%;
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

  @media screen and (max-width: ${breakPoints.tablet}) {
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

  @media screen and (max-width: ${breakPoints.tabletPortrait}) {
    section {
      width: 60vw;
      max-width: unset;
      height: calc(60vw);
      margin-bottom: 3rem;
    }
  }
`;
