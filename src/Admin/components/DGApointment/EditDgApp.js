import { DateInput, Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

export const DgappEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='appType' />
      <DateInput source='startMeet' />
      <TextInput source='timeMeet' />
      <TextInput source='name' />
      <TextInput source='title' />
      <DateInput source='dateDurStart' />
      <DateInput source='dateDurEnd' />
      <TextInput source='timeDurStart' />
      <TextInput source='timeDurEnd' />
      <TextInput source='purpose' />
    </SimpleForm>
  </Edit>
);
