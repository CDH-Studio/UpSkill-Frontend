import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Logout extends Component {
  logout() {
    this.props.history.push("/");
    this.props.keycloak.logout();
  }

  render() {
    return <Menu.Item name="Logout" onClick={() => this.logout()} />;
  }
}
export default withRouter(Logout);
