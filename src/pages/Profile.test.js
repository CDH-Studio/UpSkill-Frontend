import React from "react";
import flushPromises from "flush-promises";

import Profile from "./profile";

import axios from "axios";

import wrapThenMount from "../__mocks__/componentWrapper";

/*
    () => {
    return { get: mockGet };s
  });
});*/

//import ProfileLayoutView from "./profileLayoutView";
/*

*/

const PUBLIC_PROFILE_DATA = {
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
  firstName: "Mary",
  lastName: "Doe",
  branch: {
    en: null,
    fr: null
  },
  organizationList: [
    {
      en: "Innovation, Science and Economic Development Canada",
      fr: "Innovation, Sciences et Développement économique Canada"
    },
    {
      en: "Innovation, Science and Economic Development Canada",
      fr: "Innovation, Sciences et Développement économique Canada"
    },
    {
      en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE"
    },
    {
      en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE"
    },
    {
      en: "Chief Information Office",
      fr: "Bureau de l'information en chef"
    },
    {
      en: "Chief Information Office",
      fr: "Bureau de l'information en chef"
    },
    {
      en: "Digital Services Division",
      fr: "Division des services numériques"
    },
    {
      en: "Digital Services Division",
      fr: "Division des services numériques"
    },
    {
      en: "Business Line Solutions Directorate",
      fr: "Direction des solutions métiers"
    },
    {
      en: "Director General's Office",
      fr: "Bureau du directeur général"
    }
  ],
  email: "mary.doe@canada.ca",
  location: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  telephone: "343-123-4567",
  cellphone: "613-123-4567",
  jobTitle: {
    en: "Manager",
    fr: "Gestionaire"
  },
  flagged: false,
  linkedinUrl: "linkedinUrl",
  githubUrl: "githubUrl",
  twitterUrl: null,
  team: "CDH Studio",
  acting: {
    id: null,
    description: null
  },
  actingPeriodStartDate: null,
  actingPeriodEndDate: null,
  classification: {
    id: null,
    description: null
  },
  temporaryRole: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  security: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  indeterminate: true,
  manager: "Chahine El Chaar",
  careerMobility: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  exFeeder: null,
  talentMatrixResult: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  gradedOnSecondLanguage: true,
  secondaryOralDate: null,
  secondaryOralProficiency: null,
  secondaryReadingDate: null,
  secondaryReadingProficiency: null,
  secondaryWritingDate: null,
  secondaryWritingProficiency: null,
  secondLanguage: null,
  skills: [],
  competencies: [],
  developmentalGoals: [],
  education: [],
  careerSummary: [
    {
      subheader: "Healt Canada",
      header: "Medical Officer",
      content:
        "Overseeing the medical care of patients and the functions performed by medical staff",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    },
    {
      subheader: "Canada Revenue Agency",
      header: "Financial Analyst",
      content: "Cancelled payments and monitored unauthorized purchases",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    },
    {
      subheader: "Banque du Canada",
      header: "Gestionnaire de projet TI",
      content:
        "Livrer les project à temps et maintenir le contact avec les clients",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    }
  ],
  projects: [],
  interestedInRemote: true,
  relocationLocations: [],
  lookingForNewJob: null
};

const PUBLIC_API_PROFILE_URL =
  "localhost:8080/api/profile/faba08aa-ffe3-11e9-8d71-362b9e155667";

const PUBLIC_WINDOW_PROFILE_URL =
  "localhost:3000/secured/profile/faba08aa-ffe3-11e9-8d71-362b9e155667";

import { Item } from "semantic-ui-react";
import { JestEnvironment } from "@jest/environment";
import JestMock from "jest-mock";

jest.mock("../config", () => ({ backendAddress: "localhost:8080/" }));

it("/Profile page makes expected axios call on a public profile", async () => {
  axios._addGetRoute(PUBLIC_API_PROFILE_URL, async () => ({
    data: PUBLIC_PROFILE_DATA
  }));

  delete window.location;
  window.location = {
    reload: jest.fn(),
    toString: () =>
      "localhost:3000/secured/profile/faba08aa-ffe3-11e9-8d71-362b9e155667"
  };

  wrapThenMount(<Profile changeLanguage={jest.fn()} keycloak={{}} />);

  console.log("axios routes", axios._getGetRoutes());
  await flushPromises();

  const api_profile_route = axios._getGetRoutes()[PUBLIC_API_PROFILE_URL];

  expect(api_profile_route.getCallCount()).toEqual(1);
});

const PRIVATE_PROFILE_DATA = {
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
  firstName: "Mary",
  lastName: "Doe",
  branch: {
    en: null,
    fr: null
  },
  organizationList: [
    {
      en: "Innovation, Science and Economic Development Canada",
      fr: "Innovation, Sciences et Développement économique Canada"
    },
    {
      en: "Innovation, Science and Economic Development Canada",
      fr: "Innovation, Sciences et Développement économique Canada"
    },
    {
      en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE"
    },
    {
      en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
      fr: "SECTEUR DES SERVICES DE TRANSFORMATION NUMERIQUE"
    },
    {
      en: "Chief Information Office",
      fr: "Bureau de l'information en chef"
    },
    {
      en: "Chief Information Office",
      fr: "Bureau de l'information en chef"
    },
    {
      en: "Digital Services Division",
      fr: "Division des services numériques"
    },
    {
      en: "Digital Services Division",
      fr: "Division des services numériques"
    },
    {
      en: "Business Line Solutions Directorate",
      fr: "Direction des solutions métiers"
    },
    {
      en: "Director General's Office",
      fr: "Bureau du directeur général"
    }
  ],
  email: "mary.doe@canada.ca",
  location: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  telephone: "343-123-4567",
  cellphone: "613-123-4567",
  jobTitle: {
    en: "Manager",
    fr: "Gestionaire"
  },
  flagged: false,
  linkedinUrl: "linkedinUrl",
  githubUrl: "githubUrl",
  twitterUrl: null,
  team: "CDH Studio",
  acting: {
    id: null,
    description: null
  },
  actingPeriodStartDate: null,
  actingPeriodEndDate: null,
  classification: {
    id: null,
    description: null
  },
  temporaryRole: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  security: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  indeterminate: true,
  manager: "Chahine El Chaar",
  careerMobility: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  exFeeder: null,
  talentMatrixResult: {
    id: null,
    description: {
      en: null,
      fr: null
    }
  },
  gradedOnSecondLanguage: true,
  secondaryOralDate: null,
  secondaryOralProficiency: null,
  secondaryReadingDate: null,
  secondaryReadingProficiency: null,
  secondaryWritingDate: null,
  secondaryWritingProficiency: null,
  secondLanguage: null,
  skills: [],
  competencies: [],
  developmentalGoals: [],
  education: [],
  careerSummary: [
    {
      subheader: "Healt Canada",
      header: "Medical Officer",
      content:
        "Overseeing the medical care of patients and the functions performed by medical staff",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    },
    {
      subheader: "Canada Revenue Agency",
      header: "Financial Analyst",
      content: "Cancelled payments and monitored unauthorized purchases",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    },
    {
      subheader: "Banque du Canada",
      header: "Gestionnaire de projet TI",
      content:
        "Livrer les project à temps et maintenir le contact avec les clients",
      startDate: "2019-12-16T18:46:50.626Z",
      endDate: "2019-12-16T18:46:50.626Z"
    }
  ],
  projects: [],
  interestedInRemote: true,
  relocationLocations: [],
  lookingForNewJob: null
};

const PRIVATE_API_PROFILE_URL =
  "localhost:8080/api/private/profile/1e3b88e6-2035-11ea-8771-fbf73ca08e3f";

const PRIVATE_WINDOW_PROFILE_URL = "localhost:3000/secured/profile/";

it("/Profile page makes expected axios call on a private profile", async () => {
  debugger;
  axios._addGetRoute(PRIVATE_API_PROFILE_URL, async () => ({
    data: PRIVATE_PROFILE_DATA
  }));

  delete window.location;
  window.location = {
    reload: jest.fn(),
    toString: () => PRIVATE_WINDOW_PROFILE_URL
  };

  delete window.localStorage;
  window.localStorage = {
    getItem: name => ({ userId: "1e3b88e6-2035-11ea-8771-fbf73ca08e3f" }[name])
  };

  wrapThenMount(<Profile changeLanguage={jest.fn()} keycloak={{}} />);

  console.log("axios routes", axios._getGetRoutes());
  debugger;
  await flushPromises();
  debugger;
  const api_profile_route = axios._getGetRoutes()[PRIVATE_API_PROFILE_URL];

  expect(api_profile_route.getCallCount()).toEqual(1);
});

/*
it("ProfileLayoutController with filled fields contains expected components & values", () => {
  debugger;
  
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 1920
  });
  debugger;
  Object.defineProperty(process, "env", {
    writable: true,
    configurable: true,
    value: { REACT_APP_API_ADDRESS: "http://localhost:8080/" }
  });

  const wrapper = wrapThenMount(<Profile />);
  expect(axios.getUrlCalls()).toEqual([
    "http://localhost:8080/api/profile/null"
  ]);
  expect(1 + 1).toEqual(2);
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
