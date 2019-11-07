const moment = require("moment");
const Models = require("../../db/models");
const User = Models.user;
const Profile = Models.profile;

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

  if (!profile) response.status(404).send("Profile Not Found");
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
    let startDate = moment(experience.startDate);
    let endDate = moment(experience.endDate);

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
        let startDate = moment(educ.startDate);
        let endDate = moment(educ.endDate);
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

  let skills = await profile.getSkills().map(skill => {
    return {
      en: skill.dataValues.descriptionEn,
      fr: skill.dataValues.descriptionFr
    };
  });

  let competencies = await profile.getCompetencies().map(skill => {
    return {
      en: skill.dataValues.descriptionEn,
      fr: skill.dataValues.descriptionFr
    };
  });

  let developmentalGoals = await profile.getDevelopmentGoals().map(skill => {
    return {
      en: skill.dataValues.descriptionEn,
      fr: skill.dataValues.descriptionFr
    };
  });

  let secLangProf = await profile.getSecondLanguageProficiency().then(res => {
    return res.dataValues;
  });

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
    competencies,
    country: "Canada",
    developmentalGoals,
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
    secondaryOralDate: secLangProf.oralDate,
    secondaryOralGrade: secLangProf.oralProficiency,
    secondaryReadingDate: secLangProf.readingDate,
    secondaryReadingGrade: secLangProf.readingProficiency,
    secondaryWritingDate: secLangProf.writingDate,
    secondaryWritingGrade: secLangProf.writingProficiency,
    secondLanguage: null,
    security: {
      en: securityClearance.descriptionEn,
      fr: securityClearance.descriptionFr
    },
    skills,
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
