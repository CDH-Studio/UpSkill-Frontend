import HomeLayoutView from "./homeLayoutView";
import React, { Component } from "react";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * showAdvancedFields       False                   Whether or not to show advanced options or just skills
 * redirectButtonURL        "/advanced"             the url of the page to redirect to
 * redirectButtonText       "Advanced search"       The text to display on the redirect button
 * redirectFunction         None                    The function to call with the redirectButtonURL
 */
export default class HomeLayoutController extends Component {
  render() {
    return (
      <HomeLayoutView
        showAdvancedFields={this.props.showAdvancedFields}
        redirectButtonURL={this.props.redirectButtonURL}
        redirectButtonText={this.props.redirectButtonText}
        redirectFunction={this.props.redirectFunction}
      />
    );
  }
}

HomeLayoutController.defaultProps = {
  showAdvancedFields: false,
  redirectButtonURL: "/advanced",
  redirectButtonText: "Advanced search"
};
