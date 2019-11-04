const app = require('../../src/app');

describe('\'branch\' service', () => {
  it('registered the service', () => {
    const service = app.service('branch');
    expect(service).toBeTruthy();
  });
});
