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
          description_en: "Reliability",
          description_fr: "Fiabilité",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Secret",
          description_fr: "Secret",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Top Secret",
          description_fr: "Top Secret",
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

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
