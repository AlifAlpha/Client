import {
  // BooleanField,
  // ChipField,
  Datagrid,
  // DateField,
  EmailField,
  List,
  TextField,
} from "ra-ui-materialui";
import React from "react";
// import UserFilter from "./UserFilter";

export const EmployeeList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='uid' />
      <TextField source='name' />
      <TextField source='phone' />
      <EmailField source='email' />
    </Datagrid>
  </List>
);
