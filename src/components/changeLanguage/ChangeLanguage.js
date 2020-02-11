import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Icon } from "semantic-ui-react";

class ChangeLanguage extends Component {
  changeLanguage = lang => {
    this.props.changeLanguage(lang);
  };

  render() {
    const { intl } = this.props;
    const languageCode = intl.formatMessage({ id: "lang.code" });

    return (
      <Menu.Item tabIndex="2" onClick={() => this.changeLanguage(languageCode)}>
        <Icon name="world" />
        <FormattedMessage id="lang" />
      </Menu.Item>
    );
  }
}
export default injectIntl(ChangeLanguage);
