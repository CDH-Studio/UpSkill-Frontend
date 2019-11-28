import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
import Logo from "../../assets/Logo5.png";

export default class NavigationBarView extends Component {
  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <Menu
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
          <Menu.Item href="/admin/skill">
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
