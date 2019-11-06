const Models = require("../../db/models");
const User = Models.user;
const Profile = Models.profile;
// const Tenure = Models.tenure;
// const Organization = Models.organization;
// const CareerMobility = Models.careerMobility;
// const GroupLevel = Models.groupLevel;
// const SecurityClearance = Models.securityClearance;
// const SecondLanguageProficiency = Models.secondLanguageProficiency;

const getUser = async (request, response) => {
  response.status(200).json(await User.findAll());
};
const getUserById = async (request, response) => {
  const id = request.params.id;
  response.status(200).json(await User.findOne({ where: { id: id } }));
};

const getProfile = async (request, response) => {
  response.status(200).json(await Profile.findAll());
};

const getProfileById = async (request, response) => {
  const id = request.params.id;
  let user = await User.findOne({ where: { id: id } });

  let profile = await Profile.findOne({ where: { id: id } });
  let data = { ...profile.dataValues, ...user.dataValues };

  let tenure = await profile.getTenure().then(res => {
    return res.dataValues;
  });

  let careerMobility = await profile.getCareerMobility().then(res => {
    return res.dataValues;
  });

  let groupLevel = await profile.getGroupLevel().then(res => {
    return res.dataValues;
  });

  let securityClearance = await profile.getSecurityClearance().then(res => {
    return res.dataValues;
  });

  let resData = {
    acting: null,
    actingPeriodStartDate: null,
    actingPeriodEndDate: null,
    branch: "Chief Information Office Branch",
    careerMobility: {
      en: careerMobility.descriptionEn,
      fr: careerMobility.descriptionFr
    },
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
        subheader: "Telfer School of Business",
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
    email: data.email,
    firstLanguage: "English",
    firstName: data.firstName,
    githubUrl: "https://www.google.com",
    gradedOnSecondLanguage: true,
    classification: groupLevel.description,
    jobTitle: data.jobTitle,
    lastName: data.lastName,
    linkedinUrl: data.linkedin,
    location: data.location,
    manager: data.manager,
    mobile: data.mobile,
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
    security: {
      en: securityClearance.descriptionEn,
      fr: securityClearance.descriptionFr
    },
    skills: ["1"],
    status: {
      en: tenure.descriptionEn,
      fr: tenure.descriptionFr
    },
    street: "235 Queen Street",
    talentMatrixResult: "Exceptional talent",
    team: data.team,
    telephone: data.phone,
    twitterUrl: "https://www.baidu.com",
    yearsOfService: data.yearService
  };

  response.status(200).json(resData);
  // response.status(200).send("In Development");
};

module.exports = {
  getUser,
  getUserById,
  getProfile,
  getProfileById
};
