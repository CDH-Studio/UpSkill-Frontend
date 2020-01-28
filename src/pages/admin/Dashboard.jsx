import React, { Component } from "react";
import AdminMenu from "../../components/admin/AdminMenu";
import {
  Segment,
  Header,
  Button,
  Icon,
  Image,
  Statistic,
  Divider
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
    this.state = {
      type: "dashboard",
      loading: true,
      data: {
        dashboardCount: { user: 0, exFeeder: 0, flagged: 0, inactive: 0 }
      }
    };
  }

  componentDidMount() {
    document.title = this.getDisplayType(true) + " - Admin | UpSkill";
    this.setState({ loading: true });
    axios.get(backendAddress + "api/admin/" + this.state.type).then(res => {
      this.setState({
        data: res.data,
        loading: false
      });
    });
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
    const { type, loading, data } = this.state;
    console.log(data);

    const dashboardCount = data.dashboardCount;
    // const { user, profile, flagged, inactive } = this.state.data;
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
        <Divider />
        <Statistic.Group color="blue" widths={16}>
          <Statistic>
            <Statistic.Value>
              <Icon name="user circle" color="green" /> {dashboardCount.user}
            </Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.total.users" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="user circle" color="grey" /> {dashboardCount.inactive}
            </Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.inactive.users" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="hide circle" color="red" /> {dashboardCount.flagged}
            </Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.flagged.profiles" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="address book circle" color="teal" />{" "}
              {dashboardCount.exFeeder}
            </Statistic.Value>
            <Statistic.Label>
              {/* <Icon
                circular
                inverted
                color="blue"
                size="large"
                name="address book"
              /> */}
              <FormattedMessage id="admin.dashboard.ex.feeders" />
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminDashboard);
