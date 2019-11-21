import React, { Component } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";

import { formatOptions } from "../editForms/common/formTools";
import config from "../../config";

import SetupLayoutView from "./setupLayoutView";

import CareerOverviewFormController from "../editForms/careerOverviewForm/careerOverviewFormController";
import CompetenciesFormController from "../editForms/competenciesForm/competenciesFormController";
import DevelopmentalGoalsFormController from "../editForms/developmentalGoalsForm/developmentalGoalsFormController";
import EducationFormController from "../editForms/educationForm/educationFormController";
import LabelCardFormController from "../editForms/labelCardForm/labelCardFormController";
import LanguageProficiencyFormController from "../editForms/languageProficiencyForm/languageProficiencyFormController";
import ManagerFormController from "../editForms/managerForm/managerFormController";
import PrimaryInformationFormController from "../editForms/primaryInformationForm/primaryInformationFormController";
import SkillsFormController from "../editForms/skillsForm/skillsFormController";
import TalentManagmentController from "../editForms/talentManagementForm/talentManagementFormController";
import ProjectsFormController from "../editForms/projectsForm/projectsFormController";

const { backendAddress } = config;

const formList = [
  {
    name: "setup.primary.information",
    form: PrimaryInformationFormController
  },
  { name: "setup.labeled", form: LabelCardFormController },
  { name: "setup.manager", form: ManagerFormController },
  {
    name: "setup.language.proficiency",
    form: LanguageProficiencyFormController
  },
  {
    name: "setup.talent.management",
    form: TalentManagmentController
  },
  { name: "setup.skills", form: SkillsFormController },
  {
    name: "setup.competencies",
    form: CompetenciesFormController
  },
  {
    name: "setup.developmental.goals",
    form: DevelopmentalGoalsFormController
  },
  {
    name: "setup.education",
    form: EducationFormController
  },
  {
    name: "setup.career.overview",
    form: CareerOverviewFormController
  },
  {
    name: "setup.projects",
    form: ProjectsFormController
  }
];

class SetupLayoutController extends Component {
  constructor(props) {
    super(props);

    const { intl, keycloak } = this.props;

    keycloak
      .loadUserInfo()
      .then(async userInfo => this.setState({ email: userInfo.email }));

    this.state = {
      formIndex: 0,
      maxEnabledIndex: 0,
      editProfileOptions: null,
      gedsInfoList: null,
      gedsIndex: null
    };

    this.changes = {};
    this.getSetupData = this.getSetupData.bind(this);
    this.setFormIndex = this.setFormIndex.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.setGedsIndex = this.setGedsIndex.bind(this);
    this.formList = [];
    formList.forEach((element, index) =>
      this.formList.push({
        ...element,
        name: intl.formatMessage({ id: element.name })
      })
    );

    this.getSetupData();
  }

  render() {
    const gedsInfoList = this.setunchangeableInfo(
      this.state.gedsInfoList,
      localStorage.getItem("lang")
    );

    return (
      <SetupLayoutView
        editProfileOptions={this.state.editProfileOptions}
        formIndex={this.state.formIndex}
        formList={this.formList}
        gedsIndex={this.state.gedsIndex}
        gedsInfoList={gedsInfoList}
        handleRegister={this.handleRegister}
        isEarlyRegister={this.state.formIndex !== formList.length - 1}
        keycloakEmail={this.state.email}
        maxEnabledIndex={this.state.maxEnabledIndex}
        profileInfo={this.changes}
        setFormChanges={this.setFormChanges.bind(this, this.state.formIndex)}
        setFormIndex={this.setFormIndex}
        setGedsIndex={this.setGedsIndex}
      />
    );
  }

  setGedsIndex(index) {
    const gedsInfo = this.state.gedsInfoList[index];
    this.changes = {
      ...this.changes,
      ...gedsInfo,
      location: {
        ...gedsInfo.location,
        description: gedsInfo.location.description[localStorage.getItem("lang")]
      }
    };

    this.setState({ gedsIndex: index });
  }

  /*
  getCareerMobility,
  getCompetency,
  getDiploma,
  getGroupLevel,
  getKeyCompetency,
  getLocation,
  getSchool,
  getSecurityClearance,
  getSkill,
  getTalentMatrixResult,
  getTenure
  */

  setunchangeableInfo(info, language, specialUndefineds) {
    if (specialUndefineds && typeof info == "object") {
      for (let key in specialUndefineds) {
        if (info[key] !== null) {
          delete specialUndefineds[key];
        }
      }
      info = Object.assign(info, specialUndefineds);
    }
    if (typeof info === "object") {
      if (info === null) {
        const { intl } = this.props;
        return intl.formatMessage({ id: "profile.undefined" });
      } else if (Array.isArray(info)) {
        let returnArray = [];
        info.forEach(element =>
          returnArray.push(this.setunchangeableInfo(element, language))
        );
        return returnArray;
      } else if ("en" in info) {
        return info[language];
      } else {
        let returnObject = {};
        for (let key in info) {
          returnObject[key] = this.setunchangeableInfo(info[key], language);
        }
        return returnObject;
      }
    }
    return info;
  }

  async getSetupData() {
    let skillOptions = formatOptions(
      (await axios.get(backendAddress + "api/option/getSkill")).data
    );
    let competencyOptions = formatOptions(
      (await axios.get(backendAddress + "api/option/getCompetency")).data
    );

    let gedsInfoList = await axios
      .get(backendAddress + "api/profGen/" + localStorage.getItem("userId"))
      .then(response => response.data);

    let epo = {
      skills: skillOptions,
      careerMobility: formatOptions(
        (await axios.get(backendAddress + "api/option/getCareerMobility")).data
      ),
      diploma: formatOptions(
        (await axios.get(backendAddress + "api/option/getDiploma")).data
      ),
      groupOrLevel: formatOptions(
        (await axios.get(backendAddress + "api/option/getGroupLevel")).data
      ),
      competencies: competencyOptions,
      developmentalGoals: formatOptions(
        (
          await axios.get(
            "http://localhost:8080/api/option/getDevelopmentalGoals"
          )
        ).data
      ),
      location: formatOptions(
        (await axios.get(backendAddress + "api/option/getLocation")).data
      ),
      school: formatOptions(
        (await axios.get(backendAddress + "api/option/getSchool")).data
      ),
      security: formatOptions(
        (await axios.get(backendAddress + "api/option/getSecurityClearance"))
          .data
      ),
      talentMatrixResult: formatOptions(
        (await axios.get(backendAddress + "api/option/getTalentMatrixResult"))
          .data
      ),
      tenure: formatOptions(
        (await axios.get(backendAddress + "api/option/getTenure")).data
      )
    };

    console.log(JSON.stringify(epo));

    this.setState({
      editProfileOptions: epo,
      gedsInfoList
    });
  }

  handleRegister() {
    const { redirectFunction } = this.props;
    console.log("registering with data", this.changes);
    axios
      .post(
        backendAddress + "api/profile/" + localStorage.getItem("userId"),
        this.changes
      )
      .then(response => {
        console.log(response);
        redirectFunction("/home");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  setFormIndex(index) {
    this.setState({ formIndex: index });
    if (index > this.state.maxEnabledIndex) {
      this.setState({ maxEnabledIndex: index });
    }
  }

  setFormChanges(index, changes) {
    this.changes = { ...this.changes, ...changes }; //[index]
  }
}

export default injectIntl(SetupLayoutController);
