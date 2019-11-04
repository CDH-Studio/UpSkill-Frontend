import React, { Component } from "react";

import {EditableConsumer} from '../editableProvider/editableProvider';

import EditWrapperView from "./editWrapperView";

export default class EditWrapperController extends Component {
  render() {
    return(
    <EditableConsumer>
     {props => 
        <EditWrapperView {...Object.assign({}, props, this.props)} />
      }
    </EditableConsumer>);
  }
}

EditWrapperController.defaultProps = {
  buttonPosition: "innerButton",
  wrapperType: "defaultWrapper"
};
