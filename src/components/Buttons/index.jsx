import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FindOutLink, Container } from './styles';

export const FindOutButton = ({ children, ...rest }) => (
  <FindOutLink to="/" {...rest}>
    {children}
  </FindOutLink>
);

FindOutButton.propTypes = {
  children: PropTypes.node,
};

const ButtonRounded = ({ children, buttonStyle, type, ...rest }) => {
  return (
    <Container>
      {type === 'link' && (
        <Link id="button-rounded" className={buttonStyle} {...rest}>
          {children}
        </Link>
      )}

      {type === 'button' && (
        <button
          type="button"
          id="button-rounded"
          className={buttonStyle}
          {...rest}
        >
          {children}
        </button>
      )}

      {type === 'submit' && (
        <button
          type="submit"
          id="button-rounded"
          className={buttonStyle}
          {...rest}
        >
          {children}
        </button>
      )}
    </Container>
  );
};

ButtonRounded.propTypes = {
  children: PropTypes.node,
  buttonStyle: PropTypes.string,
  type: PropTypes.string,
};

ButtonRounded.defaultProps = {
  children: <></>,
  buttonStyle: 'primary',
  type: 'button',
};

export default ButtonRounded;
