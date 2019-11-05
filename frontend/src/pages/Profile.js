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
          acting: { en: "EX 01" },
          actingPeriodStartDate: "01/10/20",
          actingPeriodEndDate: "10/10/21",
          branch: { en: "Chief Information Office Branch" },
          careerMobility: { en: "Ready for movement" },
          careerSummary: [
            {
              content: "this is content\nmore content",
              endDate: "Present",
              header: "Payments Canada",
              startDate: "Aug 2017",
              subheader: "Payment Analyst"
            }
          ],
          city: { en: "Ontario" },

          competencies: ["2"],
          country: { en: "Canada" },
          developmentalGoals: ["3"],

          education: [
            {
              header: "header",
              subheader: "subheader",
              content: "content\ncontent2",
              startDate: "stdat",
              endDate: "end date"
            }
          ],
          email: "mary.smith@canada.ca",
          firstLanguage: { en: "English" },
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
          province: { en: "Ottawa" },
          secondaryOralDate: "Nov 29 2018",
          secondaryOralGrade: "C",
          secondaryReadingDate: "Oct 17 2020",
          secondaryReadingGrade: "C",
          secondaryWritingDate: "Oct 17 2021",
          secondaryWritingGrade: "B",
          secondLanguage: null,
          security: { en: "Reliability" },
          skills: ["1"],
          status: { en: "Indeterminate" },
          street: "235 Queen Street",
          talentMatrixResult: { en: "Exceptional talent" },
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
