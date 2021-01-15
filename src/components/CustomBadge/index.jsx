import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';

const StyledBadge = withStyles(theme => ({
  badge: {
    top: 5,
    right: 37,
    height: 24,
    padding: '0px 5px',
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: 12,
    background: '#FF5741',
    font: 'bold 16px/19px Montserrat',
    color: '#FFF',
  },
}))(Badge);

const CustomBadge = ({ children, badgeContent, max }) => {
  return (
    <StyledBadge badgeContent={badgeContent} max={max}>
      {children}
    </StyledBadge>
  );
};

CustomBadge.propTypes = {
  children: PropTypes.node,
  badgeContent: PropTypes.number,
  max: PropTypes.number,
};

CustomBadge.defaultProps = {
  badgeContent: 0,
  max: 9,
};

export default CustomBadge;
