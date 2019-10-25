import React, { Component } from "react";
import { Card, Grid, Table } from "semantic-ui-react";

import "./secondaryGroup.css";

export default class secondaryGroupView extends Component {
  constructor(props) {
    super(props);
    this.renderManagerCard = this.renderManagerCard.bind(this);
    this.renderLanguageProficiencyCard = this.renderLanguageProficiencyCard.bind(
      this
    );
    this.renderTalentMatrixCard = this.renderTalentMatrixCard.bind(this);
  }

  render() {
    const { windowWidth } = this.props;

    const useWideLayout = windowWidth > 1150;

    if (useWideLayout) {
      return (
        <Grid fluid>
          <Grid.Row>
            <Grid.Column width={11}>
              {this.renderManagerCard()}
              {this.renderTalentMatrixCard()}
            </Grid.Column>
            <Grid.Column width={5}>
              {this.renderLanguageProficiencyCard()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else {
      return (
        <React.Fragment>
          {this.renderManagerCard()}
          {this.renderLanguageProficiencyCard()}
          {this.renderTalentMatrixCard()}
        </React.Fragment>
      );
    }
  }

  renderManagerCard() {
    const { manager } = this.props.profileInfo;

    return (
      <Card fluid>
        <Card.Content>
          <span className="colorLabel">Manager:</span>
          <span>{manager}</span>
        </Card.Content>
      </Card>
    );
  }

  renderLanguageProficiencyCard() {
    const {
      firstLanguage,
      secondaryReadingGrade,
      secondaryReadingDate,
      secondaryWritingGrade,
      secondaryWritingDate,
      secondaryOralGrade,
      secondaryOralDate
    } = this.props.profileInfo;

    return (
      <Card fluid>
        <Card.Content>
          <h5 className="violetColored">Official Language</h5>
          <div>
            <span className="boldLabel">First Language</span>
            <span>{firstLanguage}</span>
          </div>
          <p className="boldLabel noGapBelow">Second Language Proficiency</p>
          <Table basic="very" style={{ marginTop: "0px" }} celled collapsing>
            <Table.Body id="proficiencyTableBody">
              <Table.Row>
                <Table.Cell>Reading</Table.Cell>
                <Table.Cell>{secondaryReadingGrade}</Table.Cell>
                <Table.Cell>{secondaryReadingDate}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Writing</Table.Cell>
                <Table.Cell>{secondaryWritingGrade}</Table.Cell>
                <Table.Cell>{secondaryWritingDate}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Oral</Table.Cell>
                <Table.Cell>{secondaryOralGrade}</Table.Cell>
                <Table.Cell>{secondaryOralDate}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }

  renderTalentMatrixCard() {
    const { careerMobility, talentMatrixResult } = this.props.profileInfo;

    return (
      <Card fluid>
        <Card.Content>
          <h5 className="violetColored">Talent Manager (link to TM tool)</h5>
          <div>
            <span className="boldLabel">Career Mobility</span>
            <span>{careerMobility}</span>
          </div>
          <div>
            <span className="boldLabel">Talent matrix result</span>
            <span>{talentMatrixResult}</span>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
