import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CityCreate = (props) => {
  return (
    <Create title='create city' {...props}>
      <SimpleForm>
        <TextInput source='name' />
      </SimpleForm>
    </Create>
  );
};

export default CityCreate;
