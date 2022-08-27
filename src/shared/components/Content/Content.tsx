import React from 'react';
import { ContentStyled } from './Content.styled';

type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return <ContentStyled>{children}</ContentStyled>;
}
