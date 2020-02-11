import React, { Component } from "react";
import { generateCommonFormProps } from "../../../../functions/formTools";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import { Dropdown, Label, Form, Checkbox } from "semantic-ui-react";

import FormButtonsController from "../formButtons/formButtonsController";

import "../form.css";

/**
 * UI for forms that consist of a single list of tags
 */
class SkillsTagFormView extends Component {
  static propTypes = {
    /** The custom items that have been added */
    addedItems: PropTypes.arrayOf(PropTypes.object),
    /** the current array of selected values */
    currentValue: PropTypes.array,
    /** The name for the dropdown field*/
    dropdownName: PropTypes.string,
    /** Object containing a key value pair of [dropdownName]:<dropdown option object> */
    editProfileOptions: PropTypes.objectOf(PropTypes.object),
    /** The function to handle adding an item for the form */
    handleAddItem: PropTypes.func,
    /** The function to handle canceling editing a profile on /profile route*/
    handleCancel: PropTypes.func,
    /** The function to handle updates to this form */
    handleChange: PropTypes.func,
    /** The function to handle going to the next form on /setup route */
    handleNext: PropTypes.func,
    /** The functiion to handle going to the previous form on /setup route */
    handlePrevious: PropTypes.func,
    /** The function to handle registering on the /setup route */
    handleRegister: PropTypes.func,
    /** react-intl translation object */
    intl: PropTypes.object,
    /** Whether this is a form on the /setup route that is not the last form or not */
    isEarlyRegister: PropTypes.bool,
    /** The function to handle a form submit event */
    onSubmit: PropTypes.func,
    /** Object containing the current profile info */
    profileInfo: PropTypes.object,
    /** Whether there are too many items being selected or not */
    tooManyItems: PropTypes.bool,
    /** Whether or not to allow the user to add their own tags */
    useCustomTags: PropTypes.bool
  };

  render() {
    const {
      handleCancel,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      onSubmit,
      dropdownName,
      tooManyItems
    } = this.props;

    this.generateProps = generateCommonFormProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        {tooManyItems && (
          <Label pointing="below">
            You have selected too many items from this dropdown.
          </Label>
        )}

        {/* Add display to mentorshipSkills card only */}

        {/* {dropdownName == "mentorshipSkills" && (
          <Form.Field {...this.generateProps("isMentor", Checkbox)} toggle />
        )} */}

        {this.renderSkillsDropdown()}
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

  renderSkillsDropdown() {
    const { intl, handleChange, handleAddItem } = this.props;
    const {
      addedItems,
      currentValue,
      dropdownName,
      editProfileOptions,
      // isMentorSkillsDisabled,
      profileInfo,
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

    const dropdownOptionsSkills = editProfileOptions["skills"];
    const dropdownOptionsCategories = editProfileOptions["categories"];

    console.log("hdsjabfhjsdbhjfsbdakufdskjanfkjds", dropdownOptionsCategories);
    return (
      <React.Fragment>
        <Form.Field>
          <label>Category</label>
          <Dropdown
            className="editTagsDropdown"
            {...valueProp}
            allowAdditions={Boolean(useCustomTags)}
            fluid
            icon={useCustomTags ? null : "dropdown"}
            label={intl.formatMessage({
              id:
                "profile." +
                dropdownName.replace(/([A-Z])/g, ".$1").toLowerCase()
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
            options={dropdownOptionsCategories}
            search
            selection={true}
            // disabled={isMentorSkillsDisabled}
          />
        </Form.Field>
        <Form.Field>
          <label>Skill</label>
          <Dropdown
            className="editTagsDropdown"
            {...valueProp}
            allowAdditions={Boolean(useCustomTags)}
            fluid
            icon={useCustomTags ? null : "dropdown"}
            label={intl.formatMessage({
              id:
                "profile." +
                dropdownName.replace(/([A-Z])/g, ".$1").toLowerCase()
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
            options={dropdownOptionsSkills}
            search
            selection={true}
            // disabled={isMentorSkillsDisabled}
          />
        </Form.Field>
      </React.Fragment>
    );
  }
}

export default injectIntl(SkillsTagFormView);
