import React, { Component } from "react";
import HistoryCardView from "./historyCardView";

export default class HistoryCardController extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
  }

  handleToggleExpanded() {
    this.setState(oldState => ({ expanded: !oldState.expanded }));
  }

  render() {
    return (
      <HistoryCardView
        expanded={this.state.expanded}
        handleToggleExpanded={this.handleToggleExpanded}
        {...this.props}
      />
    );
  }
}
