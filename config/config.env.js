// ('dotenv').config(); // para poder usar las variables de entorno
import 'dotenv/config';
import * as env from 'dotenv/env-var';

const envs = {
  URLproject: env.get('VITE_SUPURL').required().asUrlString,
  ANONkey: env.get('ANON_KEY').required().asUrlString,
};

export default envs;
