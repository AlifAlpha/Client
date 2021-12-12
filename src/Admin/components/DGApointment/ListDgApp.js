import { Datagrid, DateField, List, TextField } from "ra-ui-materialui";
import React from "react";
// import UserFilter from "./UserFilter";

export const DgappList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='appType' />
      <DateField showTime source='startMeet' />
      <TextField source='name' />
      <TextField source='title' />
      <DateField showTime source='dateDurStart' />
      <DateField showTime source='dateDurEnd' />
      {/* <TextField source='timeDurStart' />
      <TextField source='timeDurEnd' /> */}
      <TextField source='purpose' />
    </Datagrid>
  </List>
);
