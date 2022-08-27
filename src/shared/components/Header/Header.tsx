import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/SpaceX-Logo.svg';
import { HeaderStyled } from './Header.styled';

export function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <LogoIcon />
      </Link>
    </HeaderStyled>
  );
}
