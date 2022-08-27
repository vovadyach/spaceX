import React from 'react';
import { MainStyled } from './Main.styled';

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return <MainStyled>{children}</MainStyled>;
}
