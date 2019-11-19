"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "talentMatrixResults",
        [
          {
            descriptionEn: "Early promise",
            descriptionFr: "Employé(e) prometteur",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Exceptional talent",
            descriptionFr: "Futur dirigeant",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Future Achiever",
            descriptionFr: "Futur Fonceur",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Growth Employee",
            descriptionFr: "Employé(e) en Croissance",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Solid Contributor",
            descriptionFr: "Contributeur Important",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Solid Professional",
            descriptionFr: "Professionnel Solide",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Strong Performer",
            descriptionFr: "Employé(e) au Rendement Elevé",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Talent Risk",
            descriptionFr: "Talent à Risk",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Trusted Professional",
            descriptionFr: "Professionnel de confiance",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "talentMatrixResults",
          [
            {
              id: "ddc02520-ff45-11e9-8f0b-362b9e155667",
              descriptionEn: "Trusted Professional",
              descriptionFr: "Professionnel de confiance",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
              descriptionEn: "Exceptional talent",
              descriptionFr: "Futur dirigeant",
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
    return queryInterface.bulkDelete("talentMatrixResults", null, {});
  }
};
