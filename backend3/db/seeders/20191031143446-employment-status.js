"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "employment_statuses",
      [
        {
          description_en: "Acting",
          description_fr: "Interim",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Assignment",
          description_fr: "Affectation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Deployment",
          description_fr: "Deploiement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Indeterminate",
          description_fr: "Indeterminé",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Secondment",
          description_fr: "Detachement",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Student",
          description_fr: "Etudiant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Casual",
          description_fr: "Occasionnel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Term",
          description_fr: "Duree determinee",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_fr: "test",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("employment_statuses", null, {});
  }
};
