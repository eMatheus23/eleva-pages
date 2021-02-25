import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// MaterialUI Checkbox
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import filterIcon from '../../assets/icons/filter-icon.svg';
import bitwiseImg from '../../assets/icons/bitwise.svg';

import { Container, FilterContainer } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#BFBFBF',
    width: 20,
    height: 20,
    '&$checked': {
      color: '#009688',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
  root: {
    color: '#BFBFBF',
    width: 20,
    height: 20,
    '&$checked': {
      color: '#009688',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const SearchFilter = ({ refineSearch, closeFilter }) => {
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
        language_all: true,
      },
      contentType: {
        contentType_all: true,
        contentType_courses: false,
        contentType_otherContent: false,
      },
    };

    data.areas.map(item => (newState.area[`area_${item.id}`] = false));
    data.cultures.map(item => (newState.culture[`culture_${item.id}`] = false));
    data.content.map(item => (newState.content[`content_${item.id}`] = true));
    data.languages.map(
      item => (newState.language[`language_${item.id}`] = true),
    );

    return newState;
  }, []);

  const [filtersData, setFiltersData] = useState(null);
  const [checkboxState, setCheckboxState] = useState(null);

  useEffect(() => {
    axios.get('./mockup-data/filters-full.json').then(response => {
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
    const language = { ...filters.content, language_all: false };

    // Remove as opções padrões do objeto
    const apiParams = { area, culture, contentField, language };

    console.log(apiParams);
  };

  const handleChange = event => {
    // Desetruturação do evento, pegando o name e checked
    const { name, checked } = event.target;

    // Pega o campo do filtro. (Áreas, Conteúdos, etc...)
    const [field] = name.split('_');

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

    // Checa quantos itens existem
    const totalItems = Object.values(fieldState).filter(() => {
      return true;
    });

    // Checa quantos itens estão selecionados
    const selectedItems = Object.values(fieldState).filter(value => {
      return value === true;
    });

    // Se nenhum item estiver selecionado, reseta os filtros
    if (selectedItems.length === 0) {
      fieldState = {
        ...initialState[field],
      };
    }

    // Se todos os itens estiveres selecionados, reseta os filtros
    if (selectedItems.length === totalItems.length - 1) {
      fieldState = {
        ...initialState[field],
      };
    }

    const newState = { ...checkboxState, [field]: fieldState };

    return setCheckboxState(newState);
  };

  return (
    <FilterContainer>
      <div className="filter__card">
        <nav className="nav__tabs">
          <button type="button" className="tab active">
            <h4>Agricultura</h4>
          </button>

          <button type="button" className="tab">
            <h4>Pecuária</h4>
          </button>

          <button
            type="button"
            className="close-filter__button"
            onClick={() => closeFilter()}
          >
            X
          </button>
        </nav>

        <header className="card__header">
          {filtersData && (
            <ul>
              <li>
                <GreenRadio
                  checked={checkboxState.contentType.contentType_all}
                  onChange={handleChange}
                  name="contentType_all"
                />
                <label htmlFor="all">TUDO</label>
              </li>

              <li>
                <GreenRadio
                  checked={checkboxState.contentType.contentType_courses}
                  onChange={handleChange}
                  name="contentType_courses"
                />
                <label htmlFor="courses">CURSOS</label>
              </li>

              <li>
                <GreenRadio
                  checked={checkboxState.contentType.contentType_otherContent}
                  onChange={handleChange}
                  name="contentType_otherContent"
                />
                <label htmlFor="content">CONTEÚDOS</label>
              </li>
            </ul>
          )}

          <button
            type="button"
            className="header__search-button"
            onClick={() => sendNewApiRequest(checkboxState)}
          >
            Localizar
          </button>
        </header>

        <main className="card__content">
          <div className="field__container">
            <h3 className="field__header">Área(s)</h3>

            {filtersData && (
              <ul>
                {filtersData.areas.map(area => (
                  <li key={area.id}>
                    <GreenCheckbox
                      checked={checkboxState.area[`area_${area.id}`]}
                      onChange={handleChange}
                      name={`area_${area.id}`}
                    />
                    <p>{`${area.category} (${area.category_count})`}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="field__container category">
            <h3 className="field__header">Categoria</h3>

            {filtersData && (
              <ul>
                <li className="radio__container">
                  <GreenRadio
                    checked={checkboxState.content.content_all}
                    onChange={handleChange}
                    name="content_all"
                  />
                  <p>
                    <strong>Todos</strong>
                  </p>
                </li>

                {filtersData.content.map(content => (
                  <li key={content.id}>
                    <GreenCheckbox
                      checked={checkboxState.content[`content_${content.id}`]}
                      onChange={handleChange}
                      name={`content_${content.id}`}
                    />
                    <p>{content.category}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="field__container language">
            <h3 className="field__header">Idiomas</h3>

            {filtersData && (
              <ul>
                <li className="radio__container">
                  <GreenRadio
                    checked={checkboxState.language.language_all}
                    onChange={handleChange}
                    name="language_all"
                  />
                  <p>
                    <strong>Todos</strong>
                  </p>
                </li>

                {filtersData.languages.map(language => (
                  <li key={language.id}>
                    <GreenCheckbox
                      checked={
                        checkboxState.language[`language_${language.id}`]
                      }
                      onChange={handleChange}
                      name={`language_${language.id}`}
                    />
                    <p>{language.category}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="field__container culture">
            <h3 className="field__header">Cultura(s)</h3>

            {filtersData && (
              <ul>
                <li>
                  <GreenCheckbox
                    checked={checkboxState.culture.culture_all}
                    onChange={handleChange}
                    name="culture_all"
                  />
                  <p>
                    <strong>TUDO</strong>
                    {` (${filtersData.cultures_count})`}
                  </p>
                </li>

                {filtersData.cultures.map(culture => (
                  <li key={culture.id}>
                    <GreenCheckbox
                      checked={checkboxState.culture[`culture_${culture.id}`]}
                      onChange={handleChange}
                      name={`culture_${culture.id}`}
                    />
                    <p>{`${culture.category} (${culture.category_count})`}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </FilterContainer>
  );
};

const SearchInput = ({ placeholder, fullWidth }) => {
  const [filterOpened, setFilterOpened] = useState(false);

  const closeFilter = () => setFilterOpened(!filterOpened);

  return (
    <Container fullWidth={fullWidth}>
      <form className="search__container">
        <button
          type="button"
          className="open-filter__button"
          onClick={() => setFilterOpened(!filterOpened)}
        >
          <img src={filterIcon} alt="Filtrar" className="filter__icon" />

          <span>FILTAR</span>

          <img src={bitwiseImg} alt="" className="bitwise__icon" />
        </button>

        {filterOpened && <SearchFilter closeFilter={closeFilter} />}

        <input type="text" placeholder={placeholder} />

        <button type="button" className="search-button">
          <BiSearchAlt size={25} />
        </button>
      </form>
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

SearchInput.defaultTypes = {
  fullWidth: false,
};

export default SearchInput;
