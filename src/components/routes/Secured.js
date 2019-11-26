import React, { Component } from "react";
import Keycloak from "keycloak-js";
import { Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Dimmer, Image } from "semantic-ui-react";

import animatedLogo from "../../assets/animatedLogo.gif";

import {
  Advanced,
  Home,
  Results,
  Profile,
  Setup,
  ProfileGeneration
} from "../../pages";

const loginFunc = require("../../functions/login");

const history = createBrowserHistory();

const dimmer = () => {
  return (
    <Dimmer active>
      <Image src={animatedLogo} size="tiny"></Image>
    </Dimmer>
  );
};

class Secured extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      keycloak: null,
      redirect: dimmer()
    };

    this.changeLanguage = this.props.changeLanguage;
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
        return (
          <div>
            {this.state.redirect}
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
              path="/secured/profile-generation"
              component={ProfileGeneration}
            />
            <Route
              exact
              path="/secured/advanced"
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
              path="/secured/home"
              render={routeProps => (
                <Home
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
            <Route
              path="/secured/results"
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
              path="/secured/profile"
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
              path="/secured/setup"
              render={routeProps => (
                <Setup
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
          </div>
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
      if (!profileExist) return <Redirect to="/secured/setup"></Redirect>;
      else return <div />;
    });
  };
}

export default Secured;
