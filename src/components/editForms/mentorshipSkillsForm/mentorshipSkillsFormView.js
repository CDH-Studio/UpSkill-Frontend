import React, { Component } from "react";
import { injectIntl } from "react-intl";

import SkillsTagFormController from "../common/skillsTagForm/skillsTagFormController";

class MentorshipSkillsFormView extends Component {
  render() {
    const { editProfileOptions, intl } = this.props;
    const { maxSkillItems } = editProfileOptions;
    // const { maxMentorshipSkillItems } = editProfileOptions;

    return (
      <SkillsTagFormController
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
