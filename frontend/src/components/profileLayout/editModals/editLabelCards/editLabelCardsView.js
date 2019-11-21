import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editLabelCards.css";

import LabelCardFormController from "../../../editForms/labelCardForm/labelCardFormController";

class EditLabelCardView extends Component {
  render() {
    return (
      <EditModalController
        {...this.props}
        name="Edit Info"
        editOptionPaths={{
          tenure: "api/option/getTenure",
          security: "api/option/getSecurityClearance",
          groupOrLevel: "api/option/getGroupLevel"
        }}
        form={LabelCardFormController}
      />
    );
  }
}

export default injectIntl(EditLabelCardView);
