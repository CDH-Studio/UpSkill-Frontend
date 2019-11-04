"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("experiences", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v1()")
      },
      organizationEn: {
        type: Sequelize.STRING
      },
      organizationFr: {
        type: Sequelize.STRING
      },
      jobTitleEn: {
        type: Sequelize.STRING
      },
      jobTitleFr: {
        type: Sequelize.STRING
      },
      descriptionEn: {
        type: Sequelize.STRING
      },
      descriptionFr: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
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
    return queryInterface.dropTable("experiences");
  }
};
