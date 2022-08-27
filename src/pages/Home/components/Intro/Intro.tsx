import React from 'react';
import Rocket from '../../../../assets/images/rocket.png';
import { IntroStyled, IntroFigureStyled } from './Intro.styled';
import { LinkStyled } from '../../../../shared/components';
import { ArrowRight } from '../../../../assets/icons';

export function Intro() {
  return (
    <IntroStyled>
      <IntroFigureStyled>
        <img src={Rocket} alt="Rocket" />
      </IntroFigureStyled>

      <LinkStyled
        direction="append"
        to="launches"
        title="Click to see our past launches"
      >
        Check out our past launches
        <ArrowRight />
      </LinkStyled>
    </IntroStyled>
  );
}
