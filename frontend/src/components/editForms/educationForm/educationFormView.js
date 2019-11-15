import React, { Component } from "react";

import HistoryItemsContainerController from "../common/historyItemsContainer/historyItemsContainerController";
import EducationItemForm from "../educationItemForm/educationItemFormController";
import { injectIntl } from "react-intl";

class EducationFormView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <HistoryItemsContainerController
        itemType={EducationItemForm}
        contentName={intl.formatMessage({
          id: "profile.education.content.name"
        })}
        headerName={intl.formatMessage({ id: "profile.education.header.name" })}
        infoName={"education"}
        name={intl.formatMessage({ id: "profile.edit.education" })}
        subheaderName={intl.formatMessage({
          id: "profile.education.subheader.name"
        })}
        {...this.props}
      />
    );
  }
}
export default injectIntl(EducationFormView);

/*
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
*/
