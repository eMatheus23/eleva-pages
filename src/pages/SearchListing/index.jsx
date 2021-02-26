import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useReducer,
} from 'react';
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

const initialPageState = { page: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { page: state.page + 1 };
    case 'decrement':
      return { page: state.page - 1 };
    case 'reset':
      return { page: 0 };
    default:
      throw new Error();
  }
};

const SearchListing = () => {
  document.title = 'Listagem de Busca | Elevagro';

  /* -------- STATUS DE USUÁRO -------- */
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const handleStatus = useCallback(status => {
    localStorage.setItem('@elevagro-app/viewer-status', status);

    setViewerStatus(status);
  }, []);
  /* -------- STATUS DE USUÁRO -------- */

  const query = useQuery();
  const history = useHistory();
  const loadingRef = useRef(null);
  const searchInputRef = useRef();
  const refineSearchRef = useRef();

  const [pageState, dispatch] = useReducer(reducer, initialPageState);
  const [content, setContent] = useState([]);
  const [filtersQueryParams, setFiltersQueryFilters] = useState(null);
  const searchQueryParams = useLocation().search;

  if (searchQueryParams === '') {
    history.push('/not-found');
  }

  const getContent = ({ filterParams, searchParams, resetContent }) => {
    let searchContent = [...content];
    let { page } = pageState;

    // Reseta as veriáveis de conteúdos e a página
    if (resetContent) {
      searchContent = [];
      page = 0;
    }

    const params = `${searchParams}&${filterParams || ''}_page=${page}`;

    const url = `./mockup-data/content.json${params}`;

    // eslint-disable-next-line no-console
    console.log(url);

    setTimeout(() => {
      axios.get(url).then(res => {
        setContent([...searchContent, ...res.data]);
        dispatch({ type: 'increment' });
      });
    }, 1500);
  };

  useEffect(() => {
    getContent({ searchParams: searchQueryParams });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQueryParams]);

  const handleSearchFilter = filters => {
    let params = '';

    // Transforma o objeto de filtros em uma query url
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

    // Seta a query com os parâmetros do filtro em uma variável
    setFiltersQueryFilters(params);

    // Reseta a página atual
    dispatch({ type: 'reset' });

    // Reseta o conteúdo
    setContent([]);

    // Chama a requisição da API com os novos filtros
    getContent({
      filterParams: params,
      searchParams: searchQueryParams,
      resetContent: true,
    });
  };

  const handleNewSearch = () => {
    const search = searchInputRef.current.value;

    if (search === '') {
      return null;
    }

    const params = new URLSearchParams();

    if (search) {
      params.append('q', search);
    } else {
      params.delete('q');
    }

    // Reseta a página atual, o valor do input e o array de conteúdos
    dispatch({ type: 'reset' });
    searchInputRef.current.value = '';
    setContent([]);

    // Chama a requisição da API com os novos termos
    getContent({ searchParams: params, resetContent: true });

    refineSearchRef.current.resetFilters();

    // Muda a URL da página
    return history.push({ pathname: '/search', search: params.toString() });
  };

  const handleEnter = event => {
    if (event.keyCode === 13) {
      event.preventDefault();

      handleNewSearch();
    }
  };

  const handleSugestion = event => {
    const sugestion = event.target.childNodes[0].nodeValue;

    searchInputRef.current.value = sugestion;

    handleNewSearch();
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
                <button type="button" onClick={handleSugestion}>
                  Soja
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Doenças
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Sementes
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Nutrição
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Daninhas
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Solos
                </button>
              </li>
              <li className="term__button">
                <button type="button" onClick={handleSugestion}>
                  Gestão
                </button>
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
              next={
                () =>
                  getContent({
                    filterParams: filtersQueryParams,
                    searchParams: searchQueryParams,
                  })
                // eslint-disable-next-line prettier/prettier
              }
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
            <RefineSearch handleSearchFilter={handleSearchFilter} ref={refineSearchRef} />

            <div className="observer__target" ref={loadingRef} />

            <ScrollTop />
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default SearchListing;
