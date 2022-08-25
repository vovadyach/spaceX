import { css } from 'styled-components';

export const baseShadow = css`
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

export const layeredShadow = css`
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;
