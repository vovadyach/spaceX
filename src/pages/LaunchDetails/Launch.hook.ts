import { QueryHookOptions, useQuery } from '@apollo/client';
import { Launch } from './Launch.types';
import { GET_LAUNCH } from './Launch.query';

interface GetLaunchResponse {
  launch: Launch;
}

interface GetLaunchVariables {
  id: number;
}

export function useLaunchById(
  options: QueryHookOptions<GetLaunchResponse, GetLaunchVariables>
) {
  return useQuery<GetLaunchResponse, GetLaunchVariables>(GET_LAUNCH, options);
}
