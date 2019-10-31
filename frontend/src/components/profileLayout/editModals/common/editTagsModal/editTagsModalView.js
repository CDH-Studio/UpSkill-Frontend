import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Dropdown } from "semantic-ui-react";

import GenericEditModalController, {
  generateCommonProps
} from "../genericEditModalController.js";
import "./editTagsModal.css";

class EditTagsView extends Component {
  render() {
    const { handleApply, name, dropdownName } = this.props;
    return (
      <GenericEditModalController handleApply={handleApply} name={name}>
        <Dropdown
          className="editTagsDropdown"
          fluid
          multiple
          search
          selection
          {...generateCommonProps(dropdownName, Dropdown, this.props)}
        />
      </GenericEditModalController>
    );
  }
}

export default injectIntl(EditTagsView);
