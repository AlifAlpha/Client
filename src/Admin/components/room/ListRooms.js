import { Datagrid, List, TextField } from "ra-ui-materialui";
import React from "react";

export const RoomList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
    </Datagrid>
  </List>
);
