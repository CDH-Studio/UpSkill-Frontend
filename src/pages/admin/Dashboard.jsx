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
        <Table color="blue">
          <Statistic.Group>
            <Statistic>
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>
                <FormattedMessage id="admin.dashboard.total.users" />
              </Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>6</Statistic.Value>
              <Statistic.Label>
                <FormattedMessage id="admin.dashboard.inactive.users" />
              </Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>5</Statistic.Value>
              <Statistic.Label>
                <FormattedMessage id="admin.dashboard.flagged.profiles" />
              </Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>42</Statistic.Value>
              <Statistic.Label>
                <FormattedMessage id="admin.dashboard.team.members" />
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Table>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminDashboard);
