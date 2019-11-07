import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditHistoryModal from "../common/editHistoryModal/editHistoryModalController";

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
