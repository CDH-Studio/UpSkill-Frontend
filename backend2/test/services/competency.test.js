const app = require('../../src/app');

describe('\'competency\' service', () => {
  it('registered the service', () => {
    const service = app.service('competency');
    expect(service).toBeTruthy();
  });
});
