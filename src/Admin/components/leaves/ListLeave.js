import { Datagrid, List, TextField, DateField } from "ra-ui-materialui";
import React from "react";

export const LeaveList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='statu' />
      <DateField source='start' />
      <DateField source='end' />
      <TextField source='name' />
      <TextField source='leaveType' />
      <TextField source='substitut' />
    </Datagrid>
  </List>
);
