"use strict";
const axios = require("axios");

async function getEmployeeInfo(event) {
  const searchValue = decodeURI(event.pathParameters.searchValue);

  let info = await searchEmployee(searchValue).catch(err => {
    return {
      body: JSON.stringify({
        message: err,
        code: 500
      }),
      statusCode: 500
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

  if (info.length == 0) {
    return {
      body: JSON.stringify({
        message: "No results found",
        code: 204
      }),
      statusCode: 204
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
      for (let i = 0; i < res.data.length; i++) {
        const employee = res.data[i];

        let currentBranch = employee;
        let organization = [];
        while (currentBranch.organizationInformation != null) {
          let branchInfo = {
            organizationId:
              currentBranch.organizationInformation.organization.id,
            organization: {
              addressInformation:
                currentBranch.organizationInformation.organization
                  .addressInformation,
              description:
                currentBranch.organizationInformation.organization.description
            }
          };
          organization.push(branchInfo);
          currentBranch = currentBranch.organizationInformation.organization;
        }
        organization = organization.reverse();

        let empInfo = {
          id: employee.id,
          givenName: employee.givenName,
          surname: employee.surname,
          title: employee.title,
          phoneNumber: employee.contactInformation.phoneNumber,
          email: employee.contactInformation.email,
          organization: organization
        };
        info.push(empInfo);
      }
    })
    .catch(err => {
      console.error(err);
      if (err.responce.status == 429) {
        return Promise.reject("Limits exceeded");
      }
    });

  return info;
}

module.exports = {
  getEmployeeInfo
};
