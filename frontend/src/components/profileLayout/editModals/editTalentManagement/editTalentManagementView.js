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
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
        editOptionPaths={{
          talentMatrixResult: "api/option/getTalentMatrixResult",
          careerMobility: "api/option/getCareerMobility"
        }}
        form={TalentManagementFormController}
      />
    );
  }
}

export default injectIntl(EditTalentManagementView);
