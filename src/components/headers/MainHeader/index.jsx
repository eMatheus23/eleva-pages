import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { BiSearchAlt } from 'react-icons/bi';
import CustomBadge from '../../CustomBadge';

import logoElevagroImg from '../../../assets/logos/marca-elevagro.svg';
import logoElevagroNegativaImg from '../../../assets/logos/marca-elevagro-negativa.svg';
import logoElevagroImgSmall from '../../../assets/logos/marca-elevagro-small.svg';
import logoElevagroNegativaImgSmall from '../../../assets/logos/marca-elevagro-negativa-small.svg';
import bitwiseImg from '../../../assets/icons/bitwise.svg';
import premiumFlagImg from '../../../assets/flags/premium-flag.svg';
import { ReactComponent as CoursesIcon } from '../../../assets/icons/courses-icon.svg';
import { ReactComponent as ContentIcon } from '../../../assets/icons/content-icon.svg';
import { ReactComponent as LecturesIcon } from '../../../assets/icons/lectures-icon.svg';
import { ReactComponent as SandwichImg } from '../../../assets/icons/sandwich-icon.svg';

import { Header, HeaderMenu, StyledButton } from './styles';

// Mockup
import profileImg from '../../../assets/images/mockups/profile.png';

const MainHeader = ({
  viewerStatus,
  handleLogin,
  backToVisit,
  becomePremium,
}) => {
  const { url } = useRouteMatch();

  const searchInputRef = useRef();

  const history = useHistory();

  const handleSearch = () => {
    const search = searchInputRef.current.value;

    const params = new URLSearchParams();

    params.append('q', search);

    searchInputRef.current.value = '';

    if (search) {
      history.push({ pathname: '/search', search: params.toString() });
    } else {
      history.push({ pathname: '/not-found' });
    }
  };

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();

      handleSearch();
    }
  };

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
            ref={searchInputRef}
            onKeyDown={handleEnter}
          />

          <button type="button" onClick={handleSearch}>
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
                  <Link to="/content">
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
                  <Link to="/content">
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
                <CustomBadge badgeContent={1}>
                  <button type="button" className="profile-picture">
                    <img src={profileImg} alt="Entre no seu perfil" />
                  </button>
                </CustomBadge>
              )}
            </li>
          </ul>

          {viewerStatus === 'visit' && (
            <StyledButton>INSCREVA-SE GRATUITAMENTE</StyledButton>
          )}

          {viewerStatus === 'free' && (
            <StyledButton onClick={becomePremium}>SEJA PREMIUM</StyledButton>
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
