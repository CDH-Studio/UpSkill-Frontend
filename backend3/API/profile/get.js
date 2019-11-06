const Models = require("../../db/models");
const User = Models.user;
const Tenure = Models.tenure;
const Organization = Models.organization;
const CareerMobility = Models.careerMobility;
const GroupLevel = Models.groupLevel;
const SecurityClearance = Models.securityClearance;
const SecondLanguageProficiency = Models.secondLanguageProficiency;
const

const getProfile = async (request, response) => {
  response.status(200).json(await User.findAll());
};

const getProfileById = async (request, response) => {
  const id = request.params.id;
  let data = await User.findOne({ where: { id: id } }).then(res => {
    if (res == null) {
      response.status(404).send("Not found");
    }
    return res.dataValues;
  });

  console.log(data);

  let tenure = await Tenure.findOne({
    where: { id: data.tenureId }
  }).then(res => {
    return res.dataValues;
  });

  let careerMobility = await CareerMobility.findOne({
    where: { id: data.careerMobilityId }
  }).then(res => {
    return res.dataValues;
  });

  let groupLevel = await GroupLevel.findOne({
    where: { id: data.groupLevelId }
  }).then(res => {
    return res.dataValues;
  });

  let securityClearance = await SecurityClearance.findOne({
    where: { id: data.securityClearanceId }
  }).then(res => {
    return res.dataValues;
  });

  let secondLanguageProficiency = await SecondLanguageProficiency.findOne({
    where: { id: data.secondLanguageProficiencyId }
  }).then(res => {
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
    location:data.location,
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
};

module.exports = {
  getProfile,
  getProfileById
};
