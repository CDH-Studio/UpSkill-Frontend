import React, { Component } from "react";
import { Card, Grid, List, Popup } from "semantic-ui-react";

import tempProfilePic from "../../../assets/tempProfilePicture.png";

import LabeledCardController from "../../labeledCard/labeledCardController";
import "./primaryGroup.css";

/**
 * This class generates the items at the start of the profile page that need to interact with eachother to responsively resize
 */
export default class PrimaryGroupView extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;
    const { firstName, lastName } = profileInfo;
    const useWideLayout = windowWidth > 1150;

    return (
      <div>
        <h1 style={{ marginBottom: "6px" }}>
          {firstName} {lastName}
        </h1>
        <Grid>
          <Grid.Column width={useWideLayout ? 3 : 4}>
            <img
              src={tempProfilePic}
              style={{
                maxHeight: "100%",
                maxWidth: "100%"
              }}
            />
          </Grid.Column>
          <Grid.Column width={useWideLayout ? 8 : 12}>
            {this.renderPrimaryCard()}
          </Grid.Column>
          {this.renderLabeledCards()}
        </Grid>
      </div>
    );
  }

  renderLabeledCards() {
    const { profileInfo, windowWidth } = this.props;
    const { groupOrLevel, security, status, yearsOfService } = profileInfo;

    // When using the most wide or most skinny view there is only one column of labeled cards
    if (windowWidth <= 1150 && windowWidth > 750) {
      return (
        <React.Fragment>
          <Grid.Column width={8}>
            <LabeledCardController contentText={status} labelText={"Status"} />
            <LabeledCardController
              contentText={groupOrLevel}
              labelText={"Group/Level"}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <LabeledCardController
              contentText={yearsOfService}
              labelText={"Years of Service"}
            />
            <LabeledCardController
              contentText={security}
              labelText={"Security"}
            />
          </Grid.Column>
        </React.Fragment>
      );
    }
    //When using the medium wideness view there are 2 columns of labeled cards
    return (
      <Grid.Column width={windowWidth > 1150 ? 5 : 16}>
        <LabeledCardController contentText={status} labelText={"Status"} />
        <LabeledCardController
          contentText={groupOrLevel}
          labelText={"Group/Level"}
        />
        <LabeledCardController
          contentText={yearsOfService}
          labelText={"Years of Service"}
        />
        <LabeledCardController contentText={security} labelText={"Security"} />
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
      <Card fluid>
        <Card.Content>
          <h3 style={{ marginBottom: "3px" }}>{jobTitle}</h3>

          <Popup
            trigger={<h5 className="noGapAbove">{branch}</h5>}
            on="click"
            flowing
          >
            <Popup.Content>
              {this.renderOrganizationList([...organizationList, team])}
            </Popup.Content>
          </Popup>

          <div className="phoneNumberArea">Tel: {telephone}</div>
          <div className="phoneNumberArea">Cell: {mobile}</div>
          <div>{email}</div>

          <div>
            {street}, {province}, {country}
          </div>
        </Card.Content>
      </Card>
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
