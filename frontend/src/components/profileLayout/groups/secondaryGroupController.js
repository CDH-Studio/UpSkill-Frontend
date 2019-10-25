import React, { Component } from "react";
import SecondaryGroupView from "./secondaryGroupView";
import "./secondaryGroup.css";

export default class secondaryGroupController extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;
    return (
      <SecondaryGroupView profileInfo={profileInfo} windowWidth={windowWidth} />
    );
  }
}
