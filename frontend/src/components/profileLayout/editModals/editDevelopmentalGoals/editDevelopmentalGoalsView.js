import React, { Component } from "react";
import { injectIntl } from "react-intl";

import DevelopmentalGoalsFormController from "../../../editForms/developmentalGoalsForm/developmentalGoalsFormController";
import EditModalController from "../common/editModal/editModalController.js";
import "./editDevelopmentalGoals.css";

class EditDevelopmentalGoalsView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        editOptionPaths={{
          developmentalGoals: "api/option/getDevelopmentalGoals"
        }}
        form={DevelopmentalGoalsFormController}
        name={intl.formatMessage({ id: "profile.edit.developmental.goals" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditDevelopmentalGoalsView);
