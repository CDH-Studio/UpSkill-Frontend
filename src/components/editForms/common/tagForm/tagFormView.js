import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dropdown, Label, Form } from "semantic-ui-react";

import FormButtonsController from "../formButtons/formButtonsController";

import "../form.css";

/**
 * UI for forms that consist of a single list of tags
 */
class TagFormView extends Component {
  render() {
    const {
      addedItems,
      currentValue,
      dropdownName,
      editProfileOptions,
      handleAddItem,
      handleCancel,
      handleChange,
      handleNext,
      handlePrevious,
      handleRegister,
      intl,
      isEarlyRegister,
      onSubmit,
      profileInfo,
      tooManyItems,
      useCustomTags
    } = this.props;

    let valueProp = {};
    if (useCustomTags) {
      valueProp["value"] = currentValue;
    } else {
      valueProp["defaultValue"] =
        profileInfo[dropdownName] &&
        profileInfo[dropdownName].map(element => element.value || element); //if a dropdown uses custom tags it profile info contains an array of objects with .text, otherwise we use .value
    }

    const dropdownOptions = useCustomTags
      ? [
          ...(profileInfo[dropdownName] || []).map(projectName => {
            let projectValue = projectName.text || projectName;
            return {
              value: projectValue,
              key: projectValue,
              text: projectValue
            };
          }),
          ...addedItems
        ]
      : editProfileOptions[dropdownName] || [];

    return (
      <Form onSubmit={onSubmit}>
        {tooManyItems && (
          <Label pointing="below">
            You have selected too many items from this dropdown.
          </Label>
        )}

        <Dropdown
          className="editTagsDropdown"
          {...valueProp}
          allowAdditions={Boolean(useCustomTags)}
          fluid
          icon={useCustomTags ? null : "dropdown"}
          label={intl.formatMessage({
            id:
              "profile." + dropdownName.replace(/([A-Z])/g, ".$1").toLowerCase()
          })}
          multiple
          name={dropdownName}
          noResultsMessage={
            useCustomTags
              ? intl.formatMessage({ id: "profile.edit.dropdown.add.items" })
              : intl.formatMessage({
                  id: "profile.edit.dropdown.no.results.found"
                })
          }
          onAddItem={handleAddItem}
          onChange={handleChange}
          options={dropdownOptions}
          search
          selection={true}
        />

        <FormButtonsController
          handleApply={onSubmit}
          handleCancel={handleCancel}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
          isEarlyRegister={isEarlyRegister}
        />
      </Form>
    );
  }
}

export default injectIntl(TagFormView);
