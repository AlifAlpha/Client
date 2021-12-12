import {
  DateInput,
  Edit,
  ReferenceArrayInput,
  // ReferenceField,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

export const ItreqformEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='itreq' />
      <TextInput source='eventName' />
      <ReferenceInput
        sortable={false}
        label='Event coordinator'
        source='eventCoordinator'
        reference='employee'
      >
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextInput source='phone' />
      <ReferenceArrayInput source='itreq' reference='itreq'>
        <SelectArrayInput optionText='name' />
      </ReferenceArrayInput>
      <DateInput source='start' />
      <TextInput source='time' />
      <TextInput source='location' />
    </SimpleForm>
  </Edit>
);

export default ItreqformEdit;
