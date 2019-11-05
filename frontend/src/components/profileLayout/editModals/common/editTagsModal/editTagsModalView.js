import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Dropdown } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../editModal/editModalController.js";
import "./editTagsModal.css";

class EditTagsView extends Component {
  render() {
    const { dropdownName, handleApply, name } = this.props;
    return (
      <EditModalController handleApply={handleApply} name={name}>
        <Dropdown
          className="editTagsDropdown"
          fluid
          multiple
          search
          selection
          {...generateCommonProps(dropdownName, null, this.props, true)}
        />
      </EditModalController>
    );
  }
}

export default injectIntl(EditTagsView);
