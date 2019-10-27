import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import "./editWrapper.css";

class EditWrapperView extends Component {
  render() {
    const { buttonBackground, buttonColor, buttonType, children, editFunction, wrapperType } = this.props;

    let buttonStyle = {color:buttonColor}
    if (buttonBackground ) {
      buttonStyle['backgroundColor'] = buttonBackground;
    }

    if (editFunction) {
      return (
        <div className={wrapperType}>
          <p className={buttonType} onClick={editFunction} style={buttonStyle}>
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
