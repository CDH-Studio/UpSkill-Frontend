import React, { Component } from "react";
import HistoryCardView from "./historyCardView";

export default class HistoryCardController extends Component {
  render() {
    return <HistoryCardView {...this.props} />;
  }
}
