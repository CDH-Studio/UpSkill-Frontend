import React, { Component } from "react";
import { Menu, Image, Grid } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import SearchFormController from "../searchForm/searchFormController";
import Logo from "../../assets/Logo5.png";

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
          <Menu.Item href="/admin">
            <FormattedMessage id="admin" />
          </Menu.Item>
          <Menu.Item href="/secured/profile">
            <FormattedMessage id="my.profile" />
          </Menu.Item>
          <Logout id="logoutButton" keycloak={keycloak} />
          <ChangeLanguage changeLanguage={changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
