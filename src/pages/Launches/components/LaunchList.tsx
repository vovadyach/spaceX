import React from 'react';
import { ErrorMessage, SkeletonGrid } from '../../../shared/components';
import { useLaunchList } from '../Launches.hook';
import { LaunchListItem } from './LaunchListItem';
import { ERROR_MESSAGE } from '../../../shared/constants';

export function LaunchList() {
  const { data, loading, error } = useLaunchList({
    variables: {
      limit: 5,
    },
  });

  if (loading) {
    return <SkeletonGrid items={5} height={140} space={24} />;
  }

  if (error) {
    return <ErrorMessage text={ERROR_MESSAGE.COMMON} />;
  }

  return (
    <div>
      <h2>Launch list goe here...</h2>
      {data?.launches.map(launch => (
        <LaunchListItem key={launch.id} launch={launch} />
      ))}
    </div>
  );
}
