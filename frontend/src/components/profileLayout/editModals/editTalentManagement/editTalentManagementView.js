import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Form, Input } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";

import TalentManagementFormController from "../../../editForms/talentManagementForm/talentManagementFormController";

class EditTalentManagementView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
        form={TalentManagementFormController}
      />
    );
  }
}

export default injectIntl(EditTalentManagementView);
