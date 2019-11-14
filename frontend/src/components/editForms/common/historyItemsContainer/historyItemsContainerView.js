import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Modal, Button } from "semantic-ui-react";

//import { renderEditButton } from "../editModal/editModalView";
import FormButtonsController from "../formButtons/formButtonsController";
import HistoryItemFormController from "../historyItemForm/historyItemFormController";
import "./historyItemsContainer.css";

class EditHistoryModalView extends Component {
  render() {
    const {
      addItem,
      buttons,
      contentName,
      handleApply,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      headerName,
      items,
      name,
      onSubmit,
      removeItem,
      setContainerField,
      subheaderName
    } = this.props;
    return (
      <Grid divided="vertically">
        {items.map((item, index) => (
          <HistoryItemFormController
            addItem={addItem}
            contentName={contentName}
            headerName={headerName}
            index={index}
            item={item}
            removeItem={removeItem}
            setContainerField={setContainerField}
            subheaderName={subheaderName}
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
        <FormButtonsController
          handleApply={handleApply}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
        />
      </Grid>
    );
  }
}

export default injectIntl(EditHistoryModalView);
