import React, { Component } from "react";
import { Button, Dropdown, Grid, Image } from "semantic-ui-react";
import logo3 from "../assets/fullLogo3.svg";

const options = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" }
];
export default class Home extends Component {
  goto = link => this.props.history.push(link);

  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Row style={styles.row}>
            <Image
              style={styles.logo}
              src={logo3}
              alt="Skillhub"
              size="large"
            ></Image>
          </Grid.Row>
          <Grid.Row style={styles.row}>
            <Dropdown
              placeholder="Select desired skills..."
              fluid
              multiple
              search
              selection
              options={options}
              style={styles.dropdown}
            />
          </Grid.Row>
          <Grid.Row style={styles.row}>
            <Button style={styles.button} color="orange">
              Search
            </Button>
            <Button style={styles.button} basic color="orange">
              Advanced Search
            </Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const styles = {
  dropdown: {
    textAlign: "left",
    width: "800px"
  },

  logo: {
    paddingTop: "200px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },

  row: {
    padding: "3px"
  },

  button: {
    width: "170px",
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "20px",
    fontSize: "110%"
  }
};
