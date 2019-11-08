import React, { Component, Profiler } from "react";
import { Redirect } from "react-router-dom";
const loginFunc = require("../../src/functions/login");

export default class Landing extends Component {
  goto = link => this.props.history.push(link);

  profileExist = () => {
    return this.props.keycloak.loadUserInfo().then(async userInfo => {
      const user = await loginFunc.createUser(userInfo.email, userInfo.name);
      console.log("usssseeeerrrr", user);
      alert(user);
    });
  };

  renderRedirect = () => {
    if (this.profileExist()) {
      return <Redirect to="/home"></Redirect>;
    } else {
      return <Redirect to="/profile-generation"></Redirect>;
    }
  };

  render() {
    // this.goto("/home");
    console.log(this.renderRedirect);

    return <div>{this.renderRedirect()}</div>;
  }
}
