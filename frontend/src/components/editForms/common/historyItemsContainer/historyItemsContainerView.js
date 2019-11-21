import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Button, Icon } from "semantic-ui-react";

import FormButtonsController from "../formButtons/formButtonsController";
import "./historyItemsContainer.css";
import "../form.css";

class EditHistoryModalView extends Component {
  render() {
    const {
      addItem,
      contentName,
      handleApply,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      headerName,
      items,
      removeItem,
      setContainerField,
      subheaderName,
      isEarlyRegister,
      editProfileOptions,
      itemType
    } = this.props;
    return (
      <Grid divided="vertically">
        {items.map((item, index) =>
          React.createElement(itemType, {
            addItem: addItem,
            contentName: contentName,
            headerName: headerName,
            index: index,
            item: item,
            removeItem: removeItem,
            setContainerField: setContainerField,
            subheaderName: subheaderName,
            editProfileOptions: editProfileOptions
          })
        )}

        <Grid.Row>
          <Button
            className="addHistoryItemButton"
            color="green"
            onClick={e => {
              addItem();
            }}
          >
            <Icon name="add" />
            Add Item
          </Button>
        </Grid.Row>
        <FormButtonsController
          handleApply={handleApply}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
          isEarlyRegister={isEarlyRegister}
        />
      </Grid>
    );
  }
}

export default injectIntl(EditHistoryModalView);
