import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Button, Modal } from "semantic-ui-react";

import "./genericEditModal.css";

class genericEditModalView extends Component {
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
        trigger={
          <p
            className={buttonClass}
            style={{
              backgroundColor: buttonBackgroundColor,
              color: buttonColor
            }}
          >
            [<FormattedMessage id="profile.edit" />]
          </p>
        }
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
          {children}
          <div className="modalButtonContainer">
            <Button primary color="blue" onClick={handleApply}>
              Apply
            </Button>
            <Button
              color="blue"
              onClick={e => this.setState({ open: false })}
              secondary
            >
              Cancel
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default injectIntl(genericEditModalView);
