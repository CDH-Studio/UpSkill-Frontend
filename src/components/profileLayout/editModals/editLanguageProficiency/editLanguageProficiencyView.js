import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";

import LanguageProficiencyFormView from "../../../editForms/languageProficiencyForm/languageProficiencyFormController";

import "./editLanguageProficiency.css";

class EditLanguageProficiencyView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        form={LanguageProficiencyFormView}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.language.proficiency" })}
      />
    );
  }
}

export default injectIntl(EditLanguageProficiencyView);
