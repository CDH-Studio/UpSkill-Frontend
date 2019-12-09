import React, { Component } from "react";
import NavigationBar from "../navigationBar/navigationBarController";
import { FormattedMessage } from "react-intl";
import { Grid, Button, Card, Dimmer, Loader, Modal } from "semantic-ui-react";

export default class RegisterLayoutView extends Component {
  render() {
    const {
      changeLanguage,
      editProfileOptions,
      formIndex,
      formList,
      gedsIndex,
      gedsInfoList,
      handleRegister,
      isEarlyRegister,
      keycloakEmail,
      profileInfo,
      setFormChanges,
      setFormIndex,
      setGedsIndex
    } = this.props;

    if (editProfileOptions === null || !gedsInfoList || !keycloakEmail) {
      return (
        <Dimmer active>
          <Grid>
            <Grid.Row>
              <Loader />
            </Grid.Row>

            <Grid.Row>Gathering profile options and geds info...</Grid.Row>
          </Grid>
        </Dimmer>
      );
    }

    const gedsInfo = gedsInfoList[gedsIndex];

    return (
      <React.Fragment>
        <NavigationBar
          logoRedirectHome={true}
          changeLanguage={changeLanguage}
        />
        <Modal
          open={gedsIndex === null}
          closeOnDimmerClick={false}
          closeOnEscape={false}
        >
          <Modal.Content>
            <h1 style={{ textAlign: "center" }}>
              <FormattedMessage id="setup.select.geds.card" />
            </h1>
            <Card.Group stackable itemsPerRow={3}>
              {gedsInfoList.map((element, index) => {
                return (
                  <Card onClick={(e, o) => setGedsIndex(index)}>
                    <Card.Content>
                      <div style={{ fontSize: "18pt", color: "#27348b" }}>
                        {element.firstName + " " + element.lastName}
                      </div>
                      <div
                        style={{
                          fontSize: "16pt",
                          color: "#444444"
                        }}
                      >
                        {element.jobTitle}
                      </div>
                      <div
                        style={{
                          fontSize: "13pt",
                          color: "#000000",
                          paddingBottom: "8pt"
                        }}
                      >
                        {element.organization &&
                          element.organization.length &&
                          element.organization[0].description}
                      </div>
                      <div style={{ fontSize: "13pt", color: "#000000" }}>
                        {element.telephone}
                      </div>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          </Modal.Content>
        </Modal>
        <Grid style={{ maxWidth: "1250px", margin: "0px auto 0px auto" }}>
          <Grid.Column width={4}>{this.renderButtons()}</Grid.Column>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Header>{formList[formIndex].name}</Card.Header>
              <Card.Content>
                {React.createElement(formList[formIndex].form, {
                  handleRegister: handleRegister,
                  setFormChanges: setFormChanges,
                  editProfileOptions: editProfileOptions,
                  unchangeableInfo: gedsInfo && {
                    firstName: gedsInfo.firstName,
                    lastName: gedsInfo.lastName,
                    organizations: gedsInfo.organizations,
                    jobTitle: gedsInfo.jobTitle,
                    email: keycloakEmail
                  },
                  isEarlyRegister: isEarlyRegister,
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
