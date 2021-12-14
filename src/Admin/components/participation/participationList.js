import { Datagrid, List, TextField } from "ra-ui-materialui";
import React from "react";

const ParticipationList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='namelatin' label='Fullname' />
        <TextField source='datepLace' label='Date & pLace birth' />
        <TextField source='nationality' />
        <TextField source='occupation' />
        <TextField source='country' />
        <TextField source='adress' />
        <TextField source='teloffice' label='Tel office' />
        <TextField source='telmobile' label='Mobile' />
        <TextField source='emailoffice' label='Email Office' />
        <TextField source='emailpersonal' label='Personal Email' />
        <TextField source='category' />
      </Datagrid>
    </List>
  );
};

export default ParticipationList;
