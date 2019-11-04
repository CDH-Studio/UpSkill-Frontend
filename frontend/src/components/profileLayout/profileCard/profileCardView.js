import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import EditWrapperController from "../editWrapper/editWrapperController";
import './profileCard.css';

export default class profileCardView extends Component {
  render() {
    const {
      button,
      cardName,
      children,
      className,
      fullHeight,
      id,
      wrapperType
    } = this.props;

    const heightStyle = fullHeight ? { height: "100%" } : {};

    return (
      <EditWrapperController
        button={button}
        style={heightStyle}
        wrapperType={wrapperType}
      >
        <Card fluid className={className ? className + " profileCard": 'profileCard'} id={id} style={heightStyle}>
          <Card.Content>
            {cardName && <h5 className="blueColoredText">{cardName}</h5>}
            {children}
          </Card.Content>
        </Card>
      </EditWrapperController>
    );
  }
}
