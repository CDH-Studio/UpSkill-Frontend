"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "profileOrganizations",
      [
        {
          organization: "Innovation, Science and Economic Development Canada",
          tier: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "DIGITAL TRANSFORMATION SERVICE SECTOR",
          tier: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Chief Information Office",
          tier: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Digital Services Division",
          tier: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Business Line Solutions Directorate",
          tier: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Innovation, Science and Economic Development Canada",
          tier: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "DIGITAL TRANSFORMATION SERVICE SECTOR",
          tier: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Chief Information Office",
          tier: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Digital Services Division",
          tier: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          organization: "Director General's Office",
          tier: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("profileOrganizations", null, {});
  }
};
