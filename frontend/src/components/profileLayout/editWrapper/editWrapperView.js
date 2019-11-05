import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import "./editWrapper.css";

class EditWrapperView extends Component {
  render() {
    const {
      button,
      children,
      dropdownOptions,
      editable,
      profileInfo,
      style,
      wrapperType
    } = this.props;

    if (editable) {
      return (
        <div className={wrapperType} style={style}>
          {React.createElement(button, { dropdownOptions, profileInfo })}
          {children}
        </div>
      );
    }
    return children;
  }
}

export default injectIntl(EditWrapperView);
