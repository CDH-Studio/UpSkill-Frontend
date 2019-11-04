import React, { Component } from "react";
import EditCareerOverviewView from "./editCareerOverviewView";

export default class EditCareerOverviewController extends Component {
  render() {
    return (
      <EditCareerOverviewView
        items={this.props.profileInfo.careerSummary}
        {...this.props}
      />
    );
  }
}
