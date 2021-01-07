import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoElevagroImg from '../../assets/images/logos/marca-elevagro.svg';
import searchImg from '../../assets/images/icons/search-icon.svg';
import bitwiseImg from '../../assets/images/icons/bitwise.svg';

import ButtonRounded from '../../components/Buttons';

const CourseTrack = () => {
  document.title = 'Trilha de Ensino | Elevagro';

  return (
    <div id="course-track">
      <header className="course-track-header">
        <Link to="/">
          <img src={logoElevagroImg} alt="Elevagro" />
        </Link>

        <form>
          <input type="text" placeholder="Busque na Elevagro" />

          <button type="button">
            <img src={searchImg} alt="Buscar na Elevagro" />
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
      </header>

      <main>
        <h1>Content</h1>
      </main>

      <footer id="course-track-footer">
        <div className="footer-content-wrapper">
          <div className="row">
            <div className="col">
              <img src={logoElevagroImg} alt="Elevagro" />
              <p className="brand-description">
                Somos a Elevagro, e viemos para preparar o profissional do
                agronegócio para os desafios do futuro.
              </p>
            </div>

            <div className="col">
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

            <div className="col">
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

            <div className="col">
              <h3>WHATSAPP</h3>
              <ul>
                <li>
                  <Link to="/course-track">
                    Receba conteúdo exclusivo no seu WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>PRODUTOS</h3>
              <ul>
                <li>
                  <Link to="/course-track">Cursos</Link>
                </li>
                <li>
                  <Link to="/course-track">Trilhas de aprendizado</Link>
                </li>
                <li>
                  <Link to="/course-track">Pós-graduação</Link>
                </li>
                <li>
                  <Link to="/course-track">Assinaturas Premium</Link>
                </li>
                <li>
                  <Link to="/course-track">Palestras</Link>
                </li>
                <li>
                  <Link to="/course-track">Produção de conteúdo</Link>
                </li>
              </ul>
            </div>

            <div className="col">
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

            <div className="col">
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

            <div className="col">
              <h2>REDES SOCIAIS</h2>
            </div>
          </div>

          <div className="row">
            <p>© Todos os direitos reservados a Elevagro</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CourseTrack;
