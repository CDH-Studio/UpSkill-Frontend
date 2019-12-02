import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { injectIntl, FormattedMessage } from "react-intl";
import ChangeLanguage from "../../../components/changeLanguage/ChangeLanguage";
import Logo from "../../../assets/Logo5.png";

class LandingNavBarView extends Component {
  render() {
    const { changeLanguage } = this.props;
    return (
      <Menu color="blue" fixed="top" fluid inverted>
        <Menu.Item style={{ paddingBottom: "8px", paddingTop: "8px" }}>
          <Image src={Logo} style={{ maxWidth: "37px" }} />
        </Menu.Item>
        <Menu.Item position="right" href="/secured/home">
          <FormattedMessage id="landing.login.and.enter" />
        </Menu.Item>

        <ChangeLanguage changeLanguage={changeLanguage} />
      </Menu>
    );
  }
}

export default injectIntl(LandingNavBarView);
