import React, { useState } from 'react';
import {
  SearchBlock,
  MovieCard,
  TvCard,
  PersonCard,
} from '../../organisms';
import { Heading } from '../../atoms';
import { GlobalStyle } from '../../styleUtils/globalStyles';
import { QueryContext } from './context';
import { multiQuery } from '../../../utils/apiQuery';
import { StyledResultsBlock } from './styles';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    movies: [],
    tv: [],
    person: [],
  });

  async function handleQuery(query) {
    const res = await multiQuery(query);
    setData(res);
  }

  const movieCards = data.movies.map((item) => <MovieCard key={item.id} item={item} />);
  const tvCards = data.tv.map((item) => <TvCard key={item.id} item={item} />);
  const personCards = data.person.map((item) => <PersonCard key={item.id} item={item} />);

  return (
    <QueryContext.Provider
      value={{ onQuery: handleQuery }}
    >
      <GlobalStyle />
      <SearchBlock />
      <StyledResultsBlock>
        {data.movies.length > 0 && (
          <>
            <Heading level="2">Movies</Heading>
            {movieCards}
          </>
        )}
        {data.tv.length > 0 && (
          <>
            <Heading level="2">TV</Heading>
            {tvCards}
          </>
        )}
        {data.person.length > 0 && (
          <>
            <Heading level="2">People</Heading>
            {personCards}
          </>
        )}
      </StyledResultsBlock>
    </QueryContext.Provider>
  );
};

export default HomePage;
