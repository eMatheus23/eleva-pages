import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';

// Icons
import { BiSearchAlt } from 'react-icons/bi';

// Componentes
import Header from '../../components/headers/MainHeader';
import ScrollTop from '../../components/ScrollTop';
import SmallContentCard from '../../components/cards/SmallContentCard';
import RefineSearch from '../../components/cards/RefineSearch';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Mockup Data
import contentData from '../../data/content.json';

// Importação da estilização comum a todas as homes
import { Container } from '../../styles/common/HomeStyledComponents';

// Importação da estilização específica da página
import {
  SearchListingHero,
  SearchInputContainer,
  Content,
  SmallerContentWrapper,
  StyledSelect,
} from './styles';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchListing = () => {
  document.title = 'Listagem de Busca | Elevagro';

  const query = useQuery();
  const queryParams = useLocation().search;
  const searchInputRef = useRef();
  const history = useHistory();

  /* -------- STATUS DE USUÁRO -------- */
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const handleStatus = useCallback(status => {
    localStorage.setItem('@elevagro-app/viewer-status', status);

    setViewerStatus(status);
  }, []);
  /* -------- STATUS DE USUÁRO -------- */

  const loadingRef = useRef(null);
  const [pageState, setPageState] = useState(0);
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataContent = contentData;

    setContent(responseDataContent);
  }, []);

  const getContent = ({ filterParams, searchParams }) => {
    setContent([]);

    // eslint-disable-next-line no-console
    console.log(
      `./mockup-data/content.json${searchParams}&${
        filterParams || ''
      }_page=${pageState}`,
    );

    setTimeout(() => {
      axios
        .get(
          `./mockup-data/content.json?${searchParams}${
            filterParams || ''
          }_page=${pageState}`,
        )
        .then(res => {
          setContent([...content, ...res.data]);
          setPageState(pageState + 1);
        });
    }, 1500);
  };

  useEffect(() => {
    getContent({ searchParams: queryParams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  const filterSearch = filters => {
    let params = '';

    Object.keys(filters).map(typeFilter =>
      Object.keys(filters[typeFilter]).map(chaveValorFilter => {
        if (filters[typeFilter][chaveValorFilter]) {
          return (params += `_${typeFilter}[]=${chaveValorFilter
            .replace(typeFilter, '')
            .replace('_', '')}&`);
        }

        return '';
      }),
    );

    setPageState(0);

    getContent({ filterParams: params, searchParams: queryParams });
  };

  const handleNewSearch = () => {
    const search = searchInputRef.current.value;

    const params = new URLSearchParams();

    if (search) {
      params.append('q', search);
    } else {
      params.delete('q');
    }

    searchInputRef.current.value = '';

    getContent({ searchParams: params });

    history.push({ pathname: '/search', search: params.toString() });
  };

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();

      handleNewSearch();
    }
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={() => handleStatus('free')}
        backToVisit={() => handleStatus('visit')}
        becomePremium={() => handleStatus('premium')}
      />

      <SearchListingHero>
        <SmallerContentWrapper>
          <SearchInputContainer>
            <form>
              <input
                type="text"
                placeholder="O que você quer aprender?"
                ref={searchInputRef}
                onKeyDown={handleEnter}
              />

              <button
                type="button"
                className="search-button"
                onClick={handleNewSearch}
              >
                <BiSearchAlt size={30} />
              </button>
            </form>
          </SearchInputContainer>

          <div className="most-searched__section">
            <h4>Mais buscados no mês</h4>

            <ul className="terms__container">
              <li className="term__button">
                <button type="button">SOJA</button>
              </li>
              <li className="term__button">
                <button type="button">DOENÇAS</button>
              </li>
              <li className="term__button">
                <button type="button">SEMENTES</button>
              </li>
              <li className="term__button">
                <button type="button">NUTRIÇÃO</button>
              </li>
              <li className="term__button">
                <button type="button">DANINHAS</button>
              </li>
              <li className="term__button">
                <button type="button">SOLOS</button>
              </li>
              <li className="term__button">
                <button type="button">GESTÃO</button>
              </li>
            </ul>
          </div>
        </SmallerContentWrapper>
      </SearchListingHero>

      <Content>
        <SmallerContentWrapper>
          <main>
            <header className="content__header">
              <div className="header__title">
                <h3>Termo buscado:</h3>
                {/* <h2>Nutrição de plantas</h2> */}
                <h2 className="search-term">{query.get('q')}</h2>
              </div>

              <form className="content__select">
                <StyledSelect name="state" id="state" defaultValue="all">
                  <option value="all">Tudo</option>
                  <option value="courses">Cursos</option>
                  <option value="tracks">Trilhas de ensino</option>
                  <option value="mini_courses">Mini-cursos</option>
                  <option value="content">Conteúdos</option>
                  <option value="lectures">Palestras</option>
                </StyledSelect>
              </form>
            </header>

            <InfiniteScroll
              dataLength={content}
              next={getContent}
              hasMore={content.length < 144}
              loader={<h4 className="load__content">Carregando...</h4>}
              /* eslint-disable prettier/prettier */
              endMessage={(
                <h4 className="load__content">
                  Esses foram os resultados para X, Y, Z...
                </h4>
            )}
            >
              {content &&
                content.map(item => (
                  <SmallContentCard key={item.id} content={item} />
                ))}
            </InfiniteScroll>
          </main>

          <aside>
            <RefineSearch filterSearch={filterSearch} />

            <div className="observer__target" ref={loadingRef} />

            <ScrollTop />
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default SearchListing;
