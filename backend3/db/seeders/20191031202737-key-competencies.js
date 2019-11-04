"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkInsert(
        "keyCompetencies",
        [
          {
            descriptionEn: "Achieve results",
            descriptionFr: "Obtenir des résultats",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Collaborate with partners and stakeholders",
            descriptionFr:
              "Collaborer avec les partenaires et les intervenants",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Create vision and strategy",
            descriptionFr: "Créer une vision et une stratégie",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Uphold integrity and respect",
            descriptionFr: "Préserver l'intégrité et le respect",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Mobilize people",
            descriptionFr: "Mobiliser des personnes",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            descriptionEn: "Promote innovation and guide change",
            descriptionFr: "Promouvoir l'innovation et orienter le changement",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )
      .then(() => {
        return queryInterface.bulkInsert(
          "keyCompetencies",
          [
            {
              id: "f2341c22-ff46-11e9-8f0b-362b9e155667",
              description_en: "testKeyCompetencyEn1",
              description_fr: "testKeyCompetencyFr1",
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              id: "ff60e5f6-ff46-11e9-8f0b-362b9e155667",
              description_en: "testKeyCompetencyEn2",
              description_fr: "testKeyCompetencyFr2",
              createdAt: new Date(),
              updatedAt: new Date()
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
    */
    return queryInterface.bulkDelete("keyCompetencies", null, {});
  }
};
