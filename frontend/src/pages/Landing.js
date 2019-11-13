import React, { Component } from "react";
import { Redirect } from "react-router-dom";
const loginFunc = require("../../src/functions/login");

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { redirect: <div /> };
    console.log("const redirect", this.state.redirect);
    this.renderRedirect().then(redirect => {
      console.log("State redirect", redirect);
      this.setState({ redirect });
    });
  }

  profileExist = () => {
    return this.props.keycloak.loadUserInfo().then(async userInfo => {
      return loginFunc.createUser(userInfo.email, userInfo.name).then(res => {
        console.log("res", res);
        return res.hasProfile;
      });
    });
    // return false;
  };

  renderRedirect = () => {
    return this.profileExist().then(profileExist => {
      console.log("profile exist", profileExist);

      if (profileExist) {
        console.log(profileExist, "Redirecting to Home");

        return <Redirect to="/home"></Redirect>;
      } else {
        console.log(profileExist, "Redirecting to Profile Generation");
        return <Redirect to="/profile-generation"></Redirect>;
      }
    });
  };

  render() {
    return <div>{this.state.redirect}</div>;
  }
}
