import React, { Component } from "react";
import { injectIntl } from "react-intl";

import ProfileLayoutController from "../components/profileLayout/profileLayoutController";

class Profile extends Component {
  goto = link => this.props.history.push(link);

  render() {
    const { changeLanguage, keycloak } = this.props;
    return (
      <ProfileLayoutController
        changeLanguage={changeLanguage}
        keycloak={keycloak}
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
          secondaryOralGrade: "C",
          secondaryReadingDate: "Oct 17 2020",
          secondaryReadingGrade: "C",
          secondaryWritingDate: "Oct 17 2021",
          secondaryWritingGrade: "B",
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
        redirectFunction={this.goto}
      />
    );
  }
}

export default injectIntl(Profile);
