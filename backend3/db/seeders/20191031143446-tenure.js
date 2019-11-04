"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "tenures",
        [
          {
            descriptionEn: "Acting",
            descriptionFr: "Par intérim",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Assignment",
            descriptionFr: "Affectation",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Deployment",
            descriptionFr: "Mutations",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Indeterminate",
            descriptionFr: "Indeterminée",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Secondment",
            descriptionFr: "Détachement",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Student",
            descriptionFr: "Étudiant",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Casual",
            descriptionFr: "Travailleur occasionnel",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Term",
            descriptionFr: "Terme",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "tenures",
          [
            {
              id: "725c6d40-ddc3-4a55-bdf5-f85155091acd",
              descriptionEn: "testtenure1",
              descriptionFr: "testtenureee1",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: "e79756f5-ad53-4bad-a03c-22e8f8bf05de",
              descriptionEn: "testtenure2",
              descriptionFr: "testtenureee2",
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
    */
    return queryInterface.bulkDelete("tenures", null, {});
  }
};
