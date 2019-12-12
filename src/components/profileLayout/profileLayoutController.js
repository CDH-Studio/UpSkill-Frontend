import React, { Component } from "react";
import isEqual from "lodash/isEqual";
import prepareInfo from "../../functions/prepareInfo";

import ProfileLayoutView from "./profileLayoutView";
import { injectIntl } from "react-intl";

class ProfileLayoutController extends Component {
  constructor(props) {
    super(props);

    const { visibleProfileCards } = this.props;

    this.state = {
      windowWidth: window.innerWidth,
      visibleProfileCards: visibleProfileCards,
      appliedVisibleProfileCards: visibleProfileCards
    };

    this.determineWidth = this.determineWidth.bind(this);
    this.updateVisibleProfileCards = this.updateVisibleProfileCards.bind(this);
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
        visibleProfileCards={this.state.visibleProfileCards}
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
        disableApplyVisibleProfileCards={isEqual(
          this.state.appliedVisibleProfileCards,
          this.state.visibleProfileCards
        )}
        applyVisibleProfileCards={this.applyVisibleProfileCards}
        updateProfileInfo={updateProfileInfo}
        updateVisibleProfileCards={this.updateVisibleProfileCards}
        windowWidth={this.state.windowWidth}
      />
    );
  }

  updateVisibleProfileCards(changes) {
    this.setState(oldState => ({
      visibleProfileCards: { ...oldState.visibleProfileCards, ...changes }
    }));
  }

  applyVisibleProfileCards() {
    this.setState(oldState => ({
      appliedVisibleProfileCards: oldState.visibleProfileCards
    }));
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
}

export default injectIntl(ProfileLayoutController);
