import React from "react";

import FormManagingComponent from "../common/FormTools";
import ManagerFormView from "./managerFormView";
import moment from "moment";

export default class ManagerFormController extends FormManagingComponent {
  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <ManagerFormView
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
