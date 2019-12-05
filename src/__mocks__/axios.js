const profileMockData = {
  data: {
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
    tenure: {
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
  }
};

let getCalls = [];

const getFunc = jest.fn(url => {
  getCalls.push(url);
  return Promise.resolve(profileMockData);
});

export default { get: getFunc, getUrlCalls: () => getCalls };
