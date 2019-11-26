import React, { Component } from "react";
import Keycloak from "keycloak-js";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { IntlProvider } from "react-intl";

import { Dimmer, Loader, Image } from "semantic-ui-react";

import messages_en from "./i18n/en_CA.json";
import messages_fr from "./i18n/fr_CA.json";
import "./App.css";

import animatedLogo from "./assets/animatedLogo.gif";

import {
  About,
  Advanced,
  Home,
  Landing,
  Results,
  Profile,
  Setup,
  ProfileGeneration
} from "./pages";

import moment from "moment";
import "moment/min/moment-with-locales";
import "moment/locale/en-ca";
import "moment/locale/fr-ca";

const loginFunc = require("../src/functions/login");

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

const dimmer = () => {
  return (
    <Dimmer active>
      <Image src={animatedLogo} size="tiny"></Image>
    </Dimmer>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    let language = localStorage.getItem("lang");
    i18nConfig.messages = language === "fr" ? messages_fr : messages_en;
    moment.locale(language + "-ca");

    this.state = {
      authenticated: false,
      keycloak: null,
      locale: language,
      redirect: dimmer()
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then(authenticated => {
        this.setState({ keycloak: keycloak, authenticated: authenticated });
        this.renderRedirect().then(redirect => {
          this.setState({ redirect: redirect });
        });
      });
  }

  goto = link => history.push(link);

  render() {
    //If NOT using some version of Internet Explorer
    if (!/MSIE|Trident/.test(window.navigator.userAgent)) {
      document.body.style = "background-color: #eeeeee";
    }

    const keycloak = this.state.keycloak;
    if (keycloak) {
      if (this.state.authenticated) {
        console.log(keycloak);
        return (
          <IntlProvider
            locale={i18nConfig.locale}
            messages={i18nConfig.messages}
            formats={i18nConfig.formats}
          >
            <Router>
              {this.state.redirect}
              <div>
                {/* Added for copying token ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <div>
                {/* Added for copying token ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                {/* <div>
                  <form>
                    <textarea
                      ref={textarea => (this.textArea = textarea)}
                      value={keycloak.token}
                    />
                  </form>
                  {document.queryCommandSupported("copy") && (
                    <div>
                      <button onClick={this.copyToClipboard}>Copy</button>
                      {this.state.copySuccess}
                    </div>
                  )}
                </div>
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}

                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Landing
                      keycloak={keycloak}
                      changeLanguage={this.changeLanguage}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profile-generation"
                  component={ProfileGeneration}
                />
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
                <Route
                  exact
                  path="/setup"
                  render={routeProps => (
                    <Setup
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
    return <div>{dimmer()}</div>;
  }
  //Added for copying token ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    switch (lang) {
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

    moment.locale(lang + "-ca");

    i18nConfig.locale = localStorage.getItem("lang");
    this.setState({ locale: localStorage.getItem("lang") });
  }

  profileExist = () => {
    return this.state.keycloak.loadUserInfo().then(async userInfo => {
      return loginFunc.createUser(userInfo.email, userInfo.name).then(res => {
        // console.log("res", res);
        return res.hasProfile;
      });
    });
  };

  renderRedirect = () => {
    return this.profileExist().then(profileExist => {
      if (!profileExist) return <Redirect to="/setup"></Redirect>;
      else return <div />;
    });
  };
}

export default App;
