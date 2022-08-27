import { QueryHookOptions, useQuery } from '@apollo/client';
import { Launch } from './Launches.types';
import { GET_LAUNCHES } from './Launches.query';

interface GetLaunchListResponse {
  launches: Launch[];
}

interface GetLaunchListVariables {
  limit: number;
}

export function useLaunchList(
  options: QueryHookOptions<GetLaunchListResponse, GetLaunchListVariables>
) {
  return useQuery<GetLaunchListResponse, GetLaunchListVariables>(
    GET_LAUNCHES,
    options
  );
}
