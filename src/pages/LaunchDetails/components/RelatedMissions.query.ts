import { gql } from '@apollo/client';

export const GET_MISSIONS = gql`
  query Missions($rocketName: String!) {
    missions(rocket_name: $rocketName) {
      mission_name
      mission_details
    }
  }
`;
