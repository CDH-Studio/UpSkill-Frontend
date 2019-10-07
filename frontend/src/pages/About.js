import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class About extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div>
        <h2>About</h2>
        <Button
          animated="fade"
          color="orange"
          inverted
          onClick={() => this.goto("/home")}
        >
          <Button.Content visible>Go to Home</Button.Content>
          <Button.Content hidden>
            <Icon name="home" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
