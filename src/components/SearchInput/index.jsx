import React from 'react';
import PropTypes from 'prop-types';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import filterIcon from '../../assets/icons/filter-icon.svg';
import bitwiseImg from '../../assets/icons/bitwise.svg';

import { Container } from './styles';

const SearchInput = ({ placeholder, fullWidth }) => {
  return (
    <Container fullWidth={fullWidth}>
      <form className="search__container">
        <button type="button" className="open-filter__button">
          <img src={filterIcon} alt="Filtrar" className="filter__icon" />

          <span>CATEGORIA</span>

          <img src={bitwiseImg} alt="" />
        </button>

        <input type="text" placeholder={placeholder} />

        <button type="button" className="search-button">
          <BiSearchAlt size={20} />
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
