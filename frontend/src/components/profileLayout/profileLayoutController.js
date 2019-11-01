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
        dropdownOptions={{
          oralGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          writingGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          readingGrade: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          firstLanguage: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          readingMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          writingMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          oralMonth: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          competencies: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          developmentalGoals: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          skills: [
            { name: "1", value: "1", text: "1", key: "1" },
            { name: "2", value: "2", text: "2", key: "2" },
            { name: "3", value: "3", text: "3", key: "3" }
          ],
          firstName: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          lastName: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          directorate: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          division: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          branch: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          sector: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          department: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          team: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          telephone: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          cellphone: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          email: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ],
          location: [
            { key: "1", text: "1", value: "1" },
            { key: "2", text: "2", value: "2" }
          ]
        }}
        editable={true}
        keycloak={keycloak}
        profileInfo={{
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
          groupOrLevel: "CS 04",
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
        windowWidth={this.state.windowWidth}
      />
    );
  }

  determineWidth() {
    this.setState({ windowWidth: window.innerWidth });
  }
}
