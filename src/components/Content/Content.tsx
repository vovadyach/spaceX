import React from 'react';
import { ContentStyled } from './Content.styled';

interface Props {
  children: React.ReactNode;
}

export function Content({ children }: Props) {
  return <ContentStyled>{children}</ContentStyled>;
}
