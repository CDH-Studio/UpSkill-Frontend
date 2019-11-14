import React, { Component } from "react";
import ProjectsFormView from "./projectsFormView";

export default class projectsFormController extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProjectsFormView {...this.props} />;
  }
}
