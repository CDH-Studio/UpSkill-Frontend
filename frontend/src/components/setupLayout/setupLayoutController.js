import React, { Component } from "react";

import SetupLayoutView from "./setupLayoutView";
import PrimaryInformationFormController from "../editForms/primaryInformationForm/primaryInformationFormController";
import LabelCardFormController from "../editForms/labelCardForm/labelCardFormController";
import ManagerFormController from "../editForms/managerForm/managerFormController";
import TalentManagmentController from "../editForms/talentManagementForm/talentManagementFormController";
import LanguageProficiencyFormController from "../editForms/languageProficiencyForm/languageProficiencyFormController";
import SkillsFormController from "../editForms/skillsForm/skillsFormController";
import CompetenciesFormController from "../editForms/competenciesForm/competenciesFormController";
import DevelopmentalGoalsFormController from "../editForms/developmentalGoalsForm/developmentalGoalsFormController";
import EducationFormController from "../editForms/educationForm/educationFormController";
import CareerOverviewFormController from "../editForms/careerOverviewForm/careerOverviewFormController";

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
  }
];

export default class RegisterLayoutController extends Component {
  constructor(props) {
    super(props);

    this.state = { formIndex: 0 };
    this.setFormIndex = this.setFormIndex.bind(this);
    this.changes = new Array(formList.length).fill({});
    this.changes[0] = { email: "@canada.ca" };
    this.handleRegister = this.handleRegister.bind(this);
  }

  render() {
    return (
      <SetupLayoutView
        setFormChanges={this.setFormChanges.bind(this, this.state.formIndex)}
        setFormIndex={this.setFormIndex}
        formIndex={this.state.formIndex}
        formList={formList}
        profileInfo={this.changes[this.state.formIndex]}
        handleRegister={
          this.state.formIndex === formList.length - 1
            ? this.handleRegister
            : null
        }
      />
    );
  }

  handleRegister() {
    console.log("registering with data", this.changes);
  }

  setFormIndex(index) {
    this.setState({ formIndex: index });
  }

  setFormChanges(index, changes) {
    this.changes[index] = changes;
  }
}
