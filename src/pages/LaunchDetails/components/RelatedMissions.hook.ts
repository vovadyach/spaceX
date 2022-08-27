import { QueryHookOptions, useQuery } from '@apollo/client';
import { Mission } from './RelatedMissions.types';
import { GET_MISSIONS } from './RelatedMissions.query';

interface GetMissionResponse {
  missions: Mission[];
}

interface GetMissionVariables {
  // eslint-disable-next-line camelcase
  rocket_name: string;
}

export function useMissionList(
  options: QueryHookOptions<GetMissionResponse, GetMissionVariables>
) {
  return useQuery<GetMissionResponse, GetMissionVariables>(
    GET_MISSIONS,
    options
  );
}
