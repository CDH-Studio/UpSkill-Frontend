const app = require('../../src/app');

describe('\'employment_status\' service', () => {
  it('registered the service', () => {
    const service = app.service('employment-status');
    expect(service).toBeTruthy();
  });
});
