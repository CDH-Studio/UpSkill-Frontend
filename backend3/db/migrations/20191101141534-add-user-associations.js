"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn(
        "users", // name of Source model
        "tenure_id", // name of the key we're adding
        {
          type: Sequelize.UUID,
          references: {
            model: "tenures", // name of Target model
            key: "id" // key in Target model that we're referencing
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
        }
      )
      .then(() => {
        return queryInterface
          .addColumn(
            "users", // name of Source model
            "group_level_id", // name of the key we're adding
            {
              type: Sequelize.UUID,
              references: {
                model: "group_levels", // name of Target model
                key: "id" // key in Target model that we're referencing
              },
              onUpdate: "CASCADE",
              onDelete: "SET NULL"
            }
          )
          .then(() => {
            return queryInterface
              .addColumn(
                "users", // name of Source model
                "security_clearance_id", // name of the key we're adding
                {
                  type: Sequelize.UUID,
                  references: {
                    model: "security_clearances", // name of Target model
                    key: "id" // key in Target model that we're referencing
                  },
                  onUpdate: "CASCADE",
                  onDelete: "SET NULL"
                }
              )

              .then(() => {
                return queryInterface
                  .addColumn(
                    "users", // name of Source model
                    "career_mobility_id", // name of the key we're adding
                    {
                      type: Sequelize.UUID,
                      references: {
                        model: "career_mobilities", // name of Target model
                        key: "id" // key in Target model that we're referencing
                      },
                      onUpdate: "CASCADE",
                      onDelete: "SET NULL"
                    }
                  )
                  .then(() => {
                    return queryInterface
                      .addColumn(
                        "users", // name of Source model
                        "talent_matrix_result_id", // name of the key we're adding
                        {
                          type: Sequelize.UUID,
                          references: {
                            model: "talent_matrix_results", // name of Target model
                            key: "id" // key in Target model that we're referencing
                          },
                          onUpdate: "CASCADE",
                          onDelete: "SET NULL"
                        }
                      )
                      .then(() => {
                        return queryInterface
                          .addColumn(
                            "users", // name of Source model
                            "key_competency_id", // name of the key we're adding
                            {
                              type: Sequelize.UUID,
                              references: {
                                model: "key_competencies", // name of Target model
                                key: "id" // key in Target model that we're referencing
                              },
                              onUpdate: "CASCADE",
                              onDelete: "SET NULL"
                            }
                          )
                          .then(() => {
                            return queryInterface.addColumn(
                              "users", // name of Source model
                              "second_language_proficiency_id", // name of the key we're adding
                              {
                                type: Sequelize.UUID,
                                references: {
                                  model: "second_language_proficiencies", // name of Target model
                                  key: "id" // key in Target model that we're referencing
                                },
                                onUpdate: "CASCADE",
                                onDelete: "SET NULL"
                              }
                            );
                          });
                      });
                  });
              });
          });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn(
        "users", // name of Source model
        "tenure_id" // key we want to remove
      )
      .then(() => {
        return queryInterface
          .removeColumn(
            "users", // name of Source model
            "group_level_id" // key we want to remove
          )
          .then(() => {
            return queryInterface
              .removeColumn(
                "users", // name of Source model
                "security_clearance_id" // key we want to remove
              )
              .then(() => {
                return queryInterface
                  .removeColumn(
                    "users", // name of Source model
                    "career_mobility_id" // key we want to remove
                  )
                  .then(() => {
                    return queryInterface
                      .removeColumn(
                        "users", // name of Source model
                        "talent_matrix_result_id" // key we want to remove
                      )
                      .then(() => {
                        return queryInterface
                          .removeColumn(
                            "users", // name of Source model
                            "key_competency_id" // key we want to remove
                          )
                          .then(() => {
                            return queryInterface.removeColumn(
                              "users", // name of Source model
                              "second_language_proficiency_id" // key we want to remove
                            );
                          });
                      });
                  });
              });
          });
      });
  }
};
