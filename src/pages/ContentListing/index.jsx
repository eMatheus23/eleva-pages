import React, { useState, useCallback } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

// MaterialUI Checkbox
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Componentes
import Header from '../../components/headers/MainHeader';
import SignupCard from './components/SignupCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Imagens
import heroBackground from '../../assets/images/pages/listing/bgs.png';
import CardImg from '../../assets/images/pages/listing/card-img.png';

// Estilização
import {
  ListingHero,
  Content,
  SmallerContentWrapper,
  FilterContainer,
  FilterField,
} from './styles';
import { Container } from '../../styles/common/HomeStyledComponents';

const GreenCheckbox = withStyles({
  root: {
    color: '#BFBFBF',
    width: 35,
    height: 35,
    '&$checked': {
      color: '#009688',
    },
  },
  icon: {
    width: 25,
    height: 25,
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
  },
  checkedIcon: {
    '&:hover': {
      backgroundColor: '#106ba3',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const ContentListing = () => {
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);

  /* ---------------------- Estados dos filtros ---------------------- */
  // Area
  const [areasFilterClosed, setAreasFilterClosed] = useState(false);
  const [areasFilterFull, setAreasFilterFull] = useState(false);

  // Cultura
  const [culturesClosed, setCulturesClosed] = useState(false);
  const [culturesFull, setCulturesFull] = useState(false);

  // Categoria do conteúdo
  const [contentClosed, setContentClosed] = useState(false);
  const [contentFull, setContentFull] = useState(false);

  // Idioma
  const [languageClosed, setLanguageClosed] = useState(true);
  const [languageFull, setLanguageFull] = useState(false);

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

  const repeat = 36;

  const [state, setState] = useState({
    checkedTodas: true,
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

      <ListingHero backgound={heroBackground}>
        <SmallerContentWrapper>
          <h1>Conteúdos sobre X Y Z, mais recentes…</h1>
        </SmallerContentWrapper>
      </ListingHero>

      <Content>
        <SmallerContentWrapper>
          <main className="content__container">
            {[...Array(repeat)].map((card, index) => (
              <div className="content__card" key={index}>
                <img src={CardImg} alt="" className="card__img" />
                <div className="card__text">
                  <h5>Nutrição de Plantas</h5>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                  </p>
                </div>
              </div>
            ))}
          </main>

          <aside>
            <SignupCard viewerStatus={viewerStatus} />

            <FilterContainer>
              <h3>Refinar busca</h3>

              {/* Campo de área */}
              <FilterField
                fullHeight={areasFilterFull}
                filterOpened={areasFilterClosed}
              >
                <header className="field__header">
                  <h4>Área</h4>

                  <div
                    className="collapse__button"
                    role="button"
                    onClick={() => setAreasFilterClosed(!areasFilterClosed)}
                    tabIndex={0}
                  >
                    {areasFilterClosed && <FiChevronDown size="3rem" />}
                    {!areasFilterClosed && <FiChevronUp size="3rem" />}
                  </div>
                </header>
                <main className="field__content">
                  <ul>
                    <li>
                      <GreenCheckbox
                        checked={state.checkedTodas}
                        onChange={handleChange}
                        name="checkedTodas"
                      />
                      <span>Todas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedDoencas}
                        onChange={handleChange}
                        name="checkedDoencas"
                      />
                      <span>Doenças</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedPragas}
                        onChange={handleChange}
                        name="checkedPragas"
                      />
                      <span>Pragas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedTecnology}
                        onChange={handleChange}
                        name="checkedTecnology"
                      />
                      <span>Tecnologia e Aplicação</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedNematoides}
                        onChange={handleChange}
                        name="checkedNematoides"
                      />
                      <span>Nematoides</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedEtc}
                        onChange={handleChange}
                        name="checkedEtc"
                      />
                      <span>Etc</span>
                    </li>
                  </ul>

                  <div className="field__linear-gradient" />
                </main>

                <button
                  type="button"
                  className="field__show-button"
                  onClick={() => setAreasFilterFull(!areasFilterFull)}
                >
                  <h5>
                    Mostrar
                    {!areasFilterFull && <> mais</>}
                    {areasFilterFull && <> menos</>}
                  </h5>

                  {!areasFilterFull && <FiChevronDown size="2.5rem" />}
                  {areasFilterFull && <FiChevronUp size="2.5rem" />}
                </button>
              </FilterField>

              {/* Campo de Cultura */}
              <FilterField
                fullHeight={culturesFull}
                filterOpened={culturesClosed}
              >
                <header className="field__header">
                  <h4>Cultura</h4>

                  <div
                    className="collapse__button"
                    role="button"
                    onClick={() => setCulturesClosed(!culturesClosed)}
                    tabIndex={0}
                  >
                    {culturesClosed && <FiChevronDown size="3rem" />}
                    {!culturesClosed && <FiChevronUp size="3rem" />}
                  </div>
                </header>
                <main className="field__content">
                  <ul>
                    <li>
                      <GreenCheckbox
                        checked={state.checkedTodas}
                        onChange={handleChange}
                        name="checkedTodas"
                      />
                      <span>Todas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedDoencas}
                        onChange={handleChange}
                        name="checkedDoencas"
                      />
                      <span>Doenças</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedPragas}
                        onChange={handleChange}
                        name="checkedPragas"
                      />
                      <span>Pragas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedTecnology}
                        onChange={handleChange}
                        name="checkedTecnology"
                      />
                      <span>Tecnologia e Aplicação</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedNematoides}
                        onChange={handleChange}
                        name="checkedNematoides"
                      />
                      <span>Nematoides</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedEtc}
                        onChange={handleChange}
                        name="checkedEtc"
                      />
                      <span>Etc</span>
                    </li>
                  </ul>

                  <div className="field__linear-gradient" />
                </main>

                <button
                  type="button"
                  className="field__show-button"
                  onClick={() => setCulturesFull(!culturesFull)}
                >
                  <h5>
                    Mostrar
                    {!areasFilterFull && <> mais</>}
                    {areasFilterFull && <> menos</>}
                  </h5>

                  {!areasFilterFull && <FiChevronDown size="2.5rem" />}
                  {areasFilterFull && <FiChevronUp size="2.5rem" />}
                </button>
              </FilterField>

              {/* Campo de Categorias de Conteúdo */}
              <FilterField
                fullHeight={contentFull}
                filterOpened={contentClosed}
              >
                <header className="field__header">
                  <h4>Categoria do conteúdo</h4>

                  <div
                    className="collapse__button"
                    role="button"
                    onClick={() => setContentClosed(!contentClosed)}
                    tabIndex={0}
                  >
                    {contentClosed && <FiChevronDown size="3rem" />}
                    {!contentClosed && <FiChevronUp size="3rem" />}
                  </div>
                </header>
                <main className="field__content">
                  <ul>
                    <li>
                      <GreenCheckbox
                        checked={state.checkedTodas}
                        onChange={handleChange}
                        name="checkedTodas"
                      />
                      <span>Todas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedDoencas}
                        onChange={handleChange}
                        name="checkedDoencas"
                      />
                      <span>Doenças</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedPragas}
                        onChange={handleChange}
                        name="checkedPragas"
                      />
                      <span>Pragas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedTecnology}
                        onChange={handleChange}
                        name="checkedTecnology"
                      />
                      <span>Tecnologia e Aplicação</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedNematoides}
                        onChange={handleChange}
                        name="checkedNematoides"
                      />
                      <span>Nematoides</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedEtc}
                        onChange={handleChange}
                        name="checkedEtc"
                      />
                      <span>Etc</span>
                    </li>
                  </ul>

                  <div className="field__linear-gradient" />
                </main>

                <button
                  type="button"
                  className="field__show-button"
                  onClick={() => setContentFull(!contentFull)}
                >
                  <h5>
                    Mostrar
                    {!contentFull && <> mais</>}
                    {contentFull && <> menos</>}
                  </h5>

                  {!contentFull && <FiChevronDown size="2.5rem" />}
                  {contentFull && <FiChevronUp size="2.5rem" />}
                </button>
              </FilterField>

              {/* Campo de Idiomas */}
              <FilterField
                fullHeight={languageFull}
                filterOpened={languageClosed}
              >
                <header className="field__header">
                  <h4>Idioma</h4>

                  <div
                    className="collapse__button"
                    role="button"
                    onClick={() => setLanguageClosed(!languageClosed)}
                    tabIndex={0}
                  >
                    {languageClosed && <FiChevronDown size="3rem" />}
                    {!languageClosed && <FiChevronUp size="3rem" />}
                  </div>
                </header>
                <main className="field__content">
                  <ul>
                    <li>
                      <GreenCheckbox
                        checked={state.checkedTodas}
                        onChange={handleChange}
                        name="checkedTodas"
                      />
                      <span>Português</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedDoencas}
                        onChange={handleChange}
                        name="checkedDoencas"
                      />
                      <span>Espanhol</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedPragas}
                        onChange={handleChange}
                        name="checkedPragas"
                      />
                      <span>Inglês</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedTecnology}
                        onChange={handleChange}
                        name="checkedTecnology"
                      />
                      <span>Francês</span>
                    </li>
                  </ul>

                  <div className="field__linear-gradient" />
                </main>

                <button
                  type="button"
                  className="field__show-button"
                  onClick={() => setLanguageFull(!languageFull)}
                >
                  <h5>
                    Mostrar
                    {!languageFull && <> mais</>}
                    {languageFull && <> menos</>}
                  </h5>

                  {!languageFull && <FiChevronDown size="2.5rem" />}
                  {languageFull && <FiChevronUp size="2.5rem" />}
                </button>
              </FilterField>
            </FilterContainer>
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default ContentListing;
