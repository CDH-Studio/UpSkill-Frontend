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
        dropdownOptions={{
          status: [
            { key: "1", value: "1", text: "1" },
            { key: "2", value: "2", text: "2" }
          ],
          groupOrLevel: [
            { key: "3", value: "3", text: "3" },
            { key: "4", value: "4", text: "4" }
          ],
          security: [
            { key: "5", value: "5", text: "5" },
            { key: "6", value: "6", text: "6" }
          ]
        }}
        handleApply={this.handleApply}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}
