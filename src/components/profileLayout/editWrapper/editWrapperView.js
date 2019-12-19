import React, { Component } from "react";
import { injectIntl } from "react-intl";

import "./editWrapper.css";

import EditModalController from "../editModals/common/editModal/editModalController";

class EditWrapperView extends Component {
  render() {
    const { children } = this.props;

    const ret = this.renderEditWrappedChildren() || children;

    return ret;
  }

  renderEditWrappedChildren() {
    const {
      buttonType,
      children,
      editable,
      editOptionPaths,
      form,
      formName,
      profileInfo,
      style,
      wrapperType
    } = this.props;

    if (editable) {
      return (
        <div className={wrapperType} style={style}>
          <EditModalController
            buttonType={buttonType}
            editOptionPaths={editOptionPaths}
            form={form}
            name={formName}
            profileInfo={profileInfo}
          />
          {children}
        </div>
      );
    }
  }
}

export default injectIntl(EditWrapperView);
