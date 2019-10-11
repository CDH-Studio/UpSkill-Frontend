import React, { Component } from "react";
import { injectIntl } from "react-intl";

import HomeLayoutController from "../components/homeLayout/homeLayoutController";

class Advanced extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = { showAdvancedOptions: false };
  }

  render() {
    const { changeLanguage, intl, keycloak } = this.props;
    return (
      <HomeLayoutController
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        typeButtonText={intl.formatMessage({
          id: "basic.search.button.text"
        })}
        typeButtonURL={"/home"}
        redirectFunction={this.goto}
        showAdvancedFields={true}
      />
    );
  }
}

export default injectIntl(Advanced);
