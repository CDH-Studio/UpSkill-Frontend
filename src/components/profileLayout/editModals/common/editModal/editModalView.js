import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dimmer, Icon, Loader, Modal, Grid } from "semantic-ui-react";

import "./editModal.css";

export const renderEditButton = buttonType => {
  return (
    <div className={buttonType ? "editButton " + buttonType : "editButton"}>
      <Icon name="pencil alternate" />
    </div>
  );
};

class editModalView extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { buttonType, handleOpen, name } = this.props;

    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => {
          this.setState({ open: true });
          handleOpen();
        }}
        open={this.state.open}
        trigger={renderEditButton(buttonType)}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>{this.renderContents()}</Modal.Content>
      </Modal>
    );
  }

  renderContents() {
    const { editProfileOptions, form } = this.props;
    if (editProfileOptions === null) {
      return (
        <Dimmer active>
          <Grid>
            <Grid.Row>
              <Loader />
            </Grid.Row>

            <Grid.Row>Gathering edit options...</Grid.Row>
          </Grid>
        </Dimmer>
      );
    } else {
      return (
        form &&
        React.createElement(form, {
          handleCancel: e => this.setState({ open: false }),
          ...this.props
        })
      );
    }
  }
}

export default injectIntl(editModalView);
