import React from "react";

import FieldManagingComponent from "../fieldManagingComponent";
import EditTagsView from "./editTagsModalView";

export default class EditTagsController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    this.state = { tooManyItems: false };
    this.validateUpdateField = this.validateUpdateField.bind(this);
  }

  render() {
    return (
      <EditTagsView
        handleApply={this.handleApply}
        updateField={this.validateUpdateField}
        tooManyItems={this.state.tooManyItems}
        {...this.props}
      />
    );
  }

  validateUpdateField(e, o) {
    const { maxItems } = this.props;

    this.updateField(e, o);

    if (o.value.length > maxItems !== this.state.tooManyItems) {
      this.setState({ tooManyItems: !this.state.tooManyItems });
    }
  }
}
