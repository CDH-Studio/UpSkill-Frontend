import React, { Component } from "react";
import { Menu, Segment, Grid, Dimmer, Image } from "semantic-ui-react";
import NavigationBarView from "../navigationBar/navigationBarView";

import animatedLogo from "../../assets/animatedLogo.gif";
import { FormattedMessage } from "react-intl";

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
          <Grid.Column width={3}>
            <Segment inverted color="blue">
              <Menu fluid vertical color="blue" inverted>
                <Menu.Item
                  name="dashboard"
                  content={<FormattedMessage id="admin.dashboard" />}
                  active={activeItem === "dashboard"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="user"
                  content={<FormattedMessage id="admin.user.plural" />}
                  active={activeItem === "user"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="skill"
                  content={<FormattedMessage id="admin.skill.plural" />}
                  active={activeItem === "skill"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="competency"
                  content={<FormattedMessage id="admin.competency.plural" />}
                  active={activeItem === "competency"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="diploma"
                  content={<FormattedMessage id="admin.diploma.plural" />}
                  active={activeItem === "diploma"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="school"
                  content={<FormattedMessage id="admin.school.plural" />}
                  active={activeItem === "school"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Segment>
          </Grid.Column>
          <Grid.Column stretched width={13}>
            <Segment loading={loading} color="blue">
              {this.props.children}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
