const app = require('../../src/app');

describe('\'user_skill\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-skill');
    expect(service).toBeTruthy();
  });
});
