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
        editOptionPaths={{
          competencies: "api/option/getCompetency"
        }}
        form={CompetenciesFormController}
        name={intl.formatMessage({ id: "profile.edit.competencies" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCompetenciesView);
