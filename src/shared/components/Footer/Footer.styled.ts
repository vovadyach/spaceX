import styled from 'styled-components';
import { rem } from '../../styles/theme';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.$600};
  padding: 1rem ${rem(24)};
  color: white;
  text-align: center;
  width: 100%;
`;

export const FooterStyledContainer = styled.div`
  max-width: ${rem(940)};
  margin: 0 auto;
`;
