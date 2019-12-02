import React, { Component } from "react";

import _ from "lodash";
import AdminOptionEdit from "../../components/admin/AdminOptionEdit";
import { Table } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class AdminSkill extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminOptionEdit
        type="skill"
        goto={this.goto}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
      />
    );
  }
}

export default AdminSkill;
