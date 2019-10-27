import React, { Component } from "react";
import {FormattedMessage, injectIntl } from "react-intl";
import { Modal } from 'semantic-ui-react'

import './genericEditModal.css';

class genericEditModalView extends Component {
  render() {
    const {buttonBackgroundColor, buttonClass, buttonColor, children, name} = this.props;

    return (
        <Modal trigger={<p className={buttonClass} style={{backgroundColor:buttonBackgroundColor, color:buttonColor}}>[<FormattedMessage id="profile.edit"/>]</p>}>
        <Modal.Header>{name}</Modal.Header>
        <Modal.Content>
           {children}
        </Modal.Content>
      </Modal>
    );
  }
}

export default injectIntl(genericEditModalView);