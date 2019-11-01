import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

//import EditModalController from "../common/editModal/editModalController.js";
import "./editSkills.css";
import EditTagsController from "../common/editTagsModal/editTagsModalController";

class EditSkillsView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditTagsController
        dropdownName="skills"
        name={intl.formatMessage({ id: "profile.edit.skills" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditSkillsView);
