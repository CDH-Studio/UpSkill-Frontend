"use strict";
const axios = require("axios");

async function getEmployeeInfo(event) {
  const searchValue = event.pathParameters.searchValue;

  let info = await searchEmployee(searchValue).catch(err => {
    return {
      body: JSON.stringify({
        message: err,
        code: 429
      }),
      statusCode: 429
    };
  });
  if (info.statusCode == 429) {
    return {
      body: JSON.stringify({
        message: "Limit Exceeded",
        code: 429
      }),
      statusCode: 429
    };
  }
  const returnObject = {
    body: JSON.stringify({
      data: info,
      code: 200
    }),
    statusCode: 200
  };

  return returnObject;
}

async function searchEmployee(searchValue) {
  const url =
    "https://geds-sage-ssc-spc-apicast-staging.api.canada.ca/gapi/v2/employees?searchValue=" +
    encodeURI(searchValue) +
    "&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000";

  let info = [];

  await axios({
    methon: "get",
    url: url,
    headers: {
      Accept: "application/json",
      "user-key": "1d373575a287c2597f4525d0c26eae7d"
    }
  })
    .then(res => {
      console.log(res.data[0].organizationInformation.organization);
      for (let i = 0; i < res.data.length; i++) {
        const employee = res.data[i];
        let empInfo = {
          id: employee.id,
          givenName: employee.givenName,
          surname: employee.surname,
          title: employee.title,
          phoneNumber: employee.contactInformation.phoneNumber,
          email: employee.contactInformation.email,
          organizationId: employee.organizationInformation.organization.id
        };
        info.push(empInfo);
      }
    })
    .catch(err => {
      if (err.responce.status == 429) {
        return Promise.reject("Limits exceeded");
      }
      console.error(err);
    });
  // console.log("INFO: ~~~~~~~~~~~~~~~~~");

  // console.log(info);

  return info;
}

module.exports = {
  getEmployeeInfo
};
