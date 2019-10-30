const app = require('../../src/app');

describe('\'second_language_proficiency\' service', () => {
  it('registered the service', () => {
    const service = app.service('second-language-proficiency');
    expect(service).toBeTruthy();
  });
});
