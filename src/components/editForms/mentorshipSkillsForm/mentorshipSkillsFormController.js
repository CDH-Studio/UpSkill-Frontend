import React, { Component } from "react";
import MentorshipSkillsFormView from "./mentorshipSkillsFormView";

export default class mentorshipSkillsFormController extends Component {
  render() {
    return <MentorshipSkillsFormView {...this.props} />;
  }
}
