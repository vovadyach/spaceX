import { gql } from '@apollo/client';

export const GET_LAUNCH = gql`
  query Launch($launchId: Int!) {
    launch(launchId: $launchId) {
      id
      launch_date_local
      details
      payloads
      launch_success
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
    }
  }
`;
