import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Dropdown, Form, Label } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../editModal/editModalController.js";
import "./editTagsModal.css";

class EditTagsView extends Component {
  render() {
    const { dropdownName, handleApply, name, tooManyItems } = this.props;
    return (
      <EditModalController handleApply={handleApply} name={name}>
        <Form>
          <Form.Field>
            {tooManyItems && (
              <Label pointing="below">
                You have selected too many items from this dropdown.
              </Label>
            )}
            <Dropdown
              className="editTagsDropdown"
              fluid
              multiple
              search
              selection
              {...generateCommonProps(dropdownName, null, this.props, true)}
            />
          </Form.Field>
        </Form>
      </EditModalController>
    );
  }
}

export default injectIntl(EditTagsView);
