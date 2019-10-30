const app = require('../../src/app');

describe('\'user_project\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-project');
    expect(service).toBeTruthy();
  });
});
