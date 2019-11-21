import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editManager.css";

import ManagerFormController from "../../../editForms/managerForm/managerFormController";

class EditManagerView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        form={ManagerFormController}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
      />
    );
  }
}

export default injectIntl(EditManagerView);
