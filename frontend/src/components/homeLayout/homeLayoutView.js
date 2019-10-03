import React, { Component } from "react";
import { Button, Grid, Image } from "semantic-ui-react";

import logo3 from "../../assets/fullLogo3.svg";
import SearchForm from "../searchForm/searchFormController";
import NavigationBar from "../navigationBar/NavigationBarController";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * redirectButtonText       "Advanced search"       The text to display on the redirect button
 * redirectButtonURL        "/advanced"             the url of the page to redirect to
 * redirectFunction         None                    The function to call with the redirectButtonURL
 * showAdvancedFields       False                   Whether or not to show advanced options or just skills
 */
export default class HomeLayoutView extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
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
            <SearchForm showAdvancedFields={this.props.showAdvancedFields} />
          </Grid.Row>
          <Grid.Row style={styles.row}>
            <Button color="violet" style={styles.button}>
              Search
            </Button>
            <Button
              basic
              color="violet"
              onClick={() =>
                this.props.redirectFunction(this.props.redirectButtonURL)
              }
              style={styles.button}
            >
              {this.props.redirectButtonText}
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  button: {
    fontSize: "110%",
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
