import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class Home extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Button
          color="orange"
          inverted
          onClick={() => this.goto("/about")}
          animated="fade"
        >
          <Button.Content visible>Go to About</Button.Content>
          <Button.Content hidden>
            <Icon name="question" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
