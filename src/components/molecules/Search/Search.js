import React, { useRef, useContext } from 'react';
import { QueryContext } from '../../pages/HomePage';
import {
  Cta,
  TextInput,
} from '../../atoms';
import { StyledSearch } from './styles';
import { CONTENT_KEYS } from '../../../config/constants';

const Search = () => {
  const inputElement = useRef(null);
  const queryContext = useContext(QueryContext);

  function handleSubmit() {
    queryContext.onQuery(inputElement.current.value);
  }

  return (
    <StyledSearch>
      <div>
        <TextInput
          ref={inputElement}
          placeholder={CONTENT_KEYS.SEARCH_PLACEHOLDER}
        />
      </div>
      <div>
        <Cta onClick={() => handleSubmit()}>{CONTENT_KEYS.SEARCH_LABEL}</Cta>
      </div>
    </StyledSearch>
  );
};

export default Search;
