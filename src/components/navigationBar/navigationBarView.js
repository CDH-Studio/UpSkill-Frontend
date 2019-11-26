import React, { Component } from "react";
import { Menu, Image, Grid } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import SearchFormController from "../searchForm/searchFormController";
import Logo from "../../assets/Logo5.png";

export default class NavigationBarView extends Component {
  render() {
    const { changeLanguage, keycloak, includeSearchForm } = this.props;

    if (includeSearchForm) {
      return (
        <Grid>
          <Grid.Row>{this.renderMainBar()}</Grid.Row>
          <Grid.Row style={{ paddingTop: "50px", backgroundColor: "#aaaaaa" }}>
            <SearchFormController
              horizontalLayout
              defaultAdvanced
              maxFormWidth="1500px"
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
      <Menu color="blue" fixed="top" fluid inverted>
        <Menu.Item
          style={{ paddingBottom: "8px", paddingTop: "8px" }}
          href="/home"
        >
          <Image src={Logo} style={{ maxWidth: "37px" }} />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item name="My Profile" /> */}
          <Menu.Item href="/profile">
            <FormattedMessage id="my.profile" />
          </Menu.Item>
          <Logout id="logoutButton" keycloak={keycloak} />
          <ChangeLanguage changeLanguage={changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
