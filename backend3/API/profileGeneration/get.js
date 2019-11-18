const Models = require("../../db/models");
const User = Models.user;
const Location = Models.location;
const axios = require("axios");

const getGedsAssist = async (request, response) => {
  id = request.params.id;
  user = await User.findOne({ where: { id } }).then(async user => {
    user = user.dataValues;

    let name = user.name;

    let lastSpaceIndex = name.lastIndexOf(" ");
    name =
      name.substring(lastSpaceIndex) + ", " + name.substring(0, lastSpaceIndex);

    try {
      let gedsData = await axios
        .get("http://localhost:8080/api/geds/" + encodeURI(name))
        .then(res => {
          return res.data;
        });
      if (gedsData.status == 204) {
        response.status(gedsData.status).send(gedsData.statusText);
        return;
      }
      let promise = gedsData.map(async gedsProfile => {
        let profile = {};

        profile.firstName = gedsProfile.givenName;
        profile.lastName = gedsProfile.surname;
        profile.jobTitle = {
          en: gedsProfile.title.en,
          fr: gedsProfile.title.fr
        };
        profile.telephone = gedsProfile.phoneNumber;
        profile.cellphone = gedsProfile.altPhoneNumber;

        let organizations = gedsProfile.organizations.map(
          ({ organization }, i) => {
            return { description: organization.description, tier: i };
          }
        );

        profile.organizations = organizations;

        let location = await Location.findOne({
          where: {
            postalCode:
              gedsProfile.organizations[gedsProfile.organizations.length - 1]
                .organization.addressInformation.pc
          }
        }).then(res => {
          if (res) return res.dataValues;
          return {};
        });

        profile.location = {
          id: location.id,
          description: {
            en:
              location.addressEn +
              ", " +
              location.city +
              ", " +
              location.provinceEn,
            fr:
              location.addressFr +
              ", " +
              location.city +
              ", " +
              location.provinceFr
          }
        };

        return profile;
      });
      let profiles = await Promise.all(promise);
      response.status(200).send(profiles);
    } catch (err) {
      throw err;
    }
  });
};

module.exports = {
  getGedsAssist
};
