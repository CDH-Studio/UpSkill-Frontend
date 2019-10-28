import React, { Component } from "react";
import { Grid, Table } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import ProfileCardController from "../profileCard/profileCardController";
import EditLanguageProficiencyController from "../editModals/editManager/editManagerController";
import EditManagerController from "../editModals/editManager/editManagerController";
import EditTalentManagerController from "../editModals/editTalentManager/editTalentManagerController";
import "./secondaryLayoutGroup.css";

class SecondaryLayoutGroupView extends Component {
  constructor(props) {
    super(props);
    this.renderManagerCard = this.renderManagerCard.bind(this);
    this.renderLanguageProficiencyCard = this.renderLanguageProficiencyCard.bind(
      this
    );
    this.renderTalentManagerCard = this.renderTalentManagerCard.bind(this);
  }

  render() {
    const { windowWidth } = this.props;

    const useWideLayout = windowWidth > 1250;

    if (useWideLayout) {
      return (
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              {this.renderManagerCard()}
              {this.renderTalentManagerCard()}
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
          {this.renderTalentManagerCard()}
        </React.Fragment>
      );
    }
  }

  renderManagerCard() {
    const { manager } = this.props.profileInfo;

    return (
      <ProfileCardController button={<EditManagerController />}>
        <span className="colorLabel">
          <FormattedMessage id="profile.manager" />:
        </span>
        <span>{manager}</span>
      </ProfileCardController>
    );
  }

  renderLanguageProficiencyCard() {
    const { intl, profileInfo } = this.props;
    const {
      firstLanguage,
      secondaryOralDate,
      secondaryOralGrade,
      secondaryReadingDate,
      secondaryReadingGrade,
      secondaryWritingDate,
      secondaryWritingGrade
    } = profileInfo;

    return (
      <ProfileCardController
        button={<EditLanguageProficiencyController />}
        cardName={intl.formatMessage({ id: "profile.official.language" })}
      >
        <div>
          <span className="boldLabel">
            <FormattedMessage id="profile.first.language" />
          </span>
          <span>{firstLanguage}</span>
        </div>
        <p className="boldLabel noGapBelow">
          <FormattedMessage id="profile.second.language.proficiency" />
        </p>
        <Table
          basic="very"
          style={{ marginTop: "0px" }}
          celled
          collapsing
          unstackable
        >
          <Table.Body id="proficiencyTableBody">
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.reading" />
              </Table.Cell>
              <Table.Cell>{secondaryReadingGrade}</Table.Cell>
              <Table.Cell>{secondaryReadingDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.writing" />
              </Table.Cell>
              <Table.Cell>{secondaryWritingGrade}</Table.Cell>
              <Table.Cell>{secondaryWritingDate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.oral" />
              </Table.Cell>
              <Table.Cell>{secondaryOralGrade}</Table.Cell>
              <Table.Cell>{secondaryOralDate}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </ProfileCardController>
    );
  }

  renderTalentManagerCard() {
    const { intl, profileInfo } = this.props;
    const { careerMobility, talentMatrixResult } = profileInfo;

    return (
      <ProfileCardController
        button={<EditTalentManagerController />}
        cardName={intl.formatMessage({ id: "profile.talent.manager" })}
      >
        <div>
          <span className="boldLabel">
            <FormattedMessage id="profile.career.mobility" />
          </span>
          <span>{careerMobility}</span>
        </div>
        <div>
          <span className="boldLabel">
            <FormattedMessage id="profile.talent.matrix.result" />
          </span>
          <span>{talentMatrixResult}</span>
        </div>
      </ProfileCardController>
    );
  }
}

export default injectIntl(SecondaryLayoutGroupView);
