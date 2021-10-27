import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateLeavetype = (props) => {
  return (
    <Create title='create leave type' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Create>
  );
};
