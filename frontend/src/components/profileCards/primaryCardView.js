import React, { Component } from "react";
import {
  Card,
  Grid,
  List,
  Image,
  Icon,
  Table,
  Form,
  Popup,
  Menu
} from "semantic-ui-react";

import tempProfilePic from "../../assets/tempProfilePicture.png";

import LabeledCardController from "../labeledCard/labeledCardController";
import "./primaryCard.css";

export default class BasicCardView extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    //this.renderPrimaryCard = this.renderPrimaryCard.bind(this);
    //this.renderExternalLinks = this.renderExternalLinks.bind(this);
  }

  render() {
    const { windowWidth, profileInfo } = this.props;

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
              style={{
                maxHeight: "100%",
                maxWidth: "100%"
              }}
              src={tempProfilePic}
            />
          </Grid.Column>
          <Grid.Column width={useWideLayout ? 8 : 12}>
            {this.renderPrimaryCard()}
          </Grid.Column>
          {this.renderLabeledCards()}
        </Grid>
        {this.renderExternalLinks()}
      </div>
    );
  }

  renderExternalLinks() {
    const { GitHubURL, LinkedInURL, TwitterURL } = this.props.profileInfo;

    return (
      <Menu widths={3} color="violet" inverted>
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

  renderLabeledCards() {
    const { windowWidth, profileInfo } = this.props;
    const { status, groupOrLevel, yearsOfService, security } = profileInfo;

    if (windowWidth <= 1150 && windowWidth > 750) {
      return (
        <React.Fragment>
          <Grid.Column width={8}>
            <LabeledCardController labelText={"Status"} contentText={status} />
            <LabeledCardController
              labelText={"Group/Level"}
              contentText={groupOrLevel}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <LabeledCardController
              labelText={"Years of Service"}
              contentText={yearsOfService}
            />
            <LabeledCardController
              labelText={"Security"}
              contentText={security}
            />
          </Grid.Column>
        </React.Fragment>
      );
    }
    return (
      <Grid.Column width={windowWidth > 1150 ? 5 : 16}>
        <LabeledCardController labelText={"Status"} contentText={status} />
        <LabeledCardController
          labelText={"Group/Level"}
          contentText={groupOrLevel}
        />
        <LabeledCardController
          labelText={"Years of Service"}
          contentText={yearsOfService}
        />
        <LabeledCardController labelText={"Security"} contentText={security} />
      </Grid.Column>
    );
  }

  renderPrimaryCard() {
    const {
      jobTitle,
      telephone,
      mobile,
      branch,
      email,
      street,
      province,
      country,
      organizationList,
      team
    } = this.props.profileInfo;

    return (
      <Card fluid>
        <Card.Content>
          <h3 style={{ marginBottom: "3px" }}>{jobTitle}</h3>

          <Popup
            trigger={<h5 class="noGapAbove">{branch}</h5>}
            on="click"
            flowing
          >
            <Popup.Content>
              {this.renderOrganizationList([...organizationList, team])}
            </Popup.Content>
          </Popup>

          <div
            id="phoneDiv"
            style={{
              display: "inline-block"
            }}
          >
            <div
              id="telephoneDiv"
              style={{
                width: "200px",
                display: "inline-block"
              }}
            >
              Tel: {telephone}
            </div>
            <div
              id="mobileDiv"
              style={{
                width: "200px",
                display: "inline-block"
              }}
            >
              Cell: {mobile}
            </div>
          </div>
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
      return <List> {generatedElement} </List>;
    }

    const nextItem = unlistedItems[0];

    generatedElement = (
      <List.Item style={{ ...styles.unitItem }}>
        {unlistedItems.length > 1 ? (
          <List.Icon
            color="grey"
            style={{ position: "relative", top: "-5px", left: "0px" }}
            name="level up alternate"
            flipped="horizontally"
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

  renderBasicOrganization() {
    if (this.state.basicOrganizationExpanded) {
      return (
        <p
          style={styles.boldFont}
          onClick={() =>
            this.setState({
              basicOrganizationExpanded: !this.state.basicOrganizationExpanded
            })
          }
        >
          Organization
          <Icon name="angle down" />
        </p>
      );
    }
    return (
      <div>
        <p
          style={styles.boldFont}
          onClick={() =>
            this.setState({
              basicOrganizationExpanded: !this.state.basicOrganizationExpanded
            })
          }
        >
          Organization
          <Icon name="angle up" />
        </p>
        <List style={styles.compactAbove}>
          <List.Item>
            {this.renderOrganizationList([
              this.props.profileInfo["team"],
              ...this.props.profileInfo["organizationList"]
            ])}
          </List.Item>
        </List>
      </div>
    );
  }

  renderBasicAddress() {
    if (this.state.basicAddressExpanded) {
      return (
        <p
          style={styles.boldFont}
          onClick={() =>
            this.setState({
              basicAddressExpanded: !this.state.basicAddressExpanded
            })
          }
        >
          Address
          <Icon name="angle down" />
        </p>
      );
    } else {
      return (
        <div>
          <p
            style={styles.boldFont}
            onClick={() =>
              this.setState({
                basicAddressExpanded: !this.state.basicAddressExpanded
              })
            }
          >
            Address
            <Icon name="angle up" />
          </p>
          <p style={styles.compactVertically}>
            {this.props.profileInfo["building"]}
          </p>
          <p style={styles.compactVertically}>
            {this.props.profileInfo["street"]}
          </p>
          <p>
            {this.props.profileInfo["city"]},{" "}
            {this.props.profileInfo["province"]} {this.props.profileInfo["PO"]}
          </p>
        </div>
      );
    }
  }
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

  primaryInfoOffset: { paddingLeft: "130px" },

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
    maxWidth: "1500px",
    padding: "25px"
  },

  unitItem: {
    fontWeight: "normal"
  }
};
