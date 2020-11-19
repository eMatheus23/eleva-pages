import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/buttons.css'

export function ButtonLight({ children, linkTo }) {
  return (
    <Link to={linkTo} className='button-light'>
      {children}  
    </Link>
  );
}

export function ButtonDark({ children, linkTo }) {
  return (
    <Link to={linkTo} className='button-dark'>
      {children}  
    </Link>
  );
}

export function ToggleSwitch({ children }) {
  return (
    <section>
      <label class="toggle-switch">
        <input 
          type="checkbox"  
          id="label-reversed-toggle-switch-input" 
        />
        <label for="label-reversed-toggle-switch-input"></label>
        {children}
      </label>                    
  </section>
  );
}


