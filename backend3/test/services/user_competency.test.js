const app = require("../../src/app");

describe("'user_competency' service", () => {
  it("registered the service", () => {
    const service = app.service("user-competency");
    expect(service).toBeTruthy();
  });
});
