import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/SpaceX-Logo.svg';

export function Header() {
  return (
    <header data-testid="header">
      <a href="/">
        <LogoIcon />
      </a>
    </header>
  );
}
