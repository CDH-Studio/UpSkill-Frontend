import React, { Component } from "react";
import "./labeledCard.css";

import { Card } from "semantic-ui-react";

export default class LabeledCardView extends Component {
  render() {
    const { labelText, contentText } = this.props;

    return (
      <Card style={{ marginBottom: "11px", marginTop: "0px" }} fluid>
        <p
          style={{
            padding: "0.5em",
            position: "absolute",
            left: "0px",
            height: "100%",
            width: this.props.labelWidth,
            backgroundColor: this.props.labelColor,
            borderRadius: "0.28571429rem  0.28571429rem  0 0 !important",
            color: "white",
            margin: "0px"
          }}
        >
          {labelText}
        </p>
        <Card.Content
          style={{
            position: "relative",
            left: this.props.labelWidth,
            width: "50%",
            padding: "0.25em"
          }}
        >
          {contentText}
        </Card.Content>
      </Card>
    );
  }
}
