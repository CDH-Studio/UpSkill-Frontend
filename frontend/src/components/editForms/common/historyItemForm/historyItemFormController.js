import React, { Component } from "react";

import FieldManagingComponent from "../FormTools";

import EditHistoryItemView from "./editHistoryItemView";

export default class EditHistoryItemController extends FieldManagingComponent {
  constructor(props) {
    super(props);

    const {onChangeFuncs, transformOnChangeValueFuncs, tempFields} = this.props;
    this.onChangeFuncs = onChangeFuncs;
    this.transformOnChangeValueFuncs = transformOnChangeValueFuncs;
    this.tempFields = tempFields;

  }

  render() {
    const { item } = this.props;
    const {      
      contentName,
      headerName,
      index,
      intl,
      item,
      removeItemByIndex,
      subheaderName,
      onFieldChange,
      onTempFieldChange} = this.props;
      
    return (
      <EditHistoryItemView onChange={onChange} 
      
      contentName={contentName}
      headerName={headerName}
      index={index}
      intl={intl}
      item={item}
      removeItemByIndex={removeItemByIndex}
      subheaderName={subheaderName}
      onFieldChange={onFieldChange}
      onTempFieldChange={onTempFieldChange}
      {...this.props} />
    );
  }


  setField(name,value){
    const {index, setContainerField} = this.props;
    setContainerField(index,name,value); 
    super.setField(name,value);
  }

}
