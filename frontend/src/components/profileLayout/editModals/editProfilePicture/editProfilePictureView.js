import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import GenericEditModalController from "../generic/genericEditModalController.js";
import "./editProfilePicture.css";

class EditProfilePictureView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <GenericEditModalController
        buttonBackgroundColor="rgba(0,0,0,0.75)"
        buttonColor="#dddddd"
        name={intl.formatMessage({ id: "profile.edit.profile.picture" })}
      >
        <div>this is div2</div>
        <div>more div2</div>
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditProfilePictureView);
