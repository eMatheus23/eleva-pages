import React from 'react';
import PropTypes from 'prop-types';

const OptionsGenerator = ({ array }) => {
  return (
    <>
      {array.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  );
};

OptionsGenerator.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
};

export default OptionsGenerator;
