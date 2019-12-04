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
      data: { user: 0, exFeeder: 0, flagged: 0, inactive: 0 }
    };
  }

  componentDidMount() {
    // console.log(this.getDisplayType(true));

    document.title = this.getDisplayType(true) + " - Admin | UpSkill";
    this.setState({ loading: true });
    axios.get(backendAddress + "api/admin/" + this.state.type).then(res =>
      this.setState({
        // allData: res.data,
        data: res.data,
        loading: false
      })
    );
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
    // const { user, profile, flagged, inactive } = this.state.data;
    const { changeLanguage, keycloak } = this.props;

    console.log("allData", data);

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
            <Statistic.Value>{data.user}</Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.total.users" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>{data.inactive}</Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.inactive.users" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>{data.flagged}</Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.flagged.profiles" />
            </Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>{data.exFeeder}</Statistic.Value>
            <Statistic.Label>
              <FormattedMessage id="admin.dashboard.ex.feeders" />
            </Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminDashboard);
