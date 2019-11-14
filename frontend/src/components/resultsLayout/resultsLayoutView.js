import React, { Component } from "react";
import { Card, Grid, Image, Label } from "semantic-ui-react";

import tempProfilePicture from "../../assets/tempProfilePicture.png";
import "./resultStyles.css";
import NavigationBar from "../navigationBar/navigationBarController";

export default class ResultsLayoutView extends Component {
  constructor(props) {
    super(props);
    this.renderResultCards = this.renderResultCards.bind(this);
  }

  render() {
    const { changeLanguage, keycloak } = this.props;
    return (
      <div>
        <NavigationBar changeLanguage={changeLanguage} keycloak={keycloak} />
        <div className="resultContent">
          <Grid>
            <Grid.Row>{this.renderResultCards()}</Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }

  renderResultCards() {
    const { results } = this.props;

    if (!results) {
      return null;
    }
    if (results instanceof Error) {
      return (
        "An error was encountered! Please try again.\n\n" + String(results)
      );
    }

    let cards = [];

    results.data.forEach(person => {
      console.log(person);

      cards.push(
        <Card>
          <Card.Content>
            <Image floated="right" size="mini" src={tempProfilePicture} />
            <Card.Header>{person.givenName + " " + person.surname}</Card.Header>
            <Card.Meta>{person.title.en}</Card.Meta>
          </Card.Content>
          <Card.Content>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="purple"
            >
              React
            </Label>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="purple"
            >
              Javascript
            </Label>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="purple"
            >
              CSS
            </Label>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="grey"
            >
              Redux
            </Label>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="grey"
            >
              Database management
            </Label>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="grey"
            >
              Python
            </Label>
          </Card.Content>
        </Card>
      );
    });
    return <Card.Group fluid>{cards}</Card.Group>;
  }
}

//export default injectIntl(ResultsLayoutView);
