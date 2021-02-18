import React, { useState, useCallback, useEffect, useRef } from 'react';
import axios from 'axios';

import InfiniteScroll from 'react-infinite-scroll-component';

// Componentes
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
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  const loadingRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    page: 0,
  });
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Simula a chamada da API
    const responseDataContent = contentData;

    setContent(responseDataContent);
  }, []);

  const getContent = page => {
    setTimeout(() => {
      axios.get(`./mockup-data/content.json?_page=${page}`).then(res => {
        setContent([...content, ...res.data]);
        setScrollState({ page: scrollState.page + 1 });
      });
    }, 1500);
  };
  useEffect(() => {
    getContent(scrollState.page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funções para teste
  const handleLogin = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    setViewerStatus('free');
  }, []);

  const backToVisit = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('visit');
  }, []);

  const becomePremium = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'premium');

    setViewerStatus('premium');
  }, []);
  // Funções para teste

  const refineParams = params => {
    console.log(params);
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
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

            <RefineSearch refineParams={refineParams} />

            <div className="observer__target" ref={loadingRef} />

            <ScrollTop />
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default ContentListing;
