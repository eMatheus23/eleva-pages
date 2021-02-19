import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { BiSearch } from 'react-icons/bi';
import goInsideIcon from '../../assets/icons/go-inside-green-icon.svg';
import filterIcon from '../../assets/icons/filter-icon.svg';
import bitwiseImg from '../../assets/icons/bitwise.svg';
import { ReactComponent as CoursesIcon } from '../../assets/icons/courses-icon.svg';
import { ReactComponent as ContentIcon } from '../../assets/icons/content-icon.svg';
import { ReactComponent as LecturesIcon } from '../../assets/icons/lectures-icon.svg';

// Images
import HeroBackground from '../../assets/images/pages/not-found/cover.png';

// Mockups
import Extras01 from '../../assets/images/mockups/home-trilhas/pexels-photo-1181304.png';
import Extras02 from '../../assets/images/mockups/home-courses/b.png';
import Extras03 from '../../assets/images/mockups/home-courses/$y3k61h0util.png';

// Componentes
import Header from '../../components/headers/MainHeader';
import ContentCard from '../../components/cards/ContentCard';
import Carousel from '../../components/Carousel';
import Footer from '../../components/footers/MainFooter';
import SignupCard from '../../components/home-components/HomeSignupCard';
import PremiumOfferCard from '../../components/home-components/HomePremiumOfferCard';
import CourseCardComponent from '../../components/home-components/HomeCourseCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Configuração da responsividade do carrossel
import carouselResponsiveConfig from '../../styles/config/carouselResponsiveConfig';

// Mockup Data
import contentData from '../../data/content.json';
import CoursesReleasesData from '../../data/courses-releases.json';

// Importação da estilização específica da página
import {
  NotFoundHero,
  SearchInputContainer,
  NavButtonsContainer,
} from './styles';

// Importação da estilização comum a todas as homes
import {
  Container,
  ArticleHeader,
  ExtrasSection,
  ContentWrapper,
  ContentCarouselSection,
  CoursesCarouselContainer,
} from '../../styles/common/HomeStyledComponents';

const NotFound = () => {
  document.title = 'Não Encontrado | Elevagro';

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const [content, setContent] = useState(null);
  const [coursesReleases, setCoursesReleases] = useState(null);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataContent = contentData;
    const responseDataCourses = CoursesReleasesData;

    setContent(responseDataContent);
    setCoursesReleases(responseDataCourses);
  }, []);

  /* ------ Funções para teste ------ */
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
  /* ------ Funções para teste ------ */
  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      {/* Hero da página com o input de busca */}
      <NotFoundHero background={HeroBackground}>
        <ContentWrapper>
          <h2>Não encontramos o seu link </h2>

          <h1>Faça uma busca por um tema de interesse</h1>

          <SearchInputContainer>
            <form>
              <button type="button" className="open-filter__button">
                <img src={filterIcon} alt="Filtrar" className="filter__icon" />

                <span>FILTRAR</span>

                <img src={bitwiseImg} alt="" className="bitwise__icon" />
              </button>

              <input type="text" placeholder="O que você quer aprender?" />

              <button type="button" className="search-button">
                <BiSearch size={30} />
              </button>
            </form>
          </SearchInputContainer>
        </ContentWrapper>

        <div className="black__filter" />
      </NotFoundHero>

      {/* Sessão de botões de navegação */}
      <NavButtonsContainer>
        <ContentWrapper>
          <div className="buttons__wrapper">
            <Link to="/content" className="nav__button">
              <ContentIcon
                fill="currentColor"
                alt="CONTEÚDOS"
                className="menu-icon"
              />
              Conteúdos
            </Link>
            <Link to="/courses" className="nav__button">
              <CoursesIcon
                fill="currentColor"
                alt="CURSOS"
                className="menu-icon"
              />
              CURSOS
            </Link>
            <Link to="/lectures" className="nav__button">
              <LecturesIcon
                fill="currentColor"
                alt="PALESTRAS"
                className="menu-icon"
              />
              PALESTRAS
            </Link>
          </div>
        </ContentWrapper>
      </NavButtonsContainer>

      {/* Sessão de lançamentos */}
      <ContentCarouselSection>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>conteúdos MAIS RECENTES</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            {content &&
              content.map(item => <ContentCard content={item} key={item.id} />)}
          </Carousel>
        </ContentWrapper>
      </ContentCarouselSection>

      {/* Card de login que aparece apenas para usuários do tipo 'visit' */}
      {viewerStatus === 'visit' && <SignupCard />}

      {/* Banner com propaganda do Premium para usuários 'free */}
      {viewerStatus === 'free' && <PremiumOfferCard />}

      {/* Sessão de lançamentos. Propriedade "backgroud" ativa um background cinza */}
      <CoursesCarouselContainer className="courses-releases">
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>LANÇAMENTOS</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
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

export default NotFound;
