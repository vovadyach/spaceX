import React, { PropsWithChildren } from 'react';
import { FlexGridStyled } from './FlexGrid.styled';

type Props = {
  gap?: number;
};

export function FlexGrid({
  children,
  gap,
}: PropsWithChildren<Props>): JSX.Element {
  return <FlexGridStyled gap={gap}>{children}</FlexGridStyled>;
}
