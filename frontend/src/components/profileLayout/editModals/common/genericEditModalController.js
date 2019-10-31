import React, { Component } from "react";
import EditGenericModalView from "./genericEditModalView";
import { Checkbox, Dropdown, Select } from "semantic-ui-react";

export default class EditGenericModalController extends Component {
  render() {
    return <EditGenericModalView {...this.props} />;
  }
}

export const generateCommonProps = (name, control, props) => {
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
  if (control === Checkbox) {
    commonProps.defaultChecked = profileInfo[name];
  } else if (control === Select) {
    commonProps.options = dropdownOptions[name];
  } else if (control === Dropdown) {
    commonProps.options = dropdownOptions[name];
    commonProps.defaultValue = profileInfo[name];
    commonProps.placeholder = null;
  }

  return commonProps;
};

EditGenericModalController.defaultProps = {
  buttonBackgroundColor: null,
  buttonClass: "innerButton",
  buttonColor: "#555555"
};
