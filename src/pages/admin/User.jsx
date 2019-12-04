import React, { Component } from "react";
import AdminMenu from "../../components/admin/AdminMenu";
import {
  Table,
  Header,
  Button,
  Icon,
  Input,
  Pagination,
  Dropdown
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";
import { FormattedMessage, injectIntl } from "react-intl";

import config from "../../config";
import moment from "moment";
const { backendAddress } = config;

const ELEMENT_PER_PAGE = 10;

class AdminUser extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = {
      type: "user",
      column: null,
      allData: null,
      data: null,
      direction: null,
      id: null,
      modal: null,
      loading: true,
      description: null,
      state: null,
      country: null,
      activePage: 1
    };
  }

  componentDidMount() {
    console.log(this.getDisplayType(true));

    document.title = this.getDisplayType(true) + " - Admin | UpSkill";
    this.setState({ loading: true });
    axios.get(backendAddress + "api/admin/" + this.state.type).then(res =>
      this.setState({
        allData: res.data,
        data: _.sortBy(res.data, ["firstName"]),
        loading: false,
        column: "name",
        direction: "ascending"
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

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    const dbAttributes = {
      name: ["firstName"],
      registered: ["createdAt"],
      tenure: ["tenure.descriptionEn"],
      profStatus: ["flagged", "user.inactive"]
    };

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, dbAttributes[clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  handleFilter = (e, { value }) => {
    const newData = this.state.allData.filter(
      option =>
        (option.user.name &&
          option.user.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        (option.tenure &&
          option.tenure.descriptionEn
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        (option.tenure &&
          option.tenure.descriptionFr
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        ((option.flagged || option.user.inactive) &&
          this.profileStatusValue(option.user.inactive, option.flagged)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            ))
    );
    this.setState({
      data: _.sortBy(newData, [this.state.column]),
      activePage: 1
    });
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

  profileStatusValue = (inactive, flagged) => {
    if (inactive) return "Inactive";
    else if (flagged) return "Hidden";
    return "Active";
  };

  renderStatusDropdown = (id, inactive, flagged) => {
    const options = [
      { value: "Active", text: "Active", key: "active" },
      { value: "Inactive", text: "Inactive", key: "inactive" },
      { value: "Hidden", text: "Hidden", key: "flagged" }
    ];
    return (
      <center>
        <Dropdown
          placeholder="Select Friend"
          fluid
          selection
          value={this.profileStatusValue(inactive, flagged)}
          options={options}
        />
      </center>
    );
  };

  generateTable = (column, direction, pageData) => {
    return (
      <Table sortable celled fixed striped color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "name" ? direction : null}
              onClick={this.handleSort("name")}
            >
              <FormattedMessage id="admin.name" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "pri" ? direction : null}
              onClick={this.handleSort("pri")}
            >
              <FormattedMessage id="admin.pri" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "registered" ? direction : null}
              onClick={this.handleSort("registered")}
            >
              <FormattedMessage id="admin.registered" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "tenure" ? direction : null}
              onClick={this.handleSort("tenure")}
            >
              <FormattedMessage id="admin.tenure" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "profStatus" ? direction : null}
              onClick={this.handleSort("profStatus")}
              width={
                this.props.intl.formatMessage({ id: "lang.code" }) === "fr"
                  ? 3
                  : 4
              }
            >
              <FormattedMessage id="admin.prooeStatus" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(pageData, ({ id, user, createdAt, tenure, flagged }) => (
            <Table.Row key={id} error={flagged} disabled={user.inactive}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{Math.floor(Math.random() * 100000000)}</Table.Cell>
              <Table.Cell>{moment(createdAt).format("LLL")}</Table.Cell>
              <Table.Cell>
                {tenure ? (
                  this.props.intl.formatMessage({ id: "language.code" }) ===
                  "en" ? (
                    tenure.descriptionEn
                  ) : (
                    tenure.descriptionFr
                  )
                ) : (
                  <FormattedMessage id="admin.none" />
                )}
              </Table.Cell>
              <Table.Cell style={{ overflow: "visible" }}>
                {this.renderStatusDropdown(id, user.inactive, flagged)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RENDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  render() {
    const { type, column, data, direction, loading, activePage } = this.state;
    const { changeLanguage, keycloak } = this.props;

    let totalPages = 0;
    if (data) totalPages = Math.ceil(data.length / ELEMENT_PER_PAGE);

    const dataStart = ELEMENT_PER_PAGE * (activePage - 1);
    const dataEnd = dataStart + ELEMENT_PER_PAGE;

    const pageData = _.slice(data, dataStart, dataEnd);

    return (
      <AdminMenu
        active={type}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        loading={loading}
        goto={this.goto}
      >
        <Header as="h1">{this.getDisplayType(true)}</Header>

        <Input onChange={this.handleFilter} label="Filter" icon="filter" />
        <Button
          color="green"
          floated="right"
          onClick={() => this.handleClick("add")}
        >
          <Icon name="add" />
          <FormattedMessage id="admin.add" />
        </Button>

        {this.generateTable(column, direction, pageData)}

        <center>
          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={this.handlePaginationChange}
            boundaryRange="2"
            siblingRange="2"
            firstItem={{
              content: <Icon name="angle double left" color="blue" />,
              icon: true
            }}
            lastItem={{
              content: <Icon name="angle double right" color="blue" />,
              icon: true
            }}
            prevItem={{
              content: <Icon name="angle left" color="blue" />,
              icon: true
            }}
            nextItem={{
              content: <Icon name="angle right" color="blue" />,
              icon: true
            }}
          />
        </center>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminUser);