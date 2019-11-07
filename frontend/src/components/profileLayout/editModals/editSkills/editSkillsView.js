import React, { Component } from "react";
import { injectIntl } from "react-intl";

//import EditModalController from "../common/editModal/editModalController.js";
import "./editSkills.css";
import EditTagsController from "../common/editTagsModal/editTagsModalController";

class EditSkillsView extends Component {
  render() {
    const { editProfileOptions, intl } = this.props;
    const { maxSkillItems } = editProfileOptions;

    return (
      <EditTagsController
        dropdownName="skills"
        name={intl.formatMessage({ id: "profile.edit.skills" })}
        maxItems={maxSkillItems}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditSkillsView);
