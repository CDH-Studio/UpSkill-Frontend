import React, { Component } from "react";
import { Grid, Table } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";
import moment from "moment";

import ProfileCardController from "../profileCard/profileCardController";
import EditLanguageProficiencyController from "../editModals/editLanguageProficiency/editLanguageProficiencyController";
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
        <Grid.Row className="noGapBelow">
          <Grid.Column className="noGapAbove noGapBelow" width={11}>
            {this.renderManagerCard()}
            {this.renderTalentManagerCard()}
          </Grid.Column>
          <Grid.Column className="noGapAbove noGapBelow" width={5}>
            {this.renderLanguageProficiencyCard()}
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <React.Fragment>
          <Grid.Row>
            <Grid.Column>{this.renderManagerCard()}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{this.renderLanguageProficiencyCard()}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{this.renderTalentManagerCard()}</Grid.Column>
          </Grid.Row>
        </React.Fragment>
      );
    }
  }

  renderManagerCard() {
    const { profileInfo, windowWidth } = this.props;
    const { manager } = profileInfo;

    return (
      <ProfileCardController
        button={EditManagerController}
        className={
          windowWidth > 1250 ? "belowGapCard noGapAbove" : "noGapAbove"
        }
      >
        <span className="colorLabel">
          <FormattedMessage id="profile.manager" />:
        </span>
        <span>{manager}</span>
      </ProfileCardController>
    );
  }

  renderLanguageProficiencyCard() {
    const { intl, profileInfo, windowWidth } = this.props;
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
        button={EditLanguageProficiencyController}
        cardName={intl.formatMessage({ id: "profile.official.language" })}
        className={windowWidth > 1250 ? "compactCard" : null}
        fullHeight={windowWidth > 1250}
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
          celled
          className="noGapAbove"
          collapsing
          style={{ margin: "0px auto" }}
          unstackable
        >
          <Table.Body id="proficiencyTableBody">
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.reading" />
              </Table.Cell>
              <Table.Cell>{secondaryReadingGrade}</Table.Cell>
              <Table.Cell>
                {moment(secondaryReadingDate).format("ll")}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.writing" />
              </Table.Cell>
              <Table.Cell>{secondaryWritingGrade}</Table.Cell>
              <Table.Cell>
                {moment(secondaryWritingDate).format("ll")}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <FormattedMessage id="profile.oral" />
              </Table.Cell>
              <Table.Cell>{secondaryOralGrade}</Table.Cell>
              <Table.Cell>{moment(secondaryOralDate).format("ll")}</Table.Cell>
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
        button={EditTalentManagerController}
        cardName={intl.formatMessage({ id: "profile.talent.manager" })}
        className="noGapBelow"
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
