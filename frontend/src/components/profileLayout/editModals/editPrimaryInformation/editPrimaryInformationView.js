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
        editOptionPaths={{
          location: "api/option/getLocation"
        }}
        form={PrimaryInformationFormController}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
      />
    );
  }
}

export default injectIntl(EditPrimaryInformationView);
