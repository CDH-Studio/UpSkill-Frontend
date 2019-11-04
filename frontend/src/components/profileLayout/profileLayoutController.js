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
        editable={true}
        keycloak={keycloak}
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
        windowWidth={this.state.windowWidth}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
}
