/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTextInput,
} from './styles';

const TextInput = forwardRef((props, ref) => {
  const {
    placeholder,
    onChange,
  } = props;

  return (
    <StyledTextInput
      ref={ref}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
