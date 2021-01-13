import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';

// Logos
import InstagramLogoImg from '../../../assets/images/logos/instagram-gray-logo.png';
import FacebookLogoImg from '../../../assets/images/logos/facebook-gray-logo.png';
import YoutubeLogoImg from '../../../assets/images/logos/youtube-gray-logo.png';
import MessengerLogoImg from '../../../assets/images/logos/messenger-gray-logo.png';

const MainFooter = () => (
  <footer id="main-footer">
    <div className="footer-content-wrapper">
      <div className="row first-row">
        <div className="col-lg-3 col-sm-4 col-6">
          <img src={logoElevagroImg} alt="Elevagro" className="footer-logo" />
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
);

export default MainFooter;
