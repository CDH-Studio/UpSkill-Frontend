"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("organizations", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v1()")
      },

      department: {
        type: Sequelize.STRING
      },
      sector: {
        type: Sequelize.STRING
      },
      branch: {
        type: Sequelize.STRING
      },
      division: {
        type: Sequelize.STRING
      },
      directorate: {
        type: Sequelize.STRING
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      current: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("organizations");
  }
};
