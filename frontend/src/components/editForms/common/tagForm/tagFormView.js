import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Dropdown, Form, Label } from "semantic-ui-react";
import FormButtonsController from "../formButtons/formButtonsController";
import { generateCommonProps } from "../formTools";
//import "./editTagFormModal.css";

class EditTagFormView extends Component {
  constructor(props) {
    super(props);

    this.generateCommonProps = generateCommonProps.bind(this, this.props);
  }

  render() {
    const {
      dropdownName,
      handleApply,
      handleChange,
      onSubmit,
      handleCancle,
      handleNext,
      handlePrevious,
      tooManyItems,
      profileInfo,
      handleRegister,
      editProfileOptions,
      intl,
      fields
    } = this.props;
    return (
      <Form>
        <Form.Field>
          {tooManyItems && (
            <Label pointing="below">
              You have selected too many items from this dropdown.
            </Label>
          )}
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
            placeholder={profileInfo[dropdownName]}
            options={editProfileOptions[dropdownName]}
            defaultValue={["1"]}
            placeholder={null}
          />
        </Form.Field>
        <FormButtonsController
          handleRegister={handleRegister}
          handleApply={onSubmit}
          handleCancle={handleCancle}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </Form>
    );
  }
}
/*if (dropdownControl) {
  commonProps.options = editProfileOptions[name];
  commonProps.defaultValue = profileInfo[name];
  commonProps.placeholder = null;
} else */

export default injectIntl(EditTagFormView);
