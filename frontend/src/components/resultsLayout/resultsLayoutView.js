import React, { Component } from "react";
import SearchFormController from "../searchForm/searchFormController";
import "./resultStyles.css";
import { Icon, Grid } from "semantic-ui-react";
import NavigationBar from "../navigationBar/NavigationBarController";

export default class ResultsLayoutView extends Component {
  constructor(props) {
    super(props);
    this.wideView = true;
    this.state = { displayingSidebar: true };
    this.searchHider = this.searchHider.bind(this);
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
    return (
      <div>
        <NavigationBar keycloak={this.props.keycloak} />
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
              <Grid.Row>content goes here</Grid.Row>
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
}
