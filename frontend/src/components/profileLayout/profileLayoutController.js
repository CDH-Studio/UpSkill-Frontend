import React, { Component } from "react";

import ProfileLayoutView from "./profileLayoutView";

const unspecifiedValues = {
  acting: "Unspecified",
  actingPeriodStartDate: "Unspecified",
  actingPeriodEndDate: "Unspecified",
  branch: "Unspecified",

  building: "Unspecified",
  careerMobility: "Unspecified",
  careerSummary: [
    {
      content: "Unspecified",
      endDate: "Unspecified",
      header: "Unspecified",
      startDate: "Unspecified",
      subheader: "Unspecified"
    }
  ],
  city: "Unspecified",

  competencies: [],
  country: "Unspecified",
  developmentalGoals: [],

  education: [
    {
      content: "Unspecified",
      subheader: "Unspecified",
      endDate: "Unspecified",
      header: "Unspecified",
      startDate: "Unspecified"
    }
  ],
  email: "Unspecified",
  firstLanguage: "Unspecified",
  firstName: "Unspecified",
  githubUrl: "Unspecified",
  gradedOnSecondLanguage: false,
  classification: "Unspecified",
  jobTitle: "Unspecified",
  lastName: "Unspecified",
  linkedinUrl: "Unspecified",
  manager: "Unspecified",
  mobile: "Unspecified",
  organizationList: [
    "Unspecified",
    "Unspecified",
    "Unspecified",
    "Unspecified",
    "Unspecified"
  ],
  PO: "Unspecified",
  province: "Unspecified",
  secondaryOralDate: "Unspecified",
  secondaryOralGrade: "Unspecified",
  secondaryReadingDate: "Unspecified",
  secondaryReadingGrade: "Unspecified",
  secondaryWritingDate: "Unspecified",
  secondaryWritingGrade: "Unspecified",
  secondLanguage: null,
  security: "Unspecified",
  skills: [],
  status: "Unspecified",
  street: "Unspecified",
  talentMatrixResult: "Unspecified",
  team: "Unspecified",
  telephone: "Unspecified",
  twitterUrl: "Unspecified",
  yearsOfService: "Unspecified"
};

export default class ProfileLayoutController extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.determineWidth = this.determineWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.determineWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.determineWidth);
  }

  render() {
    const { changeLanguage, keycloak, profileInfo } = this.props;

    return (
      <ProfileLayoutView
        changeLanguage={changeLanguage}
        dropdownOptions={{
          oralGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          writingGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          readingGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          firstLanguage: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          readingMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          writingMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          oralMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          competencies: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          developmentalGoals: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          skills: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          firstName: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          lastName: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          directorate: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          division: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          branch: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          sector: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          department: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          team: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          telephone: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          cellphone: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          email: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          location: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ]
        }}
        profileInfo={this.patchProfileInfo(profileInfo)}
        editable={true}
        keycloak={keycloak}
        windowWidth={this.state.windowWidth}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  patchProfileInfo(profileInfo) {
    let keys = Object.keys(unspecifiedValues);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      if (profileInfo[key] === undefined || profileInfo[key] === null) {
        profileInfo[key] = unspecifiedValues[key];
      }
    }
    return profileInfo;
  }
}
