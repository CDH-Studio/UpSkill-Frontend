const dbTestGet = require("./get");
const dbTestPus = require("./put");

module.exports = {
  get: dbTestGet.getTest,
  put: dbTestPus.putTest
};
