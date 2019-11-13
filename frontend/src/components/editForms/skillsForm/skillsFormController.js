import React, { Component } from "react";
import SkillsFormView from "./skillsFormView";

export default class skillsFormController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SkillsFormView {...this.props} />;
  }
}
