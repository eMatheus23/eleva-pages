import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// Header
import logoElevagroImg from '../../assets/images/logos/marca-elevagro.svg';
import searchImg from '../../assets/images/icons/search-icon.svg';
import bitwiseImg from '../../assets/images/icons/bitwise.svg';

import ButtonRounded from '../../components/Buttons';

// Footer
import InstagramLogoImg from '../../assets/images/logos/instagram-gray-logo.png';
import FacebookLogoImg from '../../assets/images/logos/facebook-gray-logo.png';
import YoutubeLogoImg from '../../assets/images/logos/youtube-gray-logo.png';
import MessengerLogoImg from '../../assets/images/logos/messenger-gray-logo.png';

// Components
import ListComponent from './ListComponent';
import DetailsComponent from './DetailsComponent';
import AdvantagesComponent from './AdvantagesComponent';
import AuthorsComponent from './AuthorsComponent';
import TrackPurchaseCard from '../../components/cards/TrackPurchaseCard';

// Track array mockup
import trackArray from '../../data/couse-tracks.json';

const CourseTrack = () => {
  document.title = 'Trilha de Ensino | Elevagro';

  const [track, setTrack] = useState(null);

  useEffect(() => {
    // Simula a chamada da API
    const [trackObject] = trackArray;

    setTrack(trackObject);
  }, []);

  const [activeView, setActiveView] = useState('courses-list');

  const handleViewChange = view => {
    setActiveView(view);
  };

  return (
    track && (
      <div id="course-track">
        <header className="course-track-header">
          <div className="header-content-wrapper">
            <Link to="/">
              <img src={logoElevagroImg} alt="Elevagro" />
            </Link>

            <form>
              <input
                type="text"
                placeholder="Busque na Elevagro"
                title="Busque na Elevagro"
              />

              <button type="button">
                <img
                  src={searchImg}
                  alt="Buscar na Elevagro"
                  title="Busque na Elevagro"
                />
              </button>
            </form>

            <nav className="course-track-menu">
              <ul>
                <li className="active">
                  <Link to="/course-track">CURSOS</Link>
                </li>
                <li>
                  <Link to="/course-track">CONTEÚDOS</Link>
                </li>
                <li>
                  <Link to="/course-track">PALESTRAS</Link>
                </li>
                <img src={bitwiseImg} alt="Separação de sessão" />
                <li>
                  <Link to="/course-track">ENSINE NA ELEVAGRO</Link>
                </li>
                <li>
                  <Link to="/course-track">PLANOS</Link>
                </li>
                <li>
                  <Link to="/course-track" className="signup">
                    ENTRAR
                  </Link>
                </li>
              </ul>

              <ButtonRounded>INSCREVA-SE GRATUITAMENTE</ButtonRounded>
            </nav>
          </div>
        </header>

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
            <TrackPurchaseCard trackData={track} />
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
              <ListComponent courses={track.courses} />
            )}
            {activeView === 'details' && <DetailsComponent track={track} />}
            {activeView === 'advantages' && (
              <AdvantagesComponent track={track} />
            )}
            {activeView === 'authors' && <AuthorsComponent track={track} />}
          </div>
        </main>

        <footer id="course-track-footer">
          <div className="footer-content-wrapper">
            <div className="row first-row">
              <div className="col-lg-3 col-sm-4 col-6">
                <img
                  src={logoElevagroImg}
                  alt="Elevagro"
                  className="footer-logo"
                />
                <p className="brand-description">
                  Somos a Elevagro, e viemos para preparar o profissional do
                  agronegócio para os desafios do futuro.
                </p>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>INSTITUCIONAL</h3>
                <ul>
                  <li>
                    <Link to="/course-track">Sobre</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Trabalhe Conosto</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Marca</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Blog</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>FALE CONOSCO</h3>
                <ul>
                  <li>
                    <Link to="/course-track">Suporte Técnico</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Assessoria de Imprensa</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Financeiro</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Vendas</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>WHATSAPP</h3>
                <ul>
                  <li>
                    <Link to="/course-track">
                      Receba conteúdo exclusivo no seu WhatsApp
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>PRODUTOS</h3>
                <ul>
                  <li>
                    <Link to="/course-track" title="Cursos">
                      Cursos
                    </Link>
                  </li>
                  <li>
                    <Link to="/course-track" title="Trilhas de aprendizado">
                      Trilhas de aprendizado
                    </Link>
                  </li>
                  <li>
                    <Link to="/course-track" title="Pós-graduação">
                      Pós-graduação
                    </Link>
                  </li>
                  <li>
                    <Link to="/plans" title="Assinaturas Premium">
                      Assinaturas Premium
                    </Link>
                  </li>
                  <li>
                    <Link to="/course-track" title="Palestras">
                      Palestras
                    </Link>
                  </li>
                  <li>
                    <Link to="/course-track" title="Produção de conteúdo">
                      Produção de conteúdo
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>SOLUÇÕES</h3>
                <ul>
                  <li>
                    <Link to="/course-track">Profissionais</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Estudantes</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Empresas</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Universidades</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h3>LEGAL</h3>
                <ul>
                  <li>
                    <Link to="/course-track">Termos de uso</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Copyright</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Política de cookies</Link>
                  </li>
                  <li>
                    <Link to="/course-track">Política de uso de dados</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-4 col-6">
                <h2>REDES SOCIAIS</h2>
                <div className="social-networks-links">
                  <Link to="/course-track" title="Instagram">
                    <img src={InstagramLogoImg} alt="Instagram" />
                  </Link>

                  <Link to="/course-track" title="Facebook">
                    <img src={FacebookLogoImg} alt="Facebook" />
                  </Link>

                  <Link to="/course-track" title="Youtube">
                    <img src={YoutubeLogoImg} alt="Youtube" />
                  </Link>

                  <Link to="/course-track" title="Messenger">
                    <img src={MessengerLogoImg} alt="Messenger" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="row copyrights">
              <p>© Todos os direitos reservados a Elevagro</p>
            </div>
          </div>
        </footer>
      </div>
    )
  );
};

export default CourseTrack;
