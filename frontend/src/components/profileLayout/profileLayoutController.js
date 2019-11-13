import React, { Component } from "react";

import ProfileLayoutView from "./profileLayoutView";
import { injectIntl } from "react-intl";

class ProfileLayoutController extends Component {
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
        editProfileOptions={{
          maxSkillItems: 1,
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
        profileInfo={this.setProfileInfo(
          profileInfo,
          localStorage.getItem("lang"),
          {
            careerSummary: [],
            competencies: [],
            education: [],
            organizationList: [],
            skills: [],
            acting: undefined,
            actingPeriodStartDate: undefined
          }
        )}
        editable={true}
        keycloak={keycloak}
        windowWidth={this.state.windowWidth}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  setProfileInfo(info, language, specialUndefineds) {
    if (specialUndefineds && typeof info == "object") {
      for (let key in specialUndefineds) {
        if (info[key] !== null) {
          delete specialUndefineds[key];
        }
      }
      info = Object.assign(info, specialUndefineds);
    }
    if (typeof info === "object") {
      if (info === null) {
        const { intl } = this.props;
        return intl.formatMessage({ id: "profile.undefined" });
      } else if (Array.isArray(info)) {
        let returnArray = [];
        info.forEach(element =>
          returnArray.push(this.setProfileInfo(element, language))
        );
        return returnArray;
      } else if ("en" in info) {
        return info[language];
      } else {
        let returnObject = {};
        for (let key in info) {
          returnObject[key] = this.setProfileInfo(info[key], language);
        }
        return returnObject;
      }
    }
    return info;
  }
}

export default injectIntl(ProfileLayoutController);
