"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("user_competencies", {
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
        competency_id: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: "competencies", // name of Target model
            key: "id" // key in Target model that we're referencing
          }
        }
      })
      .then(() => {
        return queryInterface.createTable("user_development_goals", {
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
          competency_id: {
            type: Sequelize.UUID,
            primaryKey: true,
            references: {
              model: "competencies", // name of Target model
              key: "id" // key in Target model that we're referencing
            }
          }
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("user_competencies").then(() => {
      return queryInterface.dropTable("user_development_goals");
    });
  }
};
