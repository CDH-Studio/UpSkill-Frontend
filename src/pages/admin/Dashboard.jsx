import React, { Component } from "react";

import _ from "lodash";
import { FormattedMessage } from "react-intl";
import AdminMenu from "../../components/admin/AdminMenu";

class AdminDashboard extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = { type: "dashboard", loading: false };
  }

  render() {
    const { type, loading } = this.state;
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminMenu
        active={type}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        loading={loading}
        goto={this.goto}
      >
        <h1>Welcome to your the Admin dashboard</h1>
      </AdminMenu>
    );
  }
}

export default AdminDashboard;
