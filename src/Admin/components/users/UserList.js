import {
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from "ra-ui-materialui";
import React from "react";
import UserFilter from "./UserFilter";

const UserList = (props) => {
  return (
    <List filters={<UserFilter />} bulkActionButtons={false} {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='name' />
        <EmailField source='email' />
        <BooleanField source='isActivated' />
        <ChipField source='role' />
        <DateField source='created' />
      </Datagrid>
    </List>
  );
};

export default UserList;
