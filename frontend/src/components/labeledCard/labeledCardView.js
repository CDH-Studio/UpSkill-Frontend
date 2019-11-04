import React, { Component } from "react";
import "./labeledCard.css";

import { Card, Label, Grid } from "semantic-ui-react";

export default class LabeledCardView extends Component {
  render() {
    const { labelText, contentText } = this.props;

    return (
      <Grid style={{ height: "3em", margin: "0px", padding: "0px" }}>
        <Grid.Column width={7} style={{ textAlign: "center", padding: "0px" }}>
          <Label
            color="blue"
            style={{ fontSize: "12pt", fontWeight: "normal" }}
          >
            {labelText}
          </Label>
        </Grid.Column>
        <Grid.Column width={9} style={{ padding: "0px" }}>
          {contentText}
        </Grid.Column>
      </Grid>
    );
  }
}

/*
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
*/
