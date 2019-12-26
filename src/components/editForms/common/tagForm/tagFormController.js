import React from "react";
import PropTypes from "prop-types";
import FieldManagingComponent from "../formManagingComponent";
import TagFormView from "./tagFormView";

/**
 * Logic for forms that consist of a single list of tags
 */
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

  /** handles added a new custom tag */
  handleAddItem(e, { value }) {
    const { useCustomTags } = this.props;

    if (useCustomTags) {
      this.setState(prevState => ({
        addedItems: [{ text: value, value: value }, ...prevState.addedItems]
      }));
    }
  }

  /**
   * handles changing the list of selected tags
   * @param {PropTypes.object} e unused even object
   * @param {PropTypes.object} o object containing the new value
   */
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
