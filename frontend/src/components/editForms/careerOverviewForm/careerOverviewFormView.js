import React, { Component } from "react";

import HistoryItemsContainerController from "../common/historyItemsContainer/historyItemsContainerController";

import { injectIntl } from "react-intl";

class CareerOverviewView extends Component {
  render() {
    const { intl } = this.props;
    return (
      <HistoryItemsContainerController
        infoName={"careerSummary"}
        contentName={intl.formatMessage({
          id: "profile.career.content.name"
        })}
        headerName={intl.formatMessage({ id: "profile.career.header.name" })}
        name={intl.formatMessage({ id: "profile.edit.career.overview" })}
        subheaderName={intl.formatMessage({
          id: "profile.career.subheader.name"
        })}
        {...this.props}
      />
    );
  }
}
export default injectIntl(CareerOverviewView);
