import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import EditWrapperController from "../editWrapper/editWrapperController";

export default class profileCardView extends Component {
  render() {
    const { button, cardName, children, id, wrapperType } = this.props;
    return (
      <EditWrapperController button={button} wrapperType={wrapperType}>
        <Card fluid id={id}>
          <Card.Content>
            {cardName && <h5 className="violetColored">{cardName}</h5>}
            {children}
          </Card.Content>
        </Card>
      </EditWrapperController>
    );
  }
}
