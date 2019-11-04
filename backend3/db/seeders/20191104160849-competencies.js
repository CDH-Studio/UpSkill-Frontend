"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "compentencies",
      [
        {
          description_en: "Thinking things through",
          description_fr: "Réflexion approfondie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Achieve results",
          description_fr: "Obtenir des résultats",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Humor",
          description_fr: "Sens de l'humour",
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

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("compentencies", null, {});
  }
};
