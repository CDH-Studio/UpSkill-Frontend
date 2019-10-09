const get = require('./get').get;
const post = require('./post').post;
const put = require('./put').put;

const requestTypeToModelMap = {
  get,
  post,
  put
};

async function collectResponseObject(requestType, params) {
  let responseObject;
  try {
    responseObject = await requestTypeToModelMap[requestType](params);
  } catch (err) {
    responseObject = err;
  }

  return responseObject;
}

module.exports = async (requestType, params) => {
  return await collectResponseObject(requestType, params);
};
