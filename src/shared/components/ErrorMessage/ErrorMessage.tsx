import React from 'react';
import { ErrorMessageStyled } from './ErrorMessage.styled';

interface Props {
  text: string;
}

export function ErrorMessage({ text }: Props) {
  return <ErrorMessageStyled>{text}</ErrorMessageStyled>;
}
