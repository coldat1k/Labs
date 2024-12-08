'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

  const { createUser } = require('./path-to-file');

  const user = createUser('Marcus Aurelius', 'Roma');
  
  console.log(user);