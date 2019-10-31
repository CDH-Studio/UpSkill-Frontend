import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import EditHistoryModal from "../common/editHistoryModal/editHistoryController";

class EditEducationView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditHistoryModal
        name={intl.formatMessage({ id: "profile.edit.education" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditEducationView);
