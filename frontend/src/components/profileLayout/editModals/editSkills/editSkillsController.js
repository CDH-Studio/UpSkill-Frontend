import React, { Component } from "react";
import EditSkillsView from "../editSkills/editSkillsView";

export default class EditSkillsController extends Component {
  render() {
    return (
      <EditSkillsView
        dropdownOptions={{
          skills: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ]
        }}
        {...this.props}
      />
    );
  }
}
