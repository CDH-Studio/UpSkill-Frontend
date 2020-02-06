import React, { Component } from "react";
import AdminMenu from "../../components/admin/AdminMenu";
import {
  Segment,
  Header,
  Button,
  Icon,
  Image,
  Statistic,
  Divider,
  Loader,
  Card
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";
import moment from "moment";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart
} from "recharts";

import config from "../../config";
const { backendAddress } = config;

const skillColours = ["#8C2336", "#6A9BA6", "#F28907", "#BF935E", "#BF3434"];

const competencyColours = [
  "#003f5c",
  "#58508d",
  "#bc5090",
  "#ff6361",
  "#ffa600"
];

const developmentGoalColours = [
  "#FF4400",
  "#F7DA00",
  "#07748C",
  "#E1DAD2",
  "#8E0000"
];

class AdminDashboard extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = {
      type: "dashboard",
      loading: true,
      data: null
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

    if (data) {
      // Skills Count:
      const skillsCount = data.skillCount;

      const topFiveSkills = [];

      for (let i = 0; i < 5; i++) {
        const skill = skillsCount[i];

        topFiveSkills.push({
          name:
            this.props.intl.formatMessage({ id: "language.code" }) === "en"
              ? skill.descriptionEn
              : skill.descriptionFr,
          count: parseInt(skill.countOccurences)
        });
      }

      // Competencies Count:
      const competenciesCount = data.compCount;

      const topFiveCompetencies = [];

      for (let i = 0; i < 5; i++) {
        const competency = competenciesCount[i];

        topFiveCompetencies.push({
          name:
            this.props.intl.formatMessage({ id: "language.code" }) === "en"
              ? competency.descriptionEn
              : competency.descriptionFr,
          count: parseInt(competency.countOccurences)
        });
      }

      // Development Goals Count:
      const developmentGoalsCount = data.developCount;

      const topFiveDevelopmentGoals = [];

      for (let i = 0; i < 5; i++) {
        const developmentGoal = developmentGoalsCount[i];

        topFiveDevelopmentGoals.push({
          name:
            this.props.intl.formatMessage({ id: "language.code" }) === "en"
              ? developmentGoal.descriptionEn
              : developmentGoal.descriptionFr,
          count: parseInt(developmentGoal.countOccurences)
        });
      }

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
                <Icon name="user circle" color="grey" />{" "}
                {dashboardCount.inactive}
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
                <FormattedMessage id="admin.dashboard.ex.feeders" />
              </Statistic.Label>
            </Statistic>
          </Statistic.Group>

          <Card fluid>
            <Card.Content>
              <Card.Header>Commonalities</Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Group>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Common Skills</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <BarChart
                      width={1000}
                      height={500}
                      layout="vertical"
                      data={topFiveSkills}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 100,
                        bottom: 5
                      }}
                      barCategoryGap="20%"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        type="number"
                        label={{
                          value: "# of Occurences",
                          position: "insideBottomRight",
                          offset: 0,
                          dy: 2
                        }}
                      />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="count">
                        {topFiveSkills.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={skillColours[index]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Common Competencies</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <BarChart
                      width={1000}
                      height={500}
                      layout="vertical"
                      data={topFiveCompetencies}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 100,
                        bottom: 5
                      }}
                      barCategoryGap="20%"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        type="number"
                        label={{
                          value: "# of Occurences",
                          position: "insideBottomRight",
                          offset: 0,
                          dy: 2
                        }}
                      />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="count">
                        {topFiveCompetencies.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={competencyColours[index]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </Card.Content>
                </Card>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Common Development Goals</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <BarChart
                      width={1000}
                      height={500}
                      layout="vertical"
                      data={topFiveDevelopmentGoals}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 100,
                        bottom: 5
                      }}
                      barCategoryGap="20%"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        type="number"
                        label={{
                          value: "# of Occurences",
                          position: "insideBottomRight",
                          offset: 0,
                          dy: 2
                        }}
                      />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="count">
                        {topFiveDevelopmentGoals.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={developmentGoalColours[index]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Card.Content>
          </Card>
        </AdminMenu>
      );
    } else {
      return <div />;
    }
  }
}

export default injectIntl(AdminDashboard);
