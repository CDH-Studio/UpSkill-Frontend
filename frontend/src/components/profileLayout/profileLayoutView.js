import React, { Component } from "react";

import NavigationBar from "../navigationBar/navigationBarController";
import { Card, Grid, Icon, Label, Menu } from "semantic-ui-react";

import PrimaryGroupController from "./groups/primaryGroupController";
import SecondaryGroupController from "./groups/secondaryGroupController";
import "./profileLayout.css";

export default class ProfileLayoutView extends Component {
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
          LinkedIn
        </Menu.Item>
        <Menu.Item href={GitHubURL} target="_blank">
          <Icon name="github" />
          Github
        </Menu.Item>
        <Menu.Item href={TwitterURL} target="_blank">
          <Icon name="twitter" />
          Twitter
        </Menu.Item>
      </Menu>
    );
  }

  renderSkillsCard() {
    const { skills } = this.props.profileInfo;

    return this.renderGenericTagsCard("Skills", skills);
  }

  renderCompetenciesCard() {
    const { competencies } = this.props.profileInfo;

    return this.renderGenericTagsCard("Competencies", competencies);
  }

  renderDevelopmentalGoalsCard() {
    const { developmentalGoals } = this.props.profileInfo;

    return this.renderGenericTagsCard(
      "Developmental Goals",
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
    const { education } = this.props.profileInfo;

    return this.renderGenericHistoryCard("Education", education);
  }

  renderCareerOverview() {
    const { careerSummary } = this.props.profileInfo;

    return this.renderGenericHistoryCard(
      "Career Journey so Far",
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
