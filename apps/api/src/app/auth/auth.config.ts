/*********************************
 PATHS
 *********************************/
import { ApiPath } from '../../interfaces/api.model';

export const AUTH_PATHS = {
  // NOTE: get api/auth/ validate JWT only - for test
  name: 'auth',
  auth: {
    local: { name: 'local' },
    login: { name: 'login' },
    logout: { name: 'logout' },
    register: { name: 'register' },
    requestPass: { name: 'request-pass' },
    resetPassGet: { name: 'reset-pass' },
    resetPassPut: { name: 'reset-pass' }
  }
};

const AUTH_PATHS_check: ApiPath = AUTH_PATHS;

export enum AuthStrategy {
  LOCAL = 'local',
  JWT = 'jwt'
}
