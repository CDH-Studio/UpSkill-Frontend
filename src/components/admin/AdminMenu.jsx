import React, { Component } from "react";
import { Menu, Segment, Grid, Dimmer, Image, Header } from "semantic-ui-react";
import NavigationBarView from "../navigationBar/navigationBarView";

import animatedLogo from "../../assets/animatedLogo.gif";

export default class AdminMenu extends Component {
  state = { activeItem: this.props.active };

  handleItemClick = (e, { name }) => {
    this.props.goto(name);
  };

  render() {
    const { activeItem } = this.state;
    const { changeLanguage, keycloak, loading } = this.props;

    return (
      <div>
        <Dimmer active={loading}>
          <Image src={animatedLogo} size="tiny" />
        </Dimmer>
        <NavigationBarView
          changeLanguage={changeLanguage}
          keycloak={keycloak}
        />
        <Grid padded="horizontally">
          <Grid.Column width={4}>
            <Segment>
              <Menu fluid vertical color="blue" pointing secondary>
                <Menu.Item
                  name="dashboard"
                  active={activeItem === "dashboard"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="users"
                  active={activeItem === "user"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="skill"
                  active={activeItem === "skill"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="competency"
                  content={"Competencies"}
                  active={activeItem === "competency"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="diploma"
                  content={"Dimplomas"}
                  active={activeItem === "diploma"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="school"
                  content={"Schools"}
                  active={activeItem === "school"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
          </Grid.Column>
          <Grid.Column stretched width="12">
            <Segment loading={loading}>{this.props.children}</Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
