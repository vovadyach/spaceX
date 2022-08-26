import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../styles/theme';

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.$600};
  display: inline-flex;
  align-content: center;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.1s;
  border-radius: ${rem(12)};

  .icon {
    transition: transform 0.15s ease-out;
    margin-left: ${rem(6)};

    path:nth-child(2) {
      fill: currentColor;
    }
  }

  &:hover {
    opacity: 0.9;
    text-decoration: underline;

    .icon {
      transform: translateX(8px);
    }
  }
`;
