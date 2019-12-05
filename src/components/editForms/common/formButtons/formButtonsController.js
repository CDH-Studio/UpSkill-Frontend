import React, { Component } from "react";

import ModalButtonsView from "./formButtonsView";

export default class ModalButtonsController extends Component {
  render() {
    return <ModalButtonsView {...this.props} />;
  }
}
