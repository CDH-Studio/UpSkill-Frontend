import React, { Component } from "react";
import AdminMenu from "../../components/admin/menu";
import {
  Table,
  Modal,
  Header,
  Button,
  Icon,
  Input,
  Form,
  Confirm
} from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";
import { FormattedMessage, injectIntl } from "react-intl";

import config from "../../config";
const { backendAddress } = config;

class AdminSkill extends Component {
  goto = (link, state) => this.props.history.push(link, state);

  constructor(props) {
    super(props);
    this.state = {
      column: null,
      allData: null,
      data: null,
      direction: null,
      id: null,
      modal: null,
      loading: true,
      english: null,
      french: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(backendAddress + "api/admin/options/skill").then(res =>
      this.setState({
        allData: res.data,
        data: _.sortBy(res.data, ["descriptionEn"]),
        loading: false,
        column: "english",
        direction: "ascending"
      })
    );
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    const dbAttributes = { english: "descriptionEn", french: "descriptionFr" };

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [dbAttributes[clickedColumn]]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  handleEditChange = (e, { name, value }) => this.setState({ [name]: value });

  handleChange = (e, { value }) => {
    const newData = this.state.allData.filter(
      skill =>
        (skill.descriptionEn &&
          skill.descriptionEn
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )) ||
        (skill.descriptionFr &&
          skill.descriptionFr
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
    this.setState({ data: _.sortBy(newData, [this.state.column]) });
  };

  handleClick = (type, id, en, fr) => {
    this.setState({ id: id, modal: type, english: en, french: fr });
  };

  handleSubmitEdit = () => {
    const { id, english, french } = this.state;

    const url = backendAddress + "api/admin/options/skill/" + id;
    this.setState({ loading: true });
    axios
      .put(url, { descriptionEn: english, descriptionFr: french })
      .then(() => {
        this.setState({ id: null, english: null, french: null, modal: null });
        window.location.reload();
      });
  };

  handleSubmitDelete = () => {
    const { id } = this.state;

    const url = backendAddress + "api/admin/options/skill/" + id;
    this.setState({ loading: true });
    axios.delete(url).then(() => {
      this.setState({ id: null, english: null, french: null, modal: null });
      window.location.reload();
    });
  };

  handleSubmitAdd = () => {
    const { english, french } = this.state;

    const url = backendAddress + "api/admin/options/skill";
    this.setState({ loading: true });
    axios
      .post(url, { descriptionEn: english, descriptionFr: french })
      .then(() => {
        this.setState({ id: null, english: null, french: null, modal: null });
        window.location.reload();
      });
  };

  renderEditButtons = (id, en, fr) => {
    return (
      <div>
        <Button
          animated="fade"
          color="blue"
          onClick={() => this.handleClick("edit", id, en, fr)}
        >
          <Button.Content visible>Edit</Button.Content>
          <Button.Content hidden>
            <Icon name="edit" />
          </Button.Content>
        </Button>
        <Button
          animated="fade"
          color="red"
          inverted
          onClick={() => this.handleClick("delete", id, en, fr)}
        >
          <Button.Content visible>Delete</Button.Content>
          <Button.Content hidden>
            <Icon name="x" />
          </Button.Content>
        </Button>
      </div>
    );
  };

  editModal = () => {
    const { modal, english, french } = this.state;
    return (
      <Modal
        size="small"
        open={modal === "edit"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content="Edit Skill" as="h2" />
        <Modal.Content>
          <Form onSubmit={() => alert()}>
            <Form.Field>
              <label>English</label>
              <Input
                placeholder="English"
                name="english"
                value={english}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>French</label>
              <Input
                placeholder="French"
                name="french"
                value={french}
                onChange={this.handleEditChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            inverted
            onClick={() => this.setState({ modal: null })}
          >
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={this.handleSubmitEdit}>
            <Icon name="checkmark" /> Apply
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  deleteModal = () => {
    const { modal, english, french } = this.state;

    return (
      <Modal
        size="small"
        open={modal === "delete"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content="Delete Skill" as="h2" />
        <Modal.Content>
          <h5>
            Are you sure you want to delete "{english} / {french}"?
          </h5>
        </Modal.Content>

        <Modal.Actions>
          <Button
            color="green"
            floated="right"
            onClick={this.handleSubmitDelete}
            style={{ marginTop: "18px", marginBottom: "18px" }}
          >
            <Icon name="trash" /> Delete
          </Button>
          <Button
            color="red"
            inverted
            floated="right"
            onClick={() => this.setState({ modal: null })}
            style={{ marginTop: "18px", marginBottom: "18px" }}
          >
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  addModal = () => {
    const { modal, english, french } = this.state;
    return (
      <Modal
        size="small"
        open={modal === "add"}
        onClose={() => this.setState({ id: null, modal: null })}
        dimmer="blurring"
        closeIcon
      >
        <Header content="Add Skill" as="h2" />
        <Modal.Content>
          <Form onSubmit={() => alert()}>
            <Form.Field>
              <label>English</label>
              <Input
                placeholder="English"
                name="english"
                value={english}
                onChange={this.handleEditChange}
              />
            </Form.Field>
            <Form.Field>
              <label>French</label>
              <Input
                placeholder="French"
                name="french"
                value={french}
                onChange={this.handleEditChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            inverted
            onClick={() => this.setState({ modal: null })}
          >
            <Icon name="remove" /> Cancel
          </Button>
          <Button color="green" onClick={this.handleSubmitAdd}>
            <Icon name="add" /> Add
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  render() {
    const { column, data, direction, loading } = this.state;
    const { changeLanguage, keycloak } = this.props;

    return (
      <AdminMenu
        active="skills"
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        loading={loading}
      >
        {this.editModal()}
        {this.deleteModal()}
        {this.addModal()}

        <Input onChange={this.handleChange} label="Filter" icon="filter" />
        <Button
          color="green"
          floated="right"
          onClick={() => this.handleClick("add")}
        >
          <Icon name="add" /> Add
        </Button>
        <Table sortable celled fixed striped color="blue">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "english" ? direction : null}
                onClick={this.handleSort("english")}
              >
                <FormattedMessage id="language.english" />
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "french" ? direction : null}
                onClick={this.handleSort("french")}
              >
                <FormattedMessage id="language.french" />
              </Table.HeaderCell>
              <Table.HeaderCell>Edit Or Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ id, descriptionEn, descriptionFr }) => (
              <Table.Row key={id}>
                <Table.Cell>{descriptionEn}</Table.Cell>
                <Table.Cell>{descriptionFr}</Table.Cell>
                <Table.Cell>
                  {this.renderEditButtons(id, descriptionEn, descriptionFr)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </AdminMenu>
    );
  }
}

export default injectIntl(AdminSkill);
