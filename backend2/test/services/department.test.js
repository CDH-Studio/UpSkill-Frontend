const app = require('../../src/app');

describe('\'department\' service', () => {
  it('registered the service', () => {
    const service = app.service('department');
    expect(service).toBeTruthy();
  });
});
