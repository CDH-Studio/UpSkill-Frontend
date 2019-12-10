import React, { Component } from "react";
import prepareInfo from "../../functions/prepareInfo";

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
      updateProfileInfo,
      editable,
      visibleProfileCards
    } = this.props;

    return (
      <ProfileLayoutView
        changeLanguage={changeLanguage}
        editable={editable}
        keycloak={keycloak}
        visibleProfileCards={visibleProfileCards}
        profileInfo={prepareInfo(profileInfo, localStorage.getItem("lang"), {
          acting: undefined,
          actingPeriodStartDate: undefined,
          careerSummary: [],
          competencies: [],
          education: [],
          organizationList: [],
          projects: [],
          skills: []
        })}
        updateProfileInfo={updateProfileInfo}
        windowWidth={this.state.windowWidth}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
}

export default injectIntl(ProfileLayoutController);
