import { desktop } from '@osjs/client';
import Hello from './apps/hello';

export default {
  desktop: desktop(),

  services: {
    application: application({
      applications: [
        {
          name: 'Hello',
          app: Hello
        }
      ]
    })
  },

  auth: null
};


