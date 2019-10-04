const AWS = require("aws-sdk");

// var credentials = new AWS.SharedIniFileCredentials({
//   profile: "501108984960_Client-Power-User"
// });
// AWS.config.credentials = credentials;
AWS.config.loadFromPath("./config.json");

const docClient = new AWS.DynamoDB.DocumentClient();

/*
Example param
~~~~~~~~~~~~~
const params = {
  TableName: 'Stores',
  Key: {
    storeId: storeId
  },
  ProjectionExpression: attribute
};
*/

get = params => {
  return new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({
            code: err.code,
            message: err.message
          })
        });
      }
      console.log(data);
      if (data.Item && Object.keys(data.Item).length !== 0) {
        resolve({
          statusCode: 200,
          body: JSON.stringify(data.Item)
        });
      } else {
        reject({
          statusCode: 404,
          body: JSON.stringify({
            code: 404,
            message: "Resource not found"
          })
        });
      }
    });
  });
};

module.exports = {
  get
};
