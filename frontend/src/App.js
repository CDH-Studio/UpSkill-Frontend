import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Landing } from "./pages/index";
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
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <Router>
            <div>
              <Route exact path="/" component={Landing} />
              <Route
                exact
                path="/home"
                render={keycloak => (
                  <Home keycloak={this.state.keycloak} history={history}></Home>
                )}
              />
              <Route exact path="/about" component={About} />
            </div>
          </Router>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}

export default App;
