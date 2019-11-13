import React, { Component } from "react";
import { Grid, Button, Card } from "semantic-ui-react";

export default class RegisterLayoutView extends Component {
  render() {
    const {
      formList,
      handleRegister,
      setFormChanges,
      setFormIndex,
      profileInfo,
      formIndex
    } = this.props;
    return (
      <Grid style={{ maxWidth: "1250px", margin: "0px auto" }}>
        <Grid.Column width={4}>{this.renderButtons()}</Grid.Column>
        <Grid.Column width={12}>
          <Card fluid>
            <Card.Content>
              {React.createElement(formList[formIndex].form, {
                handleRegister: handleRegister,
                setFormChanges: setFormChanges,

                profileInfo: profileInfo,

                editProfileOptions: {},
                handleNext: fieldsUpdate => {
                  formList[formIndex].changes = {
                    ...formList[formIndex].changes,
                    ...fieldsUpdate
                  };
                  setFormIndex(formIndex + 1);
                },
                handlePrevious:
                  formIndex === 0
                    ? false
                    : fieldsUpdate => {
                        formList[formIndex].changes = {
                          ...formList[formIndex].changes,
                          ...fieldsUpdate
                        };
                        setFormIndex(formIndex - 1);
                      }
              })}
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    );
  }

  renderButtons() {
    const { formIndex, setFormIndex, formList } = this.props;
    let buttons = [];
    formList.forEach((value, index) =>
      buttons.push(
        <Button
          color="blue"
          fluid
          onClick={e => setFormIndex(index)}
          basic={index !== formIndex}
        >
          {value.name}
        </Button>
      )
    );

    return buttons;
  }
}
