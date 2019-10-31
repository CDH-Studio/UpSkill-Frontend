import React, { Component } from "react";
import EditDevelopmentalGoalsView from "./editDevelopmentalGoalsView";

export default class EditDevelopmentalGoalsController extends Component {
  render() {
    return (
      <EditDevelopmentalGoalsView
        dropdownOptions={{
          developmentalGoals: [
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
