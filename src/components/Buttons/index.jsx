import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.css';

const ButtonRounded = ({ children, buttonStyle, type, ...rest }) => {
  return (
    <>
      {type === 'link' && (
        <Link
          id="button-rounded"
          className={buttonStyle || 'primary'}
          {...rest}
        >
          {children}
        </Link>
      )}

      {type !== 'link' && (
        <button
          type="button"
          id="button-rounded"
          className={buttonStyle || 'primary'}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
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
