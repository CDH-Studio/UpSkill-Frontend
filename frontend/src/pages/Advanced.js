import React, { Component } from "react";
import HomeLayout from "../components/homeLayout/homeLayoutController";

export default class Home extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { showAdvancedOptions: false };
  }

  render() {
    return (
      <HomeLayout
        redirectButtonText={"Basic search"}
        redirectButtonURL={"/home"}
        redirectFunction={this.goto}
        showAdvancedFields={true}
      />
    );
  }
}
