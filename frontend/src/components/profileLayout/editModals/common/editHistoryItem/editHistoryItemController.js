import React, { Component } from "react";
import EditHistoryItemView from "./editHistoryItemView";

export default class EditHistoryItemController extends Component {
  render() {
    return <EditHistoryItemView {...this.props} />;
  }
}
