import React, { Component } from "react";
import Keycloak from "keycloak-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";

import messages_en from "./i18n/en_CA.json";
import messages_fr from "./i18n/fr_CA.json";
import "./App.css";
import { About, Advanced, Home, Landing, Results } from "./pages/index";

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

    const keycloak = this.state.keycloak;
    if (keycloak) {
      console.log(
        "Render: ",
        localStorage.getItem("lang"),
        localLang,
        i18nConfig.locale
      );

      if (this.state.authenticated) {
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
              </div>
            </Router>
          </IntlProvider>
        );
      } else return <div>Unable to authenticate!</div>;
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
