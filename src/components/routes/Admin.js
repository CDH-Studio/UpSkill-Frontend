import React, { Component } from "react";
import Keycloak from "keycloak-js";
import { Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Dimmer, Image } from "semantic-ui-react";

import animatedLogo from "../../assets/animatedLogo.gif";

import {
  AdminSkill,
  AdminCompetency,
  AdminDiploma,
  AdminSchool,
  AdminUser
} from "../../pages/admin";

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
      keycloak: null
    };

    this.changeLanguage = this.props.changeLanguage;
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
              path="/admin/"
              render={() => <Redirect to="/admin/dashboard" />}
            />
            <Route
              exact
              path="/admin/skill"
              render={routeProps => (
                <AdminSkill
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/admin/competency"
              render={routeProps => (
                <AdminCompetency
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/admin/diploma"
              render={routeProps => (
                <AdminDiploma
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/admin/school"
              render={routeProps => (
                <AdminSchool
                  keycloak={keycloak}
                  changeLanguage={this.changeLanguage}
                  {...routeProps}
                />
              )}
            />
            <Route
              exact
              path="/admin/user"
              render={routeProps => (
                <AdminUser
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
}

export default Secured;
