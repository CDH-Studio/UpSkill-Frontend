"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "talent_matrix_results",
      [
        {
          description_en: "Early Promise",
          description_fr: "Employé(e) Prometteur",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Exceptional Talent",
          description_fr: "Futur Dirigeant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Future Achiever",
          description_fr: "Futur Fonceur",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Growth Employee",
          description_fr: "Employé(e) en Croissance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Solid Contributor",
          description_fr: "Contributeur Important",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Solid Professional",
          description_fr: "Professionnel Solide",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Strong Performer",
          description_fr: "Employé(e) au Rendement Elevé",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Talent Risk",
          description_fr: "Talent à Risk",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Trusted Professional",
          description_fr: "Professionnel de confiance",
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
    return queryInterface.bulkDelete("talent_matrix_results", null, {});
  }
};
