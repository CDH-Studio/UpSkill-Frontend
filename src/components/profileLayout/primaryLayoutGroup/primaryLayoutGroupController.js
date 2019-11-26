import React, { Component } from "react";
import PrimaryLayoutGroupView from "./primaryLayoutGroupView";

export default class PrimaryGroupController extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;

    return (
      <PrimaryLayoutGroupView
        profileInfo={profileInfo}
        windowWidth={windowWidth}
      />
    );
  }
}
