import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import HistoryItemsContainerView from "./historyItemsContainerView";

export default class HistoryItemsContainerController extends Component {
  constructor(props) {
    super(props);

    const { profileInfo, infoName } = this.props;

    const items = profileInfo[infoName] || [];

    this.fields = items.slice(0); //clone items

    this.addItem = this.addItem.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateListField = this.updateListField.bind(this);
  }

  addItem(index, item) {
    const { itemType } = this.props;
    if (typeof index === "number") {
      this.fields.splice(index, 0, item);
    } else {
      let newItem = {};
      itemType.getFieldNames().forEach(element => (newItem[element] = null));

      this.fields.push(newItem);
    }
    this.updateRegisterComponent();
    this.forceUpdate();
  }

  onSubmit() {
    const { infoName } = this.props;
    let url =
      "http://localhost:8080/api/profile/" + localStorage.getItem("userId");
    axios
      .put(url, { [infoName]: this.fields })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("histroy form submit", { [infoName]: this.fields });
  }

  removeItem(index) {
    const fields = this.fields;

    this.fields = fields
      .slice(0, index)
      .concat(fields.slice(index + 1, fields.length));

    this.updateRegisterComponent();
    this.forceUpdate();
  }

  render() {
    return (
      <HistoryItemsContainerView
        {...this.props}
        addItem={this.addItem}
        handleApply={this.onSubmit}
        items={this.fields}
        removeItem={this.removeItem}
      />
    );
  }

  handleApply() {
    /*
        let myMoment = moment(
        element.startDateYear + " " + element.startDateMonth,
        "YY MM"
      );
      
      console.log(
        "this is my moment",
        myMoment.format(),
        "im in my element",
        myMoment.format("MMM YYY")
      );*/

    console.log("should perform update with", this.fields);
  }

  updateRegisterComponent() {
    const { setFormChanges, infoName } = this.props;
    if (setFormChanges) {
      let changes = {};
      changes[infoName] = this.fields;
      setFormChanges(changes);
    }
  }

  updateListField(index, name, value) {
    console.log("list field update", name, value);

    this.fields[index][name] = value;
    this.updateRegisterComponent();
  }
}

HistoryItemsContainerController.defaultProps = {
  buttonBackgroundColor: "rgba(0,0,0,0.05)",
  buttonClass: "innerButton",
  buttonColor: "#555555"
};
