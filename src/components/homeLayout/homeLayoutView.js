import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

import logo3 from "../../assets/fullLogo3.svg";
import SearchForm from "../searchForm/searchFormController";
import NavigationBar from "../navigationBar/navigationBarController";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * keycloak                 null                    The keycloak instance being used
 * typeButtonText           "Advanced search"       The text to display on the toggle search type button
 * typeButtonURL            "/secured/advanced"             The url of the page the search type button should redirect to
 * redirectFunction         null                    The function to call with the redirectButtonURL
 * showAdvancedFields       False                   Whether or not to show advanced options or just skills
 */
class HomeLayoutView extends Component {
  render() {
    const {
      changeLanguage,
      keycloak,
      redirectFunction,
      showAdvancedFields
    } = this.props;

    return (
      <div>
        <NavigationBar keycloak={keycloak} changeLanguage={changeLanguage} />
        <Grid centered style={styles.grid}>
          <Grid.Row style={styles.row}>
            <Image
              alt="Skillhub"
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
    width: "100%",
    margin: "0 auto"
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
