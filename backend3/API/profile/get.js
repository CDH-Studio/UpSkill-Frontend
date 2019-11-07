const Models = require("../../db/models");
const Profile = Models.profile;
// const Tenure = Models.tenure;
// const Organization = Models.organization;
// const CareerMobility = Models.careerMobility;
// const GroupLevel = Models.groupLevel;
// const SecurityClearance = Models.securityClearance;
// const SecondLanguageProficiency = Models.secondLanguageProficiency;

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

  let acting = await profile.getActing().then(res => {
    if (res) return res.dataValues;
  });

  let experiences = await profile.getExperiences();
  let careerSummary = experiences.map(experience => {
    startDate = Date(experience.startDate);
    endDate = Date(experience.endDate);

    return {
      header: { en: experience.organizationEn, fr: experience.organizationFr },
      subheader: { en: experience.jobTitleEn, fr: experience.jobTitleFr },
      content: { en: experience.descriptionEn, fr: experience.descriptionFr },
      startDate: { en: startDate, fr: startDate },
      endDate: { en: endDate, fr: endDate }
    };
  });

  let education = await profile.getEducation();
  let educations = async () => {
    return Promise.all(
      education.map(async educ => {
        let startDate = Date(educ.startDate);
        let endDate = Date(educ.endDate);
        let school = await educ.getSchool().then(res => {
          if (res) return res.dataValues;
        });
        let diploma = await educ.getDiploma().then(res => {
          if (res) return res.dataValues;
        });
        educ = educ.dataValues;

        return {
          header: school.description,
          subheader: { en: diploma.descriptionEn, fr: diploma.descriptionFr },
          content: "",
          startDate: { en: startDate, fr: startDate },
          endDate: { en: endDate, fr: endDate }
        };
      })
    );
  };
  let educArray = await educations();

  // console.log(await profile.getSkills());

  //Response Object
  let resData = {
    acting: acting ? acting.description : null,
    actingPeriodStartDate: data.actingStartDate,
    actingPeriodEndDate: data.actingEndDate,
    branch: "Chief Information Office Branch",
    careerMobility: {
      en: careerMobility.descriptionEn,
      fr: careerMobility.descriptionFr
    },
    careerSummary,
    city: "Ontario",
    competencies: ["2"],
    country: "Canada",
    developmentalGoals: ["3"],
    education: educArray,
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
  getProfile,
  getProfileById
};
