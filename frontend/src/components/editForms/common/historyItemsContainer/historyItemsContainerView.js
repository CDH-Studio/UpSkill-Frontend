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
      buttons,
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
        <Grid.Row>{buttons}</Grid.Row>
      </Grid>
    );
  }
}

export default injectIntl(EditHistoryModalView);
