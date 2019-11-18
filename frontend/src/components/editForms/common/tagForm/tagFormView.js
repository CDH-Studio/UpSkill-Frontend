import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dropdown, Form, Label } from "semantic-ui-react";

import FormButtonsController from "../formButtons/formButtonsController";
import { generateCommonProps } from "../formTools";
//import "./editTagFormModal.css";
import "../form.css";

class EditTagFormView extends Component {
  constructor(props) {
    super(props);

    const { profileInfo, dropdownName } = this.props;

    this.state = {
      addedItems: [],
      currentValue: profileInfo[dropdownName]
        ? profileInfo[dropdownName].map(
            element => element.value || element.text
          ) //if useCustomTags needs to use text as value, otherwise use the value property
        : []
    };

    this.generateCommonProps = generateCommonProps.bind(this, this.props);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddItem(e, { value }) {
    const { useCustomTags } = this.props;

    if (useCustomTags) {
      this.setState(prevState => ({
        addedItems: [{ text: value, value: value }, ...prevState.addedItems]
      }));
    }
  }

  handleChange(e, o) {
    const { handleChange } = this.props;
    this.setState({ currentValue: o.value });
    handleChange && handleChange(e, o);
  }

  render() {
    const {
      useCustomTags,
      dropdownName,
      editProfileOptions,
      fields,
      handleApply,
      handleCancle,
      handleChange,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      intl,
      onSubmit,
      profileInfo,
      tooManyItems
    } = this.props;

    let valueProp = {};
    if (useCustomTags) {
      valueProp["value"] = this.state.currentValue;
    } else {
      valueProp["defaultValue"] =
        profileInfo[dropdownName] &&
        profileInfo[dropdownName].map(element => element.value); //if a dropdown uses custom tags it profile info contains an array of objects with .text, otherwise we use .value
    }

    const dropdownOptions = useCustomTags
      ? [
          ...(profileInfo[dropdownName] || []).map(projectName => ({
            value: projectName.text,
            key: projectName.text,
            text: projectName.text
          })),
          ...this.state.addedItems
        ]
      : editProfileOptions[dropdownName] || [];

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
          icon={useCustomTags ? null : "dropdown"}
          selection={true}
          name={dropdownName}
          noResultsMessage={
            useCustomTags
              ? intl.formatMessage({
                  id: "profile.edit.dropdown.add.items"
                })
              : intl.formatMessage({
                  id: "profile.edit.dropdown.no.results.found"
                })
          }
          onChange={this.handleChange}
          onAddItem={this.handleAddItem}
          options={dropdownOptions}
          allowAdditions={Boolean(useCustomTags)}
          search
        />

        <FormButtonsController
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
          isEarlyRegister={isEarlyRegister}
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
