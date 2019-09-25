import React, { Component } from "react";
import { Button, Icon, Dropdown } from "semantic-ui-react";

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
        <h2 style={styles.title}>Home</h2>
        <Dropdown
          placeholder="Skillzzz"
          fluid
          multiple
          search
          selection
          options={options}
          style={styles.dropdown}
        />
        <Button
          color="orange"
          inverted
          onClick={() => this.goto("/about")}
          animated="fade"
        >
          <Button.Content visible>Go to About</Button.Content>
          <Button.Content hidden>
            <Icon name="question" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}

const styles = {
  title: {
    color: "#f24405",
    float: "center"
  },
  dropdown: {
    text_align: "center"
  }
};
