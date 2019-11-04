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
        primaryKey: true,
        references: {
          model: "users", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
      },
      skill_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "skills", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("user_skills");
  }
};
