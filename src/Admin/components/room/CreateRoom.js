import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const CreateRoom = (props) => {
  return (
    <Create title='create room' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Create>
  );
};
