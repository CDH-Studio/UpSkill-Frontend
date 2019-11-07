import React, { Component } from "react";
import { injectIntl } from "react-intl";

import NavigationBar from "../navigationBar/navigationBarController";
import { Dimmer, Grid, Label, Loader } from "semantic-ui-react";

import { EditableProvider } from "./editableProvider/editableProvider";

import EditCareerOverviewController from "./editModals/editCareerOverview/editCareerOverviewController";
import EditCompetenciesController from "./editModals/editCompetencies/editCompetenciesController";
import EditDevelopmentalGoalsController from "./editModals/editDevelopmentalGoals/editDevelopmentalGoalsController";
import EditEducationController from "./editModals/editEducation/editEducationController";
import EditSkillController from "./editModals/editSkills/editSkillsController";

import HistoryCardController from "./historyCard/historyCardController";
import ProfileCardController from "./profileCard/profileCardController";

import PrimaryLayoutGroupController from "./primaryLayoutGroup/primaryLayoutGroupController";
import SecondaryLayoutGroupController from "./secondaryLayoutGroup/secondaryLayoutGroupController";

import "./profileLayout.css";

class ProfileLayoutView extends Component {
  render() {
    const {
      changeLanguage,
      editProfileOptions,
      editable,
      keycloak,
      profileInfo,
      windowWidth
    } = this.props;

    if (profileInfo === undefined) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }

    return (
      <EditableProvider value={{ editProfileOptions, editable, profileInfo }}>
        <NavigationBar
          changeLanguage={changeLanguage}
          keycloak={keycloak}
          logoRedirectHome={true}
        />

        <div className="body">
          <Grid className="bodyGrid">
            <PrimaryLayoutGroupController
              profileInfo={profileInfo}
              windowWidth={windowWidth}
            ></PrimaryLayoutGroupController>

            <SecondaryLayoutGroupController
              profileInfo={profileInfo}
              windowWidth={windowWidth}
            />

            <Grid.Row>
              <Grid.Column>{this.renderSkillsCard()}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.renderCompetenciesCard()}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.renderDevelopmentalGoalsCard()}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.renderEducationCard()}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.renderCareerOverviewCard()}</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </EditableProvider>
    );
  }

  renderSkillsCard() {
    const { intl, profileInfo } = this.props;
    const currentSkills = profileInfo.skills;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.skills" }),
      currentSkills,
      EditSkillController
    );
  }

  renderCompetenciesCard() {
    const { intl, profileInfo } = this.props;
    const { competencies } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.competencies" }),
      competencies,
      EditCompetenciesController
    );
  }

  renderDevelopmentalGoalsCard() {
    const { intl, profileInfo } = this.props;
    const { developmentalGoals } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.developmental.goals" }),
      developmentalGoals,
      EditDevelopmentalGoalsController
    );
  }

  renderGenericTagsCard(cardName, cardTags, button) {
    return (
      <ProfileCardController button={button} cardName={cardName}>
        {cardTags.map((value, index) => (
          <Label color="purple" basic>
            <p style={{ color: "black" }}>{value}</p>
          </Label>
        ))}
      </ProfileCardController>
    );
  }

  renderEducationCard() {
    const { intl, profileInfo } = this.props;
    const { education } = profileInfo;

    return (
      <HistoryCardController
        button={EditEducationController}
        cardEntries={education}
        cardName={intl.formatMessage({ id: "profile.education" })}
      />
    );
  }

  renderCareerOverviewCard() {
    const { intl, profileInfo } = this.props;
    const { careerSummary } = profileInfo;

    return (
      <HistoryCardController
        button={EditCareerOverviewController}
        cardEntries={careerSummary}
        cardName={intl.formatMessage({ id: "profile.career.overview" })}
      />
    );
  }
}

export default injectIntl(ProfileLayoutView);
