import React from 'react';
import { useMissionList } from './RelatedMissions.hook';
import { ErrorMessage } from '../../../shared/components';

type Props = {
  rocketName: string | undefined;
};

export function RelatedMissions({ rocketName }: Props) {
  const { data, loading, error } = useMissionList({
    variables: {
      rocket_name: rocketName || '',
    },
  });

  if (loading) {
    return (
      <div>
        <em>Loading related missions...</em>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage text="Data couldn't be retrieved." />;
  }

  return (
    <>
      <h3>{rocketName} related missions: </h3>
      {data?.missions.map(mission => (
        <dl>
          <dt>
            <strong>{mission.mission_name}:</strong>
          </dt>
          <dd>{mission.mission_details}</dd>
        </dl>
      ))}
    </>
  );
}
