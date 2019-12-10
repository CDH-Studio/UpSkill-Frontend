import React, { Component } from "react";

import { Button } from "semantic-ui-react";
import { injectIntl } from "react-intl";

class ModalButtonsView extends Component {
  render() {
    const {
      fields,
      handleApply,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister,
      intl
    } = this.props;

    return (
      <div style={{ width: "100%", paddingTop: "20px" }}>
        {handleCancle && (
          <div
            style={{
              float: "right",
              marginBottom: "15px"
            }}
          >
            <React.Fragment>
              <Button type="submit" color="blue">
                {intl.formatMessage({ id: "button.apply" })}
              </Button>

              <Button
                type="button"
                color="blue"
                onClick={handleCancle}
                secondary
              >
                {intl.formatMessage({ id: "button.cancel" })}
              </Button>
            </React.Fragment>
          </div>
        )}

        {handleRegister && isEarlyRegister && (
          <Button type="button" color="blue" onClick={handleRegister}>
            Save and finish
          </Button>
        )}

        <div
          style={{
            float: "right",
            marginBottom: "15px"
          }}
        >
          {handleRegister && (
            <Button
              type="button"
              color="blue"
              disabled={!Boolean(handlePrevious)}
              onClick={e => handlePrevious(fields)}
              secondary
            >
              {intl.formatMessage({ id: "button.back" })}
            </Button>
          )}

          {handleNext && isEarlyRegister && (
            <Button
              type="button"
              color="blue"
              onClick={e => handleNext(fields)}
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
      </div>
    );
  }
}

export default injectIntl(ModalButtonsView);
