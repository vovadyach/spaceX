import React from 'react';
import {
  ErrorMessage,
  FlexGrid,
  FlexGridItem,
  SkeletonGrid,
} from '../../../shared/components';
import { useLaunchList } from '../Launches.hook';
import { LaunchListItem } from './LaunchListItem';
import { ERROR_MESSAGE } from '../../../shared/utils';

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
    <FlexGrid gap={24}>
      {data?.launches.map(launch => (
        <FlexGridItem key={launch.id}>
          <LaunchListItem key={launch.id} launch={launch} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}
