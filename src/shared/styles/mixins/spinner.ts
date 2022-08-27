import { css, keyframes } from 'styled-components';
import { rem } from '../theme';

const spinnerKeyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoaderMixin = css`
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -${rem(30)};
    margin-left: -${rem(30)};
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: ${rem(50)};
    border: 2px solid ${({ theme }) => theme.colors.primary.$200};
    border-top-color: ${({ theme }) => theme.colors.primary.$600};
    z-index: 3;
    animation: ${spinnerKeyFrames} 0.6s ease-out infinite;
  }
`;
