/*********************************
 PATHS
 *********************************/
import { ApiPath } from '../../interfaces/api.model';

export const USERS_PATHS = {
  name: 'users',
  users: {
    findAll: { name: 'findAll' }
  }
};

const USERS_PATHS_check: ApiPath = USERS_PATHS;
