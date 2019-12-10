import React from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import EditLabelCardsView from "./editLabelCardsView";
import moment from "moment";

export default class EditLabelCardsController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    this.oldUpdateField = this.updateField;
    this.oldHandleApply = this.handleApply;

    this.fields["actingHasEndDate"] = Boolean(
      this.props.profileInfo["actingPeriodEndDate"]
    );

    this.fields["isActing"] = Boolean(this.props.profileInfo["acting"]);

    this.updateField = (e, o) => {
      this.oldUpdateField(e, o);

      if (
        o.name === "actingHasEndDate" ||
        o.name === "isActing" ||
        o.name.includes("Date")
      ) {
        this.forceUpdate();
      }
    };

    this.handleApply = () => {
      this.fields["actingPeriodEndDate"] = this.fields["actingHasEndDate"]
        ? moment(this.fields["actingPeriodEndDate"], "MMM DD YYYY").format()
        : null;

      this.fields["actingPeriodStartDate"] = moment(
        this.fields["actingPeriodStartDate"],
        "MMM DD YYYY"
      ).format();

      delete this.fields["isActing"];
      delete this.fields["actingHasEndDate"];
      this.oldHandleApply();
    };
  }

  onComponentMount() {}

  render() {
    return (
      <EditLabelCardsView
        fields={this.fields}
        profileInfo={{
          classification: null,
          security: null,
          temporaryRole: null,
          yearsOfService: null
        }}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}
