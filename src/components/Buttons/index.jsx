import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ButtonRounded = ({ linkTo, onClick, children, buttonStyle, type }) => {
  return (
    <>
      {type === 'link' && (
        <Link
          to={linkTo}
          id="button-rounded"
          className={buttonStyle || 'primary'}
          onClick={onClick}
        >
          {children}
        </Link>
      )}

      {type !== 'link' && (
        <button
          type="button"
          id="button-rounded"
          className={buttonStyle || 'primary'}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonRounded;
