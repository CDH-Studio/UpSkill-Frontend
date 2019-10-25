import React, { Component } from "react";
import SecondaryGroupView from "./secondaryGroupView";
import tempProfilePicture from "../../assets/tempProfilePicture.png";
import "./secondaryGroup.css";

export default class secondaryGroupController extends Component {
  render() {
    const { windowWidth, profileInfo } = this.props;
    return (
      <SecondaryGroupView windowWidth={windowWidth} profileInfo={profileInfo} />
    );
  }
}
