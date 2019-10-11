import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";

class ChangeLanguage extends Component {
  changeLanguage = lang => {
    this.props.changeLanguage(lang);
  };

  render() {
    const { intl } = this.props;
    const languageCode = intl.formatMessage({ id: "lang.code" });
    // const languageCode = "fr";

    return (
      <Menu.Item onClick={() => this.changeLanguage(languageCode)}>
        <FormattedMessage id="lang" />
      </Menu.Item>
    );
  }
}
export default injectIntl(ChangeLanguage);
