import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import PropTypes from "prop-types";

import logo3 from "../../assets/fullLogo3.svg";
import SearchForm from "../searchForm/searchFormController";
import NavigationBar from "../navigationBar/navigationBarController";

/**
 * UI for the /home route
 */
class HomeLayoutView extends Component {
  static propTypes = {
    /** Function used to change the language intl-react is using */
    changeLanguage: PropTypes.func.isRequired,
    /** The object representing the keycloak session */
    keycloak: PropTypes.object,
    /** Function to change route */
    redirectFunction: PropTypes.func.isRequired,
    /** Whether should display advanced search form or not */
    showAdvancedFields: PropTypes.bool
  };

  render() {
    const {
      changeLanguage,
      keycloak,
      redirectFunction,
      showAdvancedFields
    } = this.props;

    return (
      <div role="region" aria-labelledby="region1">
        <NavigationBar keycloak={keycloak} changeLanguage={changeLanguage} />
        <Grid centered style={styles.grid}>
          <Grid.Row style={styles.row}>
            <Image
              alt="UpSkill Logo"
              size="large"
              src={logo3}
              style={styles.logo}
            />
          </Grid.Row>
          <Grid.Row style={styles.row}>
            <SearchForm
              maxFormWidth="850px"
              redirectFunction={redirectFunction}
              showAdvancedFields={showAdvancedFields}
              toggleButton
            />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  button: {
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "20px",
    width: "170px"
  },

  grid: {
    margin: "0 auto",
    width: "100%"
  },

  logo: {
    paddingLeft: "50px",
    paddingRight: "50px",
    paddingTop: "200px"
  },

  row: {
    padding: "3px",
    width: "100%"
  }
};

export default HomeLayoutView;
