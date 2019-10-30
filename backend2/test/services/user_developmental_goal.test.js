const app = require('../../src/app');

describe('\'user_developmental_goal\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-developmental-goal');
    expect(service).toBeTruthy();
  });
});
