"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v1()")
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      manager: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      first_language: {
        type: Sequelize.STRING
      },
      second_language: {
        type: Sequelize.STRING
      },
      year_service: {
        type: Sequelize.INTEGER
      },
      linkedin: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("users");
  }
};
