import React from 'react';
import {
  Cta,
  TextInput,
} from '../../atoms';
import { StyledSearch } from './styles';
import { CONTENT_KEYS } from '../../../config/constants';

const Search = () => {
  return (
    <StyledSearch>
      <div><TextInput placeholder={CONTENT_KEYS.SEARCH_PLACEHOLDER} /></div>
      <div><Cta>Search</Cta></div>
    </StyledSearch>
  );
};

export default Search;
