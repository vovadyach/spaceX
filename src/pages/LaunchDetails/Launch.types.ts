/* eslint-disable camelcase */
interface Payload {
  leo: string;
  gto: string;
  mars: string;
}

interface RocketInfo {
  company: string;
  name: string;
  mass: {
    kg: string;
  };
}

interface Rocket {
  rocket_name: string;
  rocket: RocketInfo;
}

export interface Launch {
  id: number | string;
  mission_name: string;
  rocket: Rocket;
  details: string;
  payloads: Payload;
}
