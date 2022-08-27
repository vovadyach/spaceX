import React from 'react';
import { LaunchList } from './components';
import { PageTitle } from '../../shared/components';

export function Launches() {
  return (
    <div>
      <PageTitle title="Launches" />
      <LaunchList />
    </div>
  );
}
