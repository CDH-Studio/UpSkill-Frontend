import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Grid, Dropdown, Select, Modal, Button } from "semantic-ui-react";

import { renderEditButton } from "../editModal/editModalView";

import EditHistoryItemController from "../editHistoryItem/editHistoryItemController";
import EditModalController, {
  generateCommonProps
} from "../editModal/editModalController.js";
import "./editHistoryModal.css";

class EditHistoryModalView extends Component {
  render() {
    const {
      addItem,
      buttonBackgroundColor,
      buttonClass,
      buttonColor,
      handleApply,
      items,
      name,
      removeItemByIndex,
      updateListField
    } = this.props;
    return (
      <Modal
        trigger={renderEditButton(
          buttonBackgroundColor,
          buttonClass,
          buttonColor
        )}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
          <Grid divided="vertically" style={{ paddingBottom: "1em" }}>
            {items.map((item, index) => (
              <EditHistoryItemController
                index={index}
                item={item}
                removeItemByIndex={removeItemByIndex}
                updateListField={updateListField}
              />
            ))}
            <Grid.Row style={{ padding: "0px" }}>
              <Button
                color="green"
                onClick={e => {
                  addItem();
                }}
                className="addHistoryItemButton"
              >
                Add Item
              </Button>
            </Grid.Row>
          </Grid>

          <div className="historyModalButtonContainer">
            <Button color="blue" onClick={handleApply} primary>
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

export default injectIntl(EditHistoryModalView);
