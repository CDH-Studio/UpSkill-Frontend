import React, { Component } from "react";
import LandingLayoutView from "./landingLayoutView";

export default class LandingLayoutController extends Component {
  render() {
    const { changeLanguage } = this.props;
    return <LandingLayoutView changeLanguage={changeLanguage} />;
  }
}
