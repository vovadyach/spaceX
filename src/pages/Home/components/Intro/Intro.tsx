import React from 'react';
import Rocket from '../../../../assets/images/rocket.png';
import { IntroStyled, IntroFigureStyled } from './Intro.styled';
import { LinkStyled } from '../../../../components/Link';
import { ArrowRight } from '../../../../assets/icons';

export function Intro() {
  const linkTitle = 'Check out our past launches';

  return (
    <IntroStyled>
      <IntroFigureStyled>
        <img src={Rocket} alt="Rocket" />
      </IntroFigureStyled>

      <LinkStyled to="launches" title={linkTitle}>
        {linkTitle}
        <ArrowRight />
      </LinkStyled>
    </IntroStyled>
  );
}
