import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Grid, Button } from "semantic-ui-react";
import moment from "moment";

import ProfileCardController from "../profileCard/profileCardController";
import "./historyCard.css";

import { renderValue } from "../common/profileTools";
import "../common/common.css";

class HistoryCardView extends Component {
  constructor(props) {
    super(props);
    const { intl } = this.props;

    this.renderValue = renderValue.bind(this, intl);
    this.state = { expanded: false };
    this.expandable = props.cardEntries.length > 2;
  }

  render() {
    const { button, cardEntries, cardName } = this.props;

    let usedEntries;
    if (this.state.expanded) {
      usedEntries = cardEntries;
    } else {
      usedEntries = cardEntries.slice(0, 2);
    }

    return (
      <ProfileCardController button={button} cardName={cardName}>
        <Grid className="historyList" divided="vertically">
          {usedEntries.map((value, index) => (
            <Grid.Row>
              <Grid.Column width={16}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column className="entryName" width={8}>
                      {this.renderValue(
                        value.header ||
                          (value.diploma && value.diploma.description)
                      )}
                    </Grid.Column>
                    <Grid.Column className="dateInfo" width={8}>
                      {moment(value.startDate).isValid()
                        ? moment(value.startDate).format("MMM YYYY") +
                          " - " +
                          (moment(value.endDate).isValid()
                            ? moment(value.endDate).format("MMM YYYY")
                            : "Present")
                        : ""}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column
                      style={{
                        color: "#555555",
                        fontWeight: "bold",
                        paddingBottom: "8pt"
                      }}
                      width={16}
                    >
                      {this.renderValue(
                        value.subheader ||
                          (value.school && value.school.description)
                      )}
                    </Grid.Column>
                  </Grid.Row>
                  {value.content && (
                    <Grid.Row>
                      <Grid.Column width={16}>
                        {value.content.split("\n").map((text, index) => (
                          <p style={{ marginBottom: "0px" }}>{text}</p>
                        ))}
                      </Grid.Column>
                    </Grid.Row>
                  )}
                </Grid>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
        {this.renderSizeButton()}
      </ProfileCardController>
    );
  }

  renderSizeButton() {
    const { intl } = this.props;

    if (this.expandable) {
      return (
        <div className="resizeButtonContainer">
          <Button
            className="blueColoredText"
            inverted
            onClick={e => this.setState({ expanded: !this.state.expanded })}
          >
            {this.state.expanded
              ? "- " + intl.formatMessage({ id: "profile.shrink" })
              : "+ " + intl.formatMessage({ id: "profile.expand" })}
          </Button>
        </div>
      );
    }
    return null;
  }
}

export default injectIntl(HistoryCardView);
