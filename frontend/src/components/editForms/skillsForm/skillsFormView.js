import React, { Component } from "react";
import TagFormController from "../common/tagForm/tagFormController";
import { injectIntl } from "react-intl";

class SkillsFormView extends Component {
  render() {
    const { editProfileOptions, intl } = this.props;
    const { maxSkillItems } = editProfileOptions;

    return (
      <TagFormController
        dropdownName="skills"
        name={intl.formatMessage({ id: "profile.edit.skills" })}
        maxItems={maxSkillItems}
        {...this.props}
      />
    );
  }
}

export default injectIntl(SkillsFormView);
