import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
} from './styles';

/**
 * Custom level header
 * @property {string} level - '1' for H1, '2' for H2, '3' for H3, and '4' for H4
 */
const Heading = (props) => {
  const {
    level,
    children,
    className,
  } = props;
  let result = '';
  // Defaults to heading level one
  if (!level || level === '1') {
    result = <StyledH1 className={className}>{children}</StyledH1>;
  } else if (level === '2') {
    result = <StyledH2 className={className}>{children}</StyledH2>;
  } else if (level === '3') {
    result = <StyledH3 className={className}>{children}</StyledH3>;
  } else {
    result = <StyledH4 className={className}>{children}</StyledH4>;
  }
  return result;
};

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4']),
  children: PropTypes.node,
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: '1',
};

export default Heading;
