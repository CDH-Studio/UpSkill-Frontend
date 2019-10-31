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
          description_fr: "Promesse précoce",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Exceptional Talent",
          description_fr: "Talent exceptionnel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Future Achiever",
          description_fr: "Futur réalisateur",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Growth Employee",
          description_fr: "Employé de croissance",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Solid Contributor",
          description_fr: "Contributeur solide",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Solid Professional",
          description_fr: "Solide professionnel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Strong Performer",
          description_fr: "Fort performant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Talent Risk",
          description_fr: "Risque de Talent",
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
