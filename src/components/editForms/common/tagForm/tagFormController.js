import React from "react";

import FieldManagingComponent from "../formTools";
import TagFormView from "./tagFormView";

export default class TagFormController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    this.state = { tooManyItems: false };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <TagFormView
        fields={this.fields}
        handleApply={this.onSubmit}
        handleChange={this.handleChange}
        onSubmit={this.onSubmit}
        tooManyItems={this.state.tooManyItems}
        {...this.props}
      />
    );
  }

  handleChange(e, o) {
    const { maxItems } = this.props;

    this.onFieldChange(e, o);

    const isLength = o.value.length > maxItems;
    if (isLength !== this.state.tooManyItems) {
      this.setState({ tooManyItems: !this.state.tooManyItems });
    }
  }
}
