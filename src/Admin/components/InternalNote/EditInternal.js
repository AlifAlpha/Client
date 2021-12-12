import React from "react";

import { Edit, SimpleForm, TextInput, DateInput } from "ra-ui-materialui";

export const NotedgEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source='referencing' />
      {/* <TextInput source='initiativeNeeds' />
      <TextInput source='eventPartnership' />
      <TextInput source='coverageFor' />
      <TextInput source='inpactInternal' />
      <TextInput source='internalSupport' />
      <TextInput source='departmentName' />
      <TextInput source='eventName' />
      <TextInput source='location' />
      <DateInput source='eventDate' />
      <TextInput source='initiativeIs' />
      <TextInput source='ferequincy' label='Frequency' />
      <TextInput source='stakeHoldersMember' />
      <TextInput source='stakeHoldersNoMember' />
      <TextInput source='stakeHolderspartner' />
      <TextInput source='dgParticipation' />
      <TextInput source='speechTopic' />
      <TextInput source='speechPoints' />
      <TextInput source='speechDuration' />
      <DateInput source='speechDate' />
      <TextInput source='eventAttended' />
      <TextInput source='eventStateMember' />
      <TextInput source='numCoverage' />
      <TextInput source='internalSupportNeededSup' />
      <TextInput source='internalSupportNeededSpo' /> */}
      <TextInput source='DGDirections' />
    </SimpleForm>
  </Edit>
);
