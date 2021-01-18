import React, { useEffect, useRef, useState, useCallback } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

const FormInput = ({ name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <InputMask
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        mask={mask}
        {...rest}
      />

      <p>{error}</p>
    </Container>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  mask: PropTypes.string.isRequired,
};

export default FormInput;
