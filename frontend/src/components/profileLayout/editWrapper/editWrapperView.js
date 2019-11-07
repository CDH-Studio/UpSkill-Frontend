import React, { Component } from "react";
import { injectIntl } from "react-intl";

import "./editWrapper.css";

class EditWrapperView extends Component {
  render() {
    const {
      button,
      children,
      editProfileOptions,
      editable,
      profileInfo,
      style,
      wrapperType
    } = this.props;

    if (editable) {
      return (
        <div className={wrapperType} style={style}>
          {React.createElement(button, { editProfileOptions, profileInfo })}
          {children}
        </div>
      );
    }
    return children;
  }
}

export default injectIntl(EditWrapperView);
