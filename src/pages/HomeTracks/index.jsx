import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

// Icons
import CoursesIcon from '../../assets/icons/courses-icon-02.svg';
import goInsideIcon from '../../assets/icons/go-inside-green-icon.svg';

import heroImg from '../../assets/images/mockups/home-trilhas/person-touching-open-macbook-on-table-839465.png';

// Components
import Header from '../../components/headers/MainHeader';
import SearchContainer, {
  BannerCard,
} from '../../components/home-components/HomeSearchContainer';
import SignupCard from '../../components/home-components/HomeSignupCard';
import PremiumOfferCard from '../../components/home-components/HomePremiumOfferCard';
import HomeHero from '../../components/home-components/HomeHero';
import { FindOutButton } from '../../components/Buttons';
import Carousel from '../../components/Carousel';
import Footer from '../../components/footers/MainFooter';

// Mockups
import PremiumCardImg from '../../assets/images/mockups/home-trilhas/person-in-blue-shirt-wearing-black-round-analog-watch-3747106.png';
import TrackImg from '../../assets/images/mockups/home-trilhas/Grupo 843.png';
import TrackImg02 from '../../assets/images/mockups/home-trilhas/soybeans-4019684_960_720.png';
import TrackImg03 from '../../assets/images/mockups/home-trilhas/thumbnail-10.png';
import TrackImg04 from '../../assets/images/mockups/home-trilhas/Captura de Tela 2020-10-07 às 16.57.01.png';
import TrackImg05 from '../../assets/images/mockups/home-trilhas/wheat-5567750.png';
import TrackImg06 from '../../assets/images/mockups/home-trilhas/Soja.png';
import HighlightsBackground from '../../assets/images/mockups/home-trilhas/Grupo 835.png';
import HighlightsBackground02 from '../../assets/images/mockups/home-trilhas/Grupo 848.png';
import HighlightCardImg from '../../assets/images/mockups/home-trilhas/7b26a7c5caa547331e37366628b46d43.png';
import HighlightCardImg02 from '../../assets/images/mockups/home-trilhas/2-thumb-curso-T.A.png';
import HighlightCardImg03 from '../../assets/images/mockups/home-trilhas/curso3.png';
import HighlightCardImg04 from '../../assets/images/mockups/home-trilhas/thumbnail-4.png';
import HighlightCardImg05 from '../../assets/images/mockups/home-trilhas/Captura de Tela 2019-02-12 às 6.57.57 PM.png';
import HighlightCardImg06 from '../../assets/images/mockups/home-trilhas/6059.png';
import HighlightCardImg07 from '../../assets/images/mockups/home-trilhas/$y3k61h0util.png';
import HighlightCardImg08 from '../../assets/images/mockups/home-trilhas/Captura de Tela 2019-02-12 às 6.58.21 PM.png';
import CareerMockupImg from '../../assets/images/mockups/home-trilhas/Grupo 852.png';
import CareerMockupImg02 from '../../assets/images/mockups/home-trilhas/man-in-black-suit-jacket-standing-and-smiling-3777557.png';
import CareerMockupImg03 from '../../assets/images/mockups/home-trilhas/5863.png';
import CareerMockupImg04 from '../../assets/images/mockups/home-trilhas/man-taking-notes-in-front-of-his-computer-4238481.png';
import Extras01 from '../../assets/images/mockups/home-trilhas/pexels-photo-1181304.png';
import Extras02 from '../../assets/images/mockups/home-trilhas/Captura de Tela 2019-04-23 às 9.08.22 PM.png';
import Extras03 from '../../assets/images/mockups/home-trilhas/stil--837JygbCJo-unsplash.png';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Configuração da responsividade do carrossel
import carouselResponsiveConfig from '../../styles/config/carouselResponsiveConfig';

import {
  CarouselContainer,
  LaunchCard,
  HighlightsContainer,
  HighlightsCard,
  ThemesContainer,
  CareerCard,
} from './styles';

// Importação da estilização comum a todas as homes
import {
  Container,
  ArticleHeader,
  ContentWrapper,
  ExtrasSection,
} from '../../styles/common/HomeStyledComponents';

const carouselResponsiveConfigSmall = {
  0: { items: 1 },
  700: { items: 2 },
  900: { items: 3 },
  1250: { items: 4 },
  1530: { items: 4 },
};

const HomeTracks = () => {
  document.title = 'Trilhas de Ensino | Elevagro';

  /* -------- STATUS DE USUÁRO -------- */
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const handleStatus = useCallback(status => {
    localStorage.setItem('@elevagro-app/viewer-status', status);

    setViewerStatus(status);
  }, []);
  /* -------- STATUS DE USUÁRO -------- */
  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={() => handleStatus('free')}
        backToVisit={() => handleStatus('visit')}
        becomePremium={() => handleStatus('premium')}
      />

      <HomeHero background={heroImg}>
        <h1>
          <img src={CoursesIcon} alt="TRILHAS DE ENSINO" />
          TRILHAS DE ENSINO
        </h1>
        <h2>EDUCAÇÃO NO AGRO ELEVADA A OUTRO NÍVEL.</h2>
        <p>
          Montamos grades de ensino com nossos cursos para o seu melhor
          aprendizado.
        </p>
      </HomeHero>

      <SearchContainer inputPlaceholder="Procure uma trilha">
        <BannerCard linkTo="/tracks">
          <h4>Descontos Premium</h4>
          <p>
            Associado Premium tem grandes descontos e promoções exclusivas em
            todos as trilhas.
          </p>
        </BannerCard>
      </SearchContainer>

      <CarouselContainer>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>LANÇAMENTOS</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODOS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>FERRUGEM 360º</h4>
                  <p>Visão completa para o domínio da soja.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>VENDAS DE INSUMOS AGRÍCOLAS </h4>
                  <p>
                    Aumente suas skills de vendas fortaleça o seu argumentario.
                  </p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg02} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>PERCEVEJOS</h4>
                  <p>Conhecimento garantido para o combate.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg03} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>FERRUGEM 360º</h4>
                  <p>Visão completa para o domínio da soja.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>FERRUGEM 360º</h4>
                  <p>Visão completa para o domínio da soja.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>VENDAS DE INSUMOS AGRÍCOLAS </h4>
                  <p>
                    Aumente suas skills de vendas fortaleça o seu argumentario.
                  </p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg02} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>PERCEVEJOS</h4>
                  <p>Conhecimento garantido para o combate.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg03} alt="" />
            </LaunchCard>
          </Carousel>
        </ContentWrapper>
      </CarouselContainer>

      <HighlightsContainer>
        <ContentWrapper>
          <section>
            <h5>TRILHA DESTAQUE</h5>
            <h3>SOJA 360º</h3>
            <h4>Visão completa para o domínio da soja.</h4>
            <span>
              <>De </>
              <del>R$ 2.400</del>
            </span>
            <span>
              Por R$:
              <> </>
              <strong>1.623</strong>
              ,00
            </span>
            <p>Em até 10x de R$122,30</p>
            <FindOutButton to="/">Saiba mais</FindOutButton>
            <span>Associado Premium tem 30% de desconto.</span>
          </section>

          <aside>
            <h5>Você vai aprender sobre:</h5>
            <Carousel responsive={carouselResponsiveConfigSmall}>
              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg} alt="" />
                  <div>
                    <h4>Nutrição de Plantas</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg02} alt="" />
                  <div>
                    <h4>Nematologia</h4>
                    <p>
                      Tecnologia de aplicação de herbicidas sistêmicos:
                      Aplicação eficiente e segura
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg03} alt="" />
                  <div>
                    <h4>Doenças</h4>
                    <p>
                      Fenología y eco-fisiología de la soja para altos
                      rendimientos
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg04} alt="" />
                  <div>
                    <h4>Solos</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg} alt="" />
                  <div>
                    <h4>Nutrição de Plantas</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg} alt="" />
                  <div>
                    <h4>Nutrição de Plantas</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>
            </Carousel>
          </aside>

          <div className="filters-container">
            <div className="triangle" />
            <div className="filter" />
          </div>
        </ContentWrapper>

        <div className="filter-white" />
        <img src={HighlightsBackground} alt="" />
      </HighlightsContainer>

      <ThemesContainer>
        <ContentWrapper>
          <section>
            <h2>Veja mais trilhas sobre:</h2>
            <div>
              <Link to="/">Soja</Link>
              <Link to="/">Doenças</Link>
              <Link to="/">Pragas</Link>
              <Link to="/">Nutrição</Link>
              <Link to="/">Solos</Link>
              <Link to="/">GESTÃO</Link>
              <Link to="/">Controle Biológico</Link>
              <Link to="/">Tec. de aplicação</Link>
              <Link to="/">GESTÃO</Link>
              <Link to="/" className="themes">
                <FiPlus size={20} />
                TEMAS
              </Link>
            </div>
          </section>

          <aside>
            <h3>BANNER PROMOCIONAL COM CTA EX: MONTE SUA TRILHA</h3>
            <FindOutButton>Saiba mais</FindOutButton>
            <div className="filter" />
            <img src={PremiumCardImg} alt="" />
          </aside>
        </ContentWrapper>
      </ThemesContainer>

      <CarouselContainer>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>CARREIRAS NO AGRO</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODAS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>

            <h4 className="header__subtitle">
              Aprenda as especificidades de cada área e prepare-se para atuar e
              crescer na sua carreira.
            </h4>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            <CareerCard>
              <img src={CareerMockupImg} alt="" />
              <div>
                <div>
                  <h4>REPRESENTANTE TÉCNICO DE VENDAS</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg02} alt="" />
              <div>
                <div>
                  <h4>AGRÔNOMO GERAÇÃO DE DEMANDA</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg03} alt="" />
              <div>
                <div>
                  <h4>COOPERADOR DE FATURAMENTO</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg04} alt="" />
              <div>
                <div>
                  <h4>CAPACITAÇÃO TÉCNICA PARA REVENDAS</h4>
                  <p>
                    Chega de perder dinheiro! Domine a gestão do seu negócio.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg} alt="" />
              <div>
                <div>
                  <h4>REPRESENTANTE TÉCNICO DE VENDAS</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg02} alt="" />
              <div>
                <div>
                  <h4>REPRESENTANTE TÉCNICO DE VENDAS</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg03} alt="" />
              <div>
                <div>
                  <h4>REPRESENTANTE TÉCNICO DE VENDAS</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>

            <CareerCard>
              <img src={CareerMockupImg04} alt="" />
              <div>
                <div>
                  <h4>REPRESENTANTE TÉCNICO DE VENDAS</h4>
                  <p>
                    Área para descrição da trilha de ensino. Não pode ter muita
                    palavra.
                  </p>
                </div>

                <FindOutButton>Saiba mais</FindOutButton>
              </div>
            </CareerCard>
          </Carousel>
        </ContentWrapper>
      </CarouselContainer>

      {viewerStatus === 'visit' && <SignupCard extraMarginBottom />}

      {viewerStatus === 'free' && <PremiumOfferCard extraMarginBottom />}

      <CarouselContainer>
        <ContentWrapper>
          <ArticleHeader>
            <section className="header__title">
              <h3>TRILHAS 360º</h3>
              <div className="border-bottom" />
              <Link to="/">
                <span className="desktop__link">VER TODAS</span>

                <img src={goInsideIcon} alt="Ver..." className="mobile__link" />
              </Link>
            </section>

            <h4 className="header__subtitle">
              Visão completa, panorâmica sobre o tema que você quer aprender.
            </h4>
          </ArticleHeader>

          <Carousel responsive={carouselResponsiveConfig}>
            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>FERRUGEM 360º</h4>
                  <p>Visão completa para o domínio da soja.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>HORTALIÇAS 360º</h4>
                  <p>
                    Chega de perder dinheiro! Domine a gestão do seu negócio.
                  </p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg04} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>TRIGO 360º </h4>
                  <p>Conhecimento garantido para o combate.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg05} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>PLANTABILIDADE 360º </h4>
                  <p>
                    Chega de perder dinheiro! Domine a gestão do seu negócio.
                  </p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg06} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>FERRUGEM 360º</h4>
                  <p>Visão completa para o domínio da soja.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>VENDAS DE INSUMOS AGRÍCOLAS </h4>
                  <p>
                    Aumente suas skills de vendas fortaleça o seu argumentario.
                  </p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg02} alt="" />
            </LaunchCard>

            <LaunchCard>
              <div>
                <div>
                  <span>TRILHA</span>
                  <h4>PERCEVEJOS</h4>
                  <p>Conhecimento garantido para o combate.</p>
                </div>

                <FindOutButton to="/">Saiba mais</FindOutButton>
              </div>
              <span className="filter" />
              <img src={TrackImg03} alt="" />
            </LaunchCard>
          </Carousel>
        </ContentWrapper>
      </CarouselContainer>

      <HighlightsContainer extraMargin>
        <ContentWrapper>
          <section>
            <h5>TRILHA DO MÊS</h5>
            <h3>AGROBUSINESS</h3>
            <h4>Inteligência estratégica para grandes negócios</h4>
            <span>
              <>De </>
              <del>R$ 4.400</del>
            </span>
            <span>
              Por R$:
              <> </>
              <strong>3.623</strong>
              ,00
            </span>
            <p>Em até 10x de R$122,30</p>
            <FindOutButton to="/">Saiba mais</FindOutButton>
            <span>Associado Premium tem 30% de desconto.</span>
          </section>

          <aside>
            <h5>Você vai aprender sobre:</h5>
            <Carousel responsive={carouselResponsiveConfigSmall}>
              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg05} alt="" />
                  <div>
                    <h4>Gestão</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg06} alt="" />
                  <div>
                    <h4>Administração Agrícola</h4>
                    <p>
                      Tecnologia de aplicação de herbicidas sistêmicos:
                      Aplicação eficiente e segura
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg07} alt="" />
                  <div>
                    <h4>Negociação</h4>
                    <p>
                      Fenología y eco-fisiología de la soja para altos
                      rendimientos
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg08} alt="" />
                  <div>
                    <h4>Negociação</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg} alt="" />
                  <div>
                    <h4>Nutrição de Plantas</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>

              <HighlightsCard>
                <Link to="/">
                  <img src={HighlightCardImg} alt="" />
                  <div>
                    <h4>Nutrição de Plantas</h4>
                    <p>
                      Manejo da resistência de insetos a inseticidas e a plantas
                      geneticamente modificadas
                    </p>
                  </div>
                </Link>
              </HighlightsCard>
            </Carousel>
          </aside>

          <div className="filters-container">
            <div className="triangle" />
            <div className="filter" />
          </div>
        </ContentWrapper>

        <div className="filter-black" />
        <img src={HighlightsBackground02} alt="" />
      </HighlightsContainer>

      <ExtrasSection>
        <ContentWrapper>
          <section>
            <img src={Extras01} alt="" />
            <div>
              <h4>Capacitações técnicas para empresas</h4>
              <p>
                Capacite sua equipe, reforce o argumentário técnico da sua
                equipe.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras02} alt="" />
            <div>
              <h4>Planos de assinaturas empresarias</h4>
              <p>
                Uma Elevagro customizada, para estratégias de relacionamento ou
                para sua equipe aprender todos os dias.
              </p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>

          <section>
            <img src={Extras03} alt="" />
            <div>
              <h4>Conheça também os cursos Elevagro</h4>
              <p>Feitos por quem realmente entende do agronegócio.</p>
              <Link to="/">Saiba mais</Link>
            </div>
          </section>
        </ContentWrapper>
      </ExtrasSection>

      <Footer />
    </Container>
  );
};

export default HomeTracks;
