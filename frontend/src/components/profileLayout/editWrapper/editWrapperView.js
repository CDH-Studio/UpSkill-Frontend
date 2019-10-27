import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import "./editWrapper.css";

class EditWrapperView extends Component {
  render() {
    const { buttonType, children, editFunction, wrapperType } = this.props;

    if (editFunction) {
      return (
        <div className={wrapperType}>
          <p className={buttonType} onClick={editFunction}>
            [ <FormattedMessage id="profile.edit" /> ]
          </p>

          {children}
        </div>
      );
    }
    return children;
  }
}

export default injectIntl(EditWrapperView);
