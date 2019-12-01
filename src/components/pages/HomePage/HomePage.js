import React from 'react';
import { SearchBlock } from '../../organisms';
import { GlobalStyle } from '../../styleUtils/globalStyles';

const HomePage = () => {
  return (
    <div>
      <GlobalStyle />
      <SearchBlock />
    </div>
  );
};

export default HomePage;
