import React, { Component } from "react";
import { Grid, List, Popup } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

import tempProfilePic from "../../../assets/tempProfilePicture.png";

import EditWrapperController from "../editWrapper/editWrapperController";
import LabeledCardController from "../../labeledCard/labeledCardController";
import ProfileCardController from "../profileCard/profileCardController";
import "./primaryLayoutGroup.css";

import EditNameController from "../editModals/editName/editNameController";
import EditPrimaryInformationController from "../editModals/editPrimaryInformation/editPrimaryInformationController";
import EditProfilePictureController from "../editModals/editProfilePicture/editProfilePictureController";
import EditLabelCardsController from "../editModals/editLabelCards/editLabelCardsController";

/**
 * This class generates the items at the start of the profile page that need to interact with eachother to responsively resize
 */
class PrimaryLayoutGroupView extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;
    const { firstName, lastName } = profileInfo;
    const useWideLayout = windowWidth > 1250;

    return (
      <div>
        <EditWrapperController
          buttonPosition={"outerButton"}
          button={<EditNameController />}
          wrapperType={"compactWrapper"}
        >
          <h1
            style={{
              display: "inline-flex",
              marginBottom: "6px",
              marginTop: "0px"
            }}
          >
            {firstName} {lastName}
          </h1>
        </EditWrapperController>
        <Grid>
          <Grid.Column
            style={{ paddingBottom: "0px", paddingRight: "0px" }}
            width={useWideLayout ? 3 : 5}
          >
            <EditWrapperController
              button={<EditProfilePictureController />}
              wrapperType="compactWrapper"
            >
              <img
                alt="missing profile"
                src={tempProfilePic}
                style={{
                  maxHeight: "200px",
                  maxWidth: "100%"
                }}
              />
            </EditWrapperController>
          </Grid.Column>
          <Grid.Column width={useWideLayout ? 8 : 11}>
            {this.renderPrimaryCard()}
          </Grid.Column>
          {this.renderLabeledCards()}
        </Grid>
      </div>
    );
  }

  renderLabeledCards() {
    const { intl, profileInfo, windowWidth } = this.props;
    const { groupOrLevel, security, status, yearsOfService } = profileInfo;

    const groupOrLevelLabel = intl.formatMessage({
      id: "profile.group.or.level"
    });
    const securityLabel = intl.formatMessage({ id: "profile.security" });
    const statusLabel = intl.formatMessage({ id: "profile.status" });
    const yearsOfServiceLabel = intl.formatMessage({
      id: "profile.years.of.service"
    });

    // When using the medium wideness view there are 2 columns of labeled cards
    if (windowWidth <= 1250 && windowWidth > 750) {
      return (
        <React.Fragment>
          <Grid.Column className="secondRow" width={8}>
            <LabeledCardController
              contentText={status}
              labelText={statusLabel}
            />
            <LabeledCardController
              contentText={groupOrLevel}
              labelText={groupOrLevelLabel}
            />
          </Grid.Column>
          <Grid.Column className="secondRow" width={8}>
            <EditWrapperController button={<EditLabelCardsController />}>
              <LabeledCardController
                contentText={yearsOfService}
                labelText={yearsOfServiceLabel}
              />
            </EditWrapperController>
            <LabeledCardController
              contentText={security}
              labelText={securityLabel}
            />
          </Grid.Column>
        </React.Fragment>
      );
    }
    //When using the most wide or most skinny view there is only one column of labeled cards
    return (
      <Grid.Column
        {...(windowWidth > 1250
          ? { className: "firstRowLabelCard", width: 5 }
          : { className: "secondRow", width: 16 })}
      >
        <EditWrapperController button={<EditLabelCardsController />}>
          <LabeledCardController contentText={status} labelText={statusLabel} />
        </EditWrapperController>
        <LabeledCardController
          contentText={groupOrLevel}
          labelText={groupOrLevelLabel}
        />
        <LabeledCardController
          contentText={yearsOfService}
          labelText={yearsOfServiceLabel}
        />
        <LabeledCardController
          contentText={security}
          labelText={securityLabel}
        />
      </Grid.Column>
    );
  }

  renderPrimaryCard() {
    const {
      branch,
      country,
      email,
      jobTitle,
      mobile,
      organizationList,
      province,
      street,
      team,
      telephone
    } = this.props.profileInfo;

    return (
      <ProfileCardController
        id="primaryCard"
        style={{ marginTop: "-20px" }}
        button={<EditPrimaryInformationController />}
        wrapperType="reducePaddingWrapper"
      >
        <h3 style={{ marginBottom: "3px" }}>{jobTitle}</h3>

        <Popup
          flowing
          on="click"
          trigger={<h5 className="noGapAbove">{branch}</h5>}
        >
          <Popup.Content>
            {this.renderOrganizationList([...organizationList, team])}
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
      </ProfileCardController>
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
