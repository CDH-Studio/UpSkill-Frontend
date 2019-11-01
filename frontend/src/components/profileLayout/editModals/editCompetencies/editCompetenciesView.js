import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import EditTagsModalController from "../common/editTagsModal/editTagsModalController";
import "./editCompetencies.css";

class EditCompetenciesView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditTagsModalController
        dropdownName="competencies"
        name={intl.formatMessage({ id: "profile.edit.competencies" })}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCompetenciesView);
