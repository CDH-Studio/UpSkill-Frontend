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
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Administration - Financial ",
          description_fr: " Administration des finances",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Administration - Human Resources ",
          description_fr: " Administration des ressources humaines",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - Abilities ",
          description_fr: " Élaboration d'applications - Capacités",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - Interfaces  /  Standards ",
          description_fr: " Élaboration d'applications - Interfaces / Normes",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - Methodologies ",
          description_fr: " Élaboration d'applications - Méthodologies",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - QA & Testing Abilities ",
          description_fr:
            " Élaboration d'applications - Capacités en matière d'AQ et d'essais",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - Techniques ",
          description_fr: " Élaboration d'applications -Techniques",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Application Development - Tools ",
          description_fr: " Élaboration d'applications - Outils",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Applications - Business Intelligence ",
          description_fr: " Applications - Informatique décisionnelle",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Applications - Enterprise ",
          description_fr: " Applications - Entreprise",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Applications - Miscellaneous ",
          description_fr: " Applications - Divers",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Applications - PC ",
          description_fr: " Applications - Ordinateur personnel",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Certifications ",
          description_fr: "Attestations",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Content Management & Collaboration - Specialties ",
          description_fr: " Gestion de contenu et collaboration - Spécialités",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Data Management Abilities ",
          description_fr: " Capacités en matière de gestion de données",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "DBMS - Technologies ",
          description_fr: " SGBD - Technologies",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "DBMS ",
          description_fr: " SGBD",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Desktop Tools (Usability)  ",
          description_fr:
            " Outils de travail électronique de bureau (utilisabilité)",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "GIS/Administation ",
          description_fr: " SGI/Administration",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Hardware ",
          description_fr: " Matériel",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Help Authoring & Electronic Documentation Tools ",
          description_fr:
            " Outils de création d'aide et de documentation électronique",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Information Technology Specialty ",
          description_fr: " Spécialité des technologies de l'information",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Management Abilities - Business Management ",
          description_fr:
            " Capacités en matière de gestion - Gestion d'entreprise",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Network ",
          description_fr: " Réseau ",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Operating Systems ",
          description_fr: " Systèmes d'exploitation ",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Programming Languages ",
          description_fr: " Langages de programmation",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "IT Security ",
          description_fr: " Sécurité TI",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Systems Administration Abilities ",
          description_fr: " Capacités en matière d'administration de systèmes",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Systems Management Utilities ",
          description_fr: " Utilitaires de gestion de systèmes",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Technical Communications ",
          description_fr: " Communications techniques",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Web - Application & Messaging Servers ",
          description_fr: " Web - Serveurs d'applications et de messagerie",
          create_at: "",
          updated_at: ""
        },
        {
          description_en: "Web - Design & Development ",
          description_fr: " Web - Conception et développement",
          create_at: "",
          updated_at: ""
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
