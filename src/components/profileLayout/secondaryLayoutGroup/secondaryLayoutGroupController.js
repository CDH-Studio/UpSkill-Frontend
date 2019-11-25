import React, { Component } from "react";
import SecondaryLayoutGroupView from "./secondaryLayoutGroupView";

export default class secondaryGroupController extends Component {
  render() {
    const { profileInfo, windowWidth } = this.props;
    return (
      <SecondaryLayoutGroupView
        profileInfo={profileInfo}
        windowWidth={windowWidth}
      />
    );
  }
}
