import React, { Component } from "react";

import NavigationBar from "../navigationBar/navigationBarController";
import { Card, Grid, List, Icon, Table, Form, Label } from "semantic-ui-react";

import tempProfilePicture from "../../assets/tempProfilePicture.png";

import PrimaryCardController from "../profileCards/primaryCardController";
import SecondaryGroupController from "../profileCards/secondaryGroupController";
import "./profileLayout.css";

export default class ProfileLayoutView extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      basicOrganizationExpanded: true,
      basicAddressExpanded: true
    };
  }

  render() {
    const { changeLanguage, keycloak, windowWidth, profileInfo } = this.props;

    return (
      <div>
        <NavigationBar
          changeLanguage={changeLanguage}
          keycloak={keycloak}
          logoRedirectHome={true}
        />

        <div class="body">
          <PrimaryCardController
            windowWidth={windowWidth}
            profileInfo={profileInfo}
          />

          <SecondaryGroupController
            windowWidth={windowWidth}
            profileInfo={profileInfo}
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
          <h5 class="violetColored">{cardName}</h5>

          {cardTags.map((value, index) => (
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="purple"
              basic
            >
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
          <h5 class="violetColored">{cardName}</h5>
          <Grid divided="vertically" fluid>
            {cardEntrys.map((value, index) => (
              <Grid.Row>
                <Grid.Column width={16}>
                  <div class="schoolListing">
                    <Grid fluid>
                      <Grid.Row>
                        <Grid.Column width={8} style={{ fontWeight: "bold" }}>
                          {value.name}
                        </Grid.Column>
                        <Grid.Column width={8} style={{ textAlign: "right" }}>
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

  generateEducationTableBody(items) {}
}

const styles = {
  profileName: {
    fontSize: "40px",
    marginBottom: "0px",
    fontWeight: "bold"
  },
  jobTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "0px",
    paddingBottom: "0px"
  },

  compactAbove: {
    paddingTop: "0px",
    marginTop: "0px"
  },

  compactVertically: {
    paddingTop: "0px",
    paddingBottom: "0px",
    marginTop: "0px",
    marginBottom: "0px"
  },

  profilePicture: {
    position: "absolute",
    top: "10px",
    left: "10px"
  },

  boldFont: { fontWeight: "bold" },

  accountIcons: { position: "absolute", top: "10px", right: "5px" },

  body: {
    margin: "50px auto",
    minWidth: "500px",
    maxWidth: "1200px",
    padding: "25px"
  },

  unitItem: {
    paddingLeft: "10px",
    fontWeight: "normal"
  },

  sudoSegment: {
    right: 0
  }
};

/*
<Grid style={{ paddingTop: "20px" }}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">Employment Status</div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>Indeterminate</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">Years of Service</div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>5</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">Group/Level</div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>CS 04</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">Security Clearance</div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>Reliability</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">First Language</div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>English</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <div id="card-section">
                    <p>Second language Proficiency</p>
                  </div>
                  <Card.Content
                    style={{
                      width: "55%",
                      position: "relative",
                      left: "40%",
                      borderTop: "none"
                    }}
                  >
                    <p styles={styles.sudoSegment}>CBC</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Card fluid>
            <Card.Content>
              <Table basic="very">
                <Table.Header>
                  <Table.HeaderCell>Degree or Diploma</Table.HeaderCell>
                  <Table.HeaderCell>School</Table.HeaderCell>
                </Table.Header>
                {this.generateEducationTableBody([
                  {
                    name: "Computer Science",
                    schoolName: "Ottawa University"
                  },
                  {
                    name: "Software Engineering",
                    schoolName: "Carleton University"
                  }
                ])}
              </Table>
            </Card.Content>
          </Card>

          <Card fluid>
            <Card.Content>
              <Table>
                <Table.Row>
                  <Table.Cell>Python</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>C++</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              </Table>
            </Card.Content>
          </Card>
*/
