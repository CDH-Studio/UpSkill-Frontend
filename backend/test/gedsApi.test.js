const frisby = require("frisby");

describe("GEDS API", () => {
  it("should search an employee by name", () => {
    return frisby
      .get("http://localhost:3000/getEmployeeInfo/rizvi%20rab")
      .expect("status", 200);
  });
  it("should return content not found if no results", () => {
    return frisby
      .get("http://localhost:3000/getEmployeeInfo/nonExistingPerson")
      .expect("status", 204);
  });
});
