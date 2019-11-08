import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Modal, Button } from "semantic-ui-react";

import { renderEditButton } from "../editModal/editModalView";

import EditHistoryItemController from "../editHistoryItem/editHistoryItemController";
import "./editHistoryModal.css";

class EditHistoryModalView extends Component {
  render() {
    const {
      addItem,
      buttonBackgroundColor,
      buttonClass,
      buttonColor,
      contentName,
      handleApply,
      headerName,
      items,
      name,
      removeItemByIndex,
      subheaderName,
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
          <Grid divided="vertically">
            {items.map((item, index) => (
              <EditHistoryItemController
                contentName={contentName}
                headerName={headerName}
                index={index}
                item={item}
                removeItemByIndex={removeItemByIndex}
                subheaderName={subheaderName}
                updateListField={updateListField}
              />
            ))}
            <Grid.Row>
              <Button
                className="addHistoryItemButton"
                color="green"
                onClick={e => {
                  addItem();
                }}
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
