import React, { useState, useCallback, useEffect, useRef } from 'react';
import axios from 'axios';

// Componentes
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../../components/headers/MainHeader';
import SignupCard from './components/SignupCard';
import ScrollTop from '../../components/ScrollTop';
import SmallContentCard from '../../components/cards/SmallContentCard';
import RefineSearch from '../../components/cards/RefineSearch';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Imagens
import heroBackground from '../../assets/images/pages/listing/bgs.png';

// Mockup Data
import contentData from '../../data/content.json';

// Estilização
import { ListingHero, Content, SmallerContentWrapper } from './styles';
import { Container } from '../../styles/common/HomeStyledComponents';

const ContentListing = () => {
  document.title = 'Listagem de Conteúdos | Elevagro';

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

  const getContent = params => {
    setTimeout(() => {
      axios
        .get(`./mockup-data/content.json?${params || ''}_page=${pageState}`)
        .then(res => {
          setContent([...content, ...res.data]);
          setPageState(pageState + 1);
        });
    }, 1500);
  };
  useEffect(() => {
    getContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refineSearch = filters => {
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
    setContent([]);

    getContent(params);
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={() => handleStatus('free')}
        backToVisit={() => handleStatus('visit')}
        becomePremium={() => handleStatus('premium')}
      />

      <ListingHero backgound={heroBackground}>
        <SmallerContentWrapper>
          <h1>Conteúdos sobre X Y Z, mais recentes…</h1>
        </SmallerContentWrapper>
      </ListingHero>

      <Content>
        <SmallerContentWrapper>
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
            /* eslint-enable prettier/prettier */
          >
            {content &&
              content.map(item => (
                <SmallContentCard key={item.id} content={item} />
              ))}
          </InfiniteScroll>

          <aside>
            <SignupCard viewerStatus={viewerStatus} />

            <RefineSearch refineSearch={refineSearch} />

            <div className="observer__target" ref={loadingRef} />

            <ScrollTop />
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default ContentListing;
