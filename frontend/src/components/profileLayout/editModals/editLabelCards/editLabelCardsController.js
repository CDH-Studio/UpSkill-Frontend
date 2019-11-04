import React from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import EditLabelCardsView from "./editLabelCardsView";

export default class EditLabelCardsController extends FieldManagingComponent {
  constructor(props) {
    super(props);
  }

  onComponentMount() {}

  updateField(e, { name, value }) {
    console.log("field update", name, value);
    this.fields[name] = value;
  }

  render() {
    return (
      <EditLabelCardsView
        profileInfo={{
          groupOrLevel: null,
          security: null,
          status: null,
          yearsOfService: null
        }}
        handleApply={this.handleApply}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}