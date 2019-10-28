import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import GenericEditModalController from "../generic/genericEditModalController.js";
import "./editLanguageProficiency.css";

class EditLanguageProficiencyView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <GenericEditModalController
        name={intl.formatMessage({ id: "profile.edit.official.language" })}
      >
        <div>this is div2</div>
        <div>more div2</div>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditLanguageProficiencyView);