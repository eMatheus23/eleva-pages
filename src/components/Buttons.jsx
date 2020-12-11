import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/buttons.css';

export default function ButtonRounded({
  linkTo,
  onClick,
  children,
  buttonStyle,
}) {
  return (
    <Link
      to={linkTo ? linkTo : undefined}
      id='button-rounded'
      className={buttonStyle ? buttonStyle : 'primary'}
      onClick={onClick}
    >
      {children}
    </Link>
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
