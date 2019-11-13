import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController";
import EducationFormController from "../../../editForms/educationForm/educationFormController";

class EditEducationView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        name={intl.formatMessage({ id: "profile.edit.education" })}
        form={EducationFormController}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditEducationView);
