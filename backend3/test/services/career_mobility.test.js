const app = require('../../src/app');

describe('\'career_mobility\' service', () => {
  it('registered the service', () => {
    const service = app.service('career-mobility');
    expect(service).toBeTruthy();
  });
});
