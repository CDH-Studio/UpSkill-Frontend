import { Component } from "react";
import axios from "axios";

export default class FieldManagingComponent extends Component {
  constructor(props) {
    super(props);

    this.fields = {};
    this.handleApply = this.handleApply.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleApply() {
    let url =
      "http://localhost:8080/api/profile/" + localStorage.getItem("userId");
    axios
      .put(url, this.fields)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.fields = {};
  }

  updateField(e, o) {
    const { checked, name, value } = o;
    let newVal;
    if (checked !== undefined) {
      newVal = checked;
    } else {
      newVal = value;
    }
    console.log("field update", name, newVal);
    this.fields[name] = newVal;
  }
}
