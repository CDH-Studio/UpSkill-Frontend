import React from "react";
import ProfileLayoutView from "./profileLayoutView";
import wrapThenMount from "../../../__mocks__/componentWrapper";

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
        mobile: "613-402-8224",
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
        mobile: "613-402-8224",
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
