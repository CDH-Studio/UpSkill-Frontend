import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";

class Logout extends Component {
  logout() {
    this.props.history.push("/");
    this.props.keycloak.logout();
  }

  render() {
    return (
      <Button
        style={styles.button}
        basic
        color="orange"
        onClick={() => this.logout()}
      >
        Logout
      </Button>
    );
  }
}
export default withRouter(Logout);

const styles = {
  button: {
    width: "170px",
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "20px",
    fontSize: "110%"
  }
};
