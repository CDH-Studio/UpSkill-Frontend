import React, { Component } from "react";
import { generateCommonFormProps } from "../../../functions/formTools";
import { Form, Select } from "semantic-ui-react";
import FormButtonsController from "../common/formButtons/formButtonsController";
import { injectIntl, FormattedMessage } from "react-intl";

import "../common/form.css";

class CareerInterestsFormView extends Component {
  render() {
    const {
      editProfileOptions,
      handleCancel,
      handleNext,
      handlePrevious,
      handleRegister,
      intl,
      isEarlyRegister,
      onFieldChange,
      onSubmit,
      profileInfo
    } = this.props;

    const generateProps = generateCommonProps.bind(this, this.props);

    return (
      <Form onSubmit={onSubmit}>
        <Form.Field
          {...generateProps("interestedInRemote", Select)}
          options={[
            {
              key: null,
              value: null,
              text: intl.formatMessage({ id: "profile.do.not.specify" })
            },
            {
              key: true,
              value: true,
              text: intl.formatMessage({ id: "profile.yes" })
            },
            {
              key: false,
              value: false,
              text: intl.formatMessage({ id: "profile.no" })
            }
          ]}
        />
        <Form.Field fluid={true} name="relocationLocations">
          <label>
            <FormattedMessage id="profile.willing.to.relocate.to" />
          </label>
          <Select
            className="editTagsDropdown"
            search
            multiple
            defaultValue={
              profileInfo["relocationLocations"] &&
              profileInfo["relocationLocations"].map(
                element => element.locationId
              )
            }
            name="relocationLocations"
            onChange={onFieldChange}
            options={editProfileOptions["willingToRelocateTo"]}
          />
        </Form.Field>

        {/* <Form.Field fluid={true} name="lookingForNewJob">
          <label>
            <FormattedMessage id="profile.looking.for.new.job" />
          </label>
          <Select
            className="editTagsDropdown"
            search
            defaultValue={
              profileInfo["lookingForANewJob"] &&
              profileInfo["lookingForANewJob"].map(element => element.id)
            }
            name="lookingForNewJob"
            onChange={onFieldChange}
            options={editProfileOptions["lookingForANewJob"]}
          />
        </Form.Field> */}
        {/* <Form.Field {...generateProps("security", Select)} /> */}
        <Form.Field {...generateProps("lookingForNewJob", Select)} />
        <FormButtonsController
          handleApply={onSubmit}
          handleCancel={handleCancel}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleRegister={handleRegister}
          isEarlyRegister={isEarlyRegister}
        />
      </Form>
    );
  }
}

export default injectIntl(CareerInterestsFormView);
