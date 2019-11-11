import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Select, Form, Grid, Checkbox } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";

import LanguageProficiencyFormView from "../../../editForms/languageProficiencyForm/languageProficiencyFormController";

import "./editLanguageProficiency.css";

class EditLanguageProficiencyView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.language.proficiency" })}
      >
        <LanguageProficiencyFormView />
      </EditModalController>
    );
  }
}

export default injectIntl(EditLanguageProficiencyView);
