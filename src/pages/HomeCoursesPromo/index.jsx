import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import heroImg from '../../assets/images/heroes/promo.png';

// Components
import Header from '../../components/headers/MainHeader';
import HomeHero from '../../components/home-components/HomeHero';
import Carousel from '../../components/Carousel';
import CourseCardComponent from '../../components/home-components/HomeCourseCard';
import SearchInput from '../../components/SearchInput';
import HomeSignupCard from '../../components/home-components/HomeSignupCard';
import Footer from '../../components/footers/MainFooter';

// Mockups
import Extras01 from '../../assets/images/mockups/home-trilhas/pexels-photo-1181304.png';
import Extras02 from '../../assets/images/mockups/home-courses/b.png';
import Extras03 from '../../assets/images/mockups/home-courses/$y3k61h0util.png';

// Mockup Data
import CoursesReleasesData from '../../data/courses-releases.json';
import LastTracksData from '../../data/last-tracks.json';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Configuração da responsividade do carrossel
import carouselResponsiveConfig from '../../styles/config/carouselResponsiveConfig';

import {
  CountdownContainer,
  CoursesCarouselContainer,
  SearchContainer,
} from './styles';

// Importação da estilização comum a todas as homes
import {
  Container,
  ExtrasSection,
  ContentWrapper,
  LastTracksContainer,
} from '../../styles/common/HomeStyledComponents';

const HomeCoursesPromo = () => {
  document.title = 'Trilhas de Ensino | Elevagro';

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  const [coursesReleases, setCoursesReleases] = useState(null);
  const [lastTracks, setLastTracks] = useState(null);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataCourses = CoursesReleasesData;
    const responseDataLastTracks = LastTracksData;

    setCoursesReleases(responseDataCourses);
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

  // const shuffleArray = useCallback(originalArray => {
  //   const array = originalArray;
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // }, []);

  // const shuffled = shuffleArray(coursesReleases && coursesReleases);

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <HomeHero background={heroImg} justify="center">
        <h1>CURSOS</h1>
        <h2>PROMOÇÃO DE ANIVERSÁRIO Elevagro</h2>
        <p className="mobile-only">
          Aprenda uma nova habilidade por menos de R$ 100,00
        </p>

        <aside className="desktop-only">
          <h3>APRENDA UMA NOVA HABILIDADE POR menos de R$ 100,00</h3>
        </aside>
      </HomeHero>

      <CountdownContainer>
        <ContentWrapper>
          <h3>ESTA PROMOÇÃO ACABA EM:</h3>

          <main>
            <Countdown
              date={Date.now() + 1000 * 60 * 60 * 24 * 6}
              intervalDelay={0}
              precision={3}
              renderer={({ formatted }) => (
                <>
                  <section>
                    <h4>{formatted.days}</h4>
                    <p>DIAS</p>
                  </section>
                  <span>:</span>
                  <section>
                    <h4>{formatted.hours}</h4>
                    <p>HORAS</p>
                  </section>
                  <span>:</span>
                  <section>
                    <h4>{formatted.minutes}</h4>
                    <p>MINUTOS</p>
                  </section>
                  <span>:</span>
                  <section>
                    <h4>{formatted.seconds}</h4>
                    <p>SEGUNDOS</p>
                  </section>
                </>
              )}
            />
          </main>
        </ContentWrapper>
      </CountdownContainer>

      <CoursesCarouselContainer>
        <ContentWrapper>
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

      <CoursesCarouselContainer>
        <ContentWrapper>
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

      <LastTracksContainer>
        <ContentWrapper>
          {lastTracks &&
            lastTracks.map(track => (
              <div className="track" key={track.id}>
                <main>
                  <div className="text__container">
                    <span>PACOTE</span>
                    <h4>{track.title}</h4>
                    <p>{track.catch_frase}</p>
                  </div>

                  <div className="track__details">
                    <div className="price">
                      <p>De R$980,00</p>
                      <h5>R$800,00</h5>
                    </div>

                    <Link to="/track" className="CTA__button">
                      Saiba mais
                    </Link>
                  </div>
                </main>

                <div className="filter" />
                <img
                  src={track.cover_url}
                  alt=""
                  className="track__background"
                />
              </div>
            ))}
        </ContentWrapper>
      </LastTracksContainer>

      <SearchContainer>
        <ContentWrapper>
          <section>
            <h4>Não encontrou o seu curso?</h4>
            <p>Faça uma busca na Elevagro</p>
            <SearchInput placeholder="O que quer aprender?" fullWidth />
          </section>

          <div className="filter" />
        </ContentWrapper>
      </SearchContainer>

      <ExtrasSection>
        <ContentWrapper>
          <section>
            <img src={Extras01} alt="" />
            <div>
              <h4>Vai treinar um grupo com mais de 5 pessoas?</h4>
              <p>
                Capacite sua equipe, reforce o argumentário técnico, venda mais.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras02} alt="" />
            <div>
              <h4>Descontos Premium</h4>
              <p>
                Associados Premium da Elevagro têm descontos em cursos e trilhas
                de ensino durante todo o ano.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras03} alt="" />
            <div>
              <h4>Conheça as trilhas de ensino Elevagro</h4>
              <p>
                Pacotes de cursos pensados para o melhor aprendizado e com um
                precinho especial.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>
        </ContentWrapper>
      </ExtrasSection>

      {viewerStatus === 'visit' && <HomeSignupCard />}

      {viewerStatus === 'free' &&
        {
          /* COMPONENTIZAR

          <BecomePremiumCard>
          <ContentWrapper>
            <div className="card">
              <section>
                <h2>SEJA PREMIUM</h2>
                <p>
                  E acesse TODos OS MATERIAIS DA
                  <br />
                  PLATAFORMA DE CONTEÚDOS e ganhe vantagens
                </p>

                <Link to="/plans">QUERO SER PREMIUM</Link>
              </section>

              <div className="filter-black" />
            </div>
          </ContentWrapper>
        </BecomePremiumCard> */
        }}

      <Footer />
    </Container>
  );
};

export default HomeCoursesPromo;
