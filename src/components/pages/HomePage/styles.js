import styled from 'styled-components';
import { px2rem } from '../../styleUtils/globalStyleVariables';

export const StyledResultsBlock = styled.div`
  margin: 0 auto;
  max-width: ${px2rem(980)};
  padding: 0 ${px2rem(40)} ${px2rem(80)} ${px2rem(40)};

  h3 {
    margin-bottom: ${px2rem(4)};
  }
`;
