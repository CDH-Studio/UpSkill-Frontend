import React, { Component } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";
import config from "../config";
import ProfileLayoutController from "../components/profileLayout/profileLayoutController";

const backendAddress = config.backendAddress;
class Profile extends Component {
  goto = link => this.props.history.push(link);

  constructor(props) {
    super(props);
    this.state = { profileInfo: undefined };

    this.handleSuccess = response => {
      console.log("Recieved", response);

      const convertDropdownOptions = list => {
        let newList = [];
        list.forEach(element => {
          newList.push({
            key: element.id,
            text: element.description,
            value: element.id
          });
        });
        return newList;
      };

      let profileInfo = response.data;
      profileInfo.skills = convertDropdownOptions(profileInfo.skills);
      profileInfo.competencies = convertDropdownOptions(
        profileInfo.competencies
      );
      profileInfo.developmentalGoals = convertDropdownOptions(
        profileInfo.developmentalGoals
      );

      this.setState({ profileInfo: profileInfo });
    };

    this.updateProfileInfo = () => {
      axios
        .get(
          //"http://localhost:8080/api/profile/6becd47a-ffe5-11e9-8d71-362b9e155667"
          //"http://localhost:8080/api/profile/faba08aa-ffe3-11e9-8d71-362b9e155667"
          //"http://localhost:8080/api/profile/6becd47a-ffe5-11e9-8d71-362b9e155667"
          backendAddress + "api/profile/" + localStorage.getItem("userId")
        )
        .then(this.handleSuccess)
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    };
    this.updateProfileInfo = this.updateProfileInfo.bind(this);
    this.updateProfileInfo();
  }

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <ProfileLayoutController
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        profileInfo={this.state.profileInfo}
        updateProfileInfo={this.updateProfileInfo}
        redirectFunction={this.goto}
      />
    );
  }
}

export default injectIntl(Profile);
