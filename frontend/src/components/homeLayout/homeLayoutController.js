import React, { Component } from "react";

import HomeLayoutView from "./homeLayoutView";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * redirectButtonText       "Advanced search"       The text to display on the redirect button
 * redirectButtonURL        "/advanced"             the url of the page to redirect to
 * redirectFunction         None                    The function to call with the redirectButtonURL
 * showAdvancedFields       False                   Whether or not to show advanced options or just skills
 */
export default class HomeLayoutController extends Component {
  render() {
    return (
      <HomeLayoutView
        keycloak={this.props.keycloak}
        redirectButtonURL={this.props.redirectButtonURL}
        redirectButtonText={this.props.redirectButtonText}
        redirectFunction={this.props.redirectFunction}
        showAdvancedFields={this.props.showAdvancedFields}
      />
    );
  }
}

HomeLayoutController.defaultProps = {
  redirectButtonText: "Advanced search",
  redirectButtonURL: "/advanced",
  showAdvancedFields: false
};
