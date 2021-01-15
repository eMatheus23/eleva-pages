import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Track array mockup
import trackArray from '../../data/tracks.json';

import './styles.css';

// Components
import MainHeader from '../../components/headers/MainHeader';
import MainFooter from '../../components/footers/MainFooter';
import ContentListComponent from './ContentListComponent';
import DetailsComponent from './DetailsComponent';
import AdvantagesComponent from './AdvantagesComponent';
import AuthorsComponent from './AuthorsComponent';
import TrackVideoCard from '../../components/cards/TrackVideoCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

const CourseTrack = () => {
  document.title = 'Trilha de Ensino | Elevagro';

  const [track, setTrack] = useState(null);

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  useEffect(() => {
    // Simula a chamada da API
    const [trackObject] = trackArray;

    setTrack(trackObject);
  }, []);

  const [activeView, setActiveView] = useState('courses-list');

  const handleViewChange = view => {
    setActiveView(view);
  };

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
    <div id="course-track">
      <MainHeader
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      {track && (
        <>
          <section className="hero">
            <div className="img-filter" />
            <div className="blur-container">
              <img src={track.background_img_url} alt={track.title} />
            </div>

            <div className="content-wrapper">
              <div className="nav-tree">
                <Link to="/">Início</Link>
                <span>/</span>
                <Link to="/course-track">Trilhas</Link>
                <span>/</span>
                <Link to="/course-track">{track.title}</Link>
              </div>

              <h3>TRILHA DE ENSINO</h3>
              <h1>{track.title}</h1>
            </div>
          </section>

          <main>
            <div className="content-wrapper">
              <TrackVideoCard trackData={track} viewerStatus={viewerStatus} />
              <section className="track-description">
                <p>{track.description}</p>
                <h3>
                  O que você vai aprender na trilha
                  <> </>
                  {track.title}
                  <>:</>
                </h3>
              </section>

              <section className="track-tab-selector">
                <div className="buttons">
                  <button
                    type="button"
                    className={activeView === 'courses-list' ? 'active' : ''}
                    onClick={() => handleViewChange('courses-list')}
                  >
                    Conteúdo
                  </button>
                  <button
                    type="button"
                    className={activeView === 'details' ? 'active' : ''}
                    onClick={() => handleViewChange('details')}
                  >
                    Detalhes
                  </button>
                  <button
                    type="button"
                    className={activeView === 'advantages' ? 'active' : ''}
                    onClick={() => handleViewChange('advantages')}
                  >
                    Vantagens
                  </button>
                  <button
                    type="button"
                    className={activeView === 'authors' ? 'active' : ''}
                    onClick={() => handleViewChange('authors')}
                  >
                    Autores
                  </button>
                </div>

                <div className="underline" />
              </section>

              {activeView === 'courses-list' && (
                <ContentListComponent courses={track.courses} />
              )}
              {activeView === 'details' && <DetailsComponent track={track} />}
              {activeView === 'advantages' && (
                <AdvantagesComponent track={track} />
              )}
              {activeView === 'authors' && <AuthorsComponent track={track} />}
            </div>
          </main>
        </>
      )}

      <MainFooter />
    </div>
  );
};

export default CourseTrack;
