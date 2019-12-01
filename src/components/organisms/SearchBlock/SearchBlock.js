import React from 'react';
import { Heading } from '../../atoms';
import { Search } from '../../molecules';
import { StyledSearchBlock } from './styles';
import { CONTENT_KEYS } from '../../../config/constants';

const SearchBlock = () => {
  return (
    <StyledSearchBlock>
      <Heading level="1">{CONTENT_KEYS.SEARCH_HEADING}</Heading>
      <Search />
    </StyledSearchBlock>
  );
};

export default SearchBlock;
