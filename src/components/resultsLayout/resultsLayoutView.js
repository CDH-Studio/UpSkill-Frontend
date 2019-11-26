import React, { Component } from "react";
import { Card, Grid, Image, Label, Loader } from "semantic-ui-react";

import tempProfilePicture from "../../assets/tempProfilePicture.png";
import "./resultStyles.css";
import NavigationBar from "../navigationBar/navigationBarController";
import SearchFormController from "../searchForm/searchFormController";
import prepareInfo from "../../functions/prepareInfo";

export default class ResultsLayoutView extends Component {
  constructor(props) {
    super(props);
    this.renderResultCards = this.renderResultCards.bind(this);
  }

  render() {
    const { changeLanguage, keycloak, redirectFunction } = this.props;
    return (
      <div>
        <NavigationBar changeLanguage={changeLanguage} keycloak={keycloak} />
        <SearchFormController
          maxFormWidth="1200px"
          showAdvancedFields={true}
          redirectFunction={redirectFunction}
        />
        <div className="resultContent">
          <Grid>
            <Grid.Row>{this.renderResultCards()}</Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }

  renderResultCards() {
    const { results, redirectFunction } = this.props;

    if (!results) {
      return <Loader />;
    }
    if (results instanceof Error) {
      return (
        "An error was encountered! Please try again.\n\n" + String(results)
      );
    }

    const preparedResults = prepareInfo(results, localStorage.getItem("lang"));

    let cards = [];

    preparedResults.forEach(person => {
      console.log(person);

      cards.push(
        <Card onClick={() => redirectFunction("/profile/" + person.id)}>
          <Card.Content>
            <Image floated="right" size="mini" src={tempProfilePicture} />
            <Card.Header>
              {person.firstName + " " + person.lastName}
            </Card.Header>
            <Card.Meta>{person.jobTitle}</Card.Meta>
          </Card.Content>
          <Card.Content>
            <Label
              style={{ marginBottom: "2px", marginTop: "2px" }}
              color="blue"
            >
              React
            </Label>
          </Card.Content>
        </Card>
      );
    });
    return <Card.Group fluid>{cards}</Card.Group>;
  }
}

//export default injectIntl(ResultsLayoutView);
