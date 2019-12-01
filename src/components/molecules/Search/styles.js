import styled from 'styled-components';
import { px2rem } from '../../styleUtils/globalStyleVariables';

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${px2rem(600)};

  div:nth-of-type(1) {
    margin-right: ${px2rem(10)};
  }
`;
