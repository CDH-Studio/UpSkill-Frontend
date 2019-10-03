import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, Advanced, Home, Landing, Results } from "./pages/index";
import Keycloak from "keycloak-js";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then(authenticated => {
        this.setState({ keycloak: keycloak, authenticated: authenticated });
      });
  }

  goto = link => history.push(link);

  render() {
    //If NOT using some version of Internet Explorer
    if (!/MSIE|Trident/.test(window.navigator.userAgent)) {
      document.body.style =
        "background: linear-gradient(22.5deg, rgba(67, 67, 67, 0.02) 0%, rgba(67, 67, 67, 0.02) 29%,rgba(47, 47, 47, 0.02) 29%, rgba(47, 47, 47, 0.02) 37%,rgba(23, 23, 23, 0.02) 37%, rgba(23, 23, 23, 0.02) 55%,rgba(182, 182, 182, 0.02) 55%, rgba(182, 182, 182, 0.02) 69%,rgba(27, 27, 27, 0.02) 69%, rgba(27, 27, 27, 0.02) 71%,rgba(250, 250, 250, 0.02) 71%, rgba(250, 250, 250, 0.02) 100%),linear-gradient(67.5deg, rgba(117, 117, 117, 0.02) 0%, rgba(117, 117, 117, 0.02) 14%,rgba(199, 199, 199, 0.02) 14%, rgba(199, 199, 199, 0.02) 40%,rgba(33, 33, 33, 0.02) 40%, rgba(33, 33, 33, 0.02) 48%,rgba(135, 135, 135, 0.02) 48%, rgba(135, 135, 135, 0.02) 60%,rgba(148, 148, 148, 0.02) 60%, rgba(148, 148, 148, 0.02) 95%,rgba(53, 53, 53, 0.02) 95%, rgba(53, 53, 53, 0.02) 100%),linear-gradient(135deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 6%,rgba(251, 251, 251, 0.02) 6%, rgba(251, 251, 251, 0.02) 18%,rgba(2, 2, 2, 0.02) 18%, rgba(2, 2, 2, 0.02) 27%,rgba(253, 253, 253, 0.02) 27%, rgba(253, 253, 253, 0.02) 49%,rgba(128, 128, 128, 0.02) 49%, rgba(128, 128, 128, 0.02) 76%,rgba(150, 150, 150, 0.02) 76%, rgba(150, 150, 150, 0.02) 100%),linear-gradient(90deg, #FFF,#FFF);";
    }

    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <Router>
            <div>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/advanced"
                render={routeProps => (
                  <Advanced keycloak={this.state.keycloak} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/home"
                render={routeProps => (
                  <Home keycloak={this.state.keycloak} {...routeProps} />
                )}
              />
              <Route
                exact
                path="/results"
                render={routeProps => (
                  <Results keycloak={this.state.keycloak} {...routeProps} />
                )}
              />
            </div>
          </Router>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}

export default App;
