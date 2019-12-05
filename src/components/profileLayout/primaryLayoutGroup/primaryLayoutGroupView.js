import React, { Component } from "react";
import { Card, Grid, Icon, Label, List, Menu, Popup } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import { renderValue } from "../common/profileTools";

import moment from "moment";

import tempProfilePic from "../../../assets/tempProfilePicture.png";

import EditLabelCardsController from "../editModals/editLabelCards/editLabelCardsController";
import EditPrimaryInformationController from "../editModals/editPrimaryInformation/editPrimaryInformationController";
import EditProfilePictureController from "../editModals/editProfilePicture/editProfilePictureController";
import EditWrapperController from "../editWrapper/editWrapperController";

import ProfileCardController from "../profileCard/profileCardController";

import "./primaryLayoutGroup.css";
import "../common/common.css";

/**
 * This class generates the items at the start of the profile page that need to interact with eachother to responsively resize
 */
class PrimaryLayoutGroupView extends Component {
  constructor(props) {
    super(props);
    const { intl } = props;
    this.renderValue = renderValue.bind(this, intl);
  }

  render() {
    const { windowWidth } = this.props;
    const useWideLayout = windowWidth > 1250;
    if (useWideLayout) {
      return (
        <Grid.Row>
          <Grid.Column width={11}>{this.renderPrimaryCard()}</Grid.Column>
          <Grid.Column width={5} className="noGapAbove">
            {this.renderLabeledCards()}
          </Grid.Column>
        </Grid.Row>
      );
    } else {
      return (
        <React.Fragment>
          <Grid.Row>
            <Grid.Column>{this.renderPrimaryCard()}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{this.renderLabeledCards()}</Grid.Column>
          </Grid.Row>
        </React.Fragment>
      );
    }
  }

  renderLabeledCards() {
    const { intl, profileInfo, windowWidth } = this.props;
    const {
      acting,
      actingPeriodEndDate,
      actingPeriodStartDate,
      classification,
      security,
      tenure,
      yearsOfService
    } = profileInfo;

    const actingDisabled = !(acting && actingPeriodStartDate);

    const actingLabel = intl.formatMessage({ id: "profile.acting" });
    const actingPeriodLabel = intl.formatMessage({
      id: "profile.acting.period"
    });
    const classificationLabel = intl.formatMessage({
      id: "profile.classification"
    });
    const securityLabel = intl.formatMessage({ id: "profile.security" });
    const tenureLabel = intl.formatMessage({ id: "profile.tenure" });
    const yearsOfServiceLabel = intl.formatMessage({
      id: "profile.years.of.service"
    });
    const startDateString = moment(actingPeriodStartDate).format("MMM DD YYYY");
    const endDateString =
      actingPeriodEndDate !== "Undefined"
        ? moment(actingPeriodEndDate).format("MMM DD YYYY")
        : intl.formatMessage({ id: "profile.ongoing" });

    const actingDateText = actingDisabled ? (
      <span className="greyedOut">
        {intl.formatMessage({ id: "profile.na" })}
      </span>
    ) : (
      startDateString + "-" + endDateString
    );

    // When using the medium wideness view there are 2 columns of labeled cards
    if (windowWidth <= 1250 && windowWidth > 750) {
      return (
        <ProfileCardController
          button={EditLabelCardsController}
          cardName="Info"
          className="labeledItemCard compactCard"
        >
          <Grid>
            <Grid.Column width={8}>
              <Grid>
                {this.renderLabeledItem(
                  tenureLabel,
                  this.renderValue(tenure.description, "profile.undefined")
                )}
                {this.renderLabeledItem(
                  yearsOfServiceLabel,
                  this.renderValue(yearsOfService, "profile.undefined")
                )}
                {this.renderLabeledItem(
                  actingLabel,
                  this.renderValue(
                    acting.description,
                    "profile.na",
                    actingDisabled
                  )
                )}
              </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid>
                {this.renderLabeledItem(
                  securityLabel,
                  this.renderValue(security.description, "profile.undefined")
                )}

                {this.renderLabeledItem(
                  classificationLabel,
                  this.renderValue(
                    classification.description,
                    "profile.undefined"
                  )
                )}
                {this.renderLabeledItem(actingPeriodLabel, actingDateText)}
              </Grid>
            </Grid.Column>
          </Grid>
        </ProfileCardController>
      );
    }
    //When using the most wide or most skinny view there is only one column of labeled cards

    return (
      <ProfileCardController
        button={EditLabelCardsController}
        cardName="Info"
        className="labeledItemCard compactCard"
        fullHeight={true}
      >
        <Grid columns={2} style={{ paddingTop: "16px" }}>
          {this.renderLabeledItem(
            tenureLabel,
            this.renderValue(tenure.description, "profile.undefined")
          )}
          {this.renderLabeledItem(
            securityLabel,
            this.renderValue(security.description, "profile.undefined")
          )}
          {this.renderLabeledItem(
            yearsOfServiceLabel,
            this.renderValue(yearsOfService, "profile.undefined")
          )}

          {this.renderLabeledItem(
            classificationLabel,
            this.renderValue(classification.description, "profile.undefined")
          )}
          {this.renderLabeledItem(
            actingLabel,
            this.renderValue(acting.description, "profile.na", actingDisabled)
          )}
          {this.renderLabeledItem(actingPeriodLabel, actingDateText)}
        </Grid>
      </ProfileCardController>
    );
  }

  renderLabeledItem(labelText, contentText, disabled) {
    const { intl } = this.props;
    return (
      <Grid.Row columns={2} style={{ padding: "3px 0px" }}>
        <Grid.Column
          style={{ textAlign: "center", padding: "3px 0px 3px 3px" }}
        >
          <Label
            className={disabled ? "disabled" : null}
            fluid
            style={{ fontSize: "12pt", fontWeight: "normal", width: "90%" }}
          >
            {labelText}
          </Label>
        </Grid.Column>
        <Grid.Column style={{ padding: "0px" }}>
          {disabled ? intl.formatMessage({ id: "profile.na" }) : contentText}
        </Grid.Column>
      </Grid.Row>
    );
  }

  renderPrimaryCard() {
    const {
      branch,
      email,
      firstName,
      githubUrl,
      jobTitle,
      lastName,
      linkedinUrl,
      location,
      cellphone,
      organizationList,
      team,
      telephone,
      twitterUrl
    } = this.props.profileInfo;

    return (
      <EditWrapperController
        id="primaryCard"
        button={EditPrimaryInformationController}
      >
        <Card className="profileCard compactCard" fluid>
          <Card.Content>
            <Grid>
              <Grid.Row>
                <h1
                  style={{
                    display: "inline-flex",
                    marginBottom: "6px",
                    marginLeft: "25px",
                    marginTop: "0px"
                  }}
                >
                  {firstName} {lastName}
                </h1>
              </Grid.Row>
              <Grid.Row className="noGapBelow">
                <EditWrapperController
                  button={EditProfilePictureController}
                  wrapperType="compactWrapper"
                >
                  <img
                    alt="missing profile"
                    src={tempProfilePic}
                    style={{
                      maxHeight: "200px",
                      maxWidth: "250px",
                      paddingLeft: "50px",
                      width: "100%"
                    }}
                  />
                </EditWrapperController>
                <div
                  style={{
                    display: "inline",
                    float: "right",
                    minWidth: "450px",
                    overflow: "hidden",
                    paddingLeft: "50px"
                  }}
                >
                  <h3 style={{ marginBottom: "3px" }}>{jobTitle}</h3>

                  <Popup
                    on="hover"
                    wide="very"
                    trigger={
                      <h5 className="noGapAbove">
                        {branch} <Icon name="angle down" />
                      </h5>
                    }
                  >
                    <Popup.Content>
                      {this.renderOrganizationList([...organizationList, team])}
                    </Popup.Content>
                  </Popup>

                  <div className="phoneNumberArea">
                    <FormattedMessage id="profile.telephone" />:
                    {this.renderValue(telephone, "profile.undefined")}
                  </div>
                  <div className="phoneNumberArea">
                    <FormattedMessage id="profile.cellphone" />:
                    {this.renderValue(cellphone, "profile.undefined")}
                  </div>
                  <div>{email}</div>

                  <div>
                    {this.renderValue(
                      location.description,
                      "profile.undefined.location"
                    )}
                  </div>
                </div>
              </Grid.Row>
            </Grid>
          </Card.Content>

          <Menu
            color="blue"
            inverted
            widths={
              [linkedinUrl, githubUrl, twitterUrl].filter(word => word).length
            }
          >
            {linkedinUrl && (
              <Menu.Item href={linkedinUrl} target="_blank">
                <Icon name="linkedin" />
                <FormattedMessage id="profile.linkedin" />
              </Menu.Item>
            )}

            {githubUrl && (
              <Menu.Item href={githubUrl} target="_blank">
                <Icon name="github" />
                <FormattedMessage id="profile.github" />
              </Menu.Item>
            )}
            {twitterUrl && (
              <Menu.Item href={twitterUrl} target="_blank">
                <Icon name="linkify" />
                <FormattedMessage id="profile.twitter" />
              </Menu.Item>
            )}
          </Menu>
        </Card>
      </EditWrapperController>
    );
  }

  renderOrganizationList(unlistedItems, generatedElement) {
    if (unlistedItems.length === 0) {
      return <List className="organizationList"> {generatedElement} </List>;
    }

    const nextItem = unlistedItems[0];

    generatedElement = (
      <List.Item>
        {unlistedItems.length > 1 ? (
          <List.Icon
            color="grey"
            flipped="horizontally"
            name="level up alternate"
          />
        ) : null}
        <List.Content>
          <List.Description>{nextItem}</List.Description>
          <List.List>{generatedElement}</List.List>
        </List.Content>
      </List.Item>
    );

    return this.renderOrganizationList(
      unlistedItems.slice(1, unlistedItems.length),
      generatedElement
    );
  }
}

export default injectIntl(PrimaryLayoutGroupView);
