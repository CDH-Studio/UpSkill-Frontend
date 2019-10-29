const app = require('../../src/app');

describe('\'db\' service', () => {
  it('registered the service', () => {
    const service = app.service('db');
    expect(service).toBeTruthy();
  });
});
