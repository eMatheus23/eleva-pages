import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';

import { Container } from './styles';

const GreenSwitch = withStyles({
  switchBase: {
    color: '#F1F1F1',
    '&$checked': {
      color: '#009688',
    },
    '&$checked + $track': {
      backgroundColor: '#009688',
    },
  },
  checked: {},
  track: {},
})(Switch);

const FormInput = ({ name, id, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [switchState, setSwitchState] = useState(false);

  const handleSwitchChange = useCallback(() => {
    setSwitchState(!switchState);
  }, [switchState]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: document.querySelector(`#${id}`),
      path: 'checked',
    });
  }, [id, fieldName, registerField]);

  return (
    <Container ref={inputRef}>
      <GreenSwitch
        checked={switchState}
        onChange={handleSwitchChange}
        name={name}
        defaultValue={defaultValue}
        id={id}
        {...rest}
      />
      <div className="error">
        <p>{error}</p>
      </div>
    </Container>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FormInput;
