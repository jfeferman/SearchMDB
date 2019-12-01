import styled from 'styled-components';
import { px2rem, colors } from '../../styleUtils/globalStyleVariables';

export const StyledTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: ${px2rem(56)};
  border: 1px solid ${colors.lightGray};
  border-radius: ${px2rem(3)};
  background-color: ${colors.white};
  padding-left: ${px2rem(20)};
  font-size: ${px2rem(16)};
`;
