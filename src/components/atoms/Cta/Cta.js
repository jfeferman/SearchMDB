import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * Call to action button
 *
 * @property {boolan} disabled
 * @property {node} children
 */
const Cta = (props) => {
  const {
    children,
    disabled,
  } = props;

  return (
    <StyledButton
      type="button"
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Cta.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Cta.defaultProps = {
  disabled: false,
  children: [],
};

export default Cta;
