import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import NavigationBar from "../navigationBar/navigationBarController";
import { Grid, Icon, Label, Menu } from "semantic-ui-react";

import {EditableProvider} from './editableProvider/editableProvider'

import EditWrapperController from "./editWrapper/editWrapperController";
import EditMenuController from "./editModals/editMenuController";
import EditSkillController from "./editModals/editSkillsController";
import EditCompetenciesController from "./editModals/editCompetenciesController";
import EditDevelopmentGoalsController from "./editModals/editDevelopmentGoalsController";
import EditEducationController from "./editModals/editEducationController";
import EditCareerOverviewController from "./editModals/editCareerOverviewController";
import PrimaryGroupController from "./groups/primaryGroupController";
import ProfileCardController from "./profileCard/profileCardController";
import SecondaryGroupController from "./groups/secondaryGroupController";
import "./profileLayout.css";

class ProfileLayoutView extends Component {
  render() {
    const { changeLanguage, keycloak, profileInfo, windowWidth } = this.props;

    return (
      <EditableProvider value={{editable:null}}>
      <div>
        <NavigationBar
          changeLanguage={changeLanguage}
          keycloak={keycloak}
          logoRedirectHome={true}
        />

        <div className="body">
          <PrimaryGroupController
            profileInfo={profileInfo}
            windowWidth={windowWidth}
          />

          {this.renderExternalLinks()}

          <SecondaryGroupController
            profileInfo={profileInfo}
            windowWidth={windowWidth}
          />

          {this.renderSkillsCard()}
          {this.renderCompetenciesCard()}
          {this.renderDevelopmentalGoalsCard()}
          {this.renderEducationCard()}
          {this.renderCareerOverview()}
        </div>
      </div>
      </EditableProvider>
    );
  }

  renderExternalLinks() {
    const { GitHubURL, LinkedInURL, TwitterURL } = this.props.profileInfo;

    return (
      <EditWrapperController button={<EditMenuController />} buttonColor="#DDDDDD">
        <Menu color="violet" inverted widths={3}>
          <Menu.Item href={LinkedInURL} target="_blank">
            <Icon name="linkedin" />
            <FormattedMessage id="profile.linkedin" />
          </Menu.Item>
          <Menu.Item href={GitHubURL} target="_blank">
            <Icon name="github" />
            <FormattedMessage id="profile.github" />
          </Menu.Item>
          <Menu.Item href={TwitterURL} target="_blank">
            <Icon name="twitter" />
            <FormattedMessage id="profile.twitter" />
          </Menu.Item>
        </Menu>
      </EditWrapperController>
    );
  }

  renderSkillsCard() {
    const { intl, profileInfo } = this.props;
    const { skills } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.skills" }),
      skills,
      <EditSkillController/>
    );
  }

  renderCompetenciesCard() {
    const { intl, profileInfo } = this.props;
    const { competencies } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.competencies" }),
      competencies,
      <EditCompetenciesController/>
    );
  }

  renderDevelopmentalGoalsCard() {
    const { intl, profileInfo } = this.props;
    const { developmentalGoals } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.developmental.goals" }),
      developmentalGoals,
      <EditDevelopmentGoalsController/>
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

    return this.renderGenericHistoryCard(
      intl.formatMessage({ id: "profile.education" }),
      education,
      <EditEducationController/>
    );
  }

  renderCareerOverview() {
    const { intl, profileInfo } = this.props;
    const { careerSummary } = profileInfo;

    return this.renderGenericHistoryCard(
      intl.formatMessage({ id: "profile.career.overview" }),
      careerSummary,
      <EditCareerOverviewController/>
    );
  }

  renderGenericHistoryCard(cardName, cardEntrys, button) {
    return (
      <ProfileCardController button={button} cardName={cardName}>
        <Grid className="historyList" divided="vertically" fluid>
          {cardEntrys.map((value, index) => (
            <Grid.Row>
              <Grid.Column width={16}>
                  <Grid fluid>
                    <Grid.Row>
                      <Grid.Column className="entryName" width={8}>
                        {value.name}
                      </Grid.Column>
                      <Grid.Column className="dateInfo" width={8}>
                        {value.startDate} - {value.endDate}
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={16}>{value.content}</Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </ProfileCardController>
    );
  }
}

export default injectIntl(ProfileLayoutView);
