import React, { Component, ImageBackground, Text } from "react";
import {
  Image,
  Card,
  Grid,
  Icon,
  Button,
  FormTextArea
} from "semantic-ui-react";
import { injectIntl, FormattedMessage } from "react-intl";
import LandingNavBarController from "./landingNavBar/landingNavBarController";
import LargeLogo from "../../assets/FullLogo4.svg";

import backgroundImage from "../../assets/homeBackground.png";
import cdhLogo from "../../assets/cdhlogo.png";

import "./landingLayout.css";

export default class landingLayoutController extends Component {
  render() {
    const { changeLanguage } = this.props;

    return (
      <React.Fragment>
        <div
          style={{
            position: "fixed",
            top: "0px",
            width: "100%",
            height: "575px",
            backgroundImage: `url(${backgroundImage})`
          }}
        >
          <Image
            style={{ margin: "175px auto 0px" }}
            src={LargeLogo}
            size="large"
          />
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "#ffffff"
            }}
          >
            <div>
              <FormattedMessage id="landing.slogan" />
            </div>
            <Button inverted style={{ margin: "0 auto" }}>
              <FormattedMessage id="landing.login.button" />
            </Button>
          </div>
        </div>

        <div style={{ paddingTop: "0px" }}>
          <LandingNavBarController changeLanguage={changeLanguage} />
        </div>
        <Grid>
          <Grid.Row>
            <div style={{ paddingTop: "560px" }}></div>
          </Grid.Row>
          <Grid.Row className="bg-light-gray" style={{ padding: "75px" }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <h1>Benefits</h1>
            </div>
            <Card.Group itemsPerRow={3} style={{ padding: "0 50px" }}>
              <Card>
                <Card.Header
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <FormattedMessage id="landing.benefit.find.people" />
                </Card.Header>
                <Card.Content>
                  <FormattedMessage id="landing.benefit.find.people.content" />
                </Card.Content>
              </Card>
              <Card>
                <Card.Header
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <FormattedMessage id="landing.benefit.wherever.whenever" />
                </Card.Header>
                <Card.Content>
                  <FormattedMessage id="landing.benefit.wherever.whenever.content" />
                </Card.Content>
              </Card>
              <Card>
                <Card.Header
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  <FormattedMessage id="landing.benefit.find.expertise" />
                </Card.Header>
                <Card.Content>
                  <FormattedMessage id="landing.benefit.find.expertise.content" />
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Row>
          <Grid.Row className="bg-white" style={{ padding: "75px" }}>
            <div style={{ textAlign: "center" }}>
              <h1>Features</h1>
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <h4>
                      <FormattedMessage id="landing.feature.assisted.profile.generation" />
                    </h4>
                    <text>
                      <FormattedMessage id="landing.feature.assisted.profile.generation" />
                    </text>
                  </Grid.Column>
                  <Grid.Column>
                    <h4>
                      <FormattedMessage id="landing.feature.skill.tracking" />
                    </h4>
                    <text>
                      <FormattedMessage id="landing.feature.skill.tracking.content" />
                    </text>
                  </Grid.Column>
                  <Grid.Column>
                    <h4>
                      <FormattedMessage id="landing.feature.dynamic.search" />
                    </h4>
                    <text>
                      <FormattedMessage id="landing.feature.dynamic.search.content" />
                    </text>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Grid.Row>
          <Grid.Row
            className="contactSection"
            style={{
              textAlign: "center",
              padding: "75px",
              width: "100%"
            }}
          >
            <p
              style={{
                textAlign: "center !important",
                width: "100%",
                fontSize: "32pt"
              }}
            >
              Contact Us
            </p>

            <Grid style={{ width: "100%" }}>
              <Grid.Row columns={2}>
                <Grid.Column style={{ textAlign: "center" }}>
                  <Image
                    src={cdhLogo}
                    style={{
                      margin: "0 auto !important",
                      display: "inline-block"
                    }}
                    size="medium"
                  />
                </Grid.Column>
                <Grid.Column>
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      margin: "0 auto",
                      fontSize: "24pt"
                    }}
                  >
                    <Icon name="envelope" />
                    <a
                      color="#ffffff"
                      style={{ color: "#ffffff" }}
                      href="mailto:cdhstudio@canada.ca"
                    >
                      cdhstudio@canada.ca
                    </a>
                  </span>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
          <Grid.Row className="bg-white">
            <Grid columns={3} style={{ textAlign: "center" }}>
              <Grid.Row>
                <Grid.Column>
                  <FormattedMessage id="landing.copyright" />
                </Grid.Column>
                <Grid.Column>
                  <Button
                    style={{ margin: "0 auto" }}
                    href="https://github.com/CDH-Studio/UpSkill"
                  >
                    <Icon style={{ margin: "0px" }} name="github" />
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <a href="file:///C:/Users/Trevor/Documents/UpSkill/docs/index.html#">
                    <FormattedMessage id="landing.privacy.policy" />
                  </a>
                  |
                  <a href="file:///C:/Users/Trevor/Documents/UpSkill/docs/index.html#">
                    <FormattedMessage id="landing.terms.of.use" />
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
