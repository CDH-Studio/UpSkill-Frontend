import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import CompetenciesFormController from "../../../editForms/competenciesForm/competenciesFormController";
import "./editCompetencies.css";

class EditCompetenciesView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        name={intl.formatMessage({ id: "profile.edit.competencies" })}
        form={CompetenciesFormController}
        editOptionPaths={{
          competencies: "api/option/getCompetency"
        }}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCompetenciesView);
