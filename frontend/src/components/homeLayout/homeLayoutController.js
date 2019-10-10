import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

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
class HomeLayoutController extends Component {
  constructor(props) {
    super(props);

    this.searchQuery = {};
    this.updateSearch = this.updateSearch.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  updateSearch(e, { name, value }) {
    this.searchQuery[name] = value;
  }

  performSearch() {
    this.props.redirectFunction("/results", { searchQuery: this.searchQuery });
  }

  render() {
    return (
      <HomeLayoutView
        changeLanguage={this.props.changeLanguage}
        intl={this.props.intl}
        keycloak={this.props.keycloak}
        performSearch={this.performSearch}
        redirectFunction={this.props.redirectFunction}
        showAdvancedFields={this.props.showAdvancedFields}
        typeButtonURL={this.props.typeButtonURL}
        typeButtonText={this.props.typeButtonText}
        updateSearch={this.updateSearch}
      />
    );
  }
}

HomeLayoutController.defaultProps = {
  typeButtonText: <FormattedMessage id="advanced.search.button.text" />,
  typeButtonURL: "/advanced",
  showAdvancedFields: false
};

export default HomeLayoutController;
