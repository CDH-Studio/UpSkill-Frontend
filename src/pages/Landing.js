import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div>
        <h2>This is our Splash page!!!</h2>
        <Button
          animated="fade"
          color="violet"
          inverted
          onClick={() => this.goto("/secured/home")}
        >
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name="sign-in" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
