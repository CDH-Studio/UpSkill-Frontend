import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditHistoryModal from "../common/editHistoryModal/editHistoryModalController";

class EditEducationView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditHistoryModal
        contentName={intl.formatMessage({
          id: "profile.education.content.name"
        })}
        headerName={intl.formatMessage({ id: "profile.education.header.name" })}
        name={intl.formatMessage({ id: "profile.edit.education" })}
        subheaderName={intl.formatMessage({
          id: "profile.education.subheader.name"
        })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditEducationView);
