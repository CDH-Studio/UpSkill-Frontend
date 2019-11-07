"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "profileProjects",
      [
        {
          id: "148b12da-0172-11ea-8d71-362b9e155667",
          description:
            "This project will develop a module offered to level 2 Undergraduate students and will seek to develop student’s skills in collaborative working and information literacy while still advancing their discipline knowledge.",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          id: "1d5c73b8-0172-11ea-8d71-362b9e155667",
          description:
            "This project will  focus on collaborative inquiry. Groups will negotiate a topic to investigate with the module leader",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          id: "bce579b6-0172-11ea-8d71-362b9e155667",
          description:
            "This project will  focus on collaborative inquiry. Groups will negotiate a topic to investigate with the module leader",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "6becd47a-ffe5-11e9-8d71-362b9e155667"
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
    return queryInterface.bulkDelete("profileProjects", null, {});
  }
};
