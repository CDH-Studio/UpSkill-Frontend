"use strict";
const axios = require("axios");

async function getEmployeeInfo(request, response) {
  // const searchValue = decodeURI(event.pathParameters.searchValue);
  let searchValue = request.params.searchValue;
  let info = await searchEmployee(searchValue, response).catch(err => {
    response.status(500).send(err);
  });

  if (info.length == 0) response.status(204).send("No results found");

  response.status(200).json(info);
}

async function searchEmployee(searchValue, response) {
  const url =
    "https://geds-sage-ssc-spc-apicast-production.api.canada.ca/gapi/v2/employees?searchValue=" +
    encodeURI(searchValue) +
    "&searchField=9&searchCriterion=2&searchScope=sub&searchFilter=2&maxEntries=1000";

  let info = [];

  await axios({
    methon: "get",
    url: url,
    headers: {
      "user-key": "1d373575a287c2597f4525d0c26eae7d",
      Accept: "application/json"
    }
  })
    .then(res => {
      res.data.forEach(employee => {
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
      });
    })
    .catch(err => {
      console.error(err);
      if (err.response.status == 429) {
        response.status(429).send("Limit Exceeded!");
      }
    });

  return info;
}

module.exports = {
  getEmployeeInfo
};
