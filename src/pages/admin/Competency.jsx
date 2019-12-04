import React, { Component } from "react";

import _ from "lodash";
import AdminOptionEdit from "../../components/admin/AdminOptionEdit";
import { Table } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class AdminCompetency extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminOptionEdit
        type="competency"
        goto={this.goto}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        generateTable={this.generateTable}
      />
    );
  }
}

export default AdminCompetency;
