import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import React from "react";

export const EmployeeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='uid' />
      <TextInput source='name' />
      <TextInput source='phone' />
      <TextInput source='email' />
    </SimpleForm>
  </Edit>
);
