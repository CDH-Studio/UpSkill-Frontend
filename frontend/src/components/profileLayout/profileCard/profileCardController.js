import React, { Component } from "react";
import ProfileCardView from "./profileCardView";

export default class LabeledCardController extends Component {
  render() {
    return <ProfileCardView {...this.props} />;
  }
}

LabeledCardController.defaultProps = {
  cardName: null
};
