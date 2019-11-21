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
    const {
      changeLanguage,
      keycloak,
      profileInfo,
      updateProfileInfo
    } = this.props;

    return (
      <ProfileLayoutView
        changeLanguage={changeLanguage}
        editable={true}
        keycloak={keycloak}
        profileInfo={this.setProfileInfo(
          profileInfo,
          localStorage.getItem("lang"),
          {
            acting: undefined,
            actingPeriodStartDate: undefined,
            careerSummary: [],
            competencies: [],
            education: [],
            organizationList: [],
            projects: [],
            skills: []
          }
        )}
        updateProfileInfo={updateProfileInfo}
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
