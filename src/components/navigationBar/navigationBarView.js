import React, { Component } from "react";
import {
  Menu,
  Image,
  Grid,
  Popup,
  Icon,
  Button,
  Card,
  Divider
} from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import SearchFormController from "../searchForm/searchFormController";
import Logo from "../../assets/Logo5.png";
// import tempProfilePic from "../../../../assets/tempProfilePicture.png";
import tempProfilePic from "../../assets/tempProfilePicture.png";

import "./navBar.css";

export default class NavigationBarView extends Component {
  render() {
    const { includeSearchForm, redirectFunction } = this.props;

    if (includeSearchForm) {
      return (
        <Grid>
          <Grid.Row>{this.renderMainBar()}</Grid.Row>
          <Grid.Row style={{ paddingTop: "50px", backgroundColor: "#aaaaaa" }}>
            <SearchFormController
              defaultAdvanced
              navBarLayout
              maxFormWidth="1750px"
              redirectFunction={redirectFunction}
            />
          </Grid.Row>
        </Grid>
      );
    }
    return this.renderMainBar();
  }

  renderMainBar() {
    const { changeLanguage, keycloak, admin } = this.props;
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    return (
      <Menu
        color="blue"
        fixed="top"
        fluid
        inverted
        style={{ position: "relative" }}
        className="gradientBack"
      >
        <Menu.Item
          style={{ paddingBottom: "8px", paddingTop: "8px" }}
          href="/secured/home"
        >
          <Image src={Logo} style={{ maxWidth: "37px" }} />
        </Menu.Item>

        <Menu.Menu position="right">
          {/* <Dropdown.Menu>
              <Dropdown.Item href="/secured/profile">
                <Icon name="user" />
                <FormattedMessage id="my.profile" />
              </Dropdown.Item>
              {admin ? (
                <Dropdown.Item href="/admin">
                  <Icon name="settings" />
                  <FormattedMessage id="admin" />
                </Dropdown.Item>
              ) : null}
              <ChangeLanguage changeLanguage={changeLanguage} />
              <Dropdown.Divider />
              <Logout id="logoutButton" keycloak={keycloak} />
            </Dropdown.Menu> */}
          <Popup
            flowing
            position="top"
            trigger={
              <Menu.Item>
                <Icon name="user" size="large" />
                {name}

                <Icon name="angle down" size="large" />
              </Menu.Item>
            }
            on="click"
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
