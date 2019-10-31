import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import EditTagsController from "../common/editTagsModal/editTagsModalController";
import "./editDevelopmentalGoals.css";

class EditDevelopmentalGoalsView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditTagsController
        dropdownName="developmentalGoals"
        name={intl.formatMessage({ id: "profile.edit.developmental.goals" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditDevelopmentalGoalsView);
