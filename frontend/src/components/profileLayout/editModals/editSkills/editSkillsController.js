import React, { Component } from "react";
import EditSkillsView from "../editSkills/editSkillsView";

export default class EditSkillsController extends Component {
  render() {
    return <EditSkillsView {...this.props} />;
  }
}
