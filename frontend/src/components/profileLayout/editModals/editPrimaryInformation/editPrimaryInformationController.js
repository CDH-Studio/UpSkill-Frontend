import React from "react";
import FieldManagingComponent from "../common/fieldManagingComponent";
import EditPrimaryInformationView from "./editPrimaryInformationView";

export default class EditPrimaryInformationController extends FieldManagingComponent {
  render() {
    console.log("handle apply", this.handleApply);
    return (
      <EditPrimaryInformationView
        dropdownOptions={{
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
        handleApply={this.handleApply}
        updateField={this.updateField}
        {...this.props}
      />
    );
  }
}
