import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import './styles.css';

import { BiSearchAlt } from 'react-icons/bi';
import ButtonRounded from '../../Buttons';
import CustomBadge from '../../CustomBadge';

import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';
import logoElevagroNegativaImg from '../../../assets/images/logos/marca-elevagro-negativa.svg';
import bitwiseImg from '../../../assets/images/icons/bitwise.svg';
import premiumFlagImg from '../../../assets/images/flags/premium-flag.svg';
import { ReactComponent as CoursesIcon } from '../../../assets/images/icons/courses-icon.svg';
import { ReactComponent as ContentIcon } from '../../../assets/images/icons/content-icon.svg';
import { ReactComponent as LecturesIcon } from '../../../assets/images/icons/lectures-icon.svg';

// Mockup
import profileImg from '../../../assets/images/mockups/profile.png';

const MainHeader = ({
  viewerStatus,
  handleLogin,
  backToVisit,
  becomePremium,
}) => {
  const { url } = useRouteMatch();

  return (
    <header
      id="main-header"
      className={viewerStatus === 'premium' ? 'premium' : ''}
    >
      <div className="header-content-wrapper">
        {viewerStatus === 'premium' && (
          <img src={premiumFlagImg} alt="Plano Premium" fill="currentColor" />
        )}

        <button type="button" onClick={backToVisit}>
          <img
            src={
              viewerStatus === 'premium'
                ? logoElevagroNegativaImg
                : logoElevagroImg
            }
            alt="Elevagro"
          />
        </button>

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
                <li className={url === '/courses' ? 'active' : ''}>
                  <Link to="/courses">
                    <CoursesIcon
                      fill="currentColor"
                      alt="CURSOS"
                      className="menu-icon"
                    />
                    CURSOS
                  </Link>
                </li>
                <li className={url === '/content' ? 'active' : ''}>
                  <Link to="/track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>
                <li className={url === '/lectures' ? 'active' : ''}>
                  <Link to="/track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>
                <img src={bitwiseImg} alt="Separação de sessão" />
                <li className={url === '/teach' ? 'active' : ''}>
                  <Link to="/track">ENSINE NA ELEVAGRO</Link>
                </li>
                <li className={url === '/plans' ? 'active' : ''}>
                  <Link to="/plans">PLANOS</Link>
                </li>
              </>
            )}

            {viewerStatus === 'premium' && (
              <>
                <li className={url === '/teach' ? 'active' : ''}>
                  <Link to="/track">ENSINE NA ELEVAGRO</Link>
                </li>
                <li className={url === '/company' ? 'active' : ''}>
                  <Link to="/track">EMPRESARIAL</Link>
                </li>

                <img src={bitwiseImg} alt="Separação de sessão" />

                <li className={url === '/lectures' ? 'active' : ''}>
                  <Link to="/track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>

                <li className={url === '/content' ? 'active' : ''}>
                  <Link to="/track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>

                <li className={url === '/courses' ? 'active' : ''}>
                  <Link to="/courses">
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
                <button type="button" className="signup" onClick={handleLogin}>
                  ENTRAR
                </button>
              )}
              {viewerStatus !== 'visit' && (
                <CustomBadge badgeContent={3}>
                  <button type="button" className="profile-picture">
                    <img src={profileImg} alt="Entre no seu perfil" />
                  </button>
                </CustomBadge>
              )}
            </li>
          </ul>

          {viewerStatus === 'visit' && (
            <ButtonRounded>INSCREVA-SE GRATUITAMENTE</ButtonRounded>
          )}
          {viewerStatus === 'free' && (
            <ButtonRounded onClick={becomePremium}>SEJA PREMIUM</ButtonRounded>
          )}
        </nav>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  viewerStatus: PropTypes.string,
  handleLogin: PropTypes.func,
  backToVisit: PropTypes.func,
  becomePremium: PropTypes.func,
};

MainHeader.defaultProps = {
  viewerStatus: 'visit',
};

export default MainHeader;
