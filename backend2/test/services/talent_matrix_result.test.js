const app = require('../../src/app');

describe('\'talent_matrix_result\' service', () => {
  it('registered the service', () => {
    const service = app.service('talent-matrix-result');
    expect(service).toBeTruthy();
  });
});
