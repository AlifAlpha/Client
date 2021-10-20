import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateEmployee = (props) => {
  return (
    <Create title='create employee' {...props}>
      <SimpleForm>
        <TextInput source='uid' />
        <TextInput source='name' />
        <TextInput source='phone' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  );
};
