import React, { Component } from "react";
import LandingNavBarView from "./landingNavBarView";

export default class LandingNavBarController extends Component {
  render() {
    const { changeLanguage } = this.props;
    return <LandingNavBarView changeLanguage={changeLanguage} />;
  }
}
