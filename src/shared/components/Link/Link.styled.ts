import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rem } from '../../styles/theme';

type Props = {
  direction?: string;
};

export const LinkStyled = styled(Link)<Props>`
  color: ${({ theme }) => theme.colors.primary.$600};
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.1s;
  border-radius: ${rem(12)};

  .icon {
    transition: transform 0.15s ease-out;

    ${({ direction }) =>
      direction === 'append'
        ? `
    margin-left: ${rem(6)};
  `
        : ` margin-right: ${rem(6)};`}
    &__fill {
      fill: currentColor;
    }
  }

  &:hover {
    opacity: 0.9;
    text-decoration: underline;

    .icon {
      transform: ${({ direction }) =>
        `translateX(${direction === 'append' ? '8px' : '-8px'})`};
    }
  }
`;
