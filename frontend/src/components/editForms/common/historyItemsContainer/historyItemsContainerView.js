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
      headerName,
      onSubmit,
      items,
      name,
      handleRegister,
      removeItem,
      subheaderName,
      setContainerField,
      handleCancle,
      handleNext,
      handlePrevious
    } = this.props;
    return (
      <Grid divided="vertically">
        {items.map((item, index) => (
          <HistoryItemFormController
            contentName={contentName}
            headerName={headerName}
            index={index}
            item={item}
            removeItem={removeItem}
            addItem={addItem}
            subheaderName={subheaderName}
            setContainerField={setContainerField}
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
          handleRegister={handleRegister}
          handleApply={handleApply}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Grid>
    );
  }
}

export default injectIntl(EditHistoryModalView);
