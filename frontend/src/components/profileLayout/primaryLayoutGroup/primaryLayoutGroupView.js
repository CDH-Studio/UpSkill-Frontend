import React, { Component } from "react";
import { Card, Grid, Icon, List, Menu, Popup } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import tempProfilePic from "../../../assets/tempProfilePicture.png";

import EditLabelCardsController from "../editModals/editLabelCards/editLabelCardsController";
import EditPrimaryInformationController from "../editModals/editPrimaryInformation/editPrimaryInformationController";
import EditProfilePictureController from "../editModals/editProfilePicture/editProfilePictureController";
import EditWrapperController from "../editWrapper/editWrapperController";

import LabeledCardController from "../../labeledCard/labeledCardController";
import ProfileCardController from "../profileCard/profileCardController";

import "./primaryLayoutGroup.css";

/**
 * This class generates the items at the start of the profile page that need to interact with eachother to responsively resize
 */
class PrimaryLayoutGroupView extends Component {
  render() {
    const { windowWidth } = this.props;
    const useWideLayout = windowWidth > 1250;

    return (
      <div>
        <Grid padded={false}>
          <Grid.Column
            width={useWideLayout ? 11 : 16}
            style={{ marginBottom: "1em", paddingBottom: "0px" }}
          >
            {this.renderPrimaryCard()}
          </Grid.Column>
          {this.renderLabeledCards()}
        </Grid>
      </div>
    );
  }

  renderLabeledCards() {
    const { intl, profileInfo, windowWidth } = this.props;
    const {
      acting,
      actingPeriodStartDate,
      actingPeriodEndDate,
      classification,
      security,
      status,
      yearsOfService
    } = profileInfo;

    const actingLabel = intl.formatMessage({ id: "profile.acting" });
    const actingPeriodLabel = intl.formatMessage({
      id: "profile.acting.period"
    });
    const classificationLabel = intl.formatMessage({
      id: "profile.classification"
    });
    const securityLabel = intl.formatMessage({ id: "profile.security" });
    const statusLabel = intl.formatMessage({ id: "profile.status" });
    const yearsOfServiceLabel = intl.formatMessage({
      id: "profile.years.of.service"
    });

    // When using the medium wideness view there are 2 columns of labeled cards
    if (windowWidth <= 1250 && windowWidth > 750) {
      return (
        <Grid.Column
          className="secondRow"
          style={{ paddingTop: "0px" }}
          width={16}
        >
          <ProfileCardController
            button={EditLabelCardsController}
            cardName="Info"
            className="compactCard"
          >
            <Grid>
              <Grid.Column width={8}>
                <LabeledCardController
                  contentText={status}
                  labelText={statusLabel}
                />
                <LabeledCardController
                  contentText={yearsOfService}
                  labelText={yearsOfServiceLabel}
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <LabeledCardController
                  contentText={security}
                  labelText={securityLabel}
                />
                <LabeledCardController
                  contentText={classification}
                  labelText={classificationLabel}
                />
              </Grid.Column>
            </Grid>
          </ProfileCardController>
        </Grid.Column>
      );
    }
    //When using the most wide or most skinny view there is only one column of labeled cards
    return (
      <Grid.Column
        {...(windowWidth > 1250
          ? { className: "firstRowLabelCardColumn", width: 5 }
          : { className: "secondRow", width: 16 })}
      >
        <ProfileCardController
          button={EditLabelCardsController}
          cardName="Info"
          className="compactCard"
          fullHeight={windowWidth > 1250}
        >
          <LabeledCardController contentText={status} labelText={statusLabel} />
          <LabeledCardController
            contentText={yearsOfService}
            labelText={yearsOfServiceLabel}
          />
          <LabeledCardController
            contentText={security}
            labelText={securityLabel}
          />
          <LabeledCardController
            contentText={classification}
            labelText={classificationLabel}
          />
          {acting && actingPeriodStartDate && (
            <React.Fragment>
              <LabeledCardController
                contentText={acting}
                labelText={actingLabel}
              />
              <LabeledCardController
                contentText={actingPeriodStartDate + "-" + actingPeriodEndDate}
                labelText={actingPeriodLabel}
              />
            </React.Fragment>
          )}
        </ProfileCardController>
      </Grid.Column>
    );
  }

  renderPrimaryCard() {
    const {
      branch,
      country,
      email,
      firstName,
      githubUrl,
      jobTitle,
      lastName,
      linkedinUrl,
      mobile,
      organizationList,
      province,
      street,
      team,
      telephone,
      twitterUrl
    } = this.props.profileInfo;

    return (
      <div>
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
                        width: "100%",
                        paddingLeft: "50px"
                      }}
                    />
                  </EditWrapperController>
                  <div
                    style={{
                      display: "inline",
                      overflow: "hidden",
                      float: "right",
                      paddingLeft: "50px",
                      minWidth: "450px"
                    }}
                  >
                    <h3 style={{ marginBottom: "3px" }}>{jobTitle}</h3>

                    <Popup
                      flowing
                      on="click"
                      trigger={<h5 className="noGapAbove">{branch}</h5>}
                    >
                      <Popup.Content>
                        {this.renderOrganizationList([
                          ...organizationList,
                          team
                        ])}
                      </Popup.Content>
                    </Popup>

                    <div className="phoneNumberArea">
                      <FormattedMessage id="profile.telephone" />: {telephone}
                    </div>
                    <div className="phoneNumberArea">
                      <FormattedMessage id="profile.cellphone" />: {mobile}
                    </div>
                    <div>{email}</div>

                    <div>
                      {street}, {province}, {country}
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
                  <Icon name="twitter" />
                  <FormattedMessage id="profile.twitter" />
                </Menu.Item>
              )}
            </Menu>
          </Card>
        </EditWrapperController>
      </div>
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
