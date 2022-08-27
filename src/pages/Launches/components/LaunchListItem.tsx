import React from 'react';
import { Link } from 'react-router-dom';
import { Launch } from '../Launches.types';

type LaunchListItemProps = {
  launch: Launch;
};

export function LaunchListItem({ launch }: LaunchListItemProps) {
  return (
    <Link to={`launches/${launch.id}`}>
      <div>{launch.launch_date_local}</div>
      <div>{launch.mission_name}</div>
      <div>{launch.launch_success}</div>
      <div>{launch.rocket.rocket_name}</div>
    </Link>
  );
}
