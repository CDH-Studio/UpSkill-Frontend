import React, { Component } from "react";

import ProfileLayoutView from "./profileLayoutView";

export default class ProfileLayoutController extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    this.determineWidth = this.determineWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.determineWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.determineWidth);
  }

  render() {
    const { changeLanguage, keycloak } = this.props;

    return (
      <ProfileLayoutView
        changeLanguage={changeLanguage}
        keycloak={keycloak}
        windowWidth={this.state.windowWidth}
        profileInfo={{
          country: "Canada",
          firstName: "Massadry",
          lastName: "Smisdasth",
          jobTitle: "Manager, Next Innovation",
          telephone: "343-291-1366",
          mobile: "613-402-8224",
          email: "mary.smith@canada.ca",
          team: "ABC Team",
          branch: "Chief Information Office Branch",
          organizationList: [
            "ABC Directorate",
            "ABC Division",
            "Chief Information Office Branch",
            "Digital Transformation Service Sector",
            "Innovation, Science and Economic Development Canada"
          ],
          building: "CD Howe, Room 368l",
          street: "235 Queen Street",
          province: "Ottawa",
          city: "Ontario",
          PO: "K1A 0H5",
          LinkedInURL: "https://www.bing.ca",
          GitHubURL: "https://www.google.com",
          TwitterURL: "https://www.baidu.com",

          status: "Indeterminate",
          yearsOfService: 5.0,
          groupOrLevel: "CS 04",
          security: "Reliability",
          manager: "Chahine El Chaar",
          firstLanguage: "English",
          secondLanguage: null,
          secondaryReadingGrade: "C",
          secondaryReadingDate: "Oct 17 2020",
          secondaryWritingGrade: "B",
          secondaryWritingDate: "Oct 17 2021",
          secondaryOralGrade: "C",
          secondaryOralDate: "Nov 29 2018",
          careerMobility: "Ready for movement",
          talentMatrixResult: "Exceptional talent",
          skills: ["Excel", "Project management", "Change management"],
          competencies: ["Thinking things through", "Achieve results"],
          developmentalGoals: ["Mobalize people"],

          education: [
            {
              content: "Telpher School of Buisness",
              name: "Masters of Business Administration",
              startDate: "Sept 2007",
              endDate: "Apr 2009"
            },
            {
              content: "Carleton University",
              name: "Software Engineering",
              startDate: "Sept 2000",
              endDate: "Apr 2005"
            }
          ],
          careerSummary: [
            {
              name: "Payments Canada",
              content: "Payment Analyst",
              startDate: "Aug 2017",
              endDate: "Present"
            }
          ]
        }}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
}
