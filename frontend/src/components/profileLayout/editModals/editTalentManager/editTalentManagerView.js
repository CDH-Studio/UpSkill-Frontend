import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editTalentManagement.css";

class EditTalentManagementView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
      />
    );
  }
}

export default injectIntl(EditTalentManagementView);
