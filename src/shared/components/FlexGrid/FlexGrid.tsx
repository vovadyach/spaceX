import React from 'react';
import { FlexGridItemStyled, FlexGridStyled } from './FlexGrid.styled';

type Props = {
  children: React.ReactNode;
};

export function FlexGrid({ children }: Props) {
  return <FlexGridStyled>{children}</FlexGridStyled>;
}

export function FlexGridItem({ children }: Props) {
  return <FlexGridItemStyled>{children}</FlexGridItemStyled>;
}
