import {
  Datagrid,
  List,
  EditButton,
  DeleteButton,
  TextField,
} from "ra-ui-materialui";
import React from "react";

export const ListLeaveType = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='name' />
        <EditButton basePath='leavetype' />
        <DeleteButton basePath='leavetype' />
      </Datagrid>
    </List>
  );
};
