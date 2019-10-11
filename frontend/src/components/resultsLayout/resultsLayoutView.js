import React, { Component } from "react";
import SearchFormController from "../searchForm/searchFormController";
import { Card, Grid, Icon } from "semantic-ui-react";

import "./resultStyles.css";
import NavigationBar from "../navigationBar/navigationBarController";

export default class ResultsLayoutView extends Component {
  constructor(props) {
    super(props);
    this.wideView = true;
    this.state = { displayingSidebar: true };
    this.searchHider = this.searchHider.bind(this);
    this.renderResultCards = this.renderResultCards.bind(this);
  }

  componentDidMount() {
    this.searchHider();
    window.addEventListener("resize", this.searchHider);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.searchHider);
  }

  searchHider() {
    let newVal = window.innerWidth > 800;

    if (this.wideView && this.state.displayingSidebar && !newVal) {
      this.setState({ displayingSidebar: false });
      document.getElementById("bodyContent").classList.add("searchless");
    }
    this.wideView = newVal;
  }

  render() {
    const { changeLanguage, keycloak } = this.props;
    return (
      <div>
        <NavigationBar changeLanguage={changeLanguage} keycloak={keycloak} />
        <div className="bodyContent" id="bodyContent">
          <div className="sideBar">
            <SearchFormController
              advancedFieldWidth={"300px"}
              invertLabels={true}
              primaryFieldWidth={"347px"}
            />
          </div>
          <div className="resultContent">
            <Grid>
              <Grid.Row>{this.renderResultCards()}</Grid.Row>
            </Grid>
          </div>
        </div>
        {this.renderSidebarButton()}
      </div>
    );
  }

  renderSidebarButton() {
    if (this.state.displayingSidebar) {
      return (
        <Icon
          className="closeSidebarButton"
          name="angle left"
          onClick={() => {
            document.getElementById("bodyContent").classList.add("searchless");
            this.setState({ displayingSidebar: false });
          }}
        />
      );
    } else {
      return (
        <Icon
          className="openSidebarButton"
          name="angle right"
          onClick={() => {
            document
              .getElementById("bodyContent")
              .classList.remove("searchless");
            this.setState({ displayingSidebar: true });
          }}
        />
      );
    }
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
    for (var i = 0; i < results.data.data.length; i++) {
      let person = results.data.data[i];
      cards.push(
        <Card
          header={person.givenName + " " + person.surname}
          meta={person.title.en}
          description={"Lorem ipsum dolor sit amet, wingardium leviosa"}
        />
      );
    }
    return <Card.Group>{cards}</Card.Group>;
  }
}
