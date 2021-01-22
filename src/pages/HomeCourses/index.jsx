import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';

// Signup card
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { BiSearchAlt } from 'react-icons/bi';
import {
  Container,
  CarouselContainer,
  CarouselButton,
  Hero,
  SearchSection,
  CourseCard,
  MiniCourseSection,
  LaunchCard,
  HighlightsContainer,
  HighlightsCard,
  ThemesContainer,
  CareerCard,
  SignupCard,
  BecomePremiumCard,
  ExtrasSection,
} from './styles';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Icons
import CoursesIcon from '../../assets/images/icons/courses-icon-02.svg';
import HeroDetail from '../../assets/images/other/hero-detail.svg';
import FilterIcon from '../../assets/images/icons/filter-icon.svg';
import BitwiseImg from '../../assets/images/icons/bitwise.svg';
import CardDetail02 from '../../assets/images/other/card-detail-02.svg';
import CardDetailMini from '../../assets/images/other/card-detail-mini-courses.svg';
import CartIcon from '../../assets/images/icons/cart-icon-03.svg';

import Header from '../../components/headers/MainHeader';
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
import MiniCourseImg from '../../assets/images/mockups/home-courses/man-taking-notes-in-front-of-his-computer-4238481.png';
import MiniCourseImg02 from '../../assets/images/mockups/home-courses/man-in-black-suit-jacket-standing-and-smiling-3777557.png';
import MiniCourseImg03 from '../../assets/images/mockups/home-courses/person-playing-chess-1040157.png';
import MiniCourseImg04 from '../../assets/images/mockups/home-courses/woman-in-black-coat-holding-black-smartphone-3755824.png';

import FindOut from './FindOut';

const GreenCheckbox = withStyles({
  root: {
    color: '#ffffff',
    '&$checked': {
      color: '#ffffff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const HomeTracks = () => {
  document.title = 'Trilhas de Ensino | Elevagro';

  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

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

  const responsive = {
    0: { items: 3 },
    1100: { items: 4 },
    1530: { items: 4 },
  };

  const responsiveSmall = {
    0: { items: 3 },
    1250: { items: 4 },
    1530: { items: 4 },
  };

  const responsiveCourse = {
    0: { items: 4 },
    1250: { items: 5 },
    1530: { items: 5 },
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronLeft size={30} />
      </CarouselButton>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <CarouselButton style={{ opacity: isDisabled ? '0.5' : 1 }}>
        <FiChevronRight size={30} />
      </CarouselButton>
    );
  };

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <Hero>
        <div className="content-wrapper">
          <div className="page-title">
            <h1>
              <img src={CoursesIcon} alt="TRILHAS DE ENSINO" />
              CURSOS
            </h1>
            <h2>Capacitação para o NOVO agronegócio</h2>
            <p>
              Aqui você aprende uma nova habilidade ou área com profissionais
              referência de mercado.
            </p>
          </div>

          <div className="details-container">
            <img src={HeroDetail} className="detail" alt="Hero" />
            <div className="triangle" />
            <div className="filter" />
          </div>
        </div>
      </Hero>

      <SearchSection className="row">
        <section className="col-7">
          <form className="search-container">
            <button type="button">
              <img src={FilterIcon} alt="Filtrar" />
              CATEGORIA
              <img src={BitwiseImg} alt="" />
            </button>
            <input type="text" placeholder="Localizar uma trilha" />
            <button type="submit">
              <BiSearchAlt size={20} />
            </button>
          </form>

          <div className="sugestions">
            <p>Sugestões:</p>
            <button type="button">SOJA</button>
            <button type="button">DOENÇAS</button>
            <button type="button">SEMENTES</button>
            <button type="button">NUTRIÇÃO</button>
            <button type="button">DANINHAS</button>
            <button type="button">SOLOS</button>
            <button type="button">GESTÃO</button>
            <button type="button">FINANÇAS</button>
          </div>
        </section>

        <aside className="track-card">
          <div>
            <div className="text">
              <h4>
                Trilhas
                <br />
                de Ensino
              </h4>
              <Link to="/tracks">Acesse</Link>
              <img src={CardDetail02} alt="" />
              <div className="triangle" />
              <div className="filter" />
            </div>
          </div>
        </aside>

        <aside className="mini-course">
          <div>
            <div className="text">
              <h4>
                Mini
                <br />
                Cursos
              </h4>
              <Link to="/tracks">Acesse</Link>
              <img src={CardDetail02} alt="" />
              <div className="triangle" />
              <div className="filter" />
            </div>
          </div>
        </aside>
      </SearchSection>

      <CarouselContainer>
        <header>
          <h3>LANÇAMENTOS</h3>
          <div className="border-bottom" />
          <Link to="/">VER TODOS</Link>
        </header>

        <AliceCarousel
          responsive={responsiveCourse}
          mouseTracking
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          paddingLeft={20}
        >
          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>
        </AliceCarousel>
      </CarouselContainer>

      <MiniCourseSection>
        <div className="content-wrapper">
          <section>
            <header>
              <div>
                <h4>MINI CURSOS</h4>
                <p>Exclusivos para Premium</p>
              </div>
              <Link to="/">VER TODOS</Link>
              <img src={CardDetailMini} alt="" />
            </header>

            <div>
              <Link to="/" className="mini-course">
                <img src={MiniCourseImg} alt="" />
                Métodos ágeis aplicado no agronegócio
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg02} alt="" />
                Academia do RTV
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg03} alt="" />
                Caminhos do novo agro
                <FiChevronRight size={30} />
              </Link>

              <Link to="/" className="mini-course">
                <img src={MiniCourseImg04} alt="" />
                Consultoria agrícola: criando mercados
                <FiChevronRight size={30} />
              </Link>
            </div>
          </section>

          <aside>
            <div>
              <h2>PROMOÇÃO</h2>
              <p>Aprenda novas habilidades com cursos a partir de R$56,00</p>
              <p>Área para banner</p>
            </div>
            <div className="filter" />
          </aside>
        </div>
      </MiniCourseSection>

      <CarouselContainer background>
        <header>
          <h3>Cursos em alta</h3>
          <div className="border-bottom" />
          <Link to="/">VER TODOS</Link>
        </header>

        <AliceCarousel
          responsive={responsiveCourse}
          mouseTracking
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          paddingLeft={20}
        >
          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>

          <CourseCard>
            <img src={HighlightCardImg} alt="" />
            <section>
              <h4>Nutrição de Plantas</h4>
              <p>
                Tecnologia de aplicação de herbicidas sistêmicos: Aplicação
                eficiente e segura
              </p>
              <div>
                <div>
                  <span>
                    De
                    <del> R$: 265,00</del>
                  </span>
                  <h5>
                    R$:
                    <> </>
                    <strong>238</strong>
                    ,00
                  </h5>
                  <p>10x R$ 23,00</p>
                </div>

                <button type="button">
                  <img src={CartIcon} alt="" />
                </button>
              </div>
            </section>
            <div>
              <Link to="/">Saiba mais</Link>
            </div>
          </CourseCard>
        </AliceCarousel>
      </CarouselContainer>

      <HighlightsContainer>
        <div className="content-wrapper">
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
            <FindOut to="/">Saiba mais</FindOut>
            <span>Associado Premium tem 30% de desconto.</span>
          </section>

          <aside>
            <h5>Você vai aprender sobre:</h5>
            <AliceCarousel
              responsive={responsiveSmall}
              mouseTracking
              disableDotsControls
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}
            >
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
            </AliceCarousel>
          </aside>

          <div className="filters-container">
            <div className="triangle" />
            <div className="filter" />
          </div>
        </div>

        <div className="filter-white" />
        <img src={HighlightsBackground} alt="" />
      </HighlightsContainer>

      <ThemesContainer>
        <div className="content-wrapper">
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
            <FindOut>Saiba mais</FindOut>
            <div className="filter" />
            <img src={PremiumCardImg} alt="" />
          </aside>
        </div>
      </ThemesContainer>

      <CarouselContainer>
        <header>
          <h3>CARREIRAS NO AGRO</h3>
          <div className="border-bottom" />
          <Link to="/">VER TODAS</Link>
        </header>

        <h4>
          Aprenda as especificidades de cada área e prepare-se para atuar e
          crescer na sua carreira.
        </h4>

        <AliceCarousel
          responsive={responsive}
          mouseTracking
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
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

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
            </div>
          </CareerCard>

          <CareerCard>
            <img src={CareerMockupImg04} alt="" />
            <div>
              <div>
                <h4>CAPACITAÇÃO TÉCNICA PARA REVENDAS</h4>
                <p>Chega de perder dinheiro! Domine a gestão do seu negócio.</p>
              </div>

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
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

              <FindOut>Saiba mais</FindOut>
            </div>
          </CareerCard>
        </AliceCarousel>
      </CarouselContainer>

      {viewerStatus === 'visit' && (
        <SignupCard>
          <div className="content-wrapper">
            <div className="card">
              <p>
                Inscreva-se gratuitamente na Elevagro e seja avisado(a) sobre
                novas trilhas de ensino.
              </p>
              <form>
                <div>
                  <label htmlFor="name">Nome completo</label>
                  <input type="text" placeholder="Nome completo" />
                </div>

                <div>
                  <label htmlFor="email">E-mail para acesso</label>
                  <input type="text" placeholder="E-mail para acesso" />
                </div>

                <div>
                  <label htmlFor="phone">Celular</label>
                  <input type="text" placeholder="(XX) 99999-9999" />
                </div>

                <section>
                  <button type="submit">Inscreva-se</button>
                  <div>
                    <FormControlLabel
                      // eslint-disable-next-line prettier/prettier
                      control={(
                        <GreenCheckbox
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                        />
                        // eslint-disable-next-line prettier/prettier
                    )}
                      // eslint-disable-next-line prettier/prettier
                      label=""
                    />
                    <label htmlFor="terms">
                      <>
                        Aceito os
                        <> </>
                        <Link to="/">termos de uso</Link>
                        <> </>
                        Elevagro.
                      </>
                    </label>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </SignupCard>
      )}

      {viewerStatus === 'free' && (
        <BecomePremiumCard>
          <div className="content-wrapper">
            <div className="card">
              <section>
                <h2>SEJA PREMIUM</h2>
                <p>
                  E acesse TODos OS MATERIAIS DA
                  <br />
                  PLATAFORMA DE CONTEÚDOS e ganhe vantagens
                </p>

                <Link to="/plans">QUERO SER PREMIUM</Link>
              </section>

              <div className="filter-black" />
            </div>
          </div>
        </BecomePremiumCard>
      )}

      <CarouselContainer>
        <header>
          <h3>TRILHAS 360º</h3>
          <div className="border-bottom" />
          <Link to="/">VER TODAS</Link>
        </header>

        <h4>Visão completa, panorâmica sobre o tema que você quer aprender.</h4>

        <AliceCarousel
          responsive={responsive}
          mouseTracking
          disableDotsControls
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        >
          <LaunchCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>FERRUGEM 360º</h4>
                <p>Visão completa para o domínio da soja.</p>
              </div>

              <FindOut to="/">Saiba mais</FindOut>
            </div>
            <span className="filter" />
            <img src={TrackImg} alt="" />
          </LaunchCard>

          <LaunchCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>HORTALIÇAS 360º</h4>
                <p>Chega de perder dinheiro! Domine a gestão do seu negócio.</p>
              </div>

              <FindOut to="/">Saiba mais</FindOut>
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

              <FindOut to="/">Saiba mais</FindOut>
            </div>
            <span className="filter" />
            <img src={TrackImg05} alt="" />
          </LaunchCard>

          <LaunchCard>
            <div>
              <div>
                <span>TRILHA</span>
                <h4>PLANTABILIDADE 360º </h4>
                <p>Chega de perder dinheiro! Domine a gestão do seu negócio.</p>
              </div>

              <FindOut to="/">Saiba mais</FindOut>
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

              <FindOut to="/">Saiba mais</FindOut>
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

              <FindOut to="/">Saiba mais</FindOut>
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

              <FindOut to="/">Saiba mais</FindOut>
            </div>
            <span className="filter" />
            <img src={TrackImg03} alt="" />
          </LaunchCard>
        </AliceCarousel>
      </CarouselContainer>

      <HighlightsContainer extraMargin>
        <div className="content-wrapper">
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
            <FindOut to="/">Saiba mais</FindOut>
            <span>Associado Premium tem 30% de desconto.</span>
          </section>

          <aside>
            <h5>Você vai aprender sobre:</h5>
            <AliceCarousel
              responsive={responsiveSmall}
              mouseTracking
              disableDotsControls
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}
            >
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
            </AliceCarousel>
          </aside>

          <div className="filters-container">
            <div className="triangle" />
            <div className="filter" />
          </div>
        </div>

        <div className="filter-black" />
        <img src={HighlightsBackground02} alt="" />
      </HighlightsContainer>

      <ExtrasSection>
        <div className="content-wrapper">
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
        </div>
      </ExtrasSection>

      <Footer />
    </Container>
  );
};

export default HomeTracks;
