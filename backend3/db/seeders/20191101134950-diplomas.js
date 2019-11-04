"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "diplomas",
      [
        {
          description_en: "Master of Science - Agri. Econ",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in International Trade",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Applied Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science-Specialist",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied GIS",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Advertising Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Agro-economics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Rural Economy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science -Rural Studi",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science -Int.Develop",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachlor of Arts -Int.Develop",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Comp. Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Library & Info.Tech",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Criminology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science (Honours)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Systems Support",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Agriculture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science - Neurology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science - Biology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diplôme- 2 cycle-adminstration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Food Science & Techno",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.communicat.engineer. techn",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.inform.systems.technology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "master sc.geog.information sys",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "administrative assist diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor, commun. human relat.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.Medical Laboratory Techn.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor agriculture economics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TESOL diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Horticulture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.Applied Science Technology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master in Agroforestry",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip. Computer Sup. Spec. & IT",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Entomology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Financial Assistant Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Honours Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science Microbiology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Economics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip. Intl Development -2 cycle",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Stenography Certificat",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate in",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Applied Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Advanced Diploma-VetTechnology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Engineering",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Accounting",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Appl ConservationEnfc",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts Community",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Dramatic Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Administration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts (Honours)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Appl Justice Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Applied Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts-Recreation Ad",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Architecture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts and Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Military Arts/Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts - Sociology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Admin Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Visual Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Business Economics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Business Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Biblical Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor - Christian Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of commerce (Honours)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Computer Info Syst",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Civil Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Commerce",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Community Rehab",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Criminology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Computer Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Design",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Dental Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Engineering",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Education afterDegree",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Environmental Design",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineering and Mngt",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineer and Society",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Physical Ed-Health",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Environmental Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineering Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Exercise,  Sport Scien",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Fine Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science Forestry",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Food Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of General Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Home Economics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Ecology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Justice",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Kinetics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Human Resources Devel",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Hotel, Resort Mgmt",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science OT",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science PT",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor - Applied Informatics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor InternationalBusiness",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Industrial Design",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Interior Design",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Integrated Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Independent Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Indian Social Work",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Information Systems",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Journalism",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Kinesiology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Laws B.L.(L.)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Laboratory Technology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Leisure",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Library Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Musical Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Math",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Medicine",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Med Lab Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Medical Rehab (OT)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Medical Rehab (PT)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Maritime Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Medical Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music Therapy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing Degree",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing (RN)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Natural Resource Sci",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Office Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Outdoor Recreation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Occupational Thera",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Public Administration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Professional Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical Activity St.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Philosophy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Pharmacy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical, Health Educ",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Public Relations",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Psychology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Physical Therapy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Religious Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Recreation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation, Leisure",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Agriculture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor ScienceAdministration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Agric Eng",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Physical Ac",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science -Architecture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Dentistry",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Engineering",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Environment",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Forest Eng.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Food Scienc",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Human Ecolo",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Health Educ",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Human Nutri",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Kinesiology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Medicine",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Mental Heal",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nursing",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nutrition",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Occupation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Psychiatric",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Physical Ther",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Physiotherapy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Radiation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Computer Scie",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Sci. Foreign Service",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Genetics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Home Econom",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science (Honours)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science - Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Languages",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nutritional",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Specialization",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Special Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Pharmacy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Sciences",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Service",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Technology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Work",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Theology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Teaching",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Tourism,  Hospitality",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Technology Informatio",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Technology Management",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Translation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Technology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Veterinary Medicine",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Vocational Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Chartered Accountant",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Education Certificate",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Undergraduate Certificate",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certif in Political Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certificate",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certificat Program",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certified General Accountant",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "4-Yr College Applied Degree",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certif Management Accountant",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Admin. Assistant",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Administration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Architecture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Business",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Chiropractic",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Civil Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Canon Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma Notary Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Dental Surgery",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Advanced Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Education Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Engineering",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Social Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Health Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma of Comp. Eng. Tech.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Graduate Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Undergraduate Diploma",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Jurisprudence",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Dental Medicine",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Ministry",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Musical Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Music",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Public Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Psychology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Social Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Social Work",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Theology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Veterinary Medicine",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Veterinary Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Exec Master of Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Foreign Studies/Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Graduate",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School One Year",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Two Years",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Three Years",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Four Years",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Five Years",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Internat. Master Business Admi",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Juris Doctor",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in the Science of Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Canon Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licencié ès lettres",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Laws LL.B.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Laws",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate of Laws",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Laws",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Music",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Philosophy",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Theology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Art Conservation",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Accounting",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Canon Law",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Adult Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Administration",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Applied Environmental",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Agriculture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Human Ecology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts in Leadership",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Liberal Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Missiology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Pastoral Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Political Sc.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Psychology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Architecture",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Admin Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Advance Studies Archite",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Applied Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Pastoral Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Applied Statistics",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Advanced Lan Architect",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts-School Psychology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Archival Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Teaching",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master land use pl./develop.",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Theology",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts War Studies",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Business Admin",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Library & Info Science",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Criminology (Applied)",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Civil Engineering",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Continuing Education",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Counselling",
          description_fr: "",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Clinical Dentistry",
          description_fr: "",
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
    return queryInterface.bulkDelete("diplomas", null, {});
  }
};
