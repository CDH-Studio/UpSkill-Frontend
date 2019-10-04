import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import Logout from "../logout/Logout";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";
import { FormattedMessage } from "react-intl";
//import Logo from "../../assets/Logo3Rounded.png";

export default class NavigationBarView extends Component {
  render() {
    return (
      <Menu color="violet" fixed="top" inverted size="huge">
        <Menu.Item>
          <Icon color="black" name="search" />
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item name="My Profile" /> */}
          <Menu.Item>
            <FormattedMessage id="my.profile" />
          </Menu.Item>
          <Logout keycloak={this.props.keycloak} />
          <ChangeLanguage changeLanguage={this.props.changeLanguage} />
        </Menu.Menu>
      </Menu>
    );
  }
}
