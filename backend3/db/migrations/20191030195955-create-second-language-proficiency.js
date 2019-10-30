"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("second_language_proficiencies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1()
      },
      reading_proficiency: {
        type: Sequelize.STRING
      },
      writing_proficiency: {
        type: Sequelize.STRING
      },
      oral_proficiency: {
        type: Sequelize.STRING
      },
      reading_date: {
        type: Sequelize.DATE
      },
      writing_date: {
        type: Sequelize.DATE
      },
      oral_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("second_language_proficiencies");
  }
};
