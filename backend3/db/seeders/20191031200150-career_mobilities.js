"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "career_mobilities",
      [
        {
          description_en: "Fit",
          description_fr: "Bien placé dans son poste",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Move to more suitable role",
          description_fr: "Transfert vers un rôle plus approprié",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Develop in role",
          description_fr: "Se perfectionner dans son rôle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Well-placed in role",
          description_fr: "Bien placé dans le rôle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Ready for lateral movement",
          description_fr: "Prêt pour un mouvement latéral",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description_en: "Ready for advancement",
          description_fr: "Prêt à être promu",
          createdAt: new Date(),
          updatedAt: new Date()
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
    return queryInterface.bulkDelete("career_mobilities", null, {});
  }
};
