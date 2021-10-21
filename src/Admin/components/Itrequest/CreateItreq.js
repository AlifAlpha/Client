import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CreateItreq = (props) => {
  return (
    <Create title='create new Department' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Create>
  );
};

export default CreateItreq;
