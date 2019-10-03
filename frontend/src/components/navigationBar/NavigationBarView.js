import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
//import Logo from "../../assets/Logo3Rounded.png";

export default class NavigationBarView extends Component {
  render() {
    return (
      <Menu color="violet" fixed="top" inverted size="huge">
        <Menu.Item>
          <Icon color="white" name="search" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="My Profile" />
          <Menu.Item name="Logout" />
        </Menu.Menu>
      </Menu>
    );
  }
}
