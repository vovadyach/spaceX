import React from 'react';
import { PageTitleStyled } from './PageTitle.styled';

type Props = {
  title: string;
};

export function PageTitle({ title }: Props) {
  return <PageTitleStyled>{title}</PageTitleStyled>;
}
