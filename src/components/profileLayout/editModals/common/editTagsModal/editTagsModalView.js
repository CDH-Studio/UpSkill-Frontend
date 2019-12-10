import React, { Component } from "react";
import { injectIntl } from "react-intl";
import TagForm from "../../../../editForms/common/tagForm/tagFormController";
import { Dropdown, Form, Label } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../editModal/editModalController.js";

class EditTagsView extends Component {
  render() {
    const { dropdownName, handleApply, name, tooManyItems } = this.props;
    return (
      <EditModalController
        handleApply={handleApply}
        name={name}
        form={TagForm}
        {...this.props}
      />
    );
  }
}

export default injectIntl(EditTagsView);
