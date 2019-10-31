import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Dropdown, Select, Modal, Button } from "semantic-ui-react";

import EditHistoryItemController from "../editHistoryItem/editHistoryItemController";
import GenericEditModalController, {
  generateCommonProps
} from "../genericEditModalController.js";
import "./editHistoryModal.css";

class EditHistoryView extends Component {
  render() {
    const {
      addItem,
      handleApply,
      buttonBackgroundColor,
      buttonClass,
      buttonColor,
      items,
      name,
      removeItemByIndex,
      updateListField
    } = this.props;
    return (
      <Modal
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
          <div>
            {items.map((item, index) => (
              <EditHistoryItemController
                item={item}
                index={index}
                removeItemByIndex={removeItemByIndex}
                updateListField={updateListField}
              />
            ))}
          </div>

          <div className="historyModalButtonContainer">
            <Button
              color="green"
              onClick={e => {
                addItem();
              }}
              className="addHistoryItemButton"
            >
              Add Item
            </Button>
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

export default injectIntl(EditHistoryView);
