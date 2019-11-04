import React, { Component } from "react";
import "./labeledCard.css";

import { Card } from "semantic-ui-react";

export default class LabeledCardView extends Component {
  render() {
    const { labelText, contentText } = this.props;

    return (
      <Card className="labeledCard" fluid>
        <p
          className="label"
          style={{
            width: this.props.labelWidth,
            backgroundColor: this.props.labelColor
          }}
        >
          {labelText}
        </p>
        <Card.Content style={{ left: this.props.labelWidth }}>
          {contentText}
        </Card.Content>
      </Card>
    );
  }
}
