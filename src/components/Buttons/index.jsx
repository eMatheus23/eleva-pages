import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledContainer, StyledButton } from './styles';

export const FindOutButton = ({ children, ...rest }) => (
  <StyledContainer>
    <Link to="/" {...rest}>
      {children}
    </Link>
  </StyledContainer>
);

FindOutButton.propTypes = {
  children: PropTypes.node,
};

const ButtonRounded = ({ children, buttonStyle, type, ...rest }) => {
  return (
    <StyledButton>
      {type === 'link' && (
        <Link
          id="button-rounded"
          className={buttonStyle || 'primary'}
          {...rest}
        >
          {children}
        </Link>
      )}

      {type === 'button' && (
        <button
          type="button"
          id="button-rounded"
          className={buttonStyle || 'primary'}
          {...rest}
        >
          {children}
        </button>
      )}

      {type === 'submit' && (
        <button
          type="submit"
          id="button-rounded"
          className={buttonStyle || 'primary'}
          {...rest}
        >
          {children}
        </button>
      )}
    </StyledButton>
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
