fullProfile = {};

emptyProfile = {
  acting: {
    id: null,
    description: null
  },
  actingPeriodStartDate: null,
  actingPeriodEndDate: null,
  branch: {
    en: "Chief Information Office",
    fr: "Bureau principal de l'information"
  },
  careerMobility: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  careerSummary: [],
  competencies: [],
  developmentalGoals: [],
  education: [],
  email: "trevor.bivi@canada.ca",
  exFeeder: null,
  firstLanguage: null,
  firstName: "Trevor",
  githubUrl: null,
  gradedOnSecondLanguage: true,
  classification: {
    id: null,
    description: null
  },
  jobTitle: {
    en: null,
    fr: null
  },
  lastName: "Bivi",
  linkedinUrl: null,
  location: {
    id: "5c1e12d4-0cab-11ea-b2e6-0be81a7858f8",
    description: {
      en: "235 Queen St, Ottawa, Ontario",
      fr: "235 rue Queen, Ottawa, Ontario"
    }
  },
  manager: null,
  cellphone: null,
  organizationList: [
    {
      en: "Business Line Solutions Directorate",
      fr: "Direction des solutions des lignes d'affaires"
    },
    {
      en: "Digital Services Division",
      fr: "Division des services numériques"
    },
    {
      en: "Chief Information Office",
      fr: "Bureau principal de l'information"
    },
    {
      en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      fr: "SECTEUR DU SERVICE DE TRANSFORMATION NUMÉRIQUE"
    },
    {
      en: "Innovation, Science and Economic Development Canada",
      fr: "Innovation, Sciences et Développement économique Canada"
    }
  ],
  secondaryOralDate: null,
  secondaryOralProficiency: null,
  secondaryReadingDate: null,
  secondaryReadingProficiency: null,
  secondaryWritingDate: null,
  secondaryWritingProficiency: null,
  secondLanguage: null,
  security: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  skills: [],
  temporaryRole: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  talentMatrixResult: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  team: null,
  telephone: null,
  twitterUrl: null,
  yearsOfService: null,
  projects: []
};

responses = {};

responses["getCareerMobility"] = {
  data: [
    {
      id: "5b96a7e0-0cab-11ea-ae04-ebaa941dab4c",
      description: { en: "Fit", fr: "Bien placé dans son poste" }
    },
    {
      id: "5b971cac-0cab-11ea-ae05-17a21fea23e4",
      description: {
        en: "Move to more suitable role",
        fr: "Transfert vers un rôle plus approprié"
      }
    },
    {
      id: "5b971cad-0cab-11ea-ae06-5b3a9be4d115",
      description: {
        en: "Develop in role",
        fr: "Se perfectionner dans son rôle"
      }
    },
    {
      id: "5b97439e-0cab-11ea-ae07-f39c903e4f07",
      description: { en: "Well-placed in role", fr: "Bien placé dans le rôle" }
    },
    {
      id: "5b976a90-0cab-11ea-ae08-77f7f4f5df3d",
      description: {
        en: "Ready for lateral movement",
        fr: "Prêt pour un mouvement latéral"
      }
    },
    {
      id: "5b976a91-0cab-11ea-ae09-af866a681f5e",
      description: { en: "Ready for advancement", fr: "Prêt à être promu" }
    }
  ]
};

responses["getCompetency"] = {
  data: [
    {
      id: "5c2475ca-0cab-11ea-b317-13f44f9d6b19",
      description: {
        en: "Thinking things through",
        fr: "Réflexion approfondie"
      }
    },
    {
      id: "5c24eaa0-0cab-11ea-b318-d709b854ecf1",
      description: { en: "Achieve results", fr: "Obtenir des résultats" }
    },
    {
      id: "3a57095e-0174-11ea-8d71-362b9e155667",
      description: { en: "Humor", fr: "Sens de l'humour" }
    }
  ]
};

responses["getDiploma"] = {
  data: [
    {
      id: "5bb823d4-0cab-11ea-aebe-1f95d5b12de5",
      description: {
        en: "Master of Science - Agri. Econ",
        fr: "Maîtrise en Science-Agri. Econ"
      }
    },
    {
      id: "5bb87082-0cab-11ea-aebf-e7a1dff2dce8",
      description: {
        en: "Diploma in International Trade",
        fr: "Diplôme commerce international"
      }
    },
    {
      id: "5bb89792-0cab-11ea-aec0-ab6af6cf091e",
      description: {
        en: "Diploma in Applied Arts",
        fr: "Diplôme en arts appliquées"
      }
    },
    {
      id: "5bb89793-0cab-11ea-aec1-a374583cbe1e",
      description: {
        en: "Bachelor of Science-Specialist",
        fr: "Bacc. en Sc. - (spécialiste)"
      }
    },
    {
      id: "5bb8bea2-0cab-11ea-aec2-5b4ea96059e2",
      description: {
        en: "Bachelor of Applied GIS",
        fr: "Bacc. en sys. info. géographiq"
      }
    },
    {
      id: "5bb8e56c-0cab-11ea-aec3-bb5065b0974b",
      description: {
        en: "Diploma in Advertising Arts",
        fr: "Diplôme en art publicitaire"
      }
    },
    {
      id: "5bb90c90-0cab-11ea-aec4-6fd4fcc06a8a",
      description: {
        en: "Bachelor of Agro-economics",
        fr: "Bacc. en agro-écomomie"
      }
    },
    {
      id: "5bb934d6-0cab-11ea-aec5-4b011a40e6b9",
      description: {
        en: "Master of Rural Economy",
        fr: "Maîtr. en économie rurale"
      }
    },
    {
      id: "5bb934d7-0cab-11ea-aec6-fbad64bd7beb",
      description: {
        en: "Master of Science -Rural Studi",
        fr: "Maîtr. science-études rurales"
      }
    },
    {
      id: "5bb95bdc-0cab-11ea-aec7-b71adb1600ae",
      description: {
        en: "Master of Science -Int.Develop",
        fr: "Maîtr. science - dév. internat"
      }
    },
    {
      id: "5bb95bdd-0cab-11ea-aec8-b75e7d357075",
      description: {
        en: "Bachlor of Arts -Int.Develop",
        fr: "Bacc. en études dév. internati"
      }
    },
    {
      id: "5bb982b0-0cab-11ea-aec9-730f2b9434a4",
      description: {
        en: "Diploma in Comp. Science",
        fr: "Diplôme en informatique"
      }
    },
    {
      id: "5bb982b1-0cab-11ea-aeca-1bbaff0eec34",
      description: {
        en: "Diploma in Library & Info.Tech",
        fr: "Dip en bibliothécono&tech info"
      }
    },
    {
      id: "5bb9a844-0cab-11ea-aecb-2f07308e09b7",
      description: {
        en: "Diploma in Criminology",
        fr: "Diplôme en criminologie"
      }
    },
    {
      id: "5bb9a845-0cab-11ea-aecc-ef2e3da6cf9d",
      description: {
        en: "Bachelor of Science (Honours)",
        fr: "Bacc en science - mention"
      }
    },
    {
      id: "5bb9cf40-0cab-11ea-aecd-a3440096cac8",
      description: {
        en: "Diploma in Systems Support",
        fr: "Diplôme en soutien informatiqu"
      }
    },
    {
      id: "5bb9f826-0cab-11ea-aece-bf27ec4a90b7",
      description: {
        en: "Diploma in Agriculture",
        fr: "Diplôme en agriculture"
      }
    },
    {
      id: "5bba1d2e-0cab-11ea-aecf-a32193692713",
      description: {
        en: "Master of Science - Neurology",
        fr: "Maîtrise en science-neurologie"
      }
    },
    {
      id: "5bba1d2f-0cab-11ea-aed0-23543898619d",
      description: {
        en: "Master of Science - Biology",
        fr: "Maîtr. en science - biologie"
      }
    },
    {
      id: "5bba4420-0cab-11ea-aed1-ef90901399fb",
      description: {
        en: "Diplôme- 2 cycle-adminstration",
        fr: "Diplôme- 2 cycle-adminstration"
      }
    },
    {
      id: "5bba4421-0cab-11ea-aed2-afad7fade4ed",
      description: {
        en: "Bachelor Food Science & Techno",
        fr: "Bacc.en sc.techno.des aliments"
      }
    },
    {
      id: "5bba6afe-0cab-11ea-aed3-9b7256faec56",
      description: {
        en: "Dip.communicat.engineer. techn",
        fr: "Dip.technologie comm.ingénieri"
      }
    },
    {
      id: "5bba6aff-0cab-11ea-aed4-4be42b600e2a",
      description: {
        en: "Dip.inform.systems.technology",
        fr: "Dip.techn.syst.d`information"
      }
    },
    {
      id: "5bba6b00-0cab-11ea-aed5-7b389b30fbd2",
      description: {
        en: "master sc.geog.information sys",
        fr: "Maîtrise sc.sys.inform.géog."
      }
    },
    {
      id: "5bba92f4-0cab-11ea-aed6-3be0bca5243c",
      description: {
        en: "administrative assist diploma",
        fr: "Diplôme adjoint administratif"
      }
    },
    {
      id: "5bba92f5-0cab-11ea-aed7-0f7054c39601",
      description: {
        en: "Bachelor, commun. human relat.",
        fr: "Bacc.commun.relation.humaine"
      }
    },
    {
      id: "5bbab8ec-0cab-11ea-aed8-1ff8d1cacff2",
      description: {
        en: "Dip.Medical Laboratory Techn.",
        fr: "Dip.en technologie médical"
      }
    },
    {
      id: "5bbadfde-0cab-11ea-aed9-6b994266dfc7",
      description: {
        en: "Doctor agriculture economics",
        fr: "Doctorat en économie agricole"
      }
    },
    {
      id: "5bbadfdf-0cab-11ea-aeda-13cea724596c",
      description: { en: "TESOL diploma", fr: "TESOL diplôme" }
    },
    {
      id: "5bbb06e4-0cab-11ea-aedb-435c9c03de11",
      description: {
        en: "Diploma in Horticulture",
        fr: "Diplôme de l'Horticulture"
      }
    },
    {
      id: "5bbb06e5-0cab-11ea-aedc-c39868b9c75e",
      description: {
        en: "Dip.Applied Science Technology",
        fr: "Dip tech sciences appliquées"
      }
    },
    {
      id: "5bbb2ed0-0cab-11ea-aedd-eb9ad7df86df",
      description: {
        en: "Master in Agroforestry",
        fr: "Maîtr. en agroforesterie"
      }
    },
    {
      id: "5bbb2ed1-0cab-11ea-aede-07cdfae32410",
      description: {
        en: "Dip. Computer Sup. Spec. & IT",
        fr: "Dip. Spéc. soutien info et TI"
      }
    },
    {
      id: "5bbb55ae-0cab-11ea-aedf-d31649bfb076",
      description: {
        en: "Doctor of Entomology",
        fr: "Médecin de l'entomologie"
      }
    },
    {
      id: "5bbb55af-0cab-11ea-aee0-5767af0a5794",
      description: {
        en: "Financial Assistant Diploma",
        fr: "Diplôme d'assistant financier"
      }
    },
    {
      id: "5bbb7cb4-0cab-11ea-aee1-57461fd5c139",
      description: { en: "Honours Diploma", fr: "Diplôme d'honneur" }
    },
    {
      id: "5bbb7cb5-0cab-11ea-aee2-571bb2c58752",
      description: {
        en: "Bachelor Science Microbiology",
        fr: "Bac. en science microbiologie"
      }
    },
    {
      id: "5bbba39c-0cab-11ea-aee3-935d9f055187",
      description: { en: "Bachelor of Economics", fr: "Bacc. en économie" }
    },
    {
      id: "5bbba39d-0cab-11ea-aee4-8f9af2a8ee19",
      description: {
        en: "Dip. Intl Development -2 cycle",
        fr: "Dip. dévelop. intl - 2 cycle"
      }
    },
    {
      id: "5bbbc9bc-0cab-11ea-aee5-23e1c036671e",
      description: {
        en: "College Stenography Certificat",
        fr: "Certificat collégial sténo."
      }
    },
    {
      id: "5bbbf0c2-0cab-11ea-aee6-eb408644c8a4",
      description: { en: "Associate in", fr: "Brevet en" }
    },
    {
      id: "5bbbf0c3-0cab-11ea-aee7-3ffdc1ea4193",
      description: { en: "Associate of Arts", fr: "Associé en arts" }
    },
    {
      id: "5bbc17a0-0cab-11ea-aee8-ef9859dbf774",
      description: {
        en: "Associate of Applied Science",
        fr: "Associé en sciences appliquées"
      }
    },
    {
      id: "5bbc3e92-0cab-11ea-aee9-e33be2530575",
      description: {
        en: "Associate of Business Admin",
        fr: "Associé en admin des affaires"
      }
    },
    {
      id: "5bbc3e93-0cab-11ea-aeea-276e9d62d063",
      description: {
        en: "Advanced Diploma-VetTechnology",
        fr: "Dipl. Avancé-Tech. Vétérinaire"
      }
    },
    {
      id: "5bbc65a2-0cab-11ea-aeeb-c3e5606e71ca",
      description: {
        en: "Associate of Engineering",
        fr: "Associé en ingénierie"
      }
    },
    {
      id: "5bbc8c6c-0cab-11ea-aeec-cb75c70d8176",
      description: { en: "Associate of Science", fr: "Brevet en sciences" }
    },
    {
      id: "5bbc8c6d-0cab-11ea-aeed-3f18cbb10653",
      description: { en: "Bachelor of Arts", fr: "Baccalauréat ès arts" }
    },
    {
      id: "5bbc8c6e-0cab-11ea-aeee-53ff61b7abbb",
      description: {
        en: "Bachelor of Applied Arts",
        fr: "Baccalauréat arts industriels"
      }
    },
    {
      id: "5bbcb368-0cab-11ea-aeef-738fa8b8b96f",
      description: {
        en: "Bachelor of Accounting",
        fr: "Baccalauréat en comptabillité"
      }
    },
    {
      id: "5bbcda78-0cab-11ea-aef0-a7f212b3fb1b",
      description: {
        en: "Bachelor Appl ConservationEnfc",
        fr: "Bachelor Appl Conservation Enf"
      }
    },
    {
      id: "5bbd0188-0cab-11ea-aef1-772cbc0438ac",
      description: {
        en: "Bachelor of Arts Community",
        fr: "B.A. en études communautaires"
      }
    },
    {
      id: "5bbd2848-0cab-11ea-aef2-579b41e6cb6c",
      description: {
        en: "Bachelor of Dramatic Arts",
        fr: "Baccalauréat en art dramatique"
      }
    },
    {
      id: "5bbd4f44-0cab-11ea-aef3-d38ebae7010b",
      description: {
        en: "Bachelor of Administration",
        fr: "Baccalauréat en administration"
      }
    },
    {
      id: "5bbd4f45-0cab-11ea-aef4-e3ec4ed528f9",
      description: {
        en: "Bachelor of Arts (Honours)",
        fr: "Baccalauréat spécialisé"
      }
    },
    {
      id: "5bbd762c-0cab-11ea-aef5-6bfd34dc928b",
      description: {
        en: "Bachelor Appl Justice Studies",
        fr: "Bacc. études de justice appl."
      }
    },
    {
      id: "5bbd762d-0cab-11ea-aef6-53ae705d3f90",
      description: {
        en: "Bachelor Applied Management",
        fr: "Bacc. en gestion appliquée"
      }
    },
    {
      id: "5bbd9d32-0cab-11ea-aef7-b3170779c4f9",
      description: {
        en: "Bachelor of Arts-Recreation Ad",
        fr: "B.A. administr. des loisirs"
      }
    },
    {
      id: "5bbd9d33-0cab-11ea-aef8-bf13ed28ad89",
      description: {
        en: "Bachelor of Architecture",
        fr: "Baccalauréat en architecture"
      }
    },
    {
      id: "5bbdc41a-0cab-11ea-aef9-3f85bfd4921b",
      description: {
        en: "Bachelor of Arts and Science",
        fr: "Bacc. ès arts et sciences"
      }
    },
    {
      id: "5bbdeb8e-0cab-11ea-aefa-1beb1cb26d41",
      description: {
        en: "Bachelor of Applied Science",
        fr: "Bac. sciences appliqués"
      }
    },
    {
      id: "5bbe1226-0cab-11ea-aefb-1bdbc6e840de",
      description: {
        en: "Bachelor Military Arts/Science",
        fr: "Bacc. arts/sciences militaires"
      }
    },
    {
      id: "5bbe392c-0cab-11ea-aefc-ff6a914658b8",
      description: {
        en: "Bachelor of Arts - Sociology",
        fr: "B.A. en sociologie"
      }
    },
    {
      id: "5bbe603c-0cab-11ea-aefd-2b2ee7436bf8",
      description: {
        en: "Bachelor of Admin Studies",
        fr: "Bacc. études administratives"
      }
    },
    {
      id: "5bbe86f2-0cab-11ea-aefe-aba1e484affc",
      description: {
        en: "Bachelor of Visual Arts",
        fr: "Baccalauréat arts visuels"
      }
    },
    {
      id: "5bbe86f3-0cab-11ea-aeff-238c9b2a8bd8",
      description: {
        en: "Bachelor of Business Admin",
        fr: "Bac. admistration commerciale"
      }
    },
    {
      id: "5bbeadda-0cab-11ea-af00-e36aa61039b7",
      description: {
        en: "Bachelor of Business Economics",
        fr: "Bacc. en économie d'entreprise"
      }
    },
    {
      id: "5bbeaddb-0cab-11ea-af01-2bb68e60c82e",
      description: {
        en: "Bachelor Business Management",
        fr: "Bacc. en admin. des affaires"
      }
    },
    {
      id: "5bbeaddc-0cab-11ea-af02-23459153695f",
      description: {
        en: "Bachelor of Biblical Studies",
        fr: "Bacc. en études bibliques"
      }
    },
    {
      id: "5bbed63e-0cab-11ea-af03-5ba07af63e15",
      description: {
        en: "Bachelor - Christian Education",
        fr: "Bacc. en éducation chr."
      }
    },
    {
      id: "5bbf22c4-0cab-11ea-af04-f345e29f2382",
      description: {
        en: "Bachelor of commerce (Honours)",
        fr: "Bacc. spécialisé en commerce"
      }
    },
    {
      id: "5bbf4b00-0cab-11ea-af05-67f86659644d",
      description: {
        en: "Bachelor of Computer Info Syst",
        fr: "B. en syst. d'inf. sur ord."
      }
    },
    {
      id: "5bbf4b01-0cab-11ea-af06-f3106b5e5b3e",
      description: {
        en: "Bachelor of Civil Law",
        fr: "Baccalauréat en droit civil"
      }
    },
    {
      id: "5bbf70a8-0cab-11ea-af07-bb23bddf50c5",
      description: {
        en: "Bachelor of Commerce",
        fr: "Baccalauréat en commerce"
      }
    },
    {
      id: "5bbf70a9-0cab-11ea-af08-fb959c12d451",
      description: {
        en: "Bachelor of Community Rehab",
        fr: "Bacc. en relèvement des comm."
      }
    },
    {
      id: "5bbf70aa-0cab-11ea-af09-878e163cb0e4",
      description: {
        en: "Bachelor of Criminology",
        fr: "Baccalauréat en criminologie"
      }
    },
    {
      id: "5bbf9894-0cab-11ea-af0a-9f28b2c3c32c",
      description: {
        en: "Bachelor of Computer Science",
        fr: "Baccalauréat en informatique"
      }
    },
    {
      id: "5bbf9895-0cab-11ea-af0b-eb83504ab49e",
      description: { en: "Bachelor of Design", fr: "Baccalauréat en design" }
    },
    {
      id: "5bbfbf72-0cab-11ea-af0c-a7ebcd8e1e08",
      description: {
        en: "Bachelor of Dental Science",
        fr: "Baccalauréat en odontologie"
      }
    },
    {
      id: "5bbfbf73-0cab-11ea-af0d-2bf7aba9dd8e",
      description: {
        en: "Bachelor of Engineering",
        fr: "Baccalauréat en génie"
      }
    },
    {
      id: "5bbfbf74-0cab-11ea-af0e-af5dbe97b10f",
      description: {
        en: "Bachelor Education afterDegree",
        fr: "Bacc. en éducation après dipl."
      }
    },
    {
      id: "5bbfe66e-0cab-11ea-af0f-33645aa2fed5",
      description: {
        en: "Bachelor of Education",
        fr: "Baccalauréat en éducation"
      }
    },
    {
      id: "5bbfe66f-0cab-11ea-af10-33eb275d3850",
      description: {
        en: "Bachelor Environmental Design",
        fr: "Bacc. conception de l'envir."
      }
    },
    {
      id: "5bc00c7a-0cab-11ea-af11-ef5e6609ccae",
      description: {
        en: "Bachelor Engineering and Mngt",
        fr: "Bacc. en génie et gestion"
      }
    },
    {
      id: "5bc00c7b-0cab-11ea-af12-ff6990436cb6",
      description: {
        en: "Bachelor Engineer and Society",
        fr: "Bacc. en génie et société"
      }
    },
    {
      id: "5bc00c7c-0cab-11ea-af13-d3e683c81e9d",
      description: {
        en: "Bachelor of Physical Ed-Health",
        fr: "Bacc. éd. physique et santé"
      }
    },
    {
      id: "5bc0336c-0cab-11ea-af14-3b7281afa118",
      description: {
        en: "Bachelor Environmental Studies",
        fr: "Bacc. études environnement."
      }
    },
    {
      id: "5bc0336d-0cab-11ea-af15-03096e455853",
      description: {
        en: "Bachelor Engineering Science",
        fr: "Baccalauréat en génie"
      }
    },
    {
      id: "5bc05b9e-0cab-11ea-af16-2b55f1dabb4c",
      description: {
        en: "Bachelor Exercise, Sport Scien",
        fr: "Bacc. exerc./science du sport"
      }
    },
    {
      id: "5bc05b9f-0cab-11ea-af17-53e2f88041c0",
      description: {
        en: "Bachelor of Fine Arts",
        fr: "Baccalauréat en beaux-arts"
      }
    },
    {
      id: "5bc05ba0-0cab-11ea-af18-8f10eb445e5a",
      description: {
        en: "Bachelor of Science Forestry",
        fr: "Bac. sciences forestières"
      }
    },
    {
      id: "5bc08240-0cab-11ea-af19-634ee9601626",
      description: {
        en: "Bachelor of Food Science",
        fr: "B. ès sciences (nutrition)"
      }
    },
    {
      id: "5bc08241-0cab-11ea-af1a-2fc2ea3fead6",
      description: {
        en: "Bachelor of General Studies",
        fr: "Bacc. en études générales"
      }
    },
    {
      id: "5bc08242-0cab-11ea-af1b-877545b95da1",
      description: {
        en: "Bachelor of Home Economics",
        fr: "Bacc. sciences domestiques"
      }
    },
    {
      id: "5bc0a96e-0cab-11ea-af1c-7f663b19a198",
      description: {
        en: "Bachelor of Human Ecology",
        fr: "Bacc. en écologie humaine"
      }
    },
    {
      id: "5bc0a96f-0cab-11ea-af1d-fbf1f1cf5838",
      description: {
        en: "Bachelor of Human Justice",
        fr: "Bacc. en justice humaine"
      }
    },
    {
      id: "5bc0d042-0cab-11ea-af1e-1f00aea6c662",
      description: {
        en: "Bachelor of Human Kinetics",
        fr: "Bacc. sc. de l'activité phys."
      }
    },
    {
      id: "5bc0d043-0cab-11ea-af1f-2f9c09383bd8",
      description: {
        en: "Bachelor Human Resources Devel",
        fr: "Bacc. dév. ress. humaines"
      }
    },
    {
      id: "5bc0d044-0cab-11ea-af20-6f42dd57cc80",
      description: {
        en: "Bachelor Hotel, Resort Mgmt",
        fr: "Bacc. en gestion hôtelière"
      }
    },
    {
      id: "5bc0f72a-0cab-11ea-af21-0f823f3bc43a",
      description: {
        en: "Bachelor of Health Science",
        fr: "Bacc. sciences de la santé"
      }
    },
    {
      id: "5bc0f72b-0cab-11ea-af22-9fbe7b868d84",
      description: {
        en: "Bachelor of Health Science OT",
        fr: "Bacc. sciences de la santé TO"
      }
    },
    {
      id: "5bc0f72c-0cab-11ea-af23-97b7cd6a1a9e",
      description: {
        en: "Bachelor of Health Science PT",
        fr: "Bacc. sciences de la santé PHY"
      }
    },
    {
      id: "5bc11ea8-0cab-11ea-af24-130db17a2a5b",
      description: {
        en: "Bachelor - Applied Informatics",
        fr: "Bacc. informatique appliquée"
      }
    },
    {
      id: "5bc14428-0cab-11ea-af25-2778e931835d",
      description: {
        en: "Bachelor InternationalBusiness",
        fr: "Bacc. commerce international"
      }
    },
    {
      id: "5bc16c8c-0cab-11ea-af26-c33e376a3a1d",
      description: {
        en: "Bachelor of Industrial Design",
        fr: "Bacc. en design industriel"
      }
    },
    {
      id: "5bc1923e-0cab-11ea-af27-839ca07e3848",
      description: {
        en: "Bachelor of Interior Design",
        fr: "Bacc. en design d'intérieur"
      }
    },
    {
      id: "5bc1923f-0cab-11ea-af28-1b92bbfae6d9",
      description: {
        en: "Bachelor of Integrated Studies",
        fr: "Bacc. en études intégrées"
      }
    },
    {
      id: "5bc1ba66-0cab-11ea-af29-db1e10a6ab6a",
      description: {
        en: "Bachelor Independent Studies",
        fr: "Bacc. en études indépendantes"
      }
    },
    {
      id: "5bc1ba67-0cab-11ea-af2a-07e0e4ce0dfc",
      description: {
        en: "Bachelor Indian Social Work",
        fr: "Bacc. service social Autoch."
      }
    },
    {
      id: "5bc1dff0-0cab-11ea-af2b-d7106f2b0500",
      description: {
        en: "Bachelor Information Systems",
        fr: "Bacc. systèmes d'information"
      }
    },
    {
      id: "5bc1dff1-0cab-11ea-af2c-63aabfb00845",
      description: {
        en: "Bachelor of Journalism",
        fr: "Baccalauréat en journalisme"
      }
    },
    {
      id: "5bc207f0-0cab-11ea-af2d-0bca54912404",
      description: {
        en: "Bachelor of Kinesiology",
        fr: "Bacc. en cinésiologie"
      }
    },
    {
      id: "5bc207f1-0cab-11ea-af2e-03a8c6152cdb",
      description: {
        en: "Bachelor of Laws B.L.(L.)",
        fr: "Baccalauréat en droit B.L.(L.)"
      }
    },
    {
      id: "5bc22e1a-0cab-11ea-af2f-73f9d04189df",
      description: {
        en: "Bachelor Laboratory Technology",
        fr: "Bacc. techn. de laboratoire"
      }
    },
    {
      id: "5bc254ee-0cab-11ea-af30-03f687c3461f",
      description: { en: "Bachelor of Leisure", fr: "Baccalauréat en loisirs" }
    },
    {
      id: "5bc27bea-0cab-11ea-af31-5b6c6aba84f2",
      description: {
        en: "Bachelor of Library Science",
        fr: "Baccalauréat bibliothéconomie"
      }
    },
    {
      id: "5bc27beb-0cab-11ea-af32-73e5f0c36b0e",
      description: {
        en: "Bachelor of Musical Arts",
        fr: "Baccalauréat en musique"
      }
    },
    {
      id: "5bc2a2be-0cab-11ea-af33-6f83232bfecf",
      description: {
        en: "Bachelor of Math",
        fr: "Baccalauréat en mathématiques"
      }
    },
    {
      id: "5bc2a2bf-0cab-11ea-af34-7f402764cd08",
      description: {
        en: "Bachelor of Medicine",
        fr: "Baccalauréat en médecine"
      }
    },
    {
      id: "5bc2a2c0-0cab-11ea-af35-db684e1d179c",
      description: {
        en: "Bachelor of Management",
        fr: "Baccalauréat en gestion"
      }
    },
    {
      id: "5bc2cb0e-0cab-11ea-af36-1b93b8fb2633",
      description: {
        en: "Bachelor Med Lab Science",
        fr: "Bacc. sciences de laboratoire"
      }
    },
    {
      id: "5bc2cb0f-0cab-11ea-af37-63df810875e9",
      description: {
        en: "Bachelor Medical Rehab (OT)",
        fr: "Bacc. réadaptation médicale TO"
      }
    },
    {
      id: "5bc2f1e2-0cab-11ea-af38-33cc19de6b5f",
      description: {
        en: "Bachelor Medical Rehab (PT)",
        fr: "Bacc. réadaptation médic. PHY"
      }
    },
    {
      id: "5bc2f1e3-0cab-11ea-af39-2b6d86f3f22a",
      description: {
        en: "Bachelor of Maritime Studies",
        fr: "Bacc. études sur les Maritimes"
      }
    },
    {
      id: "5bc2f1e4-0cab-11ea-af3a-17b6453e8fe8",
      description: {
        en: "Bachelor of Medical Science",
        fr: "Bacc. en sciences médicales"
      }
    },
    {
      id: "5bc318fc-0cab-11ea-af3b-870f96bb4cf5",
      description: {
        en: "Bachelor of Music Therapy",
        fr: "Bacc. en musicothérapie"
      }
    },
    {
      id: "5bc33efe-0cab-11ea-af3c-f7f771d15089",
      description: { en: "Bachelor of Music", fr: "Baccalauréat en musique" }
    },
    {
      id: "5bc3667c-0cab-11ea-af3d-f3870cf00b7c",
      description: {
        en: "Bachelor of Music Education",
        fr: "Bacc. éducation musicale"
      }
    },
    {
      id: "5bc38d0a-0cab-11ea-af3e-63ffcd642502",
      description: {
        en: "Bachelor of Nursing Degree",
        fr: "Bacc. en sciences infirmières"
      }
    },
    {
      id: "5bc38d0b-0cab-11ea-af3f-9bfb6d9c0cf0",
      description: {
        en: "Bachelor of Nursing (RN)",
        fr: "Bacc. sc. infirmières (inf.)"
      }
    },
    {
      id: "5bc3b384-0cab-11ea-af40-9f3f26dd2cef",
      description: {
        en: "Bachelor Natural Resource Sci",
        fr: "Bacc. ressources naturelles"
      }
    },
    {
      id: "5bc3b385-0cab-11ea-af41-2bb23862fd46",
      description: {
        en: "Bachelor of Nursing Science",
        fr: "Bacc. sciences infirmières"
      }
    },
    {
      id: "5bc3da76-0cab-11ea-af42-632cc22874d9",
      description: {
        en: "Bachelor of Office Management",
        fr: "Bacc. organisation des bureaux"
      }
    },
    {
      id: "5bc3da77-0cab-11ea-af43-6fd291462bfc",
      description: {
        en: "Bachelor of Outdoor Recreation",
        fr: "Bacc. loisir de plein air"
      }
    },
    {
      id: "5bc402da-0cab-11ea-af44-d7d44c87183b",
      description: {
        en: "Bachelor of Occupational Thera",
        fr: "Baccalauréat en ergothérapie"
      }
    },
    {
      id: "5bc402db-0cab-11ea-af45-cb25a7d326a2",
      description: {
        en: "Bachelor Public Administration",
        fr: "Bacc. en admin. publique"
      }
    },
    {
      id: "5bc42864-0cab-11ea-af46-bf17b9bbf782",
      description: {
        en: "Bachelor Professional Arts",
        fr: "Bacc. arts de la scène"
      }
    },
    {
      id: "5bc42865-0cab-11ea-af47-673ac92abfa9",
      description: {
        en: "Bachelor Physical Activity St.",
        fr: "Bacc. études activité physique"
      }
    },
    {
      id: "5bc44f4c-0cab-11ea-af48-7bd4b15f0d29",
      description: {
        en: "Bachelor Physical Education",
        fr: "Bacc. en éducation physique"
      }
    },
    {
      id: "5bc44f4d-0cab-11ea-af49-5f77ae30f44b",
      description: {
        en: "Bachelor of Philosophy",
        fr: "Baccalauréat en philosophie"
      }
    },
    {
      id: "5bc47652-0cab-11ea-af4a-5bc486db377e",
      description: {
        en: "Bachelor of Pharmacy",
        fr: "Baccalauréat en pharmacie"
      }
    },
    {
      id: "5bc47653-0cab-11ea-af4b-6b2304c3a43c",
      description: {
        en: "Bachelor Physical, Health Educ",
        fr: "Bacc. éduc. phys. et sanitaire"
      }
    },
    {
      id: "5bc47654-0cab-11ea-af4c-4fac82d84d6c",
      description: {
        en: "Bachelor of Public Relations",
        fr: "Bacc. en relations publiques"
      }
    },
    {
      id: "5bc49e7a-0cab-11ea-af4d-8bb3144a2386",
      description: {
        en: "Bachelor of Psychology",
        fr: "Baccalauréat en psychologie"
      }
    },
    {
      id: "5bc49e7b-0cab-11ea-af4e-7760bf49567e",
      description: {
        en: "Bachelor of Physical Therapy",
        fr: "Bacc. en physiothérapie"
      }
    },
    {
      id: "5bc4c56c-0cab-11ea-af4f-dbc12afbeba3",
      description: {
        en: "Bachelor of Religious Studies",
        fr: "Bacc. en sciences religieuses"
      }
    },
    {
      id: "5bc4c56d-0cab-11ea-af50-bfb372fd1b71",
      description: { en: "Bachelor of Recreation", fr: "Bacc. en loisirs" }
    },
    {
      id: "5bc4c56e-0cab-11ea-af51-9fe687b3a9bb",
      description: {
        en: "Bachelor Recreation, Leisure",
        fr: "Bacc. en loisirs"
      }
    },
    {
      id: "5bc4ec7c-0cab-11ea-af52-c7208e823fe0",
      description: {
        en: "Bachelor Recreation Management",
        fr: "Bacc. gestion des loisirs"
      }
    },
    {
      id: "5bc4ec7d-0cab-11ea-af53-c38222a5b105",
      description: {
        en: "Bachelor Recreation Studies",
        fr: "Bacc. en sciences du loisir"
      }
    },
    {
      id: "5bc4ec7e-0cab-11ea-af54-7bdb48f5410d",
      description: { en: "Bachelor of Science", fr: "Baccalauréat en science" }
    },
    {
      id: "5bc51350-0cab-11ea-af55-6f1487618626",
      description: {
        en: "Bachelor Science - Agriculture",
        fr: "Bacc. ès sciences agricoles"
      }
    },
    {
      id: "5bc51351-0cab-11ea-af56-63ec4ee4e4cb",
      description: {
        en: "Bachelor ScienceAdministration",
        fr: "Bacc. ès sciences admin."
      }
    },
    {
      id: "5bc53916-0cab-11ea-af57-93808c3ebd99",
      description: {
        en: "Bachelor Science - Agric Eng",
        fr: "B.Sc. en génie agricole"
      }
    },
    {
      id: "5bc53917-0cab-11ea-af58-e3482da93575",
      description: {
        en: "Bachelor Science - Physical Ac",
        fr: "B.Sc. en activité physique"
      }
    },
    {
      id: "5bc56008-0cab-11ea-af59-f323cc32c67e",
      description: {
        en: "Bachelor Science -Architecture",
        fr: "B.Sc. en architecture"
      }
    },
    {
      id: "5bc58704-0cab-11ea-af5a-03298fa8d9c7",
      description: {
        en: "Bachelor Science - Dentistry",
        fr: "B.Sc. en art dentaire"
      }
    },
    {
      id: "5bc5ae1e-0cab-11ea-af5b-3322767df852",
      description: {
        en: "Bachelor Science - Engineering",
        fr: "B.Sc. en ingénierie"
      }
    },
    {
      id: "5bc5ae1f-0cab-11ea-af5c-cb3d0d5a56ae",
      description: {
        en: "Bachelor Science - Environment",
        fr: "B.Sc. en environnement"
      }
    },
    {
      id: "5bc5d51a-0cab-11ea-af5d-1b9d1668f80b",
      description: {
        en: "Bachelor Science - Forest Eng.",
        fr: "B.Sc. en génie forestier"
      }
    },
    {
      id: "5bc5fc02-0cab-11ea-af5e-ef9cd506b8bd",
      description: {
        en: "Bachelor Science - Food Scienc",
        fr: "B.Sc. en science alimentaire"
      }
    },
    {
      id: "5bc5fc03-0cab-11ea-af5f-fb345d48d510",
      description: {
        en: "Bachelor Science - Human Ecolo",
        fr: "B.Sc. en écologie humaine"
      }
    },
    {
      id: "5bc5fc04-0cab-11ea-af60-f33f1ab5050f",
      description: {
        en: "Bachelor Science - Health Educ",
        fr: "B.Sc. en éducation sanitaire"
      }
    },
    {
      id: "5bc622cc-0cab-11ea-af61-4bf2d3e94028",
      description: {
        en: "Bachelor Science - Human Nutri",
        fr: "B.Sc. en nutrition humaine"
      }
    },
    {
      id: "5bc622cd-0cab-11ea-af62-4b1a2cbcd0af",
      description: {
        en: "Bachelor Science - Kinesiology",
        fr: "B.Sc. en cinésiologie"
      }
    },
    {
      id: "5bc64b26-0cab-11ea-af63-c7c70d650438",
      description: {
        en: "Bachelor Science - Medicine",
        fr: "B.Sc. en médecine"
      }
    },
    {
      id: "5bc64b27-0cab-11ea-af64-073225f66079",
      description: {
        en: "Bachelor Science - Mental Heal",
        fr: "B.Sc. en santé mentale"
      }
    },
    {
      id: "5bc670c4-0cab-11ea-af65-af550506a1cf",
      description: {
        en: "Bachelor Science - Nursing",
        fr: "B. en sciences infirmières"
      }
    },
    {
      id: "5bc670c5-0cab-11ea-af66-c39b3226800e",
      description: {
        en: "Bachelor Science - Nutrition",
        fr: "B.Sc. en nutirtion"
      }
    },
    {
      id: "5bc697de-0cab-11ea-af67-e7af2e19119a",
      description: {
        en: "Bachelor Science - Occupation",
        fr: "B.Sc. en ergothérapie"
      }
    },
    {
      id: "5bc6bea8-0cab-11ea-af68-dfdc005eb266",
      description: {
        en: "Bachelor Science - Psychiatric",
        fr: "B.Sc. en nursing psychiatrique"
      }
    },
    {
      id: "5bc6bea9-0cab-11ea-af69-6bee45e4420f",
      description: {
        en: "Bachelor Science-Physical Ther",
        fr: "B.Sc. en physiothérapie"
      }
    },
    {
      id: "5bc6e590-0cab-11ea-af6a-53d53b1b6205",
      description: {
        en: "Bachelor Science-Physiotherapy",
        fr: "B.Sc. en physiothérapie"
      }
    },
    {
      id: "5bc6e591-0cab-11ea-af6b-d3b404430190",
      description: {
        en: "Bachelor Science - Radiation",
        fr: "B.Sc. en radiation"
      }
    },
    {
      id: "5bc6e592-0cab-11ea-af6c-cb911d345aed",
      description: {
        en: "Bachelor Science-Computer Scie",
        fr: "B.Sc. en informatique"
      }
    },
    {
      id: "5bc70dc2-0cab-11ea-af6d-d7e2e1789c31",
      description: {
        en: "Bachelor Science - Education",
        fr: "Bacc. sciences de l'éducation"
      }
    },
    {
      id: "5bc70dc3-0cab-11ea-af6e-63a1b7baa875",
      description: {
        en: "Bachelor Sci. Foreign Service",
        fr: "B.Sc. (Service à l'étranger)"
      }
    },
    {
      id: "5bc70dc4-0cab-11ea-af6f-7fc1c469720e",
      description: {
        en: "Bachelor Science - Genetics",
        fr: "B.Sc. en génétique"
      }
    },
    {
      id: "5bc734f0-0cab-11ea-af70-b368a6aec2b6",
      description: {
        en: "Bachelor Science - Home Econom",
        fr: "B.Sc. en économie domestique"
      }
    },
    {
      id: "5bc734f1-0cab-11ea-af71-f788f3c11c75",
      description: {
        en: "Bachelor of Science (Honours)",
        fr: "Bacc. és Sciences (Spécialisé)"
      }
    },
    {
      id: "5bc75a84-0cab-11ea-af72-4f1fb97bc2fb",
      description: { en: "Bachelor of Science - Law", fr: "B.Sc. en droit" }
    },
    {
      id: "5bc75a85-0cab-11ea-af73-1702b3b5f30d",
      description: {
        en: "Bachelor Science - Languages",
        fr: "B.Sc. en langues"
      }
    },
    {
      id: "5bc75a86-0cab-11ea-af74-071ca3ee09b5",
      description: {
        en: "Bachelor Science - Management",
        fr: "B.Sc. en gestion"
      }
    },
    {
      id: "5bc782a2-0cab-11ea-af75-a738debafaa1",
      description: {
        en: "Bachelor Science - Nutritional",
        fr: "B.Sc. en nutrition"
      }
    },
    {
      id: "5bc782a3-0cab-11ea-af76-8b827c2f07aa",
      description: {
        en: "Bachelor of Specialization",
        fr: "Baccalauréat spécialisé"
      }
    },
    {
      id: "5bc7a9a8-0cab-11ea-af77-4b9588faf13a",
      description: {
        en: "Bachelor of Special Education",
        fr: "Bacc. en éducation spécialisée"
      }
    },
    {
      id: "5bc7a9a9-0cab-11ea-af78-eb1451932da1",
      description: {
        en: "Bachelor Science - Pharmacy",
        fr: "B.Sc. en pharmacie"
      }
    },
    {
      id: "5bc7a9aa-0cab-11ea-af79-c31483b162ee",
      description: {
        en: "Bachelor of Social Sciences",
        fr: "Baccalauréat sciences sociales"
      }
    },
    {
      id: "5bc7d090-0cab-11ea-af7a-03dbc9eeb9c6",
      description: {
        en: "Bachelor of Social Service",
        fr: "Baccalauréat en service social"
      }
    },
    {
      id: "5bc7d091-0cab-11ea-af7b-dbedd95c9955",
      description: {
        en: "Bachelor Science - Technology",
        fr: "B.Sc. en technologie"
      }
    },
    {
      id: "5bc7d092-0cab-11ea-af7c-2f521bb4e45c",
      description: {
        en: "Bachelor of Social Work",
        fr: "Baccalauréat en service social"
      }
    },
    {
      id: "5bc7f7b4-0cab-11ea-af7d-6fe61382723d",
      description: {
        en: "Bachelor of Theology",
        fr: "Baccalauréat en théologie"
      }
    },
    {
      id: "5bc7f7b5-0cab-11ea-af7e-87c5a20cab24",
      description: {
        en: "Bachelor of Teaching",
        fr: "Baccalauréat en enseignement"
      }
    },
    {
      id: "5bc7f7b6-0cab-11ea-af7f-2709ecb45ce5",
      description: {
        en: "Bachelor Tourism, Hospitality",
        fr: "Bacc. tourisme/adm. hosp."
      }
    },
    {
      id: "5bc81e92-0cab-11ea-af80-b3e1c5b92d7b",
      description: {
        en: "Bachelor Technology Informatio",
        fr: "Bacc. en infor. technologique"
      }
    },
    {
      id: "5bc81e93-0cab-11ea-af81-f3e22eafc7bd",
      description: {
        en: "Bachelor Technology Management",
        fr: "Bacc. gestion de la technol."
      }
    },
    {
      id: "5bc84566-0cab-11ea-af82-ab9094154085",
      description: {
        en: "Bachelor of Translation",
        fr: "Baccalauréat en traduction"
      }
    },
    {
      id: "5bc84567-0cab-11ea-af83-9b5882f0e175",
      description: { en: "Bachelor of Technology", fr: "Bacc. en technologie" }
    },
    {
      id: "5bc84568-0cab-11ea-af84-e38bc4ed4423",
      description: {
        en: "Bachelor Veterinary Medicine",
        fr: "Bacc. médecine vétérinaire"
      }
    },
    {
      id: "5bc86b40-0cab-11ea-af85-3f60cd08e5ce",
      description: {
        en: "Bachelor Vocational Education",
        fr: "Bacc. en formation profess."
      }
    },
    {
      id: "5bc86b41-0cab-11ea-af86-eb05f2bbf413",
      description: { en: "Chartered Accountant", fr: "Comptable agréé" }
    },
    {
      id: "5bc89372-0cab-11ea-af87-5755b7966dc1",
      description: {
        en: "College Education Certificate",
        fr: "Certificat d'études collégiale"
      }
    },
    {
      id: "5bc89373-0cab-11ea-af88-a39077e019b4",
      description: {
        en: "Undergraduate Certificate",
        fr: "Certificat de premier cycle"
      }
    },
    {
      id: "5bc8b924-0cab-11ea-af89-ff6fe3f22cc1",
      description: {
        en: "Certif in Political Studies",
        fr: "Certificat d'études politiques"
      }
    },
    {
      id: "5bc8e188-0cab-11ea-af8a-13ebedcc58a3",
      description: { en: "Certificate", fr: "Certificat" }
    },
    {
      id: "5bc8e189-0cab-11ea-af8b-bb6228e01866",
      description: { en: "Certificat Program", fr: "Programme de certificat" }
    },
    {
      id: "5bc908b6-0cab-11ea-af8c-f376e709538d",
      description: {
        en: "Certified General Accountant",
        fr: "Comptable général licencié"
      }
    },
    {
      id: "5bc908b7-0cab-11ea-af8d-4bd826f36f88",
      description: {
        en: "4-Yr College Applied Degree",
        fr: "Dipl collégial appl 4 ans"
      }
    },
    {
      id: "5bc92f3a-0cab-11ea-af8e-fb0ceb910229",
      description: {
        en: "Certif Management Accountant",
        fr: "Comptable en gestion accrédité"
      }
    },
    {
      id: "5bc92f3b-0cab-11ea-af8f-7bcb69aa2af3",
      description: {
        en: "Diploma in Admin. Assistant",
        fr: "Diplôme d'Admin. Assistant"
      }
    },
    {
      id: "5bc954f6-0cab-11ea-af90-d7fa57b5f123",
      description: {
        en: "Doctor of Administration",
        fr: "Doctorat en administration"
      }
    },
    {
      id: "5bc954f7-0cab-11ea-af91-5f28f17e8289",
      description: {
        en: "Doctor of Architecture",
        fr: "Doctorat en architecture"
      }
    },
    {
      id: "5bc954f8-0cab-11ea-af92-777e738a9088",
      description: {
        en: "Doctor of Business Admin",
        fr: "Doctorat admin. commerciale"
      }
    },
    {
      id: "5bc97bf2-0cab-11ea-af93-9b19eb6da15b",
      description: {
        en: "Diploma in Business",
        fr: "Diplôme en études commerciales"
      }
    },
    {
      id: "5bc9a2f8-0cab-11ea-af94-474282e2dd41",
      description: {
        en: "Doctor in Chiropractic",
        fr: "Doctorat en chiropraxie"
      }
    },
    {
      id: "5bc9a2f9-0cab-11ea-af95-0bb5723f5f74",
      description: { en: "Doctor in Civil Law", fr: "Doctorat en droit civil" }
    },
    {
      id: "5bc9ca08-0cab-11ea-af96-3fb0b803710a",
      description: { en: "Doctor in Canon Law", fr: "Doctorat en droit canon" }
    },
    {
      id: "5bc9ca09-0cab-11ea-af97-c3a2de9d6d1b",
      description: {
        en: "Diploma Notary Science",
        fr: "Diplôme de droit notarial"
      }
    },
    {
      id: "5bc9f0c8-0cab-11ea-af98-f70e5d132558",
      description: {
        en: "Doctor in Dental Surgery",
        fr: "Doctorat en chirurgie dentaire"
      }
    },
    {
      id: "5bc9f0c9-0cab-11ea-af99-cfe3c8a61a1b",
      description: {
        en: "Diploma in Advanced Studies",
        fr: "Diplome d'études avancées"
      }
    },
    {
      id: "5bca1940-0cab-11ea-af9a-734d8b6c0229",
      description: {
        en: "College Education Diploma",
        fr: "Diplôme des études collégiales"
      }
    },
    {
      id: "5bca1941-0cab-11ea-af9b-cf62eafc00f3",
      description: { en: "Diploma in Engineering", fr: "Diplôme en ingénierie" }
    },
    {
      id: "5bca1942-0cab-11ea-af9c-8795ab0e5d92",
      description: {
        en: "Diploma in Social Studies",
        fr: "Diplôme des études sociales"
      }
    },
    {
      id: "5bca3fe2-0cab-11ea-af9d-eb0422e31115",
      description: {
        en: "Doctor of Health Science",
        fr: "Doct. en sciences de la santé"
      }
    },
    {
      id: "5bca3fe3-0cab-11ea-af9e-53c30da93de2",
      description: { en: "Diploma", fr: "Diplôme" }
    },
    {
      id: "5bca3fe4-0cab-11ea-af9f-ab719960ef4c",
      description: {
        en: "Diploma in Business Admin",
        fr: "Diplôme admin commerciale"
      }
    },
    {
      id: "5bca66f2-0cab-11ea-afa0-6782fcd57371",
      description: {
        en: "Diploma of Comp. Eng. Tech.",
        fr: "Diplôme en Tech. du Génie Info"
      }
    },
    {
      id: "5bca66f3-0cab-11ea-afa1-1b72258fdf9a",
      description: {
        en: "Graduate Diploma",
        fr: "Diplôme d'études supérieures"
      }
    },
    {
      id: "5bca8ca4-0cab-11ea-afa2-f31fcf9c6bcd",
      description: {
        en: "Undergraduate Diploma",
        fr: "Diplôme de premier cycle"
      }
    },
    {
      id: "5bca8ca5-0cab-11ea-afa3-0361cbf3d66f",
      description: {
        en: "Doctor of Jurisprudence",
        fr: "Doct. en sciences juridiques"
      }
    },
    {
      id: "5bcab3aa-0cab-11ea-afa4-fbeb5e15e539",
      description: {
        en: "Doctor of Dental Medicine",
        fr: "Doctorat en médecine dentaire"
      }
    },
    {
      id: "5bcadaa6-0cab-11ea-afa5-ab4e74e2c18d",
      description: {
        en: "Doctor of Ministry",
        fr: "Doct. en pastorale sacerdotale"
      }
    },
    {
      id: "5bcb01ac-0cab-11ea-afa6-b37422c4e8b8",
      description: { en: "Doctor of Musical Arts", fr: "Doctorat en musique" }
    },
    {
      id: "5bcb2a38-0cab-11ea-afa7-3f327eacef38",
      description: { en: "Doctor of Music", fr: "Doctorat en musique" }
    },
    {
      id: "5bcb2a39-0cab-11ea-afa8-f79d88c8eb8b",
      description: { en: "Doctor of Arts", fr: "Doctorat ès arts" }
    },
    {
      id: "5bcb50c6-0cab-11ea-afa9-0339a2d78626",
      description: {
        en: "Diploma in Public Admin",
        fr: "Diplôme admin. publique"
      }
    },
    {
      id: "5bcb50c7-0cab-11ea-afaa-af40a328ba4f",
      description: { en: "Doctor of Psychology", fr: "Doctorat en psychologie" }
    },
    {
      id: "5bcb7790-0cab-11ea-afab-cf42ff86e709",
      description: {
        en: "Doctor of Social Science",
        fr: "Doctorat en sciences sociales"
      }
    },
    {
      id: "5bcb7791-0cab-11ea-afac-137767e68ece",
      description: {
        en: "Doctor of Social Work",
        fr: "Doctorat en service social"
      }
    },
    {
      id: "5bcb7792-0cab-11ea-afad-33333abb97f5",
      description: { en: "Doctor of Theology", fr: "Doctorat en théologie" }
    },
    {
      id: "5bcb9ea0-0cab-11ea-afae-5fb538495fe6",
      description: {
        en: "Doctor of Veterinary Medicine",
        fr: "Doct. en médecine vétérinaire"
      }
    },
    {
      id: "5bcb9ea1-0cab-11ea-afaf-0b53c32c8775",
      description: {
        en: "Doctor of Veterinary Science",
        fr: "Doct. en médecine vétérinaire"
      }
    },
    {
      id: "5bcbc45c-0cab-11ea-afb0-b3eba38cdc70",
      description: { en: "Doctor of Education", fr: "Doctorat en éducation" }
    },
    {
      id: "5bcbc45d-0cab-11ea-afb1-933c3918e276",
      description: {
        en: "Exec Master of Business Admin",
        fr: "Maîtr. admin. gens d'affaires"
      }
    },
    {
      id: "5bcbeb4e-0cab-11ea-afb2-5f969c2604ca",
      description: {
        en: "Foreign Studies/Education",
        fr: "Études étrangères/éducation"
      }
    },
    {
      id: "5bcbeb4f-0cab-11ea-afb3-3f9c2c230fe3",
      description: { en: "High School Graduate", fr: "Diplômé du secondaire" }
    },
    {
      id: "5bcc1236-0cab-11ea-afb4-c71ea798add5",
      description: { en: "High School One Year", fr: "Secondaire un" }
    },
    {
      id: "5bcc1237-0cab-11ea-afb5-0b63c3d89f51",
      description: { en: "High School Two Years", fr: "Secondaire deux" }
    },
    {
      id: "5bcc3a72-0cab-11ea-afb6-eb2850202e69",
      description: { en: "High School Three Years", fr: "Secondaire trois" }
    },
    {
      id: "5bcc3a73-0cab-11ea-afb7-1f2d66e748a8",
      description: { en: "High School Four Years", fr: "Secondaire quatre" }
    },
    {
      id: "5bcc3a74-0cab-11ea-afb8-0fcf56a55ee3",
      description: { en: "High School Five Years", fr: "Secondaire cinq" }
    },
    {
      id: "5bcc6146-0cab-11ea-afb9-a31bc7512aa2",
      description: {
        en: "Internat. Master Business Admi",
        fr: "Maîtr. administration intern."
      }
    },
    {
      id: "5bcc6147-0cab-11ea-afba-6f192986440b",
      description: { en: "Juris Doctor", fr: "Doctor juris" }
    },
    {
      id: "5bcc6148-0cab-11ea-afbb-73cb39d114ce",
      description: {
        en: "Doctor in the Science of Law",
        fr: "Doct. en sciences juridiques"
      }
    },
    {
      id: "5bcc8860-0cab-11ea-afbc-437d380ef380",
      description: {
        en: "Licentiate in Canon Law",
        fr: "Licence en droit canonique"
      }
    },
    {
      id: "5bcc8861-0cab-11ea-afbd-5f316f8ec106",
      description: { en: "Licencié ès lettres", fr: "Licencié ès lettres" }
    },
    {
      id: "5bccae08-0cab-11ea-afbe-c325b6103de5",
      description: { en: "Licentiate", fr: "Licence" }
    },
    {
      id: "5bccae09-0cab-11ea-afbf-67aa33d187bd",
      description: {
        en: "Bachelor of Laws LL.B.",
        fr: "Baccalauréat en droit LL.B."
      }
    },
    {
      id: "5bccae0a-0cab-11ea-afc0-97a1ad8d0d95",
      description: { en: "Doctor of Laws", fr: "Docteur en droit" }
    },
    {
      id: "5bccd4fa-0cab-11ea-afc1-c7aa41f8268d",
      description: { en: "Licentiate of Laws", fr: "Licencié en droit" }
    },
    {
      id: "5bccd4fb-0cab-11ea-afc2-33736096ed23",
      description: { en: "Master of Laws", fr: "Maîtrise en droit" }
    },
    {
      id: "5bccfd40-0cab-11ea-afc3-dbcdad46bbac",
      description: { en: "Licentiate in Music", fr: "Licence en musique" }
    },
    {
      id: "5bccfd41-0cab-11ea-afc4-0780a864d4d6",
      description: {
        en: "Licentiate in Philosophy",
        fr: "Licence en philosophie"
      }
    },
    {
      id: "5bccfd42-0cab-11ea-afc5-9bac842b381f",
      description: { en: "Licentiate in Theology", fr: "Licence en théologie" }
    },
    {
      id: "5bcd2450-0cab-11ea-afc6-77321a4a5c87",
      description: {
        en: "Master of Art Conservation",
        fr: "Maîtr. conserv. oeuvres d'art"
      }
    },
    {
      id: "5bcd2451-0cab-11ea-afc7-0fcb03b99171",
      description: {
        en: "Master of Accounting",
        fr: "Maîtrise en comptabilité"
      }
    },
    {
      id: "5bcd2452-0cab-11ea-afc8-e7139cb08e31",
      description: {
        en: "Master of Arts - Canon Law",
        fr: "Maîtr. ès arts en droit canon"
      }
    },
    {
      id: "5bcd4b1a-0cab-11ea-afc9-af005a0e06b0",
      description: { en: "Master of Arts", fr: "Maîtrise en arts" }
    },
    {
      id: "5bcd4b1b-0cab-11ea-afca-87a9d27b61d0",
      description: {
        en: "Master of Adult Education",
        fr: "Maîtr en éducation des adultes"
      }
    },
    {
      id: "5bcd7216-0cab-11ea-afcb-63b4f9dff8f2",
      description: {
        en: "Master of Administration",
        fr: "Maîtrise en administration"
      }
    },
    {
      id: "5bcd7217-0cab-11ea-afcc-1b031db3e297",
      description: {
        en: "Master of Arts - Education",
        fr: "Maîtrise ès arts en éducation"
      }
    },
    {
      id: "5bcd7218-0cab-11ea-afcd-7bd20631a218",
      description: {
        en: "Master Applied Environmental",
        fr: "Maîtr. en études environnem."
      }
    },
    {
      id: "5bcd97be-0cab-11ea-afce-d7a85f8dbc51",
      description: {
        en: "Master of Agriculture",
        fr: "Maîtrise en agriculture"
      }
    },
    {
      id: "5bcd97bf-0cab-11ea-afcf-a3c15c243ff1",
      description: {
        en: "Master of Arts - Human Ecology",
        fr: "M.A. en écologie humaine"
      }
    },
    {
      id: "5bcdbeb0-0cab-11ea-afd0-8fec0a126151",
      description: {
        en: "Master of Arts in Leadership",
        fr: "Master of Arts in Leadership"
      }
    },
    {
      id: "5bcdbeb1-0cab-11ea-afd1-db81929c565b",
      description: {
        en: "Master Arts - Liberal Studies",
        fr: "M.A. en sciences libérales"
      }
    },
    {
      id: "5bcde5ac-0cab-11ea-afd2-9ff41c4914c8",
      description: {
        en: "Master of Arts - Missiology",
        fr: "M.A. en missiologie"
      }
    },
    {
      id: "5bce0e06-0cab-11ea-afd3-a39936ada87b",
      description: {
        en: "Master Arts - Pastoral Studies",
        fr: "M.A. en études pastorales"
      }
    },
    {
      id: "5bce353e-0cab-11ea-afd4-d354975b1d2c",
      description: {
        en: "Master of Arts - Political Sc.",
        fr: "M.A. en science politique"
      }
    },
    {
      id: "5bce5c30-0cab-11ea-afd5-4f498c9396a3",
      description: {
        en: "Master of Arts - Psychology",
        fr: "M.A. en psychologie"
      }
    },
    {
      id: "5bce5c31-0cab-11ea-afd6-0b60f33dc559",
      description: {
        en: "Master of Architecture",
        fr: "Maîtrise en architecture"
      }
    },
    {
      id: "5bce82fa-0cab-11ea-afd7-5f17288da2ee",
      description: {
        en: "Master of Admin Science",
        fr: "Maîtrise en science admin."
      }
    },
    {
      id: "5bce82fb-0cab-11ea-afd8-df43ad60ec3b",
      description: {
        en: "Master Advance Studies Archite",
        fr: "Maîtr. ét. sup. en archit."
      }
    },
    {
      id: "5bcea88e-0cab-11ea-afd9-7fb2b7cbc1d8",
      description: {
        en: "Master of Applied Science",
        fr: "M. sciences appliquées"
      }
    },
    {
      id: "5bcecfbc-0cab-11ea-afda-9f4a993c386c",
      description: {
        en: "Master Arts - Pastoral Science",
        fr: "Maîtrise ès arts en pastorale"
      }
    },
    {
      id: "5bcecfbd-0cab-11ea-afdb-c380957e98e1",
      description: {
        en: "Master of Applied Statistics",
        fr: "Maîtr. en statist. appliquées"
      }
    },
    {
      id: "5bcef672-0cab-11ea-afdc-9394e91794e0",
      description: {
        en: "Master Advanced Lan Architect",
        fr: "Maîtr. ét. sup. arch. RL"
      }
    },
    {
      id: "5bcef673-0cab-11ea-afdd-3ff70112e514",
      description: {
        en: "Master Arts-School Psychology",
        fr: "M.A. en psychologie scolaire"
      }
    },
    {
      id: "5bcf1d82-0cab-11ea-afde-8fcde42f246b",
      description: {
        en: "Master of Archival Studies",
        fr: "Maîtrise en archivistique"
      }
    },
    {
      id: "5bcf4456-0cab-11ea-afdf-17f1fd8aa10a",
      description: {
        en: "Master of Arts - Teaching",
        fr: "M.A. en enseignement"
      }
    },
    {
      id: "5bcf4457-0cab-11ea-afe0-7700c47c0bb0",
      description: {
        en: "Master land use pl./develop.",
        fr: "Maîtr. amén. territoire/dével."
      }
    },
    {
      id: "5bcf6b3e-0cab-11ea-afe1-3b4a2f2e8c18",
      description: {
        en: "Master of Arts - Theology",
        fr: "Maîtrise ès arts en théologie"
      }
    },
    {
      id: "5bcf6b3f-0cab-11ea-afe2-2328c4ca44ab",
      description: {
        en: "Master of Arts War Studies",
        fr: "MA-Ét. conduite de la guerre"
      }
    },
    {
      id: "5bcf9230-0cab-11ea-afe3-a3266fa3f9de",
      description: {
        en: "Master of Business Admin",
        fr: "Maîtrise en admin commerciale"
      }
    },
    {
      id: "5bcf9231-0cab-11ea-afe4-dfe244860677",
      description: {
        en: "Master Library & Info Science",
        fr: "Maîtr. biblioth./sc. infor."
      }
    },
    {
      id: "5bcfbad0-0cab-11ea-afe5-3bf717419724",
      description: {
        en: "Master Criminology (Applied)",
        fr: "Maîtrise en criminologie appl."
      }
    },
    {
      id: "5bcfe05a-0cab-11ea-afe6-f34529b36b80",
      description: {
        en: "Master of Civil Engineering",
        fr: "Maîtrise en génie civil"
      }
    },
    {
      id: "5bd008c8-0cab-11ea-afe7-d353f4e11df0",
      description: {
        en: "Master Continuing Education",
        fr: "Maîtrise en formation continue"
      }
    },
    {
      id: "5bd02f92-0cab-11ea-afe8-7706a1f5aadc",
      description: { en: "Master of Counselling", fr: "Maîtrise en counseling" }
    },
    {
      id: "5bd02f93-0cab-11ea-afe9-df8275a7c9e5",
      description: {
        en: "Master of Clinical Dentistry",
        fr: "Maîtr. en dentisterie clinique"
      }
    },
    {
      id: "bbd95b12-ffe4-11e9-8d71-362b9e155667",
      description: { en: "Master of Counselling", fr: "Maîtrise en counseling" }
    },
    {
      id: "06688220-ffe5-11e9-8d71-362b9e155667",
      description: {
        en: "Master of Arts War Studies",
        fr: "MA-Ét. conduite de la guerre"
      }
    }
  ]
};

responses["getDevelopmentalGoals"] = {
  data: [
    {
      id: "5c2475ca-0cab-11ea-b317-13f44f9d6b19",
      description: {
        en: "Thinking things through",
        fr: "Réflexion approfondie"
      }
    },
    {
      id: "5c24eaa0-0cab-11ea-b318-d709b854ecf1",
      description: { en: "Achieve results", fr: "Obtenir des résultats" }
    },
    {
      id: "3a57095e-0174-11ea-8d71-362b9e155667",
      description: { en: "Humor", fr: "Sens de l'humour" }
    }
  ]
};

responses["getGroupLevel"] = {
  data: [
    { id: "5ba5b8ac-0cab-11ea-ae19-13d9e3c4c07b", description: "AS 01" },
    { id: "5ba5dfa8-0cab-11ea-ae1a-a38da7208ff6", description: "AS 02" },
    { id: "5ba6069a-0cab-11ea-ae1b-6fbd7392d8f0", description: "AS 03" },
    { id: "5ba6069b-0cab-11ea-ae1c-c36075c6de41", description: "AS 04" },
    { id: "5ba6069c-0cab-11ea-ae1d-dbb633812707", description: "AS 05" },
    { id: "5ba62ecc-0cab-11ea-ae1e-079c73254a8d", description: "AS 06" },
    { id: "5ba62ecd-0cab-11ea-ae1f-0f9e0218ce9d", description: "AS 07" },
    { id: "5ba655b4-0cab-11ea-ae20-7fe40e1707c4", description: "AS 07" },
    { id: "5ba655b5-0cab-11ea-ae21-07efb6e194ff", description: "AU 04" },
    { id: "5ba655b6-0cab-11ea-ae22-df5516669989", description: "CA 01" },
    { id: "5ba67cc4-0cab-11ea-ae23-db33f715e5ef", description: "CA 02" },
    { id: "5ba67cc5-0cab-11ea-ae24-b38846f44569", description: "CA 02" },
    { id: "5ba6a280-0cab-11ea-ae25-23c06ec16ad8", description: "CM 04" },
    { id: "5ba6a281-0cab-11ea-ae26-53479eddbadd", description: "CM 05" },
    { id: "5ba6c972-0cab-11ea-ae27-43ec40d071de", description: "CO 02" },
    { id: "5ba6c973-0cab-11ea-ae28-a33ce35cce3d", description: "CO 03" },
    { id: "5ba6f06e-0cab-11ea-ae29-e7b765559573", description: "CO 03" },
    { id: "5ba6f06f-0cab-11ea-ae2a-53ad82a93dce", description: "CO 04" },
    { id: "5ba6f070-0cab-11ea-ae2b-6b21264e9a06", description: "CR 02" },
    { id: "5ba7188c-0cab-11ea-ae2c-7bdab37be2e3", description: "CR 03" },
    { id: "5ba7188d-0cab-11ea-ae2d-73fc37115cb8", description: "CR 04" },
    { id: "5ba7188e-0cab-11ea-ae2e-277d85f1193f", description: "CR 05" },
    { id: "5ba73e3e-0cab-11ea-ae2f-5b759ff06ea1", description: "CS 02" },
    { id: "5ba73e3f-0cab-11ea-ae30-7f3dc346909a", description: "CS 03" },
    { id: "5ba76544-0cab-11ea-ae31-43cf31090aa0", description: "CS 04" },
    { id: "5ba76545-0cab-11ea-ae32-9bcf061b8687", description: "CS 04" },
    { id: "5ba76546-0cab-11ea-ae33-0f58355fdd8c", description: "CS 05" },
    { id: "5ba78c54-0cab-11ea-ae34-2bc0bbe358fe", description: "EC 01" },
    { id: "5ba7b47c-0cab-11ea-ae35-0f48eec9aa68", description: "EC 02" },
    { id: "5ba7b47d-0cab-11ea-ae36-9ff232b9377b", description: "EC 03" },
    { id: "5ba7da2e-0cab-11ea-ae37-37c6ea2d6541", description: "EC 04" },
    { id: "5ba80120-0cab-11ea-ae38-ffdc76981a3e", description: "EC 05" },
    { id: "5ba829b6-0cab-11ea-ae39-1fbd16b3fc41", description: "EC 06" },
    { id: "5ba829b7-0cab-11ea-ae3a-a39443621882", description: "EC 08" },
    { id: "5ba85080-0cab-11ea-ae3b-8f41f3a10ac2", description: "EC 07" },
    { id: "5ba876a0-0cab-11ea-ae3c-2761ce1ca02d", description: "EC 07" },
    { id: "5ba89cf2-0cab-11ea-ae3d-8b28fd69dad0", description: "EDEDS02" },
    { id: "5ba89cf3-0cab-11ea-ae3e-8778193f9410", description: "EG 02" },
    { id: "5ba8c3f8-0cab-11ea-ae3f-ef9cf3c20842", description: "EG 03" },
    { id: "5ba8eb12-0cab-11ea-ae40-7fd69d90d4d7", description: "EG 04" },
    { id: "5ba91240-0cab-11ea-ae41-b3d02ddad566", description: "EG 05" },
    { id: "5ba938ce-0cab-11ea-ae42-13157a2a8a95", description: "EG 06" },
    { id: "5ba938cf-0cab-11ea-ae43-bbb77eb2a5b6", description: "EG 07" },
    { id: "5ba95fc0-0cab-11ea-ae44-af721524f035", description: "EL 01" },
    { id: "5ba95fc1-0cab-11ea-ae45-bf6e7978aa6c", description: "EL 02" },
    { id: "5ba986c6-0cab-11ea-ae46-3f590cb924e2", description: "EL 03" },
    { id: "5ba986c7-0cab-11ea-ae47-e3802611b2be", description: "EL 04" },
    { id: "5ba9ada4-0cab-11ea-ae48-27a57f292811", description: "EL 05" },
    { id: "5ba9ada5-0cab-11ea-ae49-a73abac775af", description: "EL 06" },
    { id: "5ba9d496-0cab-11ea-ae4a-afc86010cd88", description: "EL 07" },
    { id: "5ba9fbce-0cab-11ea-ae4b-ebedc8c6fc9d", description: "EL 08" },
    { id: "5baa499e-0cab-11ea-ae4c-23de258398dd", description: "ENENG02" },
    { id: "5baa70fe-0cab-11ea-ae4d-6ff6827f90f9", description: "ENENG03" },
    { id: "5baa978c-0cab-11ea-ae4e-1fdc03c4b14d", description: "ENENG04" },
    { id: "5baabe6a-0cab-11ea-ae4f-538019c9249d", description: "ENENG05" },
    { id: "5baae55c-0cab-11ea-ae50-bf8851ff410f", description: "ENENG05" },
    { id: "5baae55d-0cab-11ea-ae51-43d6dd01d220", description: "ENENG06" },
    { id: "5bab0c4e-0cab-11ea-ae52-fb0eb7a50c7a", description: "EX 01" },
    { id: "5bab332c-0cab-11ea-ae53-8f8a2bd0b6f8", description: "EX 02" },
    { id: "5bab332d-0cab-11ea-ae54-97e7bb0289cf", description: "EX 03" },
    { id: "5bab5a28-0cab-11ea-ae55-bb24ace5c8f1", description: "EX 04" },
    { id: "5bab5a29-0cab-11ea-ae56-df09fd2ee8a5", description: "EX 05" },
    { id: "5bab811a-0cab-11ea-ae57-8b437c44261b", description: "FI 01" },
    { id: "5bab811b-0cab-11ea-ae58-efdf458aa0e9", description: "FI 02" },
    { id: "5bab811c-0cab-11ea-ae59-77ff10830789", description: "FI 03" },
    { id: "5baba802-0cab-11ea-ae5a-3b053c95ad17", description: "FI 04" },
    { id: "5baba803-0cab-11ea-ae5b-234626c746e8", description: "FI 04" },
    { id: "5babcefe-0cab-11ea-ae5c-7311c66d4dcd", description: "GLCOI12" },
    { id: "5babceff-0cab-11ea-ae5d-7b4f6c17c12e", description: "GLEIM10" },
    { id: "5babf604-0cab-11ea-ae5e-0b7ba9a429aa", description: "GLEIM12" },
    { id: "5bac1d6e-0cab-11ea-ae5f-e3e9a86c48a6", description: "GLMAM10" },
    { id: "5bac43fc-0cab-11ea-ae60-6fde525a8fe6", description: "GLMAN06" },
    { id: "5bac6aee-0cab-11ea-ae61-ef1a06420a91", description: "GLMAN09" },
    { id: "5bac9262-0cab-11ea-ae62-2baf08a8aa94", description: "GLMDO06" },
    { id: "5bacb8dc-0cab-11ea-ae63-03ab545692fb", description: "GLPCF06" },
    { id: "5bacdfb0-0cab-11ea-ae64-ef932e9454a2", description: "GLPIP09" },
    { id: "5bacdfb1-0cab-11ea-ae65-1720bec27274", description: "GLPIP10" },
    { id: "5bad06c0-0cab-11ea-ae66-c7c263945e58", description: "GLPIP12" },
    { id: "5bad2dbc-0cab-11ea-ae67-1f07d04ddfde", description: "GLPRW06" },
    { id: "5bad2dbd-0cab-11ea-ae68-ff2cd01eb6fa", description: "GLWOW09" },
    { id: "5bad54ae-0cab-11ea-ae69-c32e5ba547ad", description: "GLWOW10" },
    { id: "5bad7b8c-0cab-11ea-ae6a-e3a1869e4315", description: "GSMPS04" },
    { id: "5bad7b8d-0cab-11ea-ae6b-972517b65763", description: "GSMPS06" },
    { id: "5bada3be-0cab-11ea-ae6c-33ff58d02e42", description: "GSPRC05" },
    { id: "5bada3bf-0cab-11ea-ae6d-63b3cf690c1c", description: "GSSTS03" },
    { id: "5badc970-0cab-11ea-ae6e-e3f487bd4577", description: "GSSTS04" },
    { id: "5badc971-0cab-11ea-ae6f-1b857dc03de8", description: "GSSTS05" },
    { id: "5badc972-0cab-11ea-ae70-8ba6a4fb763a", description: "GSSTS06" },
    { id: "5badf1a2-0cab-11ea-ae71-7f52d60f5ff0", description: "GSSTS07" },
    { id: "5bae1768-0cab-11ea-ae72-478db069fac5", description: "GT 01" },
    { id: "5bae1769-0cab-11ea-ae73-976fddfd4393", description: "GT 02" },
    { id: "5bae3e5a-0cab-11ea-ae74-4fb1d55591d1", description: "GT 03" },
    { id: "5bae3e5b-0cab-11ea-ae75-9f4024d20b38", description: "GT 04" },
    { id: "5bae6646-0cab-11ea-ae76-83d8485df223", description: "GT 05" },
    { id: "5bae6647-0cab-11ea-ae77-27e47981fbf9", description: "GX 00" },
    { id: "5bae6648-0cab-11ea-ae78-d3dff17b9922", description: "HP 05" },
    { id: "5bae8c3e-0cab-11ea-ae79-47f0c17273c4", description: "HP 08" },
    { id: "5bae8c3f-0cab-11ea-ae7a-5744bf9fd703", description: "IS 01" },
    { id: "5baeb330-0cab-11ea-ae7b-7f8cdcf36193", description: "IS 02" },
    { id: "5baeb331-0cab-11ea-ae7c-ab0b28686e96", description: "IS 03" },
    { id: "5baeb332-0cab-11ea-ae7d-0343156f48d4", description: "IS 04" },
    { id: "5baeda22-0cab-11ea-ae7e-7b68e097f039", description: "IS 05" },
    { id: "5baeda23-0cab-11ea-ae7f-f3c9ec15b7dd", description: "IS 06" },
    { id: "5baf011e-0cab-11ea-ae80-13b44f33a23b", description: "IS 06" },
    { id: "5baf011f-0cab-11ea-ae81-43d94fda70fc", description: "LS 01" },
    { id: "5baf282e-0cab-11ea-ae82-afc3924ff1f7", description: "LS 02" },
    { id: "5baf282f-0cab-11ea-ae83-ef5aea3f353f", description: "LS 03" },
    { id: "5baf4f20-0cab-11ea-ae84-071a0dec0008", description: "LS 04" },
    { id: "5baf4f21-0cab-11ea-ae85-930930c04b1e", description: "MM 01" },
    { id: "5baf763a-0cab-11ea-ae86-d78839ac00d9", description: "MM 02" },
    { id: "5baf9d18-0cab-11ea-ae87-fbb70c47a01c", description: "MM 03" },
    { id: "5bafc414-0cab-11ea-ae88-97f429bab878", description: "OM 02" },
    { id: "5bafc415-0cab-11ea-ae89-23f1948931ec", description: "OM 04" },
    { id: "5bafec28-0cab-11ea-ae8a-fb4f06dd37cd", description: "PC 02" },
    { id: "5bafec29-0cab-11ea-ae8b-63d9f12594d1", description: "PC 05" },
    { id: "5bb011ee-0cab-11ea-ae8c-97daf1936532", description: "PE 01" },
    { id: "5bb011ef-0cab-11ea-ae8d-bf4cb1ebea4a", description: "PE 02" },
    { id: "5bb03912-0cab-11ea-ae8e-77df5fd2147e", description: "PE 03" },
    { id: "5bb05fc8-0cab-11ea-ae8f-7b2ffe0a81b2", description: "PE 04" },
    { id: "5bb05fc9-0cab-11ea-ae90-0f34584f2e0c", description: "PE 05" },
    { id: "5bb05fca-0cab-11ea-ae91-1f7851d6b8d1", description: "PE 06" },
    { id: "5bb086ba-0cab-11ea-ae92-97398b80ae8a", description: "PE 06" },
    { id: "5bb0adac-0cab-11ea-ae93-0b1a52032ce7", description: "PG 01" },
    { id: "5bb0adad-0cab-11ea-ae94-132251daf083", description: "PG 02" },
    { id: "5bb0d494-0cab-11ea-ae95-a325c21dc260", description: "PG 03" },
    { id: "5bb0d495-0cab-11ea-ae96-fbda001fac4c", description: "PG 04" },
    { id: "5bb0fcf8-0cab-11ea-ae97-f72e5164b5df", description: "PG 05" },
    { id: "5bb122dc-0cab-11ea-ae98-132790149637", description: "PG 06" },
    { id: "5bb149c4-0cab-11ea-ae99-4f701eb8e677", description: "PG 06" },
    { id: "5bb170a2-0cab-11ea-ae9a-17a24643ae52", description: "PM 01" },
    { id: "5bb170a3-0cab-11ea-ae9b-836be2ae49b4", description: "PM 02" },
    { id: "5bb19762-0cab-11ea-ae9c-6fccb258b98e", description: "PM 03" },
    { id: "5bb19763-0cab-11ea-ae9d-770687a54ad9", description: "PM 04" },
    { id: "5bb1be68-0cab-11ea-ae9e-27ef698ef6c0", description: "PM 05" },
    { id: "5bb1be69-0cab-11ea-ae9f-c7c71022b8e3", description: "PM 06" },
    { id: "5bb1e564-0cab-11ea-aea0-3bad5cd492ab", description: "PM 06" },
    { id: "5bb1e565-0cab-11ea-aea1-1ba63bfe7e1c", description: "PROFO02" },
    { id: "5bb1e566-0cab-11ea-aea2-27d66a9fbd3c", description: "PY 05" },
    { id: "5bb20c4c-0cab-11ea-aea3-1712d5c2d73c", description: "SEREM01" },
    { id: "5bb20c4d-0cab-11ea-aea4-0f0107ef4b2c", description: "SEREM02" },
    { id: "5bb2333e-0cab-11ea-aea5-1f3208a92f5e", description: "SERES01" },
    { id: "5bb2333f-0cab-11ea-aea6-5f9cd71e39fb", description: "SERES02" },
    { id: "5bb23340-0cab-11ea-aea7-6f16e97774c0", description: "SERES03" },
    { id: "5bb25a44-0cab-11ea-aea8-4baf4dd81fda", description: "SERES04" },
    { id: "5bb25a45-0cab-11ea-aea9-07d946dd69c6", description: "SERES04" },
    { id: "5bb28136-0cab-11ea-aeaa-f39def948db3", description: "SERES05" },
    { id: "5bb28137-0cab-11ea-aeab-5767a7f1b9f4", description: "SGPAT02" },
    { id: "5bb28138-0cab-11ea-aeac-af32ee41b791", description: "SGPAT03" },
    { id: "5bb2a83c-0cab-11ea-aead-33cde180b604", description: "SGPAT04" },
    { id: "5bb2a83d-0cab-11ea-aeae-23cddd68a8bd", description: "SGPAT05" },
    { id: "5bb2a83e-0cab-11ea-aeaf-0fb91dc5f615", description: "SGPAT06" },
    { id: "5bb2cf10-0cab-11ea-aeb0-9f789b28b166", description: "SGPAT07" },
    { id: "5bb2cf11-0cab-11ea-aeb1-57981c83b2c9", description: "SGPAT07" },
    { id: "5bb2f60c-0cab-11ea-aeb2-e7839f696dc1", description: "SGPAT08" },
    { id: "5bb2f60d-0cab-11ea-aeb3-eb5c560f4c1f", description: "STOCE03" },
    { id: "5bb2f60e-0cab-11ea-aeb4-2320af410324", description: "STSCY02" },
    { id: "5bb31cfe-0cab-11ea-aeb5-f37d160c481c", description: "STSCY03" },
    { id: "5bb31cff-0cab-11ea-aeb6-8f9392ede6e9", description: "STSCY04" },
    { id: "5bb31d00-0cab-11ea-aeb7-e3a45099e2d5", description: "TI 03" },
    { id: "5bb34404-0cab-11ea-aeb8-fb3f66fb3706", description: "TI 04" },
    { id: "5bb34405-0cab-11ea-aeb9-0fab25e70d23", description: "TI 05" },
    { id: "5bb36af6-0cab-11ea-aeba-3f309e3cc9c7", description: "TI 06" },
    { id: "5bb36af7-0cab-11ea-aebb-2b58ed3e35b2", description: "TI 07" },
    { id: "5bb36af8-0cab-11ea-aebc-73b2282d3a74", description: "TI 08" },
    { id: "5bb391e8-0cab-11ea-aebd-f3226247a573", description: "TI 08" }
  ]
};

responses["getKeyCompetency"] = {
  data: [
    {
      id: "5b9f067e-0cab-11ea-ae13-2fafd366d3dc",
      description: { en: "Achieve results", fr: "Obtenir des résultats" }
    },
    {
      id: "5b9f5480-0cab-11ea-ae14-3b4a82db1f22",
      description: {
        en: "Collaborate with partners and stakeholders",
        fr: "Collaborer avec les partenaires et les intervenants"
      }
    },
    {
      id: "5b9f7b9a-0cab-11ea-ae15-93e2fc1f555c",
      description: {
        en: "Create vision and strategy",
        fr: "Créer une vision et une stratégie"
      }
    },
    {
      id: "5b9fa282-0cab-11ea-ae16-e766913a66a6",
      description: {
        en: "Uphold integrity and respect",
        fr: "Préserver l'intégrité et le respect"
      }
    },
    {
      id: "5b9fa283-0cab-11ea-ae17-27c956b07864",
      description: { en: "Mobilize people", fr: "Mobiliser des personnes" }
    },
    {
      id: "5b9fc9b0-0cab-11ea-ae18-e7f645444be7",
      description: {
        en: "Promote innovation and guide change",
        fr: "Promouvoir l'innovation et orienter le changement"
      }
    }
  ]
};

responses["getLocation"] = {
  data: [
    {
      id: "5c1cb2e0-0cab-11ea-b2d9-67e4202587ff",
      description: {
        en: "191 University Ave, Charlottetown, Prince Edward Island",
        fr: "191 av University, Charlottetown, Île-du-Prince-Édouard"
      }
    },
    {
      id: "5c1d00f6-0cab-11ea-b2da-d718177667e9",
      description: {
        en: "50 Brown Ave, Dartmouth, Nova Scotia",
        fr: "50 av Brown, Dartmouth, Nouvelle-Écosse"
      }
    },
    {
      id: "5c1d27b6-0cab-11ea-b2db-ab2621d229ae",
      description: {
        en: "1344 Summer St, Halifax, Nova Scotia",
        fr: "1344 rue Summer, Halifax, Nouvelle-Écosse"
      }
    },
    {
      id: "5c1d27b7-0cab-11ea-b2dc-8f35d746d202",
      description: {
        en: "1505 Barrington St, Halifax, Nova Scotia",
        fr: "1505 rue Barrington, Halifax, Nouvelle-Écosse"
      }
    },
    {
      id: "5c1d5056-0cab-11ea-b2dd-f3d70e088253",
      description: {
        en: "1045 Main St, Moncton, New Brunswick",
        fr: "1045 rue Main, Moncton, Nouveau-Brunswick"
      }
    },
    {
      id: "5c1d75a4-0cab-11ea-b2de-47680b574dfe",
      description: {
        en: "189 Prince William St, Saint John, New Brunswick",
        fr: "189 rue Prince-William, Saint John, Nouveau-Brunswick"
      }
    },
    {
      id: "5c1d9c8c-0cab-11ea-b2df-0f99983b3c2d",
      description: {
        en: "10 Barters Hill, St Johns, Newfoundland and Labrador",
        fr: "10 Barters Hill, St Johns, Terre-Neuve-et-Labrador"
      }
    },
    {
      id: "5c1d9c8d-0cab-11ea-b2e0-73b1185a7033",
      description: {
        en: "196 George St, Sydney, Nova Scotia",
        fr: "196 rue George, Sydney, Nouvelle-Écosse"
      }
    },
    {
      id: "5c1dc4b4-0cab-11ea-b2e1-ef25d6a2f556",
      description: {
        en: "50 Victoria St, Gatineau, Québec",
        fr: "50 rue Victoria, Gatineau, Québec"
      }
    },
    {
      id: "5c1dc4b5-0cab-11ea-b2e2-0b2aff180f39",
      description: {
        en: "56 Sparks St, Ottawa, Ontario",
        fr: "56 rue Sparks, Ottawa, Ontario"
      }
    },
    {
      id: "5c1dc4b6-0cab-11ea-b2e3-3fef868a67b3",
      description: {
        en: "7 Bayview Rd, Ottawa, Ontario",
        fr: "7 ch Bayview, Ottawa, Ontario"
      }
    },
    {
      id: "5c1debc4-0cab-11ea-b2e4-e3a56ce0cb28",
      description: {
        en: "3701 Carling Ave, Ottawa, Ontario",
        fr: "3701 av Carling, Ottawa, Ontario"
      }
    },
    {
      id: "5c1debc5-0cab-11ea-b2e5-ef3599769f05",
      description: {
        en: "161 Goldenrod Drwy, Ottawa, Ontario",
        fr: "161 prom Goldenrod, Ottawa, Ontario"
      }
    },
    {
      id: "5c1e12d4-0cab-11ea-b2e6-0be81a7858f8",
      description: {
        en: "235 Queen St, Ottawa, Ontario",
        fr: "235 rue Queen, Ottawa, Ontario"
      }
    },
    {
      id: "5c1e12d5-0cab-11ea-b2e7-67c362d8bd40",
      description: {
        en: "410 Laurier Ave W, Ottawa, Ontario",
        fr: "410 av Laurier O, Ottawa, Ontario"
      }
    },
    {
      id: "5c1e3854-0cab-11ea-b2e8-57be79ab615f",
      description: {
        en: "180 Kent St, Ottawa, Ontario",
        fr: "180 rue Kent, Ottawa, Ontario"
      }
    },
    {
      id: "5c1e5f46-0cab-11ea-b2e9-0721aaaaa3df",
      description: {
        en: "151 Tunneys Pasture Drwy, Ottawa, Ontario",
        fr: "151 prom Tunneys Pasture, Ottawa, Ontario"
      }
    },
    {
      id: "5c1e86b0-0cab-11ea-b2ea-1f12640cfd02",
      description: {
        en: "8948 Erin Halton TLine, Acton, Ontario",
        fr: "8948 Erin-Halton TLine, Acton, Ontario"
      }
    },
    {
      id: "5c1ead48-0cab-11ea-b2eb-5fc9b6be5f6f",
      description: {
        en: "274 Mackenzie Ave, Ajax, Ontario",
        fr: "274 av Mackenzie, Ajax, Ontario"
      }
    },
    {
      id: "5c1ed43a-0cab-11ea-b2ec-f7112a2b559a",
      description: {
        en: "126 Wellington St W, Aurora, Ontario",
        fr: "126 rue Wellington O, Aurora, Ontario"
      }
    },
    {
      id: "5c1efb4a-0cab-11ea-b2ed-df8b07a6602e",
      description: {
        en: "328 Sidney St, Belleville, Ontario",
        fr: "328 rue Sidney, Belleville, Ontario"
      }
    },
    {
      id: "5c1f221e-0cab-11ea-b2ee-c397e11230ba",
      description: {
        en: "4475 Service Rd North, Burlington, Ontario",
        fr: "4475 Service Rd Nord, Burlington, Ontario"
      }
    },
    {
      id: "5c1f221f-0cab-11ea-b2ef-ffb346e3b688",
      description: {
        en: "251 Arvin Ave, Stoney Creek, Ontario",
        fr: "251 av Arvin, Stoney Creek, Ontario"
      }
    },
    {
      id: "5c1f4924-0cab-11ea-b2f0-6b07188e108d",
      description: {
        en: "55 Bay St N, Hamilton, Ontario",
        fr: "55 rue Bay N, Hamilton, Ontario"
      }
    },
    {
      id: "5c1f9712-0cab-11ea-b2f1-cb1196dc793b",
      description: {
        en: "100 Park St, 2nd Fl, Kenora, Ontario",
        fr: "100 rue Park, 2e étage, Kenora, Ontario"
      }
    },
    {
      id: "5c1f9713-0cab-11ea-b2f2-6ff491e9f32f",
      description: {
        en: "30 Duke St W, Kitchener, Ontario",
        fr: "30 rue Duke O, Kitchener, Ontario"
      }
    },
    {
      id: "5c1fbe2c-0cab-11ea-b2f3-835784d945e9",
      description: {
        en: "78 Meg Dr, London, Ontario",
        fr: "78 prom Meg, London, Ontario"
      }
    },
    {
      id: "5c1fe4ec-0cab-11ea-b2f4-73bac8f4b433",
      description: {
        en: "451 Talbot St, London, Ontario",
        fr: "451 rue Talbot, London, Ontario"
      }
    },
    {
      id: "5c1fe4ed-0cab-11ea-b2f5-a3db5b26f799",
      description: {
        en: "232 Yorktech Dr, Markham, Ontario",
        fr: "232 prom Yorktech, Markham, Ontario"
      }
    },
    {
      id: "5c1fe4ee-0cab-11ea-b2f6-f74ba4b89c29",
      description: {
        en: "175A Admiral Blvd, Mississauga, Ontario",
        fr: "175A boul Admiral, Mississauga, Ontario"
      }
    },
    {
      id: "5c200bde-0cab-11ea-b2f7-57a7d8506558",
      description: {
        en: "345 Harry Walker Pky S, Newmarket, Ontario",
        fr: "345 prom Harry Walker S, Newmarket, Ontario"
      }
    },
    {
      id: "5c200bdf-0cab-11ea-b2f8-433cd781c96c",
      description: {
        en: "107 Shirreff Ave, North Bay, Ontario",
        fr: "107 av Shirreff, North Bay, Ontario"
      }
    },
    {
      id: "5c203410-0cab-11ea-b2f9-f3f65b73ef9c",
      description: {
        en: "160 Elgin St, Ottawa, Ontario",
        fr: "160 rue Elgin, Ottawa, Ontario"
      }
    },
    {
      id: "5c203411-0cab-11ea-b2fa-57a385210746",
      description: {
        en: "1161 Crawford Dr, Peterborough, Ontario",
        fr: "1161 promCrawford, Peterborough, Ontario"
      }
    },
    {
      id: "5c203412-0cab-11ea-b2fb-c3e897dff78d",
      description: {
        en: "2 Queen St E, Sault Ste Marie, Ontario",
        fr: "2 rue Queen E, Sault Ste Marie, Ontario"
      }
    },
    {
      id: "5c2059d6-0cab-11ea-b2fc-af60007be5df",
      description: {
        en: "19 Lisgar St, Sudbury, Ontario",
        fr: "19 rue Lisgar, Sudbury, Ontario"
      }
    },
    {
      id: "5c2059d7-0cab-11ea-b2fd-c3c27687d0b7",
      description: {
        en: "875 Notre Dame Ave, Sudbury, Ontario",
        fr: "875 av Notre-Dame, Sudbury, Ontario"
      }
    },
    {
      id: "5c2080c8-0cab-11ea-b2fe-37ac04607092",
      description: {
        en: "201 May St N, Thunder Bay, Ontario",
        fr: "201 rue May N, Thunder Bay, Ontario"
      }
    },
    {
      id: "5c2080c9-0cab-11ea-b2ff-2facb689f8c6",
      description: {
        en: "886 Alloy Pl, Thunder Bay, Ontario",
        fr: "886 place Alloy, Thunder Bay, Ontario"
      }
    },
    {
      id: "5c20a7c4-0cab-11ea-b300-1f66dc14007f",
      description: {
        en: "120 Cedar St S, Timmins, Ontario",
        fr: "120 rue Cedar S, Timmins, Ontario"
      }
    },
    {
      id: "5c20a7c5-0cab-11ea-b301-ab37b8a3adbc",
      description: {
        en: "151 Yonge St, Toronto, Ontario",
        fr: "151 rue Yonge, Toronto, Ontario"
      }
    },
    {
      id: "5c20a7c6-0cab-11ea-b302-3bfc5ff61ded",
      description: {
        en: "139 Northfield Dr W, Waterloo, Ontario",
        fr: "139 prom Northfield O, Waterloo, Ontario"
      }
    },
    {
      id: "5c20ceb6-0cab-11ea-b303-b3267588beb3",
      description: {
        en: "1500 Ouellette Ave, Windsor, Ontario",
        fr: "1500 av Ouellette, Windsor, Ontario"
      }
    },
    {
      id: "5c20ceb7-0cab-11ea-b304-63089da8960a",
      description: {
        en: "1726 Dolphin Ave, Kelowna, British Columbia",
        fr: "1726 av Dolphin, Kelowna, Columbie-Britannique"
      }
    },
    {
      id: "5c20f59e-0cab-11ea-b305-93c1e089228d",
      description: {
        en: "277 Winnipeg St, Penticton, British Columbia",
        fr: "277 rue Winnipeg, Penticton, Columbie-Britannique"
      }
    },
    {
      id: "5c20f59f-0cab-11ea-b306-9741c280f1c1",
      description: {
        en: "280 Victoria St, Prince George, British Columbia",
        fr: "280 rue Victoria, Prince George, Columbie-Britannique"
      }
    },
    {
      id: "5c20f5a0-0cab-11ea-b307-47d6140ff1e0",
      description: {
        en: "13401 108 Ave, Surrey, British Columbia",
        fr: "13401 108 Av, Surrey, Columbie-Britannique"
      }
    },
    {
      id: "5c211c90-0cab-11ea-b308-0b252b151386",
      description: {
        en: "300 Georgia St W, Vancouver, British Columbia",
        fr: "300 rue Georgia O, Vancouver, Columbie-Britannique"
      }
    },
    {
      id: "5c211c91-0cab-11ea-b309-3b197cfa3d6c",
      description: {
        en: "3625 Lougheed Hwy, Vancouver, British Columbia",
        fr: "3625 Autoroute Lougheed, Vancouver, Columbie-Britannique"
      }
    },
    {
      id: "5c214382-0cab-11ea-b30a-37513f150ea9",
      description: {
        en: "1230 Government St, Victoria, British Columbia",
        fr: "1230 rue Government, Victoria, Columbie-Britannique"
      }
    },
    {
      id: "5c214383-0cab-11ea-b30b-ab64675bebc3",
      description: {
        en: "300 Main St, Whitehorse, Yukon",
        fr: "300 rue Main, Whitehorse, Yukon"
      }
    },
    {
      id: "5c214384-0cab-11ea-b30c-2b0659cdc5b2",
      description: {
        en: "220 4 Ave SE, Calgary, Alberta",
        fr: "220 4 Av SE, Calgary, Alberta"
      }
    },
    {
      id: "5c216a88-0cab-11ea-b30d-c7fde6dcb5e0",
      description: {
        en: "9305 50 St NW, Edmonton, Alberta",
        fr: "9305 50 Rue NO, Edmonton, Alberta"
      }
    },
    {
      id: "5c21917a-0cab-11ea-b30e-9f64be886f5e",
      description: {
        en: "9700 Jasper Ave NW, Edmonton, Alberta",
        fr: "9700 av Jasper NO, Edmonton, Alberta"
      }
    },
    {
      id: "5c21917b-0cab-11ea-b30f-af57b510b5e5",
      description: {
        en: "1945 Hamilton St, Regina, Saskatchewan",
        fr: "1945 rue Hamilton, Regina, Saskatchewan"
      }
    },
    {
      id: "5c21b9fc-0cab-11ea-b310-630b0978272e",
      description: {
        en: "123 2nd Ave S, Saskatoon, Saskatchewan",
        fr: "123 2e Av S, Saskatoon, Saskatchewan"
      }
    },
    {
      id: "5c21b9fd-0cab-11ea-b311-bfda37e4bebd",
      description: {
        en: "400 St Mary Ave, Winnipeg, Manitoba",
        fr: "400 av St Mary, Winnipeg, Manitoba"
      }
    },
    {
      id: "5c21df7c-0cab-11ea-b312-d763f809c286",
      description: {
        en: "5101 50 Ave, Yellowknife, Northwest Territories",
        fr: "5101 50 Av, Yellowknife, Territoires du Nord-Ouest"
      }
    },
    {
      id: "5c222d60-0cab-11ea-b313-5fa63cc0d81d",
      description: {
        en: "1155 Metcalfe St, Montréal, Québec",
        fr: "1155 rue Metcalfe, Montréal, Québec"
      }
    },
    {
      id: "5c22543e-0cab-11ea-b314-5bb8f0dac461",
      description: {
        en: "1550 d'Estimauville Ave, Québec, Québec",
        fr: "1550 av d'Estimauville, Québec, Québec"
      }
    },
    {
      id: "5c22543f-0cab-11ea-b315-6f3c3e7384ec",
      description: {
        en: "2665 King St W, Sherbrooke, Québec",
        fr: "2665 rue King O, Sherbrooke, Québec"
      }
    },
    {
      id: "5c227c7a-0cab-11ea-b316-c331c0a7e7c9",
      description: {
        en: "9177 Langelier Blvd, St-Léonard, Québec",
        fr: "9177 boul Langelier, St-Léonard, Québec"
      }
    },
    {
      id: "5888300c-0245-11ea-8d71-362b9e155667",
      description: {
        en: "9177 Langelier Blvd, St-Léonard, Québec",
        fr: "9177 boul Langelier, St-Léonard, Québec"
      }
    },
    {
      id: "60fd7bc0-0245-11ea-8d71-362b9e155667",
      description: {
        en: "5101 50 Ave, Yellowknife, Northwest Territories",
        fr: "5101 50 Av, Yellowknife, Territoires du Nord-Ouest"
      }
    },
    {
      id: "64f770aa-0245-11ea-8d71-362b9e155667",
      description: {
        en: "1945 Hamilton St, Regina, Saskatchewan",
        fr: "1945 rue Hamilton, Regina, Saskatchewan"
      }
    },
    {
      id: "6a91edec-0245-11ea-8d71-362b9e155667",
      description: {
        en: "232 Yorktech Dr, Markham, Ontario",
        fr: "232 prom Yorktech, Markham, Ontario"
      }
    }
  ]
};

responses["getSchool"] = {
  data: [
    {
      id: "5bd50e04-0cab-11ea-afea-87f58d6d23eb",
      description: "High School - All"
    },
    {
      id: "5bd581a4-0cab-11ea-afeb-670dfecec109",
      description: "Acadia University"
    },
    {
      id: "5bd5a8b4-0cab-11ea-afec-370c10a87b81",
      description: "Cape Breton, Univ. College of"
    },
    {
      id: "5bd5cfb0-0cab-11ea-afed-8b3fd93bd153",
      description: "Sainte-Anne, Université"
    },
    {
      id: "5bd5f68e-0cab-11ea-afee-c74e76f6e6ae",
      description: "Dalhousie University"
    },
    {
      id: "5bd5f68f-0cab-11ea-afef-6bcb570e3a86",
      description: "Memorial Univ of Newfoundland"
    },
    {
      id: "5bd61ede-0cab-11ea-aff0-f7a7ecf4b097",
      description: "Moncton, Université de"
    },
    {
      id: "5bd64472-0cab-11ea-aff1-3371fc680c4b",
      description: "Mount Allison, University"
    },
    {
      id: "5bd66d12-0cab-11ea-aff2-6776d7d7c928",
      description: "Mount Saint Vincent University"
    },
    {
      id: "5bd66d13-0cab-11ea-aff3-0fed205517be",
      description: "Nova Scotia College Art/Design"
    },
    {
      id: "5bd6938c-0cab-11ea-aff4-171d6fdc9680",
      description: "Saint Francis Xavier U."
    },
    {
      id: "5bd6ba92-0cab-11ea-aff5-d7202512af76",
      description: "Saint-Louis Maillet (M. U. C.)"
    },
    {
      id: "5bd6ba93-0cab-11ea-aff6-7f94cc0b02f8",
      description: "Shippagan (Moncton U. Campus)"
    },
    {
      id: "5bd6e044-0cab-11ea-aff7-1f65076ee120",
      description: "Saint Mary's University"
    },
    {
      id: "5bd6e045-0cab-11ea-aff8-4343cb564a6a",
      description: "Nova Scotia, Technical Univ"
    },
    {
      id: "5bd6e046-0cab-11ea-aff9-6fabfc9a12f7",
      description: "New Brunswick, University of"
    },
    {
      id: "5bd7074a-0cab-11ea-affa-af297d392a3a",
      description: "Saint John Campus, U.N.B."
    },
    {
      id: "5bd7074b-0cab-11ea-affb-8b35bd45d7c8",
      description: "Prince Edward Island, Univ"
    },
    {
      id: "5bd72fb8-0cab-11ea-affc-7f3c7fbb7399",
      description: "Saint Thomas University"
    },
    {
      id: "5bd755b0-0cab-11ea-affd-c712df33ed59",
      description: "Atlantic School of Theology"
    },
    {
      id: "5bd77c48-0cab-11ea-affe-a3cedb1b93f7",
      description: "Bishop's University"
    },
    {
      id: "5bd7a34e-0cab-11ea-afff-eb7f0bd86bae",
      description: "Sir George Williams University"
    },
    {
      id: "5bd7ca0e-0cab-11ea-b000-2f588b3b031b",
      description: "Concordia University"
    },
    {
      id: "5bd7ca0f-0cab-11ea-b001-8fd94cec6d58",
      description: "King's College, University of"
    },
    {
      id: "5bd7f100-0cab-11ea-b002-7318fbc9e79d",
      description: "École de Hautes études comm"
    },
    {
      id: "5bd7f101-0cab-11ea-b003-5b7118ceff71",
      description: "Éc.nat.admin. publ.-Chicoutimi"
    },
    {
      id: "5bd817fc-0cab-11ea-b004-bb409c1a9df7",
      description: "Éc.nat. admin. publ. - Hull"
    },
    {
      id: "5bd817fd-0cab-11ea-b005-fb3406698b5f",
      description: "Éc.nat. admin. publ.- Montréal"
    },
    {
      id: "5bd83ee4-0cab-11ea-b006-8710ea14b356",
      description: "Éc.nat. admin. publ. - Québec"
    },
    {
      id: "5bd83ee5-0cab-11ea-b007-efe8b9aa72b9",
      description: "École Polytechnique - Montréal"
    },
    {
      id: "5bd86662-0cab-11ea-b008-4bd8f7bcf11f",
      description: "École - technologie supérieure"
    },
    {
      id: "5bd88cbe-0cab-11ea-b009-2ffc9bbee10d",
      description: "Laval, Université"
    },
    {
      id: "5bd88cbf-0cab-11ea-b00a-5b3126ef1b72",
      description: "MacDonald Campus (McGill U.)"
    },
    {
      id: "5bd8b45a-0cab-11ea-b00b-bbbcbf0793c1",
      description: "McGill, University of"
    },
    {
      id: "5bd8b45b-0cab-11ea-b00c-8b18373d6303",
      description: "Montréal, Université de"
    },
    {
      id: "5bd8dab6-0cab-11ea-b00d-af0f02a9a30b",
      description: "Sherbrooke, Université de"
    },
    {
      id: "5bd8dab7-0cab-11ea-b00e-5b2f7dc261dd",
      description: "Québec Univ, Chicoutimi"
    },
    {
      id: "5bd901b2-0cab-11ea-b00f-0ffe227bdd3e",
      description: "Québec, Univ. - Outaouais"
    },
    {
      id: "5bd901b3-0cab-11ea-b010-774e46414bee",
      description: "Québec Univ., Montréal"
    },
    {
      id: "5bd92890-0cab-11ea-b011-4f98d65e74ce",
      description: "Québec Univ., Rimouski"
    },
    {
      id: "5bd92891-0cab-11ea-b012-6f1a65730ee8",
      description: "Québec Univ, Rouyn"
    },
    {
      id: "5bd9519e-0cab-11ea-b013-4b87729258eb",
      description: "Québec Univ, Trois-Rivières"
    },
    {
      id: "5bd9519f-0cab-11ea-b014-c39aa9d6b877",
      description: "Atlantic Veterinary College"
    },
    {
      id: "5bd97692-0cab-11ea-b015-cbaf472bbe23",
      description: "Saint-Paul University"
    },
    {
      id: "5bd97693-0cab-11ea-b016-63a4be6e6126",
      description: "Algoma University College"
    },
    {
      id: "5bd99d84-0cab-11ea-b017-a30f839f35f1",
      description: "Brock University"
    },
    {
      id: "5bd99d85-0cab-11ea-b018-73a4603b273c",
      description: "Carleton University"
    },
    {
      id: "5bd9c4c6-0cab-11ea-b019-53ab2c5f6887",
      description: "Guelph, University of"
    },
    {
      id: "5bd9c4c7-0cab-11ea-b01a-8b2c361849dc",
      description: "Hearst - Collège universitaire"
    },
    {
      id: "5bd9c4c8-0cab-11ea-b01b-bb5732036c4d",
      description: "Lakehead University"
    },
    {
      id: "5bd9eb68-0cab-11ea-b01c-2355f523456a",
      description: "Laurentian University"
    },
    {
      id: "5bd9eb69-0cab-11ea-b01d-b32452736140",
      description: "McMaster University"
    },
    {
      id: "5bd9eb6a-0cab-11ea-b01e-0f582e64e94c",
      description: "Nipissing University"
    },
    {
      id: "5bda125a-0cab-11ea-b01f-53877af2b073",
      description: "Ottawa, University of"
    },
    {
      id: "5bda125b-0cab-11ea-b020-1b66f6b61ca4",
      description: "Queen's University"
    },
    {
      id: "5bda125c-0cab-11ea-b021-331a10cf7ecf",
      description: "Royal Military College Canada"
    },
    {
      id: "5bda3960-0cab-11ea-b022-6f688803a38a",
      description: "Ryerson University"
    },
    {
      id: "5bda3961-0cab-11ea-b023-6b363c5d7bce",
      description: "Toronto, University of"
    },
    {
      id: "5bda6052-0cab-11ea-b024-b3b8f7feb6e5",
      description: "Trent University"
    },
    {
      id: "5bda6053-0cab-11ea-b025-2b92f13ff455",
      description: "Waterloo, University of"
    },
    {
      id: "5bda6054-0cab-11ea-b026-b3c8fd2cb218",
      description: "Western Ontario, University of"
    },
    {
      id: "5bda8744-0cab-11ea-b027-9b864282d8d3",
      description: "Wilfrid Laurier University"
    },
    {
      id: "5bdaae68-0cab-11ea-b028-8336d343c506",
      description: "Windsor, University of"
    },
    {
      id: "5bdaae69-0cab-11ea-b029-e33c397495e5",
      description: "York University"
    },
    {
      id: "5bdad596-0cab-11ea-b02a-ab6814db2694",
      description: "Sudbury, University of"
    },
    {
      id: "5bdafc56-0cab-11ea-b02b-cfab916d489d",
      description: "Brandon University"
    },
    {
      id: "5bdb23ca-0cab-11ea-b02c-b369c6f10e94",
      description: "Saint-Boniface, Col. univ."
    },
    {
      id: "5bdb23cb-0cab-11ea-b02d-efc85f5b96af",
      description: "Manitoba, University of"
    },
    {
      id: "5bdb4a08-0cab-11ea-b02e-a342992c9d30",
      description: "Winnipeg, University of"
    },
    {
      id: "5bdb4a09-0cab-11ea-b02f-f7e0897081d5",
      description: "Atlantic Baptist Col. Moncton"
    },
    {
      id: "5bdb4a0a-0cab-11ea-b030-bf3e1a6fcdc0",
      description: "Regina, University of"
    },
    {
      id: "5bdb710e-0cab-11ea-b031-537b2621a91e",
      description: "Saskatchewan, University of"
    },
    {
      id: "5bdb986e-0cab-11ea-b032-0f3797a0cef1",
      description: "Sask. Indian Federated Col."
    },
    {
      id: "5bdb986f-0cab-11ea-b033-538fcdabf3c8",
      description: "Alberta, University of"
    },
    {
      id: "5bdbbf06-0cab-11ea-b034-bbd179acccf2",
      description: "Athabasca University"
    },
    {
      id: "5bdbe620-0cab-11ea-b035-97ae08a396fa",
      description: "Calgary, University of"
    },
    {
      id: "5bdbe621-0cab-11ea-b036-7b43664dabb5",
      description: "Lethbridge, University of"
    },
    {
      id: "5bdc0ce0-0cab-11ea-b037-bf23ab20448c",
      description: "Notre-Dame U. Nelson B.C."
    },
    {
      id: "5bdc0ce1-0cab-11ea-b038-2b37896dd0dd",
      description: "British Columbia,University of"
    },
    {
      id: "5bdc33d2-0cab-11ea-b039-e35a60bf7c8d",
      description: "Simon Fraser University"
    },
    {
      id: "5bdc33d3-0cab-11ea-b03a-3b7248ba2628",
      description: "Victoria, University of"
    },
    {
      id: "5bdc33d4-0cab-11ea-b03b-cf35c8df7bba",
      description: "Royal Roads Military College"
    },
    {
      id: "5bdc5ac4-0cab-11ea-b03c-63a65e4020e8",
      description: "Trinity Western University"
    },
    {
      id: "5bdc5ac5-0cab-11ea-b03d-d71e81ce71f3",
      description: "Northern British Columbia U."
    },
    {
      id: "5bdc5ac6-0cab-11ea-b03e-4b43808f05b5",
      description: "Royal Roads University"
    },
    {
      id: "5bdc81ca-0cab-11ea-b03f-4f4996a2cdb0",
      description: "Other Canadian University"
    },
    {
      id: "5bdca8da-0cab-11ea-b040-7b63d6154ba6",
      description: "University Outside Canada"
    },
    {
      id: "5bdccfae-0cab-11ea-b041-97a4759ed514",
      description: "Canadian Coast Guard College"
    },
    {
      id: "5bdcf6be-0cab-11ea-b042-07e837cfc1d5",
      description: "Fisheries & Marine Inst."
    },
    {
      id: "5bdcf6bf-0cab-11ea-b043-efd975111d3f",
      description: "College of the North Atlantic"
    },
    {
      id: "5bdd1df6-0cab-11ea-b044-2b40ccaf32d2",
      description: "Holland College"
    },
    {
      id: "5bdd1df7-0cab-11ea-b045-3f24fe775c30",
      description: "Maritime Forest Ranger School"
    },
    {
      id: "5bdd4484-0cab-11ea-b046-3b1091e3589c",
      description: "Community Colleges - Bathurst"
    },
    {
      id: "5bdd4485-0cab-11ea-b047-cfb18df50a1f",
      description: "Nova Scotia Agricultural Col."
    },
    {
      id: "5bdd6b94-0cab-11ea-b048-df0ddddf8744",
      description: "Institute of Technology Campus"
    },
    {
      id: "5bdd6b95-0cab-11ea-b049-f3972848ecb3",
      description: "Nova Scotia Survey Institute"
    },
    {
      id: "5bdd6b96-0cab-11ea-b04a-efabc4744cbb",
      description: "Nova Scotia Teachers College"
    },
    {
      id: "5bdd927c-0cab-11ea-b04b-4747b53f7145",
      description: "Atlantic Veterinary Col. (PEI)"
    },
    {
      id: "5bddb96e-0cab-11ea-b04c-eb9b87554a6e",
      description: "Annapolis Campus, NS Cmnty Col"
    },
    {
      id: "5bddb96f-0cab-11ea-b04d-8715bae9d257",
      description: "Burridge Campus-Yarmouth"
    },
    {
      id: "5bdde060-0cab-11ea-b04e-6f478f699b8b",
      description: "Cape Breton Adult Vocat'l Trng"
    },
    {
      id: "5bdde061-0cab-11ea-b04f-13652f27bfcb",
      description: "Geogr. Sci. Col.-Lawrencetown"
    },
    {
      id: "5bdde062-0cab-11ea-b050-e7e866fc3f9a",
      description: "Cumberland Campus,NS Cmnty Col"
    },
    {
      id: "5bde0752-0cab-11ea-b051-5b0686488f93",
      description: "Dartmouth Adult Vocat'l Trng"
    },
    {
      id: "5bde0753-0cab-11ea-b052-eb764e4570b6",
      description: "Halifax Campus, NS Cmnty Col."
    },
    {
      id: "5bde2e44-0cab-11ea-b053-138c8e978f58",
      description: "Hants Campus, NS Cmnty Col."
    },
    {
      id: "5bde2e45-0cab-11ea-b054-276b4002235c",
      description: "I.W. Akerley Campus-Dartmouth"
    },
    {
      id: "5bde2e46-0cab-11ea-b055-d393b262d03a",
      description: "Lunenberg Campus-Bridgewater"
    },
    {
      id: "5bde552c-0cab-11ea-b056-4fa0f31a5fd4",
      description: "Nautical Inst. Campus, NS C.C."
    },
    {
      id: "5bde552d-0cab-11ea-b057-0bcf6ac43f1d",
      description: "Pictou Campus, NS Cmnty Col."
    },
    {
      id: "5bde552e-0cab-11ea-b058-075b7b0d8469",
      description: "Schelburne Campus,NS Cmnty Col"
    },
    {
      id: "5bde7c28-0cab-11ea-b059-f714e21133f0",
      description: "Strait Campus, NS Cmnty Col."
    },
    {
      id: "5bde7c29-0cab-11ea-b05a-4f53f421a72c",
      description: "Sydney Campus-Sydney"
    },
    { id: "5bde7c2a-0cab-11ea-b05b-03e223858870", description: "Cobetc-Truro" },
    {
      id: "5bdea31a-0cab-11ea-b05c-2b7d42dc8d2e",
      description: "Kingstec-Kentville"
    },
    {
      id: "5bdea31b-0cab-11ea-b05d-abd24a4e983c",
      description: "Memorial Composite-SydneyMines"
    },
    {
      id: "5bdeca16-0cab-11ea-b05e-a7f79e6f3b59",
      description: "Truro Campus (Community Col.)"
    },
    {
      id: "5bdef176-0cab-11ea-b05f-87e7d6564105",
      description: "Colchester Campus"
    },
    {
      id: "5bdf1854-0cab-11ea-b060-fb3489951b9e",
      description: "Eastern Cmnt Col.(Clarenville)"
    },
    {
      id: "5bdf1855-0cab-11ea-b061-8b09d7e1af2c",
      description: "Westviking Col. (Stephenville)"
    },
    {
      id: "5bdf3f46-0cab-11ea-b062-bf5d209834ca",
      description: "Labrador College"
    },
    {
      id: "5bdf662e-0cab-11ea-b063-a30f5ffa6fce",
      description: "Central Applied Arts,Tech&C.Ed"
    },
    {
      id: "5bdf662f-0cab-11ea-b064-c7156c18b781",
      description: "Baie-Comeau, Collège de"
    },
    {
      id: "5bdf8ce4-0cab-11ea-b065-ffa89d78ba13",
      description: "Côte-Nord (Hauterive), Col. de"
    },
    {
      id: "5bdf8ce5-0cab-11ea-b066-dfb1d9db7629",
      description: "Côte-Nord(Manicouagan),Col. de"
    },
    {
      id: "5bdf8ce6-0cab-11ea-b067-ebd8e438f648",
      description: "Côte-Nord (Mingan), Collège de"
    },
    {
      id: "5bdfb3ea-0cab-11ea-b068-6f955b563a01",
      description: "Sept-Îles, Collège de"
    },
    {
      id: "5bdfb3eb-0cab-11ea-b069-cfcb9e35db09",
      description: "François-Xavier-Garneau, Col."
    },
    {
      id: "5bdfdae6-0cab-11ea-b06a-afbbcf1c64e2",
      description: "Gaspésie et des Îles, Col. de"
    },
    {
      id: "5bdfdae7-0cab-11ea-b06b-eb58b7569dfc",
      description: "Institut maritime du Québec"
    },
    {
      id: "5be00232-0cab-11ea-b06c-c7edbc9a6d57",
      description: "Pocatière, Collège de la"
    },
    {
      id: "5be028ca-0cab-11ea-b06d-93269914a2d0",
      description: "Inst. tech. agro-ali Pocatière"
    },
    {
      id: "5be028cb-0cab-11ea-b06e-c333c6883012",
      description: "Lévis-Lauzon, Collège"
    },
    {
      id: "5be04fb2-0cab-11ea-b06f-03a18394e024",
      description: "Limoilou, Collège de"
    },
    {
      id: "5be04fb3-0cab-11ea-b070-8bdd22f6ec86",
      description: "Matane, Collège de"
    },
    {
      id: "5be04fb4-0cab-11ea-b071-7f6ce6031ed7",
      description: "Rimouski, Collège de"
    },
    {
      id: "5be076ae-0cab-11ea-b072-3f820d32b7cc",
      description: "Rivière-du Loup, Collège de"
    },
    {
      id: "5be076af-0cab-11ea-b073-d7cc08865a99",
      description: "Sainte-Foy, Collège de"
    },
    {
      id: "5be076b0-0cab-11ea-b074-875395bcd1d0",
      description: "Alma, Collège d'"
    },
    {
      id: "5be09d8c-0cab-11ea-b075-b78893eb5be3",
      description: "Chicoutimi, Collège de"
    },
    {
      id: "5be09d8d-0cab-11ea-b076-1b2f39c0adea",
      description: "Jonquière, Collège de"
    },
    {
      id: "5be0c488-0cab-11ea-b077-1722dfdbfa3c",
      description: "Saint-Félicien, Collège de"
    },
    {
      id: "5be0c489-0cab-11ea-b078-3be7be55751d",
      description: "Shawinigan, Collège de"
    },
    {
      id: "5be0c48a-0cab-11ea-b079-c30cf621b2cf",
      description: "Lauzon, Col. de Technologie de"
    },
    {
      id: "5be0eb84-0cab-11ea-b07a-0b3fdfea0e5c",
      description: "Région Amiante(Thetford Mines)"
    },
    {
      id: "5be0eb85-0cab-11ea-b07b-5b644f24e5f0",
      description: "Trois-Rivières, Collège de"
    },
    {
      id: "5be11276-0cab-11ea-b07c-f7214dd18643",
      description: "Victoriaville, Collège de"
    },
    {
      id: "5be11277-0cab-11ea-b07d-db90e2ede70f",
      description: "Ahuntsic, Collège"
    },
    {
      id: "5be11278-0cab-11ea-b07e-2354f4cf6dc8",
      description: "André Laurendeau, Collège"
    },
    {
      id: "5be13972-0cab-11ea-b07f-7bdd8912c633",
      description: "Bois-de-Boulogne, Collège"
    },
    {
      id: "5be13973-0cab-11ea-b080-1734452330f8",
      description: "Drummonville, Collège de"
    },
    {
      id: "5be13974-0cab-11ea-b081-af0ae6d52320",
      description: "Saint-Hyacinthe, Collège de"
    },
    {
      id: "5be1605a-0cab-11ea-b082-931736cbf28e",
      description: "Tracy-Sorel, Collège"
    },
    {
      id: "5be1605b-0cab-11ea-b083-bbf8b2ecb134",
      description: "Champlain Col. - Lennoxville"
    },
    {
      id: "5be1874c-0cab-11ea-b084-bb1332b1e225",
      description: "Champlain Col. - St-Lambert"
    },
    {
      id: "5be1874d-0cab-11ea-b085-13ee6f865261",
      description: "Champlain Col. - St-Lawrence"
    },
    {
      id: "5be1874e-0cab-11ea-b086-f7d5d2c42669",
      description: "Granby-Haute-Yamaska, Col. de"
    },
    {
      id: "5be1ae48-0cab-11ea-b087-cb5d9877f3c2",
      description: "Private colleges"
    },
    {
      id: "5be1ae49-0cab-11ea-b088-4f65e2c5d31c",
      description: "Dawson College"
    },
    {
      id: "5be1ae4a-0cab-11ea-b089-477ee2a84619",
      description: "Édouard-Montpetit, Collège"
    },
    {
      id: "5be1d53a-0cab-11ea-b08a-7bf5cc7214c1",
      description: "Outaouais, Collège de l'"
    },
    {
      id: "5be1fc2c-0cab-11ea-b08b-7fb754491e26",
      description: "Maisonneuve, Collège"
    },
    {
      id: "5be1fc2d-0cab-11ea-b08c-bf4252b9606a",
      description: "John Abbott College"
    },
    {
      id: "5be22328-0cab-11ea-b08d-3f4833006e3e",
      description: "Joliette-De Lanaudière, Col."
    },
    {
      id: "5be24a24-0cab-11ea-b08e-af1c4534243c",
      description: "Lionel-Groulx, Collège"
    },
    {
      id: "5be27166-0cab-11ea-b08f-57520aaeea75",
      description: "Montmorency, Collège"
    },
    {
      id: "5be27167-0cab-11ea-b090-d346c19fcc7d",
      description: "Rosemont, Collège"
    },
    {
      id: "5be2981c-0cab-11ea-b091-ffa211f8a989",
      description: "Abitibi-Témiscamingue, Col. de"
    },
    {
      id: "5be2981d-0cab-11ea-b092-aba43bb32387",
      description: "Inst.Tech.Agro-ali StHyacinthe"
    },
    {
      id: "5be2bf04-0cab-11ea-b093-2b2ead14178d",
      description: "Saint-Jean-Sur-Richelieu, Col."
    },
    {
      id: "5be2bf05-0cab-11ea-b094-df5fc7abfdc3",
      description: "Saint-Jérôme, Collège de"
    },
    {
      id: "5be2e60a-0cab-11ea-b095-5f502f02e714",
      description: "Saint-Laurent, Collège de"
    },
    {
      id: "5be2e60b-0cab-11ea-b096-471acdb9a856",
      description: "Valleyfield, Collège de"
    },
    {
      id: "5be30cfc-0cab-11ea-b097-3700b03629f6",
      description: "Sherbrooke, Collège de"
    },
    {
      id: "5be33420-0cab-11ea-b098-9f13771da6c2",
      description: "Tracy, Col. de Technologie de"
    },
    {
      id: "5be33421-0cab-11ea-b099-d301022446eb",
      description: "Inst. tourisme/d'hôtellerie QC"
    },
    {
      id: "5be35af4-0cab-11ea-b09a-d7d893a43ab8",
      description: "Vanier College"
    },
    {
      id: "5be35af5-0cab-11ea-b09b-e37127ea892c",
      description: "Vieux-Montréal, Collège du"
    },
    {
      id: "5be381e6-0cab-11ea-b09c-bbc050f25a7e",
      description: "Académie Centenniale"
    },
    {
      id: "5be381e7-0cab-11ea-b09d-1fbc1ab3f91a",
      description: "André-Grasset, Collège"
    },
    {
      id: "5be381e8-0cab-11ea-b09e-b3a121804701",
      description: "Bart, Collège"
    },
    {
      id: "5be3a8ce-0cab-11ea-b09f-775e2a43f1aa",
      description: "Beauce-Appalaches, Collège"
    },
    {
      id: "5be3a8cf-0cab-11ea-b0a0-37e787dcceb6",
      description: "Notre-Dame-de-Foy Campus"
    },
    {
      id: "5be3cfb6-0cab-11ea-b0a1-c3db62c47bc0",
      description: "Centre spécialisé pêche (G-R)"
    },
    {
      id: "5be3cfb7-0cab-11ea-b0a2-47839030f980",
      description: "Affaires Ellis Inc.,Collège d'"
    },
    {
      id: "5be3cfb8-0cab-11ea-b0a3-c33d0dbf2254",
      description: "Lévis, Collège de"
    },
    {
      id: "5be3f6b2-0cab-11ea-b0a4-637b91dbdd4f",
      description: "Secrétariat Notre-Dame, Col."
    },
    {
      id: "5be3f6b3-0cab-11ea-b0a5-dbba3b2d0722",
      description: "Français, Collège"
    },
    {
      id: "5be41da4-0cab-11ea-b0a6-eb286ecc0002",
      description: "Militaire royal St-Jean, Col."
    },
    {
      id: "5be44536-0cab-11ea-b0a7-7ba14699fd33",
      description: "Conserv. de musique Chicoutimi"
    },
    {
      id: "5be46ba6-0cab-11ea-b0a8-73ce43eddf65",
      description: "Conserv. de musique de Hull"
    },
    {
      id: "5be46ba7-0cab-11ea-b0a9-57c6ccb296eb",
      description: "Conserv. de musique Montréal"
    },
    {
      id: "5be492ac-0cab-11ea-b0aa-e79aa9588345",
      description: "Conserv. de musique de Québec"
    },
    {
      id: "5be4b9f8-0cab-11ea-b0ab-7f310d8cab2e",
      description: "Conserv. de musique Rimouski"
    },
    {
      id: "5be4b9f9-0cab-11ea-b0ac-9f5ac8f96266",
      description: "Conserv. de musique Trois-Riv."
    },
    {
      id: "5be4e090-0cab-11ea-b0ad-8bd1263700cb",
      description: "Conserv. de musique Val-d'or"
    },
    {
      id: "5be4e091-0cab-11ea-b0ae-8f815860e416",
      description: "Conservatoire Lasalle"
    },
    {
      id: "5be50778-0cab-11ea-b0af-b7a6d6434a9f",
      description: "Commerciale du Cap, École"
    },
    {
      id: "5be50779-0cab-11ea-b0b0-9bcec592cbd5",
      description: "Vincent-d'Indy, École"
    },
    {
      id: "5be52e74-0cab-11ea-b0b1-0b7834690cb3",
      description: "Heritage College"
    },
    {
      id: "5be52e75-0cab-11ea-b0b2-bb0543547118",
      description: "Institut Teccart"
    },
    {
      id: "5be5555c-0cab-11ea-b0b3-d75db8ca5347",
      description: "Jean-de-Brébeuf, Collège"
    },
    {
      id: "5be57c30-0cab-11ea-b0b4-d34af3103d4b",
      description: "L'Assomption, Collège de"
    },
    {
      id: "5be57c31-0cab-11ea-b0b5-e31d0630f5cc",
      description: "Laflèche, Collège"
    },
    {
      id: "5be5a32c-0cab-11ea-b0b6-4f7d7c896297",
      description: "LaSalle, Collège"
    },
    {
      id: "5be5a32d-0cab-11ea-b0b7-6f97bde3d4e8",
      description: "Macdonald Campus (McGill)"
    },
    {
      id: "5be5ca14-0cab-11ea-b0b8-63b64ca7751d",
      description: "Marianopolis College"
    },
    {
      id: "5be5ca15-0cab-11ea-b0b9-770a5c6358a1",
      description: "Marie-Victorin, Collège"
    },
    {
      id: "5be5f106-0cab-11ea-b0ba-f3942ec29a58",
      description: "Mérici, Collège"
    },
    {
      id: "5be5f107-0cab-11ea-b0bb-4f75a8c54a9c",
      description: "Moderne 3-R, Collège"
    },
    {
      id: "5be61802-0cab-11ea-b0bc-23908b5c49a7",
      description: "O'Sullivan de Montréal, Col."
    },
    {
      id: "5be61803-0cab-11ea-b0bd-f75a49497843",
      description: "O'Sullivan de Québec, Collège"
    },
    {
      id: "5be61804-0cab-11ea-b0be-4342a1f93de9",
      description: "Petit Séminaire de Québec"
    },
    {
      id: "5be63efe-0cab-11ea-b0bf-2bac0fe577f2",
      description: "Sherbrooke, Séminaire de"
    },
    {
      id: "5be63eff-0cab-11ea-b0c0-4b88f2932b4e",
      description: "Saint-Augustin, Séminaire"
    },
    {
      id: "5be665f0-0cab-11ea-b0c1-5bb35f44150a",
      description: "Villa Sainte-Marcelline"
    },
    {
      id: "5be665f1-0cab-11ea-b0c2-4b100ce5ec46",
      description: "Québec UNIV, téléuniversité"
    },
    {
      id: "5be68ce2-0cab-11ea-b0c3-4bebd1339db5",
      description: "Algoma College"
    },
    {
      id: "5be68ce3-0cab-11ea-b0c4-bf4bbfa4422e",
      description: "Algonquin College"
    },
    {
      id: "5be6b3d4-0cab-11ea-b0c5-af87ab07cdf0",
      description: "Cambrian College"
    },
    {
      id: "5be6b3d5-0cab-11ea-b0c6-4bdac89ef16f",
      description: "Canadore College"
    },
    {
      id: "5be6dac6-0cab-11ea-b0c7-6bd451d3bec7",
      description: "Centennial College"
    },
    {
      id: "5be6dac7-0cab-11ea-b0c8-4389949f0b44",
      description: "Centralia Col. Agricul. Tech."
    },
    {
      id: "5be701c2-0cab-11ea-b0c9-67536d27e19f",
      description: "Conestoga Applied Arts & Tech."
    },
    {
      id: "5be701c3-0cab-11ea-b0ca-6347d681bc1a",
      description: "ConfederationApplied Arts&Tech"
    },
    {
      id: "5be728b4-0cab-11ea-b0cb-0bb8c12487ae",
      description: "Durham Col. Applied Arts&Tech."
    },
    {
      id: "5be728b5-0cab-11ea-b0cc-a772d4161f0b",
      description: "Fanshawe Applied Arts & Tech."
    },
    {
      id: "5be74fb0-0cab-11ea-b0cd-3b0517690856",
      description: "George Brown Applied Arts&Tech"
    },
    {
      id: "5be776b6-0cab-11ea-b0ce-4b95850208a3",
      description: "Georgian Applied Arts & Tech."
    },
    {
      id: "5be776b7-0cab-11ea-b0cf-0fd1c219bc94",
      description: "Humber Col. Applied Arts &Tech"
    },
    {
      id: "5be79dbc-0cab-11ea-b0d0-0fca4e0a8645",
      description: "Kemptville Col. Agricult. Tech"
    },
    {
      id: "5be7c4c2-0cab-11ea-b0d1-df268ea8c9bb",
      description: "Lakehead College"
    },
    {
      id: "5be7eba0-0cab-11ea-b0d2-af98ab80d5a8",
      description: "Lambton College"
    },
    {
      id: "5be7eba1-0cab-11ea-b0d3-cfa6be21c2ad",
      description: "Loyalist College"
    },
    {
      id: "5be8127e-0cab-11ea-b0d4-53646a00753e",
      description: "Mohawk College"
    },
    {
      id: "5be839ac-0cab-11ea-b0d5-7f3fca28d311",
      description: "New Liskeard Col. Agricul.Tech"
    },
    {
      id: "5be86080-0cab-11ea-b0d6-ef32de15e71e",
      description: "Niagara College"
    },
    {
      id: "5be8877c-0cab-11ea-b0d7-33ef11f8124a",
      description: "Nipissing College"
    },
    {
      id: "5be8ae50-0cab-11ea-b0d8-f7c9ae317945",
      description: "Northern College"
    },
    {
      id: "5be8ae51-0cab-11ea-b0d9-a3211383be0c",
      description: "Ontario College of Arts"
    },
    {
      id: "5be8d54c-0cab-11ea-b0da-0f0d3f11dcc3",
      description: "Ridgetown Col. Agricul. Tech."
    },
    {
      id: "5be8d54d-0cab-11ea-b0db-cb58dceaea69",
      description: "Ryerson College"
    },
    {
      id: "5be8fc52-0cab-11ea-b0dc-0b2fc7ec6476",
      description: "Saint Clair College"
    },
    {
      id: "5be8fc53-0cab-11ea-b0dd-df4c62006360",
      description: "Saint Lawrence College"
    },
    {
      id: "5be8fc54-0cab-11ea-b0de-bfa86b39262b",
      description: "Sault Col. Applied Arts & Tech"
    },
    {
      id: "5be9236c-0cab-11ea-b0df-ab066f886d82",
      description: "Seneca College"
    },
    {
      id: "5be94a72-0cab-11ea-b0e0-1727424d7859",
      description: "Sheridan College"
    },
    {
      id: "5be998ec-0cab-11ea-b0e1-1b82ac29a6aa",
      description: "Sir Sanford Fleming Arts &Tech"
    },
    {
      id: "5be998ed-0cab-11ea-b0e2-9f89b952465c",
      description: "La Cité collégiale"
    },
    {
      id: "5be9bf20-0cab-11ea-b0e3-5fa02003eaf9",
      description: "Redeemer Reformed ChristianCol"
    },
    {
      id: "5be9bf21-0cab-11ea-b0e4-2bcfaafd3914",
      description: "Boréal, Collège"
    },
    {
      id: "5be9e61c-0cab-11ea-b0e5-ff0e4f766dff",
      description: "U of Ont. Inst. of Tech."
    },
    {
      id: "5be9e61d-0cab-11ea-b0e6-ffb7d38b1bb4",
      description: "Assiniboine Community College"
    },
    {
      id: "5be9e61e-0cab-11ea-b0e7-831c718215d3",
      description: "Keewatin Community College"
    },
    {
      id: "5bea0d0e-0cab-11ea-b0e8-ff6394ffd176",
      description: "Red River Community College"
    },
    {
      id: "5bea0d0f-0cab-11ea-b0e9-6bace32b81c4",
      description: "SK Institute Applied Arts &Sci"
    },
    {
      id: "5bea3400-0cab-11ea-b0ea-3fa7940fcf0a",
      description: "Saskatchewan Technological Ins"
    },
    {
      id: "5bea3401-0cab-11ea-b0eb-6784808bf69e",
      description: "Carlton Trail Regional College"
    },
    {
      id: "5bea3402-0cab-11ea-b0ec-e33f4697d8ea",
      description: "Cumberland Regional College"
    },
    {
      id: "5bea5ae8-0cab-11ea-b0ed-6fcc21baa139",
      description: "Cypress Hills Regional College"
    },
    {
      id: "5bea5ae9-0cab-11ea-b0ee-fba390505393",
      description: "Northlands College"
    },
    {
      id: "5bea81ee-0cab-11ea-b0ef-07a9b6ab6711",
      description: "North West Regional College"
    },
    {
      id: "5bea81ef-0cab-11ea-b0f0-278da3626bcf",
      description: "Parkland Regional College"
    },
    {
      id: "5beaa8d6-0cab-11ea-b0f1-9f5a17ffccd9",
      description: "Prairie West Regional College"
    },
    {
      id: "5beaa8d7-0cab-11ea-b0f2-5799721921a3",
      description: "Saskatchewan Indian Tech Inst."
    },
    {
      id: "5beaa8d8-0cab-11ea-b0f3-0703bb7adaa3",
      description: "SK Inst. Applied Science &Tech"
    },
    {
      id: "5beacfc8-0cab-11ea-b0f4-fff452e892d7",
      description: "SK Ed. Trng & Empl. NorthernEd"
    },
    {
      id: "5beacfc9-0cab-11ea-b0f5-d35ebc6e9581",
      description: "SK Ed. Trng & Empl. Reg'l Col."
    },
    {
      id: "5beaf6ba-0cab-11ea-b0f6-d3966a6dfbb2",
      description: "South East Regional College"
    },
    {
      id: "5beaf6bb-0cab-11ea-b0f7-d363b241b39a",
      description: "Pallister Institute (SIAST)"
    },
    {
      id: "5beaf6bc-0cab-11ea-b0f8-2386a2ee2687",
      description: "Woodland Institute"
    },
    {
      id: "5beb1dc0-0cab-11ea-b0f9-5fb6bd07ede7",
      description: "Camrose College"
    },
    {
      id: "5beb1dc1-0cab-11ea-b0fa-8ff1aba3aa3d",
      description: "Concordia College"
    },
    {
      id: "5beb1dc2-0cab-11ea-b0fb-8b845c91d893",
      description: "Fairview College"
    },
    {
      id: "5beb44a8-0cab-11ea-b0fc-db3d84e8df93",
      description: "Grand Prairie Regional College"
    },
    {
      id: "5beb44a9-0cab-11ea-b0fd-cf750dbd5157",
      description: "Grant MacEwan University"
    },
    {
      id: "5beb6bae-0cab-11ea-b0fe-2745b8c938bf",
      description: "Lethbridge Community College"
    },
    {
      id: "5beb6baf-0cab-11ea-b0ff-e752cb4b3e1e",
      description: "Medicine Hat College"
    },
    {
      id: "5beb9296-0cab-11ea-b100-5bafb7596872",
      description: "Mount Royal College"
    },
    {
      id: "5beb9297-0cab-11ea-b101-a7724aa8f6e2",
      description: "Northern Alberta Inst. of Tech"
    },
    {
      id: "5beb9298-0cab-11ea-b102-8faf533785c1",
      description: "Old Sun Community College"
    },
    {
      id: "5bebb99c-0cab-11ea-b103-27cef16565fc",
      description: "Red Deer College"
    },
    {
      id: "5bebe0b6-0cab-11ea-b104-d33b0da5ada6",
      description: "Southern Alberta Inst. of Tech"
    },
    {
      id: "5bebe0b7-0cab-11ea-b105-a3f517116227",
      description: "Vermilion Campus (LakelandCol)"
    },
    {
      id: "5bec07f8-0cab-11ea-b106-b398e6740c62",
      description: "Alberta Vocational College"
    },
    {
      id: "5bec07f9-0cab-11ea-b107-a3a65f041a56",
      description: "Augustana University College"
    },
    {
      id: "5bec2e7c-0cab-11ea-b108-370986cb14a7",
      description: "Keyano College"
    },
    {
      id: "5bec2e7d-0cab-11ea-b109-bf33ab6d4917",
      description: "Lakeland College"
    },
    {
      id: "5bec5564-0cab-11ea-b10a-2398e6c570cf",
      description: "British Columbia Inst. of Tech"
    },
    {
      id: "5bec5565-0cab-11ea-b10b-8f8962f131c7",
      description: "British Columbia Mining Col."
    },
    {
      id: "5bec7c60-0cab-11ea-b10c-97226d9ce299",
      description: "Kamloops College"
    },
    {
      id: "5bec7c61-0cab-11ea-b10d-cb4c6a182351",
      description: "Camosun College"
    },
    {
      id: "5beca3f2-0cab-11ea-b10e-d7c50999e3c7",
      description: "Capilano College"
    },
    {
      id: "5becca58-0cab-11ea-b10f-ebb77a8873df",
      description: "Cariboo, University College of"
    },
    {
      id: "5becca59-0cab-11ea-b110-4b4b4abf5d2b",
      description: "Columbia College"
    },
    {
      id: "5becf140-0cab-11ea-b111-eb934756d6b1",
      description: "Douglas College"
    },
    {
      id: "5becf141-0cab-11ea-b112-3f464edbdeff",
      description: "Kwantlen Polytechnic Uni."
    },
    {
      id: "5becf142-0cab-11ea-b113-efddfbbb51fd",
      description: "Malaspina College"
    },
    {
      id: "5bed183c-0cab-11ea-b114-439a58e00c34",
      description: "New Caledonia, College of"
    },
    {
      id: "5bed183d-0cab-11ea-b115-cb4455688c32",
      description: "New Caledonia, College of"
    },
    { id: "482a25e6-ffe6-11e9-a69e-362b9e155667", description: "TestSchool1" },
    {
      id: "4d205016-ffe6-11e9-8d71-362b9e155667",
      description: "Columbia College"
    }
  ]
};

responses["getSecurityClearance"] = {
  data: [
    {
      id: "5b8798d6-0cab-11ea-ae01-ef226fb26972",
      description: { en: "Reliability", fr: "Cote de fiabilité" }
    },
    {
      id: "5b87e4da-0cab-11ea-ae02-1be64124974a",
      description: { en: "Secret", fr: "Secret" }
    },
    {
      id: "5b87e4db-0cab-11ea-ae03-e7164e933220",
      description: { en: "Top Secret", fr: "Très Secret" }
    }
  ]
};

responses["getSkill"] = {
  data: [
    {
      id: "5bf29294-0cab-11ea-b116-5f6fc96d8c0c",
      description: {
        en: "Specification / Requirements Development (Request for proposal) ",
        fr:
          "Élaboration de spécifications / d'exigences (demande de propositions)"
      }
    },
    {
      id: "5bf2b990-0cab-11ea-b117-93196952cac9",
      description: {
        en: "Vendor Relations",
        fr: "Relations avec les fournisseurs "
      }
    },
    {
      id: "5bf2e08c-0cab-11ea-b118-cbc6edbb1240",
      description: {
        en: "Professional Services Evaluation and Selection",
        fr: "Évaluation et sélection de services professionnels"
      }
    },
    {
      id: "5bf2e08d-0cab-11ea-b119-87bcc913e37c",
      description: {
        en: "Product Evaluation and Selection",
        fr: "Évaluation et sélection de produits"
      }
    },
    {
      id: "5bf3077e-0cab-11ea-b11a-df8050810c50",
      description: {
        en: "Contract Administration",
        fr: "Administration des contrats  "
      }
    },
    {
      id: "5bf3077f-0cab-11ea-b11b-6f46e7be1e7d",
      description: {
        en: "Acquisition Card Administration ",
        fr: "Administration de carte d'achat"
      }
    },
    {
      id: "5bf32e70-0cab-11ea-b11c-e3b0f317d7de",
      description: { en: "Asset Management", fr: "Gestion des biens" }
    },
    {
      id: "5bf32e71-0cab-11ea-b11d-2794544fc965",
      description: {
        en: "Polices & Procedures",
        fr: "Politiques et procédures "
      }
    },
    {
      id: "5bf35558-0cab-11ea-b11e-eb7535abbb25",
      description: {
        en: "Supply Arrangements",
        fr: "Arrangements en matière d'approvisionnement "
      }
    },
    {
      id: "5bf35559-0cab-11ea-b11f-3f5d0181188c",
      description: { en: "General Ledger", fr: "Grand livre général" }
    },
    {
      id: "5bf37c54-0cab-11ea-b120-bfdfd0f4e1c3",
      description: { en: "Accounts Receivable", fr: "Comptes débiteurs " }
    },
    {
      id: "5bf37c55-0cab-11ea-b121-cb18e042bce9",
      description: { en: "Accounts Payable", fr: "Comptes fournisseurs " }
    },
    {
      id: "5bf3a346-0cab-11ea-b122-5fc240d0cc5b",
      description: { en: "Budget / Finance", fr: "Budget / Finances " }
    },
    {
      id: "5bf3ca42-0cab-11ea-b123-7f2482582653",
      description: {
        en: "Financial Applications",
        fr: "Applications financières"
      }
    },
    {
      id: "5bf3ca43-0cab-11ea-b124-df443feb7f32",
      description: {
        en: "Polices & Procedures",
        fr: "Politiques et procédures "
      }
    },
    {
      id: "5bf3f13e-0cab-11ea-b125-a70444bf262f",
      description: {
        en: "Classification Process",
        fr: "Processus de classification "
      }
    },
    {
      id: "5bf4184e-0cab-11ea-b126-5369cb8be54a",
      description: {
        en: "Polices & Procedures",
        fr: "Politiques et procédures "
      }
    },
    {
      id: "5bf43f5e-0cab-11ea-b127-1b162223341c",
      description: { en: "Staffing Process", fr: "Processus de dotation " }
    },
    {
      id: "5bf46632-0cab-11ea-b128-cffcd372faeb",
      description: { en: "Training Process", fr: "Processus de formation  " }
    },
    {
      id: "5bf48d42-0cab-11ea-b129-5339daebdc47",
      description: {
        en: "Requirements Definition",
        fr: "Définition d'exigences"
      }
    },
    {
      id: "5bf4b402-0cab-11ea-b12a-d3c049692f54",
      description: {
        en: "Functional Specifications",
        fr: "Caractéristiques  fonctionnelles"
      }
    },
    {
      id: "5bf4b403-0cab-11ea-b12b-7bc63e98317d",
      description: {
        en: "Programming Code to Specification",
        fr: "Programmation de codes  en fonction de spécifications"
      }
    },
    {
      id: "5bf4dafe-0cab-11ea-b12c-f365e0dba039",
      description: {
        en: "Software Unit Testing",
        fr: "Tests unitaires de logiciels "
      }
    },
    {
      id: "5bf528f6-0cab-11ea-b12d-f7d99946eb83",
      description: { en: "System Analysis", fr: "Analyse de systèmes " }
    },
    {
      id: "5bf54ffc-0cab-11ea-b12e-abbd51707eda",
      description: {
        en: "Code Debugging and Bug Fixing",
        fr: "Débogage de codes  et correction de bogues "
      }
    },
    {
      id: "5bf54ffd-0cab-11ea-b12f-53144aa86dea",
      description: {
        en: "Design Specifications",
        fr: "Spécifications relatives à la conception "
      }
    },
    {
      id: "5bf57978-0cab-11ea-b130-93dc02a4d515",
      description: {
        en: "Enterprise App. Integration (EAI)",
        fr: "Intégration d'applications d'entreprise (EAI) "
      }
    },
    {
      id: "5bf59dcc-0cab-11ea-b131-6369e513dd7e",
      description: {
        en: "Life Cycle for Software",
        fr: "Cycle  de vie de logiciels"
      }
    },
    {
      id: "5bf59dcd-0cab-11ea-b132-877c33c1efb6",
      description: { en: "Systems Integration", fr: "Intégration de systèmes" }
    },
    {
      id: "5bf5c4be-0cab-11ea-b133-8367be8ce662",
      description: {
        en: "Technical Specifications",
        fr: "Caractéristiques techniques"
      }
    },
    {
      id: "5bf5ebb0-0cab-11ea-b134-0f2e3df094eb",
      description: {
        en: "User Interface Design (GUI)",
        fr: "Conception d'interface utilisateur (CIU)"
      }
    },
    {
      id: "5bf5ebb1-0cab-11ea-b135-d3f5824e3764",
      description: {
        en: "Software Architecture",
        fr: "Architecture logicielle "
      }
    },
    {
      id: "5bf612de-0cab-11ea-b136-e3696dece0de",
      description: { en: "Software Support", fr: "Soutien logiciel " }
    },
    {
      id: "5bf63a2a-0cab-11ea-b137-c32fe3aebcbb",
      description: {
        en: "Enhancements to Packaged Software",
        fr: "Amélioration  de logiciels prêts à l'emploi "
      }
    },
    {
      id: "5bf660ea-0cab-11ea-b138-57cd3dc32fc0",
      description: { en: "HTML 5", fr: "HTML 5" }
    },
    {
      id: "5bf687f0-0cab-11ea-b139-7fbf263c36ec",
      description: { en: "AJAX", fr: "AJAX" }
    },
    {
      id: "5bf6aea6-0cab-11ea-b13a-a713ccd6258e",
      description: { en: "JavaServer Pages", fr: "JavaServer Pages" }
    },
    {
      id: "5bf6aea7-0cab-11ea-b13b-e7d86ff5cada",
      description: { en: "JDBC", fr: "Interface JDBC " }
    },
    {
      id: "5bf6d58e-0cab-11ea-b13c-bbbd11601938",
      description: {
        en: "ODBC",
        fr: "Interfaces universelles de connexion aux bases de données"
      }
    },
    {
      id: "5bf6d58f-0cab-11ea-b13d-930cf0117dbb",
      description: { en: "OLE", fr: "Liaison et incorporation d'objets" }
    },
    {
      id: "5bf6fc8a-0cab-11ea-b13e-37a1521c11c9",
      description: {
        en: "REST",
        fr: "Transfert d'état représentationnel (REST)"
      }
    },
    {
      id: "5bf72368-0cab-11ea-b13f-2325804916d9",
      description: { en: "RSS: Real Simple Syndication ", fr: "Format RSS" }
    },
    {
      id: "5bf72369-0cab-11ea-b140-33645146036c",
      description: { en: "Servlet", fr: "Miniserveur " }
    },
    {
      id: "5bf74a6e-0cab-11ea-b141-1b5a800323d7",
      description: {
        en: "Web Content Accessibility Guidelines (WCAG) 2.0",
        fr: "Règles pour l'accessibilité des contenus Web (WCAG) 2.0"
      }
    },
    {
      id: "5bf74a6f-0cab-11ea-b142-0bb89f8effde",
      description: { en: "Web Services", fr: "Services Web" }
    },
    {
      id: "5bf77160-0cab-11ea-b143-c335882eff01",
      description: { en: "Win 32 API", fr: "API Win32 " }
    },
    {
      id: "5bf77161-0cab-11ea-b144-b7377e3f0828",
      description: { en: "Active X", fr: "Active X " }
    },
    {
      id: "5bf79852-0cab-11ea-b145-b75d99a6b2b2",
      description: { en: "CGI", fr: "IPC " }
    },
    {
      id: "5bf79853-0cab-11ea-b146-6f0f80b7e8f0",
      description: {
        en: "DOM (Document Object Model)",
        fr: "Modèle DOM (Modèle objet de documents)"
      }
    },
    {
      id: "5bf7bf44-0cab-11ea-b147-478018f9efe6",
      description: { en: "Hibernate", fr: "Hibernate" }
    },
    {
      id: "5bf7bf45-0cab-11ea-b148-a35464d47589",
      description: { en: "J2EE", fr: "Serveurs J2EE " }
    },
    {
      id: "5bf7bf46-0cab-11ea-b149-cbdd896b6b0a",
      description: { en: "JavaBeans", fr: "JavaBeans" }
    },
    {
      id: "5bf7e76c-0cab-11ea-b14a-67a792bc200d",
      description: { en: "JNDI", fr: "Interface JNDI " }
    },
    {
      id: "5bf7e76d-0cab-11ea-b14b-db3684b85bee",
      description: {
        en: "MAPI (Messaging API)",
        fr: "MAPI (Interface de programmation d'applications de messagerie) "
      }
    },
    {
      id: "5bf80d14-0cab-11ea-b14c-eb158397a036",
      description: { en: "Object-Oriented", fr: "Orienté objet " }
    },
    {
      id: "5bf80d15-0cab-11ea-b14d-6f43ef06e436",
      description: { en: "WinSock", fr: "Winsock " }
    },
    {
      id: "5bf80d16-0cab-11ea-b14e-0fe2f06b1959",
      description: { en: "ASP .NET", fr: "ASP.NET" }
    },
    {
      id: "5bf85b48-0cab-11ea-b14f-8fdc502503e8",
      description: { en: "ASP", fr: "ASP" }
    },
    {
      id: "5bf88212-0cab-11ea-b150-3752d58b6449",
      description: { en: "SOAP", fr: "Protocole SOAP" }
    },
    {
      id: "5bf8a972-0cab-11ea-b151-939a5177656d",
      description: { en: "System Architect", fr: "Architecte de systèmes" }
    },
    {
      id: "5bf8f742-0cab-11ea-b152-ab7bd19ff25e",
      description: {
        en: "JMS: Java Message Service",
        fr: "JMS  : Service de messagerie Java"
      }
    },
    {
      id: "5bf8f743-0cab-11ea-b153-c317cc03a3f2",
      description: {
        en: "SDLC (e.g., Agile, Scrum, etc.)",
        fr: "Proc. de comm. de trans. synch. (p. ex. Agile, Scrum, etc.)"
      }
    },
    {
      id: "5bf91de4-0cab-11ea-b154-8b6108b7c7e6",
      description: { en: "UML", fr: "Langage de modélisation unifié (UML)" }
    },
    {
      id: "5bf944d6-0cab-11ea-b155-074fe2506908",
      description: {
        en: "Business Process Execution Language (BPEL)",
        fr: "Langage d'exécution des processus admin. BPEL "
      }
    },
    {
      id: "5bf96d62-0cab-11ea-b156-7f3c1b6bd5e3",
      description: {
        en: "Hybrid Mobile Application Development",
        fr: "Élaboration  d'applications mobiles hybrides"
      }
    },
    {
      id: "5bf96d63-0cab-11ea-b157-27c0292c3e5a",
      description: { en: "Responsive Design", fr: "Conception adaptée" }
    },
    {
      id: "5bf992c4-0cab-11ea-b158-3fdd3be9aa5d",
      description: {
        en: "Web Experience Toolkit",
        fr: "Boîte à outils de l’expérience Web"
      }
    },
    {
      id: "5bf9b9ac-0cab-11ea-b159-f77701200b78",
      description: {
        en: "Web Mobile Application Development",
        fr: "Élaboration  d'applications Web mobiles "
      }
    },
    {
      id: "5bf9e09e-0cab-11ea-b15a-0f0e330b0e87",
      description: { en: "Test Planning", fr: "Planification des essais" }
    },
    {
      id: "5bf9e09f-0cab-11ea-b15b-33183a60471d",
      description: { en: "Testing Methodologies", fr: "Méthodes d'essai" }
    },
    {
      id: "5bfa079a-0cab-11ea-b15c-1b9c14ebbe6c",
      description: { en: "Quality Management", fr: "Gestion de la qualité" }
    },
    {
      id: "5bfa079b-0cab-11ea-b15d-e74ecf66be99",
      description: {
        en: "Test Case Decision",
        fr: "Décision relative au test élémentaire"
      }
    },
    {
      id: "5bfa079c-0cab-11ea-b15e-43ae862a29b9",
      description: { en: "Testing Tools", fr: "Outils d'essai" }
    },
    {
      id: "5bfa557e-0cab-11ea-b15f-7313c9a8bf6d",
      description: {
        en:
          "Quality Assurance/Control: Concepts, Standards, Procedures and Operations",
        fr:
          "Assurance/contrôle de la qualité : concepts, normes, procédures et opérations"
      }
    },
    {
      id: "5bfa557f-0cab-11ea-b160-8b346c06b7f4",
      description: {
        en: "Testing - Unit, System, Integration, Regression, Acceptance ",
        fr: "Essai  - Unité, système, intégration, régression, acceptation "
      }
    },
    {
      id: "5bfa7c70-0cab-11ea-b161-ab83163e58a2",
      description: { en: "Data Modeling", fr: "Modélisation de données" }
    },
    {
      id: "5bfa7c71-0cab-11ea-b162-3b2366ac3816",
      description: {
        en: "Data Flow Diagrams",
        fr: "Diagrammes de flux de données"
      }
    },
    {
      id: "5bfaa4ac-0cab-11ea-b163-d7c61e078b9e",
      description: { en: "Design Patterns", fr: "Modèles de conception" }
    },
    {
      id: "5bfaa4ad-0cab-11ea-b164-7f9611ccbd6a",
      description: { en: "Process Design", fr: "Conception de processus " }
    },
    {
      id: "5bfaca5e-0cab-11ea-b165-ab285686a841",
      description: { en: "Project Development", fr: "Élaboration de projets" }
    },
    {
      id: "5bfaca5f-0cab-11ea-b166-83f6c9d8fe79",
      description: { en: "RAD", fr: "Développement accéléré d'applications " }
    },
    {
      id: "5bfaf1f0-0cab-11ea-b167-c320354b7949",
      description: {
        en: "Web Graphics Design",
        fr: "Conception de graphiques Web"
      }
    },
    {
      id: "5bfaf1f1-0cab-11ea-b168-137f44448b54",
      description: {
        en: "Business Process Re-Engineering",
        fr: "Reconfiguration de processus administratifs"
      }
    },
    {
      id: "5bfb184c-0cab-11ea-b169-2f3ac5fb7bbf",
      description: {
        en: "JAD",
        fr: "Élaboration d'application en collaboration (EAC )"
      }
    },
    {
      id: "5bfb184d-0cab-11ea-b16a-c7ce2860c5c0",
      description: { en: "Prototyping", fr: "Prototypage" }
    },
    {
      id: "5bfb3f48-0cab-11ea-b16b-df1abfa17e82",
      description: {
        en: "Component Definition and Design",
        fr: "Définition et conception d’éléments "
      }
    },
    {
      id: "5bfb3f49-0cab-11ea-b16c-23a5f43d3328",
      description: {
        en: "Function Point Analysis",
        fr: "Analyse des points fonctionnels"
      }
    },
    {
      id: "5bfb666c-0cab-11ea-b16d-4bfb8e7c088f",
      description: {
        en: "Information Engineering",
        fr: "Ingénierie informationnelle"
      }
    },
    {
      id: "5bfb666d-0cab-11ea-b16e-2fc9d7dcbe73",
      description: { en: "Multitenancy", fr: "Cohabitation " }
    },
    {
      id: "5bfb8d40-0cab-11ea-b16f-f7ceebbc72e5",
      description: {
        en: "Object-Oriented Design (OOD)",
        fr: "Conception orientée objet (COO) "
      }
    },
    {
      id: "5bfbb46e-0cab-11ea-b170-ab286ffaa39d",
      description: {
        en: "Object-Oriented Programming (OOP)",
        fr: "Programmation orientée objet (POO)"
      }
    },
    {
      id: "5bfbdb56-0cab-11ea-b171-f75e42b29a15",
      description: {
        en: "Parallelism (e.g., map and reduce, thread mgmt)",
        fr: "Parallélisme (p. ex.,  MapReduce, gestion des fils)"
      }
    },
    {
      id: "5bfc022a-0cab-11ea-b172-bbba7b527512",
      description: { en: "Release Management", fr: "Gestion des versions" }
    },
    {
      id: "5bfc291c-0cab-11ea-b173-6b69a0bda531",
      description: { en: "Structured Analysis", fr: "Analyse structurée" }
    },
    {
      id: "5bfc291d-0cab-11ea-b174-57729c824701",
      description: { en: "Structured Design", fr: "Conception structurée" }
    },
    {
      id: "5bfc4ffa-0cab-11ea-b175-4bec6dcf1624",
      description: {
        en: "Cross-Browser/Platform Compatibility ",
        fr: "Compatibilité de multinavigateur/plateforme"
      }
    },
    {
      id: "5bfc4ffb-0cab-11ea-b176-1b80d005219d",
      description: { en: "Eclipse", fr: "Eclipse" }
    },
    {
      id: "5bfc76f6-0cab-11ea-b177-a3ef33164de0",
      description: { en: "SQL Developer", fr: "SQL Developer" }
    },
    {
      id: "5bfc9e06-0cab-11ea-b178-0b4d4017d238",
      description: {
        en: "Adobe LiveCycle ES Designer",
        fr: "Adobe LiveCycle ES Designer"
      }
    },
    {
      id: "5bfcc610-0cab-11ea-b179-13cbd9755665",
      description: { en: "Ancile uPerform", fr: "Ancile uPerform" }
    },
    {
      id: "5bfcc611-0cab-11ea-b17a-638a9b2311e5",
      description: {
        en: "CA Gen Development and Generation tool",
        fr: "Outil de développement  et de génération  CA Gen"
      }
    },
    {
      id: "5bfcebcc-0cab-11ea-b17b-5f77e383d1bf",
      description: {
        en: "Crystal Reports Designer",
        fr: "Crystal Reports Designer"
      }
    },
    {
      id: "5bfcebcd-0cab-11ea-b17c-2b0cab66e5b1",
      description: {
        en: "Embarcadero C++ Builder",
        fr: "Embarcadero C++ Builder"
      }
    },
    {
      id: "5bfcebce-0cab-11ea-b17d-8bdcaa8ed8f1",
      description: { en: "Lotus Notes Designer", fr: "Lotus Notes  Designer" }
    },
    {
      id: "5bfd13fe-0cab-11ea-b17e-a71219a4dc18",
      description: {
        en: "Microsoft TFS",
        fr: "Microsoft Team Foundation Server "
      }
    },
    {
      id: "5bfd13ff-0cab-11ea-b17f-3f12ad131655",
      description: {
        en: "Model management - CA Gen",
        fr: "Gestion de modèles - CA Gen "
      }
    },
    {
      id: "5bfd3b18-0cab-11ea-b180-8b293d64faa1",
      description: { en: "MSBuild", fr: "MSBuild" }
    },
    {
      id: "5bfd60ac-0cab-11ea-b181-6f09c8a4a83e",
      description: {
        en: "Oracle Application Express (APEX)",
        fr: "Oracle Application Express (APEX)"
      }
    },
    {
      id: "5bfdaf1c-0cab-11ea-b182-fbff7ecbe34a",
      description: {
        en: "Oracle Designer Web PL/SQL (Oracle DevSuite 10.1.2)",
        fr: "Oracle Designer Web PL/SQL  (Oracle DevSuite 10.1.2) "
      }
    },
    {
      id: "5bfdd5d2-0cab-11ea-b183-5723bc140069",
      description: { en: "Oracle UPK ( + CAPA)", fr: "Oracle UPK ( + CAPA)" }
    },
    {
      id: "5bfdd5d3-0cab-11ea-b184-7726aa67fc02",
      description: { en: "SPUFI", fr: "SPUFI" }
    },
    {
      id: "5bfdfd8c-0cab-11ea-b185-472858e8de54",
      description: { en: "SQLWindows", fr: "SQLWindows" }
    },
    {
      id: "5bfdfd8d-0cab-11ea-b186-0f32a4cd01bf",
      description: {
        en: "Team Developer/Centura  ",
        fr:
          "Centura Team Developer (équipes de conception de marques de commerce)"
      }
    },
    {
      id: "5bfe24d8-0cab-11ea-b187-dfa90f7afa3c",
      description: {
        en: "TeamStudio (Notes development tool)",
        fr: "TeamStudio (outil de développement  Notes)"
      }
    },
    {
      id: "5bfe24d9-0cab-11ea-b188-a7bbf852f61f",
      description: { en: "TOAD", fr: "TOAD" }
    },
    {
      id: "5bfe4a76-0cab-11ea-b189-e3c864fc21ca",
      description: { en: "Visual Studio .NET", fr: "Visual Studio.NET" }
    },
    {
      id: "5bfe4a77-0cab-11ea-b18a-d333189cfc8c",
      description: { en: "SQL Reports", fr: "Rapports SQL" }
    },
    {
      id: "5bfe4a78-0cab-11ea-b18b-57ab48ce58ec",
      description: { en: "Cognos", fr: "Cognos" }
    },
    {
      id: "5bfe72bc-0cab-11ea-b18c-53c7cc73c47c",
      description: { en: "Business Objects", fr: "Business Objects " }
    },
    {
      id: "5bfe9864-0cab-11ea-b18d-6b4ac53d22e3",
      description: { en: "Microsoft Dynamics", fr: "Microsoft Dynamics" }
    },
    {
      id: "5bfe9865-0cab-11ea-b18e-a3dff8fde2fe",
      description: { en: "PeopleSoft", fr: "PeopleSoft" }
    },
    {
      id: "5bfebf42-0cab-11ea-b18f-0314a467f9f9",
      description: { en: "SAP", fr: "SAP" }
    },
    {
      id: "5bfee634-0cab-11ea-b190-7b839111c7b0",
      description: { en: "Clarity", fr: "Clarity" }
    },
    {
      id: "5bfee635-0cab-11ea-b191-fb9deec4f7a0",
      description: { en: "MKS  Integrity", fr: "MKS  Integrity" }
    },
    {
      id: "5bff0d26-0cab-11ea-b192-5303e742b090",
      description: { en: "PeopleSoft nVision", fr: "PeopleSoft nVision" }
    },
    {
      id: "5bff0d27-0cab-11ea-b193-ebab688e8ff9",
      description: { en: "PeopleSoft PeopleCode", fr: "PeopleSoft  PeopleCode" }
    },
    {
      id: "5bff3422-0cab-11ea-b194-135b05157a4a",
      description: { en: "PeopleSoft Query", fr: "PeopleSoft Query " }
    },
    {
      id: "5bff3423-0cab-11ea-b195-077b0feabf4c",
      description: { en: "PeopleSoft Reporting", fr: "Rapports PeopleSoft " }
    },
    {
      id: "5bff5b14-0cab-11ea-b196-53ae7431799d",
      description: { en: "PeopleSoft Tools", fr: "Outils PeopleSoft" }
    },
    {
      id: "5bff5b15-0cab-11ea-b197-13f94c4aea34",
      description: {
        en: "Rational Quality Manager (RQM)",
        fr: "Rational Quality Manager(RQM)"
      }
    },
    {
      id: "5bff8206-0cab-11ea-b198-730c21fb7090",
      description: {
        en: "Rational Requirements Composer (RRC)",
        fr: "Rational Requirements Composer (RRC)"
      }
    },
    {
      id: "5bff8207-0cab-11ea-b199-17c0881027d1",
      description: {
        en: "Rational Team Concert (RTC)",
        fr: "Rational Team Concert (IBM)"
      }
    },
    {
      id: "5bffa90c-0cab-11ea-b19a-5b173aea5f5b",
      description: {
        en: "CICS/VS",
        fr:
          "Système de communication des renseignements aux clients /Mémoire virtuelle (SCIC/MV) "
      }
    },
    {
      id: "5bffa90d-0cab-11ea-b19b-bbbea50190b8",
      description: {
        en: "IBM Advanced Function Presentation (AFP)",
        fr: "Architecture d'impression  AFP d'IBM"
      }
    },
    {
      id: "5bffcffe-0cab-11ea-b19c-1368a540e6e0",
      description: {
        en: "IBM Page Description Language (PDL) ",
        fr: "Langage de description de pages d'IBM"
      }
    },
    {
      id: "5bffcfff-0cab-11ea-b19d-8b727b97a929",
      description: { en: "InfoMan", fr: "InfoMan" }
    },
    {
      id: "5bfff6f0-0cab-11ea-b19e-ffe8046bd593",
      description: {
        en: "Adobe Output Designer  ",
        fr: "Adobe Output Designer"
      }
    },
    {
      id: "5bfff6f1-0cab-11ea-b19f-df25cfac8404",
      description: {
        en: "AMX Inspired Signage Xpress",
        fr: "AMX Inspired Signage Xpress"
      }
    },
    {
      id: "5c001dd8-0cab-11ea-b1a0-3b0cf77e47cb",
      description: { en: "Camtasia Studio", fr: "Camtasia Studio" }
    },
    {
      id: "5c001dd9-0cab-11ea-b1a1-7344f9de4f2f",
      description: {
        en: "IBM ImagePlus, FAF, IWPM ",
        fr: "Fonction d'accès aux dossiers  et poste de travail  IBM ImagePlus"
      }
    },
    {
      id: "5c001dda-0cab-11ea-b1a2-2bf46267ba64",
      description: {
        en: "MODCA-IOCA ",
        fr: "MODCA-IOCA - Architecture d'encodage  de données d'images  d'IBM"
      }
    },
    {
      id: "5c0044ca-0cab-11ea-b1a3-ebd377af7202",
      description: {
        en: "Certified Information Systems Security Professional (CISSP)",
        fr: "Certified Information Systems Security Professional (CISSP) "
      }
    },
    {
      id: "5c0044cb-0cab-11ea-b1a4-5b245b6bee19",
      description: { en: "MoP Foundation", fr: "MoP Foundation " }
    },
    {
      id: "5c006bd0-0cab-11ea-b1a5-53b9fde31549",
      description: { en: "MoP Practioner", fr: "MoP Practitioner " }
    },
    {
      id: "5c006bd1-0cab-11ea-b1a6-739026a51a7d",
      description: { en: "TOGAF", fr: "Attestation TOGAF " }
    },
    {
      id: "5c0092cc-0cab-11ea-b1a7-0fe767d73bca",
      description: {
        en: "ITIL V3 Foundations",
        fr: "Certificat Foundations de la bibliothèque ITIL version 3"
      }
    },
    {
      id: "5c0092cd-0cab-11ea-b1a8-17b82de65751",
      description: {
        en: "ITIL V3 Service Management",
        fr: "Gestion des services de la bibliothèque ITIL version 3"
      }
    },
    {
      id: "5c00b9c8-0cab-11ea-b1a9-db4a772c952d",
      description: { en: "Data Management", fr: "Gestion de données" }
    },
    {
      id: "5c00e0f6-0cab-11ea-b1aa-33f2c4fce82d",
      description: {
        en: "Enterprise Content Management",
        fr: "Gestion de contenu d'entreprise"
      }
    },
    {
      id: "5c0107c0-0cab-11ea-b1ab-5b3c8b1c0d17",
      description: { en: "Governance", fr: "Gouvernance" }
    },
    {
      id: "5c0107c1-0cab-11ea-b1ac-2fb9185bf1ab",
      description: { en: "Repository Management", fr: "Gestion de dépôt " }
    },
    {
      id: "5c012ebc-0cab-11ea-b1ad-1bcf50001934",
      description: { en: "Taxonomies", fr: "Taxonomies" }
    },
    {
      id: "5c0155a4-0cab-11ea-b1ae-47cc8eda32c5",
      description: { en: "Business Analysis", fr: "Analyse opérationnelle" }
    },
    {
      id: "5c0155a5-0cab-11ea-b1af-47b91515881b",
      description: { en: "Collaboration", fr: "Collaboration" }
    },
    {
      id: "5c017c78-0cab-11ea-b1b0-0f9e67a4abce",
      description: {
        en: "Content Lifecycle Management",
        fr: "Gestion  du cycle de vie du contenu "
      }
    },
    {
      id: "5c017c79-0cab-11ea-b1b1-ff15c2021ae4",
      description: { en: "Content Tracking", fr: "Contrôle  du contenu" }
    },
    {
      id: "5c017c7a-0cab-11ea-b1b2-db5691264bc2",
      description: { en: "Data Design", fr: "Conception  de données" }
    },
    {
      id: "5c01a388-0cab-11ea-b1b3-8b61f58b6657",
      description: { en: "Tagging", fr: "Taggage " }
    },
    {
      id: "5c01a389-0cab-11ea-b1b4-bffdf0670bcf",
      description: { en: "Administration", fr: "Administration" }
    },
    {
      id: "5c01ca84-0cab-11ea-b1b5-c3754e9ed7d2",
      description: {
        en: "Permissions Management",
        fr: "Gestion des autorisations"
      }
    },
    {
      id: "5c01f19e-0cab-11ea-b1b6-13d796251e2b",
      description: { en: "User Management", fr: "Gestion des utilisateurs" }
    },
    {
      id: "5c021868-0cab-11ea-b1b7-6b2403787828",
      description: {
        en: "Workflow Management",
        fr: "Gestion de flux de travaux"
      }
    },
    {
      id: "5c021869-0cab-11ea-b1b8-23360e790730",
      description: { en: "Access Management", fr: "Gestion de l'accès" }
    },
    {
      id: "5c023f50-0cab-11ea-b1b9-2f234fb882e9",
      description: { en: "JIRA (Atlassian)", fr: "JIRA (Atlassian)" }
    },
    {
      id: "5c023f51-0cab-11ea-b1ba-a316104ded43",
      description: {
        en: "Confluence (Atlassian)",
        fr: "Confluence (Atlassian)"
      }
    },
    {
      id: "5c023f52-0cab-11ea-b1bb-27e04756f8c8",
      description: { en: "WebEx", fr: "Outils de téléconférence WebEx" }
    },
    {
      id: "5c02664c-0cab-11ea-b1bc-db3680fe1bd6",
      description: { en: "IBM Lotus Notes", fr: "IBM Lotus Notes" }
    },
    {
      id: "5c02664d-0cab-11ea-b1bd-d34415a79459",
      description: {
        en: "IBM Lotus Web Content Management",
        fr: "Produits de gestion de contenu Web IBM Lotus"
      }
    },
    {
      id: "5c028d34-0cab-11ea-b1be-2f012d9fee8c",
      description: {
        en: "Content Mgmt Interop Services",
        fr: "Services d'interopérabilité des systèmes de gestion du contenu"
      }
    },
    {
      id: "5c028d35-0cab-11ea-b1bf-a7bb2609e517",
      description: { en: "Drupal", fr: "Drupal" }
    },
    {
      id: "5c02b43a-0cab-11ea-b1c0-47e421fb044f",
      description: {
        en: "IBM Enterprise Content Management",
        fr: "Produits de gestion de contenu d'entreprise d'IBM"
      }
    },
    {
      id: "5c02db4a-0cab-11ea-b1c1-57ca60660f41",
      description: { en: "OpenText", fr: "OpenText" }
    },
    {
      id: "5c030250-0cab-11ea-b1c2-67780cf35a6b",
      description: {
        en: "SharePoint (Microsoft)",
        fr: "SharePoint (Microsoft)"
      }
    },
    {
      id: "5c032938-0cab-11ea-b1c3-739eb4951854",
      description: { en: "Data Analysis", fr: "Analyse de données" }
    },
    {
      id: "5c032939-0cab-11ea-b1c4-5fbff304f2ca",
      description: {
        en: "Data Integrity and Quality Assurance",
        fr: "Assurance de la qualité et intégrité des données"
      }
    },
    {
      id: "5c03500c-0cab-11ea-b1c5-53b6f737f370",
      description: {
        en: "Data Entity-Relationship (ER) Diagramming",
        fr: "Élaboration de diagrammes entités de données-relations"
      }
    },
    {
      id: "5c03500d-0cab-11ea-b1c6-434eb08d5d89",
      description: {
        en: "Data Access and User Administration",
        fr: "Accès aux données et administration des utilisateurs"
      }
    },
    {
      id: "5c037708-0cab-11ea-b1c7-cb8ee9d8c142",
      description: { en: "Data Normalization", fr: "Normalisation de données" }
    },
    {
      id: "5c037709-0cab-11ea-b1c8-c3e072f85e75",
      description: {
        en: "Database design",
        fr: "Conception de bases de données"
      }
    },
    {
      id: "5c039df0-0cab-11ea-b1c9-2fc25a1513d1",
      description: {
        en: "Data Standards and APIs",
        fr: "Normes de données et interfaces de programmation d'applications"
      }
    },
    {
      id: "5c039df1-0cab-11ea-b1ca-dfc556591097",
      description: {
        en: "Database Implementation",
        fr: "Mise en oeuvre de bases de données"
      }
    },
    {
      id: "5c03c4e2-0cab-11ea-b1cb-b3494e2e02ef",
      description: {
        en: "Database Testing",
        fr: "Mise à l'essai de bases de données"
      }
    },
    {
      id: "5c03c4e3-0cab-11ea-b1cc-2b5d58652093",
      description: { en: "Data Dictionaries", fr: "Dictionnaires de données" }
    },
    {
      id: "5c03c4e4-0cab-11ea-b1cd-b72b59427f2e",
      description: {
        en: "Data Information Engineering",
        fr: "Ingénierie informationnelle des données"
      }
    },
    {
      id: "5c03ebde-0cab-11ea-b1ce-57b166c8d4fa",
      description: { en: "Data Mining", fr: "Exploration de données" }
    },
    {
      id: "5c03ebdf-0cab-11ea-b1cf-9b8466e85fcf",
      description: { en: "Data Security", fr: "Sécurité des données" }
    },
    {
      id: "5c0412d0-0cab-11ea-b1d0-f3b2005a9349",
      description: {
        en: "Data Transformation and Migration",
        fr: "Transformation et migration de données"
      }
    },
    {
      id: "5c0412d1-0cab-11ea-b1d1-e76a2aabe55e",
      description: {
        en: "Database Backup and Recovery",
        fr: "Sauvegarde et restauration de bases de données"
      }
    },
    {
      id: "5c0439c2-0cab-11ea-b1d2-67922e10b2da",
      description: {
        en: "Database Capacity Planning",
        fr: "Planification de la capacité des bases de données"
      }
    },
    {
      id: "5c0439c3-0cab-11ea-b1d3-dff10281bbae",
      description: {
        en: "Database Monitoring",
        fr: "Surveillance de bases de données"
      }
    },
    {
      id: "5c0439c4-0cab-11ea-b1d4-c7dcbc03b3d8",
      description: {
        en: "Database Replication",
        fr: "Reproduction de bases de données"
      }
    },
    {
      id: "5c0460b4-0cab-11ea-b1d5-87125aa2c5bc",
      description: {
        en: "Database Upgrades and Reorganizations",
        fr: "Mise à niveau et restructuration de bases de données"
      }
    },
    {
      id: "5c0460b5-0cab-11ea-b1d6-0fe782a047a9",
      description: {
        en: "Oracle Concepts + Architecture",
        fr: "Concepts et architecture Oracle"
      }
    },
    {
      id: "5c0487a6-0cab-11ea-b1d7-6fe940a871e9",
      description: { en: "BusinessObjects", fr: "BusinessObjects" }
    },
    {
      id: "5c0487a7-0cab-11ea-b1d8-2b28c54acf0a",
      description: {
        en: "DB2 Concepts + Architecture",
        fr: "Concepts et architecture DB2"
      }
    },
    {
      id: "5c0487a8-0cab-11ea-b1d9-dbcd0c46585f",
      description: { en: "Impromptu (Cognos)", fr: "Impromptu (Cognos)" }
    },
    {
      id: "5c04aea2-0cab-11ea-b1da-23d86528b8a5",
      description: {
        en: "Oracle Database Engine",
        fr: "Gestionnaire de bases de données Oracle"
      }
    },
    {
      id: "5c04aea3-0cab-11ea-b1db-537a00c123b1",
      description: {
        en: "Oracle Tool + Utilities",
        fr: "Outils et utilitaires Oracle"
      }
    },
    {
      id: "5c04d59e-0cab-11ea-b1dc-cb02462b0ee5",
      description: { en: "PowerPlay (Cognos)", fr: "PowerPlay (Cognos)" }
    },
    {
      id: "5c04d59f-0cab-11ea-b1dd-db68efd4cb0a",
      description: { en: "QMF", fr: "Fonctions de gestion d'interrogations" }
    },
    {
      id: "5c04fcf4-0cab-11ea-b1de-472fd90da020",
      description: { en: "SQLServer (Microsoft)", fr: "SQLServer (Microsoft)" }
    },
    {
      id: "5c052396-0cab-11ea-b1df-97d498db761f",
      description: { en: "Oracle 11.x", fr: "Oracle 11.x" }
    },
    {
      id: "5c052397-0cab-11ea-b1e0-572e4e1d93bf",
      description: { en: "Oracle Forms", fr: "Formulaires Oracle" }
    },
    {
      id: "5c054a9c-0cab-11ea-b1e1-fbddc0533848",
      description: { en: "DB2", fr: "DB2" }
    },
    {
      id: "5c0571a2-0cab-11ea-b1e2-4b36eb26afbe",
      description: { en: "MS Access", fr: "MS Access" }
    },
    {
      id: "5c05986c-0cab-11ea-b1e3-5bb79aaacc6d",
      description: {
        en: "Database Applications",
        fr: "Applications de bases de données"
      }
    },
    {
      id: "5c05986d-0cab-11ea-b1e4-23d505dda819",
      description: { en: "DB2 Connect", fr: "DB2 Connect" }
    },
    {
      id: "5c05986e-0cab-11ea-b1e5-4babab1f64aa",
      description: {
        en: "DB2 Universal DB for OS/390",
        fr: "Base de données universelle DB2 pour OS/390"
      }
    },
    {
      id: "5c05bf5e-0cab-11ea-b1e6-ab8928b6a8b0",
      description: { en: "dBASE", fr: "dBASE" }
    },
    {
      id: "5c05bf5f-0cab-11ea-b1e7-0f9199b13505",
      description: { en: "Millennium  ", fr: "Millennium" }
    },
    {
      id: "5c05bf60-0cab-11ea-b1e8-37b0749b3bb0",
      description: { en: "Oracle 10", fr: "Oracle 10" }
    },
    {
      id: "5c05e650-0cab-11ea-b1e9-4bf192bea90e",
      description: { en: "Oracle 12.x", fr: "Oracle 12.x" }
    },
    {
      id: "5c060d60-0cab-11ea-b1ea-376db94621f1",
      description: { en: "SQLServer (Sybase)", fr: "SQLServer (Sybase)" }
    },
    {
      id: "5c060d61-0cab-11ea-b1eb-b3328c83229e",
      description: { en: "Project (Microsoft)", fr: "Project (Microsoft)" }
    },
    {
      id: "5c06347a-0cab-11ea-b1ec-cb33d4e384bb",
      description: { en: "Visio", fr: "Visio" }
    },
    {
      id: "5c06347b-0cab-11ea-b1ed-9b2178469231",
      description: { en: "Crystal Report Writer", fr: "Crystal Report Writer" }
    },
    {
      id: "5c065b44-0cab-11ea-b1ee-0f62b7c1e859",
      description: { en: "Excel (Microsoft)", fr: "Excel (Microsoft)" }
    },
    {
      id: "5c065b45-0cab-11ea-b1ef-c38640ca8786",
      description: { en: "Photoshop (Adobe)", fr: "Photoshop (Adobe)" }
    },
    {
      id: "5c06822c-0cab-11ea-b1f0-f3ba80361ea6",
      description: { en: "Illustrator (Adobe)", fr: "Illustrator (Adobe)" }
    },
    {
      id: "5c06822d-0cab-11ea-b1f1-676439bdb1b2",
      description: { en: "Oracle Report", fr: "Oracle Reports" }
    },
    {
      id: "5c06a91e-0cab-11ea-b1f2-bf9668af71ce",
      description: {
        en: "Departmental Project Portfolio Management (DPPM) ",
        fr: "Gestion du portefeuille ministériel de projets (GPMP)"
      }
    },
    {
      id: "5c06a91f-0cab-11ea-b1f3-8f94ccf957f6",
      description: { en: "Flash", fr: "Flash" }
    },
    {
      id: "5c06a920-0cab-11ea-b1f4-2bda10cfa2bb",
      description: {
        en: "Hummingbird DOCS (PC DOCS)",
        fr: "Hummingbird DOCS (PC DOCS)"
      }
    },
    {
      id: "5c06d006-0cab-11ea-b1f5-c772f032abee",
      description: { en: "FME", fr: "FME" }
    },
    {
      id: "5c06d007-0cab-11ea-b1f6-c7e178383afb",
      description: { en: "MapBasic", fr: "MapBasic" }
    },
    {
      id: "5c06f716-0cab-11ea-b1f7-1f60da038e09",
      description: { en: "MapInfo Pro", fr: "MapInfo Pro" }
    },
    {
      id: "5c06f717-0cab-11ea-b1f8-8b76344756d1",
      description: {
        en: "Spectrum Technology Platform",
        fr: "Plateforme technologique du spectre"
      }
    },
    {
      id: "5c071e08-0cab-11ea-b1f9-eb1ec3498464",
      description: { en: "SQLServer", fr: "SQLServer" }
    },
    {
      id: "5c071e09-0cab-11ea-b1fa-9f1a0d01af5f",
      description: {
        en: "IBM PC or compatible",
        fr: "Ordinateurs personnels IBM ou compatibles"
      }
    },
    {
      id: "5c071e0a-0cab-11ea-b1fb-ab834bdbdded",
      description: { en: "Tablet", fr: "Tablette" }
    },
    {
      id: "5c0744f0-0cab-11ea-b1fc-d308333a2e8b",
      description: { en: "Apple", fr: "Apple" }
    },
    {
      id: "5c0744f1-0cab-11ea-b1fd-97e2f14c0491",
      description: {
        en: "Cellular / Wireless",
        fr: "Téléphonie cellulaire / sans fil"
      }
    },
    {
      id: "5c0744f2-0cab-11ea-b1fe-eb143340bfd8",
      description: {
        en: "Data Communications ",
        fr: "Communication de données"
      }
    },
    {
      id: "5c076be2-0cab-11ea-b1ff-f72fa43d28c1",
      description: { en: "Device Drivers", fr: "Pilotes de périphériques" }
    },
    {
      id: "5c076be3-0cab-11ea-b200-2f5499ed2692",
      description: {
        en: "Engineering Systems Architectures",
        fr: "Architecture des systèmes d'ingénierie"
      }
    },
    {
      id: "5c0792d4-0cab-11ea-b201-4b99d310aebd",
      description: { en: "IBM Mainframe", fr: "Ordinateurs centraux IBM" }
    },
    {
      id: "5c0792d5-0cab-11ea-b202-8b7ce0e7786f",
      description: { en: "Intel Processors", fr: "Processeurs Intel" }
    },
    {
      id: "5c0792d6-0cab-11ea-b203-97840372f860",
      description: { en: "Smartphone", fr: "Téléphonie intelligente" }
    },
    {
      id: "5c07b9c6-0cab-11ea-b204-7bbea251b6b5",
      description: { en: "Switching", fr: "Commutation" }
    },
    {
      id: "5c07b9c7-0cab-11ea-b205-a7fda1a60bea",
      description: { en: "Engineering", fr: "Ingénierie" }
    },
    {
      id: "5c07e0b8-0cab-11ea-b206-73e9744b1341",
      description: { en: "Acrobat (Adobe)", fr: "Acrobat (Adobe)" }
    },
    {
      id: "5c07e0b9-0cab-11ea-b207-3718ca462015",
      description: { en: "Acrobat Distiller", fr: "Acrobat Distiller" }
    },
    {
      id: "5c07e0ba-0cab-11ea-b208-0bfe9c11b64a",
      description: { en: "JavaDoc", fr: "JavaDoc" }
    },
    {
      id: "5c0807be-0cab-11ea-b209-fb7e3a4238fd",
      description: {
        en: "Client Server Computing",
        fr: "Informatique client-serveur"
      }
    },
    {
      id: "5c0807bf-0cab-11ea-b20a-87053d313982",
      description: {
        en: "CRM (Customer Relationship Management)",
        fr: "Gestion des relations avec les clients"
      }
    },
    {
      id: "5c082eba-0cab-11ea-b20b-1f0c18488081",
      description: { en: "Document Management", fr: "Gestion de documents" }
    },
    {
      id: "5c0855b6-0cab-11ea-b20c-bffc0defae89",
      description: { en: "Technical Support", fr: "Soutien technique" }
    },
    {
      id: "5c087cc6-0cab-11ea-b20d-43c13c6999b5",
      description: { en: "Operations", fr: "Activités d'exploitation" }
    },
    {
      id: "5c087cc7-0cab-11ea-b20e-8317061c92de",
      description: { en: "Service Management", fr: "Gestion des services" }
    },
    {
      id: "5c08a3c2-0cab-11ea-b20f-4f9efe035290",
      description: { en: "SOA", fr: "Architecture orientée services" }
    },
    {
      id: "5c08caa0-0cab-11ea-b210-dbc2faf875f9",
      description: { en: "Training", fr: "Formation" }
    },
    {
      id: "5c08caa1-0cab-11ea-b211-2b22a60b2fa2",
      description: {
        en: "Disaster Recovery Planning",
        fr: "Planification de la reprise des activités après un sinistre"
      }
    },
    {
      id: "5c08f17e-0cab-11ea-b212-73d9802185ea",
      description: { en: "E-Commerce", fr: "Commerce électronique" }
    },
    {
      id: "5c08f17f-0cab-11ea-b213-ab6b7f3f1267",
      description: {
        en: "Research & Development",
        fr: "Recherche et développement"
      }
    },
    {
      id: "5c09187a-0cab-11ea-b214-b73c5bb01baf",
      description: { en: "Benchmarking", fr: "Étalonnage" }
    },
    {
      id: "5c093f8a-0cab-11ea-b215-db1d2899c9d8",
      description: {
        en: "Configuration Management",
        fr: "Gestion de la configuration"
      }
    },
    {
      id: "5c093f8b-0cab-11ea-b216-d7b7e1a228fd",
      description: { en: "Social Media", fr: "Médias sociaux" }
    },
    {
      id: "5c096668-0cab-11ea-b217-2fa8a991a2dd",
      description: { en: "Telecommunication", fr: "Télécommunications" }
    },
    {
      id: "5c098d5a-0cab-11ea-b218-2379d11d2e3a",
      description: { en: "Virtualization", fr: "Virtualisation" }
    },
    {
      id: "5c09b44c-0cab-11ea-b219-8399f09ab96a",
      description: {
        en: "Business Process Re-Engineering",
        fr: "Reconfiguration de processus administratifs"
      }
    },
    {
      id: "5c09b44d-0cab-11ea-b21a-d748ecd8c9c4",
      description: {
        en: "Corporate Engineering of Desktop Productivity Tools",
        fr: "Service d'ingénierie des outils de travail électronique de bureau"
      }
    },
    {
      id: "5c09db48-0cab-11ea-b21b-7734288e34ed",
      description: { en: "Data Warehousing", fr: "Entreposage de données" }
    },
    {
      id: "5c09db49-0cab-11ea-b21c-83ebc6f1aeee",
      description: {
        en: "Distributed Databases",
        fr: "Bases de données réparties"
      }
    },
    {
      id: "5c0a0230-0cab-11ea-b21d-a3c60ddfa1a0",
      description: { en: "GIS", fr: "SGI (systèmes généraux d'information)" }
    },
    {
      id: "5c0a5032-0cab-11ea-b21e-cf441e036e74",
      description: { en: "Image Processing", fr: "Traitement des images" }
    },
    {
      id: "5c0a7724-0cab-11ea-b21f-0b694564bf0a",
      description: {
        en: "Information Management",
        fr: "Gestion de l'information"
      }
    },
    {
      id: "5c0a9e3e-0cab-11ea-b220-dbe6df7262a2",
      description: {
        en: "Knowledge Management",
        fr: "Gestion des connaissances"
      }
    },
    {
      id: "5c0ac4fe-0cab-11ea-b221-2bcf1709bc6e",
      description: { en: "Middleware", fr: "Intergiciels" }
    },
    {
      id: "5c0aebf0-0cab-11ea-b222-cfb563b3c649",
      description: {
        en: "Production Scheduling",
        fr: "Ordonnancement de la production"
      }
    },
    {
      id: "5c0aebf1-0cab-11ea-b223-1392fafdb481",
      description: {
        en:
          "Software Distribution/Installation |Fourniture et installation de logiciels \n",
        fr: ""
      }
    },
    {
      id: "5c0b12ec-0cab-11ea-b224-7b427517d58f",
      description: { en: "Telephony  /  VOIP", fr: "Téléphonie / Voix sur IP" }
    },
    {
      id: "5c0b39f2-0cab-11ea-b225-7fc4ae8876bb",
      description: { en: "Videoconferencing", fr: "Vidéoconférence" }
    },
    {
      id: "5c0b60da-0cab-11ea-b226-23eaf550f2c8",
      description: { en: "Cloud Computing", fr: "Informatique en nuage" }
    },
    {
      id: "5c0b60db-0cab-11ea-b227-0b52f1519b10",
      description: { en: "Conversions", fr: "Conversions" }
    },
    {
      id: "5c0b87c2-0cab-11ea-b228-379066662b37",
      description: {
        en: "Workflow Automation",
        fr: "Automatisation du travail"
      }
    },
    {
      id: "5c0b87c3-0cab-11ea-b229-d7fac97c3715",
      description: { en: "Problem Solving", fr: "Résolution de problèmes" }
    },
    {
      id: "5c0b87c4-0cab-11ea-b22a-af40779e9cb0",
      description: { en: "Change Management", fr: "Gestion du changement" }
    },
    {
      id: "5c0baeb4-0cab-11ea-b22b-f76d1c0f24ee",
      description: { en: "Contract Management", fr: "Gestion des marchés" }
    },
    {
      id: "5c0baeb5-0cab-11ea-b22c-97bbfc8e56f8",
      description: {
        en: "Corporate Leadership & Direction Setting",
        fr: "Leadership d'entreprise et établissement d'orientations"
      }
    },
    {
      id: "5c0baeb6-0cab-11ea-b22d-33a7d4224e26",
      description: {
        en: "Business Case Preparation",
        fr: "Préparation d'analyses de rentabilisation"
      }
    },
    {
      id: "5c0bd5a6-0cab-11ea-b22e-5ff1a8ba6aeb",
      description: {
        en: "Business Process Management ",
        fr: "Gestion des processus administratifs"
      }
    },
    {
      id: "5c0bd5a7-0cab-11ea-b22f-0bae2ff4771f",
      description: {
        en: "Capacity Planning",
        fr: "Planification des capacités"
      }
    },
    {
      id: "5c0bfc98-0cab-11ea-b230-a7515db5fff1",
      description: { en: "Governance", fr: "Gouvernance" }
    },
    {
      id: "5c0bfc99-0cab-11ea-b231-ab9ae34dd891",
      description: {
        en: "Budget Development & Reporting",
        fr: "Établissement de budgets et production de rapports budgétaires"
      }
    },
    {
      id: "5c0bfc9a-0cab-11ea-b232-9392fdd81db3",
      description: {
        en: "Business Feasibility Studies",
        fr: "Études de faisabilité opérationnelle"
      }
    },
    {
      id: "5c0c2394-0cab-11ea-b233-67d300af3bd8",
      description: {
        en: "Business Formal Presentations",
        fr: "Présentations d'affaires officielles"
      }
    },
    {
      id: "5c0c2395-0cab-11ea-b234-cf9d9546b287",
      description: {
        en: "Business Strategic Planning",
        fr: "Planification stratégique des activités"
      }
    },
    {
      id: "5c0c4a86-0cab-11ea-b235-47768cd002dd",
      description: {
        en: "Business Cost Benefit Analysis",
        fr: "Analyse coûts-avantages opérationnels"
      }
    },
    {
      id: "5c0c4a87-0cab-11ea-b236-eb3d90ff4010",
      description: {
        en: "Business Definition Requirements",
        fr: "Exigences en matière de définitions opérationnelles"
      }
    },
    {
      id: "5c0c4a88-0cab-11ea-b237-73543f4a367a",
      description: { en: "Quantitative Analysis", fr: "Analyses quantitatives" }
    },
    {
      id: "5c0c7182-0cab-11ea-b238-73146afc6c75",
      description: {
        en: "Technology Strategic Planning",
        fr: "Planification stratégique des technologies"
      }
    },
    {
      id: "5c0c7183-0cab-11ea-b239-27b0665599f7",
      description: {
        en: "Business Peer Leadership",
        fr: "Leadership par les pairs en entreprise"
      }
    },
    {
      id: "5c0c9874-0cab-11ea-b23a-1b1fbd326ad0",
      description: { en: "Business Writing", fr: "Rédaction d'affaires" }
    },
    {
      id: "5c0c9875-0cab-11ea-b23b-5be4f578928c",
      description: {
        en: "Life Cycle for End User Computing Hardware",
        fr: "Cycle de vie du matériel informatique pour l'utilisateur final"
      }
    },
    {
      id: "5c0cbf66-0cab-11ea-b23c-b70848d80c93",
      description: {
        en: "Organizational and environmental awareness of CIO",
        fr: "Sensibilisation à l'organisation et à l'environnement du BI"
      }
    },
    {
      id: "5c0cbf67-0cab-11ea-b23d-6f6f7d131450",
      description: { en: "Performance Measurement", fr: "Mesure du rendement" }
    },
    {
      id: "5c0ce662-0cab-11ea-b23e-671ec92dbdc6",
      description: { en: "Policy development", fr: "Élaboration de politiques" }
    },
    {
      id: "5c0ce663-0cab-11ea-b23f-4b421e0506fa",
      description: {
        en: "Service Identification",
        fr: "Détermination de services"
      }
    },
    {
      id: "5c0ce664-0cab-11ea-b240-ef902eae69e1",
      description: { en: "Statistics", fr: "Statistiques" }
    },
    {
      id: "5c0d0d54-0cab-11ea-b241-f7a4a28cbc45",
      description: {
        en: "Vendor/Service Provider/Central Agency Relationship Management",
        fr:
          "Gestion des relations de l'organisme central avec les vendeurs/fournisseurs de services"
      }
    },
    {
      id: "5c0d0d55-0cab-11ea-b242-a74a7b4104ea",
      description: {
        en: "Service Provider Metrics Devt",
        fr: "Élaboration d'outils de mesure visant les fournisseurs de services"
      }
    },
    {
      id: "5c0d0d56-0cab-11ea-b243-933c2c5a8b4f",
      description: {
        en: "Service Provider Serv Level Devt",
        fr: "Établ. des niveaux de service des fournisseurs de services"
      }
    },
    {
      id: "5c0d3446-0cab-11ea-b244-5ffaead05376",
      description: {
        en: "Building, Recruiting and Managing Teams",
        fr: "Recrutement, constitution et gestion d'équipes"
      }
    },
    {
      id: "5c0d3447-0cab-11ea-b245-df7854bc98a5",
      description: {
        en: "Lead Medium Teams (5-15)",
        fr: "Direction d'équipes moyennes (de 5 à 15 personnes)"
      }
    },
    {
      id: "5c0d5b42-0cab-11ea-b246-df3692a5ddbb",
      description: {
        en: "Employee Performance Review",
        fr: "Examen du rendement des employés"
      }
    },
    {
      id: "5c0d8248-0cab-11ea-b247-3724999a09c5",
      description: {
        en: "Lead Small Teams (1-5)",
        fr: "Direction de petites équipes (de 1 à 5 personnes)"
      }
    },
    {
      id: "5c0d8249-0cab-11ea-b248-9fa440b0f8f6",
      description: {
        en: "Lead Large Teams (15+)",
        fr: "Direction de grandes équipes (15 personnes ou plus)"
      }
    },
    {
      id: "5c0da94e-0cab-11ea-b249-a76c12c1e15c",
      description: { en: "Employee engagement ", fr: "Engagement des employés" }
    },
    {
      id: "5c0dd07c-0cab-11ea-b24a-73a8f5dee922",
      description: {
        en: "Lead Medium Projects (3-12 Months)",
        fr: "Direction de projets à moyen terme (de 3 à 12 mois)"
      }
    },
    {
      id: "5c0df732-0cab-11ea-b24b-8723f11ce606",
      description: {
        en: "Lead Short Projects (1-3 Months)",
        fr: "Direction de projets à court terme (de 1 à 3 mois)"
      }
    },
    {
      id: "5c0e1e10-0cab-11ea-b24c-3f7d8842b37f",
      description: { en: "Project Management", fr: "Gestion de projets" }
    },
    {
      id: "5c0e1e11-0cab-11ea-b24d-4ba4fe421abd",
      description: { en: "Project Planning", fr: "Planification de projets" }
    },
    {
      id: "5c0e4502-0cab-11ea-b24e-fbb9154e7393",
      description: {
        en: "Project Quality Assurance",
        fr: "Assurance de la qualité des projets"
      }
    },
    {
      id: "5c0e4503-0cab-11ea-b24f-1b4d0a6af000",
      description: {
        en: "Project Change Management",
        fr: "Gestion des changements aux projets"
      }
    },
    {
      id: "5c0e6c1c-0cab-11ea-b250-377745816512",
      description: {
        en: "Project Estimating",
        fr: "Estimation des coûts des projets"
      }
    },
    {
      id: "5c0e92fa-0cab-11ea-b251-f733c082a2af",
      description: {
        en: "Project Scheduling",
        fr: "Ordonnancement des projets"
      }
    },
    {
      id: "5c0eb9ec-0cab-11ea-b252-63ec90f084e2",
      description: { en: "Project Control", fr: "Contrôle des projets" }
    },
    {
      id: "5c0eb9ed-0cab-11ea-b253-ab86d19d7b3a",
      description: {
        en: "Project Resource Management",
        fr: "Gestion des ressources des projets"
      }
    },
    {
      id: "5c0ee0d4-0cab-11ea-b254-7f13bf97c301",
      description: {
        en: "Project Risk Management",
        fr: "Gestion des risques des projets"
      }
    },
    {
      id: "5c0ee0d5-0cab-11ea-b255-2fc07054033c",
      description: {
        en: "Project Tracking and Reporting",
        fr: "Suivi de projets et production de rapports"
      }
    },
    {
      id: "5c0f07c6-0cab-11ea-b256-e762ac1815ae",
      description: {
        en: "Lead Long Projects (12+ Months)",
        fr: "Direction de projets à long terme (plus de 12 mois)"
      }
    },
    {
      id: "5c0f07c7-0cab-11ea-b257-d33210894ceb",
      description: {
        en: "Project Management Tools",
        fr: "Outils de gestion de projets"
      }
    },
    {
      id: "5c0f2ec2-0cab-11ea-b258-cf1a3b0e773c",
      description: {
        en: "Process Design and Documentation",
        fr: "Conception et documentation de processus"
      }
    },
    {
      id: "5c0f2ec3-0cab-11ea-b259-5b58ececb3c3",
      description: {
        en: "Active Directory (Microsoft)",
        fr: "Active Directory (Microsoft)"
      }
    },
    {
      id: "5c0f2ec4-0cab-11ea-b25a-bfd4d1f77600",
      description: { en: "LDAP", fr: "Protocole LDAP" }
    },
    {
      id: "5c0f55b4-0cab-11ea-b25b-172455aacdb4",
      description: { en: "HTTP", fr: "Protocole HTTP" }
    },
    {
      id: "5c0f55b5-0cab-11ea-b25c-bb97d3c86ee4",
      description: { en: "IP", fr: "Protocole Internet" }
    },
    {
      id: "5c0f7cce-0cab-11ea-b25d-1777a7cb6ca1",
      description: {
        en: "Data Communications Protocols (general)",
        fr: "Protocoles de communication de données (général)"
      }
    },
    {
      id: "5c0fa3d4-0cab-11ea-b25e-fbe35bfdb62c",
      description: { en: "DNS", fr: "Architecture DNS" }
    },
    {
      id: "5c0fcaa8-0cab-11ea-b25f-ff654e6584c0",
      description: { en: "Internet firewalls", fr: "Pare-feu Internet" }
    },
    {
      id: "5c0ff1b8-0cab-11ea-b260-1362b4060c3f",
      description: {
        en: "NetworkTopology (general)",
        fr: "Topologie des réseaux (général)"
      }
    },
    {
      id: "5c0ff1b9-0cab-11ea-b261-07ba4ef534df",
      description: { en: "Routing Protocols", fr: "Protocoles de routage" }
    },
    {
      id: "5c101882-0cab-11ea-b262-e72780da2bed",
      description: { en: "Wireless LANs", fr: "Réseaux locaux sans fil" }
    },
    {
      id: "5c101883-0cab-11ea-b263-2fc60939b788",
      description: { en: "Wireless", fr: "Technologies sans fil" }
    },
    {
      id: "5c103f88-0cab-11ea-b264-670d5465da9d",
      description: {
        en: "Computer Communications Protocols(general)",
        fr: "Protocoles de communications informatiques (général)"
      }
    },
    {
      id: "5c10667a-0cab-11ea-b265-2702f9342b03",
      description: { en: "DHCP", fr: "Protocole DHCP" }
    },
    {
      id: "5c108d76-0cab-11ea-b266-1f6672136e1c",
      description: {
        en: "Distributed Computing Architecture",
        fr: "Architecture informatique répartie"
      }
    },
    {
      id: "5c10b486-0cab-11ea-b267-f33c9f008865",
      description: { en: "LANs (general)", fr: "Réseaux locaux (général)" }
    },
    {
      id: "5c10db5a-0cab-11ea-b268-f307a607147a",
      description: {
        en: "Network Administration",
        fr: "Administration de réseaux"
      }
    },
    {
      id: "5c110242-0cab-11ea-b269-eff2084d177c",
      description: { en: "NFS", fr: "Serveurs de fichiers réseau" }
    },
    {
      id: "5c110243-0cab-11ea-b26a-57dee1821722",
      description: { en: "Routers", fr: "Routeurs" }
    },
    {
      id: "5c11293e-0cab-11ea-b26b-1f341b3f2cc5",
      description: {
        en: "Virtual Private Network (VPN)",
        fr: "Réseau privé virtuel (RPV)"
      }
    },
    {
      id: "5c115030-0cab-11ea-b26c-2336bdcbcab6",
      description: { en: "VPN Server", fr: "Serveurs RPV" }
    },
    {
      id: "5c115031-0cab-11ea-b26d-3be05c90204d",
      description: { en: "WAN", fr: "Réseaux étendus" }
    },
    {
      id: "5c117722-0cab-11ea-b26e-e748aa882f61",
      description: { en: "Windows Server 2008", fr: "Windows Server 2008" }
    },
    {
      id: "5c117723-0cab-11ea-b26f-0fa331417cf5",
      description: { en: "Windows 7", fr: "Windows 7" }
    },
    {
      id: "5c119e14-0cab-11ea-b270-97b6c60ea048",
      description: { en: "VMWare", fr: "VMWare" }
    },
    {
      id: "5c119e15-0cab-11ea-b271-93eeacc4955c",
      description: { en: "File systems", fr: "Systèmes de fichiers" }
    },
    {
      id: "5c11c524-0cab-11ea-b272-9b0877f40343",
      description: { en: "Linux", fr: "Linux" }
    },
    {
      id: "5c11ec34-0cab-11ea-b273-5b0b54a54b3b",
      description: { en: "UNIX (IBM - AIX)", fr: "UNIX (IBM - AIX)" }
    },
    {
      id: "5c1213b2-0cab-11ea-b274-6f76a30ccd37",
      description: { en: "Firmware", fr: "Micrologiciels" }
    },
    {
      id: "5c123a18-0cab-11ea-b275-1f0715750f11",
      description: { en: "Windows 8", fr: "Windows 8" }
    },
    {
      id: "5c12610a-0cab-11ea-b276-f3daddbe72f5",
      description: { en: "Windows Server 2003", fr: "Windows Server 2003" }
    },
    {
      id: "5c12610b-0cab-11ea-b277-9fe452ba5e9a",
      description: {
        en: "CICS (IBM)",
        fr: "Systèmes de contrôle de l'information destinée au client (IBM)"
      }
    },
    {
      id: "5c1287fc-0cab-11ea-b278-63890ba96b49",
      description: { en: "Citrix", fr: "Citrix" }
    },
    {
      id: "5c1287fd-0cab-11ea-b279-07acb99298a1",
      description: { en: "Debugging tools", fr: "Outils de mise au point" }
    },
    {
      id: "5c12af48-0cab-11ea-b27a-affbd6281925",
      description: {
        en: "Development toolkits",
        fr: "Boîtes à outils de développement"
      }
    },
    {
      id: "5c12d5e0-0cab-11ea-b27b-4fd01b76aba3",
      description: {
        en: "FAT/FAT32",
        fr: "Tables d'allocation de fichiers FAT/FAT32"
      }
    },
    {
      id: "5c12d5e1-0cab-11ea-b27c-afec1a7574d0",
      description: {
        en: "MVS / SP / XA / ESA (IBM)",
        fr:
          "Mém. virt. double (MVS / programmation structurée (PS) / arch. étendue / ESA (IBM)"
      }
    },
    {
      id: "5c18bdd5-0cab-11ea-b2c9-6b2a9c9c8f6c",
      description: { en: "IIS (Microsoft)", fr: "IIS (Microsoft)" }
    },
    {
      id: "5c12fcfa-0cab-11ea-b27d-23645dba61bc",
      description: { en: "OS kernels", fr: "Noyaux de systèmes d'exploitation" }
    },
    {
      id: "5c1323ce-0cab-11ea-b27e-cb0ce49ae781",
      description: { en: "OS/390 (IBM)", fr: "OS/390 (IBM)" }
    },
    {
      id: "5c1323cf-0cab-11ea-b27f-5fd810b933d3",
      description: { en: "Solaris OS", fr: "Système d'exploitation Solaris" }
    },
    {
      id: "5c134aac-0cab-11ea-b280-c3ccfdab0de4",
      description: { en: "TSO", fr: "Systèmes en temps partagé" }
    },
    {
      id: "5c134aad-0cab-11ea-b281-d3f724e89a7f",
      description: { en: "UNIX (HP-UX)", fr: "UNIX (HP-UX)" }
    },
    {
      id: "5c137194-0cab-11ea-b282-d7ad9fedeaf9",
      description: { en: "UNIX (other)", fr: "UNIX (autres)" }
    },
    {
      id: "5c137195-0cab-11ea-b283-ffb1051ed0fe",
      description: {
        en: "Virtual memory management",
        fr: "Gestion de mémoires virtuelles"
      }
    },
    {
      id: "5c137196-0cab-11ea-b284-f7c5677edc96",
      description: { en: "Windows Server 2012", fr: "Windows Server 2012" }
    },
    {
      id: "5c139886-0cab-11ea-b285-7fdf20a4aeb5",
      description: {
        en: "CSS (Cascading Style Sheets)",
        fr: "Feuilles de style en cascade (FSC)"
      }
    },
    {
      id: "5c139887-0cab-11ea-b286-e7a9f4599e76",
      description: { en: "Java ", fr: "Java" }
    },
    {
      id: "5c139888-0cab-11ea-b287-53f6fbd8235b",
      description: { en: "PL/SQL (Oracle)", fr: "PL/SQL (Oracle)" }
    },
    {
      id: "5c13bf82-0cab-11ea-b288-bfeedb1d2ea7",
      description: { en: "HTML ", fr: "HTML" }
    },
    {
      id: "5c13bf83-0cab-11ea-b289-471b520bfdeb",
      description: { en: "JavaScript ", fr: "JavaScript" }
    },
    {
      id: "5c13e714-0cab-11ea-b28a-4f248615ce3d",
      description: { en: "jQuery", fr: "jQuery" }
    },
    {
      id: "5c13e715-0cab-11ea-b28b-57f8c60390aa",
      description: { en: "SQL", fr: "Langage relationnel SQL" }
    },
    {
      id: "5c13e716-0cab-11ea-b28c-b3c42c0f381d",
      description: { en: "XML", fr: "Langage de balisage extensible" }
    },
    {
      id: "5c140d7a-0cab-11ea-b28d-77c698ce7dcf",
      description: { en: "Oracle SQL *Plus", fr: "Oracle SQL *Plus" }
    },
    {
      id: "5c140d7b-0cab-11ea-b28e-3b2e0574851e",
      description: { en: "Perl", fr: "Perl" }
    },
    {
      id: "5c143458-0cab-11ea-b28f-4f2677dfee63",
      description: { en: "PowerBuilder", fr: "PowerBuilder" }
    },
    {
      id: "5c143459-0cab-11ea-b290-cf4232d5f91d",
      description: {
        en: "UNIX Shell Scripting",
        fr: "Séquence de commandes en langage naturel UNIX"
      }
    },
    {
      id: "5c14345a-0cab-11ea-b291-27a8f475363f",
      description: { en: "Visual Basic", fr: "Visual Basic" }
    },
    {
      id: "5c145b5e-0cab-11ea-b292-f32005906ce5",
      description: {
        en: "XSL",
        fr: "Langage extensible de feuilles de style (XSL)"
      }
    },
    {
      id: "5c145b5f-0cab-11ea-b293-f7fbeb2e6707",
      description: {
        en: "ABAP",
        fr: "Programmation avancée d'applications administratives"
      }
    },
    {
      id: "5c145b60-0cab-11ea-b294-a3abe68c1e66",
      description: { en: "ActionScript", fr: "ActionScript" }
    },
    {
      id: "5c148246-0cab-11ea-b295-0b62d06f7c96",
      description: { en: "C ", fr: "C" }
    },
    {
      id: "5c148247-0cab-11ea-b296-170e8aaacb6d",
      description: { en: "C# ", fr: "C#" }
    },
    {
      id: "5c14a942-0cab-11ea-b297-ab6fca6434c0",
      description: { en: "C++ ", fr: "C++" }
    },
    {
      id: "5c14a943-0cab-11ea-b298-3b42e7172117",
      description: {
        en: "CICS API (IBM) ",
        fr: "Interfaces de programmation d'applications SCIC (IBM)"
      }
    },
    {
      id: "5c14d03e-0cab-11ea-b299-fb6d83148e7a",
      description: { en: "Clist ", fr: "Listes de commandes" }
    },
    {
      id: "5c14d03f-0cab-11ea-b29a-cb5d072565b5",
      description: { en: "JCL", fr: "Langage de gestion des travaux" }
    },
    {
      id: "5c14f74e-0cab-11ea-b29b-d30c08aec610",
      description: { en: "MicroFocus Cobol", fr: "MicroFocus Cobol" }
    },
    {
      id: "5c14f74f-0cab-11ea-b29c-5febaf5f1f76",
      description: { en: "PHP", fr: "PHP" }
    },
    {
      id: "5c151e54-0cab-11ea-b29d-03dbe07ae087",
      description: { en: "Powershell", fr: "Windows PowerShell" }
    },
    {
      id: "5c15455a-0cab-11ea-b29e-3b01b8011c81",
      description: { en: "Swing", fr: "Swing" }
    },
    {
      id: "5c156c38-0cab-11ea-b29f-ef5c514f44bc",
      description: {
        en: "Transact-SQL (Microsoft)",
        fr: "Transact-SQL (Microsoft)"
      }
    },
    {
      id: "5c156c39-0cab-11ea-b2a0-9bf9c20c55ab",
      description: { en: "VBScript", fr: "Visual Basic Script" }
    },
    {
      id: "5c159302-0cab-11ea-b2a1-2fa32ae54ba4",
      description: { en: "Visual Basic .NET", fr: "Visual Basic .NET" }
    },
    {
      id: "5c159303-0cab-11ea-b2a2-7f9358edc833",
      description: { en: "Visual C++", fr: "Visual C++" }
    },
    {
      id: "5c15b9f4-0cab-11ea-b2a3-63320267a3b8",
      description: {
        en: "Windows Remote Management (WinRM) ",
        fr: "Windows Remote Management (WinRM)"
      }
    },
    {
      id: "5c15b9f5-0cab-11ea-b2a4-9fbbaba911a4",
      description: { en: "X-Query", fr: "X-Query" }
    },
    {
      id: "5c15da6a-0cab-11ea-b2a5-1f94466b60f1",
      description: { en: "ASP.NET", fr: "ASP.NET" }
    },
    {
      id: "5c1600a8-0cab-11ea-b2a6-8b9148a1d60b",
      description: {
        en: "Identity and Acess Management",
        fr: "Gestion de l'identité et de l'accès"
      }
    },
    {
      id: "5c16279a-0cab-11ea-b2a7-772fe2ca6456",
      description: {
        en: "Policies and Procedures",
        fr: "Politiques et procédures"
      }
    },
    {
      id: "5c16279b-0cab-11ea-b2a8-eb4ef6a0f57b",
      description: { en: "Testing and Auditing", fr: "Essais et vérifications" }
    },
    {
      id: "5c16279c-0cab-11ea-b2a9-4f6d36e0f398",
      description: {
        en: "Encryption algorithms",
        fr: "Algorithmes cryptographiques"
      }
    },
    {
      id: "5c164e82-0cab-11ea-b2aa-27184896c244",
      description: {
        en: "RACF (IBM)",
        fr: "Fonction de contrôle de l'accès aux données (IBM)"
      }
    },
    {
      id: "5c164e83-0cab-11ea-b2ab-cb11c4399a43",
      description: {
        en: "Security Risk Management",
        fr: "Gestion des risques pour la sécurité "
      }
    },
    {
      id: "5c16757e-0cab-11ea-b2ac-e709cda3a28e",
      description: {
        en: "Systems Software Installation & Upgrade",
        fr: "Installation et mise à niveau de logiciels systèmes"
      }
    },
    {
      id: "5c16757f-0cab-11ea-b2ad-2f0d489e2ad4",
      description: {
        en: "Systems Help Desk Management",
        fr: "Gestion des services de dépannage des systèmes"
      }
    },
    {
      id: "5c167580-0cab-11ea-b2ae-038035afa13c",
      description: {
        en: "Systems Production Support",
        fr: "Soutien à la production des systèmes"
      }
    },
    {
      id: "5c169c66-0cab-11ea-b2af-e3fb54e5fbed",
      description: {
        en: "Systems Security and User Administration",
        fr: "Sécurité des systèmes et administration des utilisateurs"
      }
    },
    {
      id: "5c169c67-0cab-11ea-b2b0-fbc859b820c3",
      description: {
        en: "Systems Security Maintenance",
        fr: "Maintenance de la sécurité des systèmes"
      }
    },
    {
      id: "5c16c39e-0cab-11ea-b2b1-e389bb8dd154",
      description: { en: "Tivoli (IBM)", fr: "Tivoli (IBM)" }
    },
    {
      id: "5c16ea68-0cab-11ea-b2b2-6348d8ab9928",
      description: {
        en: "Microsoft BitLocker Admin and Monitoring (MBAM)",
        fr: "Microsoft BitLocker Admin and Monitoring (MBAM)"
      }
    },
    {
      id: "5c171164-0cab-11ea-b2b3-67a92f4288f4",
      description: {
        en: "Microsoft Desktop Optimization Pack (MDOP)",
        fr: "Microsoft Desktop Optimization Pack (MDOP)"
      }
    },
    {
      id: "5c173888-0cab-11ea-b2b4-ff7ff0c7df00",
      description: {
        en: "Microsoft System Center",
        fr: "Microsoft System Center"
      }
    },
    {
      id: "5c175f84-0cab-11ea-b2b5-3f7fec14e6dd",
      description: {
        en: "Symantec Endpoint Protection ",
        fr: "Symantec Endpoint Protection"
      }
    },
    {
      id: "5c178630-0cab-11ea-b2b6-93d95d43ce58",
      description: { en: "vi Editor", fr: "vi Editor" }
    },
    {
      id: "5c178631-0cab-11ea-b2b7-73fda601dec2",
      description: {
        en: "Windows Management Instrumentation (WMI) ",
        fr: "Windows Management Instrumentation (WMI)"
      }
    },
    {
      id: "5c17ad2c-0cab-11ea-b2b8-172d76afff6c",
      description: {
        en: "Interface design (computer)",
        fr: "Conception d'interfaces (informatique)"
      }
    },
    {
      id: "5c17ad2d-0cab-11ea-b2b9-232af6fc654c",
      description: { en: "Proposal writer", fr: "Rédaction de propositions" }
    },
    {
      id: "5c17d41e-0cab-11ea-b2ba-9f938ed3df0d",
      description: { en: "Technical Content", fr: "Contenu technique" }
    },
    {
      id: "5c17d41f-0cab-11ea-b2bb-cff20310a728",
      description: {
        en: "Technical Writer (procedures)",
        fr: "Rédaction technique (procédures)"
      }
    },
    {
      id: "5c17fb10-0cab-11ea-b2bc-539a526478c8",
      description: { en: "Document design", fr: "Conception de documents" }
    },
    {
      id: "5c17fb11-0cab-11ea-b2bd-43ca49e8d5ac",
      description: { en: "Illustration", fr: "Illustration" }
    },
    {
      id: "5c18220c-0cab-11ea-b2be-d70d6842d051",
      description: {
        en: "Information architecting",
        fr: "Élaboration d'architectures d'information"
      }
    },
    {
      id: "5c18220d-0cab-11ea-b2bf-8bad85b221bd",
      description: { en: "Proofreader", fr: "Correction d'épreuves" }
    },
    {
      id: "5c1848fe-0cab-11ea-b2c0-0b1a71a709c6",
      description: {
        en: "Technical Writer (app / end-user software)",
        fr: "Rédaction technique (appl. / logiciels d'utilisateurs)"
      }
    },
    {
      id: "5c1848ff-0cab-11ea-b2c1-c3ff36828e34",
      description: {
        en: "Trainer (technical content)",
        fr: "Formation (contenu technique)"
      }
    },
    {
      id: "5c184900-0cab-11ea-b2c2-6bc80f474f78",
      description: {
        en: "SMTP",
        fr: "Protocole de transfert de courrier simple"
      }
    },
    {
      id: "5c186ff0-0cab-11ea-b2c3-8fb6765cf538",
      description: { en: "Apache HTTP Server", fr: "Serveur Apache HTTP" }
    },
    {
      id: "5c186ff1-0cab-11ea-b2c4-e7b95eda9861",
      description: {
        en: "Oracle Application Server",
        fr: "Serveur d'applications Oracle"
      }
    },
    {
      id: "5c1896d8-0cab-11ea-b2c5-fbd8e802e06a",
      description: { en: "Sendmail", fr: "Sendmail" }
    },
    {
      id: "5c1896d9-0cab-11ea-b2c6-7793b967e39c",
      description: { en: "WebSphere (IBM)", fr: "WebSphere (IBM)" }
    },
    {
      id: "5c1896da-0cab-11ea-b2c7-87bc5891dc2b",
      description: { en: "ATG Dynamo", fr: "Serveur ATG Dynamo" }
    },
    {
      id: "5c18bdd4-0cab-11ea-b2c8-ab9c54176873",
      description: {
        en: "FTP servers",
        fr: "Serveurs de protocole de transfert de fichiers"
      }
    },
    {
      id: "5c18bdd6-0cab-11ea-b2ca-d7e15da40b8c",
      description: { en: "Jboss", fr: "Jboss" }
    },
    {
      id: "5c18e4da-0cab-11ea-b2cb-577a1a6b5583",
      description: { en: "Print servers", fr: "Serveurs d'impression" }
    },
    {
      id: "5c18e4db-0cab-11ea-b2cc-8b53ad3c20ef",
      description: { en: "Proxy servers", fr: "Serveurs mandataires" }
    },
    {
      id: "5c190bc2-0cab-11ea-b2cd-a7d145b6b768",
      description: { en: "WebLogic (Oracle)", fr: "WebLogic (Oracle)" }
    },
    {
      id: "5c190bc3-0cab-11ea-b2ce-3b904e876b4e",
      description: { en: ".Net Framework", fr: ".NET Framework" }
    },
    {
      id: "5c1932be-0cab-11ea-b2cf-57f53db8ef80",
      description: {
        en: "ESB: Enterprise Service Bus",
        fr: "Bus de service d'entreprise (ESB) "
      }
    },
    {
      id: "5c1932bf-0cab-11ea-b2d0-3f28c299eba5",
      description: {
        en: "Google Search Appliance",
        fr: "Google Search Appliance"
      }
    },
    {
      id: "5c1959a6-0cab-11ea-b2d1-3baa250d2ab4",
      description: { en: "Dreamweaver (Adobe)", fr: "Dreamweaver (Adobe)" }
    },
    {
      id: "5c1959a7-0cab-11ea-b2d2-e719be0e1882",
      description: { en: "Apache Tomcat", fr: "Apache Tomcat" }
    },
    {
      id: "5c1980a2-0cab-11ea-b2d3-6f054cb46bcc",
      description: {
        en: "ColdFusion CFML",
        fr: "Langage de balisage ColdFusion (CFML)"
      }
    },
    {
      id: "5c1980a3-0cab-11ea-b2d4-73edc77f9a76",
      description: { en: "jQuery", fr: "jQuery" }
    },
    {
      id: "5c1980a4-0cab-11ea-b2d5-0f74d304f9e9",
      description: {
        en: "LiveCycle Design (Adobe)",
        fr: "LiveCycle Design (Adobe)"
      }
    },
    {
      id: "5c19a794-0cab-11ea-b2d6-7b8a4af4b79b",
      description: { en: "Microsoft Silverlight", fr: "Microsoft Silverlight" }
    },
    {
      id: "5c19a795-0cab-11ea-b2d7-27de4956c681",
      description: { en: "User Experience (UX)", fr: "Expérience utilisateur" }
    },
    {
      id: "5c19a796-0cab-11ea-b2d8-fb131dd099ff",
      description: { en: "WebTrends", fr: "WebTrends" }
    },
    {
      id: "ef60f9fe-016f-11ea-9a9f-362b9e155667",
      description: { en: ".Net Framework", fr: ".NET Framework" }
    },
    {
      id: "f6f51402-016f-11ea-9a9f-362b9e155667",
      description: { en: "jQuery", fr: "jQuery" }
    }
  ]
};

responses["getTalentMatrixResult"] = {
  data: [
    {
      id: "5b9a4ecc-0cab-11ea-ae0a-bb78a9cdc64a",
      description: { en: "Early promise", fr: "Employé(e) prometteur" }
    },
    {
      id: "5b9a75be-0cab-11ea-ae0b-3733f2753938",
      description: { en: "Exceptional talent", fr: "Futur dirigeant" }
    },
    {
      id: "5b9a9cb0-0cab-11ea-ae0c-379f9b4fec09",
      description: { en: "Future Achiever", fr: "Futur Fonceur" }
    },
    {
      id: "5b9a9cb1-0cab-11ea-ae0d-3781c5cdd298",
      description: { en: "Growth Employee", fr: "Employé(e) en Croissance" }
    },
    {
      id: "5b9ac3a2-0cab-11ea-ae0e-0b7ecc47b781",
      description: { en: "Solid Contributor", fr: "Contributeur Important" }
    },
    {
      id: "5b9ac3a3-0cab-11ea-ae0f-d3391a32b017",
      description: { en: "Solid Professional", fr: "Professionnel Solide" }
    },
    {
      id: "5b9aeab2-0cab-11ea-ae10-d7bb2edde68c",
      description: {
        en: "Strong Performer",
        fr: "Employé(e) au Rendement Elevé"
      }
    },
    {
      id: "5b9aeab3-0cab-11ea-ae11-db39ed1fbcfd",
      description: { en: "Talent Risk", fr: "Talent à Risk" }
    },
    {
      id: "5b9b11d6-0cab-11ea-ae12-2be4e2ff688c",
      description: {
        en: "Trusted Professional",
        fr: "Professionnel de confiance"
      }
    }
  ]
};

responses["getTenure"] = {
  data: [
    {
      id: "5b85279a-0cab-11ea-adf9-b758633b68f0",
      description: { en: "Acting", fr: "Par intérim" }
    },
    {
      id: "5b85757e-0cab-11ea-adfa-ab60ce090697",
      description: { en: "Assignment", fr: "Affectation" }
    },
    {
      id: "5b859c70-0cab-11ea-adfb-971f5b750930",
      description: { en: "Deployment", fr: "Mutations" }
    },
    {
      id: "5b859c71-0cab-11ea-adfc-b7f052ad395b",
      description: { en: "Indeterminate", fr: "Indeterminée" }
    },
    {
      id: "5b85c36c-0cab-11ea-adfd-2b307dce21fc",
      description: { en: "Secondment", fr: "Détachement" }
    },
    {
      id: "5b85ea5e-0cab-11ea-adfe-b3fd7503db24",
      description: { en: "Student", fr: "Étudiant" }
    },
    {
      id: "5b85ea5f-0cab-11ea-adff-e31d3f42a55f",
      description: { en: "Casual", fr: "Travailleur occasionnel" }
    },
    {
      id: "5b861164-0cab-11ea-ae00-374765e29a60",
      description: { en: "Term", fr: "Terme" }
    }
  ]
};
