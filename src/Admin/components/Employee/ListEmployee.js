import {
  // BooleanField,
  // ChipField,
  Datagrid,
  // DateField,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "ra-ui-materialui";
import React from "react";
// import UserFilter from "./UserFilter";

export const EmployeeList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='uid' />
      <TextField source='title' />
      <TextField source='name' />
      <ReferenceField
        sortable={false}
        label='departments'
        source='department'
        reference='department'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='phone' />
      <EmailField source='email' />
    </Datagrid>
  </List>
);
