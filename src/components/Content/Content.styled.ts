import styled from 'styled-components';
import { rem } from '../../styles/theme';
import { layeredShadow } from '../../styles/mixins/shadow';

export const ContentStyled = styled.div`
  ${layeredShadow};
  background-color: white;
  border-radius: ${rem(8)};
`;
