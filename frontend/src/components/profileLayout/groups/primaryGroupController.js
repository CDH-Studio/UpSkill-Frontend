import React, { Component } from "react";
import PrimaryGroupView from "./primaryGroupView";

export default class PrimaryGroupController extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;

    return (
      <PrimaryGroupView profileInfo={profileInfo} windowWidth={windowWidth} />
    );
  }
}
