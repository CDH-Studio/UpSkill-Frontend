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
        handleApply={this.onSubmit}
        handleChange={this.handleChange}
        tooManyItems={this.state.tooManyItems}
        onSubmit={this.onSubmit}
        fields={this.fields}
        {...this.props}
      />
    );
  }

  handleChange(e, o) {
    const { maxItems } = this.props;

    this.onFieldChange(e, o);

    if (o.value.length > maxItems !== this.state.tooManyItems) {
      this.setState({ tooManyItems: !this.state.tooManyItems });
    }
  }
}
