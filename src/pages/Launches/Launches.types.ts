/* eslint-disable camelcase */
export interface Rocket {
  rocket_name: string;
}

export interface Launch {
  id: number | string;
  launch_date_local: string;
  launch_success: string;
  mission_name: string;
  rocket: Rocket;
}
