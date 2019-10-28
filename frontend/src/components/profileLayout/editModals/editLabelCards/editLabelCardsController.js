import React, { Component } from "react";
import EditLabelCardsView from "./editLabelCardsView";

export default class EditLabelCardsController extends Component {
  render() {
    return <EditLabelCardsView {...this.props} />;
  }
}

