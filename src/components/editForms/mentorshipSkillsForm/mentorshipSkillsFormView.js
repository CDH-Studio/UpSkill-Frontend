import React, { Component } from "react";
import { injectIntl } from "react-intl";

import TagFormController from "../common/tagForm/tagFormController";

class MentorshipSkillsFormView extends Component {
  render() {
    const { editProfileOptions, intl } = this.props;
    const { maxSkillItems } = editProfileOptions;
    // const { maxMentorshipSkillItems } = editProfileOptions;

    return (
      <TagFormController
        dropdownName="mentorshipSkills"
        // maxItems={maxMentorshipSkillItems}
        maxItems={maxSkillItems}
        name={intl.formatMessage({ id: "profile.edit.mentorship.skills" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(MentorshipSkillsFormView);
