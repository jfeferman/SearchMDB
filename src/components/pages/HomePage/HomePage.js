import React, { useState } from 'react';
import { SearchBlock } from '../../organisms';
import { GlobalStyle } from '../../styleUtils/globalStyles';
import { QueryContext } from './context';
import { multiQuery } from '../../../utils/apiQuery';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({});

  async function handleQuery(query) {
    const res = await multiQuery(query);
    setData(res);
  }

  return (
    <QueryContext.Provider
      value={{ onQuery: handleQuery }}
    >
      <GlobalStyle />
      <SearchBlock />
    </QueryContext.Provider>
  );
};

export default HomePage;
