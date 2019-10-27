import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import NavigationBar from "../navigationBar/navigationBarController";
import { Card, Grid, Icon, Label, Menu } from "semantic-ui-react";

import PrimaryGroupController from "./groups/primaryGroupController";
import SecondaryGroupController from "./groups/secondaryGroupController";
import "./profileLayout.css";

class ProfileLayoutView extends Component {
  render() {
    const { changeLanguage, keycloak, profileInfo, windowWidth } = this.props;

    return (
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
    );
  }

  renderExternalLinks() {
    const { GitHubURL, LinkedInURL, TwitterURL } = this.props.profileInfo;

    return (
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
    );
  }

  renderSkillsCard() {
    const { intl, profileInfo } = this.props;
    const { skills } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.skills" }),
      skills
    );
  }

  renderCompetenciesCard() {
    const { intl, profileInfo } = this.props;
    const { competencies } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.competencies" }),
      competencies
    );
  }

  renderDevelopmentalGoalsCard() {
    const { intl, profileInfo } = this.props;
    const { developmentalGoals } = profileInfo;

    return this.renderGenericTagsCard(
      intl.formatMessage({ id: "profile.developmental.goals" }),
      developmentalGoals
    );
  }

  renderGenericTagsCard(cardName, cardTags) {
    return (
      <Card fluid>
        <Card.Content>
          <h5 className="violetColored">{cardName}</h5>

          {cardTags.map((value, index) => (
            <Label color="purple" basic>
              <p style={{ color: "black" }}>{value}</p>
            </Label>
          ))}
        </Card.Content>
      </Card>
    );
  }

  renderEducationCard() {
    const { intl, profileInfo } = this.props;
    const { education } = profileInfo;

    return this.renderGenericHistoryCard(
      intl.formatMessage({ id: "profile.education" }),
      education
    );
  }

  renderCareerOverview() {
    const { intl, profileInfo } = this.props;
    const { careerSummary } = profileInfo;

    return this.renderGenericHistoryCard(
      intl.formatMessage({ id: "profile.career.overview" }),
      careerSummary
    );
  }

  renderGenericHistoryCard(cardName, cardEntrys) {
    return (
      <Card fluid>
        <Card.Content>
          <h5 className="violetColored">{cardName}</h5>

          <Grid divided="vertically" fluid>
            {cardEntrys.map((value, index) => (
              <Grid.Row>
                <Grid.Column width={16}>
                  <div className="historyListing">
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
                  </div>
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default injectIntl(ProfileLayoutView);
