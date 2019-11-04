"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "security_clearances",
      [
        {
          description_en: "Reliability",
          description_fr: "Cote de fiabilité",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Secret",
          description_fr: "Secret",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Top Secret",
          description_fr: "Très Secret",
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
    return queryInterface.bulkDelete("security_clearances", null, {});
  }
};
