import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// Track array mockup
import courseArray from '../../data/courses.json';

// Components
import MainHeader from '../../components/headers/MainHeader';
import MainFooter from '../../components/footers/MainFooter';
import VideoCard from './VideoCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Icons
import videoIcon from '../../assets/images/icons/videos-icon.svg';
import materialsIcon from '../../assets/images/icons/materials-icon.svg';
import certificateIcon from '../../assets/images/icons/certificate-icon.svg';
import articlesIcon from '../../assets/images/icons/articles-icon.svg';
import infoIcon from '../../assets/images/icons/info-icon.svg';
import clockIcon from '../../assets/images/icons/clock-icon.svg';

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
                <Link to="/track">Cursos</Link>
                <span>/</span>
                <Link to="/track">{course.title}</Link>
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
                <section id="modules">
                  {course.modules.map((module, index) => (
                    <p key={index}>
                      <strong>
                        Módulo
                        <> </>
                        {index + 1}
                        <>. </>
                      </strong>
                      {module}
                    </p>
                  ))}
                </section>
              )}

              {activeView === 'details' && (
                <section id="course-page-details">
                  <ul>
                    <li>
                      <img src={videoIcon} alt="Vídeos" />
                      <span>
                        <>+ </>
                        {course.videos_count}
                        <> vídeos</>
                      </span>
                    </li>

                    <li>
                      <img src={articlesIcon} alt="Artigos" />
                      <span>+ Artigos</span>
                    </li>

                    <li>
                      <img src={materialsIcon} alt="Materiais" />
                      <span>+ materiais de apoio</span>
                    </li>

                    <li>
                      <img src={infoIcon} alt="Infográficos" />
                      <span>+ Infográficos</span>
                    </li>

                    <li>
                      <img src={certificateIcon} alt="Certificados" />
                      <span>Certificação Elevagro</span>
                    </li>

                    <li>
                      <img src={clockIcon} alt="Atividades" />
                      <span>
                        {course.hours}
                        <>h de atividade</>
                      </span>
                    </li>
                  </ul>

                  <p>Material de apoio disponível para download;</p>

                  <p>
                    Para concluir o curso, é necessário acertar 65% da
                    avaliação, caso contrário o certificado não será liberado na
                    plataforma;
                  </p>

                  <p>
                    A matrícula do curso tem duração de 183 dias (6 meses), ao
                    solicitar prazo extra será cobrada uma taxa de 50% do valor
                    total do curso.
                  </p>
                </section>
              )}

              {activeView === 'advantages' && (
                <section id="course-page-advantages">
                  <ul>
                    <li>
                      <p>
                        <>Associados Premium têm + </>
                        {Math.floor((course.discount_for_premium / 1) * 100)}
                        <>% de desconto no curso.</>
                        <br />
                        Clique
                        <Link to="/plans"> aqui</Link>
                        <> e Seja Premium para aproveitar este desconto!</>
                      </p>
                    </li>
                    {course.advantages.map((advantage, key) => (
                      <li key={key}>
                        <p>{advantage}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {activeView === 'category' && (
                <section id="category">
                  <p>
                    Este é um curso da categoria rápido.
                    <br />
                    {course.hours}
                    <>h de vídeo.</>
                  </p>

                  <p className="recomended">Indicado para:</p>
                  <p>
                    Você que quer identificar os GAPs de produtividade nas
                    lavouras;
                  </p>
                  <p>
                    Para você que quer analisar o desenvolvimento dos estádios
                    fenológicos;
                  </p>
                  <p>
                    Para você que quer compreender a interação
                    planta-ambiente-solo visando potencializar o uso de recursos
                    no cultivo;
                  </p>
                  <p>
                    Para você que quer saber como trabalhar os pilares
                    fundamentais das lavouras para alcançar altas
                    produtividades.
                  </p>
                </section>
              )}

              <h4>Com quem você vai aprender:</h4>

              <div id="authors">
                {course.authors.map(author => (
                  <div className="author" key={author.id}>
                    <img src={author.avatar_url} alt={author.name} />
                    <p>{author.name}</p>
                    <Link to={author.profile_url}>Sobre</Link>
                  </div>
                ))}
              </div>

              <section id="comments-section">
                <h4>O que estão dizendo sobre este curso?</h4>

                <div className="comment">
                  <img
                    src="https://i.ibb.co/bP7pJh5/Screenshot-2021-01-18-15-06-22.png"
                    alt="Nome"
                  />
                  <div>
                    <div className="name">
                      <h6>Beatriz Cardoso</h6>
                      <span>Premium</span>
                    </div>
                    <p>
                      A mosca é caracterizada pelo difícil controle, devido ser
                      uma praga polífaga, ou seja, completa seu ciclo em vários
                      hospedeiros. No sul do Brasil, mesmo havendo uma estação
                      fria, a mosca-das-frutas consegue completar seu
                      desenvolvimento. Isto acontece devido a longevidade média
                      dos adultos, que pode variar de 128,7 a 55,5 dias na faixa
                      térmica de 15ºC a 25ºC, respectivamente
                    </p>
                  </div>
                </div>

                <div className="comment">
                  <img
                    src="https://i.ibb.co/bP7pJh5/Screenshot-2021-01-18-15-06-22.png"
                    alt="Nome"
                  />
                  <div>
                    <div className="name">
                      <h6>Beatriz Cardoso</h6>
                      <span>Premium</span>
                    </div>
                    <p>
                      A mosca é caracterizada pelo difícil controle, devido ser
                      uma praga polífaga, ou seja, completa seu ciclo em vários
                      hospedeiros. No sul do Brasil, mesmo havendo uma estação
                      fria, a mosca-das-frutas consegue completar seu
                      desenvolvimento. Isto acontece devido a longevidade média
                      dos adultos, que pode variar de 128,7 a 55,5 dias na faixa
                      térmica de 15ºC a 25ºC, respectivamente
                    </p>
                  </div>
                </div>

                <div className="comment">
                  <img
                    src="https://i.ibb.co/bP7pJh5/Screenshot-2021-01-18-15-06-22.png"
                    alt="Nome"
                  />
                  <div>
                    <div className="name">
                      <h6>Beatriz Cardoso</h6>
                      <span>Premium</span>
                    </div>
                    <p>
                      A mosca é caracterizada pelo difícil controle, devido ser
                      uma praga polífaga, ou seja, completa seu ciclo em vários
                      hospedeiros. No sul do Brasil, mesmo havendo uma estação
                      fria, a mosca-das-frutas consegue completar seu
                      desenvolvimento. Isto acontece devido a longevidade média
                      dos adultos, que pode variar de 128,7 a 55,5 dias na faixa
                      térmica de 15ºC a 25ºC, respectivamente
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </>
      )}

      <MainFooter />
    </div>
  );
};

export default CoursePage;
