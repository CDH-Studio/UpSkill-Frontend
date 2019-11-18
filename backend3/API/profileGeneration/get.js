const Models = require("../../db/models");
const User = Models.user;
const Location = Models.location;
const axios = require("axios");

const getGedsAssist = async (request, response) => {
  id = request.params.id;
  user = await User.findOne({ where: { id } }).then(async user => {
    user = user.dataValues;

    // let name = user.name;
    let name = "Mamadou Moustapha Bah";

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

      // let gedsData = [
      //   {
      //     id:
      //       "Q049TUVOQS5NQUNIQURPQENBTkFEQS5DQSxPVT1CTFNELURTTEEsT1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
      //     givenName: "Mena",
      //     surname: "Machado",
      //     title: {
      //       en: "Manager",
      //       fr: "Gestionnaire"
      //     },
      //     phoneNumber: "343-291-1366",
      //     email: "",
      //     organization: [
      //       {
      //         organizationId: "T1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Innovation, Science and Economic Development Canada",
      //             fr: "Innovation, Sciences et Développement économique Canada"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9RFRTUy1TU1ROLE9VPUlTRUQtSVNERSxPPUdDLEM9Q0E=",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      //             fr: "SECTEUR DU SERVICE DE TRANSFORMATION NUMÉRIQUE"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Chief Information Office",
      //             fr: "Bureau principal de l'information"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Digital Services Division",
      //             fr: "Division des services numériques"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9QkxTRC1EU0xBLE9VPURTRC1EU04sT1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Business Line Solutions Directorate",
      //             fr: "Direction des solutions des lignes d'affaires"
      //           }
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     id:
      //       "Q049TUVOQS5NQUNIQURPQENBTkFEQS5DQSxPVT1CTFNELURTTEEsT1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNC",
      //     givenName: "Mena",
      //     surname: "Machado",
      //     title: {
      //       en: "Other Manager",
      //       fr: "Gestionnaire"
      //     },
      //     phoneNumber: "343-291-1367",
      //     email: "",
      //     organization: [
      //       {
      //         organizationId: "T1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Innovation, Science and Economic Development Canada",
      //             fr: "Innovation, Sciences et Développement économique Canada"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9RFRTUy1TU1ROLE9VPUlTRUQtSVNERSxPPUdDLEM9Q0E=",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      //             fr: "SECTEUR DU SERVICE DE TRANSFORMATION NUMÉRIQUE"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Chief Information Office",
      //             fr: "Bureau principal de l'information"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Digital Services Division",
      //             fr: "Division des services numériques"
      //           }
      //         }
      //       },
      //       {
      //         organizationId:
      //           "T1U9QkxTRC1EU0xBLE9VPURTRC1EU04sT1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
      //         organization: {
      //           addressInformation: {
      //             address: {
      //               en: "235 Queen Street",
      //               fr: "235, rue Queen"
      //             },
      //             city: {
      //               en: "Ottawa",
      //               fr: "Ottawa"
      //             },
      //             province: {
      //               en: "Ontario",
      //               fr: "Ontario"
      //             },
      //             country: {
      //               en: "Canada",
      //               fr: "Canada"
      //             },
      //             pc: "K1A 0H5",
      //             pobox: {
      //               en: "",
      //               fr: ""
      //             },
      //             mailstop: ""
      //           },
      //           description: {
      //             en: "Business Line Solutions Directorate",
      //             fr: "Direction des solutions des lignes d'affaires"
      //           }
      //         }
      //       }
      //     ]
      //   }
      // ];

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

        console.log(gedsProfile);

        let organizations = gedsProfile.organization.map(
          ({ organization }, i) => {
            return { description: organization.description, tier: i };
          }
        );

        profile.organizations = organizations;

        let location = await Location.findOne({
          where: {
            postalCode:
              gedsProfile.organization[gedsProfile.organization.length - 1]
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
