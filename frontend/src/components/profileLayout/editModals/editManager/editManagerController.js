import React from "react";

import FieldManagingComponent from "../common/fieldManagingComponent";
import EditMangerView from "./editManagerView";

export default class EditMangerController extends FieldManagingComponent {
  render() {
    return <EditMangerView profileInfo={{ manager: null }} {...this.props} />;
  }
}
