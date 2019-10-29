const app = require('../../src/app');

describe('\'group_level\' service', () => {
  it('registered the service', () => {
    const service = app.service('group-level');
    expect(service).toBeTruthy();
  });
});
