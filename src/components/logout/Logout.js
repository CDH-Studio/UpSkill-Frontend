import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class Logout extends Component {
  logout() {
    const { history, keycloak } = this.props;

    history.push("/");
    keycloak.logout();
  }

  render() {
    return (
      <Menu.Item onClick={() => this.logout()}>
        <FormattedMessage id="sign.out" />
      </Menu.Item>
    );
    // <Menu.Item name="Logout" onClick={() => this.logout()} />;
  }
}
export default withRouter(Logout);