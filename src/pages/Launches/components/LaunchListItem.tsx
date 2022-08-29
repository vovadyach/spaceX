import React from 'react';
import { Launch } from '../Launches.types';
import { dateFormat } from '../../../shared/utils';
import { LaunchItemStyled } from './LaunchItem.styled';

type LaunchListItemProps = {
  launch: Launch;
};

export function LaunchListItem({ launch }: LaunchListItemProps) {
  return (
    <LaunchItemStyled to={`/launches/${launch.id}`}>
      <h3>{launch.mission_name}</h3>
      <div>
        <strong>Date: </strong>
        <time>
          <em>{dateFormat(launch.launch_date_local, 'en-US')}</em>
        </time>
      </div>
      <div>
        <strong>Rocket: </strong>
        {launch.rocket.rocket_name}
      </div>
      <div>{launch.launch_success}</div>
    </LaunchItemStyled>
  );
}
