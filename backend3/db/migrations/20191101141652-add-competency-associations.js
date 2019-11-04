"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("userCompetencies", {
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
        competencyId: {
          type: Sequelize.UUID,
          primaryKey: true,
          references: {
            model: "competencies", // name of Target model
            key: "id" // key in Target model that we're referencing
          }
        }
      })
      .then(() => {
        return queryInterface.createTable("userDevelopmentGoals", {
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
          competencyId: {
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
    return queryInterface.dropTable("userCompetencies").then(() => {
      return queryInterface.dropTable("userDevelopmentGoals");
    });
  }
};
