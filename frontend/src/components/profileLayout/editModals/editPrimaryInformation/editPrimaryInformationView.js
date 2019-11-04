import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Form, Select, Input, Dropdown } from "semantic-ui-react";

import EditModalController, {
  generateCommonProps
} from "../common/editModal/editModalController.js";
import "./editPrimaryInformation.css";

/*
const generateTempProps = (name, control, props, dropdownControl) => {
  const { profileInfo, dropdownOptions, intl, updateField } = props;

  //convert camelcase to `.` seperated and add `profile.` to beginning
  let intlId = "profile." + name.replace(/([A-Z])/g, ".$1").toLowerCase();

  let commonProps = {
    control: control,
    fluid: true,
    label: intl.formatMessage({ id: intlId }),
    name: name,
    onChange: updateField,
    placeholder: profileInfo[name]
  };

  if (dropdownControl) {
    commonProps.options = dropdownOptions[name];
    commonProps.defaultValue = profileInfo[name];
    commonProps.placeholder = null;
  } else if (control === Checkbox) {
    commonProps.defaultChecked = profileInfo[name];
  } else if (control === Select) {
    commonProps.options = dropdownOptions[name];
  }

  return commonProps;
};*/

class EditPrimaryInformationView extends Component {
  render() {
    const { handleApply, intl } = this.props;
    return (
      <EditModalController
        handleApply={handleApply}
        name={intl.formatMessage({ id: "profile.edit.primary.information" })}
      >
        <Form onSubmit={handleApply}>
          <Form.Group fluid widths="equal">
            <Form.Field
              {...generateCommonProps("firstName", Input, this.props)}
            />
            <Form.Field
              {...generateCommonProps("lastName", Input, this.props)}
            />
          </Form.Group>

          <Form.Group fluid>
            <Form.Field
              width={4}
              {...generateCommonProps("telephone", Input, this.props)}
            />
            <Form.Field
              width={4}
              {...generateCommonProps("cellphone", Input, this.props)}
            />
            <Form.Field width={8}>
              <label>Email</label>
              <Input
                defaultValue={this.props.profileInfo["email"].replace(
                  "@canada.ca",
                  ""
                )}
                label={
                  <Dropdown
                    defaultValue="@canada.ca"
                    options={[
                      {
                        key: "@canada.ca",
                        text: "@canada.ca",
                        value: "@canada.ca"
                      }
                    ]}
                  />
                }
                labelPosition="right"
              />
            </Form.Field>
          </Form.Group>
          <Form.Field
            {...generateCommonProps("location", Select, this.props)}
          />

          <Form.Field {...generateCommonProps("team", Input, this.props)} />
          <Form.Field
            {...generateCommonProps("directorate", Select, this.props)}
          />
          <Form.Field
            {...generateCommonProps("division", Select, this.props)}
          />
          <Form.Field {...generateCommonProps("branch", Select, this.props)} />
          <Form.Field {...generateCommonProps("sector", Select, this.props)} />
          <Form.Field
            {...generateCommonProps("department", Select, this.props)}
          />
        </Form>
      </EditModalController>
    );
  }
}

export default injectIntl(EditPrimaryInformationView);
