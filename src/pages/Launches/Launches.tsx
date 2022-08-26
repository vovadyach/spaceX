import React from 'react';
import { LaunchList } from './components';
import { PageTitle } from '../../components';

export function Launches() {
  return (
    <div>
      <PageTitle title="Launches" />

      <LaunchList />
    </div>
  );
}
