import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

// MaterialUI Checkbox
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container, FilterField } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#BFBFBF',
    width: 35,
    height: 35,
    '&$checked': {
      color: '#009688',
    },
  },
  checkedIcon: {
    '&:hover': {
      backgroundColor: '#106ba3',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const RefineSearch = ({ refineParams }) => {
  const [activeFilters, setActiveFilters] = useState({});

  const getResults = params => {
    refineParams(params);
  };

  /* ------------------- Area ------------------- */
  const inicialAreaState = {
    checkedAll: true,
    checkedDeseases: false,
    checkedPlages: false,
    checkedTecnology: false,
    checkedNematodes: false,
    checkedEntomology: false,
    checkedOther: false,
  };
  const [areasFilterClosed, setAreasFilterClosed] = useState(false);
  const [areasFilterFull, setAreasFilterFull] = useState(false);
  const [areaState, setAreaState] = useState(inicialAreaState);

  const handleAreaChange = event => {
    if (event.target.name !== 'checkedAll') {
      const newState = { ...areaState, checkedAll: false };
      setAreaState({ ...newState, [event.target.name]: event.target.checked });
    } else {
      setAreaState(inicialAreaState);
    }

    setAreasFilterFull(true);
  };

  /* ------------------- Cultura ------------------- */
  const inicialCultureState = {
    checkedAll: true,
    checkedMilho: false,
    checkedSoja: false,
    checkedAlgodao: false,
    checkedFeijao: false,
    checkedPlantasDaninhas: false,
    checkedOther: false,
  };
  const [culturesClosed, setCulturesClosed] = useState(false);
  const [culturesFull, setCulturesFull] = useState(false);
  const [cultureState, setCultureState] = useState(inicialCultureState);

  const handleCultureChange = event => {
    if (event.target.name !== 'checkedAll') {
      const newState = { ...cultureState, checkedAll: false };

      setCultureState({
        ...newState,
        [event.target.name]: event.target.checked,
      });

      getResults({
        ...newState,
        [event.target.name]: event.target.checked,
      });
    } else {
      setCultureState(inicialCultureState);

      getResults(inicialCultureState);
    }

    setCulturesFull(true);
  };

  /* ------------------- Categoria do conteúdo ------------------- */
  const contentInicialState = {
    checkedAll: true,
    checkedLectures: false,
    checkedTechnical: false,
    checkedVideos: false,
    checkedPictures: false,
    checkedPodcasts: false,
    checkedOther: false,
  };
  const [contentClosed, setContentClosed] = useState(false);
  const [contentFull, setContentFull] = useState(false);
  const [contentState, setContentState] = useState(contentInicialState);

  const handleContentChange = event => {
    if (event.target.name !== 'checkedAll') {
      const newState = { ...contentState, checkedAll: false };

      setContentState({
        ...newState,
        [event.target.name]: event.target.checked,
      });

      getResults({
        ...newState,
        [event.target.name]: event.target.checked,
      });
    } else {
      setContentState(contentInicialState);

      getResults(contentInicialState);
    }

    setContentFull(true);
  };

  /* ------------------- Idioma ------------------- */
  const inicialLanguageState = {
    checkedPortuguese: true,
    checkedEnglish: false,
    checkedSpanish: false,
  };
  const [languageClosed, setLanguageClosed] = useState(false);
  const [languageState, setLanguageState] = useState(inicialLanguageState);

  const handleLanguageChange = event => {
    if (event.target.name !== 'checkedAll') {
      const newState = { ...languageState };
      setLanguageState({
        ...newState,
        [event.target.name]: event.target.checked,
      });
      setLanguageState({ ...newState, checkedTodas: false });
    } else {
      setLanguageState(inicialLanguageState);
    }
  };

  return (
    <Container>
      <h3>Refinar busca</h3>

      {/* Campo de área */}
      <FilterField
        fullHeight={areasFilterFull}
        filterOpened={areasFilterClosed}
      >
        <header
          className="field__header"
          role="button"
          onClick={() => setAreasFilterClosed(!areasFilterClosed)}
          tabIndex={0}
        >
          <h4>Área</h4>

          <div>
            {areasFilterClosed && <FiChevronDown size="3rem" />}
            {!areasFilterClosed && <FiChevronUp size="3rem" />}
          </div>
        </header>
        <main className="field__content">
          <ul>
            <li>
              <GreenCheckbox
                checked={areaState.checkedAll}
                onChange={handleAreaChange}
                name="checkedAll"
              />
              <span>Todas</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedDeseases}
                onChange={handleAreaChange}
                name="checkedDeseases"
              />
              <span>Doenças</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedPlages}
                onChange={handleAreaChange}
                name="checkedPlages"
              />
              <span>Pragas</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedTecnology}
                onChange={handleAreaChange}
                name="checkedTecnology"
              />
              <span>Tecnologia e Aplicação</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedNematodes}
                onChange={handleAreaChange}
                name="checkedNematodes"
              />
              <span>Nematoides</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedEntomology}
                onChange={handleAreaChange}
                name="checkedEntomology"
              />
              <span>Entomologia</span>
            </li>

            <li>
              <GreenCheckbox
                checked={areaState.checkedOther}
                onChange={handleAreaChange}
                name="checkedOther"
              />
              <span>Outros...</span>
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
      <FilterField fullHeight={culturesFull} filterOpened={culturesClosed}>
        <header
          className="field__header"
          role="button"
          onClick={() => setCulturesClosed(!culturesClosed)}
          tabIndex={0}
        >
          <h4>Cultura</h4>

          <div>
            {culturesClosed && <FiChevronDown size="3rem" />}
            {!culturesClosed && <FiChevronUp size="3rem" />}
          </div>
        </header>
        <main className="field__content">
          <ul>
            <li>
              <GreenCheckbox
                checked={cultureState.checkedAll}
                onChange={handleCultureChange}
                name="checkedAll"
              />
              <span>Todas</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedMilho}
                onChange={handleCultureChange}
                name="checkedMilho"
              />
              <span>Milho</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedSoja}
                onChange={handleCultureChange}
                name="checkedSoja"
              />
              <span>Soja</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedAlgodao}
                onChange={handleCultureChange}
                name="checkedAlgodao"
              />
              <span>Algodão</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedFeijao}
                onChange={handleCultureChange}
                name="checkedFeijao"
              />
              <span>Feijão</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedPlantasDaninhas}
                onChange={handleCultureChange}
                name="checkedPlantasDaninhas"
              />
              <span>Plantas Daninhas</span>
            </li>

            <li>
              <GreenCheckbox
                checked={cultureState.checkedOther}
                onChange={handleCultureChange}
                name="checkedOther"
              />
              <span>Outros</span>
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
            {!culturesFull && <> mais</>}
            {culturesFull && <> menos</>}
          </h5>

          {!culturesFull && <FiChevronDown size="2.5rem" />}
          {culturesFull && <FiChevronUp size="2.5rem" />}
        </button>
      </FilterField>

      {/* Campo de Categorias de Conteúdo */}
      <FilterField fullHeight={contentFull} filterOpened={contentClosed}>
        <header
          className="field__header"
          role="button"
          onClick={() => setContentClosed(!contentClosed)}
          tabIndex={0}
        >
          <h4>Categoria do conteúdo</h4>

          <div>
            {contentClosed && <FiChevronDown size="3rem" />}
            {!contentClosed && <FiChevronUp size="3rem" />}
          </div>
        </header>
        <main className="field__content">
          <ul>
            <li>
              <GreenCheckbox
                checked={contentState.checkedAll}
                onChange={handleContentChange}
                name="checkedAll"
              />
              <span>Todas</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedLectures}
                onChange={handleContentChange}
                name="checkedLectures"
              />
              <span>Palestras Online</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedTechnical}
                onChange={handleContentChange}
                name="checkedTechnical"
              />
              <span>Materiais Técnicos</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedVideos}
                onChange={handleContentChange}
                name="checkedVideos"
              />
              <span>Vídeos</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedPictures}
                onChange={handleContentChange}
                name="checkedPictures"
              />
              <span>Fotos</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedPodcasts}
                onChange={handleContentChange}
                name="checkedPodcasts"
              />
              <span>Podcasts</span>
            </li>

            <li>
              <GreenCheckbox
                checked={contentState.checkedOther}
                onChange={handleContentChange}
                name="checkedOther"
              />
              <span>Outros...</span>
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
      <FilterField fullHeight filterOpened={languageClosed}>
        <header
          className="field__header"
          role="button"
          onClick={() => setLanguageClosed(!languageClosed)}
          tabIndex={0}
        >
          <h4>Idioma</h4>

          <div>
            {languageClosed && <FiChevronDown size="3rem" />}
            {!languageClosed && <FiChevronUp size="3rem" />}
          </div>
        </header>
        <main className="field__content">
          <ul>
            <li>
              <GreenCheckbox
                checked={languageState.checkedPortuguese}
                onChange={handleLanguageChange}
                name="checkedPortuguese"
              />
              <span>Português</span>
            </li>

            <li>
              <GreenCheckbox
                checked={languageState.checkedSpanish}
                onChange={handleLanguageChange}
                name="checkedSpanish"
              />
              <span>Espanhol</span>
            </li>

            <li>
              <GreenCheckbox
                checked={languageState.checkedEnglish}
                onChange={handleLanguageChange}
                name="checkedEnglish"
              />
              <span>Inglês</span>
            </li>
          </ul>
        </main>
      </FilterField>
    </Container>
  );
};

export default RefineSearch;
