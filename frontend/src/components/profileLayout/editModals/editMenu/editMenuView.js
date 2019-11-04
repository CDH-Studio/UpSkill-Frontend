import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import GenericEditModalController from "../generic/genericEditModalController.js";
import "./editMenu.css";

class EditMenuView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <GenericEditModalController
        buttonColor="#dddddd"
        name={intl.formatMessage({ id: "profile.edit.menu" })}
      >
        <div>this is div2</div>
        <div>more div2</div>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditMenuView);
