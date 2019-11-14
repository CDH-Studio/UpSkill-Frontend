import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Select, Input, Dropdown } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editPrimaryInformation.css";

import PrimaryInformationFormController from "../../../editForms/primaryInformationForm/primaryInformationFormController";

/*
const generateTempProps = (name, control, props, dropdownControl) => {
  const { profileInfo, editProfileOptions, intl, updateField } = props;

  //convert camelcase to `.` seperated and add `profile.` to beginning
  let intlId = "profile." + name.replace(/([A-Z])/g, ".$1").toLowerCase();

  let commonProps = {
    control: control,
    fluid: true,
    label: intl.formatMessage({ id: intlId }),
    name: name,
    onChange: updateField,
    placeholder: profileInfo[name]
  };

  if (dropdownControl) {
    commonProps.options = editProfileOptions[name];
    commonProps.defaultValue = profileInfo[name];
    commonProps.placeholder = null;
  } else if (control === Checkbox) {
    commonProps.defaultChecked = profileInfo[name];
  } else if (control === Select) {
    commonProps.options = editProfileOptions[name];
  }

  return commonProps;
};*/

class EditPrimaryInformationView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
        editOptionPaths={{
          location: "api/option/getLocation"
        }}
        form={PrimaryInformationFormController}
      />
    );
  }
}

export default injectIntl(EditPrimaryInformationView);
