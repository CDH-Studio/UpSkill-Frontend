const Models = require("../../Models");

putTest = async event => {
  const requestBody = event.body ? JSON.parse(event.body) : {};
  const id = requestBody.id;
  const value = requestBody.value;

  const params = {
    TableName: "UpSkillBackendTest",
    Key: {
      id
    },
    UpdateExpression: "SET value = :value, date = :date",
    ExpressionAttributeValues: {
      ":value": value,
      ":date": Date.now()
    },
    ReturnValues: "UPDATED_NEW"
  };

  console.log(params);
  const responseObject = await Models("put", params);
  return responseObject;
};

module.exports = {
  putTest
};
