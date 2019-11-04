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
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Exceptional Talent",
          description_fr: "Futur Dirigeant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Future Achiever",
          description_fr: "Futur Fonceur",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Growth Employee",
          description_fr: "Employé(e) en Croissance",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Solid Contributor",
          description_fr: "Contributeur Important",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Solid Professional",
          description_fr: "Professionnel Solide",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Strong Performer",
          description_fr: "Employé(e) au Rendement Elevé",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Talent Risk",
          description_fr: "Talent à Risk",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Trusted Professional",
          description_fr: "Professionnel de confiance",
          created_at: new Date(),
          updated_at: new Date()
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
