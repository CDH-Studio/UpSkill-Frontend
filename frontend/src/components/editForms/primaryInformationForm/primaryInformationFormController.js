import React from "react";

import FormManagingComponent from "../common/FormTools";
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
