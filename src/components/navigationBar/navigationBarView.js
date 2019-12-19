import React, { Component } from "react";
import {
  Menu,
  Image,
  Grid,
  Popup,
  Icon,
  Card,
  Divider
} from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import SearchFormController from "../searchForm/searchFormController";
import Logo from "../../assets/Logo5.png";
// import tempProfilePic from "../../../../assets/tempProfilePicture.png";
import tempProfilePic from "../../assets/tempProfilePicture.png";

import "./navBar.css";

/** UI for the navigation bar used by the secured routes */
export default class NavigationBarView extends Component {
  static propTypes = {
    /** Whether the user has admin permissions or not */
    admin: PropTypes.bool,
    /** Function used to change the language intl-react is using */
    changeLanguage: PropTypes.func.isRequired,
    /** Whether should display search form or not */
    includeSearchForm: PropTypes.bool,
    /** The object representing the keycloak session */
    keycloak: PropTypes.object,
    /** Function to change route */
    redirectFunction: PropTypes.func.isRequired
  };

  render() {
    const { includeSearchForm, redirectFunction } = this.props;

    //Add a search form to the main bar if needed. Note: The filter options will probably need to be moved out of the nav bar into a modal.
    if (includeSearchForm) {
      return (
        <Grid>
          <Grid.Row>{this.renderMainBar()}</Grid.Row>
          <Grid.Row style={{ paddingTop: "50px", backgroundColor: "#aaaaaa" }}>
            <SearchFormController
              defaultAdvanced
              maxFormWidth="1750px"
              navBarLayout
              redirectFunction={redirectFunction}
            />
          </Grid.Row>
        </Grid>
      );
    }
    return this.renderMainBar();
  }

  /** renders the actual nav bar. Note: render() will probably end up just being replaced with a function very similar to this one. The filter options look terrible right now and probably need to be moved to a modal. */
  renderMainBar() {
    const { changeLanguage, keycloak, admin } = this.props;
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    return (
      <Menu
        className="gradientBack"
        color="blue"
        fixed="top"
        fluid
        inverted
        style={{ position: "relative" }}
      >
        <Menu.Item
          style={{ paddingBottom: "8px", paddingTop: "8px" }}
          href="/secured/home"
        >
          <Image src={Logo} style={{ maxWidth: "37px" }} />
        </Menu.Item>

        <Menu.Menu position="right">
          <Popup
            flowing
            on="click"
            position="top"
            trigger={
              <Menu.Item>
                <Icon name="user" size="large" /> {name}
                <Icon name="angle down" size="large" />
              </Menu.Item>
            }
          >
            <Card fluid>
              <Image src={tempProfilePic} size="small" centered />
              <Card.Content textAlign="center">
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  <span>{email}</span>
                </Card.Meta>
              </Card.Content>
              <Card.Content>
                <Menu vertical secondary fluid>
                  <Menu.Item href="/secured/profile">
                    <Icon name="user" />
                    <FormattedMessage id="my.profile" />
                  </Menu.Item>
                  {admin ? (
                    <Menu.Item href="/admin">
                      <Icon name="settings" />
                      <FormattedMessage id="admin" />
                    </Menu.Item>
                  ) : null}
                  <Divider />
                  <Logout id="logoutButton" keycloak={keycloak} />
                </Menu>
              </Card.Content>
            </Card>
          </Popup>
          <ChangeLanguage changeLanguage={changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
