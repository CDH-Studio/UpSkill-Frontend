import React, { Component } from "react";
import PrimaryGroupView from "./primaryGroupView";

export default class PrimaryGroupController extends Component {
  render() {
    const { profileInfo } = this.props;

    return (
      <PrimaryGroupView
        windowWidth={this.props.windowWidth}
        profileInfo={profileInfo}
      />
    );
  }
}
