import React, { Component } from "react";
import { injectIntl } from "react-intl";

import EditModalController from "../common/editModal/editModalController.js";

import CareerInterestsFormController from "../../../editForms/careerInterestsForm/careerInterestsFormController";

class EditCareerInterestsView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        {...this.props}
        editOptionPaths={{
          willingToRelocateTo: "api/option/getWillingToRelocateTo",
          lookingForNewJob: "api/option/getLookingForANewJob"
        }}
        form={CareerInterestsFormController}
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.manager" })}
      />
    );
  }
}

export default injectIntl(EditCareerInterestsView);
