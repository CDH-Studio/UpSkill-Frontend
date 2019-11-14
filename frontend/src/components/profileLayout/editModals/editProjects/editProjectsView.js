import React, { Component } from "react";
import { injectIntl } from "react-intl";

import ProjectsFormController from "../../../editForms/projectsForm/projectsFormController";
import EditModalController from "../common/editModal/editModalController.js";

class EditProjectsView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        name={intl.formatMessage({ id: "profile.edit.projects" })}
        form={ProjectsFormController}
        editOptionPaths={null}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditProjectsView);
