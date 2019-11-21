import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dimmer, Icon, Loader, Modal, Grid } from "semantic-ui-react";

import "./editModal.css";

export const renderEditButton = (
  buttonBackgroundColor,
  buttonClass,
  buttonColor
) => {
  if (!buttonBackgroundColor) {
    return (
      <Icon
        className={buttonClass}
        name="pencil alternate"
        style={{
          color: buttonColor
        }}
      />
    );
  }

  return (
    <div
      className={buttonClass}
      style={{
        backgroundColor: buttonBackgroundColor,
        borderRadius: "12px",
        padding: "1px 3px 2px 5px"
      }}
    >
      <Icon
        name="pencil alternate"
        style={{
          color: buttonColor
        }}
      />
    </div>
  );
};

class editModalView extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const {
      buttonBackgroundColor,
      buttonClass,
      buttonColor,
      handleOpen,
      name
    } = this.props;

    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => {
          this.setState({ open: true });
          handleOpen();
        }}
        open={this.state.open}
        trigger={renderEditButton(
          buttonBackgroundColor,
          buttonClass,
          buttonColor
        )}
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
      return React.createElement(form, {
        handleCancle: e => this.setState({ open: false }),
        ...this.props
      });
    }
  }
}

export default injectIntl(editModalView);
