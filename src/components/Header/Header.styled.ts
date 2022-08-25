import styled from 'styled-components';
import { rem } from '../../styles/theme';
import { baseShadow } from '../../styles/mixins/shadow';

export const HeaderStyled = styled.header`
  ${baseShadow};
  background-color: #fff;
  padding: ${rem(32)};
  text-align: center;
`;
