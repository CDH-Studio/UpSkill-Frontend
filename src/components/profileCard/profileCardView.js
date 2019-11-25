import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class profileCardController extends Component {
  render() {
    const {firstName, lastName, title, email, organizationList, phoneNumber}
    <Card>
      <Card.Content>
        <h2>{firstName + ' ' + lastName}</h2>
        <h3>lastName</h3>
        {email}
        {phoneNumber}
      </Card.Content>
    </Card>;
  }
}
