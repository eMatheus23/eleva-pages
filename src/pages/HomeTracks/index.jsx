import React, { useState } from 'react';

import Header from '../../components/headers/MainHeader';
import Footer from '../../components/footers/MainFooter';

import { Container, Section, Hero } from './styles';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Icons
import CoursesIcon from '../../assets/images/icons/courses-icon-02.svg';
import HeroDetail from '../../assets/images/other/hero-detail.svg';
import HeroFilter from '../../assets/images/other/Grupo833.png';

// Mockups
import HeroImg from '../../assets/images/mockups/home-trilhas/person-touching-open-macbook-on-table-839465.png';

const HomeTracks = () => {
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  // Funções para teste
  const handleLogin = () => {
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    setViewerStatus('free');
  };

  const backToVisit = () => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('visit');
  };

  const becomePremium = () => {
    localStorage.setItem('@elevagro-app/viewer-status', 'premium');

    setViewerStatus('premium');
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
        <div className="hero-img">
          <img src={HeroImg} className="image" alt="Hero" />
        </div>

        <div className="content-wrapper">
          <div className="page-title">
            <h1>
              <img src={CoursesIcon} alt="TRILHAS DE ENSINO" />
              TRILHAS DE ENSINO
            </h1>
            <h2>EDUCAÇÃO NO AGRO ELEVADA A OUTRO NÍVEL.</h2>
            <p>
              Montamos grades de ensino com nossos cursos para o seu melhor
              aprendizado.
            </p>
          </div>

          <div className="details-container">
            <img src={HeroDetail} className="detail" alt="Hero" />
            <div className="triangle" />
            <div className="filter" />
          </div>
        </div>
      </Hero>

      <Section>
        <h2>Main</h2>
      </Section>

      <Footer />
    </Container>
  );
};

export default HomeTracks;
