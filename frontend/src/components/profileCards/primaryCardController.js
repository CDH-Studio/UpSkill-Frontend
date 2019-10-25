import React, { Component } from "react";
import PrimaryCardView from "./primaryCardView";
import tempProfilePicture from "../../assets/tempProfilePicture.png";

export default class PrimaryCardController extends Component {
  render() {
    const { profileInfo } = this.props;

    return (
      <PrimaryCardView
        windowWidth={this.props.windowWidth}
        profileInfo={profileInfo}
      />
    );
  }
}
