import React from "react";

import FormManagingComponent from "../common/formTools";
import ManagerFormView from "./managerFormView";
import moment from "moment";

export default class ManagerFormController extends FormManagingComponent {
  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <ManagerFormView
        buttons={buttons}
        fields={this.fields}
        getCurrentValue={this.getCurrentValue}
        onFieldChange={this.onFieldChange}
        onSubmit={() => {
          this.onSubmit();
        }}
        onTempFieldChange={this.onTempFieldChange}
        tempFields={this.tempFields}
        {...this.props}
      />
    );
  }
}
