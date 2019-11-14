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
      handleRegister
    } = this.props;

    return (
      <div style={{ width: "100%", position: "relative" }}>
        {handleCancle && (
          <React.Fragment>
            <Button color="blue" onClick={handleApply}>
              Apply
            </Button>

            <Button color="blue" onClick={handleCancle} secondary>
              Cancel
            </Button>
          </React.Fragment>
        )}
        {handlePrevious === false && (
          <Button color="blue" disabled secondary>
            Back
          </Button>
        )}
        {handlePrevious && (
          <Button color="blue" onClick={e => handlePrevious(fields)} secondary>
            Back
          </Button>
        )}
        {handleNext && !handleRegister && (
          <Button color="blue" onClick={e => handleNext(fields)}>
            Next
          </Button>
        )}
        {handleRegister && (
          <Button color="blue" onClick={e => handleRegister()}>
            Finish
          </Button>
        )}
      </div>
    );
  }
}
