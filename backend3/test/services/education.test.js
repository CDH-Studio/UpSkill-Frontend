const app = require('../../src/app');

describe('\'education\' service', () => {
  it('registered the service', () => {
    const service = app.service('education');
    expect(service).toBeTruthy();
  });
});
