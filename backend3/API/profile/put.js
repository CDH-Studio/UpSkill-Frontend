const moment = require("moment");
const Models = require("../../db/models");
const Profile = Models.profile;
const Education = Models.education;
const Experience = Models.experience;
const Project = Models.profileProject;
const SecLang = Models.secondLanguageProficiency;

const mappedValues = require("./mappedValues.json");

const updateProfile = async (request, response) => {
  const id = request.params.id;
  const body = request.body;

  console.log("BODYYYYYYYYYYYY:", body);

  let dbObject = {};

  for (let [key, value] of Object.entries(body)) {
    dbObject[mappedValues[key] ? mappedValues[key] : key] = value;
  }

  try {
    let [updated, profile] = await Profile.update(dbObject, {
      where: { id: id },
      returning: true
    });

    if (!profile) {
      profile = await Profile.findOne({ where: { id: id } }).then(res => {
        updated = true;
        return res;
      });
    }

    if (dbObject.skills) profile.setSkills(dbObject.skills);
    if (dbObject.competencies) profile.setCompetencies(dbObject.competencies);
    if (dbObject.developmentGoals)
      profile.setDevelopmentGoals(dbObject.developmentGoals);

    if (dbObject.education) {
      Education.destroy({ where: { profileId: profile.id } }).then(() => {
        dbObject.education.forEach(
          ({ school, diploma, startDate, endDate }) => {
            Education.create({
              schoolId: school,
              diplomaId: diploma,
              startDate,
              endDate
            }).then(education => {
              profile.addEducation(education);
            });
          }
        );
      });
    }

    if (dbObject.experience) {
      Experience.destroy({ where: { profileId: profile.id } }).then(() => {
        dbObject.experience.forEach(exp => {
          Experience.create({
            organization: exp.subheader,
            jobTitle: exp.header,
            description: exp.content,
            startDate: exp.startDate,
            endDate: exp.endDate
          }).then(experience => {
            profile.addExperience(experience);
          });
        });
      });
    }

    if (dbObject.projects) {
      Project.destroy({ where: { profileId: profile.id } }).then(() => {
        dbObject.projects.forEach(project => {
          Project.create({
            description: project
          }).then(project => {
            profile.addProfileProject(project);
          });
        });
      });
    }

    if (dbObject.organizations) {
      ProfileOrganization.destroy({ where: { profileId: profile.id } }).then(
        () => {
          dbObject.organizations.forEach(
            ({ description: { en, fr }, tier }) => {
              ProfileOrganization.create({
                descriptionEn: en,
                descriptionFr: fr,
                tier
              }).then(organization => {
                profile.addProfileOrganization(organization);
              });
            }
          );
        }
      );
    }

    if (dbObject.readingProficiency) {
      let secLangProf;
      secLangProf = await profile.getSecondLanguageProficiency();
      if (!secLangProf) {
        secLangProf = await SecLang.create();
      }

      const {
        writingProficiency,
        oralProficiency,
        writingDate,
        readingDate,
        oralDate,
        readingProficiency
      } = dbObject;

      secLangProf
        .update(
          {
            writingProficiency,
            oralProficiency,
            writingDate,
            readingDate,
            oralDate,
            readingProficiency
          },
          { returning: true }
        )
        .then(secLangProf => {
          console.log("SECLANGPROF:", secLangProf);

          profile.setSecondLanguageProficiency(secLangProf);
        });
    }

    console.log("dbOject", dbObject);

    if (updated) {
      return response.status(200).json(profile);
    }
    throw new Error("Profile not found");
  } catch (error) {
    return response.status(500).send(error.message);
  }
};

module.exports = {
  updateProfile
};
