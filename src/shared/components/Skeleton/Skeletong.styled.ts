import styled, { keyframes } from 'styled-components';
import { rem } from '../../styles/theme';
import { baseShadow } from '../../styles/mixins/shadow';

const shimmer = keyframes`
  0% {
    transform: translate(100%);
  }
  40%, 100% {
    transform: translate(-150%);
  }
`;

type Props = {
  height: number;
  space: number;
};

export const SkeletonStyled = styled.div<Props>`
  ${baseShadow};
  display: flex;
  width: 100%;
  height: ${({ height }) => (height ? rem(height) : rem(16))};
  border-radius: ${rem(8)};
  overflow: hidden;
  position: relative;
  background-color: white;
  margin-bottom: ${({ space }) => rem(space) || '1.5rem'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(246, 246, 246, 0) 0,
      rgba(246, 246, 246, 0.3) 20%,
      rgba(246, 246, 246, 0.6) 60%,
      rgba(60, 246, 246, 0)
    );
    animation: ${shimmer} 1s infinite;
  }
`;
