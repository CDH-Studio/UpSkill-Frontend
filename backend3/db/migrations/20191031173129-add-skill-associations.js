"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_skills", {
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      skill_id: {
        type: Sequelize.UUID,
        primaryKey: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("user_skills");
  }
};
