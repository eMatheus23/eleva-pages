import React from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import { BiSearchAlt } from 'react-icons/bi';
import ButtonRounded from '../../Buttons';
import CustomBadge from '../../CustomBadge';

import logoElevagroImg from '../../../assets/images/logos/marca-elevagro.svg';
import logoElevagroNegativaImg from '../../../assets/images/logos/marca-elevagro-negativa.svg';
import logoElevagroImgSmall from '../../../assets/images/logos/marca-elevagro-small.svg';
import logoElevagroNegativaImgSmall from '../../../assets/images/logos/marca-elevagro-negativa-small.svg';
import bitwiseImg from '../../../assets/images/icons/bitwise.svg';
import premiumFlagImg from '../../../assets/images/flags/premium-flag.svg';
import { ReactComponent as CoursesIcon } from '../../../assets/images/icons/courses-icon.svg';
import { ReactComponent as ContentIcon } from '../../../assets/images/icons/content-icon.svg';
import { ReactComponent as LecturesIcon } from '../../../assets/images/icons/lectures-icon.svg';
import { ReactComponent as SandwichImg } from '../../../assets/images/icons/sandwich-icon.svg';

import { Header, HeaderMenu } from './styles';

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
    <Header viewerStatus={viewerStatus}>
      <div className="header-content-wrapper">
        {viewerStatus === 'premium' && (
          <img src={premiumFlagImg} alt="Plano Premium" fill="currentColor" />
        )}

        <button
          type="button"
          onClick={backToVisit}
          className="header__logo desktop"
        >
          <img
            src={
              viewerStatus === 'premium'
                ? logoElevagroNegativaImg
                : logoElevagroImg
            }
            alt="Elevagro"
          />
        </button>

        <button
          type="button"
          onClick={backToVisit}
          className="header__logo mobile"
        >
          <img
            src={
              viewerStatus === 'premium'
                ? logoElevagroNegativaImgSmall
                : logoElevagroImgSmall
            }
            alt="Elevagro"
          />
        </button>

        <form className="header__search-container">
          <input
            type="text"
            placeholder="Busque na Elevagro"
            title="Busque na Elevagro"
          />

          <button type="button">
            <BiSearchAlt size="2.2rem" title="Busque na Elevagro" />
          </button>
        </form>

        <HeaderMenu viewerStatus={viewerStatus}>
          <ul className="header__menu-itens">
            {viewerStatus !== 'premium' && (
              <>
                <li
                  className={`desktop-only ${
                    url === '/courses' ? 'active' : ''
                  }`}
                >
                  <Link to="/courses">
                    <CoursesIcon
                      fill="currentColor"
                      alt="CURSOS"
                      className="menu-icon"
                    />
                    CURSOS
                  </Link>
                </li>

                <li
                  className={`desktop-only ${
                    url === '/content' ? 'active' : ''
                  }`}
                >
                  <Link to="/track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>

                <li
                  className={`desktop-only ${
                    url === '/lectures' ? 'active' : ''
                  }`}
                >
                  <Link to="/track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>

                <img
                  src={bitwiseImg}
                  alt="Separação de sessão"
                  className="desktop-only"
                />

                <li
                  className={`desktop-only ${url === '/teach' ? 'active' : ''}`}
                >
                  <Link to="/track">ENSINE NA ELEVAGRO</Link>
                </li>

                <li
                  className={`desktop-only ${url === '/plans' ? 'active' : ''}`}
                >
                  <Link to="/plans">PLANOS</Link>
                </li>
              </>
            )}

            {viewerStatus === 'premium' && (
              <>
                <li
                  className={`desktop-only ${url === '/teach' ? 'active' : ''}`}
                >
                  <Link to="/track">ENSINE NA ELEVAGRO</Link>
                </li>

                <li
                  className={`desktop-only ${
                    url === '/company' ? 'active' : ''
                  }`}
                >
                  <Link to="/track">EMPRESARIAL</Link>
                </li>

                <img
                  src={bitwiseImg}
                  alt="Separação de sessão"
                  className="desktop-only"
                />

                <li
                  className={`desktop-only ${
                    url === '/lectures' ? 'active' : ''
                  }`}
                >
                  <Link to="/track">
                    <LecturesIcon
                      fill="currentColor"
                      alt="PALESTRAS"
                      className="menu-icon"
                    />
                    PALESTRAS
                  </Link>
                </li>

                <li
                  className={`desktop-only ${
                    url === '/content' ? 'active' : ''
                  }`}
                >
                  <Link to="/track">
                    <ContentIcon
                      fill="currentColor"
                      alt="CONTEÚDOS"
                      className="menu-icon"
                    />
                    CONTEÚDOS
                  </Link>
                </li>

                <li
                  className={`desktop-only ${
                    url === '/courses' ? 'active' : ''
                  }`}
                >
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
                <button type="button" className="signin" onClick={handleLogin}>
                  ENTRAR
                </button>
              )}
              {viewerStatus !== 'visit' && (
                <CustomBadge badgeContent={5}>
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

          <button type="button" className="header__sandwich">
            <SandwichImg fill="currentColor" />
          </button>
        </HeaderMenu>
      </div>
    </Header>
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
