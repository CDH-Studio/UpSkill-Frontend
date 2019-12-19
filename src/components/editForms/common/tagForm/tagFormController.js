import React from "react";

import FieldManagingComponent from "../formTools";
import TagFormView from "./tagFormView";

export default class TagFormController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    const { profileInfo, dropdownName } = this.props;

    this.state = {
      tooManyItems: false,
      addedItems: [],
      currentValue: profileInfo[dropdownName]
        ? profileInfo[dropdownName].map(
            element => element.value || element.text || element
          ) //if useCustomTags needs to use text as value, otherwise use the value property
        : []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem(e, { value }) {
    const { useCustomTags } = this.props;

    if (useCustomTags) {
      this.setState(prevState => ({
        addedItems: [{ text: value, value: value }, ...prevState.addedItems]
      }));
    }
  }

  handleChange(e, o) {
    this.setState({ currentValue: o.value });
    const { maxItems } = this.props;

    this.onFieldChange(e, o);

    if (o.value.length > maxItems !== this.state.tooManyItems) {
      this.setState({ tooManyItems: !this.state.tooManyItems });
    }
  }

  render() {
    return (
      <TagFormView
        addedItems={this.state.addedItems}
        currentValue={this.state.currentValue}
        fields={this.fields}
        handleAddItem={this.handleAddItem}
        handleApply={this.onSubmit}
        handleChange={this.handleChange}
        onSubmit={this.onSubmit}
        tooManyItems={this.state.tooManyItems}
        {...this.props}
      />
    );
  }
}
