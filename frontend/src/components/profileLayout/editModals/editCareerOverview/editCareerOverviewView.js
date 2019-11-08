import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditHistoryModal from "../common/editHistoryModal/editHistoryModalController";

class EditCareerOverviewView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditHistoryModal
        contentName={intl.formatMessage({
          id: "profile.career.content.name"
        })}
        headerName={intl.formatMessage({ id: "profile.career.header.name" })}
        name={intl.formatMessage({ id: "profile.edit.career.overview" })}
        subheaderName={intl.formatMessage({
          id: "profile.career.subheader.name"
        })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCareerOverviewView);
