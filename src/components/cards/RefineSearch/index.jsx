import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import PropTypes from 'prop-types';
import axios from 'axios';

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
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const RefineSearch = ({ refineSearch }) => {
  /* ------------------- Area ------------------- */
  const [areasFilterClosed, setAreasFilterClosed] = useState(false);
  const [areasFilterFull, setAreasFilterFull] = useState(false);

  /* ------------------- Cultura ------------------- */
  const [culturesClosed, setCulturesClosed] = useState(false);
  const [culturesFull, setCulturesFull] = useState(false);

  /* ------------------- Categoria do conteúdo ------------------- */
  const [contentClosed, setContentClosed] = useState(false);
  const [contentFull, setContentFull] = useState(false);

  /* ------------------- Idioma ------------------- */
  const [languageClosed, setLanguageClosed] = useState(true);

  const populateState = useCallback(data => {
    const newState = {
      area: {
        area_all: true,
      },
      culture: {
        culture_all: true,
      },
      content: {
        content_all: true,
      },
      language: {
        language_portuguese: true,
        language_english: false,
        language_spanish: false,
      },
    };

    data.areas.map(item => (newState.area[`area_${item.id}`] = false));
    data.cultures.map(item => (newState.culture[`culture_${item.id}`] = false));
    data.content.map(item => (newState.content[`content_${item.id}`] = false));

    return newState;
  }, []);

  const [filtersData, setFiltersData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(null);

  useEffect(() => {
    axios.get('./mockup-data/filters.json').then(response => {
      const initialState = populateState(response.data);

      setCheckboxState(initialState);
      setFiltersData(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendNewApiRequest = filters => {
    const area = { ...filters.area, area_all: false };
    const culture = { ...filters.culture, culture_all: false };
    const contentField = { ...filters.content, content_all: false };
    const language = { ...filters.content, language_portuguese: false };

    // Remove as opções padrões do objeto
    const apiParams = { area, culture, contentField, language };

    refineSearch(apiParams);
  };

  const handleChange = event => {
    // Desetruturação do evento, pegando o name e checked
    const { name, checked } = event.target;

    // Pega o campo do filtro. (Áreas, Conteúdos, etc...)
    const [field] = name.split('_');

    // Abre a visualização do campo correspondente
    switch (field) {
      case 'area':
        setAreasFilterFull(true);
        break;

      case 'culture':
        setCulturesFull(true);
        break;

      case 'content':
        setContentFull(true);
        break;

      default:
        // eslint-disable-next-line no-console
        console.log(`Campo ${field} não encontrado.`);
    }

    // Constrói o estado padrão dos filtros
    const initialState = populateState(filtersData);

    let fieldState = {};

    // Se o checkbox clicado for o "Todos", reseta o checkboxState da área correspondente
    if (name === `${field}_all`) {
      fieldState = {
        ...initialState[field],
      };
    } else {
      // Se não for o "Todos", muda o estado do campo do filtro
      fieldState = {
        ...checkboxState[field],
        [`${field}_all`]: false,
        [name]: checked,
      };
    }

    // Checa se nenhum item está selecionado
    const selectedItems = Object.values(fieldState).filter(value => {
      return value === true;
    });

    // Se nenhum item estiver selecionado, reseta os filtros
    if (selectedItems.length === 0) {
      fieldState = {
        ...initialState[field],
      };
    }

    const newState = { ...checkboxState, [field]: fieldState };

    sendNewApiRequest(newState);

    return setCheckboxState(newState);
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
          {filtersData && (
            <ul>
              <li>
                <GreenCheckbox
                  checked={checkboxState ? checkboxState.area.area_all : ''}
                  onChange={handleChange}
                  name="area_all"
                />
                <span>{`Todas (${filtersData.areas_count})`}</span>
              </li>

              {filtersData.areas.map(area => (
                <li key={area.id}>
                  <GreenCheckbox
                    checked={checkboxState.area[`area_${area.id}`]}
                    onChange={handleChange}
                    name={`area_${area.id}`}
                  />
                  <span>{`${area.category} (${area.category_count})`}</span>
                </li>
              ))}
            </ul>
          )}

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
          {filtersData && (
            <ul>
              <li>
                <GreenCheckbox
                  checked={checkboxState.culture.culture_all}
                  onChange={handleChange}
                  name="culture_all"
                />
                <span>{`Todas (${filtersData.cultures_count})`}</span>
              </li>

              {filtersData.cultures.map(culture => (
                <li key={culture.id}>
                  <GreenCheckbox
                    checked={checkboxState.culture[`culture_${culture.id}`]}
                    onChange={handleChange}
                    name={`culture_${culture.id}`}
                  />
                  <span>{`${culture.category} (${culture.category_count})`}</span>
                </li>
              ))}
            </ul>
          )}

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
          {filtersData && (
            <ul>
              <li>
                <GreenCheckbox
                  checked={checkboxState.content.content_all}
                  onChange={handleChange}
                  name="content_all"
                />
                <span>{`Todas (${filtersData.content_count})`}</span>
              </li>

              {filtersData.content.map(content => (
                <li key={content.id}>
                  <GreenCheckbox
                    checked={checkboxState.content[`content_${content.id}`]}
                    onChange={handleChange}
                    name={`content_${content.id}`}
                  />
                  <span>{`${content.category} (${content.category_count})`}</span>
                </li>
              ))}
            </ul>
          )}

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
          {filtersData && (
            <ul>
              <li>
                <GreenCheckbox
                  checked={checkboxState.language.language_portuguese}
                  onChange={handleChange}
                  name="language_portuguese"
                />
                <span>{`Português (${filtersData.content_count})`}</span>
              </li>

              <li>
                <GreenCheckbox
                  checked={checkboxState.language.language_spanish}
                  onChange={handleChange}
                  name="language_spanish"
                />
                <span>{`Espanhol (${filtersData.content_count})`}</span>
              </li>

              <li>
                <GreenCheckbox
                  checked={checkboxState.language.language_english}
                  onChange={handleChange}
                  name="language_english"
                />
                <span>{`Espanhol (${filtersData.content_count})`}</span>
              </li>
            </ul>
          )}
        </main>
      </FilterField>
    </Container>
  );
};

RefineSearch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  refineSearch: PropTypes.func.isRequired,
};

export default RefineSearch;
