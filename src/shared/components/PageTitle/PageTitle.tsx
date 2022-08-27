import React from 'react';
import { PageTitleStyled } from './PageTitle.styled';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export function PageTitle({ title, children }: Props) {
  return (
    <PageTitleStyled>
      {children}
      {title}
    </PageTitleStyled>
  );
}
