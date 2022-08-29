import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../../shared/styles/theme';
import { baseShadow } from '../../../shared/styles/mixins/shadow';

export const LaunchItemStyled = styled(Link)`
  ${baseShadow};
  background-color: white;
  border-radius: ${rem(8)};
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s ease-out;
  will-change: transform;

  &:hover {
    transform: translateY(-2px) scale(1.01);
  }
`;
