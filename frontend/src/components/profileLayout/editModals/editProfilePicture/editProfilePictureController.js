import React, { Component } from "react";
import EditProfilePictureView from "./editProfilePictureView";

export default class EditProfilePictureController extends Component {
  render() {
    return <EditProfilePictureView {...this.props} />;
  }
}

