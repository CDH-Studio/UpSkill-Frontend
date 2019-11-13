import React, { Component } from "react";

import { Button } from "semantic-ui-react";

export default class ModalButtonsView extends Component {
  render() {
    const {
      fields,
      handleRegister,
      handleCancle,
      handleApply,
      handleNext,
      handlePrevious
    } = this.props;

    return (
      <div style={{ width: "100%", position: "relative" }}>
        {handleCancle && (
          <React.Fragment>
            <Button onClick={handleApply} color="blue">
              Apply
            </Button>

            <Button onClick={handleCancle} color="blue" secondary>
              Cancle
            </Button>
          </React.Fragment>
        )}
        {handlePrevious === false && (
          <Button disabled color="blue" secondary>
            Back
          </Button>
        )}
        {handlePrevious && (
          <Button onClick={e => handlePrevious(fields)} color="blue" secondary>
            Back
          </Button>
        )}
        {handleNext && !handleRegister && (
          <Button onClick={e => handleNext(fields)} color="blue">
            Next
          </Button>
        )}
        {handleRegister && (
          <Button onClick={e => handleRegister()} color="blue">
            Finish
          </Button>
        )}
      </div>
    );
  }
}
