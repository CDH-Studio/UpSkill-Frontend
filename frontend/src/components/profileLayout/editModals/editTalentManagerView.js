import React, { Component } from "react";
import { FormattedMessage, injectIntl } from 'react-intl';

import GenericEditModalController from './generic/genericEditModalController.js';
import './editTalentManager.css';

class EditTalentManagerView extends Component {
  render() {
    const {intl} = this.props;
    return (
        <GenericEditModalController name={intl.formatMessage({id:'profile.edit.primary.information'})}>
            <div>this is div2</div>
            <div>more div2</div>
        </GenericEditModalController>
    );
  }
}

export default injectIntl(EditTalentManagerView);