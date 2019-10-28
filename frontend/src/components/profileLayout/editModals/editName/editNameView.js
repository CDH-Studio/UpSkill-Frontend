import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import GenericEditModalController from "../generic/genericEditModalController.js";
import "./editName.css";

class EditNameView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <GenericEditModalController
        buttonClass="outerButton"
        name={intl.formatMessage({ id: "profile.edit.name" })}
      >
        <div>this is div</div>
        <div>more div</div>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditNameView);
