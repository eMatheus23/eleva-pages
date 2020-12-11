import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/buttons.css';

export default function ButtonRounded({
  linkTo,
  onClick,
  children,
  buttonStyle,
  type,
}) {
  return (
    <>
      {type === 'link' && (
        <Link
          to={linkTo}
          id='button-rounded'
          className={buttonStyle ? buttonStyle : 'primary'}
          onClick={onClick}
        >
          {children}
        </Link>
      )}

      {type !== 'link' && (
        <button
          type="button"
          id='button-rounded'
          className={buttonStyle ? buttonStyle : 'primary'}
          onClick={onClick}
        >
          {children}
        </button>
      )}

    </>
  );
}

export function ToggleSwitch({ children, className }) {
  return (
    <section className={className}>
      <label className='toggle-switch'>
        <input type='checkbox' id='label-reversed-toggle-switch-input' />
        <label htmlFor='label-reversed-toggle-switch-input'></label>
        {children}
      </label>
    </section>
  );
}
