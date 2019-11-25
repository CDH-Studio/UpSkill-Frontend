import React, { Component } from "react";

import { Button } from "semantic-ui-react";

export default class ModalButtonsView extends Component {
  render() {
    const {
      fields,
      handleApply,
      handleCancle,
      handleNext,
      handlePrevious,
      handleRegister,
      isEarlyRegister
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
              <Button color="blue" onClick={handleApply}>
                Apply
              </Button>

              <Button color="blue" onClick={handleCancle} secondary>
                Cancel
              </Button>
            </React.Fragment>
          </div>
        )}

        {handleRegister && isEarlyRegister && (
          <Button color="blue" onClick={handleRegister}>
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
              color="blue"
              disabled={!Boolean(handlePrevious)}
              onClick={e => handlePrevious(fields)}
              secondary
            >
              Back
            </Button>
          )}

          {handleNext && isEarlyRegister && (
            <Button color="blue" onClick={e => handleNext(fields)}>
              Next
            </Button>
          )}

          {handleRegister && !isEarlyRegister && (
            <Button color="blue" onClick={handleRegister}>
              Finish
            </Button>
          )}
        </div>
      </div>
    );
  }
}
