import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FiChevronRight, FiPlus, FiLogIn } from 'react-icons/fi';
import coursesIcon from '../../assets/images/icons/courses-icon-02.svg';
import cardDetailMini from '../../assets/images/other/card-detail-mini-courses.svg';

import heroImg from '../../assets/images/mockups/home-courses/as.png';

// Components
import Header from '../../components/headers/MainHeader';
import HomeHero from '../../components/home-components/HomeHero';
import SearchContainer, {
  NavCard,
} from '../../components/home-components/HomeSearchContainer';
import Carousel from '../../components/Carousel';
import CourseCardComponent from '../../components/home-components/HomeCourseCard';
import UserCourseCard from '../../components/home-components/HomeUserCourseCard';
import { FindOutButton } from '../../components/Buttons';
import Footer from '../../components/footers/MainFooter';

// Mockups
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

// Images
import trackCardImg from '../../assets/images/mockups/home-courses/a.png';
import miniCourseCardImg from '../../assets/images/mockups/home-courses/pexels-startup-stock-photos-7096.png';

// Mockup Data
import CoursesReleasesData from '../../data/courses-releases.json';
import MyCourses from '../../data/user-mockup/my-courses.json';
import LastTracksData from '../../data/last-tracks.json';

// Services
import getViewerStatus from '../../services/getViewerStatus';

import {
  Container,
  MyCoursesContainer,
  CoursesCarouselContainer,
  CourseModeContainer,
  CentralBannerContainer,
  LastTracksContainer,
  MiniCourseSection,
} from './styles';

// Importação da estilização comum a todas as homes
import {
  ArticleHeader,
  ExtrasSection,
  ContentWrapper,
} from '../../styles/common/HomeStyledComponents';

// Configuração de responsividade do Carrossel (Carousel)
const carouselResponsiveConfig = {
  0: { items: 1 },
  650: { items: 2 },
  800: { items: 3 },
  1040: { items: 4 },
  1250: { items: 5 },
  1530: { items: 5 },
};

const HomeCourses = () => {
  document.title = 'Cursos | Elevagro';

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  const [coursesReleases, setCoursesReleases] = useState(null);
  const [userCourses, setUserCourses] = useState(null);
  const [lastTracks, setLastTracks] = useState(null);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataCourses = CoursesReleasesData;
    const responseDataUserCourses = MyCourses;
    const responseDataLastTracks = LastTracksData;

    setCoursesReleases(responseDataCourses);
    setUserCourses(responseDataUserCourses);
    setLastTracks(responseDataLastTracks);
  }, []);

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

  const shuffleArray = useCallback(originalArray => {
    const array = originalArray;
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }, []);

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <HomeHero background={heroImg}>
        <h1>
          <img src={coursesIcon} alt="TRILHAS DE ENSINO" />
          CURSOS
        </h1>
        <h2>Capacitação para o NOVO agronegócio</h2>
        <p>
          Aqui você aprende uma nova habilidade ou área com profissionais
          referência de mercado.
        </p>
      </HomeHero>

      <SearchContainer inputPlaceholder="Procure um curso">
        <NavCard linkTo="/tracks" backgroundImg={trackCardImg}>
          <h4>
            Trilhas
            <br />
            de Ensino
          </h4>
        </NavCard>

        <NavCard linkTo="/" backgroundImg={miniCourseCardImg}>
          <h4>
            Mini
            <br />
            Cursos
          </h4>
        </NavCard>
      </SearchContainer>

      {viewerStatus !== 'visit' && (
        <MyCoursesContainer>
          <ContentWrapper>
            <ArticleHeader>
              <section className="header__title">
                <h3>MEUS CURSOS</h3>
                <div className="border-bottom" />
                <Link to="/">VER TODOS</Link>
              </section>
            </ArticleHeader>

            {userCourses && userCourses.length > 4 && (
              <Carousel responsive={carouselResponsiveConfig} paddingRight={10}>
                {userCourses &&
                  userCourses.map(course => (
                    <UserCourseCard course={course} key={course.id} />
                  ))}
              </Carousel>
            )}

            {userCourses && userCourses.length <= 4 && (
              <section className="courses-container">
                {userCourses &&
                  userCourses.map(course => (
                    <UserCourseCard course={course} key={course.id} />
                  ))}
              </section>
            )}

            <footer>
              <Link to="/">
                MEUS CURSOS
                <FiLogIn size={25} />
              </Link>
            </footer>
          </ContentWrapper>
        </MyCoursesContainer>
      )}

      <CoursesCarouselContainer background className="courses-releases">
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>LANÇAMENTOS</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </section>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            {coursesReleases &&
              coursesReleases.map(course => (
                <CourseCardComponent
                  viewerStatus={viewerStatus}
                  course={course}
                />
              ))}
          </Carousel>
        </ContentWrapper>
      </CoursesCarouselContainer>

      <MiniCourseSection>
        <ContentWrapper>
          <main>
            <header>
              <div>
                <h4>MINI CURSOS</h4>
                <p>Exclusivos para Premium</p>
              </div>
              <Link to="/">VER TODOS</Link>
              <img src={cardDetailMini} alt="" className="green-chevron" />
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
          </main>

          <aside className="banner">
            <div>
              <h2>PROMOÇÃO</h2>
              <p>Aprenda novas habilidades com cursos a partir de R$56,00</p>
              <p>Área para banner</p>
            </div>
            <div className="filter" />
          </aside>
        </ContentWrapper>
      </MiniCourseSection>

      <CoursesCarouselContainer background className="top-courses">
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>Cursos em alta</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </section>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            {coursesReleases &&
              shuffleArray(coursesReleases).map(course => (
                <CourseCardComponent
                  viewerStatus={viewerStatus}
                  course={course}
                  key={course.id}
                />
              ))}
          </Carousel>
        </ContentWrapper>
      </CoursesCarouselContainer>

      <CourseModeContainer>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>MODALIDADES dos CursoS</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </section>
          </ArticleHeader>

          <section className="modes-section">
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
              https://api.elevagro.com/admin/ produto/lancamento/add/
            </p>
            <FindOutButton to="/">Saiba mais</FindOutButton>
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
            <section className="header__title">
              <h3>Últimas Trilhas adicionadas</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODAS</Link>
            </section>
          </ArticleHeader>

          {lastTracks &&
            lastTracks.map(track => (
              <div className="track" key={track.id}>
                <section>
                  <div>
                    <span>{track.type_name}</span>
                    <h4>{track.title}</h4>
                    <p>{track.catch_frase}</p>
                  </div>

                  <Link to="/track">Saiba mais</Link>
                </section>
                <div className="filter" />
                <img src={track.cover_url} alt="" />
              </div>
            ))}
        </ContentWrapper>
      </LastTracksContainer>

      <CoursesCarouselContainer className="top-courses-02">
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>Cursos em alta</h3>
              <div className="border-bottom" />
              <Link to="/">VER TODOS</Link>
            </section>
          </ArticleHeader>

          {}
          <Carousel responsive={carouselResponsiveConfig}>
            {coursesReleases &&
              coursesReleases.map(course => (
                <CourseCardComponent
                  viewerStatus={viewerStatus}
                  course={course}
                />
              ))}
          </Carousel>
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

export default HomeCourses;
