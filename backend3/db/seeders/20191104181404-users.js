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
          firstName: "Mary",
          lastName: "Smith",
          email: "mary.smith@canada.ca",
          jobTitle: "Manager",
          phone: "343-123-4567",
          mobile: "613-123-4567",
          location: "235 Queen Street, Ottawa, Canada",
          manager: "Chahine El Chaar",
          team: "CDH Studio",
          firstLanguage: "Français",
          secondLanguage: "English",
          yearService: "5",
          linkedin: "linkedinUrl",
          github: "githubUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
          tenureId: "725c6d40-ddc3-4a55-bdf5-f85155091acd"
        },
        {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@canada.ca",
          jobTitle: "Manager",
          phone: "343-123-4567",
          mobile: "613-123-4567",
          location: "235 Queen Street, Ottawa, Canada",
          manager: "Chahine El Chaar",
          team: "CDH Studio",
          firstLanguage: "Français",
          secondLanguage: "English",
          yearService: "5",
          linkedin: "linkedinUrl",
          github: "githubUrl",
          createdAt: new Date(),
          updatedAt: new Date(),
          tenureId: "e79756f5-ad53-4bad-a03c-22e8f8bf05de"
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
