import React, { Component } from "react";
import HomeLayout from "../components/homeLayout/homeLayoutController";
import { injectIntl } from "react-intl";

class Advanced extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { showAdvancedOptions: false };
  }

  // const ButtonText =

  render() {
    return (
      <HomeLayout
        redirectButtonText={this.props.intl.formatMessage({
          id: "basic.search.button.text"
        })}
        redirectButtonURL={"/home"}
        redirectFunction={this.goto}
        showAdvancedFields={true}
        keycloak={this.props.keycloak}
        changeLanguage={this.props.changeLanguage}
      />
    );
  }
}

export default injectIntl(Advanced);
