import React, { Component } from "react";
import { Checkbox, Input, Select } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";
import axios from "axios";

import config from "../../../config";
const { backendAddress } = config;

export const generateCommonProps = (props, name, control, tempField) => {
  const {
    editProfileOptions,
    fields,
    getCurrentValue,
    intl,
    onFieldChange,
    unchangeableInfo,
    onTempFieldChange,
    profileInfo,
    updateField
  } = props;

  //convert camelcase to `.` seperated and add `profile.` to beginning
  let intlId = "profile." + name.replace(/([A-Z])/g, ".$1").toLowerCase();
  const hasUnchangableValue = unchangeableInfo && unchangeableInfo[name]; // && unchangeableInfo !== "";

  let commonProps = {
    control: control,
    fluid: true,
    label: intl.formatMessage({ id: intlId }),
    name: name,
    onChange: tempField ? onTempFieldChange : onFieldChange,
    disabled: hasUnchangableValue,
    className: hasUnchangableValue ? "unchangeableField" : ""
  };

  /*if (dropdownControl) {
    commonProps.options = editProfileOptions[name];
    commonProps.defaultValue = profileInfo[name];
    commonProps.placeholder = null;
  } else */
  if (control === Checkbox) {
    commonProps.defaultChecked = profileInfo[name];
  } else if (control === Select) {
    commonProps.search = true;

    commonProps.defaultValue =
      profileInfo[name] && (profileInfo[name].id || profileInfo[name]);
    commonProps.options = editProfileOptions[name];
    //commonProps.disabled = false;
  } else if (control === Input) {
    commonProps.placeholder = profileInfo[name];
    commonProps.defaultValue = hasUnchangableValue
      ? unchangeableInfo[name]
      : profileInfo[name];
  } else if (control === DateInput) {
    let currentValue = getCurrentValue(name);
    commonProps.value = currentValue
      ? moment(currentValue).format("MMM DD YYYY")
      : null;
    commonProps.iconPosition = "right";
    commonProps.closable = commonProps.dateFormat = "MMM DD YYYY";
  }

  return commonProps;
};

export function formatOptions(options) {
  let newOptions = [];
  options.forEach(value =>
    newOptions.push({
      key: value["id"],
      value: value["id"],
      text: value["description"]["en"] || value["description"]
    })
  );
  return newOptions;
}

export default class FormManagingComponent extends Component {
  constructor(props) {
    super(props);

    //Stores data about updated fields that needs to be sent to backend on apply
    this.fields = {};
    //Stores data about fields that do not need to be sent to the backend on apply
    this.tempFields = {};
    //Functions to call to transform data sent from an onChange event before it is stored in this.fields or this.tempFields (ie. formValue => thisDotFieldsValue)
    this.transformOnChangeValueFuncs = {};
    //Function to call if other actions should happen when a field is changed
    this.onChangeFuncs = {};

    this.getCurrentValue = this.getCurrentValue.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTempFieldChange = this.onTempFieldChange.bind(this);
  }

  onSubmit() {
    console.log("FieldManagingComponent onSubmit with fields:", this.fields);

    let url = backendAddress + "api/profile/" + localStorage.getItem("userId");
    axios
      .put(url, this.fields)
      .then(response => window.location.reload())
      .catch(function(error) {
        console.log(error);
      });
  }

  getCurrentValue(name) {
    const { profileInfo } = this.props;

    return { ...profileInfo, ...this.tempFields, ...this.fields }[name];
  }

  changeDataValue(o) {
    if (typeof o.checked === "boolean") {
      return o.checked;
    }
    return o.value;
  }

  setField(fieldObj, name, value) {
    fieldObj[name] = value;
  }

  onChange(fieldObj, e, o) {
    const { name } = o;

    let value = this.changeDataValue(o);
    if (name in this.transformOnChangeValueFuncs) {
      value = this.transformOnChangeValueFuncs[name](value);
    }

    this.setField(fieldObj, name, value);

    if (name in this.onChangeFuncs) {
      this.onChangeFuncs[name]();
    }
  }

  onFieldChange(e, o) {
    const { setFormChanges } = this.props;
    this.onChange(this.fields, e, o);

    if (setFormChanges) {
      setFormChanges(this.fields);
    }
  }

  onTempFieldChange(e, o) {
    this.onChange(this.tempFields, e, o);
  }
}
