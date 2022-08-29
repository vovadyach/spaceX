import React from 'react';
import { FlexGridItemStyled } from './FlexGridItem.styled';

type Props = {
  children: React.ReactNode;
};

export function FlexGridItem({ children }: Props) {
  return <FlexGridItemStyled>{children}</FlexGridItemStyled>;
}
