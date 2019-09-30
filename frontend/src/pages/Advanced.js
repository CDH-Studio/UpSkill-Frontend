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
        showAdvancedFields={true}
        redirectButtonURL={"/home"}
        redirectButtonText={"Basic search"}
        redirectFunction={this.goto}
      />
    );
  }
}
