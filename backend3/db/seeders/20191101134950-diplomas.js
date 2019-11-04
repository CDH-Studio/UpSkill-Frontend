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
          description_fr: "Master of Science - Agri. Econ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in International Trade",
          description_fr: "Diploma in International Trade",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Applied Arts",
          description_fr: "Diploma in Applied Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science-Specialist",
          description_fr: "Bachelor of Science-Specialist",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied GIS",
          description_fr: "Bachelor of Applied GIS",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Advertising Arts",
          description_fr: "Diploma in Advertising Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Agro-economics",
          description_fr: "Bachelor of Agro-economics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Rural Economy",
          description_fr: "Master of Rural Economy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science -Rural Studi",
          description_fr: "Master of Science -Rural Studi",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science -Int.Develop",
          description_fr: "Master of Science -Int.Develop",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachlor of Arts -Int.Develop",
          description_fr: "Bachlor of Arts -Int.Develop",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Comp. Science",
          description_fr: "Diploma in Comp. Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Library & Info.Tech",
          description_fr: "Diploma in Library & Info.Tech",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Criminology",
          description_fr: "Diploma in Criminology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science (Honours)",
          description_fr: "Bachelor of Science (Honours)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Systems Support",
          description_fr: "Diploma in Systems Support",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Agriculture",
          description_fr: "Diploma in Agriculture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science - Neurology",
          description_fr: "Master of Science - Neurology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Science - Biology",
          description_fr: "Master of Science - Biology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diplôme- 2 cycle-adminstration",
          description_fr: "Diplôme- 2 cycle-adminstration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Food Science & Techno",
          description_fr: "Bachelor Food Science & Techno",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.communicat.engineer. techn",
          description_fr: "Dip.communicat.engineer. techn",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.inform.systems.technology",
          description_fr: "Dip.inform.systems.technology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "master sc.geog.information sys",
          description_fr: "master sc.geog.information sys",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "administrative assist diploma",
          description_fr: "administrative assist diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor, commun. human relat.",
          description_fr: "Bachelor, commun. human relat.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.Medical Laboratory Techn.",
          description_fr: "Dip.Medical Laboratory Techn.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor agriculture economics",
          description_fr: "Doctor agriculture economics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "TESOL diploma",
          description_fr: "TESOL diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Horticulture",
          description_fr: "Diploma in Horticulture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip.Applied Science Technology",
          description_fr: "Dip.Applied Science Technology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master in Agroforestry",
          description_fr: "Master in Agroforestry",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip. Computer Sup. Spec. & IT",
          description_fr: "Dip. Computer Sup. Spec. & IT",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Entomology",
          description_fr: "Doctor of Entomology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Financial Assistant Diploma",
          description_fr: "Financial Assistant Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Honours Diploma",
          description_fr: "Honours Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science Microbiology",
          description_fr: "Bachelor Science Microbiology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Economics",
          description_fr: "Bachelor of Economics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Dip. Intl Development -2 cycle",
          description_fr: "Dip. Intl Development -2 cycle",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Stenography Certificat",
          description_fr: "College Stenography Certificat",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate in",
          description_fr: "Associate in",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Arts",
          description_fr: "Associate of Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Applied Science",
          description_fr: "Associate of Applied Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Business Admin",
          description_fr: "Associate of Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Advanced Diploma-VetTechnology",
          description_fr: "Advanced Diploma-VetTechnology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Engineering",
          description_fr: "Associate of Engineering",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Associate of Science",
          description_fr: "Associate of Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts",
          description_fr: "Bachelor of Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied Arts",
          description_fr: "Bachelor of Applied Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Accounting",
          description_fr: "Bachelor of Accounting",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Appl ConservationEnfc",
          description_fr: "Bachelor Appl ConservationEnfc",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts Community",
          description_fr: "Bachelor of Arts Community",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Dramatic Arts",
          description_fr: "Bachelor of Dramatic Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Administration",
          description_fr: "Bachelor of Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts (Honours)",
          description_fr: "Bachelor of Arts (Honours)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Appl Justice Studies",
          description_fr: "Bachelor Appl Justice Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Applied Management",
          description_fr: "Bachelor Applied Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts-Recreation Ad",
          description_fr: "Bachelor of Arts-Recreation Ad",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Architecture",
          description_fr: "Bachelor of Architecture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts and Science",
          description_fr: "Bachelor of Arts and Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Applied Science",
          description_fr: "Bachelor of Applied Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Military Arts/Science",
          description_fr: "Bachelor Military Arts/Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Arts - Sociology",
          description_fr: "Bachelor of Arts - Sociology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Admin Studies",
          description_fr: "Bachelor of Admin Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Visual Arts",
          description_fr: "Bachelor of Visual Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Business Admin",
          description_fr: "Bachelor of Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Business Economics",
          description_fr: "Bachelor of Business Economics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Business Management",
          description_fr: "Bachelor Business Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Biblical Studies",
          description_fr: "Bachelor of Biblical Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor - Christian Education",
          description_fr: "Bachelor - Christian Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of commerce (Honours)",
          description_fr: "Bachelor of commerce (Honours)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Computer Info Syst",
          description_fr: "Bachelor of Computer Info Syst",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Civil Law",
          description_fr: "Bachelor of Civil Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Commerce",
          description_fr: "Bachelor of Commerce",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Community Rehab",
          description_fr: "Bachelor of Community Rehab",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Criminology",
          description_fr: "Bachelor of Criminology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Computer Science",
          description_fr: "Bachelor of Computer Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Design",
          description_fr: "Bachelor of Design",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Dental Science",
          description_fr: "Bachelor of Dental Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Engineering",
          description_fr: "Bachelor of Engineering",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Education afterDegree",
          description_fr: "Bachelor Education afterDegree",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Education",
          description_fr: "Bachelor of Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Environmental Design",
          description_fr: "Bachelor Environmental Design",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineering and Mngt",
          description_fr: "Bachelor Engineering and Mngt",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineer and Society",
          description_fr: "Bachelor Engineer and Society",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Physical Ed-Health",
          description_fr: "Bachelor of Physical Ed-Health",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Environmental Studies",
          description_fr: "Bachelor Environmental Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Engineering Science",
          description_fr: "Bachelor Engineering Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Exercise,  Sport Scien",
          description_fr: "Bachelor Exercise,  Sport Scien",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Fine Arts",
          description_fr: "Bachelor of Fine Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science Forestry",
          description_fr: "Bachelor of Science Forestry",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Food Science",
          description_fr: "Bachelor of Food Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of General Studies",
          description_fr: "Bachelor of General Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Home Economics",
          description_fr: "Bachelor of Home Economics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Ecology",
          description_fr: "Bachelor of Human Ecology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Justice",
          description_fr: "Bachelor of Human Justice",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Human Kinetics",
          description_fr: "Bachelor of Human Kinetics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Human Resources Devel",
          description_fr: "Bachelor Human Resources Devel",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Hotel, Resort Mgmt",
          description_fr: "Bachelor Hotel, Resort Mgmt",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science",
          description_fr: "Bachelor of Health Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science OT",
          description_fr: "Bachelor of Health Science OT",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Health Science PT",
          description_fr: "Bachelor of Health Science PT",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor - Applied Informatics",
          description_fr: "Bachelor - Applied Informatics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor InternationalBusiness",
          description_fr: "Bachelor InternationalBusiness",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Industrial Design",
          description_fr: "Bachelor of Industrial Design",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Interior Design",
          description_fr: "Bachelor of Interior Design",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Integrated Studies",
          description_fr: "Bachelor of Integrated Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Independent Studies",
          description_fr: "Bachelor Independent Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Indian Social Work",
          description_fr: "Bachelor Indian Social Work",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Information Systems",
          description_fr: "Bachelor Information Systems",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Journalism",
          description_fr: "Bachelor of Journalism",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Kinesiology",
          description_fr: "Bachelor of Kinesiology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Laws B.L.(L.)",
          description_fr: "Bachelor of Laws B.L.(L.)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Laboratory Technology",
          description_fr: "Bachelor Laboratory Technology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Leisure",
          description_fr: "Bachelor of Leisure",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Library Science",
          description_fr: "Bachelor of Library Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Musical Arts",
          description_fr: "Bachelor of Musical Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Math",
          description_fr: "Bachelor of Math",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Medicine",
          description_fr: "Bachelor of Medicine",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Management",
          description_fr: "Bachelor of Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Med Lab Science",
          description_fr: "Bachelor Med Lab Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Medical Rehab (OT)",
          description_fr: "Bachelor Medical Rehab (OT)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Medical Rehab (PT)",
          description_fr: "Bachelor Medical Rehab (PT)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Maritime Studies",
          description_fr: "Bachelor of Maritime Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Medical Science",
          description_fr: "Bachelor of Medical Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music Therapy",
          description_fr: "Bachelor of Music Therapy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music",
          description_fr: "Bachelor of Music",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Music Education",
          description_fr: "Bachelor of Music Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing Degree",
          description_fr: "Bachelor of Nursing Degree",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing (RN)",
          description_fr: "Bachelor of Nursing (RN)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Natural Resource Sci",
          description_fr: "Bachelor Natural Resource Sci",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Nursing Science",
          description_fr: "Bachelor of Nursing Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Office Management",
          description_fr: "Bachelor of Office Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Outdoor Recreation",
          description_fr: "Bachelor of Outdoor Recreation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Occupational Thera",
          description_fr: "Bachelor of Occupational Thera",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Public Administration",
          description_fr: "Bachelor Public Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Professional Arts",
          description_fr: "Bachelor Professional Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical Activity St.",
          description_fr: "Bachelor Physical Activity St.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical Education",
          description_fr: "Bachelor Physical Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Philosophy",
          description_fr: "Bachelor of Philosophy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Pharmacy",
          description_fr: "Bachelor of Pharmacy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Physical, Health Educ",
          description_fr: "Bachelor Physical, Health Educ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Public Relations",
          description_fr: "Bachelor of Public Relations",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Psychology",
          description_fr: "Bachelor of Psychology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Physical Therapy",
          description_fr: "Bachelor of Physical Therapy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Religious Studies",
          description_fr: "Bachelor of Religious Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Recreation",
          description_fr: "Bachelor of Recreation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation, Leisure",
          description_fr: "Bachelor Recreation, Leisure",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation Management",
          description_fr: "Bachelor Recreation Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Recreation Studies",
          description_fr: "Bachelor Recreation Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science",
          description_fr: "Bachelor of Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Agriculture",
          description_fr: "Bachelor Science - Agriculture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor ScienceAdministration",
          description_fr: "Bachelor ScienceAdministration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Agric Eng",
          description_fr: "Bachelor Science - Agric Eng",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Physical Ac",
          description_fr: "Bachelor Science - Physical Ac",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science -Architecture",
          description_fr: "Bachelor Science -Architecture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Dentistry",
          description_fr: "Bachelor Science - Dentistry",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Engineering",
          description_fr: "Bachelor Science - Engineering",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Environment",
          description_fr: "Bachelor Science - Environment",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Forest Eng.",
          description_fr: "Bachelor Science - Forest Eng.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Food Scienc",
          description_fr: "Bachelor Science - Food Scienc",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Human Ecolo",
          description_fr: "Bachelor Science - Human Ecolo",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Health Educ",
          description_fr: "Bachelor Science - Health Educ",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Human Nutri",
          description_fr: "Bachelor Science - Human Nutri",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Kinesiology",
          description_fr: "Bachelor Science - Kinesiology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Medicine",
          description_fr: "Bachelor Science - Medicine",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Mental Heal",
          description_fr: "Bachelor Science - Mental Heal",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nursing",
          description_fr: "Bachelor Science - Nursing",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nutrition",
          description_fr: "Bachelor Science - Nutrition",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Occupation",
          description_fr: "Bachelor Science - Occupation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Psychiatric",
          description_fr: "Bachelor Science - Psychiatric",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Physical Ther",
          description_fr: "Bachelor Science-Physical Ther",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Physiotherapy",
          description_fr: "Bachelor Science-Physiotherapy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Radiation",
          description_fr: "Bachelor Science - Radiation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science-Computer Scie",
          description_fr: "Bachelor Science-Computer Scie",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Education",
          description_fr: "Bachelor Science - Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Sci. Foreign Service",
          description_fr: "Bachelor Sci. Foreign Service",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Genetics",
          description_fr: "Bachelor Science - Genetics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Home Econom",
          description_fr: "Bachelor Science - Home Econom",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science (Honours)",
          description_fr: "Bachelor of Science (Honours)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Science - Law",
          description_fr: "Bachelor of Science - Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Languages",
          description_fr: "Bachelor Science - Languages",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Management",
          description_fr: "Bachelor Science - Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Nutritional",
          description_fr: "Bachelor Science - Nutritional",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Specialization",
          description_fr: "Bachelor of Specialization",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Special Education",
          description_fr: "Bachelor of Special Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Pharmacy",
          description_fr: "Bachelor Science - Pharmacy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Sciences",
          description_fr: "Bachelor of Social Sciences",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Service",
          description_fr: "Bachelor of Social Service",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Science - Technology",
          description_fr: "Bachelor Science - Technology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Social Work",
          description_fr: "Bachelor of Social Work",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Theology",
          description_fr: "Bachelor of Theology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Teaching",
          description_fr: "Bachelor of Teaching",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Tourism,  Hospitality",
          description_fr: "Bachelor Tourism,  Hospitality",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Technology Informatio",
          description_fr: "Bachelor Technology Informatio",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Technology Management",
          description_fr: "Bachelor Technology Management",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Translation",
          description_fr: "Bachelor of Translation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Technology",
          description_fr: "Bachelor of Technology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Veterinary Medicine",
          description_fr: "Bachelor Veterinary Medicine",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor Vocational Education",
          description_fr: "Bachelor Vocational Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Chartered Accountant",
          description_fr: "Chartered Accountant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Education Certificate",
          description_fr: "College Education Certificate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Undergraduate Certificate",
          description_fr: "Undergraduate Certificate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certif in Political Studies",
          description_fr: "Certif in Political Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certificate",
          description_fr: "Certificate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certificat Program",
          description_fr: "Certificat Program",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certified General Accountant",
          description_fr: "Certified General Accountant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "4-Yr College Applied Degree",
          description_fr: "4-Yr College Applied Degree",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Certif Management Accountant",
          description_fr: "Certif Management Accountant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Admin. Assistant",
          description_fr: "Diploma in Admin. Assistant",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Administration",
          description_fr: "Doctor of Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Architecture",
          description_fr: "Doctor of Architecture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Business Admin",
          description_fr: "Doctor of Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Business",
          description_fr: "Diploma in Business",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Chiropractic",
          description_fr: "Doctor in Chiropractic",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Civil Law",
          description_fr: "Doctor in Civil Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Canon Law",
          description_fr: "Doctor in Canon Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma Notary Science",
          description_fr: "Diploma Notary Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in Dental Surgery",
          description_fr: "Doctor in Dental Surgery",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Advanced Studies",
          description_fr: "Diploma in Advanced Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "College Education Diploma",
          description_fr: "College Education Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Engineering",
          description_fr: "Diploma in Engineering",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Social Studies",
          description_fr: "Diploma in Social Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Health Science",
          description_fr: "Doctor of Health Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma",
          description_fr: "Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Business Admin",
          description_fr: "Diploma in Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma of Comp. Eng. Tech.",
          description_fr: "Diploma of Comp. Eng. Tech.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Graduate Diploma",
          description_fr: "Graduate Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Undergraduate Diploma",
          description_fr: "Undergraduate Diploma",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Jurisprudence",
          description_fr: "Doctor of Jurisprudence",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Dental Medicine",
          description_fr: "Doctor of Dental Medicine",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Ministry",
          description_fr: "Doctor of Ministry",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Musical Arts",
          description_fr: "Doctor of Musical Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Music",
          description_fr: "Doctor of Music",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Arts",
          description_fr: "Doctor of Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Diploma in Public Admin",
          description_fr: "Diploma in Public Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Psychology",
          description_fr: "Doctor of Psychology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Social Science",
          description_fr: "Doctor of Social Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Social Work",
          description_fr: "Doctor of Social Work",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Theology",
          description_fr: "Doctor of Theology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Veterinary Medicine",
          description_fr: "Doctor of Veterinary Medicine",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Veterinary Science",
          description_fr: "Doctor of Veterinary Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Education",
          description_fr: "Doctor of Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Exec Master of Business Admin",
          description_fr: "Exec Master of Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Foreign Studies/Education",
          description_fr: "Foreign Studies/Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Graduate",
          description_fr: "High School Graduate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School One Year",
          description_fr: "High School One Year",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Two Years",
          description_fr: "High School Two Years",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Three Years",
          description_fr: "High School Three Years",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Four Years",
          description_fr: "High School Four Years",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "High School Five Years",
          description_fr: "High School Five Years",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Internat. Master Business Admi",
          description_fr: "Internat. Master Business Admi",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Juris Doctor",
          description_fr: "Juris Doctor",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor in the Science of Law",
          description_fr: "Doctor in the Science of Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Canon Law",
          description_fr: "Licentiate in Canon Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licencié ès lettres",
          description_fr: "Licencié ès lettres",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate",
          description_fr: "Licentiate",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Bachelor of Laws LL.B.",
          description_fr: "Bachelor of Laws LL.B.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Doctor of Laws",
          description_fr: "Doctor of Laws",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate of Laws",
          description_fr: "Licentiate of Laws",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Laws",
          description_fr: "Master of Laws",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Music",
          description_fr: "Licentiate in Music",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Philosophy",
          description_fr: "Licentiate in Philosophy",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Licentiate in Theology",
          description_fr: "Licentiate in Theology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Art Conservation",
          description_fr: "Master of Art Conservation",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Accounting",
          description_fr: "Master of Accounting",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Canon Law",
          description_fr: "Master of Arts - Canon Law",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts",
          description_fr: "Master of Arts",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Adult Education",
          description_fr: "Master of Adult Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Administration",
          description_fr: "Master of Administration",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Education",
          description_fr: "Master of Arts - Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Applied Environmental",
          description_fr: "Master Applied Environmental",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Agriculture",
          description_fr: "Master of Agriculture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Human Ecology",
          description_fr: "Master of Arts - Human Ecology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts in Leadership",
          description_fr: "Master of Arts in Leadership",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Liberal Studies",
          description_fr: "Master Arts - Liberal Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Missiology",
          description_fr: "Master of Arts - Missiology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Pastoral Studies",
          description_fr: "Master Arts - Pastoral Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Political Sc.",
          description_fr: "Master of Arts - Political Sc.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Psychology",
          description_fr: "Master of Arts - Psychology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Architecture",
          description_fr: "Master of Architecture",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Admin Science",
          description_fr: "Master of Admin Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Advance Studies Archite",
          description_fr: "Master Advance Studies Archite",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Applied Science",
          description_fr: "Master of Applied Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts - Pastoral Science",
          description_fr: "Master Arts - Pastoral Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Applied Statistics",
          description_fr: "Master of Applied Statistics",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Advanced Lan Architect",
          description_fr: "Master Advanced Lan Architect",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Arts-School Psychology",
          description_fr: "Master Arts-School Psychology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Archival Studies",
          description_fr: "Master of Archival Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Teaching",
          description_fr: "Master of Arts - Teaching",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master land use pl./develop.",
          description_fr: "Master land use pl./develop.",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts - Theology",
          description_fr: "Master of Arts - Theology",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Arts War Studies",
          description_fr: "Master of Arts War Studies",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Business Admin",
          description_fr: "Master of Business Admin",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Library & Info Science",
          description_fr: "Master Library & Info Science",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Criminology (Applied)",
          description_fr: "Master Criminology (Applied)",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Civil Engineering",
          description_fr: "Master of Civil Engineering",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master Continuing Education",
          description_fr: "Master Continuing Education",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Counselling",
          description_fr: "Master of Counselling",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          description_en: "Master of Clinical Dentistry",
          description_fr: "Master of Clinical Dentistry",
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
