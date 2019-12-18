import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Button, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

import FormButtonsController from "../formButtons/formButtonsController";
import "./historyItemsContainer.css";
import "../form.css";

class EditHistoryModalView extends Component {
  render() {
    const {
      addItem,
      contentName,
      editProfileOptions,
      handleApply,
      handleCancel,
      handleNext,
      handlePrevious,
      handleRegister,
      headerName,
      isEarlyRegister,
      itemType,
      items,
      removeItem,
      setContainerField,
      subheaderName
    } = this.props;
    return (
      <Grid divided="vertically">
        {items.map((item, index) =>
          React.createElement(itemType, {
            addItem: addItem,
            contentName: contentName,
            editProfileOptions: editProfileOptions,
            headerName: headerName,
            index: index,
            item: item,
            removeItem: removeItem,
            setContainerField: setContainerField,
            subheaderName: subheaderName
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

            <FormattedMessage id="setup.add.item" />
          </Button>
        </Grid.Row>

        <FormButtonsController
          handleApply={handleApply}
          handleCancel={handleCancel}
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
