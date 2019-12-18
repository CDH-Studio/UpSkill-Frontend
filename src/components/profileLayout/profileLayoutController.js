import React, { Component } from "react";
import axios from "axios";

import isEqual from "lodash/isEqual";
import omit from "lodash/omit";

import prepareInfo from "../../functions/prepareInfo";

import ProfileLayoutView from "./profileLayoutView";
import { injectIntl } from "react-intl";

import config from "../../config";
const { backendAddress } = config;

class ProfileLayoutController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      changedCardVisibilities: []
    };

    this.applyVisibleProfileCards = this.applyVisibleProfileCards.bind(this);
    this.determineWidth = this.determineWidth.bind(this);
    this.handleClickDeactivate = this.handleClickDeactivate.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.updateCardVisibility = this.updateCardVisibility.bind(this);
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
      editable,
      keycloak,
      profileInfo,
      updateProfileInfo,
      visibleProfileCards
    } = this.props;

    if (profileInfo)
      document.title =
        profileInfo.firstName + " " + profileInfo.lastName + " | UpSkill";

    return (
      <ProfileLayoutView
        applyVisibleProfileCards={this.applyVisibleProfileCards}
        changeLanguage={changeLanguage}
        disableApplyVisibleProfileCards={
          this.state.changedCardVisibilities.length === 0
        }
        editable={editable}
        handleClickDeactivate={this.handleClickDeactivate}
        handleClickDelete={this.handleClickDelete}
        keycloak={keycloak}
        profileInfo={prepareInfo(profileInfo, localStorage.getItem("lang"), {
          acting: undefined,
          actingPeriodStartDate: undefined,
          developmentalGoals: [],
          careerSummary: [],
          competencies: [],
          education: [],
          organizationList: [],
          projects: [],
          skills: []
        })}
        publicLayout={!editable} // note: will probably need to change when special roles work
        updateCardVisibility={this.updateCardVisibility}
        updateProfileInfo={updateProfileInfo}
        visibleProfileCards={{
          ...visibleProfileCards,
          ...this.state.changedCardVisibilities
        }}
        windowWidth={this.state.windowWidth}
      />
    );
  }

  updateCardVisibility(visibilityKey, value) {
    const { visibleProfileCards } = this.props;

    if (visibleProfileCards[visibilityKey] === value) {
      this.setState(oldState => ({
        changedCardVisibilities: omit(
          oldState.changedCardVisibilities,
          visibilityKey
        )
      }));
    } else {
      this.setState(oldState => ({
        changedCardVisibilities: {
          ...oldState.changedCardVisibilities,
          [visibilityKey]: value
        }
      }));
    }
  }

  applyVisibleProfileCards() {
    const { visibleProfileCards } = this.props;
    let url = backendAddress + "api/profile/" + localStorage.getItem("userId");
    axios
      .put(url, {
        visibleProfileCards: {
          ...visibleProfileCards,
          ...this.state.changedCardVisibilities
        }
      })
      .then(response => window.location.reload())
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      changedCardVisibilities: []
    });
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }

  handleClickDelete() {}

  handleClickDeactivate() {}
}

export default injectIntl(ProfileLayoutController);
