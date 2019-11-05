"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "users",
        [
          {
            firstName: "Mary",
            lastName: "Smith",
            email: "mary.smith@canada.ca",
            jobTitle: "Manager",
            phone: "343-123-4567",
            mobile: "613-123-4567",
            location: "235 Queen Street, Ottawa, Canada",
            manager: "Chahine El Chaar",
            team: "CDH Studio",
            firstLanguage: "Français",
            secondLanguage: "English",
            yearService: "5",
            linkedin: "linkedinUrl",
            github: "githubUrl",
            createdAt: new Date(),
            updatedAt: new Date(),
            tenureId: "725c6d40-ddc3-4a55-bdf5-f85155091acd",
            groupLevelId: "71b7b0a2-ff43-11e9-8f0b-362b9e155667",
            securityClearanceId: "82c3a9cc-ff44-11e9-aad5-362b9e155667",
            careerMobilityId: "e6ff04cc-ff44-11e9-aad5-362b9e155667",
            talentMatrixResultId: "ddc02520-ff45-11e9-8f0b-362b9e155667",
            keyCompetencyId: "f2341c22-ff46-11e9-8f0b-362b9e155667",
            secondLanguageProficiencyId: "91485e4c-ffdb-11e9-8d71-362b9e155667"
          },
          {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@canada.ca",
            jobTitle: "Manager",
            phone: "343-123-4567",
            mobile: "613-123-4567",
            location: "235 Queen Street, Ottawa, Canada",
            manager: "Chahine El Chaar",
            team: "CDH Studio",
            firstLanguage: "Français",
            secondLanguage: "English",
            yearService: "5",
            linkedin: "linkedinUrl",
            github: "githubUrl",
            createdAt: new Date(),
            updatedAt: new Date(),
            tenureId: "e79756f5-ad53-4bad-a03c-22e8f8bf05de",
            groupLevelId: "a3975faa-ff43-11e9-8f0b-362b9e155667",
            securityClearanceId: "882ef330-ff44-11e9-8f0b-362b9e155667",
            careerMobilityId: "ed78c3ba-ff44-11e9-8f0b-362b9e155667",
            talentMatrixResultId: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
            keyCompetencyId: "ff60e5f6-ff46-11e9-8f0b-362b9e155667",
            secondLanguageProficiencyId: "a34e38b4-ffdb-11e9-8d71-362b9e155667"
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "users",
          [
            {
              id: "faba08aa-ffe3-11e9-8d71-362b9e155667",
              firstName: "Mary",
              lastName: "Smith",
              email: "mary.smith@canada.ca",
              jobTitle: "Manager",
              phone: "343-123-4567",
              mobile: "613-123-4567",
              location: "235 Queen Street, Ottawa, Canada",
              manager: "Chahine El Chaar",
              team: "CDH Studio",
              firstLanguage: "Français",
              secondLanguage: "English",
              yearService: "23",
              linkedin: "linkedinUrl",
              github: "githubUrl",
              createdAt: new Date(),
              updatedAt: new Date(),
              tenureId: "725c6d40-ddc3-4a55-bdf5-f85155091acd",
              groupLevelId: "a3975faa-ff43-11e9-8f0b-362b9e155667",
              securityClearanceId: "882ef330-ff44-11e9-8f0b-362b9e155667",
              careerMobilityId: "ed78c3ba-ff44-11e9-8f0b-362b9e155667",
              talentMatrixResultId: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
              keyCompetencyId: "ff60e5f6-ff46-11e9-8f0b-362b9e155667",
              secondLanguageProficiencyId:
                "a34e38b4-ffdb-11e9-8d71-362b9e155667"
            },
            {
              id: "6becd47a-ffe5-11e9-8d71-362b9e155667",
              firstName: "Trevor",
              lastName: "Bivi",
              email: "trevor.bivi@canada.ca",
              jobTitle: "HR Director",
              phone: "343-123-4567",
              mobile: "613-123-4567",
              location: "235 Queen Street, Ottawa, Canada",
              manager: "Mena Machado",
              team: "CDH Studio",
              firstLanguage: "English",
              secondLanguage: "Français",
              yearService: "20",
              linkedin: "linkedinUrl",
              github: "githubUrl",
              createdAt: new Date(),
              updatedAt: new Date(),
              tenureId: "e79756f5-ad53-4bad-a03c-22e8f8bf05de",
              groupLevelId: "a3975faa-ff43-11e9-8f0b-362b9e155667",
              securityClearanceId: "882ef330-ff44-11e9-8f0b-362b9e155667",
              careerMobilityId: "ed78c3ba-ff44-11e9-8f0b-362b9e155667",
              talentMatrixResultId: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
              keyCompetencyId: "ff60e5f6-ff46-11e9-8f0b-362b9e155667",
              secondLanguageProficiencyId:
                "a34e38b4-ffdb-11e9-8d71-362b9e155667"
            }
          ],
          {}
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
