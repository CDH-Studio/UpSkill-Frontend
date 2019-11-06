"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "experiences",
        [
          {
            startDate: new Date(),
            endDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "experiences",
          [
            {
              id: "9060e28e-ffe4-11e9-8d71-362b9e155667",
              organizationEn: "Canada Revenue Agency",
              organizationFr: "Agence du revenu du Canada",
              jobTitleEn: "Financial Analyst",
              jobTitleFr: "Analyste Financier",
              descriptionEn:
                "Cancelled payments and monitored unauthorized purchases",
              descriptionFr:
                "Annuler des paiements et surveillés les achats non autorisés",
              startDate: new Date(),
              endDate: new Date(),
              createdAt: new Date(),
              updatedAt: new Date(),
              profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
            },
            {
              id: "2b7433a2-ffe5-11e9-8d71-362b9e155667",
              organizationEn: "Bank Of Canada",
              organizationFr: "Banque du Canada",
              jobTitleEn: "IT Project Manager",
              jobTitleFr: "Gestionnaire de projet TI",
              descriptionEn:
                "Delivered projects on time and communicated with clients",
              descriptionFr:
                "Livrer les project à temps et maintenir le contact avec les clients",
              startDate: new Date(),
              endDate: new Date(),
              createdAt: new Date(),
              updatedAt: new Date(),
              profileId: "6becd47a-ffe5-11e9-8d71-362b9e155667"
            }
          ],
          {}
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("experiences", null, {});
  }
};
