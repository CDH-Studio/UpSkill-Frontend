const app = require('../../src/app');

describe('\'security_clearance\' service', () => {
  it('registered the service', () => {
    const service = app.service('security-clearance');
    expect(service).toBeTruthy();
  });
});
