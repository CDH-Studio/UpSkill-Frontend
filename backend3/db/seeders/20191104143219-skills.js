"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "skills",
      [
        {
          description_en: "Acquisition Abilities (Goods/Services) ",
          description_fr:
            " Capacités en matière d'acquisitions (biens et services) ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Administration - Financial ",
          description_fr: " Administration des finances",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Administration - Human Resources ",
          description_fr: " Administration des ressources humaines",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - Abilities ",
          description_fr: " Élaboration d'applications - Capacités",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - Interfaces  /  Standards ",
          description_fr: " Élaboration d'applications - Interfaces / Normes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - Methodologies ",
          description_fr: " Élaboration d'applications - Méthodologies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - QA & Testing Abilities ",
          description_fr:
            " Élaboration d'applications - Capacités en matière d'AQ et d'essais",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - Techniques ",
          description_fr: " Élaboration d'applications -Techniques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Application Development - Tools ",
          description_fr: " Élaboration d'applications - Outils",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Applications - Business Intelligence ",
          description_fr: " Applications - Informatique décisionnelle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Applications - Enterprise ",
          description_fr: " Applications - Entreprise",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Applications - Miscellaneous ",
          description_fr: " Applications - Divers",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Applications - PC ",
          description_fr: " Applications - Ordinateur personnel",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certifications ",
          description_fr: "Attestations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Content Management & Collaboration - Specialties ",
          description_fr: " Gestion de contenu et collaboration - Spécialités",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Data Management Abilities ",
          description_fr: " Capacités en matière de gestion de données",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DBMS - Technologies ",
          description_fr: " SGBD - Technologies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "DBMS ",
          description_fr: " SGBD",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Desktop Tools (Usability)  ",
          description_fr:
            " Outils de travail électronique de bureau (utilisabilité)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "GIS/Administation ",
          description_fr: " SGI/Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Hardware ",
          description_fr: " Matériel",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Help Authoring & Electronic Documentation Tools ",
          description_fr:
            " Outils de création d'aide et de documentation électronique",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Information Technology Specialty ",
          description_fr: " Spécialité des technologies de l'information",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Management Abilities - Business Management ",
          description_fr:
            " Capacités en matière de gestion - Gestion d'entreprise",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Network ",
          description_fr: " Réseau ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Operating Systems ",
          description_fr: " Systèmes d'exploitation ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Programming Languages ",
          description_fr: " Langages de programmation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "IT Security ",
          description_fr: " Sécurité TI",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Administration Abilities ",
          description_fr: " Capacités en matière d'administration de systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Systems Management Utilities ",
          description_fr: " Utilitaires de gestion de systèmes",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Technical Communications ",
          description_fr: " Communications techniques",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web - Application & Messaging Servers ",
          description_fr: " Web - Serveurs d'applications et de messagerie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Web - Design & Development ",
          description_fr: " Web - Conception et développement",
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
    return queryInterface.bulkDelete("skills", null, {});
  }
};