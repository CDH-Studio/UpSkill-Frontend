import React, { Component } from "react";
import {
  Grid,
  Button,
  Card,
  Dimmer,
  Loader,
  Modal,
  CardHeader
} from "semantic-ui-react";

export default class RegisterLayoutView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      editProfileOptions,
      formList,
      handleRegister,
      setFormChanges,
      setFormIndex,
      profileInfo,
      gedsInfoList,
      setGedsIndex,
      formIndex,
      gedsIndex
    } = this.props;

    if (editProfileOptions === null) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }

    return (
      <React.Fragment>
        <Modal
          open={gedsIndex === null}
          closeOnDimmerClick={false}
          closeOnEscape={false}
        >
          <Modal.Content>
            <Card.Group itemsPerRow={3}>
              {gedsInfoList.map((element, index) => {
                return (
                  <Card onClick={(e, o) => setGedsIndex(index)}>
                    <h2>{element.givenName + " " + element.surname}</h2>
                    <h3>{element.title}</h3>
                    <h4>{element.email}</h4>
                    <h4>{element.phoneNumber}</h4>
                  </Card>
                );
              })}
            </Card.Group>
          </Modal.Content>
        </Modal>
        <Grid style={{ maxWidth: "1250px", margin: "0px auto" }}>
          <Grid.Column width={4}>{this.renderButtons()}</Grid.Column>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Header>{formList[formIndex].name}</Card.Header>
              <Card.Content>
                {React.createElement(formList[formIndex].form, {
                  handleRegister: handleRegister,
                  setFormChanges: setFormChanges,
                  editProfileOptions: editProfileOptions,

                  profileInfo: profileInfo,
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
      </React.Fragment>
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
