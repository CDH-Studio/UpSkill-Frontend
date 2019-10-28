import React, { Component } from "react";
import LabeledCardView from "./labeledCardView";

export default class LabeledCardController extends Component {
  render() {
    const { labelText, contentText } = this.props;

    return (
      <LabeledCardView
        labelWidth={"50%"}
        minLabelSize={"30px"}
        labelColor={"#6435C9"}
        labelText={labelText}
        contentText={contentText}
      />
    );
  }
}