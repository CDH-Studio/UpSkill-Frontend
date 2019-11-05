"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "securityClearances",
        [
          {
            descriptionEn: "Reliability",
            descriptionFr: "Cote de fiabilité",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Secret",
            descriptionFr: "Secret",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Top Secret",
            descriptionFr: "Très Secret",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "securityClearances",
          [
            {
              id: "82c3a9cc-ff44-11e9-aad5-362b9e155667",
              descriptionEn: "testSecurityClearanceEn1",
              descriptionFr: "testSecurityClearanceFr1",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: "882ef330-ff44-11e9-8f0b-362b9e155667",
              descriptionEn: "testSecurityClearanceEn2",
              descriptionFr: "testSecurityClearanceFr2",
              createdAt: new Date(),
              updatedAt: new Date()
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
    return queryInterface.bulkDelete("securityClearances", null, {});
  }
};
