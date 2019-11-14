import React, { Component } from "react";
import axios from "axios";
import { Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

import { formatOptions } from "../../../../editForms/common/formTools";
import EditGenericModalView from "./editModalView";
import config from "../../../../../config";
const { backendAddress } = config;

export default class EditGenericModalController extends Component {
  constructor(props) {
    super(props);
    const { editOptionPaths } = this.props;

    this.state = { editProfileOptions: editOptionPaths ? null : {} };

    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    if (this.state.editProfileOptions === null) {
      this.getEditOptions();
    }
  }

  async getEditOptions() {
    const { editOptionPaths } = this.props;
    let editProfileOptions = {};
    for (let key in editOptionPaths) {
      editProfileOptions[key] = formatOptions(
        (await axios.get(backendAddress + editOptionPaths[key])).data
      );
    }

    this.setState({
      editProfileOptions: editProfileOptions
    });
  }

  render() {
    return (
      <EditGenericModalView
        {...this.props}
        handleOpen={this.handleOpen}
        editProfileOptions={this.state.editProfileOptions}
      />
    );
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
  } else if (control === DateInput) {
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
