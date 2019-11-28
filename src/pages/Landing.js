import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div style={{ width: "100%" }}>
        <center>
          <h2 style={{ marginBottom: "100px", marginTop: "100px" }}>
            Welcome to Upskill
          </h2>
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
        </center>
      </div>
    );
  }
}
