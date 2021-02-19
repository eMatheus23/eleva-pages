import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

// AliceCarousel
import AliceCarousel from 'react-alice-carousel';

// Icons
import { FiChevronRight } from 'react-icons/fi';
// import coursesIcon from '../../assets/icons/courses-icon-02.svg';
import cardDetailMini from '../../assets/images/other/card-detail-mini-courses.svg';
import goInsideIcon from '../../assets/icons/go-inside-green-icon.svg';

import heroImg from '../../assets/images/pages/home-content/Soja-SLM2.png';
import heroImg02 from '../../assets/images/pages/home-content/Soja-SLMSL.png';
import heroImg03 from '../../assets/images/pages/home-content/Captura.png';

// Components
import Header from '../../components/headers/MainHeader';
import HomeHero from '../../components/home-components/HomeHero';
import SearchContainer, {
  BannerCard,
} from '../../components/home-components/HomeSearchContainer';
import Carousel from '../../components/Carousel';
import ContentCard from '../../components/cards/ContentCard';
import { FindOutButton } from '../../components/Buttons';
import SignupCard from '../../components/home-components/HomeSignupCard';
import PremiumOfferCard from '../../components/home-components/HomePremiumOfferCard';
import Footer from '../../components/footers/MainFooter';

// Mockups
import Extras01 from '../../assets/images/mockups/home-trilhas/pexels-photo-1181304.png';
import Extras02 from '../../assets/images/mockups/home-courses/b.png';
import Extras03 from '../../assets/images/mockups/home-courses/$y3k61h0util.png';
import MiniCourseImg from '../../assets/images/mockups/home-courses/man-taking-notes-in-front-of-his-computer-4238481.png';
import MiniCourseImg02 from '../../assets/images/mockups/home-courses/man-in-black-suit-jacket-standing-and-smiling-3777557.png';
import MiniCourseImg03 from '../../assets/images/mockups/home-courses/person-playing-chess-1040157.png';
import MiniCourseImg04 from '../../assets/images/mockups/home-courses/woman-in-black-coat-holding-black-smartphone-3755824.png';
import authorImg from '../../assets/images/pages/home-content/user--7.png';
import author02Img from '../../assets/images/pages/home-content/user-4.png';
import bigLectureCardImg from '../../assets/images/pages/home-content/big-lecture.png';
import smallLectureCardImg from '../../assets/images/pages/home-content/thumbnail-cesb3.png';
import centralBannerCardImg from '../../assets/images/pages/home-content/ballpen-blur-close-up-computer-461077.png';
import videoCoverImg from '../../assets/images/pages/home-content/video-cover.png';

// Mockup Data
import contentData from '../../data/content.json';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Configuração da responsividade do carrossel
import carouselResponsiveConfig from '../../styles/config/carouselResponsiveConfig';

import {
  CarouselDots,
  StyledCarousel,
  CityDialog,
  LecturesContainer,
  MediumBannerCard,
  BigLectureCard,
  SmallLectureCard,
  RecordedLecturesCard,
  BannedAndVideoSection,
  CentralBannerContainer,
} from './styles';

// Importação da estilização comum a todas as homes
import {
  Container,
  ArticleHeader,
  ExtrasSection,
  ContentWrapper,
  ContentCarouselSection,
} from '../../styles/common/HomeStyledComponents';

const HomeCourses = () => {
  document.title = 'Conteúdos | Elevagro';

  /* -------- STATUS DE USUÁRO -------- */
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const handleStatus = useCallback(status => {
    localStorage.setItem('@elevagro-app/viewer-status', status);

    setViewerStatus(status);
  }, []);
  /* -------- STATUS DE USUÁRO -------- */

  const [tooltipPopupOpened, setTooltipPopupOpened] = useState(false);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataContent = contentData;

    setContent(responseDataContent);
  }, []);

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

  const renderDotsItem = ({ isActive }) => <CarouselDots isActive={isActive} />;

  return (
    <Container>
      {/* Header padrão das páginas Home */}
      <Header
        viewerStatus={viewerStatus}
        handleLogin={() => handleStatus('free')}
        backToVisit={() => handleStatus('visit')}
        becomePremium={() => handleStatus('premium')}
      />

      {/* Hero da página com carrossel */}
      <StyledCarousel>
        <AliceCarousel
          responsive={{ 0: 1 }}
          mouseTracking
          infinite
          disableButtonsControls
          renderDotsItem={renderDotsItem}
          autoPlay
          autoPlayInterval={3000}
        >
          <HomeHero background={heroImg}>
            <h1>CONTEÚDO: Material Técnico</h1>
            <h2>O uso de bactérias para controlar nematóides</h2>
            <p>
              A uma nova habilidade ou área com profissionais referência de
              mercado.
            </p>

            <Link to="/content" className="hero__content-link">
              Acesse
            </Link>
          </HomeHero>

          <HomeHero background={heroImg02}>
            <h1>CONTEÚDO: Material Técnico</h1>
            <h2>O uso de bactérias para controlar nematóides</h2>
            <p>
              A uma nova habilidade ou área com profissionais referência de
              mercado.
            </p>

            <Link to="/content" className="hero__content-link">
              Acesse
            </Link>
          </HomeHero>

          <HomeHero background={heroImg03}>
            <h1>CONTEÚDO: Material Técnico</h1>
            <h2>O uso de bactérias para controlar nematóides</h2>
            <p>
              A uma nova habilidade ou área com profissionais referência de
              mercado.
            </p>

            <Link to="/content" className="hero__content-link">
              Acesse
            </Link>
          </HomeHero>
        </AliceCarousel>
      </StyledCarousel>

      {/* Sessão de diálogo da cidade do usuário free */}
      {viewerStatus === 'free' && (
        <CityDialog popupOpened={tooltipPopupOpened}>
          <ContentWrapper>
            <h3>
              <strong>Marcos,</strong>
              <> qual a é a </>
              <strong>cidade</strong>
              <> que você reside?</>
            </h3>

            <form className="input__container">
              <input type="text" />

              <button type="submit" name="user_city" htmlFor="city">
                Enviar
              </button>
            </form>

            <button
              className="tooltip"
              type="button"
              onClick={() => setTooltipPopupOpened(!tooltipPopupOpened)}
            >
              <span>?</span>

              <div className="tooltip__popup">
                <h6>Por que perguntamos isso?</h6>
                <p>
                  <>Quanto mais completo estiver o </>
                  <Link to="/">seu perfil</Link>
                  <>
                    , mais precisas serão as informações que enviaremos para
                    você.
                  </>
                </p>
              </div>
            </button>
          </ContentWrapper>
        </CityDialog>
      )}

      {/* Sessão de buscas e do banner da página de cursos */}
      <SearchContainer inputPlaceholder="O que quer aprender?">
        <BannerCard linkTo="/courses">
          <h4>Cursos Elevagro</h4>
          <p>
            Potencialize o seu treinamento
            <br />
            ou da sua equipe.
          </p>
        </BannerCard>
      </SearchContainer>

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

      {/* Sessão de palestras */}
      <LecturesContainer background>
        {/* A propriedade background, deixa o background cinza no styled-component */}
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>PalestraS Online</h3>
              <div className="border-bottom" />
              <Link to="/lectures">
                <span className="desktop__link">VER TODAS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          {/* Container dos cards */}
          <div className="cards__container">
            {/* Card grande de palestra */}
            <BigLectureCard background={bigLectureCardImg}>
              <div className="cover-authors__section">
                <div className="authors__overlay">
                  <div className="author">
                    <img src={authorImg} alt="" />
                    <p>Dr. Laércio B. Inácio</p>
                  </div>

                  <div className="author">
                    <img src={author02Img} alt="" />
                    <p>Marcos Copetti</p>
                  </div>
                </div>
              </div>

              <div className="text__section">
                <h6 className="lecture__title">
                  Alertas importantes sobre misturas de produtos em tanque de
                  pulverização
                </h6>

                <div className="info__section">
                  <div className="lecture__day">
                    <span>Quando?</span>
                    <p>20/04</p>
                  </div>

                  <div className="lecture__hour">
                    <span>Horário</span>
                    <p>19h</p>
                  </div>

                  <Link to="/" className="lecture__link">
                    Saiba mais
                  </Link>

                  <Link to="/" className="lecture__signup-link">
                    Inscreva-se aqui
                  </Link>
                </div>
              </div>
            </BigLectureCard>

            {/* Card pequeno de palestra */}
            <SmallLectureCard>
              <img
                src={smallLectureCardImg}
                alt=""
                className="lecture__cover"
              />

              <div className="text__section">
                <h6 className="lecture__category">Palestra Online</h6>

                <p className="lecture__title">
                  Doenças da soja: proteção da planta para maximizar o
                  enchimento de grãos
                </p>

                <div className="links__section">
                  <Link to="/" className="lecture__link">
                    Saiba mais
                  </Link>

                  <Link to="/" className="lecture__signup-link">
                    Inscreva-se
                  </Link>
                </div>
              </div>
            </SmallLectureCard>

            {/* Card de palestras gravadas */}
            <RecordedLecturesCard>
              <header>
                <div>
                  <h4>GRAVAÇÕES DE PALESTRAS</h4>
                  <p>Exclusivos para Premium</p>
                </div>
                <Link to="/">VER TODOS</Link>
                <img src={cardDetailMini} alt="" className="green-chevron" />
              </header>

              <div className="card__content">
                <Link to="/" className="lecture">
                  <img src={MiniCourseImg} alt="" />
                  Métodos ágeis aplicado no agronegócio
                  <FiChevronRight size={30} />
                </Link>

                <Link to="/" className="lecture">
                  <img src={MiniCourseImg02} alt="" />
                  Academia do RTV
                  <FiChevronRight size={30} />
                </Link>

                <Link to="/" className="lecture">
                  <img src={MiniCourseImg03} alt="" />
                  Caminhos do novo agro
                  <FiChevronRight size={30} />
                </Link>

                <Link to="/" className="lecture">
                  <img src={MiniCourseImg04} alt="" />
                  Consultoria agrícola: criando mercados
                  <FiChevronRight size={30} />
                </Link>
              </div>
            </RecordedLecturesCard>
          </div>
        </ContentWrapper>
      </LecturesContainer>

      {/* Sessão dos cursos recomendados por região */}
      <ContentCarouselSection>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>RECOMENDADOS PARA A SUA REGIÃO</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            {content &&
              shuffleArray(content).map(item => (
                <ContentCard content={item} key={item.id} />
              ))}
          </Carousel>
        </ContentWrapper>
      </ContentCarouselSection>

      {/* Sessão do banner médio e do vídeo */}
      <BannedAndVideoSection>
        <ContentWrapper>
          <MediumBannerCard background={centralBannerCardImg}>
            <div className="text-filter__section">
              <h3>ÁREA PARA BANNER</h3>
              <h4>Área para inserção de banner</h4>

              <Link to="/" className="banner-cta__link">
                CTA Customizável
              </Link>
            </div>
          </MediumBannerCard>

          <div className="video__container">
            <h4 className="video__title">Eleve sua produção</h4>

            <video controls poster={videoCoverImg} className="video" />
          </div>
        </ContentWrapper>
      </BannedAndVideoSection>

      {/* Sessão do banner central da página */}
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

      {/* Sessão de conteúdos mais acessados */}
      <ContentCarouselSection>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>Conteúdos mais acessados</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          {}
          <Carousel responsive={carouselResponsiveConfig}>
            {content &&
              content.map(item => <ContentCard content={item} key={item.id} />)}
          </Carousel>
        </ContentWrapper>
      </ContentCarouselSection>

      {/* Card de login que aparece apenas para usuários do tipo 'visit' */}
      {viewerStatus === 'visit' && <SignupCard extraMarginBottom />}

      {/* Banner com propaganda do Premium para usuários 'free */}
      {viewerStatus === 'free' && <PremiumOfferCard extraMarginBottom />}

      {/* Sessão de conteúdos "Você pode gostar" */}
      <ContentCarouselSection background>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>Você pode gostar</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          {}
          <Carousel responsive={carouselResponsiveConfig}>
            {content &&
              shuffleArray(content).map(item => (
                <ContentCard content={item} key={item.id} />
              ))}
          </Carousel>
        </ContentWrapper>
      </ContentCarouselSection>

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
