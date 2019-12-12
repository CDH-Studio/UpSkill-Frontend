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

    this.determineWidth = this.determineWidth.bind(this);
    this.updateCardVisibility = this.updateCardVisibility.bind(this);
    this.applyVisibleProfileCards = this.applyVisibleProfileCards.bind(this);
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
        publicLayout={!editable} // note: will probably need to change when special roles work
        visibleProfileCards={{
          ...visibleProfileCards,
          ...this.state.changedCardVisibilities
        }}
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
        disableApplyVisibleProfileCards={
          this.state.changedCardVisibilities.length === 0
        }
        applyVisibleProfileCards={this.applyVisibleProfileCards}
        updateProfileInfo={updateProfileInfo}
        updateCardVisibility={this.updateCardVisibility}
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
}

export default injectIntl(ProfileLayoutController);
