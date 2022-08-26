import React from 'react';
import { LayoutStyled } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return <LayoutStyled>{children}</LayoutStyled>;
}
