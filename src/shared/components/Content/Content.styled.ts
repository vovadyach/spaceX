import styled from 'styled-components';
import { baseShadow } from '../../styles/mixins/shadow';
import { rem } from '../../styles/theme';

export const ContentStyled = styled.article`
  ${baseShadow};
  background-color: white;
  border-radius: ${rem(8)};
  padding: 2rem;
`;
