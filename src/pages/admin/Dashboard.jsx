import React, { Component } from "react";
import AdminMenu from "../../components/admin/AdminMenu";
import {
  Table,
  Header,
  Button,
  Icon,
  Image,
  Statistic
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";
import moment from "moment";
import { FormattedMessage, injectIntl } from "react-intl";
import config from "../../config";
const { backendAddress } = config;

class AdminDashboard extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = { type: "dashboard", loading: true };
  }

  componentDidMount() {
    // console.log(this.getDisplayType(true));

    document.title = this.getDisplayType(true) + " - Admin | UpSkill";
    this.setState({ loading: false });
    // axios.get(backendAddress + "api/admin/" + this.state.type).then(res =>
    //   this.setState({
    //     allData: res.data,
    //     data: _.sortBy(res.data, ["firstName"]),
    //     loading: false,
    //     column: "name",
    //     direction: "ascending"
    //   })
    // );
  }

  getDisplayType = plural => {
    if (plural)
      return this.props.intl.formatMessage({
        id: "admin." + this.state.type + ".plural",
        defaultMessage: this.state.type
      });

    return this.props.intl.formatMessage({
      id: "admin." + this.state.type + ".singular",
      defaultMessage: this.state.type
    });
  };

  render() {
    const { type, loading } = this.state;
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminMenu
        active={type}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        loading={loading}
        goto={this.goto}
      >
        <Header as="h1">{this.getDisplayType(true)}</Header>
        <Statistic.Group>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Saves</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>
              Three
              <br />
              Thousand
            </Statistic.Value>
            <Statistic.Label>Signups</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="plane" />5
            </Statistic.Value>
            <Statistic.Label>Flights</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Image src="/images/avatar/small/joe.jpg" inline circular />
              42
            </Statistic.Value>
            <Statistic.Label>Team Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminDashboard);
