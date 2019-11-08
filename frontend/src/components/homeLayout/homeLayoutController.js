import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import HomeLayoutView from "./homeLayoutView";

const loginFunc = require("../../functions/login");

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
    // To add a user into Users table
    this.props.keycloak.loadUserInfo().then(async userInfo => {
      console.log("Hello");

      console.log(await loginFunc.createUser(userInfo.email, userInfo.name));
      console.log("hiii");
      console.log(userInfo);
      console.log("idddddddddd", localStorage.getItem("userId"));
    });

    this.searchQuery = {};
    this.updateSearch = this.updateSearch.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  updateSearch(e, { name, value }) {
    this.searchQuery[name] = value;
  }

  performSearch() {
    const { redirectFunction } = this.props;

    redirectFunction("/results", { searchQuery: this.searchQuery });
  }

  render() {
    const {
      changeLanguage,
      intl,
      keycloak,
      redirectFunction,
      showAdvancedFields,
      typeButtonText,
      typeButtonURL
    } = this.props;

    return (
      <HomeLayoutView
        changeLanguage={changeLanguage}
        intl={intl}
        keycloak={keycloak}
        performSearch={this.performSearch}
        redirectFunction={redirectFunction}
        showAdvancedFields={showAdvancedFields}
        typeButtonText={typeButtonText}
        typeButtonURL={typeButtonURL}
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
