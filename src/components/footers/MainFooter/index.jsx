import React from 'react';
import { Link } from 'react-router-dom';

import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';

// Logos
import InstagramLogoImg from '../../../assets/images/logos/instagram-gray-logo.svg';
import FacebookLogoImg from '../../../assets/images/logos/facebook-gray-logo.svg';
import YoutubeLogoImg from '../../../assets/images/logos/youtube-gray-logo.svg';
import MessengerLogoImg from '../../../assets/images/logos/messenger-gray-logo.svg';

import { Container } from './styles';

const MainFooter = () => (
  <Container>
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
              <Link to="/track">Sobre</Link>
            </li>
            <li>
              <Link to="/track">Trabalhe Conosto</Link>
            </li>
            <li>
              <Link to="/track">Marca</Link>
            </li>
            <li>
              <Link to="/track">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h3>FALE CONOSCO</h3>
          <ul>
            <li>
              <Link to="/track">Suporte Técnico</Link>
            </li>
            <li>
              <Link to="/track">Assessoria de Imprensa</Link>
            </li>
            <li>
              <Link to="/track">Financeiro</Link>
            </li>
            <li>
              <Link to="/track">Vendas</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h3>WHATSAPP</h3>
          <ul>
            <li>
              <Link to="/track">Receba conteúdo exclusivo no seu WhatsApp</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h3>PRODUTOS</h3>
          <ul>
            <li>
              <Link to="/track" title="Cursos">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/track" title="Trilhas de aprendizado">
                Trilhas de aprendizado
              </Link>
            </li>
            <li>
              <Link to="/track" title="Pós-graduação">
                Pós-graduação
              </Link>
            </li>
            <li>
              <Link to="/plans" title="Assinaturas Premium">
                Assinaturas Premium
              </Link>
            </li>
            <li>
              <Link to="/track" title="Palestras">
                Palestras
              </Link>
            </li>
            <li>
              <Link to="/track" title="Produção de conteúdo">
                Produção de conteúdo
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h3>SOLUÇÕES</h3>
          <ul>
            <li>
              <Link to="/track">Profissionais</Link>
            </li>
            <li>
              <Link to="/track">Estudantes</Link>
            </li>
            <li>
              <Link to="/track">Empresas</Link>
            </li>
            <li>
              <Link to="/track">Universidades</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h3>LEGAL</h3>
          <ul>
            <li>
              <Link to="/track">Termos de uso</Link>
            </li>
            <li>
              <Link to="/track">Copyright</Link>
            </li>
            <li>
              <Link to="/track">Política de cookies</Link>
            </li>
            <li>
              <Link to="/track">Política de uso de dados</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-4 col-6">
          <h2>REDES SOCIAIS</h2>
          <div className="social-networks-links">
            <Link to="/track" title="Instagram">
              <img src={InstagramLogoImg} alt="Instagram" />
            </Link>

            <Link to="/track" title="Facebook">
              <img src={FacebookLogoImg} alt="Facebook" />
            </Link>

            <Link to="/track" title="Youtube">
              <img src={YoutubeLogoImg} alt="Youtube" />
            </Link>

            <Link to="/track" title="Messenger">
              <img src={MessengerLogoImg} alt="Messenger" />
            </Link>
          </div>
        </div>
      </div>

      <div className="row copyrights">
        <p>© Todos os direitos reservados a Elevagro</p>
      </div>
    </div>
  </Container>
);

export default MainFooter;
