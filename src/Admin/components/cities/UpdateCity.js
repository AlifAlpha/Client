import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UpdateCity = (props) => {
  return (
    <Edit title='create city' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
      </SimpleForm>
    </Edit>
  );
};

export default UpdateCity;
