import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const UpdateLeaveType = (props) => {
  return (
    <Edit title='Update Leave type' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  );
};
