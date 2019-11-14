import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dropdown, Form, Label } from "semantic-ui-react";

import FormButtonsController from "../formButtons/formButtonsController";
import { generateCommonProps } from "../formTools";
//import "./editTagFormModal.css";

class EditTagFormView extends Component {
  constructor(props) {
    super(props);

    this.state = { addedItems: [] };

    this.generateCommonProps = generateCommonProps.bind(this, this.props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e, { value }) {
    const allowAdditions = this.props;
    if (allowAdditions) {
      this.setState({
        addedItems: [{ text: value, value: value }, ...this.state.addedItems]
      });
    }
  }

  render() {
    const {
      allowAdditions,
      dropdownName,
      editProfileOptions,
      fields,
      handleApply,
      handleCancle,
      handleChange,
      handleNext,
      handlePrevious,
      handleRegister,
      intl,
      onSubmit,
      profileInfo,
      tooManyItems
    } = this.props;

    let valueProp = {};
    if (allowAdditions) {
      valueProp["value"] = {
        ...(profileInfo[dropdownName] || []),
        ...this.state.addedItems
      };
    } else {
      valueProp["defaultValue"] = profileInfo[dropdownName];
    }

    return (
      <React.Fragment>
        {tooManyItems && (
          <Label pointing="below">
            You have selected too many items from this dropdown.
          </Label>
        )}
        <Dropdown
          className="editTagFormDropdown"
          {...valueProp}
          fluid
          label={intl.formatMessage({
            id:
              "profile." + dropdownName.replace(/([A-Z])/g, ".$1").toLowerCase()
          })}
          multiple
          name={dropdownName}
          onChange={handleChange}
          onAddItem={this.handleAddItem}
          options={editProfileOptions[dropdownName] || []}
          allowAdditions={Boolean(allowAdditions)}
          search
        />

        <FormButtonsController
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
        />
      </React.Fragment>
    );
  }
}
/*if (dropdownControl) { editProfileOptions[dropdownName]
  commonProps.options = editProfileOptions[name];
  commonProps.defaultValue = profileInfo[name];
  commonProps.placeholder = null;
} else 


          <Dropdown
            className="editTagFormDropdown"
            fluid
            multiple
            search
            label={intl.formatMessage({
              id:
                "profile." +
                dropdownName.replace(/([A-Z])/g, ".$1").toLowerCase()
            })}
            name={dropdownName}
            onChange={handleChange}
            options={[
              { key: "aa", description: "aa", text: "aa" },
              { key: "bb", description: "bb", text: "bb" },
              { key: "cc", description: "cc", text: "cc" }
            ]}
            defaultValue={["aa"]}
            placeholder={null}
          />


*/

export default injectIntl(EditTagFormView);
