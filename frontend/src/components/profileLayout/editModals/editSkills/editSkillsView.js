import React, { Component } from "react";
import { injectIntl } from "react-intl";

import "./editSkills.css";
import SkillsFormController from "../../../editForms/skillsForm/skillsFormController";
import EditModalController from "../common/editModal/editModalController.js";

class EditSkillsView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        name={intl.formatMessage({ id: "profile.edit.skills" })}
        form={SkillsFormController}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditSkillsView);
