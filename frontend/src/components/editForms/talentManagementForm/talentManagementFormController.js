import React from "react";

import FormManagingComponent from "../common/formTools";
import TalentManagementFormView from "./talentManagementFormView";
import moment from "moment";

export default class ManagerFormController extends FormManagingComponent {
  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <TalentManagementFormView
        onSubmit={() => {
          this.onSubmit();
        }}
        buttons={buttons}
        fields={this.fields}
        onFieldChange={this.onFieldChange}
        onTempFieldChange={this.onTempFieldChange}
        getCurrentValue={this.getCurrentValue}
        tempFields={this.tempFields}
        {...this.props}
      />
    );
  }
}
