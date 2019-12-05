import React, { Component } from "react";
import { injectIntl, FormattedMessage } from "react-intl";

import NavigationBar from "../navigationBar/navigationBarController";
import { Dimmer, Grid, Label, Loader } from "semantic-ui-react";

import { renderValue } from "./common/profileTools";
import { EditableProvider } from "./editableProvider/editableProvider";

import EditCareerInterestsController from "./editModals/editCareerInterests/editCareerInterestsController";
import EditCareerOverviewController from "./editModals/editCareerOverview/editCareerOverviewController";
import EditCompetenciesController from "./editModals/editCompetencies/editCompetenciesController";
import EditDevelopmentalGoalsController from "./editModals/editDevelopmentalGoals/editDevelopmentalGoalsController";
import EditEducationController from "./editModals/editEducation/editEducationController";
import EditSkillController from "./editModals/editSkills/editSkillsController";
import EditProjectsController from "./editModals/editProjects/editProjectsController";

import HistoryCardController from "./historyCard/historyCardController";
import ProfileCardController from "./profileCard/profileCardController";

import PrimaryLayoutGroupController from "./primaryLayoutGroup/primaryLayoutGroupController";
import SecondaryLayoutGroupController from "./secondaryLayoutGroup/secondaryLayoutGroupController";

import "./profileLayout.css";

class ProfileLayoutView extends Component {
  constructor(props) {
    super(props);

    const { intl } = this.props;

    this.renderValue = renderValue.bind(this, intl);
  }

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
          <Grid>
            <Grid.Row>
              <Loader />
            </Grid.Row>

            <Grid.Row>Gathering profile info...</Grid.Row>
          </Grid>
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
            <Grid.Row>
              <Grid.Column>{this.renderProjectsCard()}</Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>{this.renderCareerInterests()}</Grid.Column>
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
          <Label color="blue" basic>
            <p style={{ color: "black" }}>{value.text}</p>
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

  renderProjectsCard() {
    const { intl, profileInfo } = this.props;
    const currentProjects = profileInfo.projects || [];

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.projects" }),
      currentProjects,
      EditProjectsController
    );
  }

  renderCareerInterests() {
    const { intl, profileInfo } = this.props;

    const {
      interestedInRemote,
      willingToRelocateTo,
      lookingForNewJob
    } = profileInfo;

    return (
      <ProfileCardController
        button={EditCareerInterestsController}
        cardName={"Career Interests"}
      >
        <div>
          <span className="boldLabel">
            <FormattedMessage id="profile.interested.in.remote" />
          </span>
          <span>
            {this.renderValue(
              {
                [null]: null,
                [true]: intl.formatMessage({ id: "profile.yes" }),
                [false]: intl.formatMessage({ id: "profile.no" })
              }[interestedInRemote]
            )}
          </span>
        </div>
        <div className="boldLabel">
          <FormattedMessage id="profile.willing.to.relocate.to" />
        </div>
        {this.renderValue(
          willingToRelocateTo ? (
            <div>
              {willingToRelocateTo.map(element => (
                <Label color="blue" basic>
                  <p style={{ color: "black" }}>{element.description}</p>
                </Label>
              ))}
            </div>
          ) : null
        )}
        <span className="boldLabel">
          <FormattedMessage id="profile.looking.for.new.job" />
        </span>
        <span>{this.renderValue(lookingForNewJob.description)}</span>
      </ProfileCardController>
    );
  }
}

export default injectIntl(ProfileLayoutView);
