import styled from 'styled-components';
import { rem } from '../../styles/theme';
import { FlexGridItemStyled } from './FlexGridItem.styled';

type Props = {
  gap?: number;
};

export const FlexGridStyled = styled.div<Props>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-left: -${rem(12)};
  margin-right: -${rem(12)};

  ${({ gap }) =>
    gap &&
    `
    ${FlexGridItemStyled} {
    margin-bottom: ${rem(gap)};
    }
  `}
`;
