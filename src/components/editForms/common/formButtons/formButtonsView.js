import React, { Component } from "react";

import { Button } from "semantic-ui-react";
import { injectIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

class ModalButtonsView extends Component {
  render() {
    return (
      <div style={{ width: "100%", paddingTop: "20px" }}>
        {this.renderEditButtonGroup() || this.renderRegisterButtonGroup()}
      </div>
    );
  }

  renderEditButtonGroup() {
    const { handleApply, handleCancel, intl } = this.props;
    return (
      handleApply &&
      handleCancel && (
        <div
          style={{
            float: "right",
            marginBottom: "15px"
          }}
        >
          <Button type="button" onClick={handleApply} color="blue">
            {intl.formatMessage({ id: "button.apply" })}
          </Button>

          <Button type="button" color="blue" onClick={handleCancel} secondary>
            {intl.formatMessage({ id: "button.cancel" })}
          </Button>
        </div>
      )
    );
  }

  renderRegisterButtonGroup() {
    const {
      fields,
      handleNext,
      handlePrevious,
      handleRegister,
      intl,
      isEarlyRegister
    } = this.props;
    return (
      handleRegister && (
        <React.Fragment>
          {/* render the 'Finish early' button if necessary */}
          {isEarlyRegister && (
            <Button type="button" color="blue" onClick={handleRegister}>
              <FormattedMessage id="setup.save.and.finish" />
            </Button>
          )}

          <div
            style={{
              float: "right",
              marginBottom: "15px"
            }}
          >
            <Button
              color="blue"
              disabled={!Boolean(handlePrevious)}
              onClick={e => handlePrevious(fields)}
              secondary
              type="button"
            >
              {intl.formatMessage({ id: "button.back" })}
            </Button>

            {handleNext && isEarlyRegister && (
              <Button
                color="blue"
                onClick={e => handleNext(fields)}
                type="button"
              >
                {intl.formatMessage({ id: "button.next" })}
              </Button>
            )}

            {handleRegister && !isEarlyRegister && (
              <Button type="button" color="blue" onClick={handleRegister}>
                {intl.formatMessage({ id: "button.finish" })}
              </Button>
            )}
          </div>
        </React.Fragment>
      )
    );
  }
}

export default injectIntl(ModalButtonsView);
