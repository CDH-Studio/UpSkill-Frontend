import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editTalentManager.css";

class EditTalentManagerView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
      >
        <div>this is div2</div>
        <div>more div2</div>
      </EditModalController>
    );
  }
}

export default injectIntl(EditTalentManagerView);
