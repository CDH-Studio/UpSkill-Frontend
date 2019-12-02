import React, { Component } from "react";

import _ from "lodash";
import AdminOptionEdit from "../../components/admin/AdminOptionEdit";
import { Table } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class AdminCompetency extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  generateTable = (column, direction, pageData, callbacks) => {
    return (
      <Table sortable celled fixed striped color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === "english" ? direction : null}
              onClick={callbacks.handleSort("english")}
            >
              <FormattedMessage id="language.english" />
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === "french" ? direction : null}
              onClick={callbacks.handleSort("french")}
            >
              <FormattedMessage id="language.french" />
            </Table.HeaderCell>
            <Table.HeaderCell width="3">Edit Or Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(pageData, ({ id, descriptionEn, descriptionFr }) => (
            <Table.Row key={id}>
              <Table.Cell>{descriptionEn}</Table.Cell>
              <Table.Cell>{descriptionFr}</Table.Cell>
              <Table.Cell>
                {callbacks.renderEditButtons(id, descriptionEn, descriptionFr)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminOptionEdit
        type="competency"
        goto={this.goto}
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        generateTable={this.generateTable}
      />
    );
  }
}

export default AdminCompetency;
