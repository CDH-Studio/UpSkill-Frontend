import React, { Component } from "react";
import { Menu, Image, Grid, Dropdown, Icon } from "semantic-ui-react";
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
    const { changeLanguage, keycloak } = this.props;
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
          <Dropdown
            trigger={
              <span>
                <Image avatar alt="missing profile" src={tempProfilePic} />
              </span>
            }
            pointing
            className="link item"
          >
            <Dropdown.Menu>
              <Dropdown.Item href="/secured/profile">
                <Icon name="user" />
                <FormattedMessage id="my.profile" />
              </Dropdown.Item>
              <Dropdown.Item href="/admin">
                <Icon name="setting" />
                <FormattedMessage id="admin" />
              </Dropdown.Item>
              <Dropdown.Divider />
              <ChangeLanguage changeLanguage={changeLanguage} />
              <Logout id="logoutButton" keycloak={keycloak} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}
