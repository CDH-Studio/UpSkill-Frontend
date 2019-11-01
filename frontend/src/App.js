import React, { Component } from "react";
import Keycloak from "keycloak-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";

import messages_en from "./i18n/en_CA.json";
import messages_fr from "./i18n/fr_CA.json";
import "./App.css";

import {
  About,
  Advanced,
  Home,
  Landing,
  Results,
  Profile
} from "./pages/index";

let localLang = (() => {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  }
  localStorage.setItem("lang", "en");
  return localStorage.getItem("lang");
})();

let i18nConfig = {
  locale: localLang,
  messages: messages_en,
  formats: {
    number: {
      CAD: {
        style: "currency",
        currency: "USD",
        currencyDisplay: "symbol"
      }
    }
  }
};

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    let language = localStorage.getItem("lang");
    i18nConfig.messages = language === "fr" ? messages_fr : messages_en;

    this.state = {
      authenticated: false,
      keycloak: null,
      locale: language
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    /*keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then(authenticated => {
        this.setState({ keycloak: keycloak, authenticated: authenticated });
      });*/
  }

  goto = link => history.push(link);

  render() {
    //If NOT using some version of Internet Explorer
    if (!/MSIE|Trident/.test(window.navigator.userAgent)) {
      document.body.style = "background-color: #f8f8f8";
    }

    const keycloak = this.state.keycloak;
    if (true) {
      //keycloak) {
      if (true) {
        //this.state.authenticated) {
        console.log(keycloak);
        return (
          <IntlProvider
            locale={i18nConfig.locale}
            messages={i18nConfig.messages}
            formats={i18nConfig.formats}
          >
            <Router>
              <div>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/advanced"
                  render={routeProps => (
                    <Advanced
                      keycloak={keycloak}
                      changeLanguage={this.changeLanguage}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/home"
                  render={routeProps => (
                    <Home
                      keycloak={keycloak}
                      changeLanguage={this.changeLanguage}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/results"
                  render={routeProps => (
                    <Results
                      keycloak={keycloak}
                      changeLanguage={this.changeLanguage}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profile"
                  render={routeProps => (
                    <Profile
                      keycloak={keycloak}
                      changeLanguage={this.changeLanguage}
                      {...routeProps}
                    />
                  )}
                />
              </div>
            </Router>
          </IntlProvider>
        );
      } else {
        return <div>Unable to authenticate!</div>;
      }
    }
    return <div>Initializing Keycloak...</div>;
  }

  changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    switch (localStorage.getItem("lang")) {
      case "fr":
        i18nConfig.messages = messages_fr;
        break;
      case "en":
        i18nConfig.messages = messages_en;
        break;
      default:
        i18nConfig.messages = messages_en;
        break;
    }

    i18nConfig.locale = localStorage.getItem("lang");
    this.setState({ locale: localStorage.getItem("lang") });
  }
}

export default App;
