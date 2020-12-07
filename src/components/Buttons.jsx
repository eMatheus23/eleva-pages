import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/buttons.css'

export function ButtonLight({linkTo, onClick, children}) {
  return (
    <Link to={linkTo} className='button-light' onClick={onClick}>
      {children}  
    </Link>
  );
}

export function ButtonDark({linkTo, onClick, children}) {
  return (
    <Link to={linkTo} className='button-dark' onClick={onClick}>
      {children}  
    </Link>
  );
}

export function ButtonWhite({linkTo, onClick, children}) {
  return (
    <Link to={linkTo} className='button-white' onClick={onClick}>
      {children}  
    </Link>
  );
}

export function ToggleSwitch({ children, className }) {
  return (
    <section className={className}>
      <label className="toggle-switch">
        <input 
          type="checkbox"  
          id="label-reversed-toggle-switch-input" 
        />
        <label htmlFor="label-reversed-toggle-switch-input"></label>
        {children}
      </label>                    
  </section>
  );
}


