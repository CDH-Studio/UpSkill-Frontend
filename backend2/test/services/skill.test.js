const app = require('../../src/app');

describe('\'skill\' service', () => {
  it('registered the service', () => {
    const service = app.service('skill');
    expect(service).toBeTruthy();
  });
});
