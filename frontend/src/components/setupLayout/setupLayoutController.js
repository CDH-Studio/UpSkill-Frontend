import React, { Component } from "react";
import { injectIntl } from "react-intl";
import axios from "axios";

import { formatOptions } from "../editForms/common/formTools";
import config from "../../config";

import SetupLayoutView from "./setupLayoutView";

import CareerOverviewFormController from "../editForms/careerOverviewForm/careerOverviewFormController";
import CompetenciesFormController from "../editForms/competenciesForm/competenciesFormController";
import DevelopmentalGoalsFormController from "../editForms/developmentalGoalsForm/developmentalGoalsFormController";
import EducationFormController from "../editForms/educationForm/educationFormController";
import LabelCardFormController from "../editForms/labelCardForm/labelCardFormController";
import LanguageProficiencyFormController from "../editForms/languageProficiencyForm/languageProficiencyFormController";
import ManagerFormController from "../editForms/managerForm/managerFormController";
import PrimaryInformationFormController from "../editForms/primaryInformationForm/primaryInformationFormController";
import SkillsFormController from "../editForms/skillsForm/skillsFormController";
import TalentManagmentController from "../editForms/talentManagementForm/talentManagementFormController";
import ProjectsFormController from "../editForms/projectsForm/projectsFormController";

const { backendAddress } = config;

const epo = {
  skills: [
    {
      key: "413ed44c-07ee-11ea-9b1f-3fcf604e7702",
      value: "413ed44c-07ee-11ea-9b1f-3fcf604e7702",
      text: "Specification / Requirements Development (Request for proposal) "
    },
    {
      key: "413efb3e-07ee-11ea-9b20-d35728e30bb8",
      value: "413efb3e-07ee-11ea-9b20-d35728e30bb8",
      text: "Vendor Relations"
    },
    {
      key: "413efb3f-07ee-11ea-9b21-4fba05b0bc59",
      value: "413efb3f-07ee-11ea-9b21-4fba05b0bc59",
      text: "Professional Services Evaluation and Selection"
    },
    {
      key: "413f223a-07ee-11ea-9b22-af1bc9bb6fcb",
      value: "413f223a-07ee-11ea-9b22-af1bc9bb6fcb",
      text: "Product Evaluation and Selection"
    },
    {
      key: "413f223b-07ee-11ea-9b23-4f61d2169fbd",
      value: "413f223b-07ee-11ea-9b23-4f61d2169fbd",
      text: "Contract Administration"
    },
    {
      key: "413f223c-07ee-11ea-9b24-fbc97a119ec7",
      value: "413f223c-07ee-11ea-9b24-fbc97a119ec7",
      text: "Acquisition Card Administration "
    },
    {
      key: "413f492c-07ee-11ea-9b25-f7c92a382c68",
      value: "413f492c-07ee-11ea-9b25-f7c92a382c68",
      text: "Asset Management"
    },
    {
      key: "413f492d-07ee-11ea-9b26-db4f283dc365",
      value: "413f492d-07ee-11ea-9b26-db4f283dc365",
      text: "Polices & Procedures"
    },
    {
      key: "413f701e-07ee-11ea-9b27-379bcf79912d",
      value: "413f701e-07ee-11ea-9b27-379bcf79912d",
      text: "Supply Arrangements"
    },
    {
      key: "413f701f-07ee-11ea-9b28-cfd97bcf39c9",
      value: "413f701f-07ee-11ea-9b28-cfd97bcf39c9",
      text: "General Ledger"
    },
    {
      key: "413f7020-07ee-11ea-9b29-cbeb9fa589f7",
      value: "413f7020-07ee-11ea-9b29-cbeb9fa589f7",
      text: "Accounts Receivable"
    },
    {
      key: "413f9710-07ee-11ea-9b2a-572c5c9d1d34",
      value: "413f9710-07ee-11ea-9b2a-572c5c9d1d34",
      text: "Accounts Payable"
    },
    {
      key: "413f9711-07ee-11ea-9b2b-8f6e4f2809ee",
      value: "413f9711-07ee-11ea-9b2b-8f6e4f2809ee",
      text: "Budget / Finance"
    },
    {
      key: "413f9712-07ee-11ea-9b2c-23f1f75d8fee",
      value: "413f9712-07ee-11ea-9b2c-23f1f75d8fee",
      text: "Financial Applications"
    },
    {
      key: "413fbe0c-07ee-11ea-9b2d-b75a59f949d0",
      value: "413fbe0c-07ee-11ea-9b2d-b75a59f949d0",
      text: "Polices & Procedures"
    },
    {
      key: "413fbe0d-07ee-11ea-9b2e-5b0aa4f83059",
      value: "413fbe0d-07ee-11ea-9b2e-5b0aa4f83059",
      text: "Classification Process"
    },
    {
      key: "413fe508-07ee-11ea-9b2f-0764a8d31dcd",
      value: "413fe508-07ee-11ea-9b2f-0764a8d31dcd",
      text: "Polices & Procedures"
    },
    {
      key: "413fe509-07ee-11ea-9b30-2f60c0b58660",
      value: "413fe509-07ee-11ea-9b30-2f60c0b58660",
      text: "Staffing Process"
    },
    {
      key: "413fe50a-07ee-11ea-9b31-7f29b684da15",
      value: "413fe50a-07ee-11ea-9b31-7f29b684da15",
      text: "Training Process"
    },
    {
      key: "41400bfa-07ee-11ea-9b32-dbf8344e9481",
      value: "41400bfa-07ee-11ea-9b32-dbf8344e9481",
      text: "Requirements Definition"
    },
    {
      key: "41400bfb-07ee-11ea-9b33-9b1fd2e979e1",
      value: "41400bfb-07ee-11ea-9b33-9b1fd2e979e1",
      text: "Functional Specifications"
    },
    {
      key: "41400bfc-07ee-11ea-9b34-cfb53fcc3991",
      value: "41400bfc-07ee-11ea-9b34-cfb53fcc3991",
      text: "Programming Code to Specification"
    },
    {
      key: "414032f6-07ee-11ea-9b35-832ec0e33187",
      value: "414032f6-07ee-11ea-9b35-832ec0e33187",
      text: "Software Unit Testing"
    },
    {
      key: "414032f7-07ee-11ea-9b36-27b51063d203",
      value: "414032f7-07ee-11ea-9b36-27b51063d203",
      text: "System Analysis"
    },
    {
      key: "414059de-07ee-11ea-9b37-4342c277b4f0",
      value: "414059de-07ee-11ea-9b37-4342c277b4f0",
      text: "Code Debugging and Bug Fixing"
    },
    {
      key: "414059df-07ee-11ea-9b38-0f4964a1f8d4",
      value: "414059df-07ee-11ea-9b38-0f4964a1f8d4",
      text: "Design Specifications"
    },
    {
      key: "414059e0-07ee-11ea-9b39-5f4d8a702a00",
      value: "414059e0-07ee-11ea-9b39-5f4d8a702a00",
      text: "Enterprise App. Integration (EAI)"
    },
    {
      key: "414080d0-07ee-11ea-9b3a-2fff3873f7cf",
      value: "414080d0-07ee-11ea-9b3a-2fff3873f7cf",
      text: "Life Cycle for Software"
    },
    {
      key: "414080d1-07ee-11ea-9b3b-3b6dc92877fe",
      value: "414080d1-07ee-11ea-9b3b-3b6dc92877fe",
      text: "Systems Integration"
    },
    {
      key: "4140a7c2-07ee-11ea-9b3c-3ffcc73638df",
      value: "4140a7c2-07ee-11ea-9b3c-3ffcc73638df",
      text: "Technical Specifications"
    },
    {
      key: "4140a7c3-07ee-11ea-9b3d-7f041106e45e",
      value: "4140a7c3-07ee-11ea-9b3d-7f041106e45e",
      text: "User Interface Design (GUI)"
    },
    {
      key: "4140a7c4-07ee-11ea-9b3e-cfbffeb056d4",
      value: "4140a7c4-07ee-11ea-9b3e-cfbffeb056d4",
      text: "Software Architecture"
    },
    {
      key: "4140cebe-07ee-11ea-9b3f-076be6d9d017",
      value: "4140cebe-07ee-11ea-9b3f-076be6d9d017",
      text: "Software Support"
    },
    {
      key: "4140cebf-07ee-11ea-9b40-53576a809aca",
      value: "4140cebf-07ee-11ea-9b40-53576a809aca",
      text: "Enhancements to Packaged Software"
    },
    {
      key: "4140cec0-07ee-11ea-9b41-0f15b25d78ec",
      value: "4140cec0-07ee-11ea-9b41-0f15b25d78ec",
      text: "HTML 5"
    },
    {
      key: "4140f5e2-07ee-11ea-9b42-b7d0e45b6536",
      value: "4140f5e2-07ee-11ea-9b42-b7d0e45b6536",
      text: "AJAX"
    },
    {
      key: "4140f5e3-07ee-11ea-9b43-0fc9a8d66904",
      value: "4140f5e3-07ee-11ea-9b43-0fc9a8d66904",
      text: "JavaServer Pages"
    },
    {
      key: "41411cac-07ee-11ea-9b44-c70fd9cbd553",
      value: "41411cac-07ee-11ea-9b44-c70fd9cbd553",
      text: "JDBC"
    },
    {
      key: "41411cad-07ee-11ea-9b45-37527749427c",
      value: "41411cad-07ee-11ea-9b45-37527749427c",
      text: "ODBC"
    },
    {
      key: "41411cae-07ee-11ea-9b46-0b4d1dc1e87d",
      value: "41411cae-07ee-11ea-9b46-0b4d1dc1e87d",
      text: "OLE"
    },
    {
      key: "4141439e-07ee-11ea-9b47-2fdf2be998bc",
      value: "4141439e-07ee-11ea-9b47-2fdf2be998bc",
      text: "REST"
    },
    {
      key: "4141439f-07ee-11ea-9b48-9b3d7971e046",
      value: "4141439f-07ee-11ea-9b48-9b3d7971e046",
      text: "RSS: Real Simple Syndication "
    },
    {
      key: "41416a9a-07ee-11ea-9b49-63ad077b4f51",
      value: "41416a9a-07ee-11ea-9b49-63ad077b4f51",
      text: "Servlet"
    },
    {
      key: "41416a9b-07ee-11ea-9b4a-3b316df983b7",
      value: "41416a9b-07ee-11ea-9b4a-3b316df983b7",
      text: "Web Content Accessibility Guidelines (WCAG) 2.0"
    },
    {
      key: "41416a9c-07ee-11ea-9b4b-e7998f0b80c9",
      value: "41416a9c-07ee-11ea-9b4b-e7998f0b80c9",
      text: "Web Services"
    },
    {
      key: "4141918c-07ee-11ea-9b4c-1f4f590bcfd6",
      value: "4141918c-07ee-11ea-9b4c-1f4f590bcfd6",
      text: "Win 32 API"
    },
    {
      key: "4141918d-07ee-11ea-9b4d-87cd2fb50287",
      value: "4141918d-07ee-11ea-9b4d-87cd2fb50287",
      text: "Active X"
    },
    {
      key: "4141918e-07ee-11ea-9b4e-3b8e6e8f5f3c",
      value: "4141918e-07ee-11ea-9b4e-3b8e6e8f5f3c",
      text: "CGI"
    },
    {
      key: "4141b87e-07ee-11ea-9b4f-d71ca521fdb2",
      value: "4141b87e-07ee-11ea-9b4f-d71ca521fdb2",
      text: "DOM (Document Object Model)"
    },
    {
      key: "4141b87f-07ee-11ea-9b50-579766101e30",
      value: "4141b87f-07ee-11ea-9b50-579766101e30",
      text: "Hibernate"
    },
    {
      key: "4141df7a-07ee-11ea-9b51-73a3ea9cf8e6",
      value: "4141df7a-07ee-11ea-9b51-73a3ea9cf8e6",
      text: "J2EE"
    },
    {
      key: "4141df7b-07ee-11ea-9b52-6ffa1d48e9cd",
      value: "4141df7b-07ee-11ea-9b52-6ffa1d48e9cd",
      text: "JavaBeans"
    },
    {
      key: "4141df7c-07ee-11ea-9b53-f7561a023c92",
      value: "4141df7c-07ee-11ea-9b53-f7561a023c92",
      text: "JNDI"
    },
    {
      key: "41420662-07ee-11ea-9b54-0733cf2f7c07",
      value: "41420662-07ee-11ea-9b54-0733cf2f7c07",
      text: "MAPI (Messaging API)"
    },
    {
      key: "41420663-07ee-11ea-9b55-bb955e430988",
      value: "41420663-07ee-11ea-9b55-bb955e430988",
      text: "Object-Oriented"
    },
    {
      key: "41420664-07ee-11ea-9b56-bb4ad6ac445b",
      value: "41420664-07ee-11ea-9b56-bb4ad6ac445b",
      text: "WinSock"
    },
    {
      key: "41422d5e-07ee-11ea-9b57-4bdf19eba788",
      value: "41422d5e-07ee-11ea-9b57-4bdf19eba788",
      text: "ASP .NET"
    },
    {
      key: "41422d5f-07ee-11ea-9b58-cbde0dcbadad",
      value: "41422d5f-07ee-11ea-9b58-cbde0dcbadad",
      text: "ASP"
    },
    {
      key: "41425450-07ee-11ea-9b59-abd52dfae801",
      value: "41425450-07ee-11ea-9b59-abd52dfae801",
      text: "SOAP"
    },
    {
      key: "41425451-07ee-11ea-9b5a-1b8bfbecfa26",
      value: "41425451-07ee-11ea-9b5a-1b8bfbecfa26",
      text: "System Architect"
    },
    {
      key: "41425452-07ee-11ea-9b5b-07a7dd612eed",
      value: "41425452-07ee-11ea-9b5b-07a7dd612eed",
      text: "JMS: Java Message Service"
    },
    {
      key: "41427b42-07ee-11ea-9b5c-af8dd3c4b3b2",
      value: "41427b42-07ee-11ea-9b5c-af8dd3c4b3b2",
      text: "SDLC (e.g., Agile, Scrum, etc.)"
    },
    {
      key: "41427b43-07ee-11ea-9b5d-133ee4d8dc1f",
      value: "41427b43-07ee-11ea-9b5d-133ee4d8dc1f",
      text: "UML"
    },
    {
      key: "41427b44-07ee-11ea-9b5e-0f7d315e8302",
      value: "41427b44-07ee-11ea-9b5e-0f7d315e8302",
      text: "Business Process Execution Language (BPEL)"
    },
    {
      key: "4142a23e-07ee-11ea-9b5f-1b87933e58c9",
      value: "4142a23e-07ee-11ea-9b5f-1b87933e58c9",
      text: "Hybrid Mobile Application Development"
    },
    {
      key: "4142a23f-07ee-11ea-9b60-4355cb185f04",
      value: "4142a23f-07ee-11ea-9b60-4355cb185f04",
      text: "Responsive Design"
    },
    {
      key: "4142a240-07ee-11ea-9b61-9f2b55c402b5",
      value: "4142a240-07ee-11ea-9b61-9f2b55c402b5",
      text: "Web Experience Toolkit"
    },
    {
      key: "4142c930-07ee-11ea-9b62-8f5408e89f9a",
      value: "4142c930-07ee-11ea-9b62-8f5408e89f9a",
      text: "Web Mobile Application Development"
    },
    {
      key: "4142c931-07ee-11ea-9b63-1b7c86bf07af",
      value: "4142c931-07ee-11ea-9b63-1b7c86bf07af",
      text: "Test Planning"
    },
    {
      key: "4142f02c-07ee-11ea-9b64-775a5ed32c6b",
      value: "4142f02c-07ee-11ea-9b64-775a5ed32c6b",
      text: "Testing Methodologies"
    },
    {
      key: "4142f02d-07ee-11ea-9b65-3f9a8ef2e8df",
      value: "4142f02d-07ee-11ea-9b65-3f9a8ef2e8df",
      text: "Quality Management"
    },
    {
      key: "4142f02e-07ee-11ea-9b66-af615e82c478",
      value: "4142f02e-07ee-11ea-9b66-af615e82c478",
      text: "Test Case Decision"
    },
    {
      key: "4143171e-07ee-11ea-9b67-57007432f9d7",
      value: "4143171e-07ee-11ea-9b67-57007432f9d7",
      text: "Testing Tools"
    },
    {
      key: "41433e10-07ee-11ea-9b68-bfb268592581",
      value: "41433e10-07ee-11ea-9b68-bfb268592581",
      text:
        "Quality Assurance/Control: Concepts, Standards, Procedures and Operations"
    },
    {
      key: "41433e11-07ee-11ea-9b69-b7670a8cde59",
      value: "41433e11-07ee-11ea-9b69-b7670a8cde59",
      text: "Testing - Unit, System, Integration, Regression, Acceptance "
    },
    {
      key: "41433e12-07ee-11ea-9b6a-6f5b800b9284",
      value: "41433e12-07ee-11ea-9b6a-6f5b800b9284",
      text: "Data Modeling"
    },
    {
      key: "4143650c-07ee-11ea-9b6b-0f8986f26116",
      value: "4143650c-07ee-11ea-9b6b-0f8986f26116",
      text: "Data Flow Diagrams"
    },
    {
      key: "4143650d-07ee-11ea-9b6c-733671e03c41",
      value: "4143650d-07ee-11ea-9b6c-733671e03c41",
      text: "Design Patterns"
    },
    {
      key: "41438bfe-07ee-11ea-9b6d-e38fce806778",
      value: "41438bfe-07ee-11ea-9b6d-e38fce806778",
      text: "Process Design"
    },
    {
      key: "41438bff-07ee-11ea-9b6e-cbac299afb30",
      value: "41438bff-07ee-11ea-9b6e-cbac299afb30",
      text: "Project Development"
    },
    {
      key: "41438c00-07ee-11ea-9b6f-c7e101236370",
      value: "41438c00-07ee-11ea-9b6f-c7e101236370",
      text: "RAD"
    },
    {
      key: "4143b2f0-07ee-11ea-9b70-8b50c430f0b9",
      value: "4143b2f0-07ee-11ea-9b70-8b50c430f0b9",
      text: "Web Graphics Design"
    },
    {
      key: "4143b2f1-07ee-11ea-9b71-d3211fd85e53",
      value: "4143b2f1-07ee-11ea-9b71-d3211fd85e53",
      text: "Business Process Re-Engineering"
    },
    {
      key: "4143b2f2-07ee-11ea-9b72-9b492b0d64be",
      value: "4143b2f2-07ee-11ea-9b72-9b492b0d64be",
      text: "JAD"
    },
    {
      key: "4143d9ec-07ee-11ea-9b73-532e864f1ec4",
      value: "4143d9ec-07ee-11ea-9b73-532e864f1ec4",
      text: "Prototyping"
    },
    {
      key: "4143d9ed-07ee-11ea-9b74-0f067375136b",
      value: "4143d9ed-07ee-11ea-9b74-0f067375136b",
      text: "Component Definition and Design"
    },
    {
      key: "414400e8-07ee-11ea-9b75-df85278c68fd",
      value: "414400e8-07ee-11ea-9b75-df85278c68fd",
      text: "Function Point Analysis"
    },
    {
      key: "414400e9-07ee-11ea-9b76-d3dd3667b084",
      value: "414400e9-07ee-11ea-9b76-d3dd3667b084",
      text: "Information Engineering"
    },
    {
      key: "414427d0-07ee-11ea-9b77-77f6084b07ad",
      value: "414427d0-07ee-11ea-9b77-77f6084b07ad",
      text: "Multitenancy"
    },
    {
      key: "414427d1-07ee-11ea-9b78-fb57b9530520",
      value: "414427d1-07ee-11ea-9b78-fb57b9530520",
      text: "Object-Oriented Design (OOD)"
    },
    {
      key: "41444ed6-07ee-11ea-9b79-47c38a89e2f1",
      value: "41444ed6-07ee-11ea-9b79-47c38a89e2f1",
      text: "Object-Oriented Programming (OOP)"
    },
    {
      key: "41444ed7-07ee-11ea-9b7a-b7388b2effbf",
      value: "41444ed7-07ee-11ea-9b7a-b7388b2effbf",
      text: "Parallelism (e.g., map and reduce, thread mgmt)"
    },
    {
      key: "414475be-07ee-11ea-9b7b-97238c23d290",
      value: "414475be-07ee-11ea-9b7b-97238c23d290",
      text: "Release Management"
    },
    {
      key: "414475bf-07ee-11ea-9b7c-df41800ffb69",
      value: "414475bf-07ee-11ea-9b7c-df41800ffb69",
      text: "Structured Analysis"
    },
    {
      key: "41449cb0-07ee-11ea-9b7d-0fecd3d1aa18",
      value: "41449cb0-07ee-11ea-9b7d-0fecd3d1aa18",
      text: "Structured Design"
    },
    {
      key: "41449cb1-07ee-11ea-9b7e-37919a8a04e2",
      value: "41449cb1-07ee-11ea-9b7e-37919a8a04e2",
      text: "Cross-Browser/Platform Compatibility "
    },
    {
      key: "4144c3ac-07ee-11ea-9b7f-17ff2cd115b7",
      value: "4144c3ac-07ee-11ea-9b7f-17ff2cd115b7",
      text: "Eclipse"
    },
    {
      key: "4144c3ad-07ee-11ea-9b80-f315ea83252d",
      value: "4144c3ad-07ee-11ea-9b80-f315ea83252d",
      text: "SQL Developer"
    },
    {
      key: "4144c3ae-07ee-11ea-9b81-ab79515b47d8",
      value: "4144c3ae-07ee-11ea-9b81-ab79515b47d8",
      text: "Adobe LiveCycle ES Designer"
    },
    {
      key: "4144ea9e-07ee-11ea-9b82-9febeab3e4c6",
      value: "4144ea9e-07ee-11ea-9b82-9febeab3e4c6",
      text: "Ancile uPerform"
    },
    {
      key: "4144ea9f-07ee-11ea-9b83-e362ce206fc7",
      value: "4144ea9f-07ee-11ea-9b83-e362ce206fc7",
      text: "CA Gen Development and Generation tool"
    },
    {
      key: "4144eaa0-07ee-11ea-9b84-23288bb4cfe3",
      value: "4144eaa0-07ee-11ea-9b84-23288bb4cfe3",
      text: "Crystal Reports Designer"
    },
    {
      key: "41451190-07ee-11ea-9b85-03e1f5b04aa2",
      value: "41451190-07ee-11ea-9b85-03e1f5b04aa2",
      text: "Embarcadero C++ Builder"
    },
    {
      key: "41451191-07ee-11ea-9b86-93423791d208",
      value: "41451191-07ee-11ea-9b86-93423791d208",
      text: "Lotus Notes Designer"
    },
    {
      key: "414538aa-07ee-11ea-9b87-a3459cce7bdf",
      value: "414538aa-07ee-11ea-9b87-a3459cce7bdf",
      text: "Microsoft TFS"
    },
    {
      key: "414538ab-07ee-11ea-9b88-f760444dd202",
      value: "414538ab-07ee-11ea-9b88-f760444dd202",
      text: "Model management - CA Gen"
    },
    {
      key: "414538ac-07ee-11ea-9b89-3f51355d374e",
      value: "414538ac-07ee-11ea-9b89-3f51355d374e",
      text: "MSBuild"
    },
    {
      key: "41455f7e-07ee-11ea-9b8a-8b7df54b6ebc",
      value: "41455f7e-07ee-11ea-9b8a-8b7df54b6ebc",
      text: "Oracle Application Express (APEX)"
    },
    {
      key: "41455f7f-07ee-11ea-9b8b-df27bd38f95a",
      value: "41455f7f-07ee-11ea-9b8b-df27bd38f95a",
      text: "Oracle Designer Web PL/SQL (Oracle DevSuite 10.1.2)"
    },
    {
      key: "41455f80-07ee-11ea-9b8c-7f676d6d9b8e",
      value: "41455f80-07ee-11ea-9b8c-7f676d6d9b8e",
      text: "Oracle UPK ( + CAPA)"
    },
    {
      key: "41458670-07ee-11ea-9b8d-2b8498492169",
      value: "41458670-07ee-11ea-9b8d-2b8498492169",
      text: "SPUFI"
    },
    {
      key: "41458671-07ee-11ea-9b8e-53cfb2bede30",
      value: "41458671-07ee-11ea-9b8e-53cfb2bede30",
      text: "SQLWindows"
    },
    {
      key: "4145ad62-07ee-11ea-9b8f-17db48873d6d",
      value: "4145ad62-07ee-11ea-9b8f-17db48873d6d",
      text: "Team Developer/Centura  "
    },
    {
      key: "4145ad63-07ee-11ea-9b90-eb82390bf395",
      value: "4145ad63-07ee-11ea-9b90-eb82390bf395",
      text: "TeamStudio (Notes development tool)"
    },
    {
      key: "4145ad64-07ee-11ea-9b91-dfc5472a73b8",
      value: "4145ad64-07ee-11ea-9b91-dfc5472a73b8",
      text: "TOAD"
    },
    {
      key: "4145d45e-07ee-11ea-9b92-0f414bd352b5",
      value: "4145d45e-07ee-11ea-9b92-0f414bd352b5",
      text: "Visual Studio .NET"
    },
    {
      key: "4145d45f-07ee-11ea-9b93-3bb6ef96077b",
      value: "4145d45f-07ee-11ea-9b93-3bb6ef96077b",
      text: "SQL Reports"
    },
    {
      key: "4145d460-07ee-11ea-9b94-af8c5c17a288",
      value: "4145d460-07ee-11ea-9b94-af8c5c17a288",
      text: "Cognos"
    },
    {
      key: "4145fb50-07ee-11ea-9b95-ef6a4d108c74",
      value: "4145fb50-07ee-11ea-9b95-ef6a4d108c74",
      text: "Business Objects"
    },
    {
      key: "4145fb51-07ee-11ea-9b96-5b6f64fec66d",
      value: "4145fb51-07ee-11ea-9b96-5b6f64fec66d",
      text: "Microsoft Dynamics"
    },
    {
      key: "4146238c-07ee-11ea-9b97-2f0eda47e077",
      value: "4146238c-07ee-11ea-9b97-2f0eda47e077",
      text: "PeopleSoft"
    },
    {
      key: "4146238d-07ee-11ea-9b98-6b57d07a208c",
      value: "4146238d-07ee-11ea-9b98-6b57d07a208c",
      text: "SAP"
    },
    {
      key: "4146238e-07ee-11ea-9b99-1be20b50ce5a",
      value: "4146238e-07ee-11ea-9b99-1be20b50ce5a",
      text: "Clarity"
    },
    {
      key: "41464a74-07ee-11ea-9b9a-d33f5046f158",
      value: "41464a74-07ee-11ea-9b9a-d33f5046f158",
      text: "MKS  Integrity"
    },
    {
      key: "41464a75-07ee-11ea-9b9b-a751fb1ea993",
      value: "41464a75-07ee-11ea-9b9b-a751fb1ea993",
      text: "PeopleSoft nVision"
    },
    {
      key: "41464a76-07ee-11ea-9b9c-ab562edbcf42",
      value: "41464a76-07ee-11ea-9b9c-ab562edbcf42",
      text: "PeopleSoft PeopleCode"
    },
    {
      key: "41467184-07ee-11ea-9b9d-5fc52ca11f8d",
      value: "41467184-07ee-11ea-9b9d-5fc52ca11f8d",
      text: "PeopleSoft Query"
    },
    {
      key: "41467185-07ee-11ea-9b9e-2f48dc7375ed",
      value: "41467185-07ee-11ea-9b9e-2f48dc7375ed",
      text: "PeopleSoft Reporting"
    },
    {
      key: "41469862-07ee-11ea-9b9f-b746d03342ee",
      value: "41469862-07ee-11ea-9b9f-b746d03342ee",
      text: "PeopleSoft Tools"
    },
    {
      key: "41469863-07ee-11ea-9ba0-2f8d5e0db210",
      value: "41469863-07ee-11ea-9ba0-2f8d5e0db210",
      text: "Rational Quality Manager (RQM)"
    },
    {
      key: "41469864-07ee-11ea-9ba1-a3f40da37985",
      value: "41469864-07ee-11ea-9ba1-a3f40da37985",
      text: "Rational Requirements Composer (RRC)"
    },
    {
      key: "4146bf5e-07ee-11ea-9ba2-a729a34acd09",
      value: "4146bf5e-07ee-11ea-9ba2-a729a34acd09",
      text: "Rational Team Concert (RTC)"
    },
    {
      key: "4146bf5f-07ee-11ea-9ba3-37d90740b97a",
      value: "4146bf5f-07ee-11ea-9ba3-37d90740b97a",
      text: "CICS/VS"
    },
    {
      key: "4146bf60-07ee-11ea-9ba4-d3c0a796018e",
      value: "4146bf60-07ee-11ea-9ba4-d3c0a796018e",
      text: "IBM Advanced Function Presentation (AFP)"
    },
    {
      key: "4146e650-07ee-11ea-9ba5-275f4270eada",
      value: "4146e650-07ee-11ea-9ba5-275f4270eada",
      text: "IBM Page Description Language (PDL) "
    },
    {
      key: "4146e651-07ee-11ea-9ba6-577612612a78",
      value: "4146e651-07ee-11ea-9ba6-577612612a78",
      text: "InfoMan"
    },
    {
      key: "4146e652-07ee-11ea-9ba7-87dfbf73db1b",
      value: "4146e652-07ee-11ea-9ba7-87dfbf73db1b",
      text: "Adobe Output Designer  "
    },
    {
      key: "41470d42-07ee-11ea-9ba8-5ffd8d939935",
      value: "41470d42-07ee-11ea-9ba8-5ffd8d939935",
      text: "AMX Inspired Signage Xpress"
    },
    {
      key: "41470d43-07ee-11ea-9ba9-b3aa76af3884",
      value: "41470d43-07ee-11ea-9ba9-b3aa76af3884",
      text: "Camtasia Studio"
    },
    {
      key: "41473434-07ee-11ea-9baa-b722f0860fa2",
      value: "41473434-07ee-11ea-9baa-b722f0860fa2",
      text: "IBM ImagePlus, FAF, IWPM "
    },
    {
      key: "41473435-07ee-11ea-9bab-d31d93c27544",
      value: "41473435-07ee-11ea-9bab-d31d93c27544",
      text: "MODCA-IOCA "
    },
    {
      key: "41473436-07ee-11ea-9bac-8369e2a4102b",
      value: "41473436-07ee-11ea-9bac-8369e2a4102b",
      text: "Certified Information Systems Security Professional (CISSP)"
    },
    {
      key: "41475b26-07ee-11ea-9bad-7302aaea7d90",
      value: "41475b26-07ee-11ea-9bad-7302aaea7d90",
      text: "MoP Foundation"
    },
    {
      key: "41475b27-07ee-11ea-9bae-1b5f2a5d1b70",
      value: "41475b27-07ee-11ea-9bae-1b5f2a5d1b70",
      text: "MoP Practioner"
    },
    {
      key: "41475b28-07ee-11ea-9baf-7fa99b6659bd",
      value: "41475b28-07ee-11ea-9baf-7fa99b6659bd",
      text: "TOGAF"
    },
    {
      key: "41478222-07ee-11ea-9bb0-dfffe0b80b4b",
      value: "41478222-07ee-11ea-9bb0-dfffe0b80b4b",
      text: "ITIL V3 Foundations"
    },
    {
      key: "41478223-07ee-11ea-9bb1-8f675e05c66e",
      value: "41478223-07ee-11ea-9bb1-8f675e05c66e",
      text: "ITIL V3 Service Management"
    },
    {
      key: "4147a932-07ee-11ea-9bb2-d79603546f3a",
      value: "4147a932-07ee-11ea-9bb2-d79603546f3a",
      text: "Data Management"
    },
    {
      key: "4147a933-07ee-11ea-9bb3-bb144cdd871c",
      value: "4147a933-07ee-11ea-9bb3-bb144cdd871c",
      text: "Enterprise Content Management"
    },
    {
      key: "4147a934-07ee-11ea-9bb4-e7fd829315b2",
      value: "4147a934-07ee-11ea-9bb4-e7fd829315b2",
      text: "Governance"
    },
    {
      key: "4147d010-07ee-11ea-9bb5-e3b450ac808a",
      value: "4147d010-07ee-11ea-9bb5-e3b450ac808a",
      text: "Repository Management"
    },
    {
      key: "4147d011-07ee-11ea-9bb6-af6f761ece84",
      value: "4147d011-07ee-11ea-9bb6-af6f761ece84",
      text: "Taxonomies"
    },
    {
      key: "4147d012-07ee-11ea-9bb7-674de778e836",
      value: "4147d012-07ee-11ea-9bb7-674de778e836",
      text: "Business Analysis"
    },
    {
      key: "4147f702-07ee-11ea-9bb8-ab320eaf38a3",
      value: "4147f702-07ee-11ea-9bb8-ab320eaf38a3",
      text: "Collaboration"
    },
    {
      key: "4147f703-07ee-11ea-9bb9-8f440c436ad3",
      value: "4147f703-07ee-11ea-9bb9-8f440c436ad3",
      text: "Content Lifecycle Management"
    },
    {
      key: "41481df4-07ee-11ea-9bba-979c22dca92c",
      value: "41481df4-07ee-11ea-9bba-979c22dca92c",
      text: "Content Tracking"
    },
    {
      key: "41481df5-07ee-11ea-9bbb-27d08db9685c",
      value: "41481df5-07ee-11ea-9bbb-27d08db9685c",
      text: "Data Design"
    },
    {
      key: "41481df6-07ee-11ea-9bbc-ffeefa8d8fb4",
      value: "41481df6-07ee-11ea-9bbc-ffeefa8d8fb4",
      text: "Tagging"
    },
    {
      key: "41484504-07ee-11ea-9bbd-73e054c180e6",
      value: "41484504-07ee-11ea-9bbd-73e054c180e6",
      text: "Administration"
    },
    {
      key: "41484505-07ee-11ea-9bbe-77496009a232",
      value: "41484505-07ee-11ea-9bbe-77496009a232",
      text: "Permissions Management"
    },
    {
      key: "41484506-07ee-11ea-9bbf-b754ef99215e",
      value: "41484506-07ee-11ea-9bbf-b754ef99215e",
      text: "User Management"
    },
    {
      key: "41486be2-07ee-11ea-9bc0-0be1c29f7b14",
      value: "41486be2-07ee-11ea-9bc0-0be1c29f7b14",
      text: "Workflow Management"
    },
    {
      key: "41486be3-07ee-11ea-9bc1-9f2297288b8c",
      value: "41486be3-07ee-11ea-9bc1-9f2297288b8c",
      text: "Access Management"
    },
    {
      key: "414892de-07ee-11ea-9bc2-2bcb38aabbf3",
      value: "414892de-07ee-11ea-9bc2-2bcb38aabbf3",
      text: "JIRA (Atlassian)"
    },
    {
      key: "414892df-07ee-11ea-9bc3-b7b23f9faa98",
      value: "414892df-07ee-11ea-9bc3-b7b23f9faa98",
      text: "Confluence (Atlassian)"
    },
    {
      key: "414892e0-07ee-11ea-9bc4-7b23cd04d2e0",
      value: "414892e0-07ee-11ea-9bc4-7b23cd04d2e0",
      text: "WebEx"
    },
    {
      key: "4148b9c6-07ee-11ea-9bc5-d3bb32f3a5f5",
      value: "4148b9c6-07ee-11ea-9bc5-d3bb32f3a5f5",
      text: "IBM Lotus Notes"
    },
    {
      key: "4148b9c7-07ee-11ea-9bc6-079704fe1f85",
      value: "4148b9c7-07ee-11ea-9bc6-079704fe1f85",
      text: "IBM Lotus Web Content Management"
    },
    {
      key: "4148b9c8-07ee-11ea-9bc7-17d972d3d23f",
      value: "4148b9c8-07ee-11ea-9bc7-17d972d3d23f",
      text: "Content Mgmt Interop Services"
    },
    {
      key: "4148e0ea-07ee-11ea-9bc8-23d6e8e6c3a8",
      value: "4148e0ea-07ee-11ea-9bc8-23d6e8e6c3a8",
      text: "Drupal"
    },
    {
      key: "4148e0eb-07ee-11ea-9bc9-dbad97ee4467",
      value: "4148e0eb-07ee-11ea-9bc9-dbad97ee4467",
      text: "IBM Enterprise Content Management"
    },
    {
      key: "4149067e-07ee-11ea-9bca-afb80cb0c958",
      value: "4149067e-07ee-11ea-9bca-afb80cb0c958",
      text: "OpenText"
    },
    {
      key: "4149067f-07ee-11ea-9bcb-87e6aff6296b",
      value: "4149067f-07ee-11ea-9bcb-87e6aff6296b",
      text: "SharePoint (Microsoft)"
    },
    {
      key: "41490680-07ee-11ea-9bcc-b39e3b260717",
      value: "41490680-07ee-11ea-9bcc-b39e3b260717",
      text: "Data Analysis"
    },
    {
      key: "41492d7a-07ee-11ea-9bcd-bfcfdc442b86",
      value: "41492d7a-07ee-11ea-9bcd-bfcfdc442b86",
      text: "Data Integrity and Quality Assurance"
    },
    {
      key: "41492d7b-07ee-11ea-9bce-0b84a0f6f3d2",
      value: "41492d7b-07ee-11ea-9bce-0b84a0f6f3d2",
      text: "Data Entity-Relationship (ER) Diagramming"
    },
    {
      key: "41492d7c-07ee-11ea-9bcf-4fb54a807d15",
      value: "41492d7c-07ee-11ea-9bcf-4fb54a807d15",
      text: "Data Access and User Administration"
    },
    {
      key: "414955a2-07ee-11ea-9bd0-db26e64e5f03",
      value: "414955a2-07ee-11ea-9bd0-db26e64e5f03",
      text: "Data Normalization"
    },
    {
      key: "414955a3-07ee-11ea-9bd1-d344fe0e02f3",
      value: "414955a3-07ee-11ea-9bd1-d344fe0e02f3",
      text: "Database design"
    },
    {
      key: "41497c94-07ee-11ea-9bd2-333f8fa4239c",
      value: "41497c94-07ee-11ea-9bd2-333f8fa4239c",
      text: "Data Standards and APIs"
    },
    {
      key: "41497c95-07ee-11ea-9bd3-cb0ec1889e6b",
      value: "41497c95-07ee-11ea-9bd3-cb0ec1889e6b",
      text: "Database Implementation"
    },
    {
      key: "41497c96-07ee-11ea-9bd4-d3c4b0fe7158",
      value: "41497c96-07ee-11ea-9bd4-d3c4b0fe7158",
      text: "Database Testing"
    },
    {
      key: "4149a386-07ee-11ea-9bd5-dffb73e9edbe",
      value: "4149a386-07ee-11ea-9bd5-dffb73e9edbe",
      text: "Data Dictionaries"
    },
    {
      key: "4149a387-07ee-11ea-9bd6-6b29b8d72de3",
      value: "4149a387-07ee-11ea-9bd6-6b29b8d72de3",
      text: "Data Information Engineering"
    },
    {
      key: "4149a388-07ee-11ea-9bd7-b3a9299faa87",
      value: "4149a388-07ee-11ea-9bd7-b3a9299faa87",
      text: "Data Mining"
    },
    {
      key: "4149ca8c-07ee-11ea-9bd8-9b0b5b0634a2",
      value: "4149ca8c-07ee-11ea-9bd8-9b0b5b0634a2",
      text: "Data Security"
    },
    {
      key: "4149ca8d-07ee-11ea-9bd9-e37f0a3e6029",
      value: "4149ca8d-07ee-11ea-9bd9-e37f0a3e6029",
      text: "Data Transformation and Migration"
    },
    {
      key: "4149f1ba-07ee-11ea-9bda-3362abcde844",
      value: "4149f1ba-07ee-11ea-9bda-3362abcde844",
      text: "Database Backup and Recovery"
    },
    {
      key: "4149f1bb-07ee-11ea-9bdb-c74cfaac9fd0",
      value: "4149f1bb-07ee-11ea-9bdb-c74cfaac9fd0",
      text: "Database Capacity Planning"
    },
    {
      key: "4149f1bc-07ee-11ea-9bdc-f38ae44bdcf2",
      value: "4149f1bc-07ee-11ea-9bdc-f38ae44bdcf2",
      text: "Database Monitoring"
    },
    {
      key: "414a1884-07ee-11ea-9bdd-7fecde0abb2b",
      value: "414a1884-07ee-11ea-9bdd-7fecde0abb2b",
      text: "Database Replication"
    },
    {
      key: "414a1885-07ee-11ea-9bde-1b267ee989a6",
      value: "414a1885-07ee-11ea-9bde-1b267ee989a6",
      text: "Database Upgrades and Reorganizations"
    },
    {
      key: "414a1886-07ee-11ea-9bdf-d3922104feab",
      value: "414a1886-07ee-11ea-9bdf-d3922104feab",
      text: "Oracle Concepts + Architecture"
    },
    {
      key: "414a3f62-07ee-11ea-9be0-0fa42f6185ed",
      value: "414a3f62-07ee-11ea-9be0-0fa42f6185ed",
      text: "BusinessObjects"
    },
    {
      key: "414a3f63-07ee-11ea-9be1-4fe7a75e8537",
      value: "414a3f63-07ee-11ea-9be1-4fe7a75e8537",
      text: "DB2 Concepts + Architecture"
    },
    {
      key: "414a6654-07ee-11ea-9be2-1bd71b00d604",
      value: "414a6654-07ee-11ea-9be2-1bd71b00d604",
      text: "Impromptu (Cognos)"
    },
    {
      key: "414a6655-07ee-11ea-9be3-37c3624000e8",
      value: "414a6655-07ee-11ea-9be3-37c3624000e8",
      text: "Oracle Database Engine"
    },
    {
      key: "414a6656-07ee-11ea-9be4-7710022e60bb",
      value: "414a6656-07ee-11ea-9be4-7710022e60bb",
      text: "Oracle Tool + Utilities"
    },
    {
      key: "414a8d50-07ee-11ea-9be5-e7b9ded01d4b",
      value: "414a8d50-07ee-11ea-9be5-e7b9ded01d4b",
      text: "PowerPlay (Cognos)"
    },
    {
      key: "414a8d51-07ee-11ea-9be6-9bb8830246da",
      value: "414a8d51-07ee-11ea-9be6-9bb8830246da",
      text: "QMF"
    },
    {
      key: "414a8d52-07ee-11ea-9be7-c31a8ff80176",
      value: "414a8d52-07ee-11ea-9be7-c31a8ff80176",
      text: "SQLServer (Microsoft)"
    },
    {
      key: "414ab44c-07ee-11ea-9be8-dbeb268941b2",
      value: "414ab44c-07ee-11ea-9be8-dbeb268941b2",
      text: "Oracle 11.x"
    },
    {
      key: "414ab44d-07ee-11ea-9be9-379a38de80fc",
      value: "414ab44d-07ee-11ea-9be9-379a38de80fc",
      text: "Oracle Forms"
    },
    {
      key: "414ab44e-07ee-11ea-9bea-137a0acd20e7",
      value: "414ab44e-07ee-11ea-9bea-137a0acd20e7",
      text: "DB2"
    },
    {
      key: "414adb34-07ee-11ea-9beb-275ac7544701",
      value: "414adb34-07ee-11ea-9beb-275ac7544701",
      text: "MS Access"
    },
    {
      key: "414adb35-07ee-11ea-9bec-abb47e914985",
      value: "414adb35-07ee-11ea-9bec-abb47e914985",
      text: "Database Applications"
    },
    {
      key: "414b0226-07ee-11ea-9bed-77a57dd77b01",
      value: "414b0226-07ee-11ea-9bed-77a57dd77b01",
      text: "DB2 Connect"
    },
    {
      key: "414b0227-07ee-11ea-9bee-0bbe0307f8e5",
      value: "414b0227-07ee-11ea-9bee-0bbe0307f8e5",
      text: "DB2 Universal DB for OS/390"
    },
    {
      key: "414b0228-07ee-11ea-9bef-6f0219c89b32",
      value: "414b0228-07ee-11ea-9bef-6f0219c89b32",
      text: "dBASE"
    },
    {
      key: "414b2922-07ee-11ea-9bf0-2fbc0099ddc8",
      value: "414b2922-07ee-11ea-9bf0-2fbc0099ddc8",
      text: "Millennium  "
    },
    {
      key: "414b2923-07ee-11ea-9bf1-7f2a062e4a5f",
      value: "414b2923-07ee-11ea-9bf1-7f2a062e4a5f",
      text: "Oracle 10"
    },
    {
      key: "414b2924-07ee-11ea-9bf2-df3bc51c388b",
      value: "414b2924-07ee-11ea-9bf2-df3bc51c388b",
      text: "Oracle 12.x"
    },
    {
      key: "414b5028-07ee-11ea-9bf3-bbcc84bc0c8b",
      value: "414b5028-07ee-11ea-9bf3-bbcc84bc0c8b",
      text: "SQLServer (Sybase)"
    },
    {
      key: "414b5029-07ee-11ea-9bf4-ff275196309c",
      value: "414b5029-07ee-11ea-9bf4-ff275196309c",
      text: "Project (Microsoft)"
    },
    {
      key: "414b771a-07ee-11ea-9bf5-1732718985a5",
      value: "414b771a-07ee-11ea-9bf5-1732718985a5",
      text: "Visio"
    },
    {
      key: "414b771b-07ee-11ea-9bf6-cffcaa37d79e",
      value: "414b771b-07ee-11ea-9bf6-cffcaa37d79e",
      text: "Crystal Report Writer"
    },
    {
      key: "414b771c-07ee-11ea-9bf7-63c691a39199",
      value: "414b771c-07ee-11ea-9bf7-63c691a39199",
      text: "Excel (Microsoft)"
    },
    {
      key: "414b9e02-07ee-11ea-9bf8-f31f542034e5",
      value: "414b9e02-07ee-11ea-9bf8-f31f542034e5",
      text: "Photoshop (Adobe)"
    },
    {
      key: "414b9e03-07ee-11ea-9bf9-27ae8bf85f5c",
      value: "414b9e03-07ee-11ea-9bf9-27ae8bf85f5c",
      text: "Illustrator (Adobe)"
    },
    {
      key: "414b9e04-07ee-11ea-9bfa-57f26095ca88",
      value: "414b9e04-07ee-11ea-9bfa-57f26095ca88",
      text: "Oracle Report"
    },
    {
      key: "414bc4f4-07ee-11ea-9bfb-533b4aea031e",
      value: "414bc4f4-07ee-11ea-9bfb-533b4aea031e",
      text: "Departmental Project Portfolio Management (DPPM) "
    },
    {
      key: "414bc4f5-07ee-11ea-9bfc-b32634cc30da",
      value: "414bc4f5-07ee-11ea-9bfc-b32634cc30da",
      text: "Flash"
    },
    {
      key: "414bebf0-07ee-11ea-9bfd-7faa877387a9",
      value: "414bebf0-07ee-11ea-9bfd-7faa877387a9",
      text: "Hummingbird DOCS (PC DOCS)"
    },
    {
      key: "414bebf1-07ee-11ea-9bfe-c70f9529ec00",
      value: "414bebf1-07ee-11ea-9bfe-c70f9529ec00",
      text: "FME"
    },
    {
      key: "414bebf2-07ee-11ea-9bff-dffa4154bc79",
      value: "414bebf2-07ee-11ea-9bff-dffa4154bc79",
      text: "MapBasic"
    },
    {
      key: "414c12e2-07ee-11ea-9c00-afeb87221dfe",
      value: "414c12e2-07ee-11ea-9c00-afeb87221dfe",
      text: "MapInfo Pro"
    },
    {
      key: "414c12e3-07ee-11ea-9c01-bf5805030957",
      value: "414c12e3-07ee-11ea-9c01-bf5805030957",
      text: "Spectrum Technology Platform"
    },
    {
      key: "414c12e4-07ee-11ea-9c02-233ed4728961",
      value: "414c12e4-07ee-11ea-9c02-233ed4728961",
      text: "SQLServer"
    },
    {
      key: "414c39d4-07ee-11ea-9c03-479b30b1a5aa",
      value: "414c39d4-07ee-11ea-9c03-479b30b1a5aa",
      text: "IBM PC or compatible"
    },
    {
      key: "414c39d5-07ee-11ea-9c04-b73e8d7038d3",
      value: "414c39d5-07ee-11ea-9c04-b73e8d7038d3",
      text: "Tablet"
    },
    {
      key: "414c60d0-07ee-11ea-9c05-dfb243490434",
      value: "414c60d0-07ee-11ea-9c05-dfb243490434",
      text: "Apple"
    },
    {
      key: "414c60d1-07ee-11ea-9c06-f307088b9510",
      value: "414c60d1-07ee-11ea-9c06-f307088b9510",
      text: "Cellular / Wireless"
    },
    {
      key: "414c60d2-07ee-11ea-9c07-e3320b10a7c3",
      value: "414c60d2-07ee-11ea-9c07-e3320b10a7c3",
      text: "Data Communications "
    },
    {
      key: "414c87ae-07ee-11ea-9c08-1f26ecc9ee2f",
      value: "414c87ae-07ee-11ea-9c08-1f26ecc9ee2f",
      text: "Device Drivers"
    },
    {
      key: "414c87af-07ee-11ea-9c09-4b75cf6624b6",
      value: "414c87af-07ee-11ea-9c09-4b75cf6624b6",
      text: "Engineering Systems Architectures"
    },
    {
      key: "414c87b0-07ee-11ea-9c0a-573f0cec2a85",
      value: "414c87b0-07ee-11ea-9c0a-573f0cec2a85",
      text: "IBM Mainframe"
    },
    {
      key: "414caebe-07ee-11ea-9c0b-4b088e2ed9f7",
      value: "414caebe-07ee-11ea-9c0b-4b088e2ed9f7",
      text: "Intel Processors"
    },
    {
      key: "414caebf-07ee-11ea-9c0c-b3eaf87946fd",
      value: "414caebf-07ee-11ea-9c0c-b3eaf87946fd",
      text: "Smartphone"
    },
    {
      key: "414cd5ba-07ee-11ea-9c0d-f311a7b8309b",
      value: "414cd5ba-07ee-11ea-9c0d-f311a7b8309b",
      text: "Switching"
    },
    {
      key: "414cd5bb-07ee-11ea-9c0e-73d791b7178e",
      value: "414cd5bb-07ee-11ea-9c0e-73d791b7178e",
      text: "Engineering"
    },
    {
      key: "414cd5bc-07ee-11ea-9c0f-f77cbc8a9ef0",
      value: "414cd5bc-07ee-11ea-9c0f-f77cbc8a9ef0",
      text: "Acrobat (Adobe)"
    },
    {
      key: "414cfca2-07ee-11ea-9c10-b72f4978e758",
      value: "414cfca2-07ee-11ea-9c10-b72f4978e758",
      text: "Acrobat Distiller"
    },
    {
      key: "414cfca3-07ee-11ea-9c11-8753e3e845a7",
      value: "414cfca3-07ee-11ea-9c11-8753e3e845a7",
      text: "JavaDoc"
    },
    {
      key: "414cfca4-07ee-11ea-9c12-7bcaf1f4cb89",
      value: "414cfca4-07ee-11ea-9c12-7bcaf1f4cb89",
      text: "Client Server Computing"
    },
    {
      key: "414d239e-07ee-11ea-9c13-4be0802be6cb",
      value: "414d239e-07ee-11ea-9c13-4be0802be6cb",
      text: "CRM (Customer Relationship Management)"
    },
    {
      key: "414d239f-07ee-11ea-9c14-afee72c2d2d1",
      value: "414d239f-07ee-11ea-9c14-afee72c2d2d1",
      text: "Document Management"
    },
    {
      key: "414d23a0-07ee-11ea-9c15-e7db4ab52006",
      value: "414d23a0-07ee-11ea-9c15-e7db4ab52006",
      text: "Technical Support"
    },
    {
      key: "414d4a86-07ee-11ea-9c16-cfaa2db3b723",
      value: "414d4a86-07ee-11ea-9c16-cfaa2db3b723",
      text: "Operations"
    },
    {
      key: "414d4a87-07ee-11ea-9c17-7fdae5a003fc",
      value: "414d4a87-07ee-11ea-9c17-7fdae5a003fc",
      text: "Service Management"
    },
    {
      key: "414d7182-07ee-11ea-9c18-87e46c722a1d",
      value: "414d7182-07ee-11ea-9c18-87e46c722a1d",
      text: "SOA"
    },
    {
      key: "414d7183-07ee-11ea-9c19-47128f741fad",
      value: "414d7183-07ee-11ea-9c19-47128f741fad",
      text: "Training"
    },
    {
      key: "414d7184-07ee-11ea-9c1a-d342f12a9b02",
      value: "414d7184-07ee-11ea-9c1a-d342f12a9b02",
      text: "Disaster Recovery Planning"
    },
    {
      key: "414d9874-07ee-11ea-9c1b-1f37970b0a31",
      value: "414d9874-07ee-11ea-9c1b-1f37970b0a31",
      text: "E-Commerce"
    },
    {
      key: "414d9875-07ee-11ea-9c1c-a7fd0c6faf4b",
      value: "414d9875-07ee-11ea-9c1c-a7fd0c6faf4b",
      text: "Research & Development"
    },
    {
      key: "414d9876-07ee-11ea-9c1d-3f3bae9ab127",
      value: "414d9876-07ee-11ea-9c1d-3f3bae9ab127",
      text: "Benchmarking"
    },
    {
      key: "414dbf84-07ee-11ea-9c1e-bfe80947fd7f",
      value: "414dbf84-07ee-11ea-9c1e-bfe80947fd7f",
      text: "Configuration Management"
    },
    {
      key: "414dbf85-07ee-11ea-9c1f-274ee5ddcc81",
      value: "414dbf85-07ee-11ea-9c1f-274ee5ddcc81",
      text: "Social Media"
    },
    {
      key: "414de662-07ee-11ea-9c20-2ba53e22a8ef",
      value: "414de662-07ee-11ea-9c20-2ba53e22a8ef",
      text: "Telecommunication"
    },
    {
      key: "414de663-07ee-11ea-9c21-c789b4d6d352",
      value: "414de663-07ee-11ea-9c21-c789b4d6d352",
      text: "Virtualization"
    },
    {
      key: "414de664-07ee-11ea-9c22-137ff07f7540",
      value: "414de664-07ee-11ea-9c22-137ff07f7540",
      text: "Business Process Re-Engineering"
    },
    {
      key: "414e0d54-07ee-11ea-9c23-274ae86c7127",
      value: "414e0d54-07ee-11ea-9c23-274ae86c7127",
      text: "Corporate Engineering of Desktop Productivity Tools"
    },
    {
      key: "414e0d55-07ee-11ea-9c24-abeb58ecc9a1",
      value: "414e0d55-07ee-11ea-9c24-abeb58ecc9a1",
      text: "Data Warehousing"
    },
    {
      key: "414e0d56-07ee-11ea-9c25-5784580fd2fc",
      value: "414e0d56-07ee-11ea-9c25-5784580fd2fc",
      text: "Distributed Databases"
    },
    {
      key: "414e3450-07ee-11ea-9c26-5b4797274db5",
      value: "414e3450-07ee-11ea-9c26-5b4797274db5",
      text: "GIS"
    },
    {
      key: "414e3451-07ee-11ea-9c27-fb3e51b7608f",
      value: "414e3451-07ee-11ea-9c27-fb3e51b7608f",
      text: "Image Processing"
    },
    {
      key: "414e3452-07ee-11ea-9c28-7fc1590f2654",
      value: "414e3452-07ee-11ea-9c28-7fc1590f2654",
      text: "Information Management"
    },
    {
      key: "414e5b42-07ee-11ea-9c29-4ff90c977c46",
      value: "414e5b42-07ee-11ea-9c29-4ff90c977c46",
      text: "Knowledge Management"
    },
    {
      key: "414e5b43-07ee-11ea-9c2a-1b07e9c73ecc",
      value: "414e5b43-07ee-11ea-9c2a-1b07e9c73ecc",
      text: "Middleware"
    },
    {
      key: "414e8234-07ee-11ea-9c2b-6bedad66427c",
      value: "414e8234-07ee-11ea-9c2b-6bedad66427c",
      text: "Production Scheduling"
    },
    {
      key: "414e8235-07ee-11ea-9c2c-4f1ee0769848",
      value: "414e8235-07ee-11ea-9c2c-4f1ee0769848",
      text:
        "Software Distribution/Installation |Fourniture et installation de logiciels \n"
    },
    {
      key: "414e8236-07ee-11ea-9c2d-f7a2b4b6a45c",
      value: "414e8236-07ee-11ea-9c2d-f7a2b4b6a45c",
      text: "Telephony  /  VOIP"
    },
    {
      key: "414ea930-07ee-11ea-9c2e-cbb5fbdfbbb1",
      value: "414ea930-07ee-11ea-9c2e-cbb5fbdfbbb1",
      text: "Videoconferencing"
    },
    {
      key: "414ea931-07ee-11ea-9c2f-eb09194e01e2",
      value: "414ea931-07ee-11ea-9c2f-eb09194e01e2",
      text: "Cloud Computing"
    },
    {
      key: "414ea932-07ee-11ea-9c30-2f20bc1cdba5",
      value: "414ea932-07ee-11ea-9c30-2f20bc1cdba5",
      text: "Conversions"
    },
    {
      key: "414ed022-07ee-11ea-9c31-5b4dc066c1ed",
      value: "414ed022-07ee-11ea-9c31-5b4dc066c1ed",
      text: "Workflow Automation"
    },
    {
      key: "414ed023-07ee-11ea-9c32-a7cfd43c5d17",
      value: "414ed023-07ee-11ea-9c32-a7cfd43c5d17",
      text: "Problem Solving"
    },
    {
      key: "414ef728-07ee-11ea-9c33-c7a68bf91274",
      value: "414ef728-07ee-11ea-9c33-c7a68bf91274",
      text: "Change Management"
    },
    {
      key: "414ef729-07ee-11ea-9c34-ebba799de04c",
      value: "414ef729-07ee-11ea-9c34-ebba799de04c",
      text: "Contract Management"
    },
    {
      key: "414ef72a-07ee-11ea-9c35-4f27db40c6fc",
      value: "414ef72a-07ee-11ea-9c35-4f27db40c6fc",
      text: "Corporate Leadership & Direction Setting"
    },
    {
      key: "414f1e06-07ee-11ea-9c36-13d798056d43",
      value: "414f1e06-07ee-11ea-9c36-13d798056d43",
      text: "Business Case Preparation"
    },
    {
      key: "414f1e07-07ee-11ea-9c37-bb78f6dfc7d3",
      value: "414f1e07-07ee-11ea-9c37-bb78f6dfc7d3",
      text: "Business Process Management "
    },
    {
      key: "414f1e08-07ee-11ea-9c38-a77f689937a9",
      value: "414f1e08-07ee-11ea-9c38-a77f689937a9",
      text: "Capacity Planning"
    },
    {
      key: "414f4502-07ee-11ea-9c39-bf5514f19176",
      value: "414f4502-07ee-11ea-9c39-bf5514f19176",
      text: "Governance"
    },
    {
      key: "414f4503-07ee-11ea-9c3a-2f697b70630f",
      value: "414f4503-07ee-11ea-9c3a-2f697b70630f",
      text: "Budget Development & Reporting"
    },
    {
      key: "414f6bf4-07ee-11ea-9c3b-bf15aa7aa4b0",
      value: "414f6bf4-07ee-11ea-9c3b-bf15aa7aa4b0",
      text: "Business Feasibility Studies"
    },
    {
      key: "414f6bf5-07ee-11ea-9c3c-63ab5f0f57a5",
      value: "414f6bf5-07ee-11ea-9c3c-63ab5f0f57a5",
      text: "Business Formal Presentations"
    },
    {
      key: "414f6bf6-07ee-11ea-9c3d-33f0bc6f8def",
      value: "414f6bf6-07ee-11ea-9c3d-33f0bc6f8def",
      text: "Business Strategic Planning"
    },
    {
      key: "414f92f0-07ee-11ea-9c3e-c78a36352575",
      value: "414f92f0-07ee-11ea-9c3e-c78a36352575",
      text: "Business Cost Benefit Analysis"
    },
    {
      key: "414f92f1-07ee-11ea-9c3f-e70308cbbb13",
      value: "414f92f1-07ee-11ea-9c3f-e70308cbbb13",
      text: "Business Definition Requirements"
    },
    {
      key: "414f92f2-07ee-11ea-9c40-7fa409498da1",
      value: "414f92f2-07ee-11ea-9c40-7fa409498da1",
      text: "Quantitative Analysis"
    },
    {
      key: "414fb9e2-07ee-11ea-9c41-37a5463fb2f9",
      value: "414fb9e2-07ee-11ea-9c41-37a5463fb2f9",
      text: "Technology Strategic Planning"
    },
    {
      key: "414fb9e3-07ee-11ea-9c42-c79d40327421",
      value: "414fb9e3-07ee-11ea-9c42-c79d40327421",
      text: "Business Peer Leadership"
    },
    {
      key: "414fe0de-07ee-11ea-9c43-9f0734ecf8a9",
      value: "414fe0de-07ee-11ea-9c43-9f0734ecf8a9",
      text: "Business Writing"
    },
    {
      key: "414fe0df-07ee-11ea-9c44-a78661a22eca",
      value: "414fe0df-07ee-11ea-9c44-a78661a22eca",
      text: "Life Cycle for End User Computing Hardware"
    },
    {
      key: "414fe0e0-07ee-11ea-9c45-13ca7384b564",
      value: "414fe0e0-07ee-11ea-9c45-13ca7384b564",
      text: "Organizational and environmental awareness of CIO"
    },
    {
      key: "415007c6-07ee-11ea-9c46-2feccc77916d",
      value: "415007c6-07ee-11ea-9c46-2feccc77916d",
      text: "Performance Measurement"
    },
    {
      key: "415007c7-07ee-11ea-9c47-43602e59d885",
      value: "415007c7-07ee-11ea-9c47-43602e59d885",
      text: "Policy development"
    },
    {
      key: "41502eae-07ee-11ea-9c48-23908f6bd743",
      value: "41502eae-07ee-11ea-9c48-23908f6bd743",
      text: "Service Identification"
    },
    {
      key: "41502eaf-07ee-11ea-9c49-070dfe5cc75a",
      value: "41502eaf-07ee-11ea-9c49-070dfe5cc75a",
      text: "Statistics"
    },
    {
      key: "41502eb0-07ee-11ea-9c4a-cbbd349ac7c0",
      value: "41502eb0-07ee-11ea-9c4a-cbbd349ac7c0",
      text: "Vendor/Service Provider/Central Agency Relationship Management"
    },
    {
      key: "415055b4-07ee-11ea-9c4b-637dfdfa97dd",
      value: "415055b4-07ee-11ea-9c4b-637dfdfa97dd",
      text: "Service Provider Metrics Devt"
    },
    {
      key: "415055b5-07ee-11ea-9c4c-6b91e49e4949",
      value: "415055b5-07ee-11ea-9c4c-6b91e49e4949",
      text: "Service Provider Serv Level Devt"
    },
    {
      key: "415055b6-07ee-11ea-9c4d-8743b94c1ec3",
      value: "415055b6-07ee-11ea-9c4d-8743b94c1ec3",
      text: "Building, Recruiting and Managing Teams"
    },
    {
      key: "41507cce-07ee-11ea-9c4e-17c0b8c6912e",
      value: "41507cce-07ee-11ea-9c4e-17c0b8c6912e",
      text: "Lead Medium Teams (5-15)"
    },
    {
      key: "41507ccf-07ee-11ea-9c4f-3793413e44e8",
      value: "41507ccf-07ee-11ea-9c4f-3793413e44e8",
      text: "Employee Performance Review"
    },
    {
      key: "41507cd0-07ee-11ea-9c50-7fc01dc2d035",
      value: "41507cd0-07ee-11ea-9c50-7fc01dc2d035",
      text: "Lead Small Teams (1-5)"
    },
    {
      key: "4150a3d4-07ee-11ea-9c51-57cb503ce458",
      value: "4150a3d4-07ee-11ea-9c51-57cb503ce458",
      text: "Lead Large Teams (15+)"
    },
    {
      key: "4150a3d5-07ee-11ea-9c52-7be575547b00",
      value: "4150a3d5-07ee-11ea-9c52-7be575547b00",
      text: "Employee engagement "
    },
    {
      key: "4150ca94-07ee-11ea-9c53-d7c844dfe414",
      value: "4150ca94-07ee-11ea-9c53-d7c844dfe414",
      text: "Lead Medium Projects (3-12 Months)"
    },
    {
      key: "4150ca95-07ee-11ea-9c54-a3b5acd33821",
      value: "4150ca95-07ee-11ea-9c54-a3b5acd33821",
      text: "Lead Short Projects (1-3 Months)"
    },
    {
      key: "4150ca96-07ee-11ea-9c55-6bce465b7ee9",
      value: "4150ca96-07ee-11ea-9c55-6bce465b7ee9",
      text: "Project Management"
    },
    {
      key: "4150f186-07ee-11ea-9c56-33619751ba15",
      value: "4150f186-07ee-11ea-9c56-33619751ba15",
      text: "Project Planning"
    },
    {
      key: "4150f187-07ee-11ea-9c57-77c5393b64f2",
      value: "4150f187-07ee-11ea-9c57-77c5393b64f2",
      text: "Project Quality Assurance"
    },
    {
      key: "4150f188-07ee-11ea-9c58-8b8f58ce7074",
      value: "4150f188-07ee-11ea-9c58-8b8f58ce7074",
      text: "Project Change Management"
    },
    {
      key: "41511882-07ee-11ea-9c59-fb2538b46e56",
      value: "41511882-07ee-11ea-9c59-fb2538b46e56",
      text: "Project Estimating"
    },
    {
      key: "41511883-07ee-11ea-9c5a-3f60656c1f47",
      value: "41511883-07ee-11ea-9c5a-3f60656c1f47",
      text: "Project Scheduling"
    },
    {
      key: "41513f74-07ee-11ea-9c5b-57933f23157e",
      value: "41513f74-07ee-11ea-9c5b-57933f23157e",
      text: "Project Control"
    },
    {
      key: "41513f75-07ee-11ea-9c5c-5bba84dda32b",
      value: "41513f75-07ee-11ea-9c5c-5bba84dda32b",
      text: "Project Resource Management"
    },
    {
      key: "41513f76-07ee-11ea-9c5d-ebcf09865b24",
      value: "41513f76-07ee-11ea-9c5d-ebcf09865b24",
      text: "Project Risk Management"
    },
    {
      key: "415166d4-07ee-11ea-9c5e-ef0146d2878b",
      value: "415166d4-07ee-11ea-9c5e-ef0146d2878b",
      text: "Project Tracking and Reporting"
    },
    {
      key: "415166d5-07ee-11ea-9c5f-070587ebf80a",
      value: "415166d5-07ee-11ea-9c5f-070587ebf80a",
      text: "Lead Long Projects (12+ Months)"
    },
    {
      key: "415166d6-07ee-11ea-9c60-9396d60a60c8",
      value: "415166d6-07ee-11ea-9c60-9396d60a60c8",
      text: "Project Management Tools"
    },
    {
      key: "41518d62-07ee-11ea-9c61-a37c886a7ed2",
      value: "41518d62-07ee-11ea-9c61-a37c886a7ed2",
      text: "Process Design and Documentation"
    },
    {
      key: "41518d63-07ee-11ea-9c62-875533bc42f9",
      value: "41518d63-07ee-11ea-9c62-875533bc42f9",
      text: "Active Directory (Microsoft)"
    },
    {
      key: "4151b31e-07ee-11ea-9c63-9fcead954d62",
      value: "4151b31e-07ee-11ea-9c63-9fcead954d62",
      text: "LDAP"
    },
    {
      key: "4151b31f-07ee-11ea-9c64-1b3fbb67bcf0",
      value: "4151b31f-07ee-11ea-9c64-1b3fbb67bcf0",
      text: "HTTP"
    },
    {
      key: "4151b320-07ee-11ea-9c65-6fb9924196c9",
      value: "4151b320-07ee-11ea-9c65-6fb9924196c9",
      text: "IP"
    },
    {
      key: "4151da10-07ee-11ea-9c66-9f68683193ba",
      value: "4151da10-07ee-11ea-9c66-9f68683193ba",
      text: "Data Communications Protocols (general)"
    },
    {
      key: "4151da11-07ee-11ea-9c67-27bb11b30284",
      value: "4151da11-07ee-11ea-9c67-27bb11b30284",
      text: "DNS"
    },
    {
      key: "4151da12-07ee-11ea-9c68-b31fcb163570",
      value: "4151da12-07ee-11ea-9c68-b31fcb163570",
      text: "Internet firewalls"
    },
    {
      key: "41520242-07ee-11ea-9c69-67cded5a4125",
      value: "41520242-07ee-11ea-9c69-67cded5a4125",
      text: "NetworkTopology (general)"
    },
    {
      key: "41520243-07ee-11ea-9c6a-dfc2ae45439d",
      value: "41520243-07ee-11ea-9c6a-dfc2ae45439d",
      text: "Routing Protocols"
    },
    {
      key: "41520244-07ee-11ea-9c6b-7fc85c50c5ce",
      value: "41520244-07ee-11ea-9c6b-7fc85c50c5ce",
      text: "Wireless LANs"
    },
    {
      key: "41522984-07ee-11ea-9c6c-8765159bf351",
      value: "41522984-07ee-11ea-9c6c-8765159bf351",
      text: "Wireless"
    },
    {
      key: "41522985-07ee-11ea-9c6d-f36c6e4bc5a4",
      value: "41522985-07ee-11ea-9c6d-f36c6e4bc5a4",
      text: "Computer Communications Protocols(general)"
    },
    {
      key: "41525026-07ee-11ea-9c6e-97be5fe4887b",
      value: "41525026-07ee-11ea-9c6e-97be5fe4887b",
      text: "DHCP"
    },
    {
      key: "41525027-07ee-11ea-9c6f-4337a0d4144d",
      value: "41525027-07ee-11ea-9c6f-4337a0d4144d",
      text: "Distributed Computing Architecture"
    },
    {
      key: "41525028-07ee-11ea-9c70-7f4d85ab8e88",
      value: "41525028-07ee-11ea-9c70-7f4d85ab8e88",
      text: "LANs (general)"
    },
    {
      key: "4152772c-07ee-11ea-9c71-a73ffec0a10a",
      value: "4152772c-07ee-11ea-9c71-a73ffec0a10a",
      text: "Network Administration"
    },
    {
      key: "4152772d-07ee-11ea-9c72-8bf8ecb77dba",
      value: "4152772d-07ee-11ea-9c72-8bf8ecb77dba",
      text: "NFS"
    },
    {
      key: "4152772e-07ee-11ea-9c73-53bee72cb5d7",
      value: "4152772e-07ee-11ea-9c73-53bee72cb5d7",
      text: "Routers"
    },
    {
      key: "41529e28-07ee-11ea-9c74-d39dddc012d4",
      value: "41529e28-07ee-11ea-9c74-d39dddc012d4",
      text: "Virtual Private Network (VPN)"
    },
    {
      key: "41529e29-07ee-11ea-9c75-93a4ce33217b",
      value: "41529e29-07ee-11ea-9c75-93a4ce33217b",
      text: "VPN Server"
    },
    {
      key: "4152c51a-07ee-11ea-9c76-cf063fef0595",
      value: "4152c51a-07ee-11ea-9c76-cf063fef0595",
      text: "WAN"
    },
    {
      key: "4152c51b-07ee-11ea-9c77-db267c82e123",
      value: "4152c51b-07ee-11ea-9c77-db267c82e123",
      text: "Windows Server 2008"
    },
    {
      key: "4152c51c-07ee-11ea-9c78-b3f597d7227e",
      value: "4152c51c-07ee-11ea-9c78-b3f597d7227e",
      text: "Windows 7"
    },
    {
      key: "4152ec0c-07ee-11ea-9c79-835028408a77",
      value: "4152ec0c-07ee-11ea-9c79-835028408a77",
      text: "VMWare"
    },
    {
      key: "4152ec0d-07ee-11ea-9c7a-7fb904c209e8",
      value: "4152ec0d-07ee-11ea-9c7a-7fb904c209e8",
      text: "File systems"
    },
    {
      key: "4152ec0e-07ee-11ea-9c7b-0beb89f15caa",
      value: "4152ec0e-07ee-11ea-9c7b-0beb89f15caa",
      text: "Linux"
    },
    {
      key: "415312f4-07ee-11ea-9c7c-ab13d66b1b2e",
      value: "415312f4-07ee-11ea-9c7c-ab13d66b1b2e",
      text: "UNIX (IBM - AIX)"
    },
    {
      key: "415312f5-07ee-11ea-9c7d-939c9051c1cf",
      value: "415312f5-07ee-11ea-9c7d-939c9051c1cf",
      text: "Firmware"
    },
    {
      key: "415312f6-07ee-11ea-9c7e-b70c62a465fb",
      value: "415312f6-07ee-11ea-9c7e-b70c62a465fb",
      text: "Windows 8"
    },
    {
      key: "415339e6-07ee-11ea-9c7f-aff80ed8860b",
      value: "415339e6-07ee-11ea-9c7f-aff80ed8860b",
      text: "Windows Server 2003"
    },
    {
      key: "415339e7-07ee-11ea-9c80-ef456259cb54",
      value: "415339e7-07ee-11ea-9c80-ef456259cb54",
      text: "CICS (IBM)"
    },
    {
      key: "415360e2-07ee-11ea-9c81-c3611556e930",
      value: "415360e2-07ee-11ea-9c81-c3611556e930",
      text: "Citrix"
    },
    {
      key: "415360e3-07ee-11ea-9c82-1bd5237f5fb3",
      value: "415360e3-07ee-11ea-9c82-1bd5237f5fb3",
      text: "Debugging tools"
    },
    {
      key: "415360e4-07ee-11ea-9c83-7f5e315e66a3",
      value: "415360e4-07ee-11ea-9c83-7f5e315e66a3",
      text: "Development toolkits"
    },
    {
      key: "415387de-07ee-11ea-9c84-b31d540d9c4c",
      value: "415387de-07ee-11ea-9c84-b31d540d9c4c",
      text: "FAT/FAT32"
    },
    {
      key: "415387df-07ee-11ea-9c85-13e4232bdfbc",
      value: "415387df-07ee-11ea-9c85-13e4232bdfbc",
      text: "MVS / SP / XA / ESA (IBM)"
    },
    {
      key: "4157f1a2-07ee-11ea-9cd2-27597b74813b",
      value: "4157f1a2-07ee-11ea-9cd2-27597b74813b",
      text: "IIS (Microsoft)"
    },
    {
      key: "415387e0-07ee-11ea-9c86-6bf14ad695b0",
      value: "415387e0-07ee-11ea-9c86-6bf14ad695b0",
      text: "OS kernels"
    },
    {
      key: "4153aec6-07ee-11ea-9c87-87dae824e0e3",
      value: "4153aec6-07ee-11ea-9c87-87dae824e0e3",
      text: "OS/390 (IBM)"
    },
    {
      key: "4153aec7-07ee-11ea-9c88-df9bd3e63cd8",
      value: "4153aec7-07ee-11ea-9c88-df9bd3e63cd8",
      text: "Solaris OS"
    },
    {
      key: "4153d5e0-07ee-11ea-9c89-2719f6e21ffa",
      value: "4153d5e0-07ee-11ea-9c89-2719f6e21ffa",
      text: "TSO"
    },
    {
      key: "4153d5e1-07ee-11ea-9c8a-77ecdca95aa6",
      value: "4153d5e1-07ee-11ea-9c8a-77ecdca95aa6",
      text: "UNIX (HP-UX)"
    },
    {
      key: "4153d5e2-07ee-11ea-9c8b-0fd19e63b375",
      value: "4153d5e2-07ee-11ea-9c8b-0fd19e63b375",
      text: "UNIX (other)"
    },
    {
      key: "4153fcbe-07ee-11ea-9c8c-6b6ff5769138",
      value: "4153fcbe-07ee-11ea-9c8c-6b6ff5769138",
      text: "Virtual memory management"
    },
    {
      key: "4153fcbf-07ee-11ea-9c8d-0344af6d509d",
      value: "4153fcbf-07ee-11ea-9c8d-0344af6d509d",
      text: "Windows Server 2012"
    },
    {
      key: "4153fcc0-07ee-11ea-9c8e-9718c05b3356",
      value: "4153fcc0-07ee-11ea-9c8e-9718c05b3356",
      text: "CSS (Cascading Style Sheets)"
    },
    {
      key: "415423b0-07ee-11ea-9c8f-6f301c6387a3",
      value: "415423b0-07ee-11ea-9c8f-6f301c6387a3",
      text: "Java "
    },
    {
      key: "415423b1-07ee-11ea-9c90-3b0799598e2c",
      value: "415423b1-07ee-11ea-9c90-3b0799598e2c",
      text: "PL/SQL (Oracle)"
    },
    {
      key: "41544aac-07ee-11ea-9c91-5fbbee1b25df",
      value: "41544aac-07ee-11ea-9c91-5fbbee1b25df",
      text: "HTML "
    },
    {
      key: "41544aad-07ee-11ea-9c92-f3ca641086c1",
      value: "41544aad-07ee-11ea-9c92-f3ca641086c1",
      text: "JavaScript "
    },
    {
      key: "41544aae-07ee-11ea-9c93-cbc16f765229",
      value: "41544aae-07ee-11ea-9c93-cbc16f765229",
      text: "jQuery"
    },
    {
      key: "41547194-07ee-11ea-9c94-3b76bc09bf92",
      value: "41547194-07ee-11ea-9c94-3b76bc09bf92",
      text: "SQL"
    },
    {
      key: "41547195-07ee-11ea-9c95-435c0f9da51d",
      value: "41547195-07ee-11ea-9c95-435c0f9da51d",
      text: "XML"
    },
    {
      key: "41547196-07ee-11ea-9c96-87155cb720b8",
      value: "41547196-07ee-11ea-9c96-87155cb720b8",
      text: "Oracle SQL *Plus"
    },
    {
      key: "415498ae-07ee-11ea-9c97-f76b39d78298",
      value: "415498ae-07ee-11ea-9c97-f76b39d78298",
      text: "Perl"
    },
    {
      key: "415498af-07ee-11ea-9c98-e721eb328d74",
      value: "415498af-07ee-11ea-9c98-e721eb328d74",
      text: "PowerBuilder"
    },
    {
      key: "4154bf8c-07ee-11ea-9c99-8b40da47f890",
      value: "4154bf8c-07ee-11ea-9c99-8b40da47f890",
      text: "UNIX Shell Scripting"
    },
    {
      key: "4154bf8d-07ee-11ea-9c9a-c3a6f064435f",
      value: "4154bf8d-07ee-11ea-9c9a-c3a6f064435f",
      text: "Visual Basic"
    },
    {
      key: "4154bf8e-07ee-11ea-9c9b-874e736d9a5f",
      value: "4154bf8e-07ee-11ea-9c9b-874e736d9a5f",
      text: "XSL"
    },
    {
      key: "4154e674-07ee-11ea-9c9c-1747016178e4",
      value: "4154e674-07ee-11ea-9c9c-1747016178e4",
      text: "ABAP"
    },
    {
      key: "4154e675-07ee-11ea-9c9d-0b7b930d9f82",
      value: "4154e675-07ee-11ea-9c9d-0b7b930d9f82",
      text: "ActionScript"
    },
    {
      key: "4154e676-07ee-11ea-9c9e-f7cf8e11dea0",
      value: "4154e676-07ee-11ea-9c9e-f7cf8e11dea0",
      text: "C "
    },
    {
      key: "41550d84-07ee-11ea-9c9f-d737356166ce",
      value: "41550d84-07ee-11ea-9c9f-d737356166ce",
      text: "C# "
    },
    {
      key: "41550d85-07ee-11ea-9ca0-4b55388df551",
      value: "41550d85-07ee-11ea-9ca0-4b55388df551",
      text: "C++ "
    },
    {
      key: "41550d86-07ee-11ea-9ca1-3f52f53d0a24",
      value: "41550d86-07ee-11ea-9ca1-3f52f53d0a24",
      text: "CICS API (IBM) "
    },
    {
      key: "41553462-07ee-11ea-9ca2-db6c6bcc6cda",
      value: "41553462-07ee-11ea-9ca2-db6c6bcc6cda",
      text: "Clist "
    },
    {
      key: "41553463-07ee-11ea-9ca3-672048b871f4",
      value: "41553463-07ee-11ea-9ca3-672048b871f4",
      text: "JCL"
    },
    {
      key: "41555b5e-07ee-11ea-9ca4-57f527d67832",
      value: "41555b5e-07ee-11ea-9ca4-57f527d67832",
      text: "MicroFocus Cobol"
    },
    {
      key: "41555b5f-07ee-11ea-9ca5-73329cfea2ec",
      value: "41555b5f-07ee-11ea-9ca5-73329cfea2ec",
      text: "PHP"
    },
    {
      key: "41555b60-07ee-11ea-9ca6-9bd5c2efbf79",
      value: "41555b60-07ee-11ea-9ca6-9bd5c2efbf79",
      text: "Powershell"
    },
    {
      key: "4155825a-07ee-11ea-9ca7-ff5ad35a58bd",
      value: "4155825a-07ee-11ea-9ca7-ff5ad35a58bd",
      text: "Swing"
    },
    {
      key: "4155825b-07ee-11ea-9ca8-17379db5271b",
      value: "4155825b-07ee-11ea-9ca8-17379db5271b",
      text: "Transact-SQL (Microsoft)"
    },
    {
      key: "4155825c-07ee-11ea-9ca9-638d5100e495",
      value: "4155825c-07ee-11ea-9ca9-638d5100e495",
      text: "VBScript"
    },
    {
      key: "4155a942-07ee-11ea-9caa-3b445dacb252",
      value: "4155a942-07ee-11ea-9caa-3b445dacb252",
      text: "Visual Basic .NET"
    },
    {
      key: "4155a943-07ee-11ea-9cab-c7b0471373be",
      value: "4155a943-07ee-11ea-9cab-c7b0471373be",
      text: "Visual C++"
    },
    {
      key: "4155d03e-07ee-11ea-9cac-c33b2af70f8b",
      value: "4155d03e-07ee-11ea-9cac-c33b2af70f8b",
      text: "Windows Remote Management (WinRM) "
    },
    {
      key: "4155d03f-07ee-11ea-9cad-6b824545a304",
      value: "4155d03f-07ee-11ea-9cad-6b824545a304",
      text: "X-Query"
    },
    {
      key: "4155d040-07ee-11ea-9cae-efadae779b64",
      value: "4155d040-07ee-11ea-9cae-efadae779b64",
      text: "ASP.NET"
    },
    {
      key: "4155f730-07ee-11ea-9caf-e3f45b577048",
      value: "4155f730-07ee-11ea-9caf-e3f45b577048",
      text: "Identity and Acess Management"
    },
    {
      key: "4155f731-07ee-11ea-9cb0-27df4222a97e",
      value: "4155f731-07ee-11ea-9cb0-27df4222a97e",
      text: "Policies and Procedures"
    },
    {
      key: "4155f732-07ee-11ea-9cb1-3ffd1d5c264d",
      value: "4155f732-07ee-11ea-9cb1-3ffd1d5c264d",
      text: "Testing and Auditing"
    },
    {
      key: "41561e5e-07ee-11ea-9cb2-63c0fa45d2d3",
      value: "41561e5e-07ee-11ea-9cb2-63c0fa45d2d3",
      text: "Encryption algorithms"
    },
    {
      key: "41561e5f-07ee-11ea-9cb3-33641f87a3ac",
      value: "41561e5f-07ee-11ea-9cb3-33641f87a3ac",
      text: "RACF (IBM)"
    },
    {
      key: "41564528-07ee-11ea-9cb4-23e7d6e1e031",
      value: "41564528-07ee-11ea-9cb4-23e7d6e1e031",
      text: "Security Risk Management"
    },
    {
      key: "41564529-07ee-11ea-9cb5-5376980f1fd6",
      value: "41564529-07ee-11ea-9cb5-5376980f1fd6",
      text: "Systems Software Installation & Upgrade"
    },
    {
      key: "4156452a-07ee-11ea-9cb6-1b770e9818cc",
      value: "4156452a-07ee-11ea-9cb6-1b770e9818cc",
      text: "Systems Help Desk Management"
    },
    {
      key: "41566c10-07ee-11ea-9cb7-0f31eabb4bae",
      value: "41566c10-07ee-11ea-9cb7-0f31eabb4bae",
      text: "Systems Production Support"
    },
    {
      key: "41566c11-07ee-11ea-9cb8-6fbfd22f5f07",
      value: "41566c11-07ee-11ea-9cb8-6fbfd22f5f07",
      text: "Systems Security and User Administration"
    },
    {
      key: "41566c12-07ee-11ea-9cb9-3f914c6bcbd2",
      value: "41566c12-07ee-11ea-9cb9-3f914c6bcbd2",
      text: "Systems Security Maintenance"
    },
    {
      key: "41569302-07ee-11ea-9cba-af9c03c7d0e7",
      value: "41569302-07ee-11ea-9cba-af9c03c7d0e7",
      text: "Tivoli (IBM)"
    },
    {
      key: "41569303-07ee-11ea-9cbb-2316c90a56c3",
      value: "41569303-07ee-11ea-9cbb-2316c90a56c3",
      text: "Microsoft BitLocker Admin and Monitoring (MBAM)"
    },
    {
      key: "41569304-07ee-11ea-9cbc-73459016f446",
      value: "41569304-07ee-11ea-9cbc-73459016f446",
      text: "Microsoft Desktop Optimization Pack (MDOP)"
    },
    {
      key: "4156b9f4-07ee-11ea-9cbd-738737b86675",
      value: "4156b9f4-07ee-11ea-9cbd-738737b86675",
      text: "Microsoft System Center"
    },
    {
      key: "4156b9f5-07ee-11ea-9cbe-033fa7d53d95",
      value: "4156b9f5-07ee-11ea-9cbe-033fa7d53d95",
      text: "Symantec Endpoint Protection "
    },
    {
      key: "4156e0e6-07ee-11ea-9cbf-b3a055f71eee",
      value: "4156e0e6-07ee-11ea-9cbf-b3a055f71eee",
      text: "vi Editor"
    },
    {
      key: "4156e0e7-07ee-11ea-9cc0-5f9e088e4cc7",
      value: "4156e0e7-07ee-11ea-9cc0-5f9e088e4cc7",
      text: "Windows Management Instrumentation (WMI) "
    },
    {
      key: "4156e0e8-07ee-11ea-9cc1-c7dd40c11b7f",
      value: "4156e0e8-07ee-11ea-9cc1-c7dd40c11b7f",
      text: "Interface design (computer)"
    },
    {
      key: "4157080a-07ee-11ea-9cc2-430fb6e27dd4",
      value: "4157080a-07ee-11ea-9cc2-430fb6e27dd4",
      text: "Proposal writer"
    },
    {
      key: "4157080b-07ee-11ea-9cc3-f7ee29ca083d",
      value: "4157080b-07ee-11ea-9cc3-f7ee29ca083d",
      text: "Technical Content"
    },
    {
      key: "4157080c-07ee-11ea-9cc4-7348da9a0e01",
      value: "4157080c-07ee-11ea-9cc4-7348da9a0e01",
      text: "Technical Writer (procedures)"
    },
    {
      key: "41572ede-07ee-11ea-9cc5-63dd6c73609e",
      value: "41572ede-07ee-11ea-9cc5-63dd6c73609e",
      text: "Document design"
    },
    {
      key: "41572edf-07ee-11ea-9cc6-833bf9f4e10d",
      value: "41572edf-07ee-11ea-9cc6-833bf9f4e10d",
      text: "Illustration"
    },
    {
      key: "415755e4-07ee-11ea-9cc7-13a93f76e75e",
      value: "415755e4-07ee-11ea-9cc7-13a93f76e75e",
      text: "Information architecting"
    },
    {
      key: "415755e5-07ee-11ea-9cc8-b734e08c9079",
      value: "415755e5-07ee-11ea-9cc8-b734e08c9079",
      text: "Proofreader"
    },
    {
      key: "415755e6-07ee-11ea-9cc9-8305db72d16a",
      value: "415755e6-07ee-11ea-9cc9-8305db72d16a",
      text: "Technical Writer (app / end-user software)"
    },
    {
      key: "41577cd6-07ee-11ea-9cca-2b7947a1fc27",
      value: "41577cd6-07ee-11ea-9cca-2b7947a1fc27",
      text: "Trainer (technical content)"
    },
    {
      key: "41577cd7-07ee-11ea-9ccb-1bd89981c565",
      value: "41577cd7-07ee-11ea-9ccb-1bd89981c565",
      text: "SMTP"
    },
    {
      key: "41577cd8-07ee-11ea-9ccc-13fdb9f10187",
      value: "41577cd8-07ee-11ea-9ccc-13fdb9f10187",
      text: "Apache HTTP Server"
    },
    {
      key: "4157a3b4-07ee-11ea-9ccd-af374df39b5b",
      value: "4157a3b4-07ee-11ea-9ccd-af374df39b5b",
      text: "Oracle Application Server"
    },
    {
      key: "4157a3b5-07ee-11ea-9cce-0f66234e82f5",
      value: "4157a3b5-07ee-11ea-9cce-0f66234e82f5",
      text: "Sendmail"
    },
    {
      key: "4157caa6-07ee-11ea-9ccf-97c7690a7b34",
      value: "4157caa6-07ee-11ea-9ccf-97c7690a7b34",
      text: "WebSphere (IBM)"
    },
    {
      key: "4157caa7-07ee-11ea-9cd0-438ae07183c4",
      value: "4157caa7-07ee-11ea-9cd0-438ae07183c4",
      text: "ATG Dynamo"
    },
    {
      key: "4157caa8-07ee-11ea-9cd1-97ac939612b9",
      value: "4157caa8-07ee-11ea-9cd1-97ac939612b9",
      text: "FTP servers"
    },
    {
      key: "4157f1a3-07ee-11ea-9cd3-e7e48fc77233",
      value: "4157f1a3-07ee-11ea-9cd3-e7e48fc77233",
      text: "Jboss"
    },
    {
      key: "4157f1a4-07ee-11ea-9cd4-bf819b7d299d",
      value: "4157f1a4-07ee-11ea-9cd4-bf819b7d299d",
      text: "Print servers"
    },
    {
      key: "41581894-07ee-11ea-9cd5-e38201632d6c",
      value: "41581894-07ee-11ea-9cd5-e38201632d6c",
      text: "Proxy servers"
    },
    {
      key: "41581895-07ee-11ea-9cd6-e392403d5be1",
      value: "41581895-07ee-11ea-9cd6-e392403d5be1",
      text: "WebLogic (Oracle)"
    },
    {
      key: "41583f86-07ee-11ea-9cd7-7f63d4221936",
      value: "41583f86-07ee-11ea-9cd7-7f63d4221936",
      text: ".Net Framework"
    },
    {
      key: "41583f87-07ee-11ea-9cd8-cb63428b5977",
      value: "41583f87-07ee-11ea-9cd8-cb63428b5977",
      text: "ESB: Enterprise Service Bus"
    },
    {
      key: "41583f88-07ee-11ea-9cd9-c3188bf706b9",
      value: "41583f88-07ee-11ea-9cd9-c3188bf706b9",
      text: "Google Search Appliance"
    },
    {
      key: "41586682-07ee-11ea-9cda-c35795f8234a",
      value: "41586682-07ee-11ea-9cda-c35795f8234a",
      text: "Dreamweaver (Adobe)"
    },
    {
      key: "41586683-07ee-11ea-9cdb-7b3d027886e2",
      value: "41586683-07ee-11ea-9cdb-7b3d027886e2",
      text: "Apache Tomcat"
    },
    {
      key: "41586684-07ee-11ea-9cdc-7361a2fe879e",
      value: "41586684-07ee-11ea-9cdc-7361a2fe879e",
      text: "ColdFusion CFML"
    },
    {
      key: "41588d88-07ee-11ea-9cdd-b746cd2636a1",
      value: "41588d88-07ee-11ea-9cdd-b746cd2636a1",
      text: "jQuery"
    },
    {
      key: "41588d89-07ee-11ea-9cde-f3d3271e8f3f",
      value: "41588d89-07ee-11ea-9cde-f3d3271e8f3f",
      text: "LiveCycle Design (Adobe)"
    },
    {
      key: "41588d8a-07ee-11ea-9cdf-f73125c143b7",
      value: "41588d8a-07ee-11ea-9cdf-f73125c143b7",
      text: "Microsoft Silverlight"
    },
    {
      key: "4158b484-07ee-11ea-9ce0-df05f4ff9051",
      value: "4158b484-07ee-11ea-9ce0-df05f4ff9051",
      text: "User Experience (UX)"
    },
    {
      key: "4158b485-07ee-11ea-9ce1-3fa61fc5766f",
      value: "4158b485-07ee-11ea-9ce1-3fa61fc5766f",
      text: "WebTrends"
    },
    {
      key: "ef60f9fe-016f-11ea-9a9f-362b9e155667",
      value: "ef60f9fe-016f-11ea-9a9f-362b9e155667",
      text: "Test .Net Framework"
    },
    {
      key: "f6f51402-016f-11ea-9a9f-362b9e155667",
      value: "f6f51402-016f-11ea-9a9f-362b9e155667",
      text: "Test jQuery"
    }
  ],
  careerMobility: [
    {
      key: "40a03fee-07ee-11ea-980d-bbe056f3d50c",
      value: "40a03fee-07ee-11ea-980d-bbe056f3d50c",
      text: "Fit"
    },
    {
      key: "40a066ea-07ee-11ea-980e-e38b423bc16f",
      value: "40a066ea-07ee-11ea-980e-e38b423bc16f",
      text: "Move to more suitable role"
    },
    {
      key: "40a08de6-07ee-11ea-980f-9f5c1693dd19",
      value: "40a08de6-07ee-11ea-980f-9f5c1693dd19",
      text: "Develop in role"
    },
    {
      key: "40a08de7-07ee-11ea-9810-d769244cdcbb",
      value: "40a08de7-07ee-11ea-9810-d769244cdcbb",
      text: "Well-placed in role"
    },
    {
      key: "40a08de8-07ee-11ea-9811-4b89b630e365",
      value: "40a08de8-07ee-11ea-9811-4b89b630e365",
      text: "Ready for lateral movement"
    },
    {
      key: "40a0b4d8-07ee-11ea-9812-8396bc90feb5",
      value: "40a0b4d8-07ee-11ea-9812-8396bc90feb5",
      text: "Ready for advancement"
    },
    {
      key: "e6ff04cc-ff44-11e9-aad5-362b9e155667",
      value: "e6ff04cc-ff44-11e9-aad5-362b9e155667",
      text: "testCareerMobilityEn1"
    },
    {
      key: "ed78c3ba-ff44-11e9-8f0b-362b9e155667",
      value: "ed78c3ba-ff44-11e9-8f0b-362b9e155667",
      text: "testCareerMobilityEn2"
    }
  ],
  diploma: [
    {
      key: "4105e9de-07ee-11ea-98c7-5baa9020556d",
      value: "4105e9de-07ee-11ea-98c7-5baa9020556d",
      text: "Master of Science - Agri. Econ"
    },
    {
      key: "41063916-07ee-11ea-98c8-234d285e79e2",
      value: "41063916-07ee-11ea-98c8-234d285e79e2",
      text: "Diploma in International Trade"
    },
    {
      key: "41063917-07ee-11ea-98c9-5371b7afee93",
      value: "41063917-07ee-11ea-98c9-5371b7afee93",
      text: "Diploma in Applied Arts"
    },
    {
      key: "41065ebe-07ee-11ea-98ca-8f7d195988a8",
      value: "41065ebe-07ee-11ea-98ca-8f7d195988a8",
      text: "Bachelor of Science-Specialist"
    },
    {
      key: "41065ebf-07ee-11ea-98cb-1f9ba008e14d",
      value: "41065ebf-07ee-11ea-98cb-1f9ba008e14d",
      text: "Bachelor of Applied GIS"
    },
    {
      key: "41065ec0-07ee-11ea-98cc-f741e0d2eb5f",
      value: "41065ec0-07ee-11ea-98cc-f741e0d2eb5f",
      text: "Diploma in Advertising Arts"
    },
    {
      key: "410685ba-07ee-11ea-98cd-c3936f120769",
      value: "410685ba-07ee-11ea-98cd-c3936f120769",
      text: "Bachelor of Agro-economics"
    },
    {
      key: "410685bb-07ee-11ea-98ce-2be158fdff38",
      value: "410685bb-07ee-11ea-98ce-2be158fdff38",
      text: "Master of Rural Economy"
    },
    {
      key: "410685bc-07ee-11ea-98cf-83264184e1fa",
      value: "410685bc-07ee-11ea-98cf-83264184e1fa",
      text: "Master of Science -Rural Studi"
    },
    {
      key: "4106acac-07ee-11ea-98d0-0b15a00657c2",
      value: "4106acac-07ee-11ea-98d0-0b15a00657c2",
      text: "Master of Science -Int.Develop"
    },
    {
      key: "4106acad-07ee-11ea-98d1-db9cda2cac83",
      value: "4106acad-07ee-11ea-98d1-db9cda2cac83",
      text: "Bachlor of Arts -Int.Develop"
    },
    {
      key: "4106d3a8-07ee-11ea-98d2-9707d20f1bbd",
      value: "4106d3a8-07ee-11ea-98d2-9707d20f1bbd",
      text: "Diploma in Comp. Science"
    },
    {
      key: "4106d3a9-07ee-11ea-98d3-ebb99857c2ca",
      value: "4106d3a9-07ee-11ea-98d3-ebb99857c2ca",
      text: "Diploma in Library & Info.Tech"
    },
    {
      key: "4106d3aa-07ee-11ea-98d4-7bfc6be349c6",
      value: "4106d3aa-07ee-11ea-98d4-7bfc6be349c6",
      text: "Diploma in Criminology"
    },
    {
      key: "4106fa9a-07ee-11ea-98d5-c727549e4f24",
      value: "4106fa9a-07ee-11ea-98d5-c727549e4f24",
      text: "Bachelor of Science (Honours)"
    },
    {
      key: "4106fa9b-07ee-11ea-98d6-e79c26e2e1f1",
      value: "4106fa9b-07ee-11ea-98d6-e79c26e2e1f1",
      text: "Diploma in Systems Support"
    },
    {
      key: "4106fa9c-07ee-11ea-98d7-cb075bbc6523",
      value: "4106fa9c-07ee-11ea-98d7-cb075bbc6523",
      text: "Diploma in Agriculture"
    },
    {
      key: "4107218c-07ee-11ea-98d8-f7610e1705e9",
      value: "4107218c-07ee-11ea-98d8-f7610e1705e9",
      text: "Master of Science - Neurology"
    },
    {
      key: "4107218d-07ee-11ea-98d9-cf4bfafcfd74",
      value: "4107218d-07ee-11ea-98d9-cf4bfafcfd74",
      text: "Master of Science - Biology"
    },
    {
      key: "4107218e-07ee-11ea-98da-23c4291cf810",
      value: "4107218e-07ee-11ea-98da-23c4291cf810",
      text: "Diplôme- 2 cycle-adminstration"
    },
    {
      key: "41074888-07ee-11ea-98db-97f28c77ac3c",
      value: "41074888-07ee-11ea-98db-97f28c77ac3c",
      text: "Bachelor Food Science & Techno"
    },
    {
      key: "41074889-07ee-11ea-98dc-6be81e716a2d",
      value: "41074889-07ee-11ea-98dc-6be81e716a2d",
      text: "Dip.communicat.engineer. techn"
    },
    {
      key: "41076f7a-07ee-11ea-98dd-37ff02a864e9",
      value: "41076f7a-07ee-11ea-98dd-37ff02a864e9",
      text: "Dip.inform.systems.technology"
    },
    {
      key: "41076f7b-07ee-11ea-98de-3f1484a727ac",
      value: "41076f7b-07ee-11ea-98de-3f1484a727ac",
      text: "master sc.geog.information sys"
    },
    {
      key: "41076f7c-07ee-11ea-98df-4b4a0bb2f9ae",
      value: "41076f7c-07ee-11ea-98df-4b4a0bb2f9ae",
      text: "administrative assist diploma"
    },
    {
      key: "4107966c-07ee-11ea-98e0-535620b5328c",
      value: "4107966c-07ee-11ea-98e0-535620b5328c",
      text: "Bachelor, commun. human relat."
    },
    {
      key: "4107966d-07ee-11ea-98e1-ff41083c4b57",
      value: "4107966d-07ee-11ea-98e1-ff41083c4b57",
      text: "Dip.Medical Laboratory Techn."
    },
    {
      key: "4107966e-07ee-11ea-98e2-9b647840a96b",
      value: "4107966e-07ee-11ea-98e2-9b647840a96b",
      text: "Doctor agriculture economics"
    },
    {
      key: "4107bd5e-07ee-11ea-98e3-4b4955cac3d8",
      value: "4107bd5e-07ee-11ea-98e3-4b4955cac3d8",
      text: "TESOL diploma"
    },
    {
      key: "4107bd5f-07ee-11ea-98e4-8356db9e27b7",
      value: "4107bd5f-07ee-11ea-98e4-8356db9e27b7",
      text: "Diploma in Horticulture"
    },
    {
      key: "4107e45a-07ee-11ea-98e5-5bac1e13bc93",
      value: "4107e45a-07ee-11ea-98e5-5bac1e13bc93",
      text: "Dip.Applied Science Technology"
    },
    {
      key: "4107e45b-07ee-11ea-98e6-b7e879e7e10f",
      value: "4107e45b-07ee-11ea-98e6-b7e879e7e10f",
      text: "Master in Agroforestry"
    },
    {
      key: "4107e45c-07ee-11ea-98e7-d751e193c471",
      value: "4107e45c-07ee-11ea-98e7-d751e193c471",
      text: "Dip. Computer Sup. Spec. & IT"
    },
    {
      key: "41080b4c-07ee-11ea-98e8-fbb5230c830e",
      value: "41080b4c-07ee-11ea-98e8-fbb5230c830e",
      text: "Doctor of Entomology"
    },
    {
      key: "41080b4d-07ee-11ea-98e9-17857041b387",
      value: "41080b4d-07ee-11ea-98e9-17857041b387",
      text: "Financial Assistant Diploma"
    },
    {
      key: "41080b4e-07ee-11ea-98ea-6f3943b66a24",
      value: "41080b4e-07ee-11ea-98ea-6f3943b66a24",
      text: "Honours Diploma"
    },
    {
      key: "4108323e-07ee-11ea-98eb-d7aa0b3c00cb",
      value: "4108323e-07ee-11ea-98eb-d7aa0b3c00cb",
      text: "Bachelor Science Microbiology"
    },
    {
      key: "4108323f-07ee-11ea-98ec-e3981597d908",
      value: "4108323f-07ee-11ea-98ec-e3981597d908",
      text: "Bachelor of Economics"
    },
    {
      key: "4108593a-07ee-11ea-98ed-0f478368e93f",
      value: "4108593a-07ee-11ea-98ed-0f478368e93f",
      text: "Dip. Intl Development -2 cycle"
    },
    {
      key: "4108593b-07ee-11ea-98ee-6f9d815c1876",
      value: "4108593b-07ee-11ea-98ee-6f9d815c1876",
      text: "College Stenography Certificat"
    },
    {
      key: "4108593c-07ee-11ea-98ef-4f4963e5ef11",
      value: "4108593c-07ee-11ea-98ef-4f4963e5ef11",
      text: "Associate in"
    },
    {
      key: "4108802c-07ee-11ea-98f0-879a3933416e",
      value: "4108802c-07ee-11ea-98f0-879a3933416e",
      text: "Associate of Arts"
    },
    {
      key: "4108802d-07ee-11ea-98f1-e7c8f3dac2e9",
      value: "4108802d-07ee-11ea-98f1-e7c8f3dac2e9",
      text: "Associate of Applied Science"
    },
    {
      key: "4108802e-07ee-11ea-98f2-f76a0006a0be",
      value: "4108802e-07ee-11ea-98f2-f76a0006a0be",
      text: "Associate of Business Admin"
    },
    {
      key: "4108a71e-07ee-11ea-98f3-2fff215f2353",
      value: "4108a71e-07ee-11ea-98f3-2fff215f2353",
      text: "Advanced Diploma-VetTechnology"
    },
    {
      key: "4108a71f-07ee-11ea-98f4-abadb327d497",
      value: "4108a71f-07ee-11ea-98f4-abadb327d497",
      text: "Associate of Engineering"
    },
    {
      key: "4108ce1a-07ee-11ea-98f5-8f1dc174c5ee",
      value: "4108ce1a-07ee-11ea-98f5-8f1dc174c5ee",
      text: "Associate of Science"
    },
    {
      key: "4108ce1b-07ee-11ea-98f6-0bb0542b89ac",
      value: "4108ce1b-07ee-11ea-98f6-0bb0542b89ac",
      text: "Bachelor of Arts"
    },
    {
      key: "4108ce1c-07ee-11ea-98f7-93819a6e0883",
      value: "4108ce1c-07ee-11ea-98f7-93819a6e0883",
      text: "Bachelor of Applied Arts"
    },
    {
      key: "4108f50c-07ee-11ea-98f8-dffa7b787444",
      value: "4108f50c-07ee-11ea-98f8-dffa7b787444",
      text: "Bachelor of Accounting"
    },
    {
      key: "4108f50d-07ee-11ea-98f9-d7d23f7c36d3",
      value: "4108f50d-07ee-11ea-98f9-d7d23f7c36d3",
      text: "Bachelor Appl ConservationEnfc"
    },
    {
      key: "4108f50e-07ee-11ea-98fa-bf2ee4bff7ca",
      value: "4108f50e-07ee-11ea-98fa-bf2ee4bff7ca",
      text: "Bachelor of Arts Community"
    },
    {
      key: "41091bfe-07ee-11ea-98fb-5fe0ed995d4a",
      value: "41091bfe-07ee-11ea-98fb-5fe0ed995d4a",
      text: "Bachelor of Dramatic Arts"
    },
    {
      key: "41091bff-07ee-11ea-98fc-cf508e72c7dc",
      value: "41091bff-07ee-11ea-98fc-cf508e72c7dc",
      text: "Bachelor of Administration"
    },
    {
      key: "41091c00-07ee-11ea-98fd-effd89ccfb74",
      value: "41091c00-07ee-11ea-98fd-effd89ccfb74",
      text: "Bachelor of Arts (Honours)"
    },
    {
      key: "410942fa-07ee-11ea-98fe-a3c3e220137d",
      value: "410942fa-07ee-11ea-98fe-a3c3e220137d",
      text: "Bachelor Appl Justice Studies"
    },
    {
      key: "410942fb-07ee-11ea-98ff-f774089ecb90",
      value: "410942fb-07ee-11ea-98ff-f774089ecb90",
      text: "Bachelor Applied Management"
    },
    {
      key: "410969ec-07ee-11ea-9900-a7008c257100",
      value: "410969ec-07ee-11ea-9900-a7008c257100",
      text: "Bachelor of Arts-Recreation Ad"
    },
    {
      key: "410969ed-07ee-11ea-9901-63b0c6761da4",
      value: "410969ed-07ee-11ea-9901-63b0c6761da4",
      text: "Bachelor of Architecture"
    },
    {
      key: "410969ee-07ee-11ea-9902-cbff4ad769fd",
      value: "410969ee-07ee-11ea-9902-cbff4ad769fd",
      text: "Bachelor of Arts and Science"
    },
    {
      key: "410990de-07ee-11ea-9903-7733bf4f487f",
      value: "410990de-07ee-11ea-9903-7733bf4f487f",
      text: "Bachelor of Applied Science"
    },
    {
      key: "410990df-07ee-11ea-9904-5f54fc8fee58",
      value: "410990df-07ee-11ea-9904-5f54fc8fee58",
      text: "Bachelor Military Arts/Science"
    },
    {
      key: "4109b7da-07ee-11ea-9905-976b916555e6",
      value: "4109b7da-07ee-11ea-9905-976b916555e6",
      text: "Bachelor of Arts - Sociology"
    },
    {
      key: "4109b7db-07ee-11ea-9906-03e3a95d320d",
      value: "4109b7db-07ee-11ea-9906-03e3a95d320d",
      text: "Bachelor of Admin Studies"
    },
    {
      key: "4109b7dc-07ee-11ea-9907-d3056095ec07",
      value: "4109b7dc-07ee-11ea-9907-d3056095ec07",
      text: "Bachelor of Visual Arts"
    },
    {
      key: "4109ded6-07ee-11ea-9908-87a32dced380",
      value: "4109ded6-07ee-11ea-9908-87a32dced380",
      text: "Bachelor of Business Admin"
    },
    {
      key: "4109ded7-07ee-11ea-9909-0f57b614a988",
      value: "4109ded7-07ee-11ea-9909-0f57b614a988",
      text: "Bachelor of Business Economics"
    },
    {
      key: "410a05c8-07ee-11ea-990a-1b99abb17225",
      value: "410a05c8-07ee-11ea-990a-1b99abb17225",
      text: "Bachelor Business Management"
    },
    {
      key: "410a05c9-07ee-11ea-990b-5742b2f53237",
      value: "410a05c9-07ee-11ea-990b-5742b2f53237",
      text: "Bachelor of Biblical Studies"
    },
    {
      key: "410a05ca-07ee-11ea-990c-7f2fffe63a88",
      value: "410a05ca-07ee-11ea-990c-7f2fffe63a88",
      text: "Bachelor - Christian Education"
    },
    {
      key: "410a2cc4-07ee-11ea-990d-8b5fc610ff61",
      value: "410a2cc4-07ee-11ea-990d-8b5fc610ff61",
      text: "Bachelor of commerce (Honours)"
    },
    {
      key: "410a53b6-07ee-11ea-990e-f77f12413a80",
      value: "410a53b6-07ee-11ea-990e-f77f12413a80",
      text: "Bachelor of Computer Info Syst"
    },
    {
      key: "410a53b7-07ee-11ea-990f-2741b4301b3c",
      value: "410a53b7-07ee-11ea-990f-2741b4301b3c",
      text: "Bachelor of Civil Law"
    },
    {
      key: "410a7a9e-07ee-11ea-9910-63ffc1bf8b2e",
      value: "410a7a9e-07ee-11ea-9910-63ffc1bf8b2e",
      text: "Bachelor of Commerce"
    },
    {
      key: "410a7a9f-07ee-11ea-9911-fb613efd90fd",
      value: "410a7a9f-07ee-11ea-9911-fb613efd90fd",
      text: "Bachelor of Community Rehab"
    },
    {
      key: "410a7aa0-07ee-11ea-9912-3b72f2e616f2",
      value: "410a7aa0-07ee-11ea-9912-3b72f2e616f2",
      text: "Bachelor of Criminology"
    },
    {
      key: "410aa19a-07ee-11ea-9913-b3b4f520450c",
      value: "410aa19a-07ee-11ea-9913-b3b4f520450c",
      text: "Bachelor of Computer Science"
    },
    {
      key: "410aa19b-07ee-11ea-9914-4f61199fe752",
      value: "410aa19b-07ee-11ea-9914-4f61199fe752",
      text: "Bachelor of Design"
    },
    {
      key: "410ac88c-07ee-11ea-9915-f34e69626707",
      value: "410ac88c-07ee-11ea-9915-f34e69626707",
      text: "Bachelor of Dental Science"
    },
    {
      key: "410ac88d-07ee-11ea-9916-2fab83fe9112",
      value: "410ac88d-07ee-11ea-9916-2fab83fe9112",
      text: "Bachelor of Engineering"
    },
    {
      key: "410ac88e-07ee-11ea-9917-87660e8cf4bb",
      value: "410ac88e-07ee-11ea-9917-87660e8cf4bb",
      text: "Bachelor Education afterDegree"
    },
    {
      key: "410aef9c-07ee-11ea-9918-dbe4e10c5d77",
      value: "410aef9c-07ee-11ea-9918-dbe4e10c5d77",
      text: "Bachelor of Education"
    },
    {
      key: "410aef9d-07ee-11ea-9919-6b5c32b9bec2",
      value: "410aef9d-07ee-11ea-9919-6b5c32b9bec2",
      text: "Bachelor Environmental Design"
    },
    {
      key: "410b167a-07ee-11ea-991a-8754264819ae",
      value: "410b167a-07ee-11ea-991a-8754264819ae",
      text: "Bachelor Engineering and Mngt"
    },
    {
      key: "410b167b-07ee-11ea-991b-bb1d1c2ef9d5",
      value: "410b167b-07ee-11ea-991b-bb1d1c2ef9d5",
      text: "Bachelor Engineer and Society"
    },
    {
      key: "410b3d6c-07ee-11ea-991c-d3e8ecf0d099",
      value: "410b3d6c-07ee-11ea-991c-d3e8ecf0d099",
      text: "Bachelor of Physical Ed-Health"
    },
    {
      key: "410b3d6d-07ee-11ea-991d-0f4f3d5fc781",
      value: "410b3d6d-07ee-11ea-991d-0f4f3d5fc781",
      text: "Bachelor Environmental Studies"
    },
    {
      key: "410b3d6e-07ee-11ea-991e-fb84f8edae74",
      value: "410b3d6e-07ee-11ea-991e-fb84f8edae74",
      text: "Bachelor Engineering Science"
    },
    {
      key: "410b6468-07ee-11ea-991f-47d439af4adb",
      value: "410b6468-07ee-11ea-991f-47d439af4adb",
      text: "Bachelor Exercise,  Sport Scien"
    },
    {
      key: "410b6469-07ee-11ea-9920-1f7317bc6fbb",
      value: "410b6469-07ee-11ea-9920-1f7317bc6fbb",
      text: "Bachelor of Fine Arts"
    },
    {
      key: "410b646a-07ee-11ea-9921-0319a979da78",
      value: "410b646a-07ee-11ea-9921-0319a979da78",
      text: "Bachelor of Science Forestry"
    },
    {
      key: "410b8b5a-07ee-11ea-9922-83dd93500645",
      value: "410b8b5a-07ee-11ea-9922-83dd93500645",
      text: "Bachelor of Food Science"
    },
    {
      key: "410b8b5b-07ee-11ea-9923-fb9342e4e49b",
      value: "410b8b5b-07ee-11ea-9923-fb9342e4e49b",
      text: "Bachelor of General Studies"
    },
    {
      key: "410bb24c-07ee-11ea-9924-bb1230e2a09f",
      value: "410bb24c-07ee-11ea-9924-bb1230e2a09f",
      text: "Bachelor of Home Economics"
    },
    {
      key: "410bb24d-07ee-11ea-9925-af8c2782998b",
      value: "410bb24d-07ee-11ea-9925-af8c2782998b",
      text: "Bachelor of Human Ecology"
    },
    {
      key: "410bb24e-07ee-11ea-9926-ef6bedf7c894",
      value: "410bb24e-07ee-11ea-9926-ef6bedf7c894",
      text: "Bachelor of Human Justice"
    },
    {
      key: "410bd93e-07ee-11ea-9927-977aa6369b28",
      value: "410bd93e-07ee-11ea-9927-977aa6369b28",
      text: "Bachelor of Human Kinetics"
    },
    {
      key: "410bd93f-07ee-11ea-9928-bb82c0451bef",
      value: "410bd93f-07ee-11ea-9928-bb82c0451bef",
      text: "Bachelor Human Resources Devel"
    },
    {
      key: "410bd940-07ee-11ea-9929-2f10afb883fc",
      value: "410bd940-07ee-11ea-9929-2f10afb883fc",
      text: "Bachelor Hotel, Resort Mgmt"
    },
    {
      key: "410c003a-07ee-11ea-992a-affefb2b6c9d",
      value: "410c003a-07ee-11ea-992a-affefb2b6c9d",
      text: "Bachelor of Health Science"
    },
    {
      key: "410c003b-07ee-11ea-992b-57c6ee00839d",
      value: "410c003b-07ee-11ea-992b-57c6ee00839d",
      text: "Bachelor of Health Science OT"
    },
    {
      key: "410c272c-07ee-11ea-992c-efe0d5d1ed98",
      value: "410c272c-07ee-11ea-992c-efe0d5d1ed98",
      text: "Bachelor of Health Science PT"
    },
    {
      key: "410c272d-07ee-11ea-992d-379ecd1c9c4c",
      value: "410c272d-07ee-11ea-992d-379ecd1c9c4c",
      text: "Bachelor - Applied Informatics"
    },
    {
      key: "410c272e-07ee-11ea-992e-7f275461c5c4",
      value: "410c272e-07ee-11ea-992e-7f275461c5c4",
      text: "Bachelor InternationalBusiness"
    },
    {
      key: "410c4e1e-07ee-11ea-992f-5f88e579fb5e",
      value: "410c4e1e-07ee-11ea-992f-5f88e579fb5e",
      text: "Bachelor of Industrial Design"
    },
    {
      key: "410c4e1f-07ee-11ea-9930-1fe36a50c864",
      value: "410c4e1f-07ee-11ea-9930-1fe36a50c864",
      text: "Bachelor of Interior Design"
    },
    {
      key: "410c4e20-07ee-11ea-9931-e793f92f93b1",
      value: "410c4e20-07ee-11ea-9931-e793f92f93b1",
      text: "Bachelor of Integrated Studies"
    },
    {
      key: "410c751a-07ee-11ea-9932-57b79111994b",
      value: "410c751a-07ee-11ea-9932-57b79111994b",
      text: "Bachelor Independent Studies"
    },
    {
      key: "410c751b-07ee-11ea-9933-e378f7b10604",
      value: "410c751b-07ee-11ea-9933-e378f7b10604",
      text: "Bachelor Indian Social Work"
    },
    {
      key: "410c9c0c-07ee-11ea-9934-1347afad8653",
      value: "410c9c0c-07ee-11ea-9934-1347afad8653",
      text: "Bachelor Information Systems"
    },
    {
      key: "410c9c0d-07ee-11ea-9935-9b0a2237142d",
      value: "410c9c0d-07ee-11ea-9935-9b0a2237142d",
      text: "Bachelor of Journalism"
    },
    {
      key: "410c9c0e-07ee-11ea-9936-23824b7d4757",
      value: "410c9c0e-07ee-11ea-9936-23824b7d4757",
      text: "Bachelor of Kinesiology"
    },
    {
      key: "410cc2fe-07ee-11ea-9937-c336ed491d67",
      value: "410cc2fe-07ee-11ea-9937-c336ed491d67",
      text: "Bachelor of Laws B.L.(L.)"
    },
    {
      key: "410cc2ff-07ee-11ea-9938-23b044fc0518",
      value: "410cc2ff-07ee-11ea-9938-23b044fc0518",
      text: "Bachelor Laboratory Technology"
    },
    {
      key: "410cc300-07ee-11ea-9939-a3322fe3a9eb",
      value: "410cc300-07ee-11ea-9939-a3322fe3a9eb",
      text: "Bachelor of Leisure"
    },
    {
      key: "410ce9fa-07ee-11ea-993a-5b41aae6fadd",
      value: "410ce9fa-07ee-11ea-993a-5b41aae6fadd",
      text: "Bachelor of Library Science"
    },
    {
      key: "410ce9fb-07ee-11ea-993b-07aae67734fe",
      value: "410ce9fb-07ee-11ea-993b-07aae67734fe",
      text: "Bachelor of Musical Arts"
    },
    {
      key: "410d10ec-07ee-11ea-993c-eb41d6b4f0e1",
      value: "410d10ec-07ee-11ea-993c-eb41d6b4f0e1",
      text: "Bachelor of Math"
    },
    {
      key: "410d10ed-07ee-11ea-993d-73dabd350ed0",
      value: "410d10ed-07ee-11ea-993d-73dabd350ed0",
      text: "Bachelor of Medicine"
    },
    {
      key: "410d10ee-07ee-11ea-993e-0328f00f3439",
      value: "410d10ee-07ee-11ea-993e-0328f00f3439",
      text: "Bachelor of Management"
    },
    {
      key: "410d37de-07ee-11ea-993f-d74d3d474d85",
      value: "410d37de-07ee-11ea-993f-d74d3d474d85",
      text: "Bachelor Med Lab Science"
    },
    {
      key: "410d37df-07ee-11ea-9940-8f0b4955ea90",
      value: "410d37df-07ee-11ea-9940-8f0b4955ea90",
      text: "Bachelor Medical Rehab (OT)"
    },
    {
      key: "410d37e0-07ee-11ea-9941-9f1de610b412",
      value: "410d37e0-07ee-11ea-9941-9f1de610b412",
      text: "Bachelor Medical Rehab (PT)"
    },
    {
      key: "410d5eda-07ee-11ea-9942-9f38a47c9863",
      value: "410d5eda-07ee-11ea-9942-9f38a47c9863",
      text: "Bachelor of Maritime Studies"
    },
    {
      key: "410d5edb-07ee-11ea-9943-2f7ddae9e85a",
      value: "410d5edb-07ee-11ea-9943-2f7ddae9e85a",
      text: "Bachelor of Medical Science"
    },
    {
      key: "410d5edc-07ee-11ea-9944-cf7375652c45",
      value: "410d5edc-07ee-11ea-9944-cf7375652c45",
      text: "Bachelor of Music Therapy"
    },
    {
      key: "410d85cc-07ee-11ea-9945-33507cb13520",
      value: "410d85cc-07ee-11ea-9945-33507cb13520",
      text: "Bachelor of Music"
    },
    {
      key: "410d85cd-07ee-11ea-9946-4b4bb42e2843",
      value: "410d85cd-07ee-11ea-9946-4b4bb42e2843",
      text: "Bachelor of Music Education"
    },
    {
      key: "410dacbe-07ee-11ea-9947-77819829aac8",
      value: "410dacbe-07ee-11ea-9947-77819829aac8",
      text: "Bachelor of Nursing Degree"
    },
    {
      key: "410dacbf-07ee-11ea-9948-8fe9f0c2f01b",
      value: "410dacbf-07ee-11ea-9948-8fe9f0c2f01b",
      text: "Bachelor of Nursing (RN)"
    },
    {
      key: "410dacc0-07ee-11ea-9949-b3a8bf1fdc4f",
      value: "410dacc0-07ee-11ea-9949-b3a8bf1fdc4f",
      text: "Bachelor Natural Resource Sci"
    },
    {
      key: "410dd3ba-07ee-11ea-994a-175934473d0d",
      value: "410dd3ba-07ee-11ea-994a-175934473d0d",
      text: "Bachelor of Nursing Science"
    },
    {
      key: "410dd3bb-07ee-11ea-994b-c3f0a01609e0",
      value: "410dd3bb-07ee-11ea-994b-c3f0a01609e0",
      text: "Bachelor of Office Management"
    },
    {
      key: "410dd3bc-07ee-11ea-994c-dbd339eae24a",
      value: "410dd3bc-07ee-11ea-994c-dbd339eae24a",
      text: "Bachelor of Outdoor Recreation"
    },
    {
      key: "410dfaac-07ee-11ea-994d-131bd992c977",
      value: "410dfaac-07ee-11ea-994d-131bd992c977",
      text: "Bachelor of Occupational Thera"
    },
    {
      key: "410dfaad-07ee-11ea-994e-8fc282633f53",
      value: "410dfaad-07ee-11ea-994e-8fc282633f53",
      text: "Bachelor Public Administration"
    },
    {
      key: "410e219e-07ee-11ea-994f-afa73407f44f",
      value: "410e219e-07ee-11ea-994f-afa73407f44f",
      text: "Bachelor Professional Arts"
    },
    {
      key: "410e219f-07ee-11ea-9950-472572199d56",
      value: "410e219f-07ee-11ea-9950-472572199d56",
      text: "Bachelor Physical Activity St."
    },
    {
      key: "410e21a0-07ee-11ea-9951-c7a80071cdd2",
      value: "410e21a0-07ee-11ea-9951-c7a80071cdd2",
      text: "Bachelor Physical Education"
    },
    {
      key: "410e489a-07ee-11ea-9952-4f05a4520c2a",
      value: "410e489a-07ee-11ea-9952-4f05a4520c2a",
      text: "Bachelor of Philosophy"
    },
    {
      key: "410e489b-07ee-11ea-9953-27a9fcfe6795",
      value: "410e489b-07ee-11ea-9953-27a9fcfe6795",
      text: "Bachelor of Pharmacy"
    },
    {
      key: "410e489c-07ee-11ea-9954-af87e58b103a",
      value: "410e489c-07ee-11ea-9954-af87e58b103a",
      text: "Bachelor Physical, Health Educ"
    },
    {
      key: "410e6f8c-07ee-11ea-9955-0fc093a51ed4",
      value: "410e6f8c-07ee-11ea-9955-0fc093a51ed4",
      text: "Bachelor of Public Relations"
    },
    {
      key: "410e6f8d-07ee-11ea-9956-635e897a1f86",
      value: "410e6f8d-07ee-11ea-9956-635e897a1f86",
      text: "Bachelor of Psychology"
    },
    {
      key: "410e967e-07ee-11ea-9957-530f9b3ebbaa",
      value: "410e967e-07ee-11ea-9957-530f9b3ebbaa",
      text: "Bachelor of Physical Therapy"
    },
    {
      key: "410e967f-07ee-11ea-9958-239d86594929",
      value: "410e967f-07ee-11ea-9958-239d86594929",
      text: "Bachelor of Religious Studies"
    },
    {
      key: "410e9680-07ee-11ea-9959-c35d5553e12a",
      value: "410e9680-07ee-11ea-9959-c35d5553e12a",
      text: "Bachelor of Recreation"
    },
    {
      key: "410ebd7a-07ee-11ea-995a-3bd5c7212c96",
      value: "410ebd7a-07ee-11ea-995a-3bd5c7212c96",
      text: "Bachelor Recreation, Leisure"
    },
    {
      key: "410ebd7b-07ee-11ea-995b-2bafee4082de",
      value: "410ebd7b-07ee-11ea-995b-2bafee4082de",
      text: "Bachelor Recreation Management"
    },
    {
      key: "410ebd7c-07ee-11ea-995c-f78160106346",
      value: "410ebd7c-07ee-11ea-995c-f78160106346",
      text: "Bachelor Recreation Studies"
    },
    {
      key: "410ee46c-07ee-11ea-995d-9787160983ea",
      value: "410ee46c-07ee-11ea-995d-9787160983ea",
      text: "Bachelor of Science"
    },
    {
      key: "410ee46d-07ee-11ea-995e-979c3fb0e326",
      value: "410ee46d-07ee-11ea-995e-979c3fb0e326",
      text: "Bachelor Science - Agriculture"
    },
    {
      key: "410f0b5e-07ee-11ea-995f-5782a2e0dad1",
      value: "410f0b5e-07ee-11ea-995f-5782a2e0dad1",
      text: "Bachelor ScienceAdministration"
    },
    {
      key: "410f0b5f-07ee-11ea-9960-77a80e66d960",
      value: "410f0b5f-07ee-11ea-9960-77a80e66d960",
      text: "Bachelor Science - Agric Eng"
    },
    {
      key: "410f0b60-07ee-11ea-9961-2fa3e3bedb50",
      value: "410f0b60-07ee-11ea-9961-2fa3e3bedb50",
      text: "Bachelor Science - Physical Ac"
    },
    {
      key: "410f325a-07ee-11ea-9962-13688c9a3d09",
      value: "410f325a-07ee-11ea-9962-13688c9a3d09",
      text: "Bachelor Science -Architecture"
    },
    {
      key: "410f325b-07ee-11ea-9963-e3aa1d3b4902",
      value: "410f325b-07ee-11ea-9963-e3aa1d3b4902",
      text: "Bachelor Science - Dentistry"
    },
    {
      key: "410f325c-07ee-11ea-9964-af094bc421c2",
      value: "410f325c-07ee-11ea-9964-af094bc421c2",
      text: "Bachelor Science - Engineering"
    },
    {
      key: "410f594c-07ee-11ea-9965-cfc063e1e809",
      value: "410f594c-07ee-11ea-9965-cfc063e1e809",
      text: "Bachelor Science - Environment"
    },
    {
      key: "410f594d-07ee-11ea-9966-5738ef58f81d",
      value: "410f594d-07ee-11ea-9966-5738ef58f81d",
      text: "Bachelor Science - Forest Eng."
    },
    {
      key: "410f803e-07ee-11ea-9967-53e9f82d1e71",
      value: "410f803e-07ee-11ea-9967-53e9f82d1e71",
      text: "Bachelor Science - Food Scienc"
    },
    {
      key: "410f803f-07ee-11ea-9968-c7556f9913f8",
      value: "410f803f-07ee-11ea-9968-c7556f9913f8",
      text: "Bachelor Science - Human Ecolo"
    },
    {
      key: "410f8040-07ee-11ea-9969-afb105422226",
      value: "410f8040-07ee-11ea-9969-afb105422226",
      text: "Bachelor Science - Health Educ"
    },
    {
      key: "410fa73a-07ee-11ea-996a-c731316737a2",
      value: "410fa73a-07ee-11ea-996a-c731316737a2",
      text: "Bachelor Science - Human Nutri"
    },
    {
      key: "410fa73b-07ee-11ea-996b-abf30600515c",
      value: "410fa73b-07ee-11ea-996b-abf30600515c",
      text: "Bachelor Science - Kinesiology"
    },
    {
      key: "410fa73c-07ee-11ea-996c-3b7cc61290dd",
      value: "410fa73c-07ee-11ea-996c-3b7cc61290dd",
      text: "Bachelor Science - Medicine"
    },
    {
      key: "410fce2c-07ee-11ea-996d-9bef1dfe2845",
      value: "410fce2c-07ee-11ea-996d-9bef1dfe2845",
      text: "Bachelor Science - Mental Heal"
    },
    {
      key: "410fce2d-07ee-11ea-996e-ff8098a51f3b",
      value: "410fce2d-07ee-11ea-996e-ff8098a51f3b",
      text: "Bachelor Science - Nursing"
    },
    {
      key: "410ff528-07ee-11ea-996f-6bee167ae026",
      value: "410ff528-07ee-11ea-996f-6bee167ae026",
      text: "Bachelor Science - Nutrition"
    },
    {
      key: "410ff529-07ee-11ea-9970-1b71d0962a68",
      value: "410ff529-07ee-11ea-9970-1b71d0962a68",
      text: "Bachelor Science - Occupation"
    },
    {
      key: "410ff52a-07ee-11ea-9971-fb01ff1529c6",
      value: "410ff52a-07ee-11ea-9971-fb01ff1529c6",
      text: "Bachelor Science - Psychiatric"
    },
    {
      key: "41101c1a-07ee-11ea-9972-075736e65caa",
      value: "41101c1a-07ee-11ea-9972-075736e65caa",
      text: "Bachelor Science-Physical Ther"
    },
    {
      key: "41101c1b-07ee-11ea-9973-634497240288",
      value: "41101c1b-07ee-11ea-9973-634497240288",
      text: "Bachelor Science-Physiotherapy"
    },
    {
      key: "41104320-07ee-11ea-9974-4bcba49ffbd2",
      value: "41104320-07ee-11ea-9974-4bcba49ffbd2",
      text: "Bachelor Science - Radiation"
    },
    {
      key: "41104321-07ee-11ea-9975-87b0ab2d280a",
      value: "41104321-07ee-11ea-9975-87b0ab2d280a",
      text: "Bachelor Science-Computer Scie"
    },
    {
      key: "41104322-07ee-11ea-9976-239dccfed905",
      value: "41104322-07ee-11ea-9976-239dccfed905",
      text: "Bachelor Science - Education"
    },
    {
      key: "41106a08-07ee-11ea-9977-1b9a214d461b",
      value: "41106a08-07ee-11ea-9977-1b9a214d461b",
      text: "Bachelor Sci. Foreign Service"
    },
    {
      key: "41106a09-07ee-11ea-9978-3f294b5ce38c",
      value: "41106a09-07ee-11ea-9978-3f294b5ce38c",
      text: "Bachelor Science - Genetics"
    },
    {
      key: "411090fa-07ee-11ea-9979-a743679f9b08",
      value: "411090fa-07ee-11ea-9979-a743679f9b08",
      text: "Bachelor Science - Home Econom"
    },
    {
      key: "411090fb-07ee-11ea-997a-73bab2682c49",
      value: "411090fb-07ee-11ea-997a-73bab2682c49",
      text: "Bachelor of Science (Honours)"
    },
    {
      key: "411090fc-07ee-11ea-997b-63b057ccc551",
      value: "411090fc-07ee-11ea-997b-63b057ccc551",
      text: "Bachelor of Science - Law"
    },
    {
      key: "4110b7ec-07ee-11ea-997c-cf6b12617eb8",
      value: "4110b7ec-07ee-11ea-997c-cf6b12617eb8",
      text: "Bachelor Science - Languages"
    },
    {
      key: "4110b7ed-07ee-11ea-997d-a764afdd28d2",
      value: "4110b7ed-07ee-11ea-997d-a764afdd28d2",
      text: "Bachelor Science - Management"
    },
    {
      key: "4110b7ee-07ee-11ea-997e-4babd27e8b76",
      value: "4110b7ee-07ee-11ea-997e-4babd27e8b76",
      text: "Bachelor Science - Nutritional"
    },
    {
      key: "4110dede-07ee-11ea-997f-73034fac77b9",
      value: "4110dede-07ee-11ea-997f-73034fac77b9",
      text: "Bachelor of Specialization"
    },
    {
      key: "4110dedf-07ee-11ea-9980-13dc8463f2a4",
      value: "4110dedf-07ee-11ea-9980-13dc8463f2a4",
      text: "Bachelor of Special Education"
    },
    {
      key: "411105da-07ee-11ea-9981-7f8c822d5407",
      value: "411105da-07ee-11ea-9981-7f8c822d5407",
      text: "Bachelor Science - Pharmacy"
    },
    {
      key: "411105db-07ee-11ea-9982-b78017fe0e43",
      value: "411105db-07ee-11ea-9982-b78017fe0e43",
      text: "Bachelor of Social Sciences"
    },
    {
      key: "411105dc-07ee-11ea-9983-47deaaea54be",
      value: "411105dc-07ee-11ea-9983-47deaaea54be",
      text: "Bachelor of Social Service"
    },
    {
      key: "41112ccc-07ee-11ea-9984-d378722ca2bf",
      value: "41112ccc-07ee-11ea-9984-d378722ca2bf",
      text: "Bachelor Science - Technology"
    },
    {
      key: "41112ccd-07ee-11ea-9985-177a176267b6",
      value: "41112ccd-07ee-11ea-9985-177a176267b6",
      text: "Bachelor of Social Work"
    },
    {
      key: "41112cce-07ee-11ea-9986-972a33a28377",
      value: "41112cce-07ee-11ea-9986-972a33a28377",
      text: "Bachelor of Theology"
    },
    {
      key: "411153d2-07ee-11ea-9987-a7cb50552c09",
      value: "411153d2-07ee-11ea-9987-a7cb50552c09",
      text: "Bachelor of Teaching"
    },
    {
      key: "411153d3-07ee-11ea-9988-d755cdcfec4e",
      value: "411153d3-07ee-11ea-9988-d755cdcfec4e",
      text: "Bachelor Tourism,  Hospitality"
    },
    {
      key: "41117aba-07ee-11ea-9989-6be5da569a71",
      value: "41117aba-07ee-11ea-9989-6be5da569a71",
      text: "Bachelor Technology Informatio"
    },
    {
      key: "41117abb-07ee-11ea-998a-0ba2a80cae58",
      value: "41117abb-07ee-11ea-998a-0ba2a80cae58",
      text: "Bachelor Technology Management"
    },
    {
      key: "41117abc-07ee-11ea-998b-e31213a0bee9",
      value: "41117abc-07ee-11ea-998b-e31213a0bee9",
      text: "Bachelor of Translation"
    },
    {
      key: "4111a1ac-07ee-11ea-998c-f329274437e2",
      value: "4111a1ac-07ee-11ea-998c-f329274437e2",
      text: "Bachelor of Technology"
    },
    {
      key: "4111a1ad-07ee-11ea-998d-63c238a415f6",
      value: "4111a1ad-07ee-11ea-998d-63c238a415f6",
      text: "Bachelor Veterinary Medicine"
    },
    {
      key: "4111a1ae-07ee-11ea-998e-cbd1489c9d97",
      value: "4111a1ae-07ee-11ea-998e-cbd1489c9d97",
      text: "Bachelor Vocational Education"
    },
    {
      key: "4111c8a8-07ee-11ea-998f-5fae5ecd35d3",
      value: "4111c8a8-07ee-11ea-998f-5fae5ecd35d3",
      text: "Chartered Accountant"
    },
    {
      key: "4111c8a9-07ee-11ea-9990-676310f61d56",
      value: "4111c8a9-07ee-11ea-9990-676310f61d56",
      text: "College Education Certificate"
    },
    {
      key: "4111ef9a-07ee-11ea-9991-bf1edde8dc1c",
      value: "4111ef9a-07ee-11ea-9991-bf1edde8dc1c",
      text: "Undergraduate Certificate"
    },
    {
      key: "4111ef9b-07ee-11ea-9992-b30c1d5eac82",
      value: "4111ef9b-07ee-11ea-9992-b30c1d5eac82",
      text: "Certif in Political Studies"
    },
    {
      key: "4111ef9c-07ee-11ea-9993-4f3de7354ad0",
      value: "4111ef9c-07ee-11ea-9993-4f3de7354ad0",
      text: "Certificate"
    },
    {
      key: "4112168c-07ee-11ea-9994-5fc1f71ef688",
      value: "4112168c-07ee-11ea-9994-5fc1f71ef688",
      text: "Certificat Program"
    },
    {
      key: "4112168d-07ee-11ea-9995-57a92533c934",
      value: "4112168d-07ee-11ea-9995-57a92533c934",
      text: "Certified General Accountant"
    },
    {
      key: "41123d7e-07ee-11ea-9996-d78a5b4b3fa1",
      value: "41123d7e-07ee-11ea-9996-d78a5b4b3fa1",
      text: "4-Yr College Applied Degree"
    },
    {
      key: "41123d7f-07ee-11ea-9997-c323060c0044",
      value: "41123d7f-07ee-11ea-9997-c323060c0044",
      text: "Certif Management Accountant"
    },
    {
      key: "41123d80-07ee-11ea-9998-47cc6f59bf3b",
      value: "41123d80-07ee-11ea-9998-47cc6f59bf3b",
      text: "Diploma in Admin. Assistant"
    },
    {
      key: "4112647a-07ee-11ea-9999-6b13db225512",
      value: "4112647a-07ee-11ea-9999-6b13db225512",
      text: "Doctor of Administration"
    },
    {
      key: "4112647b-07ee-11ea-999a-17a68a8ad021",
      value: "4112647b-07ee-11ea-999a-17a68a8ad021",
      text: "Doctor of Architecture"
    },
    {
      key: "4112647c-07ee-11ea-999b-f3c711a85f03",
      value: "4112647c-07ee-11ea-999b-f3c711a85f03",
      text: "Doctor of Business Admin"
    },
    {
      key: "41128b6c-07ee-11ea-999c-036c93114bbe",
      value: "41128b6c-07ee-11ea-999c-036c93114bbe",
      text: "Diploma in Business"
    },
    {
      key: "41128b6d-07ee-11ea-999d-73ded4c1a7ff",
      value: "41128b6d-07ee-11ea-999d-73ded4c1a7ff",
      text: "Doctor in Chiropractic"
    },
    {
      key: "41128b6e-07ee-11ea-999e-8bd04f2208ce",
      value: "41128b6e-07ee-11ea-999e-8bd04f2208ce",
      text: "Doctor in Civil Law"
    },
    {
      key: "4112b268-07ee-11ea-999f-3fcade93603c",
      value: "4112b268-07ee-11ea-999f-3fcade93603c",
      text: "Doctor in Canon Law"
    },
    {
      key: "4112b269-07ee-11ea-99a0-6f8553be2e76",
      value: "4112b269-07ee-11ea-99a0-6f8553be2e76",
      text: "Diploma Notary Science"
    },
    {
      key: "4112d95a-07ee-11ea-99a1-f7ad458de5c3",
      value: "4112d95a-07ee-11ea-99a1-f7ad458de5c3",
      text: "Doctor in Dental Surgery"
    },
    {
      key: "4112d95b-07ee-11ea-99a2-4f85df321488",
      value: "4112d95b-07ee-11ea-99a2-4f85df321488",
      text: "Diploma in Advanced Studies"
    },
    {
      key: "4112d95c-07ee-11ea-99a3-7f03587a01e3",
      value: "4112d95c-07ee-11ea-99a3-7f03587a01e3",
      text: "College Education Diploma"
    },
    {
      key: "4113004c-07ee-11ea-99a4-57ca333c8ab9",
      value: "4113004c-07ee-11ea-99a4-57ca333c8ab9",
      text: "Diploma in Engineering"
    },
    {
      key: "4113004d-07ee-11ea-99a5-2319cf3a8d77",
      value: "4113004d-07ee-11ea-99a5-2319cf3a8d77",
      text: "Diploma in Social Studies"
    },
    {
      key: "4113004e-07ee-11ea-99a6-b70a312b9463",
      value: "4113004e-07ee-11ea-99a6-b70a312b9463",
      text: "Doctor of Health Science"
    },
    {
      key: "4113273e-07ee-11ea-99a7-03cf778b7f8d",
      value: "4113273e-07ee-11ea-99a7-03cf778b7f8d",
      text: "Diploma"
    },
    {
      key: "4113273f-07ee-11ea-99a8-e30ce5beda24",
      value: "4113273f-07ee-11ea-99a8-e30ce5beda24",
      text: "Diploma in Business Admin"
    },
    {
      key: "41134e3a-07ee-11ea-99a9-5b11b76ce280",
      value: "41134e3a-07ee-11ea-99a9-5b11b76ce280",
      text: "Diploma of Comp. Eng. Tech."
    },
    {
      key: "41134e3b-07ee-11ea-99aa-e35191c2ce60",
      value: "41134e3b-07ee-11ea-99aa-e35191c2ce60",
      text: "Graduate Diploma"
    },
    {
      key: "41134e3c-07ee-11ea-99ab-072c6d5a780a",
      value: "41134e3c-07ee-11ea-99ab-072c6d5a780a",
      text: "Undergraduate Diploma"
    },
    {
      key: "4113752c-07ee-11ea-99ac-c3ca8f0ef448",
      value: "4113752c-07ee-11ea-99ac-c3ca8f0ef448",
      text: "Doctor of Jurisprudence"
    },
    {
      key: "4113752d-07ee-11ea-99ad-0b7ed1d4d4af",
      value: "4113752d-07ee-11ea-99ad-0b7ed1d4d4af",
      text: "Doctor of Dental Medicine"
    },
    {
      key: "4113752e-07ee-11ea-99ae-efb63e0b0d4c",
      value: "4113752e-07ee-11ea-99ae-efb63e0b0d4c",
      text: "Doctor of Ministry"
    },
    {
      key: "41139c1e-07ee-11ea-99af-071073384d07",
      value: "41139c1e-07ee-11ea-99af-071073384d07",
      text: "Doctor of Musical Arts"
    },
    {
      key: "41139c1f-07ee-11ea-99b0-f76032f14306",
      value: "41139c1f-07ee-11ea-99b0-f76032f14306",
      text: "Doctor of Music"
    },
    {
      key: "4113c31a-07ee-11ea-99b1-3b5a3ba5e0c8",
      value: "4113c31a-07ee-11ea-99b1-3b5a3ba5e0c8",
      text: "Doctor of Arts"
    },
    {
      key: "4113c31b-07ee-11ea-99b2-77081b45e199",
      value: "4113c31b-07ee-11ea-99b2-77081b45e199",
      text: "Diploma in Public Admin"
    },
    {
      key: "4113c31c-07ee-11ea-99b3-673aa8194488",
      value: "4113c31c-07ee-11ea-99b3-673aa8194488",
      text: "Doctor of Psychology"
    },
    {
      key: "4113ea0c-07ee-11ea-99b4-772e109d41a6",
      value: "4113ea0c-07ee-11ea-99b4-772e109d41a6",
      text: "Doctor of Social Science"
    },
    {
      key: "4113ea0d-07ee-11ea-99b5-e7f3981bae56",
      value: "4113ea0d-07ee-11ea-99b5-e7f3981bae56",
      text: "Doctor of Social Work"
    },
    {
      key: "4113ea0e-07ee-11ea-99b6-a3d4facdca4f",
      value: "4113ea0e-07ee-11ea-99b6-a3d4facdca4f",
      text: "Doctor of Theology"
    },
    {
      key: "411410fe-07ee-11ea-99b7-e77b33293896",
      value: "411410fe-07ee-11ea-99b7-e77b33293896",
      text: "Doctor of Veterinary Medicine"
    },
    {
      key: "411410ff-07ee-11ea-99b8-7b092aafbb6e",
      value: "411410ff-07ee-11ea-99b8-7b092aafbb6e",
      text: "Doctor of Veterinary Science"
    },
    {
      key: "411437fa-07ee-11ea-99b9-7be113ff0729",
      value: "411437fa-07ee-11ea-99b9-7be113ff0729",
      text: "Doctor of Education"
    },
    {
      key: "411437fb-07ee-11ea-99ba-7fc30f52f11f",
      value: "411437fb-07ee-11ea-99ba-7fc30f52f11f",
      text: "Exec Master of Business Admin"
    },
    {
      key: "411437fc-07ee-11ea-99bb-b35ab9174d81",
      value: "411437fc-07ee-11ea-99bb-b35ab9174d81",
      text: "Foreign Studies/Education"
    },
    {
      key: "41145eec-07ee-11ea-99bc-f735c5bb4465",
      value: "41145eec-07ee-11ea-99bc-f735c5bb4465",
      text: "High School Graduate"
    },
    {
      key: "41145eed-07ee-11ea-99bd-3f79a2bbeef1",
      value: "41145eed-07ee-11ea-99bd-3f79a2bbeef1",
      text: "High School One Year"
    },
    {
      key: "41145eee-07ee-11ea-99be-f3a279e7e0b1",
      value: "41145eee-07ee-11ea-99be-f3a279e7e0b1",
      text: "High School Two Years"
    },
    {
      key: "411485de-07ee-11ea-99bf-a7931ec1aa7f",
      value: "411485de-07ee-11ea-99bf-a7931ec1aa7f",
      text: "High School Three Years"
    },
    {
      key: "411485df-07ee-11ea-99c0-7b163afe72b8",
      value: "411485df-07ee-11ea-99c0-7b163afe72b8",
      text: "High School Four Years"
    },
    {
      key: "411485e0-07ee-11ea-99c1-4bcb721deecc",
      value: "411485e0-07ee-11ea-99c1-4bcb721deecc",
      text: "High School Five Years"
    },
    {
      key: "4114acda-07ee-11ea-99c2-c7c769d4a798",
      value: "4114acda-07ee-11ea-99c2-c7c769d4a798",
      text: "Internat. Master Business Admi"
    },
    {
      key: "4114acdb-07ee-11ea-99c3-4732981b78c0",
      value: "4114acdb-07ee-11ea-99c3-4732981b78c0",
      text: "Juris Doctor"
    },
    {
      key: "4114d3cc-07ee-11ea-99c4-8723db8a8102",
      value: "4114d3cc-07ee-11ea-99c4-8723db8a8102",
      text: "Doctor in the Science of Law"
    },
    {
      key: "4114d3cd-07ee-11ea-99c5-9b30a0057603",
      value: "4114d3cd-07ee-11ea-99c5-9b30a0057603",
      text: "Licentiate in Canon Law"
    },
    {
      key: "4114d3ce-07ee-11ea-99c6-d3f3505c9562",
      value: "4114d3ce-07ee-11ea-99c6-d3f3505c9562",
      text: "Licencié ès lettres"
    },
    {
      key: "4114fabe-07ee-11ea-99c7-f73042761658",
      value: "4114fabe-07ee-11ea-99c7-f73042761658",
      text: "Licentiate"
    },
    {
      key: "4114fabf-07ee-11ea-99c8-a76fbefd5e5c",
      value: "4114fabf-07ee-11ea-99c8-a76fbefd5e5c",
      text: "Bachelor of Laws LL.B."
    },
    {
      key: "4114fac0-07ee-11ea-99c9-4f84103d11b9",
      value: "4114fac0-07ee-11ea-99c9-4f84103d11b9",
      text: "Doctor of Laws"
    },
    {
      key: "411521ba-07ee-11ea-99ca-bb9fbbd43727",
      value: "411521ba-07ee-11ea-99ca-bb9fbbd43727",
      text: "Licentiate of Laws"
    },
    {
      key: "411521bb-07ee-11ea-99cb-7f2669f29c94",
      value: "411521bb-07ee-11ea-99cb-7f2669f29c94",
      text: "Master of Laws"
    },
    {
      key: "411548ac-07ee-11ea-99cc-1b4022635c5a",
      value: "411548ac-07ee-11ea-99cc-1b4022635c5a",
      text: "Licentiate in Music"
    },
    {
      key: "411548ad-07ee-11ea-99cd-7707ed977aa2",
      value: "411548ad-07ee-11ea-99cd-7707ed977aa2",
      text: "Licentiate in Philosophy"
    },
    {
      key: "411548ae-07ee-11ea-99ce-df25d259b40a",
      value: "411548ae-07ee-11ea-99ce-df25d259b40a",
      text: "Licentiate in Theology"
    },
    {
      key: "41156f9e-07ee-11ea-99cf-236666f2ef79",
      value: "41156f9e-07ee-11ea-99cf-236666f2ef79",
      text: "Master of Art Conservation"
    },
    {
      key: "41156f9f-07ee-11ea-99d0-bbd0cf0274f3",
      value: "41156f9f-07ee-11ea-99d0-bbd0cf0274f3",
      text: "Master of Accounting"
    },
    {
      key: "41156fa0-07ee-11ea-99d1-732e26ffe4d1",
      value: "41156fa0-07ee-11ea-99d1-732e26ffe4d1",
      text: "Master of Arts - Canon Law"
    },
    {
      key: "41159690-07ee-11ea-99d2-23e8988bb5b5",
      value: "41159690-07ee-11ea-99d2-23e8988bb5b5",
      text: "Master of Arts"
    },
    {
      key: "41159691-07ee-11ea-99d3-1bc771c715c2",
      value: "41159691-07ee-11ea-99d3-1bc771c715c2",
      text: "Master of Adult Education"
    },
    {
      key: "4115bd8c-07ee-11ea-99d4-e37d30164b2d",
      value: "4115bd8c-07ee-11ea-99d4-e37d30164b2d",
      text: "Master of Administration"
    },
    {
      key: "4115bd8d-07ee-11ea-99d5-af7969489745",
      value: "4115bd8d-07ee-11ea-99d5-af7969489745",
      text: "Master of Arts - Education"
    },
    {
      key: "4115bd8e-07ee-11ea-99d6-878e5218f851",
      value: "4115bd8e-07ee-11ea-99d6-878e5218f851",
      text: "Master Applied Environmental"
    },
    {
      key: "4115e47e-07ee-11ea-99d7-870d8750956a",
      value: "4115e47e-07ee-11ea-99d7-870d8750956a",
      text: "Master of Agriculture"
    },
    {
      key: "4115e47f-07ee-11ea-99d8-8726829412e6",
      value: "4115e47f-07ee-11ea-99d8-8726829412e6",
      text: "Master of Arts - Human Ecology"
    },
    {
      key: "4115e480-07ee-11ea-99d9-a3c0a43e8231",
      value: "4115e480-07ee-11ea-99d9-a3c0a43e8231",
      text: "Master of Arts in Leadership"
    },
    {
      key: "41160b7a-07ee-11ea-99da-a3e0a8f4fa15",
      value: "41160b7a-07ee-11ea-99da-a3e0a8f4fa15",
      text: "Master Arts - Liberal Studies"
    },
    {
      key: "41160b7b-07ee-11ea-99db-23244eccd6c5",
      value: "41160b7b-07ee-11ea-99db-23244eccd6c5",
      text: "Master of Arts - Missiology"
    },
    {
      key: "41160b7c-07ee-11ea-99dc-639c533dc4ce",
      value: "41160b7c-07ee-11ea-99dc-639c533dc4ce",
      text: "Master Arts - Pastoral Studies"
    },
    {
      key: "4116326c-07ee-11ea-99dd-1b6e951a57ca",
      value: "4116326c-07ee-11ea-99dd-1b6e951a57ca",
      text: "Master of Arts - Political Sc."
    },
    {
      key: "4116326d-07ee-11ea-99de-3b2a9c13966f",
      value: "4116326d-07ee-11ea-99de-3b2a9c13966f",
      text: "Master of Arts - Psychology"
    },
    {
      key: "4116595e-07ee-11ea-99df-674a51780b63",
      value: "4116595e-07ee-11ea-99df-674a51780b63",
      text: "Master of Architecture"
    },
    {
      key: "4116595f-07ee-11ea-99e0-9304083c71d3",
      value: "4116595f-07ee-11ea-99e0-9304083c71d3",
      text: "Master of Admin Science"
    },
    {
      key: "41165960-07ee-11ea-99e1-3b84bf0da2a1",
      value: "41165960-07ee-11ea-99e1-3b84bf0da2a1",
      text: "Master Advance Studies Archite"
    },
    {
      key: "41168050-07ee-11ea-99e2-776ccdd0e3af",
      value: "41168050-07ee-11ea-99e2-776ccdd0e3af",
      text: "Master of Applied Science"
    },
    {
      key: "41168051-07ee-11ea-99e3-3f760e56d535",
      value: "41168051-07ee-11ea-99e3-3f760e56d535",
      text: "Master Arts - Pastoral Science"
    },
    {
      key: "41168052-07ee-11ea-99e4-1ba2a41daa16",
      value: "41168052-07ee-11ea-99e4-1ba2a41daa16",
      text: "Master of Applied Statistics"
    },
    {
      key: "4116a74c-07ee-11ea-99e5-6f7dd7d6d2eb",
      value: "4116a74c-07ee-11ea-99e5-6f7dd7d6d2eb",
      text: "Master Advanced Lan Architect"
    },
    {
      key: "4116a74d-07ee-11ea-99e6-cb0396c8b01b",
      value: "4116a74d-07ee-11ea-99e6-cb0396c8b01b",
      text: "Master Arts-School Psychology"
    },
    {
      key: "4116ce3e-07ee-11ea-99e7-8331913dce57",
      value: "4116ce3e-07ee-11ea-99e7-8331913dce57",
      text: "Master of Archival Studies"
    },
    {
      key: "4116ce3f-07ee-11ea-99e8-6f63fd3420ac",
      value: "4116ce3f-07ee-11ea-99e8-6f63fd3420ac",
      text: "Master of Arts - Teaching"
    },
    {
      key: "4116ce40-07ee-11ea-99e9-47a96308b125",
      value: "4116ce40-07ee-11ea-99e9-47a96308b125",
      text: "Master land use pl./develop."
    },
    {
      key: "4116f530-07ee-11ea-99ea-7f1da0decc76",
      value: "4116f530-07ee-11ea-99ea-7f1da0decc76",
      text: "Master of Arts - Theology"
    },
    {
      key: "4116f531-07ee-11ea-99eb-d323a1fe95f3",
      value: "4116f531-07ee-11ea-99eb-d323a1fe95f3",
      text: "Master of Arts War Studies"
    },
    {
      key: "41171c2c-07ee-11ea-99ec-935e886ec289",
      value: "41171c2c-07ee-11ea-99ec-935e886ec289",
      text: "Master of Business Admin"
    },
    {
      key: "41171c2d-07ee-11ea-99ed-dbdfa022354e",
      value: "41171c2d-07ee-11ea-99ed-dbdfa022354e",
      text: "Master Library & Info Science"
    },
    {
      key: "41171c2e-07ee-11ea-99ee-0f35cbbf36c6",
      value: "41171c2e-07ee-11ea-99ee-0f35cbbf36c6",
      text: "Master Criminology (Applied)"
    },
    {
      key: "4117431e-07ee-11ea-99ef-6fed5fd3c68f",
      value: "4117431e-07ee-11ea-99ef-6fed5fd3c68f",
      text: "Master of Civil Engineering"
    },
    {
      key: "4117431f-07ee-11ea-99f0-53084ce47077",
      value: "4117431f-07ee-11ea-99f0-53084ce47077",
      text: "Master Continuing Education"
    },
    {
      key: "41174320-07ee-11ea-99f1-1378cf1b9c16",
      value: "41174320-07ee-11ea-99f1-1378cf1b9c16",
      text: "Master of Counselling"
    },
    {
      key: "41176a10-07ee-11ea-99f2-2bcc86026d78",
      value: "41176a10-07ee-11ea-99f2-2bcc86026d78",
      text: "Master of Clinical Dentistry"
    },
    {
      key: "bbd95b12-ffe4-11e9-8d71-362b9e155667",
      value: "bbd95b12-ffe4-11e9-8d71-362b9e155667",
      text: "TestDiplomaNameEn1"
    },
    {
      key: "06688220-ffe5-11e9-8d71-362b9e155667",
      value: "06688220-ffe5-11e9-8d71-362b9e155667",
      text: "TestDiplomaNameEn2"
    }
  ],
  groupOrLevel: [
    {
      key: "40f8ac88-07ee-11ea-9822-cf63eaaeae5c",
      value: "40f8ac88-07ee-11ea-9822-cf63eaaeae5c",
      text: "AS 01"
    },
    {
      key: "40f8d384-07ee-11ea-9823-3b98845ed1bc",
      value: "40f8d384-07ee-11ea-9823-3b98845ed1bc",
      text: "AS 02"
    },
    {
      key: "40f8d385-07ee-11ea-9824-27465ac30133",
      value: "40f8d385-07ee-11ea-9824-27465ac30133",
      text: "AS 03"
    },
    {
      key: "40f8fb66-07ee-11ea-9825-ff3aee9acdb8",
      value: "40f8fb66-07ee-11ea-9825-ff3aee9acdb8",
      text: "AS 04"
    },
    {
      key: "40f8fb67-07ee-11ea-9826-5f722edaea54",
      value: "40f8fb67-07ee-11ea-9826-5f722edaea54",
      text: "AS 05"
    },
    {
      key: "40f92258-07ee-11ea-9827-abc0a86369a1",
      value: "40f92258-07ee-11ea-9827-abc0a86369a1",
      text: "AS 06"
    },
    {
      key: "40f92259-07ee-11ea-9828-6facf5155942",
      value: "40f92259-07ee-11ea-9828-6facf5155942",
      text: "AS 07"
    },
    {
      key: "40f9225a-07ee-11ea-9829-97bb942df31c",
      value: "40f9225a-07ee-11ea-9829-97bb942df31c",
      text: "AS 07"
    },
    {
      key: "40f94954-07ee-11ea-982a-6fd2097867c7",
      value: "40f94954-07ee-11ea-982a-6fd2097867c7",
      text: "AU 04"
    },
    {
      key: "40f94955-07ee-11ea-982b-83a25aa27927",
      value: "40f94955-07ee-11ea-982b-83a25aa27927",
      text: "CA 01"
    },
    {
      key: "40f94956-07ee-11ea-982c-bbf3bd277c91",
      value: "40f94956-07ee-11ea-982c-bbf3bd277c91",
      text: "CA 02"
    },
    {
      key: "40f97096-07ee-11ea-982d-ff4d2c4395b2",
      value: "40f97096-07ee-11ea-982d-ff4d2c4395b2",
      text: "CA 02"
    },
    {
      key: "40f97097-07ee-11ea-982e-5f3bec5c4c3b",
      value: "40f97097-07ee-11ea-982e-5f3bec5c4c3b",
      text: "CM 04"
    },
    {
      key: "40f997b0-07ee-11ea-982f-e3fade54a5b9",
      value: "40f997b0-07ee-11ea-982f-e3fade54a5b9",
      text: "CM 05"
    },
    {
      key: "40f997b1-07ee-11ea-9830-031331b96521",
      value: "40f997b1-07ee-11ea-9830-031331b96521",
      text: "CO 02"
    },
    {
      key: "40f997b2-07ee-11ea-9831-87efb419fdd6",
      value: "40f997b2-07ee-11ea-9831-87efb419fdd6",
      text: "CO 03"
    },
    {
      key: "40f9be8e-07ee-11ea-9832-ff76da42371c",
      value: "40f9be8e-07ee-11ea-9832-ff76da42371c",
      text: "CO 03"
    },
    {
      key: "40f9be8f-07ee-11ea-9833-fba48d23e49c",
      value: "40f9be8f-07ee-11ea-9833-fba48d23e49c",
      text: "CO 04"
    },
    {
      key: "40f9be90-07ee-11ea-9834-6342dea76a1c",
      value: "40f9be90-07ee-11ea-9834-6342dea76a1c",
      text: "CR 02"
    },
    {
      key: "40f9e56c-07ee-11ea-9835-d3557c498cd0",
      value: "40f9e56c-07ee-11ea-9835-d3557c498cd0",
      text: "CR 03"
    },
    {
      key: "40f9e56d-07ee-11ea-9836-f723b4553660",
      value: "40f9e56d-07ee-11ea-9836-f723b4553660",
      text: "CR 04"
    },
    {
      key: "40fa0c5e-07ee-11ea-9837-4b7cf6dbda87",
      value: "40fa0c5e-07ee-11ea-9837-4b7cf6dbda87",
      text: "CR 05"
    },
    {
      key: "40fa0c5f-07ee-11ea-9838-872d5f878613",
      value: "40fa0c5f-07ee-11ea-9838-872d5f878613",
      text: "CS 02"
    },
    {
      key: "40fa0c60-07ee-11ea-9839-238ef981be03",
      value: "40fa0c60-07ee-11ea-9839-238ef981be03",
      text: "CS 03"
    },
    {
      key: "40fa335a-07ee-11ea-983a-bf059f421a5a",
      value: "40fa335a-07ee-11ea-983a-bf059f421a5a",
      text: "CS 04"
    },
    {
      key: "40fa335b-07ee-11ea-983b-5f7d5014d4b1",
      value: "40fa335b-07ee-11ea-983b-5f7d5014d4b1",
      text: "CS 04"
    },
    {
      key: "40fa335c-07ee-11ea-983c-8f49e7e75f76",
      value: "40fa335c-07ee-11ea-983c-8f49e7e75f76",
      text: "CS 05"
    },
    {
      key: "40fa5a4c-07ee-11ea-983d-df0a694d9522",
      value: "40fa5a4c-07ee-11ea-983d-df0a694d9522",
      text: "EC 01"
    },
    {
      key: "40fa5a4d-07ee-11ea-983e-33013aad4399",
      value: "40fa5a4d-07ee-11ea-983e-33013aad4399",
      text: "EC 02"
    },
    {
      key: "40fa815c-07ee-11ea-983f-1b0605ac4d46",
      value: "40fa815c-07ee-11ea-983f-1b0605ac4d46",
      text: "EC 03"
    },
    {
      key: "40fa815d-07ee-11ea-9840-f39b7dd70eb1",
      value: "40fa815d-07ee-11ea-9840-f39b7dd70eb1",
      text: "EC 04"
    },
    {
      key: "40fa815e-07ee-11ea-9841-0f7daacedf1a",
      value: "40fa815e-07ee-11ea-9841-0f7daacedf1a",
      text: "EC 05"
    },
    {
      key: "40faa83a-07ee-11ea-9842-7bbc9f3f621e",
      value: "40faa83a-07ee-11ea-9842-7bbc9f3f621e",
      text: "EC 06"
    },
    {
      key: "40faa83b-07ee-11ea-9843-5fc007333a0e",
      value: "40faa83b-07ee-11ea-9843-5fc007333a0e",
      text: "EC 08"
    },
    {
      key: "40faa83c-07ee-11ea-9844-a7a3df80e161",
      value: "40faa83c-07ee-11ea-9844-a7a3df80e161",
      text: "EC 07"
    },
    {
      key: "40facf2c-07ee-11ea-9845-0328104cfc32",
      value: "40facf2c-07ee-11ea-9845-0328104cfc32",
      text: "EC 07"
    },
    {
      key: "40facf2d-07ee-11ea-9846-33faf63e3ffa",
      value: "40facf2d-07ee-11ea-9846-33faf63e3ffa",
      text: "EDEDS02"
    },
    {
      key: "40faf4fc-07ee-11ea-9847-eb35b9492542",
      value: "40faf4fc-07ee-11ea-9847-eb35b9492542",
      text: "EG 02"
    },
    {
      key: "40faf4fd-07ee-11ea-9848-5f21ce632dbc",
      value: "40faf4fd-07ee-11ea-9848-5f21ce632dbc",
      text: "EG 03"
    },
    {
      key: "40faf4fe-07ee-11ea-9849-7bdb34d76155",
      value: "40faf4fe-07ee-11ea-9849-7bdb34d76155",
      text: "EG 04"
    },
    {
      key: "40fb1d1a-07ee-11ea-984a-4b7395b9f98a",
      value: "40fb1d1a-07ee-11ea-984a-4b7395b9f98a",
      text: "EG 05"
    },
    {
      key: "40fb1d1b-07ee-11ea-984b-cfc05fec2359",
      value: "40fb1d1b-07ee-11ea-984b-cfc05fec2359",
      text: "EG 06"
    },
    {
      key: "40fb4416-07ee-11ea-984c-2f2fcf2c6439",
      value: "40fb4416-07ee-11ea-984c-2f2fcf2c6439",
      text: "EG 07"
    },
    {
      key: "40fb4417-07ee-11ea-984d-db2d382d3758",
      value: "40fb4417-07ee-11ea-984d-db2d382d3758",
      text: "EL 01"
    },
    {
      key: "40fb4418-07ee-11ea-984e-bbc5798c70a5",
      value: "40fb4418-07ee-11ea-984e-bbc5798c70a5",
      text: "EL 02"
    },
    {
      key: "40fb6b08-07ee-11ea-984f-3fb6b7d2cfa9",
      value: "40fb6b08-07ee-11ea-984f-3fb6b7d2cfa9",
      text: "EL 03"
    },
    {
      key: "40fb6b09-07ee-11ea-9850-db46bcd48270",
      value: "40fb6b09-07ee-11ea-9850-db46bcd48270",
      text: "EL 04"
    },
    {
      key: "40fb6b0a-07ee-11ea-9851-b3ad528369ad",
      value: "40fb6b0a-07ee-11ea-9851-b3ad528369ad",
      text: "EL 05"
    },
    {
      key: "40fb920e-07ee-11ea-9852-5f8c6d0ecbec",
      value: "40fb920e-07ee-11ea-9852-5f8c6d0ecbec",
      text: "EL 06"
    },
    {
      key: "40fb920f-07ee-11ea-9853-33f8b92fc778",
      value: "40fb920f-07ee-11ea-9853-33f8b92fc778",
      text: "EL 07"
    },
    {
      key: "40fbb90a-07ee-11ea-9854-d791cdba79c9",
      value: "40fbb90a-07ee-11ea-9854-d791cdba79c9",
      text: "EL 08"
    },
    {
      key: "40fbb90b-07ee-11ea-9855-83c3f502ae7e",
      value: "40fbb90b-07ee-11ea-9855-83c3f502ae7e",
      text: "ENENG02"
    },
    {
      key: "40fbb90c-07ee-11ea-9856-6fae51121fb0",
      value: "40fbb90c-07ee-11ea-9856-6fae51121fb0",
      text: "ENENG03"
    },
    {
      key: "40fbdfe8-07ee-11ea-9857-5fc210fa05a1",
      value: "40fbdfe8-07ee-11ea-9857-5fc210fa05a1",
      text: "ENENG04"
    },
    {
      key: "40fbdfe9-07ee-11ea-9858-771f288ba4b9",
      value: "40fbdfe9-07ee-11ea-9858-771f288ba4b9",
      text: "ENENG05"
    },
    {
      key: "40fc06da-07ee-11ea-9859-5ff863cc249b",
      value: "40fc06da-07ee-11ea-9859-5ff863cc249b",
      text: "ENENG05"
    },
    {
      key: "40fc06db-07ee-11ea-985a-c39abfd4b498",
      value: "40fc06db-07ee-11ea-985a-c39abfd4b498",
      text: "ENENG06"
    },
    {
      key: "40fc06dc-07ee-11ea-985b-6f7f7ce265a0",
      value: "40fc06dc-07ee-11ea-985b-6f7f7ce265a0",
      text: "EX 01"
    },
    {
      key: "40fc2de0-07ee-11ea-985c-6ba25e69c1fb",
      value: "40fc2de0-07ee-11ea-985c-6ba25e69c1fb",
      text: "EX 02"
    },
    {
      key: "40fc2de1-07ee-11ea-985d-2fef6a7c853b",
      value: "40fc2de1-07ee-11ea-985d-2fef6a7c853b",
      text: "EX 03"
    },
    {
      key: "40fc2de2-07ee-11ea-985e-bf2d6e963fc7",
      value: "40fc2de2-07ee-11ea-985e-bf2d6e963fc7",
      text: "EX 04"
    },
    {
      key: "40fc54be-07ee-11ea-985f-375c20d67819",
      value: "40fc54be-07ee-11ea-985f-375c20d67819",
      text: "EX 05"
    },
    {
      key: "40fc54bf-07ee-11ea-9860-8b3fdf408ea3",
      value: "40fc54bf-07ee-11ea-9860-8b3fdf408ea3",
      text: "FI 01"
    },
    {
      key: "40fc7bba-07ee-11ea-9861-fbdac5da95c2",
      value: "40fc7bba-07ee-11ea-9861-fbdac5da95c2",
      text: "FI 02"
    },
    {
      key: "40fc7bbb-07ee-11ea-9862-6b364bb510f7",
      value: "40fc7bbb-07ee-11ea-9862-6b364bb510f7",
      text: "FI 03"
    },
    {
      key: "40fc7bbc-07ee-11ea-9863-1727de4a6d4c",
      value: "40fc7bbc-07ee-11ea-9863-1727de4a6d4c",
      text: "FI 04"
    },
    {
      key: "40fca2ac-07ee-11ea-9864-4b0ff9f4018d",
      value: "40fca2ac-07ee-11ea-9864-4b0ff9f4018d",
      text: "FI 04"
    },
    {
      key: "40fca2ad-07ee-11ea-9865-373a6ec8e287",
      value: "40fca2ad-07ee-11ea-9865-373a6ec8e287",
      text: "GLCOI12"
    },
    {
      key: "40fca2ae-07ee-11ea-9866-3f54637196cc",
      value: "40fca2ae-07ee-11ea-9866-3f54637196cc",
      text: "GLEIM10"
    },
    {
      key: "40fcc89a-07ee-11ea-9867-1b1c670808ee",
      value: "40fcc89a-07ee-11ea-9867-1b1c670808ee",
      text: "GLEIM12"
    },
    {
      key: "40fcc89b-07ee-11ea-9868-d33a12182f21",
      value: "40fcc89b-07ee-11ea-9868-d33a12182f21",
      text: "GLMAM10"
    },
    {
      key: "40fcf0b8-07ee-11ea-9869-b77729ed4c20",
      value: "40fcf0b8-07ee-11ea-9869-b77729ed4c20",
      text: "GLMAN06"
    },
    {
      key: "40fcf0b9-07ee-11ea-986a-8746dc70a158",
      value: "40fcf0b9-07ee-11ea-986a-8746dc70a158",
      text: "GLMAN09"
    },
    {
      key: "40fcf0ba-07ee-11ea-986b-97067ec905fb",
      value: "40fcf0ba-07ee-11ea-986b-97067ec905fb",
      text: "GLMDO06"
    },
    {
      key: "40fd1656-07ee-11ea-986c-031635703e47",
      value: "40fd1656-07ee-11ea-986c-031635703e47",
      text: "GLPCF06"
    },
    {
      key: "40fd1657-07ee-11ea-986d-a70cf01749a9",
      value: "40fd1657-07ee-11ea-986d-a70cf01749a9",
      text: "GLPIP09"
    },
    {
      key: "40fd1658-07ee-11ea-986e-eb1707a3f329",
      value: "40fd1658-07ee-11ea-986e-eb1707a3f329",
      text: "GLPIP10"
    },
    {
      key: "40fd3e7e-07ee-11ea-986f-2b0f01925025",
      value: "40fd3e7e-07ee-11ea-986f-2b0f01925025",
      text: "GLPIP12"
    },
    {
      key: "40fd3e7f-07ee-11ea-9870-0f9182bf6fcb",
      value: "40fd3e7f-07ee-11ea-9870-0f9182bf6fcb",
      text: "GLPRW06"
    },
    {
      key: "40fd643a-07ee-11ea-9871-77a37505e334",
      value: "40fd643a-07ee-11ea-9871-77a37505e334",
      text: "GLWOW09"
    },
    {
      key: "40fd643b-07ee-11ea-9872-ab7db3946511",
      value: "40fd643b-07ee-11ea-9872-ab7db3946511",
      text: "GLWOW10"
    },
    {
      key: "40fd643c-07ee-11ea-9873-474b27f651c9",
      value: "40fd643c-07ee-11ea-9873-474b27f651c9",
      text: "GSMPS04"
    },
    {
      key: "40fd8b40-07ee-11ea-9874-9fabffd8b49f",
      value: "40fd8b40-07ee-11ea-9874-9fabffd8b49f",
      text: "GSMPS06"
    },
    {
      key: "40fd8b41-07ee-11ea-9875-3711a50b6270",
      value: "40fd8b41-07ee-11ea-9875-3711a50b6270",
      text: "GSPRC05"
    },
    {
      key: "40fdb39a-07ee-11ea-9876-6bc3d5a2ae51",
      value: "40fdb39a-07ee-11ea-9876-6bc3d5a2ae51",
      text: "GSSTS03"
    },
    {
      key: "40fdb39b-07ee-11ea-9877-0bdd66133e0c",
      value: "40fdb39b-07ee-11ea-9877-0bdd66133e0c",
      text: "GSSTS04"
    },
    {
      key: "40fdb39c-07ee-11ea-9878-9b9205e5fbac",
      value: "40fdb39c-07ee-11ea-9878-9b9205e5fbac",
      text: "GSSTS05"
    },
    {
      key: "40fdda5a-07ee-11ea-9879-8bcb7127f2cb",
      value: "40fdda5a-07ee-11ea-9879-8bcb7127f2cb",
      text: "GSSTS06"
    },
    {
      key: "40fdda5b-07ee-11ea-987a-df21caf8179f",
      value: "40fdda5b-07ee-11ea-987a-df21caf8179f",
      text: "GSSTS07"
    },
    {
      key: "40fe014c-07ee-11ea-987b-1f0d8607ba82",
      value: "40fe014c-07ee-11ea-987b-1f0d8607ba82",
      text: "GT 01"
    },
    {
      key: "40fe014d-07ee-11ea-987c-d7baf61bb8f6",
      value: "40fe014d-07ee-11ea-987c-d7baf61bb8f6",
      text: "GT 02"
    },
    {
      key: "40fe014e-07ee-11ea-987d-276d8d98ccca",
      value: "40fe014e-07ee-11ea-987d-276d8d98ccca",
      text: "GT 03"
    },
    {
      key: "40fe2708-07ee-11ea-987e-071c212fa266",
      value: "40fe2708-07ee-11ea-987e-071c212fa266",
      text: "GT 04"
    },
    {
      key: "40fe2709-07ee-11ea-987f-ebfe27593b0e",
      value: "40fe2709-07ee-11ea-987f-ebfe27593b0e",
      text: "GT 05"
    },
    {
      key: "40fe4f44-07ee-11ea-9880-a7b9c28bfd38",
      value: "40fe4f44-07ee-11ea-9880-a7b9c28bfd38",
      text: "GX 00"
    },
    {
      key: "40fe4f45-07ee-11ea-9881-d748a0052cb6",
      value: "40fe4f45-07ee-11ea-9881-d748a0052cb6",
      text: "HP 05"
    },
    {
      key: "40fe4f46-07ee-11ea-9882-e3f60a51c3a1",
      value: "40fe4f46-07ee-11ea-9882-e3f60a51c3a1",
      text: "HP 08"
    },
    {
      key: "40fe7636-07ee-11ea-9883-17b8cdd8e25d",
      value: "40fe7636-07ee-11ea-9883-17b8cdd8e25d",
      text: "IS 01"
    },
    {
      key: "40fe7637-07ee-11ea-9884-77d51fb0cff0",
      value: "40fe7637-07ee-11ea-9884-77d51fb0cff0",
      text: "IS 02"
    },
    {
      key: "40fe9d3c-07ee-11ea-9885-2322347dc2f8",
      value: "40fe9d3c-07ee-11ea-9885-2322347dc2f8",
      text: "IS 03"
    },
    {
      key: "40fe9d3d-07ee-11ea-9886-4fe7e914666c",
      value: "40fe9d3d-07ee-11ea-9886-4fe7e914666c",
      text: "IS 04"
    },
    {
      key: "40fe9d3e-07ee-11ea-9887-07302986490b",
      value: "40fe9d3e-07ee-11ea-9887-07302986490b",
      text: "IS 05"
    },
    {
      key: "40fec41a-07ee-11ea-9888-db670cbb0b6e",
      value: "40fec41a-07ee-11ea-9888-db670cbb0b6e",
      text: "IS 06"
    },
    {
      key: "40fec41b-07ee-11ea-9889-63df36541af6",
      value: "40fec41b-07ee-11ea-9889-63df36541af6",
      text: "IS 06"
    },
    {
      key: "40fec41c-07ee-11ea-988a-e7f955520f55",
      value: "40fec41c-07ee-11ea-988a-e7f955520f55",
      text: "LS 01"
    },
    {
      key: "40feeb84-07ee-11ea-988b-0bf1235b6581",
      value: "40feeb84-07ee-11ea-988b-0bf1235b6581",
      text: "LS 02"
    },
    {
      key: "40feeb85-07ee-11ea-988c-736499a02eba",
      value: "40feeb85-07ee-11ea-988c-736499a02eba",
      text: "LS 03"
    },
    {
      key: "40ff1208-07ee-11ea-988d-6fc18726ace7",
      value: "40ff1208-07ee-11ea-988d-6fc18726ace7",
      text: "LS 04"
    },
    {
      key: "40ff1209-07ee-11ea-988e-d7a10876b643",
      value: "40ff1209-07ee-11ea-988e-d7a10876b643",
      text: "MM 01"
    },
    {
      key: "40ff120a-07ee-11ea-988f-879fef04c11c",
      value: "40ff120a-07ee-11ea-988f-879fef04c11c",
      text: "MM 02"
    },
    {
      key: "40ff3904-07ee-11ea-9890-b7c18e6b6349",
      value: "40ff3904-07ee-11ea-9890-b7c18e6b6349",
      text: "MM 03"
    },
    {
      key: "40ff3905-07ee-11ea-9891-7fd8c5d02d82",
      value: "40ff3905-07ee-11ea-9891-7fd8c5d02d82",
      text: "OM 02"
    },
    {
      key: "40ff600a-07ee-11ea-9892-cbd5bcd05626",
      value: "40ff600a-07ee-11ea-9892-cbd5bcd05626",
      text: "OM 04"
    },
    {
      key: "40ff600b-07ee-11ea-9893-6b4fde9d713d",
      value: "40ff600b-07ee-11ea-9893-6b4fde9d713d",
      text: "PC 02"
    },
    {
      key: "40ff600c-07ee-11ea-9894-47c89e8be38c",
      value: "40ff600c-07ee-11ea-9894-47c89e8be38c",
      text: "PC 05"
    },
    {
      key: "40ff86e8-07ee-11ea-9895-ebd7f38cc78c",
      value: "40ff86e8-07ee-11ea-9895-ebd7f38cc78c",
      text: "PE 01"
    },
    {
      key: "40ff86e9-07ee-11ea-9896-73852ffd4986",
      value: "40ff86e9-07ee-11ea-9896-73852ffd4986",
      text: "PE 02"
    },
    {
      key: "40ff86ea-07ee-11ea-9897-bf63684a31e6",
      value: "40ff86ea-07ee-11ea-9897-bf63684a31e6",
      text: "PE 03"
    },
    {
      key: "40ffadda-07ee-11ea-9898-9be510201591",
      value: "40ffadda-07ee-11ea-9898-9be510201591",
      text: "PE 04"
    },
    {
      key: "40ffaddb-07ee-11ea-9899-3332784b505a",
      value: "40ffaddb-07ee-11ea-9899-3332784b505a",
      text: "PE 05"
    },
    {
      key: "40ffd4ea-07ee-11ea-989a-f3ee6d13c26c",
      value: "40ffd4ea-07ee-11ea-989a-f3ee6d13c26c",
      text: "PE 06"
    },
    {
      key: "40ffd4eb-07ee-11ea-989b-1f90163ea486",
      value: "40ffd4eb-07ee-11ea-989b-1f90163ea486",
      text: "PE 06"
    },
    {
      key: "40fffa88-07ee-11ea-989c-e3c531a9afd0",
      value: "40fffa88-07ee-11ea-989c-e3c531a9afd0",
      text: "PG 01"
    },
    {
      key: "40fffa89-07ee-11ea-989d-f77de8abe2f6",
      value: "40fffa89-07ee-11ea-989d-f77de8abe2f6",
      text: "PG 02"
    },
    {
      key: "410022ba-07ee-11ea-989e-3fca57033348",
      value: "410022ba-07ee-11ea-989e-3fca57033348",
      text: "PG 03"
    },
    {
      key: "410022bb-07ee-11ea-989f-c7cde4056680",
      value: "410022bb-07ee-11ea-989f-c7cde4056680",
      text: "PG 04"
    },
    {
      key: "410022bc-07ee-11ea-98a0-ef3998baae68",
      value: "410022bc-07ee-11ea-98a0-ef3998baae68",
      text: "PG 05"
    },
    {
      key: "410049b6-07ee-11ea-98a1-ffd545af177e",
      value: "410049b6-07ee-11ea-98a1-ffd545af177e",
      text: "PG 06"
    },
    {
      key: "410049b7-07ee-11ea-98a2-6ff334f17004",
      value: "410049b7-07ee-11ea-98a2-6ff334f17004",
      text: "PG 06"
    },
    {
      key: "410070a8-07ee-11ea-98a3-63f5c4f14757",
      value: "410070a8-07ee-11ea-98a3-63f5c4f14757",
      text: "PM 01"
    },
    {
      key: "410070a9-07ee-11ea-98a4-635c45c4d229",
      value: "410070a9-07ee-11ea-98a4-635c45c4d229",
      text: "PM 02"
    },
    {
      key: "410070aa-07ee-11ea-98a5-1b692a343268",
      value: "410070aa-07ee-11ea-98a5-1b692a343268",
      text: "PM 03"
    },
    {
      key: "410097b8-07ee-11ea-98a6-f38c42bb3516",
      value: "410097b8-07ee-11ea-98a6-f38c42bb3516",
      text: "PM 04"
    },
    {
      key: "410097b9-07ee-11ea-98a7-1b4c6d9c7c52",
      value: "410097b9-07ee-11ea-98a7-1b4c6d9c7c52",
      text: "PM 05"
    },
    {
      key: "4100bd56-07ee-11ea-98a8-ab9a0aec9bb1",
      value: "4100bd56-07ee-11ea-98a8-ab9a0aec9bb1",
      text: "PM 06"
    },
    {
      key: "4100bd57-07ee-11ea-98a9-2f0c9b8eddcb",
      value: "4100bd57-07ee-11ea-98a9-2f0c9b8eddcb",
      text: "PM 06"
    },
    {
      key: "4100bd58-07ee-11ea-98aa-efb915163c03",
      value: "4100bd58-07ee-11ea-98aa-efb915163c03",
      text: "PROFO02"
    },
    {
      key: "4100e448-07ee-11ea-98ab-bf7be279e090",
      value: "4100e448-07ee-11ea-98ab-bf7be279e090",
      text: "PY 05"
    },
    {
      key: "4100e449-07ee-11ea-98ac-b758b0a66cfe",
      value: "4100e449-07ee-11ea-98ac-b758b0a66cfe",
      text: "SEREM01"
    },
    {
      key: "4100e44a-07ee-11ea-98ad-47c3283ff0c3",
      value: "4100e44a-07ee-11ea-98ad-47c3283ff0c3",
      text: "SEREM02"
    },
    {
      key: "41010b3a-07ee-11ea-98ae-0b2040a7917e",
      value: "41010b3a-07ee-11ea-98ae-0b2040a7917e",
      text: "SERES01"
    },
    {
      key: "41010b3b-07ee-11ea-98af-7f828fd2fca0",
      value: "41010b3b-07ee-11ea-98af-7f828fd2fca0",
      text: "SERES02"
    },
    {
      key: "4101322c-07ee-11ea-98b0-2f88ecf83e2c",
      value: "4101322c-07ee-11ea-98b0-2f88ecf83e2c",
      text: "SERES03"
    },
    {
      key: "4101322d-07ee-11ea-98b1-0374df7d50dd",
      value: "4101322d-07ee-11ea-98b1-0374df7d50dd",
      text: "SERES04"
    },
    {
      key: "4101322e-07ee-11ea-98b2-47920831d795",
      value: "4101322e-07ee-11ea-98b2-47920831d795",
      text: "SERES04"
    },
    {
      key: "41015a68-07ee-11ea-98b3-f32afa3d5511",
      value: "41015a68-07ee-11ea-98b3-f32afa3d5511",
      text: "SERES05"
    },
    {
      key: "41015a69-07ee-11ea-98b4-abe089fd96f9",
      value: "41015a69-07ee-11ea-98b4-abe089fd96f9",
      text: "SGPAT02"
    },
    {
      key: "41015a6a-07ee-11ea-98b5-eb925b8994ff",
      value: "41015a6a-07ee-11ea-98b5-eb925b8994ff",
      text: "SGPAT03"
    },
    {
      key: "4101815a-07ee-11ea-98b6-03e05b8cb036",
      value: "4101815a-07ee-11ea-98b6-03e05b8cb036",
      text: "SGPAT04"
    },
    {
      key: "4101815b-07ee-11ea-98b7-db839fd09a1e",
      value: "4101815b-07ee-11ea-98b7-db839fd09a1e",
      text: "SGPAT05"
    },
    {
      key: "4101a70c-07ee-11ea-98b8-734d10a9f0aa",
      value: "4101a70c-07ee-11ea-98b8-734d10a9f0aa",
      text: "SGPAT06"
    },
    {
      key: "4101a70d-07ee-11ea-98b9-9782a80fd663",
      value: "4101a70d-07ee-11ea-98b9-9782a80fd663",
      text: "SGPAT07"
    },
    {
      key: "4101a70e-07ee-11ea-98ba-e3fbf7573ca1",
      value: "4101a70e-07ee-11ea-98ba-e3fbf7573ca1",
      text: "SGPAT07"
    },
    {
      key: "4101cf48-07ee-11ea-98bb-df6c902bba86",
      value: "4101cf48-07ee-11ea-98bb-df6c902bba86",
      text: "SGPAT08"
    },
    {
      key: "4101cf49-07ee-11ea-98bc-d7797bf7a788",
      value: "4101cf49-07ee-11ea-98bc-d7797bf7a788",
      text: "STOCE03"
    },
    {
      key: "4101cf4a-07ee-11ea-98bd-2fe2ca694a9d",
      value: "4101cf4a-07ee-11ea-98bd-2fe2ca694a9d",
      text: "STSCY02"
    },
    {
      key: "4101f504-07ee-11ea-98be-cb226b27b94c",
      value: "4101f504-07ee-11ea-98be-cb226b27b94c",
      text: "STSCY03"
    },
    {
      key: "4101f505-07ee-11ea-98bf-8304814082f0",
      value: "4101f505-07ee-11ea-98bf-8304814082f0",
      text: "STSCY04"
    },
    {
      key: "41021bf6-07ee-11ea-98c0-779961f6842b",
      value: "41021bf6-07ee-11ea-98c0-779961f6842b",
      text: "TI 03"
    },
    {
      key: "41021bf7-07ee-11ea-98c1-ffaf74f6fa69",
      value: "41021bf7-07ee-11ea-98c1-ffaf74f6fa69",
      text: "TI 04"
    },
    {
      key: "41021bf8-07ee-11ea-98c2-0bcfb89c9597",
      value: "41021bf8-07ee-11ea-98c2-0bcfb89c9597",
      text: "TI 05"
    },
    {
      key: "410242f2-07ee-11ea-98c3-4bb5016cdc8b",
      value: "410242f2-07ee-11ea-98c3-4bb5016cdc8b",
      text: "TI 06"
    },
    {
      key: "410242f3-07ee-11ea-98c4-87e63abe7b6a",
      value: "410242f3-07ee-11ea-98c4-87e63abe7b6a",
      text: "TI 07"
    },
    {
      key: "41026b1a-07ee-11ea-98c5-97b75209184a",
      value: "41026b1a-07ee-11ea-98c5-97b75209184a",
      text: "TI 08"
    },
    {
      key: "41026b1b-07ee-11ea-98c6-276e50f99591",
      value: "41026b1b-07ee-11ea-98c6-276e50f99591",
      text: "TI 08"
    },
    {
      key: "71b7b0a2-ff43-11e9-8f0b-362b9e155667",
      value: "71b7b0a2-ff43-11e9-8f0b-362b9e155667",
      text: "testCS1"
    },
    {
      key: "a3975faa-ff43-11e9-8f0b-362b9e155667",
      value: "a3975faa-ff43-11e9-8f0b-362b9e155667",
      text: "testCS4"
    }
  ],
  competencies: [
    {
      key: "416c0836-07ee-11ea-9d20-0bffe52776d7",
      value: "416c0836-07ee-11ea-9d20-0bffe52776d7",
      text: "Thinking things through"
    },
    {
      key: "416c54d0-07ee-11ea-9d21-0b7a25d29060",
      value: "416c54d0-07ee-11ea-9d21-0b7a25d29060",
      text: "Achieve results"
    },
    {
      key: "416c54d1-07ee-11ea-9d22-a35293810d68",
      value: "416c54d1-07ee-11ea-9d22-a35293810d68",
      text: "Humor"
    },
    {
      key: "b1c88ca2-0173-11ea-a69e-362b9e155667",
      value: "b1c88ca2-0173-11ea-a69e-362b9e155667",
      text: "TestHumourComp"
    },
    {
      key: "b692c888-0173-11ea-8d71-362b9e155667",
      value: "b692c888-0173-11ea-8d71-362b9e155667",
      text: "TestGreatLeaderComp"
    },
    {
      key: "3a57095e-0174-11ea-8d71-362b9e155667",
      value: "3a57095e-0174-11ea-8d71-362b9e155667",
      text: "TestHumourDevGoals"
    },
    {
      key: "4beafb9e-0174-11ea-8d71-362b9e155667",
      value: "4beafb9e-0174-11ea-8d71-362b9e155667",
      text: "TestGreatLeaderDevGoals"
    }
  ],
  developmentalGoals: [
    {
      key: "416c0836-07ee-11ea-9d20-0bffe52776d7",
      value: "416c0836-07ee-11ea-9d20-0bffe52776d7",
      text: "Thinking things through"
    },
    {
      key: "416c54d0-07ee-11ea-9d21-0b7a25d29060",
      value: "416c54d0-07ee-11ea-9d21-0b7a25d29060",
      text: "Achieve results"
    },
    {
      key: "416c54d1-07ee-11ea-9d22-a35293810d68",
      value: "416c54d1-07ee-11ea-9d22-a35293810d68",
      text: "Humor"
    },
    {
      key: "b1c88ca2-0173-11ea-a69e-362b9e155667",
      value: "b1c88ca2-0173-11ea-a69e-362b9e155667",
      text: "TestHumourComp"
    },
    {
      key: "b692c888-0173-11ea-8d71-362b9e155667",
      value: "b692c888-0173-11ea-8d71-362b9e155667",
      text: "TestGreatLeaderComp"
    },
    {
      key: "3a57095e-0174-11ea-8d71-362b9e155667",
      value: "3a57095e-0174-11ea-8d71-362b9e155667",
      text: "TestHumourDevGoals"
    },
    {
      key: "4beafb9e-0174-11ea-8d71-362b9e155667",
      value: "4beafb9e-0174-11ea-8d71-362b9e155667",
      text: "TestGreatLeaderDevGoals"
    }
  ],
  location: [
    {
      key: "415a38c2-07ee-11ea-9ce2-8f58b094410c",
      value: "415a38c2-07ee-11ea-9ce2-8f58b094410c",
      text: "191 University Ave, Charlottetown, Prince Edward Island"
    },
    {
      key: "415a5fb4-07ee-11ea-9ce3-5b93d657d697",
      value: "415a5fb4-07ee-11ea-9ce3-5b93d657d697",
      text: "50 Brown Ave, Dartmouth, Nova Scotia"
    },
    {
      key: "415a5fb5-07ee-11ea-9ce4-e3ffb1381ab5",
      value: "415a5fb5-07ee-11ea-9ce4-e3ffb1381ab5",
      text: "1344 Summer St, Halifax, Nova Scotia"
    },
    {
      key: "415a86b0-07ee-11ea-9ce5-43a7ea3f8d38",
      value: "415a86b0-07ee-11ea-9ce5-43a7ea3f8d38",
      text: "1505 Barrington St, Halifax, Nova Scotia"
    },
    {
      key: "415a86b1-07ee-11ea-9ce6-ab7c2fca2b1c",
      value: "415a86b1-07ee-11ea-9ce6-ab7c2fca2b1c",
      text: "1045 Main St, Moncton, New Brunswick"
    },
    {
      key: "415aada2-07ee-11ea-9ce7-afc19da54fc0",
      value: "415aada2-07ee-11ea-9ce7-afc19da54fc0",
      text: "189 Prince William St, Saint John, New Brunswick"
    },
    {
      key: "415aada3-07ee-11ea-9ce8-0f8e85a3cce2",
      value: "415aada3-07ee-11ea-9ce8-0f8e85a3cce2",
      text: "10 Barters Hill, St Johns, Newfoundland and Labrador"
    },
    {
      key: "415aada4-07ee-11ea-9ce9-db898dc76de9",
      value: "415aada4-07ee-11ea-9ce9-db898dc76de9",
      text: "196 George St, Sydney, Nova Scotia"
    },
    {
      key: "415ad494-07ee-11ea-9cea-d384d27f3210",
      value: "415ad494-07ee-11ea-9cea-d384d27f3210",
      text: "50 Victoria St, Gatineau, Québec"
    },
    {
      key: "415ad495-07ee-11ea-9ceb-df6d9d6cd701",
      value: "415ad495-07ee-11ea-9ceb-df6d9d6cd701",
      text: "56 Sparks St, Ottawa, Ontario"
    },
    {
      key: "415ad496-07ee-11ea-9cec-d796a0a9523b",
      value: "415ad496-07ee-11ea-9cec-d796a0a9523b",
      text: "7 Bayview Rd, Ottawa, Ontario"
    },
    {
      key: "415afb90-07ee-11ea-9ced-63ee6ebfa9a5",
      value: "415afb90-07ee-11ea-9ced-63ee6ebfa9a5",
      text: "3701 Carling Ave, Ottawa, Ontario"
    },
    {
      key: "415afb91-07ee-11ea-9cee-57a8aa37e52a",
      value: "415afb91-07ee-11ea-9cee-57a8aa37e52a",
      text: "161 Goldenrod Drwy, Ottawa, Ontario"
    },
    {
      key: "415b2282-07ee-11ea-9cef-ab7759a854e1",
      value: "415b2282-07ee-11ea-9cef-ab7759a854e1",
      text: "235 Queen St, Ottawa, Ontario"
    },
    {
      key: "415b2283-07ee-11ea-9cf0-53a5f3e30b39",
      value: "415b2283-07ee-11ea-9cf0-53a5f3e30b39",
      text: "410 Laurier Ave W, Ottawa, Ontario"
    },
    {
      key: "415b2284-07ee-11ea-9cf1-8fb81ec50e89",
      value: "415b2284-07ee-11ea-9cf1-8fb81ec50e89",
      text: "180 Kent St, Ottawa, Ontario"
    },
    {
      key: "415b4974-07ee-11ea-9cf2-5b1ff8079f95",
      value: "415b4974-07ee-11ea-9cf2-5b1ff8079f95",
      text: "151 Tunneys Pasture Drwy, Ottawa, Ontario"
    },
    {
      key: "415b4975-07ee-11ea-9cf3-971dc1923b27",
      value: "415b4975-07ee-11ea-9cf3-971dc1923b27",
      text: "8948 Erin Halton TLine, Acton, Ontario"
    },
    {
      key: "415b4976-07ee-11ea-9cf4-bfe92cae0c9f",
      value: "415b4976-07ee-11ea-9cf4-bfe92cae0c9f",
      text: "274 Mackenzie Ave, Ajax, Ontario"
    },
    {
      key: "415b7066-07ee-11ea-9cf5-e35ee55748c7",
      value: "415b7066-07ee-11ea-9cf5-e35ee55748c7",
      text: "126 Wellington St W, Aurora, Ontario"
    },
    {
      key: "415b7067-07ee-11ea-9cf6-abc2beb373f6",
      value: "415b7067-07ee-11ea-9cf6-abc2beb373f6",
      text: "328 Sidney St, Belleville, Ontario"
    },
    {
      key: "415b9762-07ee-11ea-9cf7-735668c78bd1",
      value: "415b9762-07ee-11ea-9cf7-735668c78bd1",
      text: "4475 Service Rd North, Burlington, Ontario"
    },
    {
      key: "415b9763-07ee-11ea-9cf8-cf7d536b1dad",
      value: "415b9763-07ee-11ea-9cf8-cf7d536b1dad",
      text: "251 Arvin Ave, Stoney Creek, Ontario"
    },
    {
      key: "415b9764-07ee-11ea-9cf9-877c1d9d6b8c",
      value: "415b9764-07ee-11ea-9cf9-877c1d9d6b8c",
      text: "55 Bay St N, Hamilton, Ontario"
    },
    {
      key: "415bbe54-07ee-11ea-9cfa-97f12f92ed17",
      value: "415bbe54-07ee-11ea-9cfa-97f12f92ed17",
      text: "100 Park St, 2nd Fl, Kenora, Ontario"
    },
    {
      key: "415bbe55-07ee-11ea-9cfb-3ffc234ae91f",
      value: "415bbe55-07ee-11ea-9cfb-3ffc234ae91f",
      text: "30 Duke St W, Kitchener, Ontario"
    },
    {
      key: "415bbe56-07ee-11ea-9cfc-cfe7698538eb",
      value: "415bbe56-07ee-11ea-9cfc-cfe7698538eb",
      text: "78 Meg Dr, London, Ontario"
    },
    {
      key: "415be550-07ee-11ea-9cfd-bbb9dd6838b6",
      value: "415be550-07ee-11ea-9cfd-bbb9dd6838b6",
      text: "451 Talbot St, London, Ontario"
    },
    {
      key: "415be551-07ee-11ea-9cfe-3b62d0bbc2d5",
      value: "415be551-07ee-11ea-9cfe-3b62d0bbc2d5",
      text: "232 Yorktech Dr, Markham, Ontario"
    },
    {
      key: "415be552-07ee-11ea-9cff-abfa1946821f",
      value: "415be552-07ee-11ea-9cff-abfa1946821f",
      text: "175A Admiral Blvd, Mississauga, Ontario"
    },
    {
      key: "415c0c42-07ee-11ea-9d00-fb5baa511597",
      value: "415c0c42-07ee-11ea-9d00-fb5baa511597",
      text: "345 Harry Walker Pky S, Newmarket, Ontario"
    },
    {
      key: "415c0c43-07ee-11ea-9d01-cbbd04e1a8a6",
      value: "415c0c43-07ee-11ea-9d01-cbbd04e1a8a6",
      text: "107 Shirreff Ave, North Bay, Ontario"
    },
    {
      key: "415c3334-07ee-11ea-9d02-fb84929aa191",
      value: "415c3334-07ee-11ea-9d02-fb84929aa191",
      text: "160 Elgin St, Ottawa, Ontario"
    },
    {
      key: "415c3335-07ee-11ea-9d03-371e37cc6642",
      value: "415c3335-07ee-11ea-9d03-371e37cc6642",
      text: "1161 Crawford Dr, Peterborough, Ontario"
    },
    {
      key: "415c3336-07ee-11ea-9d04-1ff55c1fd041",
      value: "415c3336-07ee-11ea-9d04-1ff55c1fd041",
      text: "2 Queen St E, Sault Ste Marie, Ontario"
    },
    {
      key: "415c5a30-07ee-11ea-9d05-5f43b0604df0",
      value: "415c5a30-07ee-11ea-9d05-5f43b0604df0",
      text: "19 Lisgar St, Sudbury, Ontario"
    },
    {
      key: "415c5a31-07ee-11ea-9d06-d7cad325505b",
      value: "415c5a31-07ee-11ea-9d06-d7cad325505b",
      text: "875 Notre Dame Ave, Sudbury, Ontario"
    },
    {
      key: "415c5a32-07ee-11ea-9d07-571a81e2b335",
      value: "415c5a32-07ee-11ea-9d07-571a81e2b335",
      text: "201 May St N, Thunder Bay, Ontario"
    },
    {
      key: "415c8122-07ee-11ea-9d08-c7a0f1d10914",
      value: "415c8122-07ee-11ea-9d08-c7a0f1d10914",
      text: "886 Alloy Pl, Thunder Bay, Ontario"
    },
    {
      key: "415c8123-07ee-11ea-9d09-7fc727b58193",
      value: "415c8123-07ee-11ea-9d09-7fc727b58193",
      text: "120 Cedar St S, Timmins, Ontario"
    },
    {
      key: "415ca814-07ee-11ea-9d0a-bf97e7a98df4",
      value: "415ca814-07ee-11ea-9d0a-bf97e7a98df4",
      text: "151 Yonge St, Toronto, Ontario"
    },
    {
      key: "415ca815-07ee-11ea-9d0b-5b2923b11ffc",
      value: "415ca815-07ee-11ea-9d0b-5b2923b11ffc",
      text: "139 Northfield Dr W, Waterloo, Ontario"
    },
    {
      key: "415ca816-07ee-11ea-9d0c-3f69c8059b7c",
      value: "415ca816-07ee-11ea-9d0c-3f69c8059b7c",
      text: "1500 Ouellette Ave, Windsor, Ontario"
    },
    {
      key: "415ccf06-07ee-11ea-9d0d-130ad2223438",
      value: "415ccf06-07ee-11ea-9d0d-130ad2223438",
      text: "1726 Dolphin Ave, Kelowna, British Columbia"
    },
    {
      key: "415ccf07-07ee-11ea-9d0e-9f3b8be11fa0",
      value: "415ccf07-07ee-11ea-9d0e-9f3b8be11fa0",
      text: "277 Winnipeg St, Penticton, British Columbia"
    },
    {
      key: "415ccf08-07ee-11ea-9d0f-87bb965041d1",
      value: "415ccf08-07ee-11ea-9d0f-87bb965041d1",
      text: "280 Victoria St, Prince George, British Columbia"
    },
    {
      key: "415cf602-07ee-11ea-9d10-3373caede829",
      value: "415cf602-07ee-11ea-9d10-3373caede829",
      text: "13401 108 Ave, Surrey, British Columbia"
    },
    {
      key: "415cf603-07ee-11ea-9d11-ff0e67fdb53c",
      value: "415cf603-07ee-11ea-9d11-ff0e67fdb53c",
      text: "300 Georgia St W, Vancouver, British Columbia"
    },
    {
      key: "415d1cf4-07ee-11ea-9d12-63c87273e861",
      value: "415d1cf4-07ee-11ea-9d12-63c87273e861",
      text: "3625 Lougheed Hwy, Vancouver, British Columbia"
    },
    {
      key: "415d1cf5-07ee-11ea-9d13-5752fb0e6bbe",
      value: "415d1cf5-07ee-11ea-9d13-5752fb0e6bbe",
      text: "1230 Government St, Victoria, British Columbia"
    },
    {
      key: "415d1cf6-07ee-11ea-9d14-27375f65f960",
      value: "415d1cf6-07ee-11ea-9d14-27375f65f960",
      text: "300 Main St, Whitehorse, Yukon"
    },
    {
      key: "415d43f0-07ee-11ea-9d15-177c887b6c23",
      value: "415d43f0-07ee-11ea-9d15-177c887b6c23",
      text: "220 4 Ave SE, Calgary, Alberta"
    },
    {
      key: "415d43f1-07ee-11ea-9d16-272764d0fb40",
      value: "415d43f1-07ee-11ea-9d16-272764d0fb40",
      text: "9305 50 St NW, Edmonton, Alberta"
    },
    {
      key: "415d43f2-07ee-11ea-9d17-5b047f3de243",
      value: "415d43f2-07ee-11ea-9d17-5b047f3de243",
      text: "9700 Jasper Ave NW, Edmonton, Alberta"
    },
    {
      key: "415d6ae2-07ee-11ea-9d18-fb24a92178f1",
      value: "415d6ae2-07ee-11ea-9d18-fb24a92178f1",
      text: "1945 Hamilton St, Regina, Saskatchewan"
    },
    {
      key: "415d6ae3-07ee-11ea-9d19-a7cb6bdfe863",
      value: "415d6ae3-07ee-11ea-9d19-a7cb6bdfe863",
      text: "123 2nd Ave S, Saskatoon, Saskatchewan"
    },
    {
      key: "415d91d4-07ee-11ea-9d1a-a3cf918b4432",
      value: "415d91d4-07ee-11ea-9d1a-a3cf918b4432",
      text: "400 St Mary Ave, Winnipeg, Manitoba"
    },
    {
      key: "415d91d5-07ee-11ea-9d1b-f36a1f7a30a0",
      value: "415d91d5-07ee-11ea-9d1b-f36a1f7a30a0",
      text: "5101 50 Ave, Yellowknife, Northwest Territories"
    },
    {
      key: "415db8d0-07ee-11ea-9d1c-b3892a160124",
      value: "415db8d0-07ee-11ea-9d1c-b3892a160124",
      text: "1155 Metcalfe St, Montréal, Québec"
    },
    {
      key: "415db8d1-07ee-11ea-9d1d-4ba8cbed7341",
      value: "415db8d1-07ee-11ea-9d1d-4ba8cbed7341",
      text: "1550 d'Estimauville Ave, Québec, Québec"
    },
    {
      key: "415ddfc2-07ee-11ea-9d1e-1fbe146c3701",
      value: "415ddfc2-07ee-11ea-9d1e-1fbe146c3701",
      text: "2665 King St W, Sherbrooke, Québec"
    },
    {
      key: "415ddfc3-07ee-11ea-9d1f-5b2c306087e1",
      value: "415ddfc3-07ee-11ea-9d1f-5b2c306087e1",
      text: "9177 Langelier Blvd, St-Léonard, Québec"
    },
    {
      key: "5888300c-0245-11ea-8d71-362b9e155667",
      value: "5888300c-0245-11ea-8d71-362b9e155667",
      text: "9177 Langelier Blvd, St-Léonard, Québec"
    },
    {
      key: "60fd7bc0-0245-11ea-8d71-362b9e155667",
      value: "60fd7bc0-0245-11ea-8d71-362b9e155667",
      text: "5101 50 Ave, Yellowknife, Northwest Territories"
    },
    {
      key: "64f770aa-0245-11ea-8d71-362b9e155667",
      value: "64f770aa-0245-11ea-8d71-362b9e155667",
      text: "1945 Hamilton St, Regina, Saskatchewan"
    },
    {
      key: "6a91edec-0245-11ea-8d71-362b9e155667",
      value: "6a91edec-0245-11ea-8d71-362b9e155667",
      text: "232 Yorktech Dr, Markham, Ontario"
    }
  ],
  school: [
    {
      key: "411ac46c-07ee-11ea-99f3-d79fb99c77db",
      value: "411ac46c-07ee-11ea-99f3-d79fb99c77db",
      text: "High School - All"
    },
    {
      key: "411aeb5e-07ee-11ea-99f4-f3c5412f55b5",
      value: "411aeb5e-07ee-11ea-99f4-f3c5412f55b5",
      text: "Acadia University"
    },
    {
      key: "411b125a-07ee-11ea-99f5-e3c4960e479b",
      value: "411b125a-07ee-11ea-99f5-e3c4960e479b",
      text: "Cape Breton, Univ. College of"
    },
    {
      key: "411b125b-07ee-11ea-99f6-f73e827cba55",
      value: "411b125b-07ee-11ea-99f6-f73e827cba55",
      text: "Sainte-Anne, Université"
    },
    {
      key: "411b394c-07ee-11ea-99f7-d7dcef5dbb7e",
      value: "411b394c-07ee-11ea-99f7-d7dcef5dbb7e",
      text: "Dalhousie University"
    },
    {
      key: "411b394d-07ee-11ea-99f8-8f81b1d46391",
      value: "411b394d-07ee-11ea-99f8-8f81b1d46391",
      text: "Memorial Univ of Newfoundland"
    },
    {
      key: "411b394e-07ee-11ea-99f9-770b03bd7f56",
      value: "411b394e-07ee-11ea-99f9-770b03bd7f56",
      text: "Moncton, Université de"
    },
    {
      key: "411b607a-07ee-11ea-99fa-3f9a627cfabb",
      value: "411b607a-07ee-11ea-99fa-3f9a627cfabb",
      text: "Mount Allison, University"
    },
    {
      key: "411b607b-07ee-11ea-99fb-1f624d0fc1e1",
      value: "411b607b-07ee-11ea-99fb-1f624d0fc1e1",
      text: "Mount Saint Vincent University"
    },
    {
      key: "411b607c-07ee-11ea-99fc-83d7bd722a2e",
      value: "411b607c-07ee-11ea-99fc-83d7bd722a2e",
      text: "Nova Scotia College Art/Design"
    },
    {
      key: "411b8730-07ee-11ea-99fd-cf54c92d4a0a",
      value: "411b8730-07ee-11ea-99fd-cf54c92d4a0a",
      text: "Saint Francis Xavier U."
    },
    {
      key: "411b8731-07ee-11ea-99fe-8f349fac5179",
      value: "411b8731-07ee-11ea-99fe-8f349fac5179",
      text: "Saint-Louis Maillet (M. U. C.)"
    },
    {
      key: "411b8732-07ee-11ea-99ff-236b5afbea65",
      value: "411b8732-07ee-11ea-99ff-236b5afbea65",
      text: "Shippagan (Moncton U. Campus)"
    },
    {
      key: "411bae22-07ee-11ea-9a00-d37465906baf",
      value: "411bae22-07ee-11ea-9a00-d37465906baf",
      text: "Saint Mary's University"
    },
    {
      key: "411bae23-07ee-11ea-9a01-df44e37d4301",
      value: "411bae23-07ee-11ea-9a01-df44e37d4301",
      text: "Nova Scotia, Technical Univ"
    },
    {
      key: "411bd546-07ee-11ea-9a02-77e3f4d9376b",
      value: "411bd546-07ee-11ea-9a02-77e3f4d9376b",
      text: "New Brunswick, University of"
    },
    {
      key: "411bd547-07ee-11ea-9a03-7704146abe2f",
      value: "411bd547-07ee-11ea-9a03-7704146abe2f",
      text: "Saint John Campus, U.N.B."
    },
    {
      key: "411bd548-07ee-11ea-9a04-67b8fdb814df",
      value: "411bd548-07ee-11ea-9a04-67b8fdb814df",
      text: "Prince Edward Island, Univ"
    },
    {
      key: "411bfc1a-07ee-11ea-9a05-87c88c0f5859",
      value: "411bfc1a-07ee-11ea-9a05-87c88c0f5859",
      text: "Saint Thomas University"
    },
    {
      key: "411bfc1b-07ee-11ea-9a06-c78e6cfea45c",
      value: "411bfc1b-07ee-11ea-9a06-c78e6cfea45c",
      text: "Atlantic School of Theology"
    },
    {
      key: "411bfc1c-07ee-11ea-9a07-637616436013",
      value: "411bfc1c-07ee-11ea-9a07-637616436013",
      text: "Bishop's University"
    },
    {
      key: "411c2302-07ee-11ea-9a08-876b370a725e",
      value: "411c2302-07ee-11ea-9a08-876b370a725e",
      text: "Sir George Williams University"
    },
    {
      key: "411c2303-07ee-11ea-9a09-eb1c1be878b5",
      value: "411c2303-07ee-11ea-9a09-eb1c1be878b5",
      text: "Concordia University"
    },
    {
      key: "411c49fe-07ee-11ea-9a0a-cbe0529f6a9d",
      value: "411c49fe-07ee-11ea-9a0a-cbe0529f6a9d",
      text: "King's College, University of"
    },
    {
      key: "411c49ff-07ee-11ea-9a0b-d792ca26e76a",
      value: "411c49ff-07ee-11ea-9a0b-d792ca26e76a",
      text: "École de Hautes études comm"
    },
    {
      key: "411c4a00-07ee-11ea-9a0c-c305b8fd66bf",
      value: "411c4a00-07ee-11ea-9a0c-c305b8fd66bf",
      text: "Éc.nat.admin. publ.-Chicoutimi"
    },
    {
      key: "411c70f0-07ee-11ea-9a0d-73507d595a92",
      value: "411c70f0-07ee-11ea-9a0d-73507d595a92",
      text: "Éc.nat. admin. publ. - Hull"
    },
    {
      key: "411c70f1-07ee-11ea-9a0e-0f169e73cec0",
      value: "411c70f1-07ee-11ea-9a0e-0f169e73cec0",
      text: "Éc.nat. admin. publ.- Montréal"
    },
    {
      key: "411c70f2-07ee-11ea-9a0f-e7601b97a8af",
      value: "411c70f2-07ee-11ea-9a0f-e7601b97a8af",
      text: "Éc.nat. admin. publ. - Québec"
    },
    {
      key: "411c97ec-07ee-11ea-9a10-6fbf69217282",
      value: "411c97ec-07ee-11ea-9a10-6fbf69217282",
      text: "École Polytechnique - Montréal"
    },
    {
      key: "411c97ed-07ee-11ea-9a11-67b226621cd3",
      value: "411c97ed-07ee-11ea-9a11-67b226621cd3",
      text: "École - technologie supérieure"
    },
    {
      key: "411c97ee-07ee-11ea-9a12-430aabc7d826",
      value: "411c97ee-07ee-11ea-9a12-430aabc7d826",
      text: "Laval, Université"
    },
    {
      key: "411cbee8-07ee-11ea-9a13-777ea6808c6a",
      value: "411cbee8-07ee-11ea-9a13-777ea6808c6a",
      text: "MacDonald Campus (McGill U.)"
    },
    {
      key: "411cbee9-07ee-11ea-9a14-cbad2cd022f6",
      value: "411cbee9-07ee-11ea-9a14-cbad2cd022f6",
      text: "McGill, University of"
    },
    {
      key: "411ce5d0-07ee-11ea-9a15-93a229dc126a",
      value: "411ce5d0-07ee-11ea-9a15-93a229dc126a",
      text: "Montréal, Université de"
    },
    {
      key: "411ce5d1-07ee-11ea-9a16-cf12a88363ce",
      value: "411ce5d1-07ee-11ea-9a16-cf12a88363ce",
      text: "Sherbrooke, Université de"
    },
    {
      key: "411ce5d2-07ee-11ea-9a17-9792eebe3cc7",
      value: "411ce5d2-07ee-11ea-9a17-9792eebe3cc7",
      text: "Québec Univ, Chicoutimi"
    },
    {
      key: "411d0ce0-07ee-11ea-9a18-07300ef6d4a4",
      value: "411d0ce0-07ee-11ea-9a18-07300ef6d4a4",
      text: "Québec, Univ. - Outaouais"
    },
    {
      key: "411d0ce1-07ee-11ea-9a19-ab44888a1f85",
      value: "411d0ce1-07ee-11ea-9a19-ab44888a1f85",
      text: "Québec Univ., Montréal"
    },
    {
      key: "411d0ce2-07ee-11ea-9a1a-6b792fa7d1fd",
      value: "411d0ce2-07ee-11ea-9a1a-6b792fa7d1fd",
      text: "Québec Univ., Rimouski"
    },
    {
      key: "411d33be-07ee-11ea-9a1b-7333d14508e4",
      value: "411d33be-07ee-11ea-9a1b-7333d14508e4",
      text: "Québec Univ, Rouyn"
    },
    {
      key: "411d33bf-07ee-11ea-9a1c-f7d7afda2626",
      value: "411d33bf-07ee-11ea-9a1c-f7d7afda2626",
      text: "Québec Univ, Trois-Rivières"
    },
    {
      key: "411d33c0-07ee-11ea-9a1d-1bdb0cbe3509",
      value: "411d33c0-07ee-11ea-9a1d-1bdb0cbe3509",
      text: "Atlantic Veterinary College"
    },
    {
      key: "411d5ab0-07ee-11ea-9a1e-87b7348943bb",
      value: "411d5ab0-07ee-11ea-9a1e-87b7348943bb",
      text: "Saint-Paul University"
    },
    {
      key: "411d5ab1-07ee-11ea-9a1f-2b0c6c846f6f",
      value: "411d5ab1-07ee-11ea-9a1f-2b0c6c846f6f",
      text: "Algoma University College"
    },
    {
      key: "411d81ac-07ee-11ea-9a20-bbaeacdcf000",
      value: "411d81ac-07ee-11ea-9a20-bbaeacdcf000",
      text: "Brock University"
    },
    {
      key: "411d81ad-07ee-11ea-9a21-9f3e85cd6ee8",
      value: "411d81ad-07ee-11ea-9a21-9f3e85cd6ee8",
      text: "Carleton University"
    },
    {
      key: "411d81ae-07ee-11ea-9a22-8b2bd78e3e5f",
      value: "411d81ae-07ee-11ea-9a22-8b2bd78e3e5f",
      text: "Guelph, University of"
    },
    {
      key: "411da89e-07ee-11ea-9a23-177b0381e11e",
      value: "411da89e-07ee-11ea-9a23-177b0381e11e",
      text: "Hearst - Collège universitaire"
    },
    {
      key: "411da89f-07ee-11ea-9a24-7f3ebe69848e",
      value: "411da89f-07ee-11ea-9a24-7f3ebe69848e",
      text: "Lakehead University"
    },
    {
      key: "411da8a0-07ee-11ea-9a25-93c0c4ceea33",
      value: "411da8a0-07ee-11ea-9a25-93c0c4ceea33",
      text: "Laurentian University"
    },
    {
      key: "411dcf9a-07ee-11ea-9a26-0b4b890288c6",
      value: "411dcf9a-07ee-11ea-9a26-0b4b890288c6",
      text: "McMaster University"
    },
    {
      key: "411dcf9b-07ee-11ea-9a27-5f103b1dc99a",
      value: "411dcf9b-07ee-11ea-9a27-5f103b1dc99a",
      text: "Nipissing University"
    },
    {
      key: "411df68c-07ee-11ea-9a28-af2c8c0f5c46",
      value: "411df68c-07ee-11ea-9a28-af2c8c0f5c46",
      text: "Ottawa, University of"
    },
    {
      key: "411df68d-07ee-11ea-9a29-076034bc9624",
      value: "411df68d-07ee-11ea-9a29-076034bc9624",
      text: "Queen's University"
    },
    {
      key: "411df68e-07ee-11ea-9a2a-abc72eaabf23",
      value: "411df68e-07ee-11ea-9a2a-abc72eaabf23",
      text: "Royal Military College Canada"
    },
    {
      key: "411e1d7e-07ee-11ea-9a2b-733517e53b36",
      value: "411e1d7e-07ee-11ea-9a2b-733517e53b36",
      text: "Ryerson University"
    },
    {
      key: "411e1d7f-07ee-11ea-9a2c-6fbfdb9a7c5c",
      value: "411e1d7f-07ee-11ea-9a2c-6fbfdb9a7c5c",
      text: "Toronto, University of"
    },
    {
      key: "411e1d80-07ee-11ea-9a2d-afc2b33c2de4",
      value: "411e1d80-07ee-11ea-9a2d-afc2b33c2de4",
      text: "Trent University"
    },
    {
      key: "411e4484-07ee-11ea-9a2e-4f24414b3cae",
      value: "411e4484-07ee-11ea-9a2e-4f24414b3cae",
      text: "Waterloo, University of"
    },
    {
      key: "411e4485-07ee-11ea-9a2f-33225ce5fded",
      value: "411e4485-07ee-11ea-9a2f-33225ce5fded",
      text: "Western Ontario, University of"
    },
    {
      key: "411e4486-07ee-11ea-9a30-4f9047af5bc5",
      value: "411e4486-07ee-11ea-9a30-4f9047af5bc5",
      text: "Wilfrid Laurier University"
    },
    {
      key: "411e6a36-07ee-11ea-9a31-2f86d281fd39",
      value: "411e6a36-07ee-11ea-9a31-2f86d281fd39",
      text: "Windsor, University of"
    },
    {
      key: "411e6a37-07ee-11ea-9a32-7326e69cc512",
      value: "411e6a37-07ee-11ea-9a32-7326e69cc512",
      text: "York University"
    },
    {
      key: "411e925e-07ee-11ea-9a33-4f619736fa16",
      value: "411e925e-07ee-11ea-9a33-4f619736fa16",
      text: "Sudbury, University of"
    },
    {
      key: "411e925f-07ee-11ea-9a34-d7cd1f7a57b9",
      value: "411e925f-07ee-11ea-9a34-d7cd1f7a57b9",
      text: "Brandon University"
    },
    {
      key: "411e9260-07ee-11ea-9a35-bb58d1c1b8d0",
      value: "411e9260-07ee-11ea-9a35-bb58d1c1b8d0",
      text: "Saint-Boniface, Col. univ."
    },
    {
      key: "411eb95a-07ee-11ea-9a36-4f4e864451bd",
      value: "411eb95a-07ee-11ea-9a36-4f4e864451bd",
      text: "Manitoba, University of"
    },
    {
      key: "411eb95b-07ee-11ea-9a37-2f0ef624b3d1",
      value: "411eb95b-07ee-11ea-9a37-2f0ef624b3d1",
      text: "Winnipeg, University of"
    },
    {
      key: "411eb95c-07ee-11ea-9a38-7b96606c706c",
      value: "411eb95c-07ee-11ea-9a38-7b96606c706c",
      text: "Atlantic Baptist Col. Moncton"
    },
    {
      key: "411edf0c-07ee-11ea-9a39-430b67f1f5e6",
      value: "411edf0c-07ee-11ea-9a39-430b67f1f5e6",
      text: "Regina, University of"
    },
    {
      key: "411edf0d-07ee-11ea-9a3a-47f1be30eccd",
      value: "411edf0d-07ee-11ea-9a3a-47f1be30eccd",
      text: "Saskatchewan, University of"
    },
    {
      key: "411f0612-07ee-11ea-9a3b-0b1cf6dd33fa",
      value: "411f0612-07ee-11ea-9a3b-0b1cf6dd33fa",
      text: "Sask. Indian Federated Col."
    },
    {
      key: "411f0613-07ee-11ea-9a3c-03c5d6c5d112",
      value: "411f0613-07ee-11ea-9a3c-03c5d6c5d112",
      text: "Alberta, University of"
    },
    {
      key: "411f0614-07ee-11ea-9a3d-9faacbd90a83",
      value: "411f0614-07ee-11ea-9a3d-9faacbd90a83",
      text: "Athabasca University"
    },
    {
      key: "411f2e3a-07ee-11ea-9a3e-c71caa641667",
      value: "411f2e3a-07ee-11ea-9a3e-c71caa641667",
      text: "Calgary, University of"
    },
    {
      key: "411f2e3b-07ee-11ea-9a3f-57d44a147cc6",
      value: "411f2e3b-07ee-11ea-9a3f-57d44a147cc6",
      text: "Lethbridge, University of"
    },
    {
      key: "411f2e3c-07ee-11ea-9a40-7fee7b6fd59a",
      value: "411f2e3c-07ee-11ea-9a40-7fee7b6fd59a",
      text: "Notre-Dame U. Nelson B.C."
    },
    {
      key: "411f552c-07ee-11ea-9a41-1fb2813d637a",
      value: "411f552c-07ee-11ea-9a41-1fb2813d637a",
      text: "British Columbia,University of"
    },
    {
      key: "411f552d-07ee-11ea-9a42-978fe2c0fc34",
      value: "411f552d-07ee-11ea-9a42-978fe2c0fc34",
      text: "Simon Fraser University"
    },
    {
      key: "411f7c50-07ee-11ea-9a43-6381168ea01c",
      value: "411f7c50-07ee-11ea-9a43-6381168ea01c",
      text: "Victoria, University of"
    },
    {
      key: "411f7c51-07ee-11ea-9a44-430e6c5c76d2",
      value: "411f7c51-07ee-11ea-9a44-430e6c5c76d2",
      text: "Royal Roads Military College"
    },
    {
      key: "411f7c52-07ee-11ea-9a45-8bac164fa729",
      value: "411f7c52-07ee-11ea-9a45-8bac164fa729",
      text: "Trinity Western University"
    },
    {
      key: "411fa32e-07ee-11ea-9a46-a79e81db1f76",
      value: "411fa32e-07ee-11ea-9a46-a79e81db1f76",
      text: "Northern British Columbia U."
    },
    {
      key: "411fa32f-07ee-11ea-9a47-e72485e73322",
      value: "411fa32f-07ee-11ea-9a47-e72485e73322",
      text: "Royal Roads University"
    },
    {
      key: "411fa330-07ee-11ea-9a48-679be997f296",
      value: "411fa330-07ee-11ea-9a48-679be997f296",
      text: "Other Canadian University"
    },
    {
      key: "411fca0c-07ee-11ea-9a49-632e9fd514ca",
      value: "411fca0c-07ee-11ea-9a49-632e9fd514ca",
      text: "University Outside Canada"
    },
    {
      key: "411ff0fe-07ee-11ea-9a4a-37c7eaa571e0",
      value: "411ff0fe-07ee-11ea-9a4a-37c7eaa571e0",
      text: "Canadian Coast Guard College"
    },
    {
      key: "411ff0ff-07ee-11ea-9a4b-9bb2d62b2e9c",
      value: "411ff0ff-07ee-11ea-9a4b-9bb2d62b2e9c",
      text: "Fisheries & Marine Inst."
    },
    {
      key: "411ff100-07ee-11ea-9a4c-8ff21017fc51",
      value: "411ff100-07ee-11ea-9a4c-8ff21017fc51",
      text: "College of the North Atlantic"
    },
    {
      key: "41201822-07ee-11ea-9a4d-ab05ecc5b2f4",
      value: "41201822-07ee-11ea-9a4d-ab05ecc5b2f4",
      text: "Holland College"
    },
    {
      key: "41201823-07ee-11ea-9a4e-47c2508e65d6",
      value: "41201823-07ee-11ea-9a4e-47c2508e65d6",
      text: "Maritime Forest Ranger School"
    },
    {
      key: "41203f00-07ee-11ea-9a4f-83c488b3ec9d",
      value: "41203f00-07ee-11ea-9a4f-83c488b3ec9d",
      text: "Community Colleges - Bathurst"
    },
    {
      key: "41203f01-07ee-11ea-9a50-fbacbf3d75aa",
      value: "41203f01-07ee-11ea-9a50-fbacbf3d75aa",
      text: "Nova Scotia Agricultural Col."
    },
    {
      key: "41203f02-07ee-11ea-9a51-e7e1d635b4cb",
      value: "41203f02-07ee-11ea-9a51-e7e1d635b4cb",
      text: "Institute of Technology Campus"
    },
    {
      key: "412065de-07ee-11ea-9a52-97ea04cbbb6f",
      value: "412065de-07ee-11ea-9a52-97ea04cbbb6f",
      text: "Nova Scotia Survey Institute"
    },
    {
      key: "412065df-07ee-11ea-9a53-7b7bb68c4f99",
      value: "412065df-07ee-11ea-9a53-7b7bb68c4f99",
      text: "Nova Scotia Teachers College"
    },
    {
      key: "412065e0-07ee-11ea-9a54-a3d64ebb4700",
      value: "412065e0-07ee-11ea-9a54-a3d64ebb4700",
      text: "Atlantic Veterinary Col. (PEI)"
    },
    {
      key: "41208cda-07ee-11ea-9a55-7b535f46ac89",
      value: "41208cda-07ee-11ea-9a55-7b535f46ac89",
      text: "Annapolis Campus, NS Cmnty Col"
    },
    {
      key: "41208cdb-07ee-11ea-9a56-cf183449e87f",
      value: "41208cdb-07ee-11ea-9a56-cf183449e87f",
      text: "Burridge Campus-Yarmouth"
    },
    {
      key: "4120b3e0-07ee-11ea-9a57-23e35d138416",
      value: "4120b3e0-07ee-11ea-9a57-23e35d138416",
      text: "Cape Breton Adult Vocat'l Trng"
    },
    {
      key: "4120b3e1-07ee-11ea-9a58-f3f914cb8c85",
      value: "4120b3e1-07ee-11ea-9a58-f3f914cb8c85",
      text: "Geogr. Sci. Col.-Lawrencetown"
    },
    {
      key: "4120b3e2-07ee-11ea-9a59-7311ebc2fb89",
      value: "4120b3e2-07ee-11ea-9a59-7311ebc2fb89",
      text: "Cumberland Campus,NS Cmnty Col"
    },
    {
      key: "4120dac8-07ee-11ea-9a5a-aba49c81ceea",
      value: "4120dac8-07ee-11ea-9a5a-aba49c81ceea",
      text: "Dartmouth Adult Vocat'l Trng"
    },
    {
      key: "4120dac9-07ee-11ea-9a5b-e756663af920",
      value: "4120dac9-07ee-11ea-9a5b-e756663af920",
      text: "Halifax Campus, NS Cmnty Col."
    },
    {
      key: "4120daca-07ee-11ea-9a5c-4ba97fde3bee",
      value: "4120daca-07ee-11ea-9a5c-4ba97fde3bee",
      text: "Hants Campus, NS Cmnty Col."
    },
    {
      key: "412101d8-07ee-11ea-9a5d-2704d4e1f19d",
      value: "412101d8-07ee-11ea-9a5d-2704d4e1f19d",
      text: "I.W. Akerley Campus-Dartmouth"
    },
    {
      key: "412101d9-07ee-11ea-9a5e-d734a74506ea",
      value: "412101d9-07ee-11ea-9a5e-d734a74506ea",
      text: "Lunenberg Campus-Bridgewater"
    },
    {
      key: "412128ac-07ee-11ea-9a5f-2b6d030eb824",
      value: "412128ac-07ee-11ea-9a5f-2b6d030eb824",
      text: "Nautical Inst. Campus, NS C.C."
    },
    {
      key: "412128ad-07ee-11ea-9a60-6b84e2506626",
      value: "412128ad-07ee-11ea-9a60-6b84e2506626",
      text: "Pictou Campus, NS Cmnty Col."
    },
    {
      key: "412128ae-07ee-11ea-9a61-efd0b620262a",
      value: "412128ae-07ee-11ea-9a61-efd0b620262a",
      text: "Schelburne Campus,NS Cmnty Col"
    },
    {
      key: "41214fbc-07ee-11ea-9a62-dfbd74446cf8",
      value: "41214fbc-07ee-11ea-9a62-dfbd74446cf8",
      text: "Strait Campus, NS Cmnty Col."
    },
    {
      key: "41214fbd-07ee-11ea-9a63-23e27abc01f4",
      value: "41214fbd-07ee-11ea-9a63-23e27abc01f4",
      text: "Sydney Campus-Sydney"
    },
    {
      key: "41214fbe-07ee-11ea-9a64-13c690afc7fe",
      value: "41214fbe-07ee-11ea-9a64-13c690afc7fe",
      text: "Cobetc-Truro"
    },
    {
      key: "41217690-07ee-11ea-9a65-1b4e9b31a577",
      value: "41217690-07ee-11ea-9a65-1b4e9b31a577",
      text: "Kingstec-Kentville"
    },
    {
      key: "41217691-07ee-11ea-9a66-a7a2fb172a86",
      value: "41217691-07ee-11ea-9a66-a7a2fb172a86",
      text: "Memorial Composite-SydneyMines"
    },
    {
      key: "41217692-07ee-11ea-9a67-b78b71c517dd",
      value: "41217692-07ee-11ea-9a67-b78b71c517dd",
      text: "Truro Campus (Community Col.)"
    },
    {
      key: "41219d82-07ee-11ea-9a68-133cc1cf82e9",
      value: "41219d82-07ee-11ea-9a68-133cc1cf82e9",
      text: "Colchester Campus"
    },
    {
      key: "41219d83-07ee-11ea-9a69-8b2cb9dd97a4",
      value: "41219d83-07ee-11ea-9a69-8b2cb9dd97a4",
      text: "Eastern Cmnt Col.(Clarenville)"
    },
    {
      key: "4121c488-07ee-11ea-9a6a-3bcbe11f3739",
      value: "4121c488-07ee-11ea-9a6a-3bcbe11f3739",
      text: "Westviking Col. (Stephenville)"
    },
    {
      key: "4121c489-07ee-11ea-9a6b-57b0c6365c5f",
      value: "4121c489-07ee-11ea-9a6b-57b0c6365c5f",
      text: "Labrador College"
    },
    {
      key: "4121c48a-07ee-11ea-9a6c-7346dd5d5bad",
      value: "4121c48a-07ee-11ea-9a6c-7346dd5d5bad",
      text: "Central Applied Arts,Tech&C.Ed"
    },
    {
      key: "4121eb98-07ee-11ea-9a6d-33560cb5ab9e",
      value: "4121eb98-07ee-11ea-9a6d-33560cb5ab9e",
      text: "Baie-Comeau, Collège de"
    },
    {
      key: "4121eb99-07ee-11ea-9a6e-1ba3bab7e6f2",
      value: "4121eb99-07ee-11ea-9a6e-1ba3bab7e6f2",
      text: "Côte-Nord (Hauterive), Col. de"
    },
    {
      key: "4121eb9a-07ee-11ea-9a6f-1b52b088b85c",
      value: "4121eb9a-07ee-11ea-9a6f-1b52b088b85c",
      text: "Côte-Nord(Manicouagan),Col. de"
    },
    {
      key: "41221280-07ee-11ea-9a70-17b0b5b44190",
      value: "41221280-07ee-11ea-9a70-17b0b5b44190",
      text: "Côte-Nord (Mingan), Collège de"
    },
    {
      key: "41221281-07ee-11ea-9a71-539378c6dd6f",
      value: "41221281-07ee-11ea-9a71-539378c6dd6f",
      text: "Sept-Îles, Collège de"
    },
    {
      key: "41221282-07ee-11ea-9a72-4fa6e1503327",
      value: "41221282-07ee-11ea-9a72-4fa6e1503327",
      text: "François-Xavier-Garneau, Col."
    },
    {
      key: "41223972-07ee-11ea-9a73-bb7edfb13d1f",
      value: "41223972-07ee-11ea-9a73-bb7edfb13d1f",
      text: "Gaspésie et des Îles, Col. de"
    },
    {
      key: "41223973-07ee-11ea-9a74-e3793a0157c1",
      value: "41223973-07ee-11ea-9a74-e3793a0157c1",
      text: "Institut maritime du Québec"
    },
    {
      key: "4122605a-07ee-11ea-9a75-2775fee70eff",
      value: "4122605a-07ee-11ea-9a75-2775fee70eff",
      text: "Pocatière, Collège de la"
    },
    {
      key: "4122605b-07ee-11ea-9a76-d7da193b9889",
      value: "4122605b-07ee-11ea-9a76-d7da193b9889",
      text: "Inst. tech. agro-ali Pocatière"
    },
    {
      key: "4122605c-07ee-11ea-9a77-3b00f634f689",
      value: "4122605c-07ee-11ea-9a77-3b00f634f689",
      text: "Lévis-Lauzon, Collège"
    },
    {
      key: "41228788-07ee-11ea-9a78-c346ac03abf8",
      value: "41228788-07ee-11ea-9a78-c346ac03abf8",
      text: "Limoilou, Collège de"
    },
    {
      key: "41228789-07ee-11ea-9a79-ef155d1e4d6b",
      value: "41228789-07ee-11ea-9a79-ef155d1e4d6b",
      text: "Matane, Collège de"
    },
    {
      key: "4122878a-07ee-11ea-9a7a-573f605f88c6",
      value: "4122878a-07ee-11ea-9a7a-573f605f88c6",
      text: "Rimouski, Collège de"
    },
    {
      key: "4122ae70-07ee-11ea-9a7b-f324b0b449d2",
      value: "4122ae70-07ee-11ea-9a7b-f324b0b449d2",
      text: "Rivière-du Loup, Collège de"
    },
    {
      key: "4122ae71-07ee-11ea-9a7c-4b959e5992e3",
      value: "4122ae71-07ee-11ea-9a7c-4b959e5992e3",
      text: "Sainte-Foy, Collège de"
    },
    {
      key: "4122ae72-07ee-11ea-9a7d-bb90010e0960",
      value: "4122ae72-07ee-11ea-9a7d-bb90010e0960",
      text: "Alma, Collège d'"
    },
    {
      key: "4122d54e-07ee-11ea-9a7e-5f055168ddf9",
      value: "4122d54e-07ee-11ea-9a7e-5f055168ddf9",
      text: "Chicoutimi, Collège de"
    },
    {
      key: "4122d54f-07ee-11ea-9a7f-1763dba54edf",
      value: "4122d54f-07ee-11ea-9a7f-1763dba54edf",
      text: "Jonquière, Collège de"
    },
    {
      key: "4122fc40-07ee-11ea-9a80-5fb35b398e33",
      value: "4122fc40-07ee-11ea-9a80-5fb35b398e33",
      text: "Saint-Félicien, Collège de"
    },
    {
      key: "4122fc41-07ee-11ea-9a81-f3d829f3760a",
      value: "4122fc41-07ee-11ea-9a81-f3d829f3760a",
      text: "Shawinigan, Collège de"
    },
    {
      key: "4122fc42-07ee-11ea-9a82-bbc2b1b93377",
      value: "4122fc42-07ee-11ea-9a82-bbc2b1b93377",
      text: "Lauzon, Col. de Technologie de"
    },
    {
      key: "4123236e-07ee-11ea-9a83-03b81bb0660f",
      value: "4123236e-07ee-11ea-9a83-03b81bb0660f",
      text: "Région Amiante(Thetford Mines)"
    },
    {
      key: "4123236f-07ee-11ea-9a84-67e06b4abeb1",
      value: "4123236f-07ee-11ea-9a84-67e06b4abeb1",
      text: "Trois-Rivières, Collège de"
    },
    {
      key: "41232370-07ee-11ea-9a85-5bb45584ad0c",
      value: "41232370-07ee-11ea-9a85-5bb45584ad0c",
      text: "Victoriaville, Collège de"
    },
    {
      key: "41234a10-07ee-11ea-9a86-af1d77cdd5e7",
      value: "41234a10-07ee-11ea-9a86-af1d77cdd5e7",
      text: "Ahuntsic, Collège"
    },
    {
      key: "41234a11-07ee-11ea-9a87-0f9b086faab1",
      value: "41234a11-07ee-11ea-9a87-0f9b086faab1",
      text: "André Laurendeau, Collège"
    },
    {
      key: "41237116-07ee-11ea-9a88-a3e3bad9b614",
      value: "41237116-07ee-11ea-9a88-a3e3bad9b614",
      text: "Bois-de-Boulogne, Collège"
    },
    {
      key: "41237117-07ee-11ea-9a89-c728c23a62ce",
      value: "41237117-07ee-11ea-9a89-c728c23a62ce",
      text: "Drummonville, Collège de"
    },
    {
      key: "41237118-07ee-11ea-9a8a-cbe5feae7737",
      value: "41237118-07ee-11ea-9a8a-cbe5feae7737",
      text: "Saint-Hyacinthe, Collège de"
    },
    {
      key: "412397fe-07ee-11ea-9a8b-3fefe323abb2",
      value: "412397fe-07ee-11ea-9a8b-3fefe323abb2",
      text: "Tracy-Sorel, Collège"
    },
    {
      key: "412397ff-07ee-11ea-9a8c-1f226bb41a80",
      value: "412397ff-07ee-11ea-9a8c-1f226bb41a80",
      text: "Champlain Col. - Lennoxville"
    },
    {
      key: "41239800-07ee-11ea-9a8d-effc1106fffa",
      value: "41239800-07ee-11ea-9a8d-effc1106fffa",
      text: "Champlain Col. - St-Lambert"
    },
    {
      key: "4123bf04-07ee-11ea-9a8e-bfaca04b125b",
      value: "4123bf04-07ee-11ea-9a8e-bfaca04b125b",
      text: "Champlain Col. - St-Lawrence"
    },
    {
      key: "4123bf05-07ee-11ea-9a8f-1fcc4bfa0572",
      value: "4123bf05-07ee-11ea-9a8f-1fcc4bfa0572",
      text: "Granby-Haute-Yamaska, Col. de"
    },
    {
      key: "4123bf06-07ee-11ea-9a90-738d1a6a391d",
      value: "4123bf06-07ee-11ea-9a90-738d1a6a391d",
      text: "Private colleges"
    },
    {
      key: "4123e614-07ee-11ea-9a91-73c47dd58075",
      value: "4123e614-07ee-11ea-9a91-73c47dd58075",
      text: "Dawson College"
    },
    {
      key: "4123e615-07ee-11ea-9a92-1fd37f885328",
      value: "4123e615-07ee-11ea-9a92-1fd37f885328",
      text: "Édouard-Montpetit, Collège"
    },
    {
      key: "41240cde-07ee-11ea-9a93-c71794263f75",
      value: "41240cde-07ee-11ea-9a93-c71794263f75",
      text: "Outaouais, Collège de l'"
    },
    {
      key: "41240cdf-07ee-11ea-9a94-afba159eca16",
      value: "41240cdf-07ee-11ea-9a94-afba159eca16",
      text: "Maisonneuve, Collège"
    },
    {
      key: "41240ce0-07ee-11ea-9a95-4b745e67dc27",
      value: "41240ce0-07ee-11ea-9a95-4b745e67dc27",
      text: "John Abbott College"
    },
    {
      key: "41243416-07ee-11ea-9a96-37650113f37b",
      value: "41243416-07ee-11ea-9a96-37650113f37b",
      text: "Joliette-De Lanaudière, Col."
    },
    {
      key: "41243417-07ee-11ea-9a97-fbe9ad252bb3",
      value: "41243417-07ee-11ea-9a97-fbe9ad252bb3",
      text: "Lionel-Groulx, Collège"
    },
    {
      key: "41243418-07ee-11ea-9a98-5761cea0324b",
      value: "41243418-07ee-11ea-9a98-5761cea0324b",
      text: "Montmorency, Collège"
    },
    {
      key: "4124598c-07ee-11ea-9a99-5f659c6d4354",
      value: "4124598c-07ee-11ea-9a99-5f659c6d4354",
      text: "Rosemont, Collège"
    },
    {
      key: "4124598d-07ee-11ea-9a9a-036da55378fe",
      value: "4124598d-07ee-11ea-9a9a-036da55378fe",
      text: "Abitibi-Témiscamingue, Col. de"
    },
    {
      key: "412481c8-07ee-11ea-9a9b-d74f5fab7065",
      value: "412481c8-07ee-11ea-9a9b-d74f5fab7065",
      text: "Inst.Tech.Agro-ali StHyacinthe"
    },
    {
      key: "412481c9-07ee-11ea-9a9c-0bf0b8c370d3",
      value: "412481c9-07ee-11ea-9a9c-0bf0b8c370d3",
      text: "Saint-Jean-Sur-Richelieu, Col."
    },
    {
      key: "412481ca-07ee-11ea-9a9d-c34272ee5005",
      value: "412481ca-07ee-11ea-9a9d-c34272ee5005",
      text: "Saint-Jérôme, Collège de"
    },
    {
      key: "4124a900-07ee-11ea-9a9e-5fd74f927587",
      value: "4124a900-07ee-11ea-9a9e-5fd74f927587",
      text: "Saint-Laurent, Collège de"
    },
    {
      key: "4124a901-07ee-11ea-9a9f-4f585cc0cc9c",
      value: "4124a901-07ee-11ea-9a9f-4f585cc0cc9c",
      text: "Valleyfield, Collège de"
    },
    {
      key: "4124a902-07ee-11ea-9aa0-07a97441aa89",
      value: "4124a902-07ee-11ea-9aa0-07a97441aa89",
      text: "Sherbrooke, Collège de"
    },
    {
      key: "4124ce6c-07ee-11ea-9aa1-0ba6970cb464",
      value: "4124ce6c-07ee-11ea-9aa1-0ba6970cb464",
      text: "Tracy, Col. de Technologie de"
    },
    {
      key: "4124ce6d-07ee-11ea-9aa2-1fbf84b0ea86",
      value: "4124ce6d-07ee-11ea-9aa2-1fbf84b0ea86",
      text: "Inst. tourisme/d'hôtellerie QC"
    },
    {
      key: "4124f568-07ee-11ea-9aa3-fbeb74cef0fe",
      value: "4124f568-07ee-11ea-9aa3-fbeb74cef0fe",
      text: "Vanier College"
    },
    {
      key: "4124f569-07ee-11ea-9aa4-cfd94cd639f8",
      value: "4124f569-07ee-11ea-9aa4-cfd94cd639f8",
      text: "Vieux-Montréal, Collège du"
    },
    {
      key: "4124f56a-07ee-11ea-9aa5-c74b341e99b5",
      value: "4124f56a-07ee-11ea-9aa5-c74b341e99b5",
      text: "Académie Centenniale"
    },
    {
      key: "41251dc2-07ee-11ea-9aa6-33ad84e674c3",
      value: "41251dc2-07ee-11ea-9aa6-33ad84e674c3",
      text: "André-Grasset, Collège"
    },
    {
      key: "41251dc3-07ee-11ea-9aa7-2b74a1adc2b4",
      value: "41251dc3-07ee-11ea-9aa7-2b74a1adc2b4",
      text: "Bart, Collège"
    },
    {
      key: "41251dc4-07ee-11ea-9aa8-8780e189993c",
      value: "41251dc4-07ee-11ea-9aa8-8780e189993c",
      text: "Beauce-Appalaches, Collège"
    },
    {
      key: "4125448c-07ee-11ea-9aa9-77807bc9a3fa",
      value: "4125448c-07ee-11ea-9aa9-77807bc9a3fa",
      text: "Notre-Dame-de-Foy Campus"
    },
    {
      key: "4125448d-07ee-11ea-9aaa-c7d13300eead",
      value: "4125448d-07ee-11ea-9aaa-c7d13300eead",
      text: "Centre spécialisé pêche (G-R)"
    },
    {
      key: "41256bb0-07ee-11ea-9aab-2f12947f9072",
      value: "41256bb0-07ee-11ea-9aab-2f12947f9072",
      text: "Affaires Ellis Inc.,Collège d'"
    },
    {
      key: "41256bb1-07ee-11ea-9aac-5370210fc2f3",
      value: "41256bb1-07ee-11ea-9aac-5370210fc2f3",
      text: "Lévis, Collège de"
    },
    {
      key: "4125913a-07ee-11ea-9aad-cf35f9832cdb",
      value: "4125913a-07ee-11ea-9aad-cf35f9832cdb",
      text: "Secrétariat Notre-Dame, Col."
    },
    {
      key: "4125913b-07ee-11ea-9aae-6b7517b95b2a",
      value: "4125913b-07ee-11ea-9aae-6b7517b95b2a",
      text: "Français, Collège"
    },
    {
      key: "4125913c-07ee-11ea-9aaf-4b93566c1ef6",
      value: "4125913c-07ee-11ea-9aaf-4b93566c1ef6",
      text: "Militaire royal St-Jean, Col."
    },
    {
      key: "4125b93a-07ee-11ea-9ab0-d7a723be9909",
      value: "4125b93a-07ee-11ea-9ab0-d7a723be9909",
      text: "Conserv. de musique Chicoutimi"
    },
    {
      key: "4125b93b-07ee-11ea-9ab1-1b93b085126f",
      value: "4125b93b-07ee-11ea-9ab1-1b93b085126f",
      text: "Conserv. de musique de Hull"
    },
    {
      key: "4125b93c-07ee-11ea-9ab2-eb9014cc3591",
      value: "4125b93c-07ee-11ea-9ab2-eb9014cc3591",
      text: "Conserv. de musique Montréal"
    },
    {
      key: "4125df28-07ee-11ea-9ab3-179b03c9b056",
      value: "4125df28-07ee-11ea-9ab3-179b03c9b056",
      text: "Conserv. de musique de Québec"
    },
    {
      key: "4125df29-07ee-11ea-9ab4-efc9e163c4a8",
      value: "4125df29-07ee-11ea-9ab4-efc9e163c4a8",
      text: "Conserv. de musique Rimouski"
    },
    {
      key: "41260610-07ee-11ea-9ab5-db2f28837f5e",
      value: "41260610-07ee-11ea-9ab5-db2f28837f5e",
      text: "Conserv. de musique Trois-Riv."
    },
    {
      key: "41260611-07ee-11ea-9ab6-c799cc818b76",
      value: "41260611-07ee-11ea-9ab6-c799cc818b76",
      text: "Conserv. de musique Val-d'or"
    },
    {
      key: "41260612-07ee-11ea-9ab7-533629148c78",
      value: "41260612-07ee-11ea-9ab7-533629148c78",
      text: "Conservatoire Lasalle"
    },
    {
      key: "41262d0c-07ee-11ea-9ab8-bba985e12184",
      value: "41262d0c-07ee-11ea-9ab8-bba985e12184",
      text: "Commerciale du Cap, École"
    },
    {
      key: "41262d0d-07ee-11ea-9ab9-37c6ef0bb139",
      value: "41262d0d-07ee-11ea-9ab9-37c6ef0bb139",
      text: "Vincent-d'Indy, École"
    },
    {
      key: "41265408-07ee-11ea-9aba-5b6798f9cab0",
      value: "41265408-07ee-11ea-9aba-5b6798f9cab0",
      text: "Heritage College"
    },
    {
      key: "41267afa-07ee-11ea-9abb-635c4d202118",
      value: "41267afa-07ee-11ea-9abb-635c4d202118",
      text: "Institut Teccart"
    },
    {
      key: "4126a1f6-07ee-11ea-9abc-fb6dfcaf7add",
      value: "4126a1f6-07ee-11ea-9abc-fb6dfcaf7add",
      text: "Jean-de-Brébeuf, Collège"
    },
    {
      key: "4126c8e8-07ee-11ea-9abd-7f346389a0f1",
      value: "4126c8e8-07ee-11ea-9abd-7f346389a0f1",
      text: "L'Assomption, Collège de"
    },
    {
      key: "412716cc-07ee-11ea-9abe-ef514e79a5e2",
      value: "412716cc-07ee-11ea-9abe-ef514e79a5e2",
      text: "Laflèche, Collège"
    },
    {
      key: "41273dc8-07ee-11ea-9abf-db881cd8a090",
      value: "41273dc8-07ee-11ea-9abf-db881cd8a090",
      text: "LaSalle, Collège"
    },
    {
      key: "412764ba-07ee-11ea-9ac0-fbee8b4291f1",
      value: "412764ba-07ee-11ea-9ac0-fbee8b4291f1",
      text: "Macdonald Campus (McGill)"
    },
    {
      key: "41278bb6-07ee-11ea-9ac1-77a89628defb",
      value: "41278bb6-07ee-11ea-9ac1-77a89628defb",
      text: "Marianopolis College"
    },
    {
      key: "4127b29e-07ee-11ea-9ac2-ab59d81f2edc",
      value: "4127b29e-07ee-11ea-9ac2-ab59d81f2edc",
      text: "Marie-Victorin, Collège"
    },
    {
      key: "4127d99a-07ee-11ea-9ac3-cf7a8774fdd5",
      value: "4127d99a-07ee-11ea-9ac3-cf7a8774fdd5",
      text: "Mérici, Collège"
    },
    {
      key: "4128008c-07ee-11ea-9ac4-b39db8970152",
      value: "4128008c-07ee-11ea-9ac4-b39db8970152",
      text: "Moderne 3-R, Collège"
    },
    {
      key: "4128008d-07ee-11ea-9ac5-dff08923b26f",
      value: "4128008d-07ee-11ea-9ac5-dff08923b26f",
      text: "O'Sullivan de Montréal, Col."
    },
    {
      key: "41282788-07ee-11ea-9ac6-07383122f2c9",
      value: "41282788-07ee-11ea-9ac6-07383122f2c9",
      text: "O'Sullivan de Québec, Collège"
    },
    {
      key: "41284e84-07ee-11ea-9ac7-4bfeffcf0d31",
      value: "41284e84-07ee-11ea-9ac7-4bfeffcf0d31",
      text: "Petit Séminaire de Québec"
    },
    {
      key: "41287576-07ee-11ea-9ac8-23b0ef5b2a51",
      value: "41287576-07ee-11ea-9ac8-23b0ef5b2a51",
      text: "Sherbrooke, Séminaire de"
    },
    {
      key: "41289c5e-07ee-11ea-9ac9-d713365e65b5",
      value: "41289c5e-07ee-11ea-9ac9-d713365e65b5",
      text: "Saint-Augustin, Séminaire"
    },
    {
      key: "41289c5f-07ee-11ea-9aca-b75b9adb7c46",
      value: "41289c5f-07ee-11ea-9aca-b75b9adb7c46",
      text: "Villa Sainte-Marcelline"
    },
    {
      key: "4128c364-07ee-11ea-9acb-e32a8f7b655f",
      value: "4128c364-07ee-11ea-9acb-e32a8f7b655f",
      text: "Québec UNIV, téléuniversité"
    },
    {
      key: "4128ea4c-07ee-11ea-9acc-bf071af61fa7",
      value: "4128ea4c-07ee-11ea-9acc-bf071af61fa7",
      text: "Algoma College"
    },
    {
      key: "4128ea4d-07ee-11ea-9acd-0b9054edb12a",
      value: "4128ea4d-07ee-11ea-9acd-0b9054edb12a",
      text: "Algonquin College"
    },
    {
      key: "41291152-07ee-11ea-9ace-678ae714edc4",
      value: "41291152-07ee-11ea-9ace-678ae714edc4",
      text: "Cambrian College"
    },
    {
      key: "4129383a-07ee-11ea-9acf-c35a513971c9",
      value: "4129383a-07ee-11ea-9acf-c35a513971c9",
      text: "Canadore College"
    },
    {
      key: "4129383b-07ee-11ea-9ad0-439fe5f0566f",
      value: "4129383b-07ee-11ea-9ad0-439fe5f0566f",
      text: "Centennial College"
    },
    {
      key: "41295f40-07ee-11ea-9ad1-1bec0268bb87",
      value: "41295f40-07ee-11ea-9ad1-1bec0268bb87",
      text: "Centralia Col. Agricul. Tech."
    },
    {
      key: "41298628-07ee-11ea-9ad2-1ffb458d580a",
      value: "41298628-07ee-11ea-9ad2-1ffb458d580a",
      text: "Conestoga Applied Arts & Tech."
    },
    {
      key: "41298629-07ee-11ea-9ad3-e7c2029229fb",
      value: "41298629-07ee-11ea-9ad3-e7c2029229fb",
      text: "ConfederationApplied Arts&Tech"
    },
    {
      key: "4129ad1a-07ee-11ea-9ad4-af74eaf83dc4",
      value: "4129ad1a-07ee-11ea-9ad4-af74eaf83dc4",
      text: "Durham Col. Applied Arts&Tech."
    },
    {
      key: "4129d416-07ee-11ea-9ad5-af087d6fd216",
      value: "4129d416-07ee-11ea-9ad5-af087d6fd216",
      text: "Fanshawe Applied Arts & Tech."
    },
    {
      key: "4129d417-07ee-11ea-9ad6-13935ac0e8f1",
      value: "4129d417-07ee-11ea-9ad6-13935ac0e8f1",
      text: "George Brown Applied Arts&Tech"
    },
    {
      key: "4129fb08-07ee-11ea-9ad7-071117d4e488",
      value: "4129fb08-07ee-11ea-9ad7-071117d4e488",
      text: "Georgian Applied Arts & Tech."
    },
    {
      key: "412a21fa-07ee-11ea-9ad8-17bf4fe8109a",
      value: "412a21fa-07ee-11ea-9ad8-17bf4fe8109a",
      text: "Humber Col. Applied Arts &Tech"
    },
    {
      key: "412a21fb-07ee-11ea-9ad9-47d819ec9e19",
      value: "412a21fb-07ee-11ea-9ad9-47d819ec9e19",
      text: "Kemptville Col. Agricult. Tech"
    },
    {
      key: "412a48ec-07ee-11ea-9ada-6743c101b3d5",
      value: "412a48ec-07ee-11ea-9ada-6743c101b3d5",
      text: "Lakehead College"
    },
    {
      key: "412a48ed-07ee-11ea-9adb-778ff62c6884",
      value: "412a48ed-07ee-11ea-9adb-778ff62c6884",
      text: "Lambton College"
    },
    {
      key: "412a6fe8-07ee-11ea-9adc-9f76328538f0",
      value: "412a6fe8-07ee-11ea-9adc-9f76328538f0",
      text: "Loyalist College"
    },
    {
      key: "412a6fe9-07ee-11ea-9add-8fd092e9b404",
      value: "412a6fe9-07ee-11ea-9add-8fd092e9b404",
      text: "Mohawk College"
    },
    {
      key: "412a96da-07ee-11ea-9ade-fffe67fbb987",
      value: "412a96da-07ee-11ea-9ade-fffe67fbb987",
      text: "New Liskeard Col. Agricul.Tech"
    },
    {
      key: "412a96db-07ee-11ea-9adf-fbe55de8e0d2",
      value: "412a96db-07ee-11ea-9adf-fbe55de8e0d2",
      text: "Niagara College"
    },
    {
      key: "412a96dc-07ee-11ea-9ae0-fb929f8a1fee",
      value: "412a96dc-07ee-11ea-9ae0-fb929f8a1fee",
      text: "Nipissing College"
    },
    {
      key: "412abdcc-07ee-11ea-9ae1-b70aa691feab",
      value: "412abdcc-07ee-11ea-9ae1-b70aa691feab",
      text: "Northern College"
    },
    {
      key: "412abdcd-07ee-11ea-9ae2-6bfa7efa6d46",
      value: "412abdcd-07ee-11ea-9ae2-6bfa7efa6d46",
      text: "Ontario College of Arts"
    },
    {
      key: "412ae4be-07ee-11ea-9ae3-ab47722c1e56",
      value: "412ae4be-07ee-11ea-9ae3-ab47722c1e56",
      text: "Ridgetown Col. Agricul. Tech."
    },
    {
      key: "412ae4bf-07ee-11ea-9ae4-7788888b3f0c",
      value: "412ae4bf-07ee-11ea-9ae4-7788888b3f0c",
      text: "Ryerson College"
    },
    {
      key: "412ae4c0-07ee-11ea-9ae5-3362c355006d",
      value: "412ae4c0-07ee-11ea-9ae5-3362c355006d",
      text: "Saint Clair College"
    },
    {
      key: "412b0bba-07ee-11ea-9ae6-ef8130aad4a9",
      value: "412b0bba-07ee-11ea-9ae6-ef8130aad4a9",
      text: "Saint Lawrence College"
    },
    {
      key: "412b0bbb-07ee-11ea-9ae7-a7a8dd905ff0",
      value: "412b0bbb-07ee-11ea-9ae7-a7a8dd905ff0",
      text: "Sault Col. Applied Arts & Tech"
    },
    {
      key: "412b32ac-07ee-11ea-9ae8-439709400448",
      value: "412b32ac-07ee-11ea-9ae8-439709400448",
      text: "Seneca College"
    },
    {
      key: "412b32ad-07ee-11ea-9ae9-b317a5d7d465",
      value: "412b32ad-07ee-11ea-9ae9-b317a5d7d465",
      text: "Sheridan College"
    },
    {
      key: "412b32ae-07ee-11ea-9aea-27b8dc083fc8",
      value: "412b32ae-07ee-11ea-9aea-27b8dc083fc8",
      text: "Sir Sanford Fleming Arts &Tech"
    },
    {
      key: "412b599e-07ee-11ea-9aeb-cf9ac9ed5a3f",
      value: "412b599e-07ee-11ea-9aeb-cf9ac9ed5a3f",
      text: "La Cité collégiale"
    },
    {
      key: "412b599f-07ee-11ea-9aec-77d08fca53bf",
      value: "412b599f-07ee-11ea-9aec-77d08fca53bf",
      text: "Redeemer Reformed ChristianCol"
    },
    {
      key: "412b59a0-07ee-11ea-9aed-97ddd99968b2",
      value: "412b59a0-07ee-11ea-9aed-97ddd99968b2",
      text: "Boréal, Collège"
    },
    {
      key: "412b8090-07ee-11ea-9aee-331cb1b1a6fc",
      value: "412b8090-07ee-11ea-9aee-331cb1b1a6fc",
      text: "U of Ont. Inst. of Tech."
    },
    {
      key: "412b8091-07ee-11ea-9aef-8f456adbadcc",
      value: "412b8091-07ee-11ea-9aef-8f456adbadcc",
      text: "Assiniboine Community College"
    },
    {
      key: "412ba78c-07ee-11ea-9af0-eb8839847753",
      value: "412ba78c-07ee-11ea-9af0-eb8839847753",
      text: "Keewatin Community College"
    },
    {
      key: "412ba78d-07ee-11ea-9af1-ebe1f8f75c57",
      value: "412ba78d-07ee-11ea-9af1-ebe1f8f75c57",
      text: "Red River Community College"
    },
    {
      key: "412bce7e-07ee-11ea-9af2-1379d361af02",
      value: "412bce7e-07ee-11ea-9af2-1379d361af02",
      text: "SK Institute Applied Arts &Sci"
    },
    {
      key: "412bce7f-07ee-11ea-9af3-0f23562f54d4",
      value: "412bce7f-07ee-11ea-9af3-0f23562f54d4",
      text: "Saskatchewan Technological Ins"
    },
    {
      key: "412bce80-07ee-11ea-9af4-6f545fe63a7d",
      value: "412bce80-07ee-11ea-9af4-6f545fe63a7d",
      text: "Carlton Trail Regional College"
    },
    {
      key: "412bf570-07ee-11ea-9af5-b7a527abee68",
      value: "412bf570-07ee-11ea-9af5-b7a527abee68",
      text: "Cumberland Regional College"
    },
    {
      key: "412bf571-07ee-11ea-9af6-b7c71dc7579b",
      value: "412bf571-07ee-11ea-9af6-b7c71dc7579b",
      text: "Cypress Hills Regional College"
    },
    {
      key: "412c1c62-07ee-11ea-9af7-e73d4fb6dabd",
      value: "412c1c62-07ee-11ea-9af7-e73d4fb6dabd",
      text: "Northlands College"
    },
    {
      key: "412c1c63-07ee-11ea-9af8-2397898ef54f",
      value: "412c1c63-07ee-11ea-9af8-2397898ef54f",
      text: "North West Regional College"
    },
    {
      key: "412c1c64-07ee-11ea-9af9-438e615f60f2",
      value: "412c1c64-07ee-11ea-9af9-438e615f60f2",
      text: "Parkland Regional College"
    },
    {
      key: "412c4368-07ee-11ea-9afa-dbe12f665d3e",
      value: "412c4368-07ee-11ea-9afa-dbe12f665d3e",
      text: "Prairie West Regional College"
    },
    {
      key: "412c4369-07ee-11ea-9afb-6bc0411b5907",
      value: "412c4369-07ee-11ea-9afb-6bc0411b5907",
      text: "Saskatchewan Indian Tech Inst."
    },
    {
      key: "412c6a5a-07ee-11ea-9afc-a78be9eb5431",
      value: "412c6a5a-07ee-11ea-9afc-a78be9eb5431",
      text: "SK Inst. Applied Science &Tech"
    },
    {
      key: "412c6a5b-07ee-11ea-9afd-835120acc704",
      value: "412c6a5b-07ee-11ea-9afd-835120acc704",
      text: "SK Ed. Trng & Empl. NorthernEd"
    },
    {
      key: "412c914c-07ee-11ea-9afe-3bb774413323",
      value: "412c914c-07ee-11ea-9afe-3bb774413323",
      text: "SK Ed. Trng & Empl. Reg'l Col."
    },
    {
      key: "412c914d-07ee-11ea-9aff-dbdf41eaf625",
      value: "412c914d-07ee-11ea-9aff-dbdf41eaf625",
      text: "South East Regional College"
    },
    {
      key: "412c914e-07ee-11ea-9b00-8b5d19346d86",
      value: "412c914e-07ee-11ea-9b00-8b5d19346d86",
      text: "Pallister Institute (SIAST)"
    },
    {
      key: "412cb83e-07ee-11ea-9b01-0702a6e65ba2",
      value: "412cb83e-07ee-11ea-9b01-0702a6e65ba2",
      text: "Woodland Institute"
    },
    {
      key: "412cb83f-07ee-11ea-9b02-c7bbd1e1ea8b",
      value: "412cb83f-07ee-11ea-9b02-c7bbd1e1ea8b",
      text: "Camrose College"
    },
    {
      key: "412cb840-07ee-11ea-9b03-f3bdc575f9bf",
      value: "412cb840-07ee-11ea-9b03-f3bdc575f9bf",
      text: "Concordia College"
    },
    {
      key: "412cdf3a-07ee-11ea-9b04-4b7ff558a37b",
      value: "412cdf3a-07ee-11ea-9b04-4b7ff558a37b",
      text: "Fairview College"
    },
    {
      key: "412cdf3b-07ee-11ea-9b05-3390f737140e",
      value: "412cdf3b-07ee-11ea-9b05-3390f737140e",
      text: "Grand Prairie Regional College"
    },
    {
      key: "412cdf3c-07ee-11ea-9b06-2b393b9c5f91",
      value: "412cdf3c-07ee-11ea-9b06-2b393b9c5f91",
      text: "Grant MacEwan University"
    },
    {
      key: "412d062c-07ee-11ea-9b07-179bf185b89d",
      value: "412d062c-07ee-11ea-9b07-179bf185b89d",
      text: "Lethbridge Community College"
    },
    {
      key: "412d062d-07ee-11ea-9b08-c7a449f2cf1c",
      value: "412d062d-07ee-11ea-9b08-c7a449f2cf1c",
      text: "Medicine Hat College"
    },
    {
      key: "412d2d28-07ee-11ea-9b09-ab3c9e922d7a",
      value: "412d2d28-07ee-11ea-9b09-ab3c9e922d7a",
      text: "Mount Royal College"
    },
    {
      key: "412d2d29-07ee-11ea-9b0a-db8665ecff7b",
      value: "412d2d29-07ee-11ea-9b0a-db8665ecff7b",
      text: "Northern Alberta Inst. of Tech"
    },
    {
      key: "412d2d2a-07ee-11ea-9b0b-2bf8cd4fbf21",
      value: "412d2d2a-07ee-11ea-9b0b-2bf8cd4fbf21",
      text: "Old Sun Community College"
    },
    {
      key: "412d541a-07ee-11ea-9b0c-7f18f97787b1",
      value: "412d541a-07ee-11ea-9b0c-7f18f97787b1",
      text: "Red Deer College"
    },
    {
      key: "412d541b-07ee-11ea-9b0d-73a520ad0e50",
      value: "412d541b-07ee-11ea-9b0d-73a520ad0e50",
      text: "Southern Alberta Inst. of Tech"
    },
    {
      key: "412d541c-07ee-11ea-9b0e-47cd11a5fbf7",
      value: "412d541c-07ee-11ea-9b0e-47cd11a5fbf7",
      text: "Vermilion Campus (LakelandCol)"
    },
    {
      key: "412d7b0c-07ee-11ea-9b0f-7fb092591be0",
      value: "412d7b0c-07ee-11ea-9b0f-7fb092591be0",
      text: "Alberta Vocational College"
    },
    {
      key: "412d7b0d-07ee-11ea-9b10-131ffb606975",
      value: "412d7b0d-07ee-11ea-9b10-131ffb606975",
      text: "Augustana University College"
    },
    {
      key: "412da208-07ee-11ea-9b11-3724bb2f642b",
      value: "412da208-07ee-11ea-9b11-3724bb2f642b",
      text: "Keyano College"
    },
    {
      key: "412da209-07ee-11ea-9b12-8bc4d847e3b8",
      value: "412da209-07ee-11ea-9b12-8bc4d847e3b8",
      text: "Lakeland College"
    },
    {
      key: "412da20a-07ee-11ea-9b13-0f9b3bbf483c",
      value: "412da20a-07ee-11ea-9b13-0f9b3bbf483c",
      text: "British Columbia Inst. of Tech"
    },
    {
      key: "412dc8fa-07ee-11ea-9b14-93ee89c95051",
      value: "412dc8fa-07ee-11ea-9b14-93ee89c95051",
      text: "British Columbia Mining Col."
    },
    {
      key: "412dc8fb-07ee-11ea-9b15-cf130b4922e4",
      value: "412dc8fb-07ee-11ea-9b15-cf130b4922e4",
      text: "Kamloops College"
    },
    {
      key: "412dc8fc-07ee-11ea-9b16-a7d23c9f217d",
      value: "412dc8fc-07ee-11ea-9b16-a7d23c9f217d",
      text: "Camosun College"
    },
    {
      key: "412defec-07ee-11ea-9b17-6fe03a9bae9b",
      value: "412defec-07ee-11ea-9b17-6fe03a9bae9b",
      text: "Capilano College"
    },
    {
      key: "412defed-07ee-11ea-9b18-bbcea2040adf",
      value: "412defed-07ee-11ea-9b18-bbcea2040adf",
      text: "Cariboo, University College of"
    },
    {
      key: "412e16e8-07ee-11ea-9b19-e7cecb18ea09",
      value: "412e16e8-07ee-11ea-9b19-e7cecb18ea09",
      text: "Columbia College"
    },
    {
      key: "412e16e9-07ee-11ea-9b1a-9bc609dea661",
      value: "412e16e9-07ee-11ea-9b1a-9bc609dea661",
      text: "Douglas College"
    },
    {
      key: "412e3dda-07ee-11ea-9b1b-23360fddae5e",
      value: "412e3dda-07ee-11ea-9b1b-23360fddae5e",
      text: "Kwantlen Polytechnic Uni."
    },
    {
      key: "412e3ddb-07ee-11ea-9b1c-bf9a84a7f0de",
      value: "412e3ddb-07ee-11ea-9b1c-bf9a84a7f0de",
      text: "Malaspina College"
    },
    {
      key: "412e64cc-07ee-11ea-9b1d-cb96eea03081",
      value: "412e64cc-07ee-11ea-9b1d-cb96eea03081",
      text: "New Caledonia, College of"
    },
    {
      key: "412e64cd-07ee-11ea-9b1e-eb8b7bad88bd",
      value: "412e64cd-07ee-11ea-9b1e-eb8b7bad88bd",
      text: "Okanagan University College"
    },
    {
      key: "482a25e6-ffe6-11e9-a69e-362b9e155667",
      value: "482a25e6-ffe6-11e9-a69e-362b9e155667",
      text: "TestSchool1"
    },
    {
      key: "4d205016-ffe6-11e9-8d71-362b9e155667",
      value: "4d205016-ffe6-11e9-8d71-362b9e155667",
      text: "TestSchool2"
    }
  ],
  security: [
    {
      key: "408098a6-07ee-11ea-980a-634394d6b73a",
      value: "408098a6-07ee-11ea-980a-634394d6b73a",
      text: "Reliability"
    },
    {
      key: "4080c0e2-07ee-11ea-980b-0bdc14880eda",
      value: "4080c0e2-07ee-11ea-980b-0bdc14880eda",
      text: "Secret"
    },
    {
      key: "4080e694-07ee-11ea-980c-cf0ef0261976",
      value: "4080e694-07ee-11ea-980c-cf0ef0261976",
      text: "Top Secret"
    },
    {
      key: "82c3a9cc-ff44-11e9-aad5-362b9e155667",
      value: "82c3a9cc-ff44-11e9-aad5-362b9e155667",
      text: "testSecClearEn1"
    },
    {
      key: "882ef330-ff44-11e9-8f0b-362b9e155667",
      value: "882ef330-ff44-11e9-8f0b-362b9e155667",
      text: "testSecClearEn2"
    }
  ],
  talentMatrixResult: [
    {
      key: "40b31ec0-07ee-11ea-9813-6b10aa3ca94a",
      value: "40b31ec0-07ee-11ea-9813-6b10aa3ca94a",
      text: "Early Promise"
    },
    {
      key: "40b36cae-07ee-11ea-9814-a78559fa44a7",
      value: "40b36cae-07ee-11ea-9814-a78559fa44a7",
      text: "Exceptional Talent"
    },
    {
      key: "40b36caf-07ee-11ea-9815-53d815adfac5",
      value: "40b36caf-07ee-11ea-9815-53d815adfac5",
      text: "Future Achiever"
    },
    {
      key: "40b393aa-07ee-11ea-9816-738091d0a491",
      value: "40b393aa-07ee-11ea-9816-738091d0a491",
      text: "Growth Employee"
    },
    {
      key: "40b393ab-07ee-11ea-9817-bf4c0fae2805",
      value: "40b393ab-07ee-11ea-9817-bf4c0fae2805",
      text: "Solid Contributor"
    },
    {
      key: "40b393ac-07ee-11ea-9818-7fdeac598280",
      value: "40b393ac-07ee-11ea-9818-7fdeac598280",
      text: "Solid Professional"
    },
    {
      key: "40b3bc04-07ee-11ea-9819-4fc12ab1c656",
      value: "40b3bc04-07ee-11ea-9819-4fc12ab1c656",
      text: "Strong Performer"
    },
    {
      key: "40b3bc05-07ee-11ea-981a-4b5d5d006a47",
      value: "40b3bc05-07ee-11ea-981a-4b5d5d006a47",
      text: "Talent Risk"
    },
    {
      key: "40b3e2d8-07ee-11ea-981b-7f9a0928724a",
      value: "40b3e2d8-07ee-11ea-981b-7f9a0928724a",
      text: "Trusted Professional"
    },
    {
      key: "ddc02520-ff45-11e9-8f0b-362b9e155667",
      value: "ddc02520-ff45-11e9-8f0b-362b9e155667",
      text: "testTalentMatrixResultEn1"
    },
    {
      key: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
      value: "e4f5d678-ff45-11e9-8f0b-362b9e155667",
      text: "testTalentMatrixResultEn2"
    }
  ],
  tenure: [
    {
      key: "407b1e26-07ee-11ea-9802-1bf37ad2f938",
      value: "407b1e26-07ee-11ea-9802-1bf37ad2f938",
      text: "Acting"
    },
    {
      key: "407b6c0a-07ee-11ea-9803-e317f4efd618",
      value: "407b6c0a-07ee-11ea-9803-e317f4efd618",
      text: "Assignment"
    },
    {
      key: "407b6c0b-07ee-11ea-9804-77cf2c562b75",
      value: "407b6c0b-07ee-11ea-9804-77cf2c562b75",
      text: "Deployment"
    },
    {
      key: "407b92fc-07ee-11ea-9805-ff0f1fe8993d",
      value: "407b92fc-07ee-11ea-9805-ff0f1fe8993d",
      text: "Indeterminate"
    },
    {
      key: "407b92fd-07ee-11ea-9806-7bbff36f26e5",
      value: "407b92fd-07ee-11ea-9806-7bbff36f26e5",
      text: "Secondment"
    },
    {
      key: "407b92fe-07ee-11ea-9807-3fd2c9599a68",
      value: "407b92fe-07ee-11ea-9807-3fd2c9599a68",
      text: "Student"
    },
    {
      key: "407bb9f8-07ee-11ea-9808-3b22d6d9532e",
      value: "407bb9f8-07ee-11ea-9808-3b22d6d9532e",
      text: "Casual"
    },
    {
      key: "407bb9f9-07ee-11ea-9809-131b0deb26d7",
      value: "407bb9f9-07ee-11ea-9809-131b0deb26d7",
      text: "Term"
    },
    {
      key: "725c6d40-ddc3-4a55-bdf5-f85155091acd",
      value: "725c6d40-ddc3-4a55-bdf5-f85155091acd",
      text: "TestActing"
    },
    {
      key: "e79756f5-ad53-4bad-a03c-22e8f8bf05de",
      value: "e79756f5-ad53-4bad-a03c-22e8f8bf05de",
      text: "TestCasual"
    }
  ]
};

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
  },
  {
    name: "setup.projects",
    form: ProjectsFormController
  }
];

class SetupLayoutController extends Component {
  constructor(props) {
    super(props);

    const { intl } = this.props;

    this.state = {
      formIndex: 0,
      maxEnabledIndex: 0,
      editProfileOptions: null,
      gedsInfoList: null,
      gedsIndex: null
    };

    this.getSetupData.bind(this);
    this.setFormIndex = this.setFormIndex.bind(this);
    this.changes = {};
    this.handleRegister = this.handleRegister.bind(this);
    this.setGedsIndex = this.setGedsIndex.bind(this);
    this.formList = [];
    formList.forEach((element, index) =>
      this.formList.push({
        ...element,
        name: intl.formatMessage({ id: element.name })
      })
    );

    //this.getSetupData();
  }

  render() {
    let gedsInfoList = [
      {
        id:
          "Q049TUVOQS5NQUNIQURPQENBTkFEQS5DQSxPVT1CTFNELURTTEEsT1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
        firstName: "Mena",
        lastName: "Machado",
        jobTitle: {
          en: "Manager",
          fr: "Gestionnaire"
        },
        telephone: "343-291-1366",
        email: "",
        organization: [
          {
            organizationId: "T1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Innovation, Science and Economic Development Canada",
                fr: "Innovation, Sciences et Développement économique Canada"
              }
            }
          },
          {
            organizationId: "T1U9RFRTUy1TU1ROLE9VPUlTRUQtSVNERSxPPUdDLEM9Q0E=",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
                fr: "SECTEUR DU SERVICE DE TRANSFORMATION NUMÉRIQUE"
              }
            }
          },
          {
            organizationId:
              "T1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Chief Information Office",
                fr: "Bureau principal de l'information"
              }
            }
          },
          {
            organizationId:
              "T1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Digital Services Division",
                fr: "Division des services numériques"
              }
            }
          },
          {
            organizationId:
              "T1U9QkxTRC1EU0xBLE9VPURTRC1EU04sT1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Business Line Solutions Directorate",
                fr: "Direction des solutions des lignes d'affaires"
              }
            }
          }
        ]
      },
      {
        id:
          "Q049TUVOQS5NQUNIQURPQENBTkFEQS5DQSxPVT1CTFNELURTTEEsT1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNC",
        cellphone: "221-543-3345",
        firstName: "Mena",
        lastName: "Machado",
        jobTitle: {
          en: "Other Manager",
          fr: "Gestionnaire"
        },
        telephone: "343-291-1367",
        email: "mane.machado@canada.ca",
        organization: [
          {
            organizationId: "T1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Innovation, Science and Economic Development Canada",
                fr: "Innovation, Sciences et Développement économique Canada"
              }
            }
          },
          {
            organizationId: "T1U9RFRTUy1TU1ROLE9VPUlTRUQtSVNERSxPPUdDLEM9Q0E=",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "DIGITAL TRANSFORMATION SERVICE SECTOR",
                fr: "SECTEUR DU SERVICE DE TRANSFORMATION NUMÉRIQUE"
              }
            }
          },
          {
            organizationId:
              "T1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Chief Information Office",
                fr: "Bureau principal de l'information"
              }
            }
          },
          {
            organizationId:
              "T1U9RFNELURTTixPVT1DSU8tQlBJLE9VPURUU1MtU1NUTixPVT1JU0VELUlTREUsTz1HQyxDPUNB",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Digital Services Division",
                fr: "Division des services numériques"
              }
            }
          },
          {
            organizationId:
              "T1U9QkxTRC1EU0xBLE9VPURTRC1EU04sT1U9Q0lPLUJQSSxPVT1EVFNTLVNTVE4sT1U9SVNFRC1JU0RFLE89R0MsQz1DQQ==",
            organization: {
              addressInformation: {
                address: {
                  en: "235 Queen Street",
                  fr: "235, rue Queen"
                },
                city: {
                  en: "Ottawa",
                  fr: "Ottawa"
                },
                province: {
                  en: "Ontario",
                  fr: "Ontario"
                },
                country: {
                  en: "Canada",
                  fr: "Canada"
                },
                pc: "K1A 0H5",
                pobox: {
                  en: "",
                  fr: ""
                },
                mailstop: ""
              },
              description: {
                en: "Business Line Solutions Directorate",
                fr: "Direction des solutions des lignes d'affaires"
              }
            }
          }
        ]
      }
    ];

    gedsInfoList = gedsInfoList.map(element => ({
      ...element,
      organization: element.organization.map(({ organization }, i) => {
        return { description: organization.description, tier: i };
      })
    }));

    const gedsInfoo = this.setGedsInfo(
      gedsInfoList,
      localStorage.getItem("lang")
    );

    if (!this.state.gedsInfoList) this.setState({ gedsInfoList: gedsInfoo });

    return (
      <SetupLayoutView
        setGedsIndex={this.setGedsIndex}
        gedsIndex={this.state.gedsIndex}
        gedsInfoList={gedsInfoo}
        editProfileOptions={epo}
        formIndex={this.state.formIndex}
        formList={this.formList}
        handleRegister={this.handleRegister}
        isEarlyRegister={this.state.formIndex !== formList.length - 1}
        maxEnabledIndex={this.state.maxEnabledIndex}
        profileInfo={this.changes}
        setFormChanges={this.setFormChanges.bind(this, this.state.formIndex)}
        setFormIndex={this.setFormIndex}
      />
    );
  }

  setGedsIndex(index) {
    const gedsInfo = this.state.gedsInfoList[index];
    this.changes = {
      ...this.changes,
      firstName: gedsInfo.firstName,
      lastName: gedsInfo.lastName,
      email: gedsInfo.email,
      jobTitle: gedsInfo.jobTitle,
      telephone: gedsInfo.telephone,
      cellphone: gedsInfo.cellphone
    };

    this.setState({ gedsIndex: index });
  }

  /*getCareerMobility,
  getCompetency,
  getDiploma,
  getGroupLevel,
  getKeyCompetency,
  getLocation,
  getSchool,
  getSecurityClearance,
  getSkill,
  getTalentMatrixResult,
  getTenure
  */

  setGedsInfo(info, language, specialUndefineds) {
    if (specialUndefineds && typeof info == "object") {
      for (let key in specialUndefineds) {
        if (info[key] !== null) {
          delete specialUndefineds[key];
        }
      }
      info = Object.assign(info, specialUndefineds);
    }
    if (typeof info === "object") {
      if (info === null) {
        const { intl } = this.props;
        return intl.formatMessage({ id: "profile.undefined" });
      } else if (Array.isArray(info)) {
        let returnArray = [];
        info.forEach(element =>
          returnArray.push(this.setGedsInfo(element, language))
        );
        return returnArray;
      } else if ("en" in info) {
        return info[language];
      } else {
        let returnObject = {};
        for (let key in info) {
          returnObject[key] = this.setGedsInfo(info[key], language);
        }
        return returnObject;
      }
    }
    return info;
  }

  async getSetupData() {
    const { intl } = this.props;
    let skillOptions = formatOptions(
      (await axios.get(backendAddress + "api/option/getSkill")).data
    );
    let competencyOptions = formatOptions(
      (await axios.get(backendAddress + "api/option/getCompetency")).data
    );

    /*let gedsInfoList = await axios.get(
      backendAddress + "api/profGen/" + localStorage.getItem("userId")
    ).data;*/
    let epo = {
      skills: skillOptions,
      careerMobility: formatOptions(
        (await axios.get(backendAddress + "api/option/getCareerMobility")).data
      ),
      diploma: formatOptions(
        (await axios.get(backendAddress + "api/option/getDiploma")).data
      ),
      groupOrLevel: formatOptions(
        (await axios.get(backendAddress + "api/option/getGroupLevel")).data
      ),
      competencies: competencyOptions,
      developmentalGoals: formatOptions(
        (
          await axios.get(
            "http://localhost:8080/api/option/getDevelopmentalGoals"
          )
        ).data
      ),
      location: formatOptions(
        (await axios.get(backendAddress + "api/option/getLocation")).data
      ),
      school: formatOptions(
        (await axios.get(backendAddress + "api/option/getSchool")).data
      ),
      security: formatOptions(
        (await axios.get(backendAddress + "api/option/getSecurityClearance"))
          .data
      ),
      talentMatrixResult: formatOptions(
        (await axios.get(backendAddress + "api/option/getTalentMatrixResult"))
          .data
      ),
      tenure: formatOptions(
        (await axios.get(backendAddress + "api/option/getTenure")).data
      )
    };

    console.log(JSON.stringify(epo));

    this.setState({
      editProfileOptions: epo
    });
    this.forceUpdate();
  }

  handleRegister() {
    const { redirectFunction } = this.props;
    console.log("registering with data", this.changes);
    axios
      .post(
        backendAddress + "api/profile/" + localStorage.getItem("userId"),
        this.changes
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    redirectFunction("/");
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
