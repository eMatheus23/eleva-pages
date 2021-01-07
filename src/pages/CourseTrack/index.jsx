import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// Header
import logoElevagroImg from '../../assets/images/logos/marca-elevagro.svg';
import searchImg from '../../assets/images/icons/search-icon.svg';
import bitwiseImg from '../../assets/images/icons/bitwise.svg';

import ButtonRounded from '../../components/Buttons';

// Main
import CourseTrackHeroImg from '../../assets/images/mockups/course-track-hero.jpg';
import CourseTumbnail from '../../assets/images/mockups/course-thumbnail-02.png';

// Footer
import InstagramLogoImg from '../../assets/images/logos/instagram-gray-logo.png';
import FacebookLogoImg from '../../assets/images/logos/facebook-gray-logo.png';
import YoutubeLogoImg from '../../assets/images/logos/youtube-gray-logo.png';
import MessengerLogoImg from '../../assets/images/logos/messenger-gray-logo.png';

const CourseTrack = () => {
  document.title = 'Trilha de Ensino | Elevagro';

  return (
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
        <img src={CourseTrackHeroImg} alt="Curso" />

        <div className="content-wrapper">
          <div className="nav-tree">
            <Link to="/">Início</Link>
            <span>/</span>
            <Link to="/course-track">Curso</Link>
            <span>/</span>
            <Link to="/course-track">Manejo de plantas daninhas em soja</Link>
          </div>

          <h2>TRILHA DE ENSINO</h2>
          <h3>VENDAS E INSUMOS AGRÍCOLAS</h3>
        </div>
      </section>

      <main>
        <div className="content-wrapper">
          <section className="track-description">
            <p>
              A trilha é um pacote de 10 cursos com conteúdos sobre as etapas da
              cadeia produtiva da soja. A trilha é um pacote de 10 cursos com
              conteúdos sobre as etapas da cadeia produtiva da soja.A trilha é
              um pacote de 10 cursos com conteúdos sobre as etapas da cadeia
              produtiva da soja.
            </p>
            <h3>
              O que você vai aprender no curso Manejo de plantas daninhas em
              soja:
            </h3>
          </section>

          <section className="track-tab-selector">
            <div className="buttons">
              <button type="button" className="active">
                Conteúdo
              </button>
              <button type="button">Detalhes</button>
              <button type="button">Vantagens</button>
              <button type="button">Autores</button>
            </div>

            <div className="underline" />
          </section>

          <section className="courses">
            <h2>Os 6 cursos que compões esta Trilha:</h2>

            <div className="course">
              <img src={CourseTumbnail} alt="Nome do Curso" />

              <div className="course-description">
                <div>
                  <span>Nutrição</span>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <div>
                  <span>R$: 450,00</span>
                  <Link to="/course-track">Detalhes</Link>
                </div>
              </div>
            </div>

            <div className="course">
              <img src={CourseTumbnail} alt="Nome do Curso" />

              <div className="course-description">
                <div>
                  <span>Nutrição</span>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <div>
                  <span>R$: 450,00</span>
                  <Link to="/course-track">Detalhes</Link>
                </div>
              </div>
            </div>

            <div className="course">
              <img src={CourseTumbnail} alt="Nome do Curso" />

              <div className="course-description">
                <div>
                  <span>Nutrição</span>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <div>
                  <span>R$: 450,00</span>
                  <Link to="/course-track">Detalhes</Link>
                </div>
              </div>
            </div>

            <div className="course">
              <img src={CourseTumbnail} alt="Nome do Curso" />

              <div className="course-description">
                <div>
                  <span>Nutrição</span>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <div>
                  <span>R$: 450,00</span>
                  <Link to="/course-track">Detalhes</Link>
                </div>
              </div>
            </div>

            <div className="course">
              <img src={CourseTumbnail} alt="Nome do Curso" />

              <div className="course-description">
                <div>
                  <span>Nutrição</span>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                    geneticamente modificadas
                  </p>
                </div>

                <div>
                  <span>R$: 450,00</span>
                  <Link to="/course-track">Detalhes</Link>
                </div>
              </div>
            </div>
          </section>
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
  );
};

export default CourseTrack;
