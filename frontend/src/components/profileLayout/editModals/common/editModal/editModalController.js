import React, { Component } from "react";
import EditGenericModalView from "./editModalView";
import { Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput, MonthInput } from "semantic-ui-calendar-react";

export default class EditGenericModalController extends Component {
  render() {
    return <EditGenericModalView {...this.props} />;
  }
}

export const generateCommonProps = (name, control, props, dropdownControl) => {
  const { profileInfo, editProfileOptions, intl, updateField, fields } = props;

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
    commonProps.defaultValue = profileInfo[name];
    commonProps.options = editProfileOptions[name];
  } else if (control === Input) {
    commonProps.defaultValue = profileInfo[name];
  } else if (control == DateInput || control == MonthInput) {
    commonProps.value = fields[name];
    commonProps.iconPosition = "right";
    commonProps.closable = true;
    commonProps.dateFormat = "MMM DD YYYY";
  }

  return commonProps;
};

EditGenericModalController.defaultProps = {
  buttonBackgroundColor: "rgba(0,0,0,0.05)",
  buttonClass: "innerButton",
  buttonColor: "#555555"
};
