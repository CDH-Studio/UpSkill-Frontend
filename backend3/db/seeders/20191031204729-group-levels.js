"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert(
      "group_levels",
      [
        {
          description: "AS   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AS   07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "AU   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CA   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CA   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CA   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CM   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CM   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CO   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CO   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CO   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CO   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CR   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CR   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CR   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CR   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CS   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CS   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CS   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CS   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "CS   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC   08",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC  07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EC  07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EDEDS02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EG   07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EL   08",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "ENENG06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EX   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EX   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EX   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EX   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "EX   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "FI   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "FI   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "FI   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "FI   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "FI   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLCOI12",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLEIM10",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLEIM12",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLMAM10",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLMAN06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLMAN09",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLMDO06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLPCF06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLPIP09",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLPIP10",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLPIP12",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLPRW06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLWOW09",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GLWOW10",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSMPS04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSMPS06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSPRC05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSSTS03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSSTS04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSSTS05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSSTS06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GSSTS07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GT   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GT   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GT   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GT   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GT   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "GX   00",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "HP   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "HP   08",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "IS   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "LS   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "LS   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "LS   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "LS   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "MM   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "MM   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "MM   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "OM   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "OM   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PC   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PC   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PE   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PG   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PM   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PROFO02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "PY   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SEREM01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SEREM02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES01",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SERES05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "SGPAT08",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "STOCE03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "STSCY02",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "STSCY03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "STSCY04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   03",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   04",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   05",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   06",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   07",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   08",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description: "TI   08",
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
    return queryInterface.bulkDelete("group_levels", null, {});
  }
};
