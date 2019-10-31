import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import EditHistoryModal from "../common/editHistoryModal/editHistoryController";

class EditCareerOverviewView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditHistoryModal
        name={intl.formatMessage({ id: "profile.edit.career.overview" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCareerOverviewView);
