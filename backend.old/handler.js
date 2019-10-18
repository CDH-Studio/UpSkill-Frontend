"use strict";

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Welcome to UpSkill test. Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.testfunction = async event => {
  return {
    statusCode: 404,
    body: JSON.stringify(
      {
        message: "resource not found",
        input: event
      },
      null,
      2
    )
  };
};
