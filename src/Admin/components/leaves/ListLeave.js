import {
  Datagrid,
  ReferenceField,
  List,
  TextField,
  DateField,
} from "ra-ui-materialui";
import React from "react";

export const LeaveList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <ReferenceField
        sortable={false}
        label='Leave Type'
        source='leaveType'
        reference='leavetype'
      >
        <TextField source='name' />
      </ReferenceField>
      <DateField source='start' />
      <DateField source='end' />
      <ReferenceField
        sortable={false}
        label='employee'
        source='substitut'
        reference='employee'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='statu' />
    </Datagrid>
  </List>
);
