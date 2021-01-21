import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

const FindOut = ({ children, ...rest }) => (
  <Container>
    <Link to="/" {...rest}>
      {children}
    </Link>
  </Container>
);

FindOut.propTypes = {
  children: PropTypes.node,
};

export default FindOut;
