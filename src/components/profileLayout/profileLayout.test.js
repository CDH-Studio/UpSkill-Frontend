import React from "react";
//import ProfileLayoutView from "./profileLayoutView";

import ProfileLayoutController from "./profileLayoutController.js";

import wrapThenMount from "../../__mocks__/componentWrapper";
import { Item } from "semantic-ui-react";
import JestMock from "jest-mock";
import moment from "moment";
import experienceItemFormView from "../editForms/common/experienceItemForm/experienceItemFormView.js";

const EMPTY_PROFILE_DATA = {
  visibleCards: {
    info: true,
    manager: true,
    talentManagement: true,
    officialLanguage: true,
    skills: true,
    competencies: true,
    developmentalGoals: true,
    education: true,
    experience: true,
    projects: true,
    careerInterests: true
  },
  acting: { id: null, description: null },
  actingPeriodStartDate: null,
  actingPeriodEndDate: null,
  branch: {
    en: "branchString0",
    fr: "branchString0"
  },
  careerMobility: { description: { en: null, fr: null } },
  careerSummary: [],
  competencies: [],
  developmentalGoals: [],
  education: [],
  email: "email.string0@canada.ca",
  exFeeder: null,
  flagged: false,
  firstLanguage: null,
  firstName: "firstName0",
  githubUrl: null,
  gradedOnSecondLanguage: null,
  classification: { description: null, id: null },
  jobTitle: { en: "jobTitleString0", fr: "JobTitleString0" },
  lastName: "lastName0",
  linkedinUrl: null,
  location: {
    id: "aaaaaaaa-bbbb-cccc-0000-eeeeeeee0000",
    description: {
      en: "locationStringEn0",
      fr: "locationStringFr0"
    }
  },
  manager: null,
  cellphone: null,
  organizationList: [],
  secondaryOralDate: null,
  secondaryOralProficiency: null,
  secondaryReadingDate: null,
  secondaryReadingProficiency: null,
  secondaryWritingDate: null,
  secondaryWritingProficiency: null,
  secondLanguage: null,
  security: { description: { en: null, fr: null }, id: null },
  skills: null,
  temporaryRole: { description: { en: null, fr: null }, id: null },
  talentMatrixResult: { description: { en: null, fr: null }, id: null },
  team: null,
  telephone: null,
  twitterUrl: null,
  projects: [],
  interestedInRemote: null,
  relocationLocations: [],
  lookingForNewJob: null,
  indeterminate: null
};

const FULL_PROFILE_DATA = {
  visibleCards: {
    info: true,
    manager: true,
    talentManagement: true,
    officialLanguage: true,
    skills: true,
    competencies: true,
    developmentalGoals: true,
    education: true,
    experience: true,
    projects: true,
    careerInterests: true
  },
  firstName: "firstNameString0",
  lastName: "lastNameString0",
  branch: {
    en: "branchStringEn0",
    fr: "branchStringFr0"
  },
  organizationList: [
    {
      en: "orgListStringEn0",
      fr: "orgListStringFr0"
    },
    {
      en: "orgListStringEn1",
      fr: "orgListStringFr1"
    },
    {
      en: "orgListStringEn2",
      fr: "orgListStringFr2"
    },
    {
      en: "orgListStringEn3",
      fr: "orgListStringFr3"
    },
    {
      en: "orgListStringEn4",
      fr: "orgListStringFr4"
    }
  ],
  email: "email.string0@canada.ca",
  location: {
    id: "aaaaaaaa-bbbb-cccc-0000-eeeeeeee0000",
    description: {
      en: "locationStringEn0",
      fr: "locationStringFr0"
    }
  },
  telephone: "telephoneString0",
  cellphone: "cellphoneString0",
  jobTitle: {
    en: "jobTitleStringEn0",
    fr: "jobTitleStringFr0"
  },
  firstLanguage: { en: "firstLanguageStringEn0", fr: "firstLanguageStringFr0" },
  flagged: false,
  linkedinUrl: "linkedinUrlString0",
  githubUrl: "githubUrlString0",
  twitterUrl: "twitterUrlString0",
  team: "teamString0",
  acting: {
    id: "aaaaaaaa-bbbb-cccc-0001-eeeeeeee0000",
    description: "actingString0"
  },
  actingPeriodStartDate: "2000-01-01T0:00:00.000Z",
  actingPeriodEndDate: "2001-01-01T0:00:00.000Z",
  classification: {
    id: "aaaaaaaa-bbbb-cccc-0002-eeeeeeee0000",
    description: "classificationString0"
  },
  temporaryRole: {
    id: "aaaaaaaa-bbbb-cccc-0003-eeeeeeee0000",
    description: {
      en: "temporaryRoleStringEn0",
      fr: "temporaryRoleStringFr0"
    }
  },
  security: {
    id: "aaaaaaaa-bbbb-cccc-0004-eeeeeeee0000",
    description: {
      en: "securityStringEn0",
      fr: "securityStringFr0"
    }
  },
  indeterminate: true,
  manager: "managerString0",
  careerMobility: {
    id: "aaaaaaaa-bbbb-cccc-0005-eeeeeeee0000",
    description: {
      en: "careerMobilityEn0",
      fr: "careerMobilityFr0"
    }
  },
  exFeeder: null,
  talentMatrixResult: {
    id: "aaaaaaaa-bbbb-cccc-0006-eeeeeeee0000",
    description: {
      en: "talentMatrixResultStringEn0",
      fr: "talentMatrixResultStringFr0"
    }
  },
  gradedOnSecondLanguage: true,
  secondaryOralDate: "2002-01-01T0:00:00.000Z",
  secondaryOralProficiency: "A",
  secondaryReadingDate: "2003-01-01T0:00:00.000Z",
  secondaryReadingProficiency: "B",
  secondaryWritingDate: "2004-01-01T0:00:00.000Z",
  secondaryWritingProficiency: "x",
  secondLanguage: true,
  skills: [
    {
      key: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0000",
      text: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0001",
      value: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0002"
    }
  ],
  competencies: [
    {
      key: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0003",
      text: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0004",
      value: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0005"
    }
  ],
  developmentalGoals: [
    {
      key: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0001",
      text: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0003",
      value: "aaaaaaaa-bbbb-cccc-0007-eeeeeeee0006"
    }
  ],
  education: [],
  careerSummary: [
    {
      subheader: "careerSummarySubheaderString0",
      header: "careerSummaryHeaderString0",
      content: "careerSummaryContentString0",
      startDate: "2005-01-01T0:00:00.000Z",
      endDate: "2006-01-01T0:00:00.000Z"
    },
    {
      subheader: "careerSummarySubheaderString1",
      header: "careerSummaryHeaderString1",
      content: "careerSumarryContentString1",
      startDate: "2007-01-01T0:00:00.000Z",
      endDate: "2008-01-01T0:00:00.000Z"
    }
  ],
  projects: [
    { text: "projectsString0" },
    { text: "projectsString1" },
    { text: "projectsString2" }
  ],
  interestedInRemote: true,
  relocationLocations: [
    {
      id: "aaaaaaaa-bbbb-cccc-0000-eeeeeeee0000",
      description: {
        en: "locationStringEn0",
        fr: "locationStringFr0"
      }
    },
    {
      id: "aaaaaaaa-bbbb-cccc-0000-eeeeeeee0001",
      description: {
        en: "locationStringEn1",
        fr: "locationStringFr1"
      }
    }
  ],
  lookingForNewJob: true
};

it("Profile layout renders expected elements on own profile with empty profileInfo", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={true}
      privateView={true}
      visibleProfileCards={{
        skills: true,
        competencies: true,
        developmentalGoals: true,
        education: true,
        careerOverview: true,
        projects: true,
        careerInterests: true,
        info: true,
        manager: true,
        officialLanguage: true,
        talentManager: true
      }}
      profileInfo={EMPTY_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );

  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("Sidebar").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(11);
  expect(wrapper.find("EditModalController").length).toBe(13);
});

it("Profile layout renders expected elements on another user's profile with empty profileInfo and all profile cards hidden", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={false}
      privateView={false}
      visibleProfileCards={{
        skills: false,
        competencies: false,
        developmentalGoals: false,
        education: false,
        careerOverview: false,
        projects: false,
        careerInterests: false,
        info: false,
        manager: false,
        officialLanguage: false,
        talentManager: false
      }}
      profileInfo={EMPTY_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );

  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("Sidebar").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(0);
  expect(wrapper.find("EditModalController").length).toBe(0);
});

it("Profile layout renders expected elements on another user's profile with full profileInfo and all profile cards hidden", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={false}
      privateView={false}
      visibleProfileCards={{
        skills: false,
        competencies: false,
        developmentalGoals: false,
        education: false,
        careerOverview: false,
        projects: false,
        careerInterests: false,
        info: false,
        manager: false,
        officialLanguage: false,
        talentManager: false
      }}
      profileInfo={FULL_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );
  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(0);
  expect(wrapper.find("EditModalController").length).toBe(0);
});

it("Profile layout renders expected elements on another user's profile with empty profileInfo and all profile cards visible", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={false}
      privateView={false}
      visibleProfileCards={{
        skills: true,
        competencies: true,
        developmentalGoals: true,
        education: true,
        careerOverview: true,
        projects: true,
        careerInterests: true,
        info: true,
        manager: true,
        officialLanguage: true,
        talentManager: true
      }}
      profileInfo={EMPTY_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );
  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(10);
  expect(wrapper.find("EditModalController").length).toBe(0);
});

it("Profile layout renders expected elements on another user's profile with full profileInfo and all profile cards visible", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={false}
      privateView={false}
      visibleProfileCards={{
        skills: true,
        competencies: true,
        developmentalGoals: true,
        education: true,
        careerOverview: true,
        projects: true,
        careerInterests: true,
        info: true,
        manager: true,
        officialLanguage: true,
        talentManager: true
      }}
      profileInfo={FULL_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );
  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(10);
  expect(wrapper.find("EditModalController").length).toBe(0);
});

it("Profile layout renders expected elements on own profile with full profileInfo", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutController
      changeLanguage={jest.fn()}
      keycloak={{}}
      editable={true}
      privateView={true}
      visibleProfileCards={{
        skills: true,
        competencies: true,
        developmentalGoals: true,
        education: true,
        careerOverview: true,
        projects: true,
        careerInterests: true,
        info: true,
        manager: true,
        officialLanguage: true,
        talentManager: true
      }}
      profileInfo={FULL_PROFILE_DATA}
      updateProfileInfo={jest.fn()}
      redirectFunction={jest.fn()}
    />
  );

  const wrapperText = wrapper
    .find("ProfileCardController")
    .map(element => element.render());
  console.log("teamStrinsa******************************", wrapperText);

  expect(
    wrapperText
      .map(renderedElement => {
        console.log("REND ELEM", renderedElement);
        return renderedElement.contains('<"a">');
      })
      .contains(true)
  );

  expect(wrapper.find("NavigationBarController").length).toBe(1);
  expect(wrapper.find("Sidebar").length).toBe(1);
  expect(wrapper.find("ProfileCardController").length).toBe(11);
  expect(wrapper.find("EditModalController").length).toBe(13);
});

/*
it("ProfileLayoutController with filled fields contains expected components & values", () => {
  debugger;

  const wrapper = wrapThenMount(<ProfileLayoutController />);
  expect().toBe(10);t
});*/

/*
import EditCareerOverviewController from "./editModals/editCareerOverview/editCareerOverviewController";
import EditCompetenciesController from "./editModals/editCompetencies/editCompetenciesController";
import EditDevelopmentalGoalsController from "./editModals/editDevelopmentalGoals/editDevelopmentalGoalsController";
import EditEducationController from "./editModals/editEducation/editEducationController";
import EditSkillController from "./editModals/editSkills/editSkillsController";

import EditLanguageProficiencyController from "./editModals/editLanguageProficiency/editLanguageProficiencyController";
import EditManagerController from "./editModals/editManager/editManagerController";
import EditTalentManagementController from "./editModals/editTalentManagement/editTalentManagementController";

import EditLabelCardsController from "./editModals/editLabelCards/editLabelCardsController";
import EditPrimaryInformationController from "./editModals/editPrimaryInformation/editPrimaryInformationController";
import EditProfilePictureController from "./editModals/editProfilePicture/editProfilePictureController";
import EditWrapperController from "./editWrapper/editWrapperController";


*/

/*
it("Editable profile view contains expected components", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutView
      profileInfo={{
        acting: "EX 01",
        actingPeriodStartDate: "01/10/20",
        actingPeriodEndDate: "10/10/21",
        branch: "Chief Information Office Branch",

        building: "CD Howe, Room 368l",
        careerMobility: "Ready for movement",
        careerSummary: [
          {
            content: "this is content\nmore content",
            endDate: "Present",
            header: "Payments Canada",
            startDate: "Aug 2017",
            subheader: "Payment Analyst"
          }
        ],
        city: "Ontario",

        competencies: ["2"],
        country: "Canada",
        developmentalGoals: ["3"],

        education: [
          {
            content: "this is content\ni am content",
            subheader: "Telpher School of Buisness",
            endDate: "Apr 2009",
            header: "Masters of Business Administration",
            startDate: "Sept 2007"
          },
          {
            content: "this is content\ni am content",
            subheader: "Carleton University",
            endDate: "Apr 2005",
            header: "Software Engineering",
            startDate: "Sept 2000"
          },
          {
            content: "this is content\ni am content",
            subheader: "smart people shcool",
            endDate: "Apr 2005",
            header: "smart people class",
            startDate: "Sept 2000"
          }
        ],
        email: "mary.smith@canada.ca",
        firstLanguage: "English",
        firstName: "Massadry",
        githubUrl: "https://www.google.com",
        gradedOnSecondLanguage: true,
        classification: "CS 04",
        jobTitle: "Manager, Next Innovation",
        lastName: "Smisdasth",
        linkedinUrl: "https://www.bing.ca",
        manager: "Chahine El Chaar",
        cellphone: "613-402-8224",
        organizationList: [
          "ABC Directorate",
          "ABC Division",
          "Chief Information Office Branch",
          "Digital Transformation Service Sector",
          "Innovation, Science and Economic Development Canada"
        ],
        PO: "K1A 0H5",
        province: "Ottawa",
        secondaryOralDate: "Nov 29 2018",
        secondaryOralProficiency: "C",
        secondaryReadingDate: "Oct 17 2020",
        secondaryReadingProficiency: "C",
        secondaryWritingDate: "Oct 17 2021",
        secondaryWritingProficiency: "B",
        secondLanguage: null,
        security: "Reliability",
        skills: ["1"],
        status: "Indeterminate",
        street: "235 Queen Street",
        talentMatrixResult: "Exceptional talent",
        team: "ABC Team",
        telephone: "343-291-1366",
        twitterUrl: "https://www.baidu.com",
        yearsOfService: 5.0
      }}
      editable={true}
      windowWidth={1400}
    />
  );

  const classes = [
    EditCareerOverviewController,
    EditCompetenciesController,
    EditDevelopmentalGoalsController,
    EditEducationController,
    EditSkillController,

    EditLanguageProficiencyController,
    EditManagerController,
    EditTalentManagementController,

    EditLabelCardsController,
    EditPrimaryInformationController,
    EditProfilePictureController
  ];

  classes.forEach(val => {
    let instances = wrapper.find({
      button: val
    });
    expect(instances.length > 0).toBe(true);
  });

  const outerEditButtons = wrapper.find(".outerButton");
  expect(outerEditButtons.length).toBe(0);

  const innerEditButtons = wrapper.find(".innerButton");
  expect(innerEditButtons.length).toBe(11);

  const editWrappers = wrapper.find("EditWrapperView");
  expect(editWrappers.length).toBe(11);

  const cards = wrapper.find("Card");
  expect(cards.length).toBe(10);

  const navigationBarViews = wrapper.find("NavigationBarView");
  expect(navigationBarViews.length).toBe(1);

  const primaryGroups = wrapper.find("PrimaryLayoutGroupView");
  expect(primaryGroups.length).toBe(1);

  const secondaryGroups = wrapper.find("SecondaryLayoutGroupView");
  expect(secondaryGroups.length).toBe(1);
});

it("Non-editable profile view contains expected components", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutView

      editable={false}
      windowWidth={1400}
    />
  );

  const classes = [
    "EditCareerOverviewController",
    "EditCompetenciesController",
    "EditDevelopmentalGoalsController",
    "EditEducationController",
    "EditSkillController",

    "EditLanguageProficiencyController",
    "EditManagerController",
    "EditTalentManagementController",

    "EditLabelCardsController",
    "EditPrimaryInformationController",
    "EditProfilePictureController"
  ];

  classes.forEach(val => {
    let instances = wrapper.find(val);
    expect(instances.length).toBe(0);
  });

  const outerEditButtons = wrapper.find(".outerButton");
  expect(outerEditButtons.length).toBe(0);

  const innerEditButtons = wrapper.find(".innerButton");
  expect(innerEditButtons.length).toBe(0);

  const editWrappers = wrapper.find("EditWrapperView");
  expect(editWrappers.length).toBe(11);

  const cards = wrapper.find("Card");
  expect(cards.length).toBe(10);

  const navigationBarViews = wrapper.find("NavigationBarView");
  expect(navigationBarViews.length).toBe(1);

  const primaryGroups = wrapper.find("PrimaryLayoutGroupView");
  expect(primaryGroups.length).toBe(1);

  const secondaryGroups = wrapper.find("SecondaryLayoutGroupView");
  expect(secondaryGroups.length).toBe(1);
});
*/
