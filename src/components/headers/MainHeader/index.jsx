import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

import { BiSearchAlt } from 'react-icons/bi';

import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';
import logoElevagroNegativaImg from '../../../assets/images/logos/marca-elevagro-negativa.svg';
import bitwiseImg from '../../../assets/images/icons/bitwise.svg';
import { ReactComponent as CoursesIcon } from '../../../assets/images/icons/courses-icon.svg';
import { ReactComponent as ContentIcon } from '../../../assets/images/icons/content-icon.svg';
import { ReactComponent as LecturesIcon } from '../../../assets/images/icons/lectures-icon.svg';
import premiumFlagImg from '../../../assets/images/flags/premium-flag.svg';

// Mockup
import profileImg from '../../../assets/images/mockups/profile.png';

import ButtonRounded from '../../Buttons';

const MainHeader = ({
  viewerStatusProp,
  handleLogin,
  backToVisit,
  becomePremium,
}) => {
  const [viewerStatus, setViewerStatus] = useState(viewerStatusProp);

  return (
    <header
      id="main-header"
      className={viewerStatus === 'premium' ? 'premium' : ''}
    >
      <div className="header-content-wrapper">
        {viewerStatus === 'premium' && (
          <img src={premiumFlagImg} alt="Plano Premium" fill="currentColor" />
        )}

        <Link
          to="/"
          onClick={() => {
            setViewerStatus('visit');
            backToVisit();
          }}
        >
          <img
            src={
              viewerStatus === 'premium'
                ? logoElevagroNegativaImg
                : logoElevagroImg
            }
            alt="Elevagro"
          />
        </Link>

        <form>
          <input
            type="text"
            placeholder="Busque na Elevagro"
            title="Busque na Elevagro"
          />

          <button type="button">
            <BiSearchAlt size={22} title="Busque na Elevagro" />
          </button>
        </form>

        <nav className="header-menu">
          <ul>
            {viewerStatus !== 'premium' && (
              <>
                <li className="active">
                  <Link to="/course-track">
                    <CoursesIcon
                      fill="currentColor"
                      alt="CURSOS"
                      className="menu-icon"
                    />
                    CURSOS
                  </Link>
                </li>
                <li>
                  <Link to="/course-track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>
                <li>
                  <Link to="/course-track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>
                <img src={bitwiseImg} alt="Separação de sessão" />
                <li>
                  <Link to="/course-track">ENSINE NA ELEVAGRO</Link>
                </li>
                <li>
                  <Link to="/course-track">PLANOS</Link>
                </li>
              </>
            )}

            {viewerStatus === 'premium' && (
              <>
                <li>
                  <Link to="/course-track">ENSINE NA ELEVAGRO</Link>
                </li>
                <li>
                  <Link to="/course-track">EMPRESARIAL</Link>
                </li>

                <img src={bitwiseImg} alt="Separação de sessão" />

                <li>
                  <Link to="/course-track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>

                <li>
                  <Link to="/course-track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>

                <li className="active">
                  <Link to="/course-track">
                    <CoursesIcon
                      fill="currentColor"
                      alt="CURSOS"
                      className="menu-icon"
                    />
                    CURSOS
                  </Link>
                </li>
              </>
            )}

            <li>
              {viewerStatus === 'visit' && (
                <button
                  type="button"
                  className="signup"
                  onClick={() => {
                    setViewerStatus('free');
                    handleLogin();
                  }}
                >
                  ENTRAR
                </button>
              )}
              {viewerStatus !== 'visit' && (
                <button type="button" className="profile-picture">
                  <img src={profileImg} alt="Entre no seu perfil" />
                </button>
              )}
            </li>
          </ul>

          {viewerStatus === 'visit' && (
            <ButtonRounded>INSCREVA-SE GRATUITAMENTE</ButtonRounded>
          )}
          {viewerStatus === 'free' && (
            <ButtonRounded
              onClick={() => {
                setViewerStatus('premium');
                becomePremium();
              }}
            >
              SEJA PREMIUM
            </ButtonRounded>
          )}
        </nav>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  viewerStatusProp: PropTypes.string,
  handleLogin: PropTypes.func,
  backToVisit: PropTypes.func,
  becomePremium: PropTypes.func,
};

MainHeader.defaultProps = {
  viewerStatusProp: 'visit',
};

export default MainHeader;
