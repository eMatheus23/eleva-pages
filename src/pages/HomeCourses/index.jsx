import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { BiSearchAlt } from 'react-icons/bi';
import {
  ArticleHeader,
  ContentWrapper,
  Container,
  MyCourses,
  MyCourseCard,
  CoursesCarouselContainer,
  CarouselButton,
  Hero,
  SearchSection,
  CourseModeContainer,
  CourseCard,
  CentralBannerContainer,
  LastTracksContainer,
  MiniCourseSection,
  ExtrasSection,
} from './styles';

// Services
import getViewerStatus from '../../services/getViewerStatus';

import CourseStatus from './components/CourseStatus';

// Icons
import coursesIcon from '../../assets/images/icons/courses-icon-02.svg';
import heroDetail from '../../assets/images/other/hero-detail.svg';
import filterIcon from '../../assets/images/icons/filter-icon.svg';
import bitwiseImg from '../../assets/images/icons/bitwise.svg';
import cardDetail02 from '../../assets/images/other/card-detail-02.svg';
import cardDetailMini from '../../assets/images/other/card-detail-mini-courses.svg';
import cartIcon from '../../assets/images/icons/cart-icon-03.svg';
import discountFlag from '../../assets/images/flags/discount-flag.svg';
import discountLongFlag from '../../assets/images/flags/discount-long-flag.svg';

import Header from '../../components/headers/MainHeader';
import Footer from '../../components/footers/MainFooter';

// Mockups
import trackImg from '../../assets/images/mockups/home-trilhas/Grupo 843.png';
import trackImg02 from '../../assets/images/mockups/home-trilhas/soybeans-4019684_960_720.png';
import trackImg03 from '../../assets/images/mockups/home-trilhas/thumbnail-10.png';
import HighlightCardImg from '../../assets/images/mockups/home-trilhas/7b26a7c5caa547331e37366628b46d43.png';
import Extras01 from '../../assets/images/mockups/home-trilhas/pexels-photo-1181304.png';
import Extras02 from '../../assets/images/mockups/home-courses/b.png';
import Extras03 from '../../assets/images/mockups/home-courses/$y3k61h0util.png';
import MiniCourseImg from '../../assets/images/mockups/home-courses/man-taking-notes-in-front-of-his-computer-4238481.png';
import MiniCourseImg02 from '../../assets/images/mockups/home-courses/man-in-black-suit-jacket-standing-and-smiling-3777557.png';
import MiniCourseImg03 from '../../assets/images/mockups/home-courses/person-playing-chess-1040157.png';
import MiniCourseImg04 from '../../assets/images/mockups/home-courses/woman-in-black-coat-holding-black-smartphone-3755824.png';
import ElementaryImg from '../../assets/images/mockups/home-courses/low-angle-photography-of-man-jumping-2923156.png';
import ElementaryLogo from '../../assets/images/mockups/home-courses/fast-stopwatch-thin-line-icon-time-and-speed-vector-23869785.png';
import IntermediaryImg from '../../assets/images/mockups/home-courses/man-wearing-black-cap-with-eyes-closed-under-cloudy-sky-810775.png';
import IntermediaryLogo from '../../assets/images/mockups/home-courses/Captura de Tela 2020-04-05 às 16.46.32.png';
import AdvancedImg from '../../assets/images/mockups/home-courses/adult-african-american-afro-black-female-1181519.png';
import AdvancedLogo from '../../assets/images/mockups/home-courses/Captura de Tela 2020-04-05 às 16.46.24.png';
import DegreeImg from '../../assets/images/mockups/home-courses/julia-kutsaeva-iEPgp2bPbZM-unsplash.png';
import DegreeLogo from '../../assets/images/icons/graduation-cap.svg';
import CertificationIcon from '../../assets/images/icons/certification.svg';
import MyCourseImg from '../../assets/images/mockups/home-courses/Hero3-SmartSolutions-1366x768.png';

import FindOut from './FindOut';

const HomeTracks = () => {
  document.title = 'Trilhas de Ensino | Elevagro';

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  // Funções para teste
  const handleLogin = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    setViewerStatus('free');
  }, []);

  const backToVisit = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('visit');
  }, []);

  const becomePremium = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'premium');

    setViewerStatus('premium');
  }, []);
  // Funções para teste

  const responsiveCourse = {
    0: { items: 4 },
    1250: { items: 5 },
    1530: { items: 5 },
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronLeft size={30} />
      </CarouselButton>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronRight size={30} />
      </CarouselButton>
    );
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <Hero>
        <ContentWrapper>
          <div className="page-title">
            <h1>
              <img src={coursesIcon} alt="TRILHAS DE ENSINO" />
              CURSOS
            </h1>
            <h2>Capacitação para o NOVO agronegócio</h2>
            <p>
              Aqui você aprende uma nova habilidade ou área com profissionais
              referência de mercado.
            </p>
          </div>

          <div className="details-container">
            <img src={heroDetail} className="detail" alt="Hero" />
            <div className="triangle" />
            <div className="filter" />
          </div>
        </ContentWrapper>
      </Hero>

      <SearchSection className="row">
        <section className="col-7">
          <form className="search-container">
            <button type="button">
              <img src={filterIcon} alt="Filtrar" />
              CATEGORIA
              <img src={bitwiseImg} alt="" />
            </button>
            <input type="text" placeholder="Localizar uma trilha" />
            <button type="submit">
              <BiSearchAlt size={20} />
            </button>
          </form>

          <div className="sugestions">
            <p>Sugestões:</p>
            <button type="button">SOJA</button>
            <button type="button">DOENÇAS</button>
            <button type="button">SEMENTES</button>
            <button type="button">NUTRIÇÃO</button>
            <button type="button">DANINHAS</button>
            <button type="button">SOLOS</button>
            <button type="button">GESTÃO</button>
            <button type="button">FINANÇAS</button>
          </div>
        </section>

        <aside className="track-card">
          <div>
            <div className="text">
              <h4>
                Trilhas
                <br />
                de Ensino
              </h4>
              <Link to="/tracks">Acesse</Link>
              <img src={cardDetail02} alt="" />
              <div className="triangle" />
              <div className="filter" />
            </div>
          </div>
        </aside>

        <aside className="mini-course">
          <div>
            <div className="text">
              <h4>
                Mini
                <br />
                Cursos
              </h4>
              <Link to="/tracks">Acesse</Link>
              <img src={cardDetail02} alt="" />
              <div className="triangle" />
              <div className="filter" />
            </div>
          </div>
        </aside>
      </SearchSection>

      <MyCourses>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>MEUS CURSOS</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </header>
          </ArticleHeader>

          <AliceCarousel
            responsive={responsiveCourse}
            mouseTracking
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          >
            {/* Card de curso do "Meus cursos" */}
            <MyCourseCard
              courseType="track"
              courseProgress={`${35}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="12/28/2021" courseProgress={35} />

              <main>
                <div>
                  <h4>TRILHA DE ENSINO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="track"
              courseProgress={`${70}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="03/28/2022" courseProgress={70} />

              <main>
                <div>
                  <h4>TRILHA DE ENSINO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="course"
              courseProgress={`${50}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="04/28/2021" courseProgress={50} />

              <main>
                <div>
                  <h4>CURSO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="track"
              courseProgress={`${10}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="02/01/2021" courseProgress={10} />

              <main>
                <div>
                  <h4>TRILHA DE ENSINO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="course"
              courseProgress={`${100}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="01/28/2021" courseProgress={100} />

              <main>
                <div>
                  <h4>CURSO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="course"
              courseProgress={`${35}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="01/28/2021" courseProgress={35} />

              <main>
                <div>
                  <h4>CURSO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>

            <MyCourseCard
              courseType="track"
              courseProgress={`${35}%`}
              courseStatus="started"
              // started, expiring, expired, completed
            >
              {/* Envia o progresso do curso para o styled-component como porcentagem */}
              <div className="course-cover">
                <img src={MyCourseImg} alt="" />
              </div>

              <CourseStatus expireDate="02/01/2021" courseProgress={35} />

              <main>
                <div>
                  <h4>TRILHA DE ENSINO</h4>

                  <div className="course__progress-container">
                    <div className="wrapper">
                      <div className="progress-bar" />
                    </div>
                  </div>

                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <Link to="/track" className="course__link">
                  ACESSAR
                </Link>
              </main>
            </MyCourseCard>
          </AliceCarousel>
        </ContentWrapper>
      </MyCourses>

      <CoursesCarouselContainer>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>LANÇAMENTOS</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </header>
          </ArticleHeader>

          <AliceCarousel
            responsive={responsiveCourse}
            mouseTracking
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          >
            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nutrição de Plantas</h4>
                  <p>
                    Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                    eficiente e segura
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>238</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nematologia</h4>
                  <p>Mofo-branco na folha da soja: causas e tratamentos</p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>245</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>40% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>98</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Solos</h4>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>74</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>
          </AliceCarousel>
        </ContentWrapper>
      </CoursesCarouselContainer>

      <MiniCourseSection>
        <ContentWrapper>
          <section>
            <header>
              <div>
                <h4>MINI CURSOS</h4>
                <p>Exclusivos para Premium</p>
              </div>
              <Link to="/">VER TODOS</Link>
              <img src={cardDetailMini} alt="" />
            </header>

            <div>
              <Link to="/" className="mini-course">
                <img src={MiniCourseImg} alt="" />
                Métodos ágeis aplicado no agronegócio
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg02} alt="" />
                Academia do RTV
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg03} alt="" />
                Caminhos do novo agro
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg04} alt="" />
                Consultoria agrícola: criando mercados
                <FiChevronRight size={30} />
              </Link>
            </div>
          </section>

          <aside>
            <div>
              <h2>PROMOÇÃO</h2>
              <p>Aprenda novas habilidades com cursos a partir de R$56,00</p>
              <p>Área para banner</p>
            </div>
            <div className="filter" />
          </aside>
        </ContentWrapper>
      </MiniCourseSection>

      <CoursesCarouselContainer background>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>Cursos em alta</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </header>
          </ArticleHeader>

          <AliceCarousel
            responsive={responsiveCourse}
            mouseTracking
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          >
            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nutrição de Plantas</h4>
                  <p>
                    Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                    eficiente e segura
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>238</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nematologia</h4>
                  <p>Mofo-branco na folha da soja: causas e tratamentos</p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>245</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>40% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>98</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Solos</h4>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>74</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>
          </AliceCarousel>
        </ContentWrapper>
      </CoursesCarouselContainer>

      <CourseModeContainer>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>MODALIDADES dos CursoS</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </header>
          </ArticleHeader>

          <section className="modes">
            <div className="mode-card">
              <img src={ElementaryImg} alt="" />
              <main>
                <div>
                  <img
                    src={ElementaryLogo}
                    alt=""
                    className="elementary-logo"
                  />
                  <span>20h</span>
                </div>
                <h4>ELEMENTARES</h4>
                <p>Cursos rápidos para quem tem pressa em aprender.</p>
              </main>
            </div>

            <div className="mode-card">
              <img src={IntermediaryImg} alt="" />
              <main>
                <div>
                  <img
                    src={IntermediaryLogo}
                    alt=""
                    className="intermediary-logo"
                  />
                  <span>20h</span>
                </div>
                <h4>INTERMEDIÁRIOS</h4>
                <p>Aliam os conceitos à prática com aprofundamento.</p>
              </main>
            </div>

            <div className="mode-card">
              <img src={AdvancedImg} alt="" />
              <main>
                <div>
                  <img src={AdvancedLogo} alt="" className="advanced-logo" />
                  <span>20h</span>
                </div>
                <h4>AVANÇADOS</h4>
                <p>
                  Nível mais aprofundado, para aprimorar a sua aprendizagem.
                </p>
              </main>
            </div>

            <div className="mode-card">
              <img src={DegreeImg} alt="" />
              <main>
                <div>
                  <img src={DegreeLogo} alt="" className="degree-logo" />
                  <span>20h</span>
                </div>
                <h4>PÓS-GRADUAÇÃO</h4>
                <p>
                  Conhecimento técnico de altíssimo nível, com certificação do
                  MEC.
                </p>
              </main>
            </div>
          </section>

          <section className="certification">
            <h2>
              <img src={CertificationIcon} alt="" />
              CERTIFICAÇÃO
            </h2>
            <p>
              Os cursos Elevagro possuem certificação de acordo com a carga
              horária de cada modalidade, e será emitido após o aluno atingir
              uma nota mínima de 70% de aprovação.
            </p>
          </section>

          <section className="themes-container">
            <div>
              <Link to="/">Soja</Link>
              <Link to="/">Doenças</Link>
              <Link to="/">Pragas</Link>
              <Link to="/">Nutrição</Link>
              <Link to="/">Solos</Link>
              <Link to="/">GESTÃO</Link>
              <Link to="/">Controle Biológico</Link>
              <Link to="/">Tec. de aplicação</Link>
              <Link to="/">GESTÃO</Link>
              <Link to="/" className="more-themes">
                <FiPlus size={20} />
                TEMAS
              </Link>
            </div>
          </section>
        </ContentWrapper>
      </CourseModeContainer>

      <CentralBannerContainer>
        <ContentWrapper>
          <section>
            <h4>ÁREA PARA BANNER NO CENTRO DA PÁGINA</h4>
            <p>
              Já temos esta função, agora é só adaptar ao layout novo.
              https://api.elevagro.com/admin/produto/lancamento/add/
            </p>
            <FindOut to="/">Saiba mais</FindOut>
          </section>

          <div className="filters-container">
            <div className="triangle" />
            <div className="filter" />
          </div>
        </ContentWrapper>
      </CentralBannerContainer>

      <LastTracksContainer>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>Últimas Trilhas adicionadas</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODAS</Link>
            </header>
          </ArticleHeader>

          <div className="track">
            <section>
              <div>
                <span>TRILHA</span>
                <h4>SOJA 360º</h4>
                <p>Visão completa para o domínio da soja.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </section>
            <div className="filter" />
            <img src={trackImg} alt="" />
          </div>

          <div className="track">
            <section>
              <div>
                <span>TRILHA</span>
                <h4>PLANTAÇÃO</h4>
                <p>Aumente os rendimentos da sua lavoura do início ao fim.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </section>
            <div className="filter" />
            <img src={trackImg02} alt="" />
          </div>

          <div className="track">
            <section>
              <div>
                <span>TRILHA</span>
                <h4>PERCEVEJOS</h4>
                <p>Conhecimento garantido para o combate.</p>
              </div>

              <Link to="/">Saiba mais</Link>
            </section>
            <div className="filter" />
            <img src={trackImg03} alt="" />
          </div>
        </ContentWrapper>
      </LastTracksContainer>

      <CoursesCarouselContainer>
        <ContentWrapper>
          <ArticleHeader>
            <header>
              <h3>Cursos em alta</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </header>
          </ArticleHeader>

          <AliceCarousel
            responsive={responsiveCourse}
            mouseTracking
            disableDotsControls
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
          >
            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nutrição de Plantas</h4>
                  <p>
                    Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                    eficiente e segura
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>238</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>30% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Nematologia</h4>
                  <p>Mofo-branco na folha da soja: causas e tratamentos</p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>245</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <span className="discount-flag">
                <img src={discountFlag} alt="" />
                <p>40% OFF</p>
              </span>
              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Fenología y eco-fisiología de la soja para altos
                    rendimientos
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>98</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Solos</h4>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>74</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>

            <CourseCard viewerStatus={viewerStatus}>
              <div className="course-cover">
                <img src={HighlightCardImg} alt="" />

                <div className="hover-container">
                  <div className="hover-container__text">
                    <h3>
                      R$:
                      <> </>
                      <big>123</big>
                      ,00
                    </h3>
                    <p>
                      Em até 10x de R$
                      <strong>12</strong>
                      ,30
                    </p>
                  </div>

                  <div className="filter" />

                  <span className="discount-long-flag">
                    <img src={discountLongFlag} alt="" />
                    <p>Seja PREMIUM e pague:</p>
                  </span>
                </div>
              </div>

              <main>
                <div>
                  <h4>Doenças</h4>
                  <p>
                    Oídio: métodos de controle para acabar de vez com este
                    problema
                  </p>
                </div>

                <section className="price-section">
                  <div>
                    <span>
                      De
                      <del> R$: 265,00</del>
                    </span>
                    <h5>
                      R$:
                      <> </>
                      <strong>175</strong>
                      ,00
                    </h5>
                    <p>10x R$ 23,00</p>
                  </div>

                  <button type="button">
                    <img src={cartIcon} alt="" />
                  </button>
                </section>
              </main>
              <div>
                <Link to="/">Saiba mais</Link>
              </div>
            </CourseCard>
          </AliceCarousel>
        </ContentWrapper>
      </CoursesCarouselContainer>

      <ExtrasSection>
        <ContentWrapper>
          <section>
            <img src={Extras01} alt="" />
            <div>
              <h4>Capacitações técnicas para empresas</h4>
              <p>
                Capacite sua equipe, reforce o argumentário técnico da sua
                equipe.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras02} alt="" />
            <div>
              <h4>Ensine na Elevagro</h4>
              <p>
                Tem a ideia de fazer um curso voltado para o setor do
                agronegócio e não sabe por onde começar?
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras03} alt="" />
            <div>
              <h4>Veja os próximos cursos</h4>
              <p>
                Saiba o que vem por aí, converse com a gente sobre suas
                necessidades.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>
        </ContentWrapper>
      </ExtrasSection>

      <Footer />
    </Container>
  );
};

export default HomeTracks;
