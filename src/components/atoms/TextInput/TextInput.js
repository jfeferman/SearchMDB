import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTextInput,
} from './styles';

const TextInput = (props) => {
  const {
    placeholder,
    onChange,
  } = props;

  return (
    <StyledTextInput
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
