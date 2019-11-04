"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "key_competencies",
      [
        {
          description_en: "Achieve results",
          description_fr: "Obtenir des résultats",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Collaborate with partners and stakeholders",
          description_fr: "Collaborer avec les partenaires et les intervenants",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Create vision and strategy",
          description_fr: "Créer une vision et une stratégie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Uphold integrity and respect",
          description_fr: "Préserver l'intégrité et le respect",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Mobilize people",
          description_fr: "Mobiliser des personnes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Promote innovation and guide change",
          description_fr: "Promouvoir l'innovation et orienter le changement",
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
    */
    return queryInterface.bulkDelete("key_competencies", null, {});
  }
};
