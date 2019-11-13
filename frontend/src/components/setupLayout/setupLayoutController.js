import React, { Component } from "react";
import { injectIntl } from "react-intl";

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

class SetupLayoutController extends Component {
  constructor(props) {
    super(props);

    const { intl } = this.props;

    this.state = { formIndex: 0, maxEnabledIndex: 0 };
    this.setFormIndex = this.setFormIndex.bind(this);
    this.changes = { email: "@canada" };
    this.handleRegister = this.handleRegister.bind(this);
    this.formList = [];
    formList.forEach((element, index) =>
      this.formList.push({
        ...element,
        name: intl.formatMessage({ id: element.name })
      })
    );
  }

  render() {
    return (
      <SetupLayoutView
        setFormChanges={this.setFormChanges.bind(this, this.state.formIndex)}
        setFormIndex={this.setFormIndex}
        formIndex={this.state.formIndex}
        maxEnabledIndex={this.state.maxEnabledIndex}
        formList={this.formList}
        profileInfo={this.changes}
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
    if (index > this.state.maxEnabledIndex) {
      this.setState({ maxEnabledIndex: index });
    }
  }

  setFormChanges(index, changes) {
    this.changes = { ...this.changes, ...changes }; //[index]
  }
}

export default injectIntl(SetupLayoutController);
