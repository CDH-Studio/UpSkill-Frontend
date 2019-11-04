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
          descriptionEn: "Master of Science - Agri. Econ",
          descriptionFr: "Master of Science - Agri. Econ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in International Trade",
          descriptionFr: "Diploma in International Trade",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Applied Arts",
          descriptionFr: "Diploma in Applied Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science-Specialist",
          descriptionFr: "Bachelor of Science-Specialist",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Applied GIS",
          descriptionFr: "Bachelor of Applied GIS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Advertising Arts",
          descriptionFr: "Diploma in Advertising Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Agro-economics",
          descriptionFr: "Bachelor of Agro-economics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Rural Economy",
          descriptionFr: "Master of Rural Economy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Science -Rural Studi",
          descriptionFr: "Master of Science -Rural Studi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Science -Int.Develop",
          descriptionFr: "Master of Science -Int.Develop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachlor of Arts -Int.Develop",
          descriptionFr: "Bachlor of Arts -Int.Develop",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Comp. Science",
          descriptionFr: "Diploma in Comp. Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Library & Info.Tech",
          descriptionFr: "Diploma in Library & Info.Tech",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Criminology",
          descriptionFr: "Diploma in Criminology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science (Honours)",
          descriptionFr: "Bachelor of Science (Honours)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Systems Support",
          descriptionFr: "Diploma in Systems Support",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Agriculture",
          descriptionFr: "Diploma in Agriculture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Science - Neurology",
          descriptionFr: "Master of Science - Neurology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Science - Biology",
          descriptionFr: "Master of Science - Biology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diplôme- 2 cycle-adminstration",
          descriptionFr: "Diplôme- 2 cycle-adminstration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Food Science & Techno",
          descriptionFr: "Bachelor Food Science & Techno",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip.communicat.engineer. techn",
          descriptionFr: "Dip.communicat.engineer. techn",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip.inform.systems.technology",
          descriptionFr: "Dip.inform.systems.technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "master sc.geog.information sys",
          descriptionFr: "master sc.geog.information sys",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "administrative assist diploma",
          descriptionFr: "administrative assist diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor, commun. human relat.",
          descriptionFr: "Bachelor, commun. human relat.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip.Medical Laboratory Techn.",
          descriptionFr: "Dip.Medical Laboratory Techn.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor agriculture economics",
          descriptionFr: "Doctor agriculture economics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "TESOL diploma",
          descriptionFr: "TESOL diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Horticulture",
          descriptionFr: "Diploma in Horticulture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip.Applied Science Technology",
          descriptionFr: "Dip.Applied Science Technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master in Agroforestry",
          descriptionFr: "Master in Agroforestry",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip. Computer Sup. Spec. & IT",
          descriptionFr: "Dip. Computer Sup. Spec. & IT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Entomology",
          descriptionFr: "Doctor of Entomology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Financial Assistant Diploma",
          descriptionFr: "Financial Assistant Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Honours Diploma",
          descriptionFr: "Honours Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science Microbiology",
          descriptionFr: "Bachelor Science Microbiology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Economics",
          descriptionFr: "Bachelor of Economics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Dip. Intl Development -2 cycle",
          descriptionFr: "Dip. Intl Development -2 cycle",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "College Stenography Certificat",
          descriptionFr: "College Stenography Certificat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate in",
          descriptionFr: "Associate in",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate of Arts",
          descriptionFr: "Associate of Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate of Applied Science",
          descriptionFr: "Associate of Applied Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate of Business Admin",
          descriptionFr: "Associate of Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Advanced Diploma-VetTechnology",
          descriptionFr: "Advanced Diploma-VetTechnology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate of Engineering",
          descriptionFr: "Associate of Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Associate of Science",
          descriptionFr: "Associate of Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts",
          descriptionFr: "Bachelor of Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Applied Arts",
          descriptionFr: "Bachelor of Applied Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Accounting",
          descriptionFr: "Bachelor of Accounting",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Appl ConservationEnfc",
          descriptionFr: "Bachelor Appl ConservationEnfc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts Community",
          descriptionFr: "Bachelor of Arts Community",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Dramatic Arts",
          descriptionFr: "Bachelor of Dramatic Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Administration",
          descriptionFr: "Bachelor of Administration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts (Honours)",
          descriptionFr: "Bachelor of Arts (Honours)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Appl Justice Studies",
          descriptionFr: "Bachelor Appl Justice Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Applied Management",
          descriptionFr: "Bachelor Applied Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts-Recreation Ad",
          descriptionFr: "Bachelor of Arts-Recreation Ad",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Architecture",
          descriptionFr: "Bachelor of Architecture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts and Science",
          descriptionFr: "Bachelor of Arts and Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Applied Science",
          descriptionFr: "Bachelor of Applied Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Military Arts/Science",
          descriptionFr: "Bachelor Military Arts/Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Arts - Sociology",
          descriptionFr: "Bachelor of Arts - Sociology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Admin Studies",
          descriptionFr: "Bachelor of Admin Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Visual Arts",
          descriptionFr: "Bachelor of Visual Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Business Admin",
          descriptionFr: "Bachelor of Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Business Economics",
          descriptionFr: "Bachelor of Business Economics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Business Management",
          descriptionFr: "Bachelor Business Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Biblical Studies",
          descriptionFr: "Bachelor of Biblical Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor - Christian Education",
          descriptionFr: "Bachelor - Christian Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of commerce (Honours)",
          descriptionFr: "Bachelor of commerce (Honours)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Computer Info Syst",
          descriptionFr: "Bachelor of Computer Info Syst",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Civil Law",
          descriptionFr: "Bachelor of Civil Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Commerce",
          descriptionFr: "Bachelor of Commerce",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Community Rehab",
          descriptionFr: "Bachelor of Community Rehab",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Criminology",
          descriptionFr: "Bachelor of Criminology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Computer Science",
          descriptionFr: "Bachelor of Computer Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Design",
          descriptionFr: "Bachelor of Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Dental Science",
          descriptionFr: "Bachelor of Dental Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Engineering",
          descriptionFr: "Bachelor of Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Education afterDegree",
          descriptionFr: "Bachelor Education afterDegree",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Education",
          descriptionFr: "Bachelor of Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Environmental Design",
          descriptionFr: "Bachelor Environmental Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Engineering and Mngt",
          descriptionFr: "Bachelor Engineering and Mngt",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Engineer and Society",
          descriptionFr: "Bachelor Engineer and Society",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Physical Ed-Health",
          descriptionFr: "Bachelor of Physical Ed-Health",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Environmental Studies",
          descriptionFr: "Bachelor Environmental Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Engineering Science",
          descriptionFr: "Bachelor Engineering Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Exercise,  Sport Scien",
          descriptionFr: "Bachelor Exercise,  Sport Scien",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Fine Arts",
          descriptionFr: "Bachelor of Fine Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science Forestry",
          descriptionFr: "Bachelor of Science Forestry",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Food Science",
          descriptionFr: "Bachelor of Food Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of General Studies",
          descriptionFr: "Bachelor of General Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Home Economics",
          descriptionFr: "Bachelor of Home Economics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Human Ecology",
          descriptionFr: "Bachelor of Human Ecology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Human Justice",
          descriptionFr: "Bachelor of Human Justice",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Human Kinetics",
          descriptionFr: "Bachelor of Human Kinetics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Human Resources Devel",
          descriptionFr: "Bachelor Human Resources Devel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Hotel, Resort Mgmt",
          descriptionFr: "Bachelor Hotel, Resort Mgmt",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Health Science",
          descriptionFr: "Bachelor of Health Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Health Science OT",
          descriptionFr: "Bachelor of Health Science OT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Health Science PT",
          descriptionFr: "Bachelor of Health Science PT",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor - Applied Informatics",
          descriptionFr: "Bachelor - Applied Informatics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor InternationalBusiness",
          descriptionFr: "Bachelor InternationalBusiness",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Industrial Design",
          descriptionFr: "Bachelor of Industrial Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Interior Design",
          descriptionFr: "Bachelor of Interior Design",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Integrated Studies",
          descriptionFr: "Bachelor of Integrated Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Independent Studies",
          descriptionFr: "Bachelor Independent Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Indian Social Work",
          descriptionFr: "Bachelor Indian Social Work",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Information Systems",
          descriptionFr: "Bachelor Information Systems",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Journalism",
          descriptionFr: "Bachelor of Journalism",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Kinesiology",
          descriptionFr: "Bachelor of Kinesiology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Laws B.L.(L.)",
          descriptionFr: "Bachelor of Laws B.L.(L.)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Laboratory Technology",
          descriptionFr: "Bachelor Laboratory Technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Leisure",
          descriptionFr: "Bachelor of Leisure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Library Science",
          descriptionFr: "Bachelor of Library Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Musical Arts",
          descriptionFr: "Bachelor of Musical Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Math",
          descriptionFr: "Bachelor of Math",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Medicine",
          descriptionFr: "Bachelor of Medicine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Management",
          descriptionFr: "Bachelor of Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Med Lab Science",
          descriptionFr: "Bachelor Med Lab Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Medical Rehab (OT)",
          descriptionFr: "Bachelor Medical Rehab (OT)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Medical Rehab (PT)",
          descriptionFr: "Bachelor Medical Rehab (PT)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Maritime Studies",
          descriptionFr: "Bachelor of Maritime Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Medical Science",
          descriptionFr: "Bachelor of Medical Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Music Therapy",
          descriptionFr: "Bachelor of Music Therapy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Music",
          descriptionFr: "Bachelor of Music",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Music Education",
          descriptionFr: "Bachelor of Music Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Nursing Degree",
          descriptionFr: "Bachelor of Nursing Degree",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Nursing (RN)",
          descriptionFr: "Bachelor of Nursing (RN)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Natural Resource Sci",
          descriptionFr: "Bachelor Natural Resource Sci",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Nursing Science",
          descriptionFr: "Bachelor of Nursing Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Office Management",
          descriptionFr: "Bachelor of Office Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Outdoor Recreation",
          descriptionFr: "Bachelor of Outdoor Recreation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Occupational Thera",
          descriptionFr: "Bachelor of Occupational Thera",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Public Administration",
          descriptionFr: "Bachelor Public Administration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Professional Arts",
          descriptionFr: "Bachelor Professional Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Physical Activity St.",
          descriptionFr: "Bachelor Physical Activity St.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Physical Education",
          descriptionFr: "Bachelor Physical Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Philosophy",
          descriptionFr: "Bachelor of Philosophy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Pharmacy",
          descriptionFr: "Bachelor of Pharmacy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Physical, Health Educ",
          descriptionFr: "Bachelor Physical, Health Educ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Public Relations",
          descriptionFr: "Bachelor of Public Relations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Psychology",
          descriptionFr: "Bachelor of Psychology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Physical Therapy",
          descriptionFr: "Bachelor of Physical Therapy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Religious Studies",
          descriptionFr: "Bachelor of Religious Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Recreation",
          descriptionFr: "Bachelor of Recreation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Recreation, Leisure",
          descriptionFr: "Bachelor Recreation, Leisure",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Recreation Management",
          descriptionFr: "Bachelor Recreation Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Recreation Studies",
          descriptionFr: "Bachelor Recreation Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science",
          descriptionFr: "Bachelor of Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Agriculture",
          descriptionFr: "Bachelor Science - Agriculture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor ScienceAdministration",
          descriptionFr: "Bachelor ScienceAdministration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Agric Eng",
          descriptionFr: "Bachelor Science - Agric Eng",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Physical Ac",
          descriptionFr: "Bachelor Science - Physical Ac",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science -Architecture",
          descriptionFr: "Bachelor Science -Architecture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Dentistry",
          descriptionFr: "Bachelor Science - Dentistry",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Engineering",
          descriptionFr: "Bachelor Science - Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Environment",
          descriptionFr: "Bachelor Science - Environment",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Forest Eng.",
          descriptionFr: "Bachelor Science - Forest Eng.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Food Scienc",
          descriptionFr: "Bachelor Science - Food Scienc",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Human Ecolo",
          descriptionFr: "Bachelor Science - Human Ecolo",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Health Educ",
          descriptionFr: "Bachelor Science - Health Educ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Human Nutri",
          descriptionFr: "Bachelor Science - Human Nutri",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Kinesiology",
          descriptionFr: "Bachelor Science - Kinesiology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Medicine",
          descriptionFr: "Bachelor Science - Medicine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Mental Heal",
          descriptionFr: "Bachelor Science - Mental Heal",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Nursing",
          descriptionFr: "Bachelor Science - Nursing",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Nutrition",
          descriptionFr: "Bachelor Science - Nutrition",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Occupation",
          descriptionFr: "Bachelor Science - Occupation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Psychiatric",
          descriptionFr: "Bachelor Science - Psychiatric",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science-Physical Ther",
          descriptionFr: "Bachelor Science-Physical Ther",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science-Physiotherapy",
          descriptionFr: "Bachelor Science-Physiotherapy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Radiation",
          descriptionFr: "Bachelor Science - Radiation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science-Computer Scie",
          descriptionFr: "Bachelor Science-Computer Scie",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Education",
          descriptionFr: "Bachelor Science - Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Sci. Foreign Service",
          descriptionFr: "Bachelor Sci. Foreign Service",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Genetics",
          descriptionFr: "Bachelor Science - Genetics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Home Econom",
          descriptionFr: "Bachelor Science - Home Econom",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science (Honours)",
          descriptionFr: "Bachelor of Science (Honours)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Science - Law",
          descriptionFr: "Bachelor of Science - Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Languages",
          descriptionFr: "Bachelor Science - Languages",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Management",
          descriptionFr: "Bachelor Science - Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Nutritional",
          descriptionFr: "Bachelor Science - Nutritional",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Specialization",
          descriptionFr: "Bachelor of Specialization",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Special Education",
          descriptionFr: "Bachelor of Special Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Pharmacy",
          descriptionFr: "Bachelor Science - Pharmacy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Social Sciences",
          descriptionFr: "Bachelor of Social Sciences",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Social Service",
          descriptionFr: "Bachelor of Social Service",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Science - Technology",
          descriptionFr: "Bachelor Science - Technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Social Work",
          descriptionFr: "Bachelor of Social Work",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Theology",
          descriptionFr: "Bachelor of Theology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Teaching",
          descriptionFr: "Bachelor of Teaching",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Tourism,  Hospitality",
          descriptionFr: "Bachelor Tourism,  Hospitality",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Technology Informatio",
          descriptionFr: "Bachelor Technology Informatio",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Technology Management",
          descriptionFr: "Bachelor Technology Management",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Translation",
          descriptionFr: "Bachelor of Translation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Technology",
          descriptionFr: "Bachelor of Technology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Veterinary Medicine",
          descriptionFr: "Bachelor Veterinary Medicine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor Vocational Education",
          descriptionFr: "Bachelor Vocational Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Chartered Accountant",
          descriptionFr: "Chartered Accountant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "College Education Certificate",
          descriptionFr: "College Education Certificate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Undergraduate Certificate",
          descriptionFr: "Undergraduate Certificate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Certif in Political Studies",
          descriptionFr: "Certif in Political Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Certificate",
          descriptionFr: "Certificate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Certificat Program",
          descriptionFr: "Certificat Program",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Certified General Accountant",
          descriptionFr: "Certified General Accountant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "4-Yr College Applied Degree",
          descriptionFr: "4-Yr College Applied Degree",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Certif Management Accountant",
          descriptionFr: "Certif Management Accountant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Admin. Assistant",
          descriptionFr: "Diploma in Admin. Assistant",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Administration",
          descriptionFr: "Doctor of Administration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Architecture",
          descriptionFr: "Doctor of Architecture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Business Admin",
          descriptionFr: "Doctor of Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Business",
          descriptionFr: "Diploma in Business",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor in Chiropractic",
          descriptionFr: "Doctor in Chiropractic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor in Civil Law",
          descriptionFr: "Doctor in Civil Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor in Canon Law",
          descriptionFr: "Doctor in Canon Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma Notary Science",
          descriptionFr: "Diploma Notary Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor in Dental Surgery",
          descriptionFr: "Doctor in Dental Surgery",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Advanced Studies",
          descriptionFr: "Diploma in Advanced Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "College Education Diploma",
          descriptionFr: "College Education Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Engineering",
          descriptionFr: "Diploma in Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Social Studies",
          descriptionFr: "Diploma in Social Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Health Science",
          descriptionFr: "Doctor of Health Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma",
          descriptionFr: "Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Business Admin",
          descriptionFr: "Diploma in Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma of Comp. Eng. Tech.",
          descriptionFr: "Diploma of Comp. Eng. Tech.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Graduate Diploma",
          descriptionFr: "Graduate Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Undergraduate Diploma",
          descriptionFr: "Undergraduate Diploma",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Jurisprudence",
          descriptionFr: "Doctor of Jurisprudence",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Dental Medicine",
          descriptionFr: "Doctor of Dental Medicine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Ministry",
          descriptionFr: "Doctor of Ministry",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Musical Arts",
          descriptionFr: "Doctor of Musical Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Music",
          descriptionFr: "Doctor of Music",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Arts",
          descriptionFr: "Doctor of Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Diploma in Public Admin",
          descriptionFr: "Diploma in Public Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Psychology",
          descriptionFr: "Doctor of Psychology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Social Science",
          descriptionFr: "Doctor of Social Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Social Work",
          descriptionFr: "Doctor of Social Work",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Theology",
          descriptionFr: "Doctor of Theology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Veterinary Medicine",
          descriptionFr: "Doctor of Veterinary Medicine",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Veterinary Science",
          descriptionFr: "Doctor of Veterinary Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Education",
          descriptionFr: "Doctor of Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Exec Master of Business Admin",
          descriptionFr: "Exec Master of Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Foreign Studies/Education",
          descriptionFr: "Foreign Studies/Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School Graduate",
          descriptionFr: "High School Graduate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School One Year",
          descriptionFr: "High School One Year",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School Two Years",
          descriptionFr: "High School Two Years",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School Three Years",
          descriptionFr: "High School Three Years",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School Four Years",
          descriptionFr: "High School Four Years",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "High School Five Years",
          descriptionFr: "High School Five Years",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Internat. Master Business Admi",
          descriptionFr: "Internat. Master Business Admi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Juris Doctor",
          descriptionFr: "Juris Doctor",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor in the Science of Law",
          descriptionFr: "Doctor in the Science of Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate in Canon Law",
          descriptionFr: "Licentiate in Canon Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licencié ès lettres",
          descriptionFr: "Licencié ès lettres",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate",
          descriptionFr: "Licentiate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Bachelor of Laws LL.B.",
          descriptionFr: "Bachelor of Laws LL.B.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Doctor of Laws",
          descriptionFr: "Doctor of Laws",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate of Laws",
          descriptionFr: "Licentiate of Laws",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Laws",
          descriptionFr: "Master of Laws",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate in Music",
          descriptionFr: "Licentiate in Music",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate in Philosophy",
          descriptionFr: "Licentiate in Philosophy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Licentiate in Theology",
          descriptionFr: "Licentiate in Theology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Art Conservation",
          descriptionFr: "Master of Art Conservation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Accounting",
          descriptionFr: "Master of Accounting",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Canon Law",
          descriptionFr: "Master of Arts - Canon Law",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts",
          descriptionFr: "Master of Arts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Adult Education",
          descriptionFr: "Master of Adult Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Administration",
          descriptionFr: "Master of Administration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Education",
          descriptionFr: "Master of Arts - Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Applied Environmental",
          descriptionFr: "Master Applied Environmental",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Agriculture",
          descriptionFr: "Master of Agriculture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Human Ecology",
          descriptionFr: "Master of Arts - Human Ecology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts in Leadership",
          descriptionFr: "Master of Arts in Leadership",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Arts - Liberal Studies",
          descriptionFr: "Master Arts - Liberal Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Missiology",
          descriptionFr: "Master of Arts - Missiology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Arts - Pastoral Studies",
          descriptionFr: "Master Arts - Pastoral Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Political Sc.",
          descriptionFr: "Master of Arts - Political Sc.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Psychology",
          descriptionFr: "Master of Arts - Psychology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Architecture",
          descriptionFr: "Master of Architecture",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Admin Science",
          descriptionFr: "Master of Admin Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Advance Studies Archite",
          descriptionFr: "Master Advance Studies Archite",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Applied Science",
          descriptionFr: "Master of Applied Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Arts - Pastoral Science",
          descriptionFr: "Master Arts - Pastoral Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Applied Statistics",
          descriptionFr: "Master of Applied Statistics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Advanced Lan Architect",
          descriptionFr: "Master Advanced Lan Architect",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Arts-School Psychology",
          descriptionFr: "Master Arts-School Psychology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Archival Studies",
          descriptionFr: "Master of Archival Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Teaching",
          descriptionFr: "Master of Arts - Teaching",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master land use pl./develop.",
          descriptionFr: "Master land use pl./develop.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts - Theology",
          descriptionFr: "Master of Arts - Theology",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Arts War Studies",
          descriptionFr: "Master of Arts War Studies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Business Admin",
          descriptionFr: "Master of Business Admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Library & Info Science",
          descriptionFr: "Master Library & Info Science",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Criminology (Applied)",
          descriptionFr: "Master Criminology (Applied)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Civil Engineering",
          descriptionFr: "Master of Civil Engineering",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master Continuing Education",
          descriptionFr: "Master Continuing Education",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Counselling",
          descriptionFr: "Master of Counselling",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descriptionEn: "Master of Clinical Dentistry",
          descriptionFr: "Master of Clinical Dentistry",
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
    return queryInterface.bulkDelete("diplomas", null, {});
  }
};
