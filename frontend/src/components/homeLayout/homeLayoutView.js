import React, { Component } from "react";
import { Button, Grid, Image } from "semantic-ui-react";
import logo3 from "../../assets/fullLogo3.svg";
import SearchForm from "../searchForm/searchFormController";

/**
 * A form for creating a search query
 *
 * PROPS:                   DEFAULT VALUE:          DESCRIPTION:
 * showAdvancedFields       False                   Whether or not to show advanced options or just skills
 * redirectButtonURL        "/advanced"             the url of the page to redirect to
 * redirectButtonText       "Advanced search"       The text to display on the redirect button
 * redirectFunction         None                    The function to call with the redirectButtonURL
 */
export default class HomeLayoutView extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row style={styles.row}>
          <Image style={styles.logo} src={logo3} alt="Skillhub" size="large" />
        </Grid.Row>
        <Grid.Row style={styles.row}>
          <SearchForm showAdvancedFields={this.props.showAdvancedFields} />
        </Grid.Row>
        <Grid.Row style={styles.row}>
          <Button style={styles.button} color="orange">
            Search
          </Button>
          <Button
            style={styles.button}
            basic
            color="orange"
            onClick={() =>
              this.props.redirectFunction(this.props.redirectButtonURL)
            }
          >
            {this.props.redirectButtonText}
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}

const styles = {
  logo: {
    paddingTop: "200px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },

  row: {
    padding: "3px",
    width: "800px"
  },

  button: {
    width: "170px",
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "20px",
    fontSize: "110%"
  }
};
