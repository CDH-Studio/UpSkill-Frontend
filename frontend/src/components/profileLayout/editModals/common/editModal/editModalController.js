import React, { Component } from "react";
import EditGenericModalView from "./editModalView";
import { Checkbox, Select } from "semantic-ui-react";

export default class EditGenericModalController extends Component {
  render() {
    return <EditGenericModalView {...this.props} />;
  }
}

export const generateCommonProps = (name, control, props, dropdownControl) => {
  const { profileInfo, dropdownOptions, intl, updateField } = props;

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
    commonProps.options = dropdownOptions[name];
    commonProps.defaultValue = profileInfo[name];
    commonProps.placeholder = null;
  } else if (control === Checkbox) {
    commonProps.defaultChecked = profileInfo[name];
  } else if (control === Select) {
    commonProps.options = dropdownOptions[name];
  }

  return commonProps;
};

EditGenericModalController.defaultProps = {
  buttonBackgroundColor: "rgba(0,0,0,0.05)",
  buttonClass: "innerButton",
  buttonColor: "#555555"
};
