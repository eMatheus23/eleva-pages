import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/buttons.css'

export function ButtonLight(props) {
  return (
    <Link to={{pathname:props.linkTo, state:props.params}} className='button-light'>
      {props.children}  
    </Link>
  );
}

export function ButtonDark(props) {
  return (
    <Link to={{pathname:props.linkTo, state:props.params}} className='button-dark'>
      {props.children}  
    </Link>
  );
}

export function ButtonWhite(props) {
  return (
    <Link to={{pathname:props.linkTo, state:props.params}} className='button-white'>
      {props.children}  
    </Link>
  );
}

export function ToggleSwitch({ children, className }) {
  return (
    <section className={className}>
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


