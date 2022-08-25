import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/SpaceX-Logo.svg';

export function Header() {
  return (
    <header>
      <Link to="/">
        <LogoIcon />
      </Link>
    </header>
  );
}
