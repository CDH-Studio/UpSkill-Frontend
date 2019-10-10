const Models = require("../../Models");

getTest = async (event, context, callback) => {
  const pathParams = event.pathParameters ? event.pathParameters : {};
  const id = pathParams.id ? pathParams.id : "";
  const params = {
    TableName: "UpSkillBackendTest",
    Key: {
      id: id
    }
  };

  const responseObject = await Models("get", params);
  return responseObject;
};

module.exports = {
  getTest
};
