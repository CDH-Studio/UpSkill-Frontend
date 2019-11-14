import React from "react";

import FormManagingComponent from "../common/formTools";
import PrimaryInformationFormView from "./primaryInformationFormView";
import moment from "moment";

export default class PrimaryInformationFormController extends FormManagingComponent {
  /*constructor(props) {
    super(props);
    const profileInfo = this.props;
  }*/

  render() {
    const { afterSubmit, buttons } = this.props;
    return (
      <PrimaryInformationFormView
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
