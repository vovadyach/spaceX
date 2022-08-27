import styled from 'styled-components';
import { alignMixin } from '../../styles/mixins/align';
import { LinkStyled } from '../Link';

export const PageTitleStyled = styled.h1`
  ${alignMixin.center};
  margin-bottom: 2.5rem;
  position: relative;

  ${LinkStyled} {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    text-transform: initial;
  }
`;
