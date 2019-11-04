"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("userSkills", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "users", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
      },
      skillId: {
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
    return queryInterface.dropTable("userSkills");
  }
};
