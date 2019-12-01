import styled from 'styled-components';
import { px2rem, colors } from '../../styleUtils/globalStyleVariables';

export const StyledButton = styled.button`
  border-radius: ${px2rem(10)};
  border: 1px solid;
  cursor: pointer;
  display: block;
  font-weight: 300;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  width: auto;
  background: ${colors.lightGray};
  color: ${colors.black};
  font-size: ${px2rem(15)};
  line-height: ${px2rem(17)};
  letter-spacing: ${px2rem(0.34)};
  padding: ${px2rem(16)} ${px2rem(41.5)};
  vertical-align: middle;
  outline: 0;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 2px 2px rgba(23,109,220,0.8);
  }

  ${(props) => props.disabled && `
    cursor: not-allowed;
    background: ${colors.disabled};
    color: ${colors.disabledText};
    border: 0;
    &:hover {
      color: ${colors.disabledText};
    }
  `};
`;
