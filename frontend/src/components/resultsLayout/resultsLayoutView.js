import React, { Component } from "react";
import SearchFormController from "../searchForm/searchFormController";
import logo3 from "../../assets/fullLogo3.svg";
import "./resultStyles.css";
import { Icon, Image } from "semantic-ui-react";

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
      document.getElementById("searchSidebar").classList.add("hidden");
    }
    this.wideView = newVal;
  }

  render() {
    return (
      <div>
        <div className="logoBox">
          <Image alt="Skillhub" size="medium" centered src={logo3} />
        </div>
        <div className="sideBar" id="searchSidebar">
          <SearchFormController
            advancedFieldWidth={"300px"}
            primaryFieldWidth={"347px"}
          />
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
            document.getElementById("searchSidebar").classList.add("hidden");
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
            document.getElementById("searchSidebar").classList.remove("hidden");
            this.setState({ displayingSidebar: true });
          }}
        />
      );
    }
  }
}
