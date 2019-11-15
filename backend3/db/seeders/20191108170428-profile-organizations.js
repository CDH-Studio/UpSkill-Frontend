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
          description_en: "Innovation, Science and Economic Development Canada",
          description_fr:
            "Innovation, Sciences et Développement économique Canada",
          tier: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
          description_fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE",
          tier: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Chief Information Office",
          description_fr: "Bureau de l'information en chef",
          tier: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Digital Services Division",
          description_fr: "Division des services numériques",
          tier: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Business Line Solutions Directorate",
          description_fr: "Direction des solutions métiers",
          tier: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Innovation, Science and Economic Development Canada",
          description_fr:
            "Innovation, Sciences et Développement économique Canada",
          tier: "0",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
          description_fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE",
          tier: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Chief Information Office",
          description_fr: "Bureau de l'information en chef",
          tier: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Digital Services Division",
          description_fr: "Division des services numériques",
          tier: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
          profileId: "faba08aa-ffe3-11e9-8d71-362b9e155667"
        },
        {
          description_en: "Director General's Office",
          description_fr: "Bureau du directeur général",
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
