import React from 'react';
import { FlexGridStyled } from './FlexGrid.styled';

type Props = {
  children: React.ReactNode;
  gap?: number;
};

export function FlexGrid({ children, gap }: Props) {
  return <FlexGridStyled gap={gap}>{children}</FlexGridStyled>;
}
