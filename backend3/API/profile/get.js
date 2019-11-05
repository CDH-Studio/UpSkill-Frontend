const User = require("../../db/models").user;
const Tenure = require("../../db/models").tenure;
const Organization = require("../../db/models").organization;

const getProfile = async (request, response) => {
  response.status(200).json(await User.findAll());
};

const getProfileById = async (request, response) => {
  const id = request.params.id;
  let data = await User.findOne({ where: { id: id } }).then(res => {
    return res.dataValues;
  });

  console.log(data);

  let tenure = await Tenure.findOne({
    where: { id: data.tenureId }
  }).then(res => {
    return res.dataValues;
  });

  let resData = {
    acting: null,
    actingPeriodStartDate: null,
    actingPeriodEndDate: null,
    branch: "Chief Information Office Branch",
    careerMobility: "Ready for movement",
    careerSummary: [
      {
        content: "this is content\nmore content",
        endDate: "Present",
        header: "Payments Canada",
        startDate: "Aug 2017",
        subheader: "Payment Analyst"
      }
    ],
    city: "Ontario",

    competencies: ["2"],
    country: "Canada",
    developmentalGoals: ["3"],

    education: [
      {
        content: "this is content\ni am content",
        subheader: "Telpher School of Buisness",
        endDate: "Apr 2009",
        header: "Masters of Business Administration",
        startDate: "Sept 2007"
      },
      {
        content: "this is content\ni am content",
        subheader: "Carleton University",
        endDate: "Apr 2005",
        header: "Software Engineering",
        startDate: "Sept 2000"
      },
      {
        content: "this is content\ni am content",
        subheader: "smart people shcool",
        endDate: "Apr 2005",
        header: "smart people class",
        startDate: "Sept 2000"
      }
    ],
    email: "mary.smith@canada.ca",
    firstLanguage: "English",
    firstName: data.firstName,
    githubUrl: "https://www.google.com",
    gradedOnSecondLanguage: true,
    classification: "CS 04",
    jobTitle: "Manager, Next Innovation",
    lastName: data.lastName,
    linkedinUrl: "https://www.bing.ca",
    manager: "Chahine El Chaar",
    mobile: "613-402-8224",
    organizationList: [
      "ABC Directorate",
      "ABC Division",
      "Chief Information Office Branch",
      "Digital Transformation Service Sector",
      "Innovation, Science and Economic Development Canada"
    ],
    PO: "K1A 0H5",
    province: "Ottawa",
    secondaryOralDate: "Nov 29 2018",
    secondaryOralGrade: "C",
    secondaryReadingDate: "Oct 17 2020",
    secondaryReadingGrade: "C",
    secondaryWritingDate: "Oct 17 2021",
    secondaryWritingGrade: "B",
    secondLanguage: null,
    security: "Reliability",
    skills: ["1"],
    status: {
      en: tenure.descriptionEn,
      fr: tenure.descriptionFr
    },
    street: "235 Queen Street",
    talentMatrixResult: "Exceptional talent",
    team: "ABC Team",
    telephone: "343-291-1366",
    twitterUrl: "https://www.baidu.com",
    yearsOfService: 5.0
  };

  response.status(200).json(resData);
};

module.exports = {
  getProfile,
  getProfileById
};
