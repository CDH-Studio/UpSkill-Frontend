import React, { Component } from "react";
import EditGenericModalView from "./genericEditModalView";

export default class EditGenericModalController extends Component {
  render() {
    return <EditGenericModalView {...this.props} />;
  }
}

EditGenericModalController.defaultProps={
  buttonBackgroundColor:null,
  buttonClass:"innerButton",
  buttonColor:"#555555",
}