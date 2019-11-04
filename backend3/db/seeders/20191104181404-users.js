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
          updated_at: new Date()
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
          updated_at: new Date()
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
