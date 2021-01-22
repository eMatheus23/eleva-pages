import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import BitwiseImg from '../../assets/images/icons/bitwise.svg';

import { Container } from './styles';

const FormPassword = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

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

  const handlePasswordVisibility = useCallback(() => {
    setPasswordType('text');

    setTimeout(() => setPasswordType('password'), 2000);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <div>
        <input
          ref={inputRef}
          type={passwordType}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        <div className="reveal-password">
          <img src={BitwiseImg} alt="" />

          {passwordType === 'password' && (
            <FaRegEye size={20} onClick={handlePasswordVisibility} />
          )}
          {passwordType === 'text' && (
            <FaRegEyeSlash size={20} onClick={handlePasswordVisibility} />
          )}
        </div>
      </div>

      <p>{error}</p>
    </Container>
  );
};

FormPassword.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormPassword;
