import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";

import TalentManagementFormController from "../../../editForms/talentManagementForm/talentManagementFormController";

class EditTalentManagementView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        editOptionPaths={{
          careerMobility: "api/option/getCareerMobility",
          talentMatrixResult: "api/option/getTalentMatrixResult"
        }}
        form={TalentManagementFormController}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
      />
    );
  }
}

export default injectIntl(EditTalentManagementView);
