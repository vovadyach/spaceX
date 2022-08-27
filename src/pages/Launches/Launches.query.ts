import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
  query Launches($limit: Int!) {
    launches(limit: $limit) {
      id
      launch_date_local
      launch_success
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;
