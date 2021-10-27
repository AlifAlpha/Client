import { Datagrid, DateField, List, TextField } from "ra-ui-materialui";
import React from "react";

export const NotedgList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='eventName' />
      <TextField source='location' />
      <DateField source='eventDate' />
      <TextField source='departmentName' />
      <TextField source='initiativeIs' />
      <TextField source='stakeHoldersMember' />
      <TextField source='frequency' />
      <TextField source='stakeHoldersNoMember' />
      <TextField source='stakeHolderspartner' />
      <TextField source='initiativeNeeds' />
      <TextField source='dgParticipation' />
      <TextField source='speechTopic' />
      <TextField source='speechPoints' />
      <TextField source='speechDuration' />
      <DateField source='speechDate' />
      <TextField source='eventAttended' />
      <TextField source='eventPartnership' />
      <TextField source='eventStateMember' />
      <TextField source='numCoverage' />
      <TextField source='coverageFor' />
      <TextField source='inpactInternal' />
      <TextField source='internalSupport' />
      <TextField source='internalSupportNeededSup' />
      <TextField source='internalSupportNeededSpo' />

      <TextField source='DGDirections' />
    </Datagrid>
  </List>
);
