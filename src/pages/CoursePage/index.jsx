import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Track array mockup
import courseArray from '../../data/courses.json';

import './styles.css';

// Components
import MainHeader from '../../components/headers/MainHeader';
import MainFooter from '../../components/footers/MainFooter';
import ContentListComponent from './ContentListComponent';
import DetailsComponent from './DetailsComponent';
import AdvantagesComponent from './AdvantagesComponent';
import Category from './Category';
import VideoCard from './VideoCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

const CoursePage = () => {
  document.title = 'Curso | Elevagro';

  const [course, setCourse] = useState(null);

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  useEffect(() => {
    // Simula a chamada da API
    const courses = courseArray;

    const id = '93545040-e9c1-4e32-84db-9f2ad2e4c1a6';

    const [chosenCourse] = courses.filter(c => c.id === id);

    setCourse(chosenCourse);
  }, []);

  const [activeView, setActiveView] = useState('modules');

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
    <div id="course-page">
      <MainHeader
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      {course && (
        <>
          <section className="hero">
            <div className="img-filter" />
            <div className="blur-container">
              <img src={course.background_img_url} alt={course.title} />
            </div>

            <div className="content-wrapper">
              <div className="nav-tree">
                <Link to="/">Início</Link>
                <span>/</span>
                <Link to="/course-track">Cursos</Link>
                <span>/</span>
                <Link to="/course-track">{course.title}</Link>
              </div>

              <h3>CURSO</h3>
              <h1>{course.title}</h1>
            </div>
          </section>

          <main>
            <div className="content-wrapper">
              <VideoCard courseData={course} viewerStatus={viewerStatus} />
              <section className="course-description">
                <p>{course.description}</p>
                <h3>
                  O que você vai aprender na trilha
                  <> </>
                  {course.title}
                  <>:</>
                </h3>
              </section>

              <section className="course-tab-selector">
                <div className="buttons">
                  <button
                    type="button"
                    className={activeView === 'modules' ? 'active' : ''}
                    onClick={() => handleViewChange('modules')}
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
                    className={activeView === 'category' ? 'active' : ''}
                    onClick={() => handleViewChange('category')}
                  >
                    Categoria
                  </button>
                </div>

                <div className="underline" />
              </section>

              {activeView === 'modules' && (
                <ContentListComponent
                  modules={course.modules}
                  viewerStatus={viewerStatus}
                />
              )}
              {activeView === 'details' && <DetailsComponent course={course} />}
              {activeView === 'advantages' && (
                <AdvantagesComponent course={course} />
              )}
              {activeView === 'category' && <Category course={course} />}
            </div>
          </main>
        </>
      )}

      <MainFooter />
    </div>
  );
};

export default CoursePage;
