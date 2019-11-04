const app = require('../../src/app');

describe('\'career_journey\' service', () => {
  it('registered the service', () => {
    const service = app.service('career-journey');
    expect(service).toBeTruthy();
  });
});
