import React, { Component } from "react";
import { Card } from "semantic-ui-react";

import EditWrapperController from "../editWrapper/editWrapperController";
import "./profileCard.css";

export default class profileCardView extends Component {
  render() {
    const {
      form,
      formName,
      editOptionPaths,
      cardIcon,
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
        form={form}
        formName={formName}
        editOptionPaths={editOptionPaths}
        style={heightStyle}
        wrapperType={wrapperType}
      >
        <Card
          className={className ? className + " profileCard" : "profileCard"}
          fluid
          id={id}
          style={heightStyle}
        >
          <Card.Content>
            {cardName && (
              <h5 className="blueColoredText">
                {cardName} {cardIcon}
              </h5>
            )}
            {children}
          </Card.Content>
        </Card>
      </EditWrapperController>
    );
  }
}
