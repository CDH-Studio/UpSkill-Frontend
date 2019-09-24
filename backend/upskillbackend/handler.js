"use strict";

const { Lambda } = require("aws-sdk");

const lambda = new Lambda({
  apiVersion: "2031",
  // endpoint needs to be set only if it deviates from the default, e.g. in a dev environment
  // process.env.SOME_VARIABLE could be set in e.g. serverless.yml for provider.environment or function.environment
  endpoint: "http://localhost:3000"
});

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
