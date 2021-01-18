import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Card, Dialog, Flag, Input, Placeholder, Row } from './styles';
import json from '../../data/countries.json';

const getFlag = code => {
  return `https://countryflags.io/${code}/flat/64.png`;
};

const CountryDialog = ({ open, setOpen, setCountry, setFlag }) => (
  <Dialog open={open}>
    {json.map(c => (
      <Row
        type="button"
        onClick={() => {
          setOpen(false);
          setCountry(c.name);
          setFlag(getFlag(c.code));
        }}
      >
        <Flag src={getFlag(c.code)} />
        <span>{c.name}</span>
      </Row>
    ))}
  </Dialog>
);

CountryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.bool.isRequired,
  setCountry: PropTypes.func.isRequired,
  setFlag: PropTypes.func.isRequired,
};

const CountryPicker = ({ name }) => {
  const inputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState('Brasil');
  const [flag, setFlag] = useState(getFlag('BR'));
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current.firstChild,
      path: 'alt',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.firstChild.alt);
  }, []);

  return (
    <Card>
      <CountryDialog
        open={open}
        setOpen={setOpen}
        setCountry={setCountry}
        setFlag={setFlag}
      />
      <Input onClick={() => setOpen(!open)}>
        <Placeholder ref={inputRef} id="teste">
          {country === '' ? 'País' : <img src={flag} alt={country} />}
        </Placeholder>
      </Input>
    </Card>
  );
};

export default CountryPicker;
