import styled from 'styled-components';
import { rem } from '../../styles/theme';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary.$400};
  max-width: ${rem(940)};
  padding: ${rem(48)} ${rem(24)};
  margin: 0 auto 2rem;
  color: white;
  text-align: center;
  width: 100%;
  border-radius: ${rem(48)};
`;
