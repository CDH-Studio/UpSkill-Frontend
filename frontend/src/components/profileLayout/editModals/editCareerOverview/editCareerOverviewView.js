import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModal from "../common/editModal/editModalController";
import CareerOverviewFormController from "../../../editForms/careerOverviewForm/careerOverviewFormController";
class EditCareerOverviewView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <EditModal
        name={intl.formatMessage({ id: "profile.edit.career.overview" })}
        form={CareerOverviewFormController}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditCareerOverviewView);
