"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("career_journeys", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: UUIDV1
      },
      organization_en: {
        type: Sequelize.STRING
      },
      organization_fr: {
        type: Sequelize.STRING
      },
      job_title_en: {
        type: Sequelize.STRING
      },
      job_title_fr: {
        type: Sequelize.STRING
      },
      description_en: {
        type: Sequelize.STRING
      },
      description_fr: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
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
    return queryInterface.dropTable("career_journeys");
  }
};
