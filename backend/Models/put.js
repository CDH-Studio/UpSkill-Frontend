const AWS = require("aws-sdk");

// var credentials = new AWS.SharedIniFileCredentials({
//   profile: "501108984960_Client-Power-User"
// });
// AWS.config.credentials = credentials;
AWS.config.loadFromPath("./config.json");

put = params => {
  return new Promise((resolve, reject) => {
    docClient.update(params, (err, data) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({
            code: err.code,
            message: err.message
          })
        });
      } else {
        resolve({ statusCode: 200, body: JSON.stringify(data) });
      }
    });
  });
};

module.exports = {
  put
};
