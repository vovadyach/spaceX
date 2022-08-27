import React from 'react';
import { Intro } from './components';
import { PageTitle } from '../../shared/components';

export function Home() {
  return (
    <>
      <PageTitle title="Welcome to Space X Launches" />
      <Intro />
    </>
  );
}
