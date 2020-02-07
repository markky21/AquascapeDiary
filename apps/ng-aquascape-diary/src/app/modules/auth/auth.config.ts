import { NbPasswordAuthStrategy } from '@nebular/auth';
import { NbAuthOptions } from '@nebular/auth/auth.options';

export const nbAuthOptions: NbAuthOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      // baseEndpoint: 'http://localhost:3333/api/auth/'
    })
  ],
  forms: {}
};
