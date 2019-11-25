import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Modal, Button } from "semantic-ui-react";

import { renderEditButton } from "../editModal/editModalView";

import HistoryItemsContainerController from "../../../../editForms/common/historyItemsContainer/historyItemsContainerController";

import EditHistoryItemController from "../editHistoryItem/editHistoryItemController";
import "./editHistoryModal.css";

import EditModalController from "../editModal/editModalController";

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
    /*
         <Modal
        trigger={renderEditButton(
          buttonBackgroundColor,
          buttonClass,
          buttonColor
        )}
      >
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
          <HistoryItemsContainerController items={items} />
        </Modal.Content>
      </Modal>
    */
    return (
      <EditModalController
        name={name}
        items={items}
        form={HistoryItemsContainerController}
      />
    );
  }
}

export default injectIntl(EditHistoryModalView);
