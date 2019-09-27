import React, { Component } from "react";

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  render() {
    this.goto("/home");
    return <div></div>;
  }
}
