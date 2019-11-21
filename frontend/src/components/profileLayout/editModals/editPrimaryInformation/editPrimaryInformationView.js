import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editPrimaryInformation.css";

import PrimaryInformationFormController from "../../../editForms/primaryInformationForm/primaryInformationFormController";

class EditPrimaryInformationView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
        editOptionPaths={{
          location: "api/option/getLocation"
        }}
        form={PrimaryInformationFormController}
      />
    );
  }
}

export default injectIntl(EditPrimaryInformationView);
