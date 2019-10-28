import React from "react";
import ProfileLayoutView from "./profileLayoutView";
import wrapThenMount from "../../../__mocks__/componentWrapper";

it("Editable profile view contains expected components", () => {
  const wrapper = wrapThenMount(
    <ProfileLayoutView
      profileInfo={{
        branch: "Chief Information Office Branch",

        building: "CD Howe, Room 368l",
        careerMobility: "Ready for movement",
        careerSummary: [
          {
            content: "Payment Analyst",
            endDate: "Present",
            name: "Payments Canada",
            startDate: "Aug 2017"
          }
        ],
        city: "Ontario",

        competencies: ["Thinking things through", "Achieve results"],
        country: "Canada",
        developmentalGoals: ["Mobalize people"],

        education: [
          {
            content: "Telpher School of Buisness",
            endDate: "Apr 2009",
            name: "Masters of Business Administration",
            startDate: "Sept 2007"
          },
          {
            content: "Carleton University",
            endDate: "Apr 2005",
            name: "Software Engineering",
            startDate: "Sept 2000"
          }
        ],
        email: "mary.smith@canada.ca",
        firstLanguage: "English",
        firstName: "Massadry",
        GitHubURL: "https://www.google.com",
        groupOrLevel: "CS 04",
        jobTitle: "Manager, Next Innovation",
        lastName: "Smisdasth",
        LinkedInURL: "https://www.bing.ca",
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
        secondaryOralGrade: "C",
        secondaryReadingDate: "Oct 17 2020",
        secondaryReadingGrade: "C",
        secondaryWritingDate: "Oct 17 2021",
        secondaryWritingGrade: "B",
        secondLanguage: null,
        security: "Reliability",
        skills: ["Excel", "Project management", "Change management"],
        status: "Indeterminate",
        street: "235 Queen Street",
        talentMatrixResult: "Exceptional talent",
        team: "ABC Team",
        telephone: "343-291-1366",
        TwitterURL: "https://www.baidu.com",
        yearsOfService: 5.0
      }}
      editable={true}
      windowWidth={1400}
    />
  );

  const names = ["edit"];

  const outerEditButtons = wrapper.find(".outerButton");
  expect(outerEditButtons.length).toBe(1);

  const innerEditButtons = wrapper.find(".innerButton");
  expect(innerEditButtons.length).toBe(12);

  const editWrappers = wrapper.find("EditWrapperView");
  expect(editWrappers.length).toBe(13);

  const cards = wrapper.find("Card");
  expect(cards.length).toBe(13);

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
        branch: "Chief Information Office Branch",

        building: "CD Howe, Room 368l",
        careerMobility: "Ready for movement",
        careerSummary: [
          {
            content: "Payment Analyst",
            endDate: "Present",
            name: "Payments Canada",
            startDate: "Aug 2017"
          }
        ],
        city: "Ontario",

        competencies: ["Thinking things through", "Achieve results"],
        country: "Canada",
        developmentalGoals: ["Mobalize people"],

        education: [
          {
            content: "Telpher School of Buisness",
            endDate: "Apr 2009",
            name: "Masters of Business Administration",
            startDate: "Sept 2007"
          },
          {
            content: "Carleton University",
            endDate: "Apr 2005",
            name: "Software Engineering",
            startDate: "Sept 2000"
          }
        ],
        email: "mary.smith@canada.ca",
        firstLanguage: "English",
        firstName: "Massadry",
        GitHubURL: "https://www.google.com",
        groupOrLevel: "CS 04",
        jobTitle: "Manager, Next Innovation",
        lastName: "Smisdasth",
        LinkedInURL: "https://www.bing.ca",
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
        secondaryOralGrade: "C",
        secondaryReadingDate: "Oct 17 2020",
        secondaryReadingGrade: "C",
        secondaryWritingDate: "Oct 17 2021",
        secondaryWritingGrade: "B",
        secondLanguage: null,
        security: "Reliability",
        skills: ["Excel", "Project management", "Change management"],
        status: "Indeterminate",
        street: "235 Queen Street",
        talentMatrixResult: "Exceptional talent",
        team: "ABC Team",
        telephone: "343-291-1366",
        TwitterURL: "https://www.baidu.com",
        yearsOfService: 5.0
      }}
      editable={false}
      windowWidth={1400}
    />
  );

  const outerEditButtons = wrapper.find(".outerButton");
  expect(outerEditButtons.length).toBe(0);

  const innerEditButtons = wrapper.find(".innerButton");
  expect(innerEditButtons.length).toBe(0);

  const editWrappers = wrapper.find("EditWrapperView");
  expect(editWrappers.length).toBe(13);

  const cards = wrapper.find("Card");
  expect(cards.length).toBe(13);

  const navigationBarViews = wrapper.find("NavigationBarView");
  expect(navigationBarViews.length).toBe(1);

  const primaryGroups = wrapper.find("PrimaryLayoutGroupView");
  expect(primaryGroups.length).toBe(1);

  const secondaryGroups = wrapper.find("SecondaryLayoutGroupView");
  expect(secondaryGroups.length).toBe(1);
});
