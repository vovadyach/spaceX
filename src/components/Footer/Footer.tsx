import React from 'react';
import { FooterStyled } from './Footer.styled';

export function Footer() {
  return (
    <FooterStyled>
      <p>
        SpaceX (Space Exploration Technologies Corporation) is a space
        transportation and aerospace manufacturer founded in 2002 by Elon Musk.
        Musk is also the CEO of electric car maker Tesla.
      </p>
      <div>
        <strong>&copy; 2022 All rights reserved</strong>
      </div>
    </FooterStyled>
  );
}
