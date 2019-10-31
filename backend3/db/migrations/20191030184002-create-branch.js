"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("branches", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v1()")
      },
      description: {
        type: Sequelize.STRING
      },
      acronym_en: {
        type: Sequelize.STRING
      },
      acronym_fr: {
        type: Sequelize.STRING
      },
      description_en: {
        type: Sequelize.STRING
      },
      description_fr: {
        type: Sequelize.STRING
      },
      address_en: {
        type: Sequelize.STRING
      },
      address_fr: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable("branches");
  }
};
