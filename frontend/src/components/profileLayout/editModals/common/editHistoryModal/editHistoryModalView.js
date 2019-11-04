import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form,Grid, Dropdown, Select, Modal, Button } from "semantic-ui-react";

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
        trigger={renderEditButton(
          buttonBackgroundColor,
          buttonClass,
          buttonColor
        )}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
          <Grid style={{paddingBottom:"1em"}} divided="vertically">
            {items.map((item, index) => (
              <EditHistoryItemController
                item={item}
                index={index}
                removeItemByIndex={removeItemByIndex}
                updateListField={updateListField}
              />
            ))}
          </Grid>

          <Button
              color="green"
              fluid
              onClick={e => {
                addItem();
              }}
              className="addHistoryItemButton"
            >
              Add Item
            </Button>

          <div className="historyModalButtonContainer">
            
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

export default injectIntl(EditHistoryModalView);
