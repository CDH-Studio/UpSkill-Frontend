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
      this.props.profileInfo["actingEndDate"]
    );

    this.fields["isActing"] = Boolean(this.props.profileInfo["acting"]);

    this.updateField = ((e, o) => {
      this.oldUpdateField(e, o);

      if (
        o.name == "actingHasEndDate" ||
        o.name == "isActing" ||
        o.name.includes("Date")
      ) {
        this.forceUpdate();
      }
    }).bind(this);

    this.handleApply = (() => {
      this.fields["actingEndDate"] = this.fields["actingHasEndDate"]
        ? moment(this.fields["actingEndDate"], "MMM DD YYYY").format()
        : null;

      this.fields["actingStartDate"] = moment(
        this.fields["actingStartDate"],
        "MMM DD YYYY"
      ).format();

      delete this.fields["isActing"];
      delete this.fields["actingHasEndDate"];
      this.oldHandleApply();
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

/*
 if (o.checked && this.fields["actingPeriod"]) {
          const periodSeperatorIndex = this.fields["actingPeriod"].indexOf(
            " - "
          );
          if (periodSeperatorIndex !== -1) {
            this.oldUpdateField(null, {
              name: "actingPeriod",
              value: this.fields["actingPeriod"].substring(
                0,
                periodSeperatorIndex
              )
            });
          }
        }
        this.forceUpdate();
      } else if (o.name == "actingPeriod") {
        if (this.fields["noActingEndDate"]) {
          const periodSeperatorIndex = o.value.indexOf(" - ");
          let value;
          if (periodSeperatorIndex === -1) {
            value = o.value;
          } else {
            value = o.value.substring(periodSeperatorIndex + 3);
          }
          this.oldUpdateField(e, { ...o, value });
        } else {
          this.oldUpdateField(e, o);
        }
        this.forceUpdate();
      } else if (o.name == "isActing") {
        this.oldUpdateField(e, o);
        this.forceUpdate();
      } else {
        this.oldUpdateField(e, o);
      }
      */
