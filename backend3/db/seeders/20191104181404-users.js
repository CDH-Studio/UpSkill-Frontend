"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "Mary",
          last_name: "Smith",
          email: "mary.smith@canada.ca",
          job_title: "Manager",
          phone: "343-123-4567",
          mobile: "613-123-4567",
          location: "235 Queen Street, Ottawa, Canada",
          manager: "Chahine El Chaar",
          team: "CDH Studio",
          first_language: "Français",
          second_language: "English",
          year_service: "5",
          linkedin: "linkedinUrl",
          github: "githubUrl",
          created_at: new Date(),
          updated_at: new Date(),
          tenure_id: "b9e8b816-ff21-11e9-a94e-c4b301c89a89",
          group_level_id: "3d2c3866-ff21-11e9-804a-c4b301c89a89",
          security_clearance_id: "3d23433c-ff21-11e9-804a-c4b301c89a89",
          career_mobility_id: "3d23ff98-ff21-11e9-804a-c4b301c89a89",
          talent_matrix_id: "3d257346-ff21-11e9-804a-c4b301c89a89",
          key_competency_id: "3d26aa54-ff21-11e9-804a-c4b301c89a89",
          second_language_profiency_id: null
        },
        {
          first_name: "John",
          last_name: "Doe",
          email: "john.doe@canada.ca",
          job_title: "Manager",
          phone: "343-123-4567",
          mobile: "613-123-4567",
          location: "235 Queen Street, Ottawa, Canada",
          manager: "Chahine El Chaar",
          team: "CDH Studio",
          first_language: "Français",
          second_language: "English",
          year_service: "5",
          linkedin: "linkedinUrl",
          github: "githubUrl",
          created_at: new Date(),
          updated_at: new Date(),
          tenure_id: "b9e8b816-ff21-11e9-a94e-c4b301c89a89",
          group_level_id: "3d2c3866-ff21-11e9-804a-c4b301c89a89",
          security_clearance_id: "3d23433c-ff21-11e9-804a-c4b301c89a89",
          career_mobility_id: "3d23ff98-ff21-11e9-804a-c4b301c89a89",
          talent_matrix_id: "3d257346-ff21-11e9-804a-c4b301c89a89",
          key_competency_id: "3d26aa54-ff21-11e9-804a-c4b301c89a89",
          second_language_profiency_id: null
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  }
};
