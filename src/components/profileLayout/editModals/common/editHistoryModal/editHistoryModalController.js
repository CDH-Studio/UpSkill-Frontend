import React, { Component } from "react";
import moment from "moment";

import EditHistoryModalView from "./editHistoryModalView";
import { elementType } from "prop-types";

export default class EditHistoryModalController extends Component {
  constructor(props) {
    super(props);

    const { items } = this.props;

    items.forEach(element => {
      element.isOngoing = !Boolean(element.endDate);
      const startMoment = moment(element.startDate);
      element.startDateMonth = parseInt(startMoment.format("M"));
      element.startDateYear = parseInt(startMoment.format("YY"));
      if (element.endDate) {
        const endMoment = moment(element.endDate);
        element.endDateMonth = parseInt(endMoment.format("M"));
        element.endDateYear = parseInt(endMoment.format("YY"));
      } else {
        element.endDateMonth = null;
        element.endDateYear = null;
      }
    });

    this.fields = items.slice(0); //clone items

    this.addItem = this.addItem.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.removeItemByIndex = this.removeItemByIndex.bind(this);
    this.updateListField = this.updateListField.bind(this);
  }

  addItem() {
    const items = this.fields;

    for (let i = 0; i < items.length; i++) {
      if (
        !(
          items[i].content ||
          items[i].endDate ||
          items[i].header ||
          items[i].startDate ||
          items[i].subheader
        )
      ) {
        alert("There is already an empty item you can fill in.");
        return;
      }
    }
    this.fields.push({
      content: null,
      endDate: null,
      header: null,
      isOngoing: null,
      startDate: null,
      subheader: null
    });

    this.forceUpdate();
  }

  removeItemByIndex(index) {
    const fields = this.fields;

    this.fields = fields
      .slice(0, index)
      .concat(fields.slice(index + 1, fields.length));

    this.forceUpdate();
  }

  render() {
    return (
      <EditHistoryModalView
        {...this.props}
        addItem={this.addItem}
        handleApply={this.handleApply}
        items={this.fields}
        removeItemByIndex={this.removeItemByIndex}
        updateListField={this.updateListField}
      />
    );
  }

  handleApply() {
    this.fields.forEach(element => {
      element["startDate"] = moment(
        element.startDateYear + " " + element.startDateMonth,
        "YY MM"
      ).format();
      delete element["startDateYear"];
      delete element["startDateMonth"];

      if (element["isOngoing"]) {
        element["endDate"] = null;
      } else {
        element["endDate"] = moment(
          element.endDateYear + " " + element.endDateMonth,
          "YY MM"
        ).format();
      }
      delete element["endDateYear"];
      delete element["endDateMonth"];
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
    });
  }

  updateListField(index, name, value) {
    this.fields[index][name] = value;
  }
}

EditHistoryModalController.defaultProps = {
  buttonBackgroundColor: "rgba(0,0,0,0.05)",
  buttonClass: "innerButton",
  buttonColor: "#555555"
};
