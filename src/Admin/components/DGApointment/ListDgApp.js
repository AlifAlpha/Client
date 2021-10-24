import { Datagrid, DateField, List, TextField } from "ra-ui-materialui";
import React from "react";
// import UserFilter from "./UserFilter";

export const DgappList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='appType' />
      <DateField source='startMeet' />
      <TextField source='timeMeet' />
      <TextField source='name' />
      <TextField source='title' />
      <DateField source='dateDurStart' />
      <DateField source='dateDurEnd' />
      <TextField source='timeDurStart' />
      <TextField source='timeDurEnd' />
      <TextField source='purpose' />
    </Datagrid>
  </List>
);
