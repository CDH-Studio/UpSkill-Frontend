import React, { Component } from "react";
import LabeledCardView from "./labeledCardView";

export default class LabeledCardController extends Component {
  render() {
    const { labelText, contentText } = this.props;

    return (
      <LabeledCardView
        contentText={contentText}
        labelColor={"#2b2d6e"}
        labelText={labelText}
        labelWidth={"50%"}
        minLabelSize={"30px"}
      />
    );
  }
}
