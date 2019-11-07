import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";
import "./editProfilePicture.css";

class EditProfilePictureView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModalController
        buttonBackgroundColor="rgba(0,0,0,0.75)"
        buttonColor="#dddddd"
        name={intl.formatMessage({ id: "profile.edit.profile.picture" })}
      >
        <div>this is div2</div>
        <div>more div2</div>
      </EditModalController>
    );
  }
}

export default injectIntl(EditProfilePictureView);
