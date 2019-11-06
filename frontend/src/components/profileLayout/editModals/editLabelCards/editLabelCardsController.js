import React from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import EditLabelCardsView from "./editLabelCardsView";

export default class EditLabelCardsController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    this.oldUpdateField = this.updateField;
    this.updateField = ((e, o) => {
      this.oldUpdateField(3, o);
      if (o.name == "isActing" || o.name.includes("Date")) {
        this.forceUpdate();
      }
    }).bind(this);
  }

  onComponentMount() {}

  render() {
    return (
      <EditLabelCardsView
        handleApply={this.handleApply}
        profileInfo={{
          groupOrLevel: null,
          security: null,
          status: null,
          yearsOfService: null
        }}
        updateField={this.updateField}
        fields={this.fields}
        {...this.props}
      />
    );
  }
}
