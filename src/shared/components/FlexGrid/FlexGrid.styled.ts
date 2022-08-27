import styled from 'styled-components';
import { rem } from '../../styles/theme';

export const FlexGridStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-left: -${rem(12)};
  margin-right: -${rem(12)};
`;

export const FlexGridItemStyled = styled.div`
  flex: 0 0 auto;
  padding-left: ${rem(12)};
  padding-right: ${rem(12)};
  flex-basis: 50%;
  max-width: 50%;
`;
