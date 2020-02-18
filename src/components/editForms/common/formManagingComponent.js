import { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import config from "../../../config";
const { backendAddress } = config;

export default class FormManagingComponent extends Component {
  static propTypes = {
    /** Function to override onSubmit behavior. If provided, this will prevent default PUT request. */
    handleRegister: PropTypes.func,
    /** Function to call with new fields data when this.fields changes*/
    setFormChanges: PropTypes.func
  };

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

  /** sends the changed profile fields to the backend */
  onSubmit() {
    if (!this.props.handleRegister) {
      let url =
        backendAddress + "api/profile/" + localStorage.getItem("userId");
      axios
        .put(url, this.fields)
        .then(response => window.location.reload())
        .catch(function(error) {
          console.error(error);
        });
    }
  }

  /** finds a current value that may be coming from the original profile info or of of the fields of the form
   * @param {PropTypes.string} name the name of the value
   */
  getCurrentValue(name) {
    const { profileInfo } = this.props;

    return { ...profileInfo, ...this.tempFields, ...this.fields }[name];
  }

  /** handles change of field
   * @param {PropTypes.object} fieldObj which field object to change (fields or tempFields).
   * @param {PropTypes.object} e unused event object
   * @param {PropTypes.object} o object representing the change
   */
  onChange(fieldObj, e, o) {
    const { name } = o;

    console.log("<===onChang(fieldObj, e, o)===>");
    console.log("o.value", o.value);
    console.log("o.checked", o.checked);
    // let value = o.value || o.checked;
    let value;
    // if (o.value) {
    //   value = o.value;
    //   console.log("if");
    // } else if (o.checked) {
    //   value = o.checked;
    //   console.log("else");
    // }
    // if (typeof o.value !== "undefined") {
    //   // the variable is defined
    // }
    // let value = o.value;

    if (typeof o.value === "undefined" || o.value === null) {
      // variable is undefined or null
      value = o.checked;
    }
    if (typeof o.checked === "undefined" || o.checked === null) {
      // variable is undefined or null
      value = o.value;
    }

    if (name in this.transformOnChangeValueFuncs) {
      value = this.transformOnChangeValueFuncs[name](value);
      console.log(
        "value = this.transformOnChangeValueFuncs[name](value);",
        (value = this.transformOnChangeValueFuncs[name](value))
      );
    }

    fieldObj[name] = value;
    console.log("fieldObj[name]= ", value);

    if (name in this.onChangeFuncs) {
      this.onChangeFuncs[name]();
    }
  }

  /**
   * handle change of a normal field
   * @param {PropTypes.object} e unused event object
   * @param {PropTypes.object} o object representing the change
   */
  onFieldChange(e, o) {
    const { setFormChanges } = this.props;
    this.onChange(this.fields, e, o);

    if (setFormChanges) {
      setFormChanges(this.fields);
    }
  }

  /**
   * handle change of a temp field
   * @param {PropTypes.object} e unused event object
   * @param {PropTypes.object} o object representing the change
   */
  onTempFieldChange(e, o) {
    this.onChange(this.tempFields, e, o);
  }
}
