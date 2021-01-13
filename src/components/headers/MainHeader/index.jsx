import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import searchImg from '../../../assets/images/icons/search-icon.svg';
import bitwiseImg from '../../../assets/images/icons/bitwise.svg';
import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';

import ButtonRounded from '../../Buttons';

const MainHeader = () => (
  <header id="main-header">
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

      <nav className="header-menu">
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
);

export default MainHeader;
