import styled from 'styled-components';
import { SpinnerLoaderMixin } from '../../styles/mixins/spinner';

export const PreLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.$100};
  z-index: 100;

  ${SpinnerLoaderMixin};
`;
