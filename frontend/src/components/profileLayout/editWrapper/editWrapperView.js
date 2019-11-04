import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import "./editWrapper.css";

class EditWrapperView extends Component {
  render() {
    const { button, children, editable, wrapperType } = this.props;

    if (editable) {
      return (
        <div className={wrapperType}>
          {button}
          {children}
        </div>
      );
    }
    return children;
  }
}

export default injectIntl(EditWrapperView);
