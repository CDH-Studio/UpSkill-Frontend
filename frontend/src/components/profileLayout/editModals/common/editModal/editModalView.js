import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Button, Icon, Modal } from "semantic-ui-react";

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
        style={{
          color: buttonColor
        }}
        name="pencil alternate"
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
        style={{
          color: buttonColor
        }}
        name="pencil alternate"
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
      children,
      handleApply,
      name
    } = this.props;

    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        open={this.state.open}
        onOpen={() => this.setState({ open: true })}
        trigger={renderEditButton(
          buttonBackgroundColor,
          buttonClass,
          buttonColor
        )}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
          {children}
          <div className="modalButtonContainer">
            <Button primary color="blue" onClick={handleApply}>
              Apply
            </Button>
            <Button
              basic
              color="blue"
              onClick={e => this.setState({ open: false })}
            >
              Cancel
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default injectIntl(editModalView);
